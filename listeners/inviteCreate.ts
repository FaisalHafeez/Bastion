/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Listener, Constants } from "tesseract";
import { Invite } from "discord.js";

import Guild = require("../structures/Guild");
import * as durations from "../utils/durations";

export = class InviteCreateListener extends Listener {
    constructor() {
        super("inviteCreate", {
            mode: Constants.LISTENER_MODE.ON,
        });
    }

    exec = async (invite: Invite): Promise<void> => {
        const guild = invite.guild as Guild;

        const fields = [
            {
                name: "Invite Code",
                value: invite.code,
                inline: true,
            },
            {
                name: "Invite Channel",
                value: invite.channel,
                inline: true,
            },
        ];

        if (invite.inviter) {
            fields.push({
                name: "Inviter",
                value: invite.inviter.tag,
                inline: true,
            });
        }

        if (invite.maxUses) {
            fields.push({
                name: "Max Uses",
                value: invite.maxUses.toString(),
                inline: true,
            });
        }

        if (invite.maxAge) {
            fields.push({
                name: "Expires",
                value: durations.humanize(durations.between(invite.maxAge)),
                inline: true,
            });
        }

        guild.createLog({
            event: "inviteCreate",
            fields,
            footer: invite.temporary ? "Temporary Membership" : undefined,
            timestamp: invite.createdTimestamp,
        });
    }
}
