/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Logger, Scheduler } from "@bastion/tesseract";
import { MessageEmbedOptions, TextChannel } from "discord.js";
import fetch from "node-fetch";

import GuildModel, { Guild } from "../models/Guild";
import * as constants from "../utils/constants";
import { BastionCredentials } from "../typings/settings";

export = class LiveStreams extends Scheduler {
    /**
     * Twitch streams for which the guilds have received notifications,
     * mapped by the guild id.
     */
    twitchSubscriptions: Map<string, string[]>;

    constructor() {
        super("liveStreams", {
            // every 5 minutes
            cronTime: "0 */5 * * * *",
        });

        this.twitchSubscriptions = new Map<string, string[]>();
    }

    handleTwitchStreamers = async (guildId: string, info: Guild["streamers"]["twitch"], message: string): Promise<void> => {
        // check whether the client is ready
        if (!this.client.readyTimestamp) return;

        if (!this.twitchSubscriptions.has(guildId)) this.twitchSubscriptions.set(guildId, []);

        // streams that were already notified
        const notifiedStreams = this.twitchSubscriptions.get(guildId);

        // get current live streams
        const response = await fetch("https://api.twitch.tv/helix/streams/?user_login=" + info.users.join("&user_login="), {
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + (this.client.credentials as BastionCredentials).twitch.accessToken,
                "Client-ID": (this.client.credentials as BastionCredentials).twitch.clientId,
            },
        });

        const streams: TwitchStream[] = (await response.json()).data;

        if (!streams) return Logger.error("Make sure your Twitch credentials are valid.");

        for (const stream of streams) {
            // check whether this stream has already been notified
            if (notifiedStreams.includes(stream.id)) continue;

            // notify
            if (this.client.channels.cache.has(info.channelId)) {
                await (this.client.channels.cache.get(info.channelId) as TextChannel).send(message, {
                    embed: {
                        color: constants.COLORS.TWITCH,
                        author: {
                            name: stream.user_name,
                            url: "https://twitch.tv/" + stream.user_name,
                        },
                        description: stream.title,
                        fields: [
                            {
                                name: "Viewers",
                                value: stream.viewer_count.toString(),
                                inline: true,
                            },
                            {
                                name: "Language",
                                value: stream.language.toUpperCase(),
                                inline: true,
                            },
                        ],
                        image: {
                            url: stream.thumbnail_url.replace("{width}", "1280").replace("{height}", "720"),
                        },
                        footer: {
                            text: "🔴 LIVE",
                        },
                        timestamp: stream.started_at,
                    } as unknown as MessageEmbedOptions,
                }).then(() => {
                    notifiedStreams.push(stream.id);
                }).catch(() => {
                    // this error can be ignored
                });
            }
        }

        this.twitchSubscriptions.set(guildId, notifiedStreams);
    };

    exec = async (): Promise<void> => {
        try {
            // check whether the guild cache is empty
            if (!this.client.guilds.cache.size) return;

            const guildDocuments = await GuildModel.find({
                $or: this.client.guilds.cache.map(g => ({ _id: g.id })),
                streamers: {
                    $exists: true,
                },
            });

            for (const guild of guildDocuments) {
                // twitch streams
                if (guild.streamers?.twitch?.channelId && guild.streamers?.twitch?.users?.length) {
                    this.handleTwitchStreamers(guild._id, guild.streamers.twitch, guild.streamers.message).catch(e => Logger.error(e));
                }
            }
        } catch (e) {
            Logger.error(e);
        }
    };
}
