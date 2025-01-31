/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, CommandArguments, Constants } from "@bastion/tesseract";
import { Message, TextChannel } from "discord.js";

import BastionGuild = require("../../structures/Guild");
import * as errors from "../../utils/errors";

export = class SuggestCommand extends Command {
    constructor() {
        super("suggest", {
            description: "It allows you send a suggestion to the suggestion staff, provided a Suggestion Channel has been set in the server.",
            triggers: [],
            arguments: {},
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
            syntax: [
                "suggest SUGGESTION",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<void> => {
        if (!argv._.length) throw new errors.DiscordError(errors.BASTION_ERROR_TYPE.INVALID_COMMAND_SYNTAX, this.name);

        const guild = message.guild as BastionGuild;

        // check whether suggestions channel is set and is available
        if (!guild.document.suggestionsChannelId || !message.guild.channels.cache.has(guild.document.suggestionsChannelId)) throw new errors.DiscordError(errors.BASTION_ERROR_TYPE.ERROR, this.client.locale.getString((message.guild as BastionGuild).document.language, "errors", "noSuggestionChannel", message.author.tag));

        // identify the suggestion channel
        const suggestionChannel = message.guild.channels.cache.get(guild.document.suggestionsChannelId) as TextChannel;

        // send the suggestion
        const suggestion = await suggestionChannel.send({
            embed: {
                color: Constants.COLORS.INDIGO,
                author: {
                    name: message.author.tag + " / " + message.author.id,
                    iconURL: message.author.displayAvatarURL({
                        dynamic: true,
                        size: 64,
                    }),
                },
                title: "Suggestion",
                description: argv._.join(" "),
            },
        });

        // delete the command invocation
        if (message.deletable) {
            message.delete({ reason: "Suggestion Command" }).catch(() => {
                // this error can be ignored
            });
        }

        // add reaction to accept/reject the suggestion
        suggestion.react("✅").catch(() => {
            // this error can be ignored
        });
        suggestion.react("❎").catch(() => {
            // this error can be ignored
        });

        // acknowledge
        await message.channel.send({
            embed: {
                color: Constants.COLORS.IRIS,
                description: "We've received your suggestion. We'll get back to you with updates.",
            },
        }).catch(() => {
            // this error can be ignored
        });

    };
}
