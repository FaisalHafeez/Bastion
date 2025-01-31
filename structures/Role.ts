/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Client } from "@bastion/tesseract";
import { Guild, Role } from "discord.js";
import * as mongoose from "mongoose";

import RoleModel, { Role as IRole } from "../models/Role";

export = class BastionRole extends Role {
    public document: IRole & mongoose.Document;

    constructor(client: Client, data: Record<string, unknown>, guild: Guild) {
        super(client, data, guild);
    }

    public async fetchDocument(): Promise<IRole & mongoose.Document> {
        this.document = await RoleModel.findById(this.id);
        return this.document;
    }

    public async createDocument(role?: IRole): Promise<IRole & mongoose.Document> {
        return await RoleModel.findByIdAndUpdate(this.id, {
            id: this.id,
            guild: this.guild.id,
            ...role,
        }, {
            upsert: true,
            new: true,
        }) as IRole & mongoose.Document;
    }
}
