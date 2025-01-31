/*!
 * @author TRACTION (iamtraction)
 * @copyright 2020 - Sankarsan Kampa
 */

import { Command, Constants } from "@bastion/tesseract";
import { Message } from "discord.js";

import { getRandomPost } from "../../utils/reddit";

export = class LifeProTipCommand extends Command {
    constructor() {
        super("lifeProTip", {
            description: "Posts a random life pro tip collected from the r/LifeProTips subreddit.",
            triggers: [ "lifeProTips", "LPT" ],
            arguments: {},
            scope: "guild",
            owner: false,
            cooldown: 0,
            ratelimit: 1,
            clientPermissions: [],
            userPermissions: [],
            syntax: [],
        });
    }

    exec = async (message: Message): Promise<void> => {
        // fetch a random joke
        const [ post ] = await getRandomPost("lifeprotips");

        if (!post || !post.data || !post.data.children || !post.data.children.length || !post.data.children[0].data) return;

        // acknowledge
        await message.channel.send({
            embed: {
                color: Constants.COLORS.IRIS,
                title: post.data.children[0].data.title.slice(0, 256),
                url: post.data.children[0].data.url,
                ...(post.data.children[0].data.selftext ? { description: post.data.children[0].data.selftext.slice(0, 1024) } : {}),
                footer: {
                    text: "Powered by r/LifeProTips",
                },
            },
        });
    };
}
