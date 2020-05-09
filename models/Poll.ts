/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import * as mongoose from "mongoose";

export interface Poll {
    _id: string;
    id?: string;
    channel: string;
    guild: string;
    ends: Date;
}

const pollSchema = new mongoose.Schema<Poll>({
    _id: {
        type: String,
        required: true,
    },
    channel: {
        type: String,
        required: true,
        ref: "TextChannel",
    },
    guild: {
        type: String,
        required: true,
        ref: "Guild",
    },
    ends: {
        type: Date,
        required: true,
        expires: 864e2,
    },
});

export default mongoose.model<Poll & mongoose.Document>("Poll", pollSchema);