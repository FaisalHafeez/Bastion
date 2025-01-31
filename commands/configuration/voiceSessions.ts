/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, CommandArguments, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";

import GuildModel from "../../models/Guild";
import * as constants from "../../utils/constants";
import * as errors from "../../utils/errors";
import * as omnic from "../../utils/omnic";
import BastionGuild = require("../../structures/Guild");

export = class VoiceSessionsCommand extends Command {
    constructor() {
        super("voiceSessions", {
            description: "It allows you manage Voice Sessions (or Temporary Voice Channels, if you prefer), in the server.",
            triggers: [],
            arguments: {
                boolean: [ "create" ],
            },
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [ "MANAGE_CHANNELS" ],
            userPermissions: [ "MANAGE_GUILD" ],
            syntax: [
                "voiceSessions",
                "voiceSessions --create",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<unknown> => {
        // check for premium membership
        if (constants.isPublicBastion(this.client.user)) {
            // fetch the premium tier
            const tier = await omnic.fetchPremiumTier(message.guild).catch(() => {
                // this error can be ignored
            });
            if (!tier) throw new errors.DiscordError(errors.BASTION_ERROR_TYPE.PREMIUM_MEMBERSHIP_REQUIRED, this.client.locale.getString((message.guild as BastionGuild).document.language, "errors", "premiumVoiceSessions"));
        }

        if (argv.create) {
            // create sessional category
            const sessionalCategory = await message.guild.channels.create("Sessional Channels", {
                type: "category",
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: [ "SPEAK", "VIEW_CHANNEL" ],
                        deny: [ "CONNECT", "CREATE_INSTANT_INVITE" ],
                    },
                ],
            });

            // create new channel actuator text channel
            const controlChannel = await message.guild.channels.create("session-control", {
                type: "text",
                parent: sessionalCategory,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: [ "ADD_REACTIONS" ],
                        deny: [ "SEND_MESSAGES" ],
                    },
                ],
            });

            // create new channel actuator voice channel
            await message.guild.channels.create("➕ New Voice Channel", {
                type: "voice",
                parent: sessionalCategory,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        allow: [ "CONNECT" ],
                        deny: [ "SPEAK" ],
                    },
                ],
            });

            // consolidate all sessional categories
            const sessionalCategories: string[] = (message.guild as BastionGuild).document.voiceSessions && (message.guild as BastionGuild).document.voiceSessions.categories
                ? (message.guild as BastionGuild).document.voiceSessions.categories.concat(sessionalCategory.id)
                : [ sessionalCategory.id ];

            // update guild document
            await GuildModel.findByIdAndUpdate(message.guild.id, {
                voiceSessions: {
                    categories: sessionalCategories.filter(id => message.guild.channels.cache.has(id)),
                },
            });

            // send control message
            const controlMessage = await controlChannel.send({
                embed: {
                    color: Constants.COLORS.IRIS,
                    title: "Voice Session Control",
                    description: "You can lock, unlock, hide, and unhide your voice session by reacting to the this message.",
                },
            });

            // add control reactions
            await controlMessage.react("🔒").catch(() => {
                // this error can be ignored
            });
            await controlMessage.react("🔓").catch(() => {
                // this error can be ignored
            });
            await controlMessage.react("🔐").catch(() => {
                // this error can be ignored
            });
            await controlMessage.react("👁️").catch(() => {
                // this error can be ignored
            });

            // acknowledge
            return message.channel.send({
                embed: {
                    color: Constants.COLORS.GREEN,
                    description: this.client.locale.getString((message.guild as BastionGuild).document.language, "info", "voiceSessionCreate", message.author.tag),
                },
            }).catch(() => {
                // this error can be ignored
            });
        }

        // find all sessional categories
        const sessionalCategories: string[] = (message.guild as BastionGuild).document.voiceSessions ? (message.guild as BastionGuild).document.voiceSessions.categories : [];

        // acknowledge
        return await message.channel.send({
            embed: {
                color: Constants.COLORS.IRIS,
                title: (sessionalCategories.length ? "" : "No ") + "Voice Sessions",
                description: "Use `voiceSessions --create` to create a new category for Voice Sessions.",
                fields: sessionalCategories.map(id => ({
                    name: message.guild.channels.cache.has(id) ? message.guild.channels.cache.get(id).name : "[DELETED CHANNEL]",
                    value: id,
                })),
            },
        });
    };
}
