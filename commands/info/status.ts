/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Command, CommandArguments, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";
import fetch from "node-fetch";

import * as constants from "../../utils/constants";
import * as duration from "../../utils/durations";
import * as badges from "../../utils/badges";
import { version as bastionVersion } from "../../package.json";

export = class StatusCommand extends Command {
    constructor() {
        super("status", {
            description: "It allows you to see Bastion's status, at a glance. It also allows you to see status of the current shard. You can also see a summary of Discord's status.",
            triggers: [ "stats", "info" ],
            arguments: {
                boolean: [ "discord", "shard" ],
            },
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
            syntax: [
                "status",
                "status --shard",
                "status --discord",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<unknown> => {
        if (argv.discord) {
            const response = await fetch("https://srhpyqt94yxb.statuspage.io/api/v2/summary.json", {
                method: "GET",
                headers: {
                    "Accepts": "application/json",
                    "Content-Type": "application/json",
                    "User-Agent": "Bastion (Discord Bot; https://bastion.traction.one)",
                },
            });
            const data = await response.json();

            // acknowledge
            return await message.channel.send({
                embed: {
                    color: data.status.indicator === "none" ? Constants.COLORS.GREEN : data.status.indicator === "minor" ? Constants.COLORS.ORANGE : Constants.COLORS.RED,
                    author: {
                        name: "Discord Status",
                        url: "https://status.discord.com",
                    },
                    title: data.status.description,
                    description: data.status.indicator.toUpperCase(),
                    url: "https://status.discord.com",
                    fields: data.incidents.map((incident: { name: string, status: string, impact: string, resolved_at: string, created_at: string }) => ({
                        name: incident.name,
                        value: incident.status + " / " + incident.impact + " / " + (incident.resolved_at ? "Resolved" : "Unresolved") + "\n" + new Date(incident.created_at).toLocaleString(),
                    })),
                    timestamp: new Date(),
                },
            }).catch(() => {
                // this error can be ignored
            });
        }

        // get guild badges
        const guildBadges = constants.isPublicBastion(this.client.user) && await badges.fetchBadges(message.guild.ownerID, message.guild.id).then(res => res.json()).catch(() => {
            // this error can be ignored
        });
        // check for premium membership
        const guildMembership = badges.getMembership(guildBadges ? guildBadges.badgeValue : 0);


        // calculate Bastion's presence
        const guildCounts = await this.client.shard.broadcastEval("this.guilds.cache.size");
        const guildCount = argv.shard ? this.client.guilds.cache.size : guildCounts.reduce((acc, val) => acc + val, 0);

        const userCounts = argv.shard ? this.client.guilds.cache.map(g => g.memberCount) : await this.client.shard.broadcastEval("this.guilds.cache.map(g => g.memberCount).reduce((acc, val) => acc + val, 0)");
        const userCount = userCounts.reduce((acc, val) => acc + val, 0);

        // calculate memory usage
        const rss = await this.client.shard.broadcastEval("process.memoryUsage().rss");
        const memoryUsage = argv.shard ? process.memoryUsage().rss : rss.reduce((acc, val) => acc + val, 0);


        const info = [
            {
                name: "Developer",
                value: "[" + this.client.locale.getConstant("author.username") + "](" + this.client.locale.getConstant("author.url") + ")",
                inline: true
            },
            {
                name: "Bot ID",
                value: this.client.user.id,
                inline: true
            },
            {
                name: "Bot Owners",
                value: this.client.credentials.owners.join("\n") || "-",
                inline: true
            },
            {
                name: "Default Prefixes",
                value: this.client.configurations.prefixes.join(" "),
                inline: true
            },
            {
                name: "Shards",
                value: this.client.shard.count.toString(),
                inline: true
            },
        ];

        const stats = [
            {
                name: "Presence",
                value: guildCount + " Servers\n" + userCount + " Users",
                inline: true
            },
            {
                name: "Uptime",
                value: duration.humanize(duration.between(Date.now(), Number.parseInt(process.env.BASTION_BOOT_TIME))),
                inline: true
            },
            {
                name: "Memory Usage",
                value: (memoryUsage / 1024 / 1024).toFixed(2) + "MB",
                inline: true
            },
            {
                name: "Environment",
                value: "Node " + process.version + " on " + process.platform + " " + process.arch + ". " + (constants.isPublicBastion(this.client.user) ? "Connected via Starlink." : ""),
                inline: true
            },
        ];


        // acknowledge
        return await message.channel.send({
            embed: {
                color: guildMembership ? guildMembership.color : Constants.COLORS.IRIS,
                author: {
                    name: "Bastion v" + bastionVersion,
                    url: this.client.locale.getConstant("bastion.website"),
                },
                title: (argv.shard ? "Shard " + this.client.shard.ids.join(" / ") : "") + " Status",
                description: guildMembership ? guildMembership.emoji + " " + guildMembership.name : ("[Get **Bastion Premium Membership** for an enhanced Bastion experience.](" + this.client.locale.getConstant("bastion.website") + "/premium)"),
                url: this.client.locale.getConstant("bastion.website") + "/status",
                thumbnail: {
                    url: this.client.user.displayAvatarURL({
                        dynamic: true,
                        size: 512,
                    }),
                },
                fields: argv.shard ? stats : info.concat(stats),
                footer: {
                    text: (argv.shard ? "" : "Shard " + this.client.shard.ids.join(" / ") + " • ") + this.client.ws.ping + "ms",
                },
                timestamp: new Date(),
            },
        });
    }
}
