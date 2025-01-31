/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Client } from "@bastion/tesseract";
import { User } from "discord.js";
import * as mongoose from "mongoose";

import UserModel, { User as IUser } from "../models/User";

export = class BastionUser extends User {
    declare client: Client;
    document: IUser & mongoose.Document;

    constructor(client: Client, data: Record<string, unknown>) {
        super(client, data);
    }

    public async getDocument(): Promise<IUser & mongoose.Document> {
        return await UserModel.findById(this.id);
    }

    public isOwner(): boolean {
        return this.client.credentials.owners.includes(this.id);
    }
}
