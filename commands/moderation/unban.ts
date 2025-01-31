/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, CommandArguments, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";

import * as errors from "../../utils/errors";
import BastionGuild = require("../../structures/Guild");

export = class Unban extends Command {
    constructor() {
        super("unban", {
            description: "It allows you to unban the users who're banned in the server.",
            triggers: [],
            arguments: {
                alias: {
                    user: "u",
                },
                string: [ "user" ],
            },
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [ "BAN_MEMBERS" ],
            userPermissions: [ "BAN_MEMBERS" ],
            syntax: [
                "unban --user USER_ID -- REASON",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<void> => {
        // Resolve user
        const user = this.client.resolver.resolveUser(argv.user);

        // Command Syntax Validation
        if (!user) throw new errors.DiscordError(errors.BASTION_ERROR_TYPE.INVALID_COMMAND_SYNTAX, this.name);

        // Unban user
        const reason = argv._.join(" ") || "-";

        await message.guild.members.unban(user, reason);

        // Acknowledge
        await message.channel.send({
            embed: {
                color: Constants.COLORS.ORANGE,
                description: this.client.locale.getString((message.guild as BastionGuild).document.language, "info", "guildBanRemove", message.author.tag, user.tag),
                fields: [
                    {
                        name: "Reason",
                        value: reason,
                    },
                ],
                footer: {
                    text: user.id,
                },
            },
        }).catch(() => {
            // This error can be ignored.
        });
    };
}
