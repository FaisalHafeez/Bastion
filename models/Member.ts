/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import * as mongoose from "mongoose";

export interface Member {
    user: string;
    guild: string;
    balance?: number;
    experience?: number;
    level?: number;
    karma?: number;
    lastClaimed?: Date;
    claimStreak?: number;
    warnings?: string[];
}

const memberSchema = new mongoose.Schema<Member>({
    user: {
        type: String,
        required: true,
        ref: "User",
    },
    guild: {
        type: String,
        required: true,
        ref: "Guild",
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    experience: {
        type: Number,
        required: true,
        default: 0,
    },
    level: {
        type: Number,
        required: true,
        default: 0,
    },
    karma: {
        type: Number,
        required: true,
        default: 0,
    },
    lastClaimed: {
        type: Date,
    },
    claimStreak: {
        type: Number,
        required: true,
        default: 0,
    },
    warnings: {
        type: [ String ],
    },
});

memberSchema.index({
    user: 1,
    guild: 1,
}, {
    unique: true,
});

export default mongoose.model<Member & mongoose.Document>("Member", memberSchema);
