/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";

import * as constants from "../../utils/constants";

import BastionGuild = require("../../structures/Guild");
import BastionGuildMember = require("../../structures/GuildMember");


export = class Skip extends Command {
    constructor() {
        super("skip", {
            description: "It allows you to skip the music track that is currently being played in the server.",
            triggers: [],
            arguments: {},
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
        });
    }

    exec = async (message: Message): Promise<unknown> => {
        const guild = (message.guild as BastionGuild);

        // Check whether music is enabled in the guild
        if (!guild.document.music || !guild.document.music.enabled) {
            return await message.channel.send({
                embed: {
                    color: Constants.COLORS.RED,
                    description: this.client.locale.getString((message.guild as BastionGuild).document.language, "errors", constants.isPublicBastion(message.author) ? "musicDisabledPublic" : "musicDisabled"),
                },
            }).catch(() => {
                // This error can be ignored.
            });
        }

        if (guild.music.queue.length && guild.music.voiceChannel.members.has(message.author.id)) {
            // Check whether the command user is a Music Master
            if (!(message.member as BastionGuildMember).isMusicMaster()) {
                // Vote to skip
                if (!guild.music.skipVotes.includes(message.author.id)) {
                    guild.music.skipVotes.push(message.author.id);
                }

                const nowPlaying = guild.music.queue[0];

                // Check vote count
                const requiredVotes = Math.ceil((guild.voice.channel.members.size - 1) / 2);

                if (guild.music.skipVotes.length < requiredVotes) {
                    // Acknowledge
                    return await guild.music.textChannel.send({
                        embed: {
                            color: Constants.COLORS.PINK,
                            description: this.client.locale.getString((message.guild as BastionGuild).document.language, "info", "musicSkipCount", (requiredVotes - guild.music.skipVotes.length).toString()),
                            footer: {
                                text: `${nowPlaying.track} • ${guild.music.voiceChannel.name}`
                            },
                        },
                    });
                }
            }

            // Stop the dispatcher
            guild?.voice?.connection?.dispatcher?.end();
        }
    };
}
