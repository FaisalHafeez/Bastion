/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Listener, Constants } from "tesseract";
import { DMChannel, GuildChannel } from "discord.js";

import Guild = require("../structures/Guild");

export = class ChannelUpdateListener extends Listener {
    constructor() {
        super("channelUpdate", {
            mode: Constants.LISTENER_MODE.ON,
        });
    }

    exec = async (oldChannel: DMChannel | GuildChannel, newChannel: DMChannel | GuildChannel): Promise<void> => {
        if (oldChannel instanceof GuildChannel && newChannel instanceof GuildChannel) {
            if (oldChannel.name === newChannel.name && oldChannel.parentID === newChannel.parentID) return;

            const fields = [
                {
                    name: "Channel ID",
                    value: oldChannel.id,
                    inline: true,
                },
            ];

            if (oldChannel.name === newChannel.name) {
                fields.push({
                    name: "Channel Name",
                    value: oldChannel.name,
                    inline: true,
                });
            } else {
                fields.push(
                    {
                        name: "Old Channel Name",
                        value: oldChannel.name,
                        inline: true,
                    },
                    {
                        name: "New Channel Name",
                        value: newChannel.name,
                        inline: true,
                    },
                );
            }

            if (oldChannel.parent) {
                fields.push({
                    name: "Channel Category ID",
                    value: oldChannel.parent.id,
                    inline: true,
                });
            }

            if (oldChannel.parentID === newChannel.parentID) {
                fields.push({
                    name: "Channel Category",
                    value: oldChannel.parent.name,
                    inline: true,
                });
            } else {
                fields.push(
                    {
                        name: "Old Channel Category",
                        value: oldChannel.parent.name,
                        inline: true,
                    },
                    {
                        name: "New Channel Category",
                        value: newChannel.parent.name,
                        inline: true,
                    },
                );
            }

            const guild = oldChannel.guild as Guild;

            guild.createLog({
                event: newChannel.type + "ChannelUpdate",
                fields: fields,
            });
        }
    }
}
