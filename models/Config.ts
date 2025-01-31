/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import * as mongoose from "mongoose";

export interface Config {
    _id: string;
    id?: string;
    relayDirectMessages?: boolean;
    blacklistedGuildIds?: string[];
    blacklistedUserIds?: string[];
    boostResetMonth?: number;
}

export default mongoose.model<Config & mongoose.Document>("Config", new mongoose.Schema<Config & mongoose.Document>({
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
    boostResetMonth: {
        type: Number,
    },
}));
