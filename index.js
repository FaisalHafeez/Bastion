const a170_0x3519f2=a170_0x2a79;(function(_0x1a4287,_0x3dd22b){const _0x4fcca8=a170_0x2a79,_0xcde1e2=_0x1a4287();while(!![]){try{const _0x235e92=parseInt(_0x4fcca8(0x176))/0x1*(-parseInt(_0x4fcca8(0x18a))/0x2)+-parseInt(_0x4fcca8(0x193))/0x3*(parseInt(_0x4fcca8(0x17f))/0x4)+parseInt(_0x4fcca8(0x187))/0x5*(parseInt(_0x4fcca8(0x180))/0x6)+-parseInt(_0x4fcca8(0x17c))/0x7*(parseInt(_0x4fcca8(0x190))/0x8)+parseInt(_0x4fcca8(0x16d))/0x9*(parseInt(_0x4fcca8(0x174))/0xa)+parseInt(_0x4fcca8(0x194))/0xb+parseInt(_0x4fcca8(0x188))/0xc*(parseInt(_0x4fcca8(0x185))/0xd);if(_0x235e92===_0x3dd22b)break;else _0xcde1e2['push'](_0xcde1e2['shift']());}catch(_0x4ddb74){_0xcde1e2['push'](_0xcde1e2['shift']());}}}(a170_0x3214,0x1e9e0));function a170_0x3214(){const _0x3dd933=['ready','stdout','catch','now','iamtraction#8383','Bastion','549inOPGe','267035345537728512','login','f2be54a6b3bc34a5b849fdeb2e550d68','toString','Client','PORT','23330rrxIDt','discord-rpc','119033bcNuUM','env','totalShards','Logger','constructor','getConfigurations','77DCTpZW','port','b7b407c827109b547ce91a08e7f9168b','68PBPJzQ','1477068wgQPix','discord.gg/fzx8fkt','settings','__esModule','search','1261lIEUtn','ipc','5ObIkzu','4284qiLpwY','@bastion/tesseract','4mQFKbi','BASTION_BOOT_TIME','(((.+)+)+)+$','write','spawn','start','133656GoMSMJ','version','bastion.traction.one','22293nmCCcu','2755038zMviRr'];a170_0x3214=function(){return _0x3dd933;};return a170_0x3214();}const a170_0x1fca54=(function(){let _0x2f4cbc=!![];return function(_0x46251a,_0x16e685){const _0xfd39cd=_0x2f4cbc?function(){if(_0x16e685){const _0x384753=_0x16e685['apply'](_0x46251a,arguments);return _0x16e685=null,_0x384753;}}:function(){};return _0x2f4cbc=![],_0xfd39cd;};}()),a170_0xd96e0a=a170_0x1fca54(this,function(){const _0x23182c=a170_0x2a79;return a170_0xd96e0a[_0x23182c(0x171)]()[_0x23182c(0x184)](_0x23182c(0x18c))[_0x23182c(0x171)]()[_0x23182c(0x17a)](a170_0xd96e0a)[_0x23182c(0x184)](_0x23182c(0x18c));});a170_0xd96e0a();function a170_0x2a79(_0x477e58,_0x31426f){const _0x4da5dc=a170_0x3214();return a170_0x2a79=function(_0xd96e0a,_0x1fca54){_0xd96e0a=_0xd96e0a-0x16d;let _0x3214f5=_0x4da5dc[_0xd96e0a];return _0x3214f5;},a170_0x2a79(_0x477e58,_0x31426f);}'use strict';Object['defineProperty'](exports,a170_0x3519f2(0x183),{'value':!![]});const tesseract=require(a170_0x3519f2(0x189)),chalk=require('chalk'),DiscordRPC=require(a170_0x3519f2(0x175)),manifest=require('./package.json'),configurations=tesseract[a170_0x3519f2(0x182)][a170_0x3519f2(0x17b)]();process['env'][a170_0x3519f2(0x18b)]=Date[a170_0x3519f2(0x198)]()[a170_0x3519f2(0x171)](),process['stdout']['write']('\x0a'),process[a170_0x3519f2(0x196)][a170_0x3519f2(0x18d)](chalk`{cyan Bastion} {grey v${manifest[a170_0x3519f2(0x191)]}}\n`),process[a170_0x3519f2(0x196)]['write'](chalk`{blue ${manifest['homepage']}}\n`),process[a170_0x3519f2(0x196)][a170_0x3519f2(0x18d)]('\x0a'),process[a170_0x3519f2(0x196)]['write'](chalk`{gray </> with ❤ by The Bastion Bot Team & Contributors}\n`),process[a170_0x3519f2(0x196)][a170_0x3519f2(0x18d)](chalk`{gray Copyright © 2017-2020 The Bastion Bot Project}\n`),process['stdout']['write']('\x0a');const rpc=new DiscordRPC[(a170_0x3519f2(0x172))]({'transport':a170_0x3519f2(0x186)});rpc[a170_0x3519f2(0x16f)]({'clientId':a170_0x3519f2(0x16e)})[a170_0x3519f2(0x197)](()=>{});const Manager=new tesseract['ShardingManager']('./bastion.js'),server=new tesseract['WebServer'](Manager);server[a170_0x3519f2(0x18f)](process[a170_0x3519f2(0x177)][a170_0x3519f2(0x173)]||configurations[a170_0x3519f2(0x17d)]),Manager[a170_0x3519f2(0x18e)]()[a170_0x3519f2(0x197)](tesseract[a170_0x3519f2(0x179)]['error']),Manager['on']('shardCreate',_0x18cb6c=>{const _0x7288=a170_0x3519f2;tesseract[_0x7288(0x179)]['info'](chalk`Shard ${_0x18cb6c['id']} - Launching {grey [ ${_0x18cb6c['id']+0x1} of ${Manager[_0x7288(0x178)]} ]}`);}),rpc['on'](a170_0x3519f2(0x195),()=>{const _0x3edd54=a170_0x3519f2;rpc['setActivity']({'details':_0x3edd54(0x192),'state':_0x3edd54(0x181),'startTimestamp':new Date(),'largeImageKey':_0x3edd54(0x170),'largeImageText':_0x3edd54(0x19a),'smallImageKey':_0x3edd54(0x17e),'smallImageText':_0x3edd54(0x199),'instance':![]});});