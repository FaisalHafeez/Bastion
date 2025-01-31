/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Listener, Constants, Logger } from "@bastion/tesseract";

export = class ShardReadyListener extends Listener {
    constructor() {
        super("shardReady", {
            mode: Constants.LISTENER_MODE.ON,
        });
    }

    exec = async (shardId: number): Promise<void> => {
        Logger.info("Shard " + shardId + " - Ready");

        if (!process.env.BASTION_SHARDS_READY && this.client.shard.count === shardId + 1) {
            Logger.info("Systems Ready!");
            await this.client.shard.broadcastEval("process.env.BASTION_SHARDS_READY = true");
        }
    };
}
