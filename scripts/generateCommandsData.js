const a222_0x2d77=['.js','push','statSync','owner','yaml','cooldown','dirname','./assets/commands.json','triggers','resolve','nsfw','ratelimit','relative','return\x20/\x22\x20+\x20this\x20+\x20\x22/','schedulable','stringify','name','join','writeFileSync','constructor','userPermissions','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','typing','unsafe','endsWith','existsSync','description','apply','scope','clientPermission','__esModule','readdirSync','path','utf-8'];(function(_0xf50f7c,_0x2d7720){const _0x3a90f1=function(_0x4f4479){while(--_0x4f4479){_0xf50f7c['push'](_0xf50f7c['shift']());}},_0x11c9da=function(){const _0x2ba24a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x310a91,_0x268ff7,_0x2c3741,_0x26972a){_0x26972a=_0x26972a||{};let _0xca94c7=_0x268ff7+'='+_0x2c3741,_0x3565c7=0x0;for(let _0x1e57ec=0x0,_0x4c06e6=_0x310a91['length'];_0x1e57ec<_0x4c06e6;_0x1e57ec++){const _0x2f4704=_0x310a91[_0x1e57ec];_0xca94c7+=';\x20'+_0x2f4704;const _0x1fbd54=_0x310a91[_0x2f4704];_0x310a91['push'](_0x1fbd54),_0x4c06e6=_0x310a91['length'],_0x1fbd54!==!![]&&(_0xca94c7+='='+_0x1fbd54);}_0x26972a['cookie']=_0xca94c7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x35aaac,_0x213c3e){_0x35aaac=_0x35aaac||function(_0x2ae7d0){return _0x2ae7d0;};const _0x23d092=_0x35aaac(new RegExp('(?:^|;\x20)'+_0x213c3e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1647ad=function(_0x2921be,_0x27fcf5){_0x2921be(++_0x27fcf5);};return _0x1647ad(_0x3a90f1,_0x2d7720),_0x23d092?decodeURIComponent(_0x23d092[0x1]):undefined;}},_0x5ac966=function(){const _0x2b605e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2b605e['test'](_0x2ba24a['removeCookie']['toString']());};_0x2ba24a['updateCookie']=_0x5ac966;let _0x157410='';const _0x35e4b2=_0x2ba24a['updateCookie']();if(!_0x35e4b2)_0x2ba24a['setCookie'](['*'],'counter',0x1);else _0x35e4b2?_0x157410=_0x2ba24a['getCookie'](null,'counter'):_0x2ba24a['removeCookie']();};_0x11c9da();}(a222_0x2d77,0x187));const a222_0x3a90=function(_0xf50f7c,_0x2d7720){_0xf50f7c=_0xf50f7c-0x0;let _0x3a90f1=a222_0x2d77[_0xf50f7c];return _0x3a90f1;};const _0x368f58=a222_0x3a90,a222_0x2ba24a=function(){let _0x157410=!![];return function(_0x35e4b2,_0x310a91){const _0x268ff7=_0x157410?function(){const _0x54ce0e=a222_0x3a90;if(_0x310a91){const _0x2c3741=_0x310a91[_0x54ce0e('0xa')](_0x35e4b2,arguments);return _0x310a91=null,_0x2c3741;}}:function(){};return _0x157410=![],_0x268ff7;};}(),a222_0x4f4479=a222_0x2ba24a(this,function(){const _0x26972a=function(){const _0x302c54=a222_0x3a90,_0xca94c7=_0x26972a[_0x302c54('0x2')](_0x302c54('0x1e'))()[_0x302c54('0x2')](_0x302c54('0x4'));return!_0xca94c7['test'](a222_0x4f4479);};return _0x26972a();});a222_0x4f4479();'use strict';Object['defineProperty'](exports,_0x368f58('0xd'),{'value':!![]});const fs=require('fs'),path=require(_0x368f58('0xf')),yaml=require(_0x368f58('0x15')),walkDirectory=_0x3565c7=>{const _0x1e57ec=[];return function _0x4c06e6(_0x2f4704){const _0x182c3e=a222_0x3a90,_0x1fbd54=fs[_0x182c3e('0xe')](_0x2f4704);for(const _0x35aaac of _0x1fbd54){const _0x213c3e=path[_0x182c3e('0x0')](_0x2f4704,_0x35aaac);if(fs[_0x182c3e('0x13')](_0x213c3e)['isDirectory']())_0x4c06e6(_0x213c3e);else _0x1e57ec[_0x182c3e('0x12')](_0x213c3e);}}(_0x3565c7),_0x1e57ec;},commandsDirectory=path[_0x368f58('0x1a')]('./commands/');if(fs[_0x368f58('0x8')](commandsDirectory)){const files=walkDirectory(commandsDirectory),commandStrings={},commands={};for(const file of files['filter'](_0x23d092=>_0x23d092[_0x368f58('0x7')](_0x368f58('0x11')))){const Command=require(file),command=new Command(),commandCategory=path[_0x368f58('0x17')](path[_0x368f58('0x1d')](commandsDirectory,file));commandStrings[command[_0x368f58('0x21')]]=command[_0x368f58('0x9')],commandCategory in commands?commands[commandCategory]['push']({'name':command[_0x368f58('0x21')],'description':command[_0x368f58('0x9')],'triggers':command[_0x368f58('0x19')],'scope':command['scope'],'owner':command['owner'],'typing':command[_0x368f58('0x5')],'schedulable':command[_0x368f58('0x1f')],'unsafe':command[_0x368f58('0x6')],'nsfw':command['nsfw'],'cooldown':command[_0x368f58('0x16')],'ratelimit':command[_0x368f58('0x1c')],'clientPermission':command[_0x368f58('0xc')],'userPermissions':command['userPermissions'],'syntax':command['syntax']}):commands[commandCategory]=[{'name':command['name'],'description':command['description'],'triggers':command[_0x368f58('0x19')],'scope':command[_0x368f58('0xb')],'owner':command[_0x368f58('0x14')],'typing':command[_0x368f58('0x5')],'schedulable':command[_0x368f58('0x1f')],'unsafe':command['unsafe'],'nsfw':command[_0x368f58('0x1b')],'cooldown':command[_0x368f58('0x16')],'ratelimit':command[_0x368f58('0x1c')],'clientPermission':command['clientPermission'],'userPermissions':command[_0x368f58('0x3')],'syntax':command['syntax']}];}fs[_0x368f58('0x1')]('./locales/en_us/commands.yaml',yaml[_0x368f58('0x20')](commandStrings),{'encoding':_0x368f58('0x10')}),fs[_0x368f58('0x1')](_0x368f58('0x18'),JSON[_0x368f58('0x20')](commands),{'encoding':_0x368f58('0x10')});}