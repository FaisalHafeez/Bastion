/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import { Listener, Constants } from "tesseract";

import Guild = require("../structures/Guild");

export = class GuildUpdateListener extends Listener {
    constructor() {
        super("guildUpdate", {
            mode: Constants.LISTENER_MODE.ON,
        });
    }

    exec = async (oldGuild: Guild, newGuild: Guild): Promise<void> => {
        if (oldGuild.name === newGuild.name) return;

        newGuild.createLog({
            event: "guildUpdate",
            fields: [
                {
                    name: "Old Server Name",
                    value: oldGuild.name,
                    inline: true,
                },
                {
                    name: "New Server Name",
                    value: newGuild.name,
                    inline: true,
                },
                {
                    name: "Server ID",
                    value: oldGuild.id,
                    inline: true,
                },
            ],
        });
    }
}
