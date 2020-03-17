/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import * as mongoose from "mongoose";

export interface Config {
    _id: string;
    id?: string;
    relayDirectMessages?: boolean;
    blacklistedGuildIds?: string[];
    blacklistedUserIds?: string[];
}

export default mongoose.model<Config & mongoose.Document>("Config", new mongoose.Schema<Config>({
    _id: {
        type: String,
        required: true,
    },
    relayDirectMessages: {
        type: Boolean,
    },
    blacklistedGuildIds: {
        type: [ String ],
    },
    blacklistedUserIds: {
        type: [ String ],
    },
}));
