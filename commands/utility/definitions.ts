/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, CommandArguments, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";

import * as errors from "../../utils/errors";
import * as requests from "../../utils/requests";
import { BastionCredentials } from "../../typings/settings";

export = class DefinitionsCommand extends Command {
    constructor() {
        super("definitions", {
            description: "It allows you to look up definitions for the specified word.",
            triggers: [ "define" ],
            arguments: {},
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
            syntax: [
                "definitions WORD",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<void> => {
        // command syntax validation
        if (!argv._.length) throw new errors.DiscordError(errors.BASTION_ERROR_TYPE.INVALID_COMMAND_SYNTAX, this.name);

        // identify the word
        const word: string = argv._.join(" ");

        // fetch definitions
        const response = await requests.get("https://api.wordnik.com/v4/word.json/" + encodeURIComponent(word.toLowerCase()) + "/definitions?limit=10&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=" + (this.client.credentials as BastionCredentials).wordnikApiKey);
        const definitions = await response.json();

        // acknowledge
        await message.channel.send({
            embed: {
                color: Constants.COLORS.IRIS,
                author: {
                    name: word.toLowerCase(),
                },
                title: "Definitions",
                fields: definitions.filter((definition: { text: string }) => definition.text).slice(0, 5).map((definition: { text: string; partOfSpeech: string }, i: number) => ({
                    name: (i + 1) + ". " + (definition.partOfSpeech || ""),
                    value: definition.text.slice(0, 1024),
                })),
                footer: {
                    text: "Powered by Century Dictionary, the American Heritage Dictionary, and Wiktionary.",
                },
            },
        });
    };
}
