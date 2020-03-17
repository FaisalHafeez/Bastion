/*!
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @copyright 2020 - The Bastion Bot Project
 */

import * as mongoose from "mongoose";

export interface Guild {
    _id: string;
    id?: string;
    disabled?: boolean;
    premium?: boolean;
    prefixes?: string[];
    language?: string;
    greeting?: {
        channelId: string;
        message?: string;
        timeout?: number;
    };
    farewell?: {
        channelId: string;
        message?: string;
        timeout?: number;
    };
    music?: {
        enabled: boolean;
        textChannelId?: string;
        voiceChannelId?: string;
        roleId?: string;
        autoPlay?: boolean;
        autoDisconnect?: boolean;
    };
    gamification?: {
        enabled: boolean;
        messages?: boolean;
        modifier?: number;
    };
    chat?: boolean;
    streamerRoleId?: string;
    serverLogChannelId?: string;
    moderationLogChannelId?: string;
    starboardChannelId?: string;
    announcementsChannelId?: string;
    reportsChannelId?: string;
    suggestionsChannelId?: string;
    reactionAnnouncements?: boolean;
    reactionPinning?: boolean;
    filters?: {
        inviteFilter?: {
            enabled: boolean;
            whitelist?: string[];
            action?: string;
        };
        linkFilter?: {
            enabled: boolean;
            whitelist?: string[];
            action?: string;
        };
        mentionFilter?: {
            enabled: boolean;
            roles?: boolean;
            users?: boolean;
            threshold?: number;
            action?: string;
        };
        messageFilter?: {
            enabled: boolean;
            patterns: string[];
            action?: string;
        };
    };
    warnings?: {
        threshold: number;
        action: string;
    };
    gambling?: {
        enabled: boolean;
        reward?: number;
    };
    streamers?: {
        twitch?: {
            channelId?: string;
            users: string[];
        };
    };
    disabledCommands?: string[];
    membersOnly?: boolean;
}

export default mongoose.model<Guild & mongoose.Document>("Guild", new mongoose.Schema<Guild>({
    _id: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
    },
    premium: {
        type: Boolean,
    },
    prefixes: {
        type: [ String ],
    },
    language: {
        type: String,
    },
    greeting: {
        type: {
            channelId: {
                type: String,
                unique: true,
                sparse: true,
            },
            message: {
                type: String,
                trim: true,
            },
            timeout: {
                type: Number,
            },
        },
    },
    farewell: {
        type: {
            channelId: {
                type: String,
                unique: true,
                sparse: true,
            },
            message: {
                type: String,
                trim: true,
            },
            timeout: {
                type: Number,
            },
        },
    },
    music: {
        type: {
            enabled: {
                type: Boolean,
            },
            textChannelId: {
                type: String,
                unique: true,
                sparse: true,
            },
            voiceChannelId: {
                type: String,
                unique: true,
                sparse: true,
            },
            roleId: {
                type: String,
                unique: true,
                sparse: true,
            },
            autoPlay: {
                type: Boolean,
            },
            autoDisconnect: {
                type: Boolean,
            },
        },
    },
    gamification: {
        type: {
            enabled: {
                type: Boolean,
            },
            messages: {
                type: Boolean,
            },
            modifier: {
                type: Number,
            },
        },
    },
    chat: {
        type: Boolean,
    },
    streamerRoleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    serverLogChannelId: {
        type: String,
        unique: true,
        sparse: true,
    },
    moderationLogChannelId: {
        type: String,
        unique: true,
        sparse: true,
    },
    starboardChannelId: {
        type: String,
        unique: true,
        sparse: true,
    },
    announcementChannelId: {
        type: String,
        unique: true,
        sparse: true,
    },
    reportsChannelId: {
        type: String,
        unique: true,
        sparse: true,
    },
    suggestionsChannelId: {
        type: String,
        unique: true,
        sparse: true,
    },
    reactionAnnouncements: {
        type: Boolean,
    },
    reactionPinning: {
        type: Boolean,
    },
    filters: {
        type: {
            inviteFilter: {
                type: {
                    enabled: {
                        type: Boolean,
                    },
                    whitelist: {
                        type: [ String ],
                    },
                    action: {
                        type: String,
                    },
                },
            },
            linkFilter: {
                type: {
                    enabled: {
                        type: Boolean,
                    },
                    whitelist: {
                        type: [ String ],
                    },
                    action: {
                        type: String,
                    },
                },
            },
            mentionFilter: {
                type: {
                    enabled: {
                        type: Boolean,
                    },
                    roles: {
                        type: Boolean,
                    },
                    users: {
                        type: Boolean,
                    },
                    threshold: {
                        type: Number,
                    },
                    action: {
                        type: String,
                    },
                },
            },
            messageFilter: {
                type: {
                    enabled: {
                        type: Boolean,
                    },
                    patterns: {
                        type: [ String ],
                    },
                    action: {
                        type: String,
                    },
                },
            },
        }
    },
    warnings: {
        type: {
            threshold: {
                type: Number,
            },
            action: {
                type: String,
            },
        },
    },
    gambling: {
        type: {
            enabled: {
                type: Boolean,
            },
            reward: {
                type: Number,
            },
        },
    },
    streamers: {
        type: {
            twitch: {
                type: {
                    channelId: {
                        type: String,
                    },
                    users: {
                        type: [ String ],
                    },
                },
            },
        },
    },
    disabledCommands: {
        type: [ String ],
    },
    membersOnly: {
        type: Boolean,
    },
}));
