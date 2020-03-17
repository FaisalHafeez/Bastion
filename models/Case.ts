/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import * as mongoose from "mongoose";

export interface Case {
    guild: string;
    number: number;
    messageId: string;
}

const caseSchema = new mongoose.Schema<Case>({
    guild: {
        type: String,
        required: true,
        ref: "Guild",
    },
    number: {
        type: Number,
        required: true,
        default: 1,
    },
    messageId: {
        type: String,
        required: true,
    },
});

caseSchema.index({
    guild: 1,
    number: 1,
}, {
    unique: true,
});

export = mongoose.model<Case & mongoose.Document>("Case", caseSchema);
