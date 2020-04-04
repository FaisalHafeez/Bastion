/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Command, CommandArguments } from "tesseract";
import { Constants, Message } from "discord.js";

import MemberModel from "../../models/Member";
import * as arrays from "../../utils/arrays";
import * as errors from "../../utils/errors";
import * as pagination from "../../utils/pagination";

import BastionGuild = require("../../structures/Guild");
import BastionGuildMember = require("../../structures/GuildMember");

export = class Warn extends Command {
    constructor() {
        super("warn", {
            description: "",
            triggers: [],
            arguments: {
                alias: {
                    list: "l",
                    user: "u",
                },
                boolean: [ "list" ],
                string: [ "user" ],
            },
            scope: "guild",
            owner: false,
            typing: true,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<unknown> => {
        // List Bans
        if (argv.list) {
            const warnedMemberDocuments = await MemberModel.find({
                guild: message.guild.id,
                warnings: { $exists: true, $ne: [] },
            });

            const warnedMembers = pagination.paginate(warnedMemberDocuments, argv.page);

            return await message.channel.send({
                embed: {
                    color: Constants.Colors.DARK_BUT_NOT_BLACK,
                    title: "Warned Users",
                    description: warnedMembers.items.length ? "Users warned in the server." : "No one has been warned in the server.",
                    fields: warnedMembers.items.map((member: { _id: string; warnings: string[] }) => ({
                        name: message.guild.members.cache.has(member._id) ? message.guild.members.cache.get(member._id).user.tag : member._id,
                        value: arrays.toBulletList(member.warnings),
                    })),
                    footer: {
                        text: warnedMembers.items.length ? `Page ${warnedMembers.page} of ${warnedMembers.pages}` : "",
                    },
                },
            });
        }

        // Resolve member
        const member = this.client.resolver.resolveGuildMember(message.guild, argv.user) as BastionGuildMember;

        // Reason
        const reason = argv._.join(" ");

        // Command Syntax Validation
        if (!member || !reason) throw new errors.CommandSyntaxError(this.name);

        // Check command user's permission over target member
        if (message.author.id !== message.guild.ownerID && !(message.member as BastionGuildMember).canManage(member)) {
            return await message.channel.send({
                embed: {
                    color: Constants.Colors.RED,
                    title: this.client.locale.getString("en_us", "errors", "unauthorized"),
                    description: this.client.locale.getString("en_us", "errors", "rolePosition", message.author.tag, member.user.tag),
                },
            }).catch(() => {
                // This error can be ignored.
            });
        }

        // Add the warning to the Guild Member
        const guildMemberDocument = await member.getDocument();

        if (!guildMemberDocument.warnings || !guildMemberDocument.warnings.length) {
            guildMemberDocument.warnings = [];
        }

        guildMemberDocument.warnings.push(reason);

        guildMemberDocument.save();

        // DM the User about their Warning
        await message.member.send({
            embed: {
                color: Constants.Colors.ORANGE,
                description: this.client.locale.getString("en_us", "info", "memberWarnDM", message.author.tag, message.guild.name, reason),
            },
        }).catch(() => {
            // This error can be ignored.
        });

        // Acknowledgement
        await message.channel.send({
            embed: {
                color: Constants.Colors.DARK_BUT_NOT_BLACK,
                description: this.client.locale.getString("en_us", "info", "memberWarn", message.author.tag, member.user.tag, reason),
            },
        }).catch(() => {
            // This error can be ignored.
        });

        // Take Warn Action
        const guildDocument = await (message.guild as BastionGuild).getDocument();

        if (guildDocument.warnings && guildDocument.warnings.action && guildDocument.warnings.threshold && guildMemberDocument.warnings.length >= guildDocument.warnings.threshold) {
            const reason = `Warn Threshold Exceeded - ${guildMemberDocument.warnings.length} Warnings`;

            switch (guildDocument.warnings.action.toLowerCase()) {
            case "kick":
                if (member.kickable) {
                    await member.kick(reason);
                }
                break;
            case "softban":
                if (member.bannable) {
                    await member.ban({ days: 0, reason });
                    await message.guild.members.unban(member, reason);
                }
                break;
            case "ban":
                if (member.kickable) {
                    await member.ban({ days: 0, reason });
                }
                break;
            }

            // DM the User about their Warn Action
            await message.member.send({
                embed: {
                    color: Constants.Colors.ORANGE,
                    description: this.client.locale.getString("en_us", "info", "memberWarnActionDM", message.guild.name),
                },
            }).catch(() => {
                // This error can be ignored.
            });
        }
    }
}
