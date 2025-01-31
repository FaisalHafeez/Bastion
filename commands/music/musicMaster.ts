/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, CommandArguments, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";

import * as constants from "../../utils/constants";

import BastionGuild = require("../../structures/Guild");


export = class MusicMaster extends Command {
    constructor() {
        super("musicMaster", {
            description: "It allows you to set (and unset) Bastion's Music Master role.",
            triggers: [],
            arguments: {
                alias: {
                    role: [ "r" ],
                },
                string: [ "role" ],
            },
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [ "MANAGE_GUILD" ],
            syntax: [
                "musicMaster --role ROLE_ID",
                "musicMaster",
            ],
        });
    }

    exec = async (message: Message, argv: CommandArguments): Promise<unknown> => {
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

        const role = this.client.resolver.resolveRole(guild, argv.role);

        // Set the Music Master role
        guild.document.music = {
            ...guild.document.music?.toJSON(),
            roleId: role ? role.id : undefined,
        };

        guild.document.save();

        await message.channel.send({
            embed: {
                color: role ? Constants.COLORS.GREEN : Constants.COLORS.RED,
                description: this.client.locale.getString((message.guild as BastionGuild).document.language, "info", role ? "musicMasterRoleAdd" : "musicMasterRoleRemove", message.author.tag, role ? role.name : null),
            },
        }).catch(() => {
            // This error can be ignored.
        });
    };
}
