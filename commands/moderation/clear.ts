/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, CommandArguments, Constants } from "@bastion/tesseract";
import { Message, NewsChannel, TextChannel } from "discord.js";

import confirmation from "../../utils/confirmation";
import BastionGuild = require("../../structures/Guild");

export = class Clear extends Command {
    constructor() {
        super("clear", {
            description: "It allows you to clear a specified number of messages in a channel. You can optionally filter the messages that should be cleard based on the message author, or since when it was sent, or whether it is pinned or system message or a bot sent it.",
            triggers: [ "clean", "purge" ],
            arguments: {
                alias: {
                    limit: "n",
                    time: "t",
                    user: "u",
                },
                boolean: [ "bots", "pinned", "system" ],
                number: [ "limit", "time" ],
                string: [ "user" ],
            },
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [ "MANAGE_MESSAGES" ],
            userPermissions: [ "MANAGE_MESSAGES" ],
            syntax: [
                "clear -- REASON",
                "clear --limit 42 -- REASON",
                "clear --user USER_ID -- REASON",
                "clear --bots -- REASON",
                "clear --pinned -- REASON",
                "clear --system -- REASON",
                "clear --time 1586478504946 -- REASON",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<unknown> => {
        // Fetch deletable messages
        let messages = await message.channel.messages.fetch({
            limit: argv.limit || 100,
            before: message.id,
        }, false);

        // Filter messages by user
        const user = this.client.resolver.resolveUser(argv.user);
        if (user) messages = messages.filter(m => m.author.id === user.id);
        else if (argv.user) messages = messages.filter(m => m.author.id === argv.user);

        // Filter messages from bots
        if (argv.bots) messages = messages.filter(m => m.author.bot);
        else if (argv.bots === false) messages = messages.filter(m => !m.author.bot);

        // Filter pinned messages
        if (argv.pinned) messages = messages.filter(m => m.pinned);
        else if (argv.pinned === false) messages = messages.filter(m => !m.pinned);

        // Filter system messages
        if (argv.system) messages = messages.filter(m => m.system);
        else if (argv.system === false) messages = messages.filter(m => !m.system);

        // Filter messages sent after the specified time
        if (argv.time) {
            messages = messages.filter(m => m.createdTimestamp >= message.createdTimestamp - (argv.time * 6e4));
        }

        const reason = argv._.join(" ") || "-";

        // get confirmation, if no limit is specified
        if (!argv.limit) {
            const answer = await confirmation(message, "I will try to delete " + messages.size.toLocaleString() + " messages from this channel. Are you sure you want to do this?");

            if (!answer) return;
        }

        // Delete filtered messages
        const clearedMessages = await (message.channel as TextChannel | NewsChannel).bulkDelete(messages, true);

        if (!clearedMessages.size) {
            return await message.channel.send({
                embed: {
                    color: Constants.COLORS.RED,
                    title: this.client.locale.getString((message.guild as BastionGuild).document.language, "errors", "notFound"),
                    description: this.client.locale.getString((message.guild as BastionGuild).document.language, "errors", "noDeletableMessages"),
                },
            }).catch(() => {
                // This error can be ignored.
            });
        }

        // Acknowledge
        await message.channel.send({
            embed: {
                color: Constants.COLORS.ORANGE,
                description: this.client.locale.getString((message.guild as BastionGuild).document.language, "info", "messageClear", message.author.tag, clearedMessages.size),
                fields: [
                    {
                        name: "Reason",
                        value: reason,
                    },
                ],
            },
        }).then(m => {
            if (message.deletable) message.delete({ reason: "Bulk Delete by " + message.author.tag }).catch(() => {
                // This error can be ignored.
            });
            m.delete({
                timeout: 6e4,
                reason: `Cleared ${clearedMessages.size} messages`,
            }).catch(() => {
                // This error can be ignored.
            });
        }).catch(() => {
            // This error can be ignored.
        });
    };
}
