/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Command, CommandArguments, Constants } from "tesseract";
import { GuildChannel, Message, VoiceChannel } from "discord.js";

import * as constants from "../../utils/constants";

import BastionGuild = require("../../structures/Guild");


export = class MusicChannel extends Command {
    constructor() {
        super("musicChannel", {
            description: "",
            triggers: [],
            arguments: {
                string: [ "vc" ],
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
        const guild = (message.guild as BastionGuild);

        // Check whether music is enabled in the guild
        if (!guild.document.music || !guild.document.music.enabled) {
            return await message.channel.send({
                embed: {
                    color: Constants.COLORS.RED,
                    description: this.client.locale.getString("en_us", "errors", constants.isPublicBastion(message.author) ? "musicDisabledPublic" : "musicDisabled"),
                },
            }).catch(() => {
                // This error can be ignored.
            });
        }

        const voiceChannel = this.client.resolver.resolveGuildChannel(guild, argv.vc, [ "voice" ]) as VoiceChannel;

        // Set the Music Channels
        guild.document.music = {
            ...guild.document.music,
            textChannelId: voiceChannel ? message.channel.id : undefined,
            voiceChannelId: voiceChannel ? voiceChannel.id : undefined,
        };

        guild.document.save();

        await message.channel.send({
            embed: {
                color: voiceChannel ? Constants.COLORS.GREEN : Constants.COLORS.RED,
                description: this.client.locale.getString("en_us", "info", voiceChannel ? "musicChannelsAdd" : "musicChannelsRemove", message.author.tag, voiceChannel ? (message.channel as GuildChannel).name : null, voiceChannel ? voiceChannel.name : null),
            },
        }).catch(() => {
            // This error can be ignored.
        });
    }
}
