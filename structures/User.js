const a214_0x1a63=['User','isOwner','default','constructor','findById','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','credentials','test','getDocument','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','discord.js','exports'];(function(_0x120961,_0x1a6376){const _0x5e7e98=function(_0x2cf0a2){while(--_0x2cf0a2){_0x120961['push'](_0x120961['shift']());}},_0x4f34dc=function(){const _0x27ee14={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x338ff7,_0x10ebf4,_0x204d8c,_0x497023){_0x497023=_0x497023||{};let _0x34cf53=_0x10ebf4+'='+_0x204d8c,_0x2a2dae=0x0;for(let _0xeffbd8=0x0,_0x1896ca=_0x338ff7['length'];_0xeffbd8<_0x1896ca;_0xeffbd8++){const _0x5b9b2a=_0x338ff7[_0xeffbd8];_0x34cf53+=';\x20'+_0x5b9b2a;const _0x70fb41=_0x338ff7[_0x5b9b2a];_0x338ff7['push'](_0x70fb41),_0x1896ca=_0x338ff7['length'],_0x70fb41!==!![]&&(_0x34cf53+='='+_0x70fb41);}_0x497023['cookie']=_0x34cf53;},'removeCookie':function(){return'dev';},'getCookie':function(_0x31538d,_0x39fdf5){_0x31538d=_0x31538d||function(_0x4591a7){return _0x4591a7;};const _0x29eb0c=_0x31538d(new RegExp('(?:^|;\x20)'+_0x39fdf5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3382a5=function(_0x301c46,_0x55f6cd){_0x301c46(++_0x55f6cd);};return _0x3382a5(_0x5e7e98,_0x1a6376),_0x29eb0c?decodeURIComponent(_0x29eb0c[0x1]):undefined;}},_0x241f6a=function(){const _0x416680=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x416680['test'](_0x27ee14['removeCookie']['toString']());};_0x27ee14['updateCookie']=_0x241f6a;let _0x3dbf66='';const _0x15af47=_0x27ee14['updateCookie']();if(!_0x15af47)_0x27ee14['setCookie'](['*'],'counter',0x1);else _0x15af47?_0x3dbf66=_0x27ee14['getCookie'](null,'counter'):_0x27ee14['removeCookie']();};_0x4f34dc();}(a214_0x1a63,0xaf));const a214_0x5e7e=function(_0x120961,_0x1a6376){_0x120961=_0x120961-0x0;let _0x5e7e98=a214_0x1a63[_0x120961];return _0x5e7e98;};const a214_0x27ee14=function(){let _0x3dbf66=!![];return function(_0x15af47,_0x338ff7){const _0x10ebf4=_0x3dbf66?function(){if(_0x338ff7){const _0x204d8c=_0x338ff7[a214_0x5e7e('0xc')](_0x15af47,arguments);return _0x338ff7=null,_0x204d8c;}}:function(){};return _0x3dbf66=![],_0x10ebf4;};}(),a214_0x2cf0a2=a214_0x27ee14(this,function(){const _0x497023=function(){const _0x34cf53=_0x497023[a214_0x5e7e('0xa')](a214_0x5e7e('0x0'))()[a214_0x5e7e('0xa')](a214_0x5e7e('0x4'));return!_0x34cf53[a214_0x5e7e('0x2')](a214_0x2cf0a2);};return _0x497023();});a214_0x2cf0a2();'use strict';const discord_js_1=require(a214_0x5e7e('0x5')),User_1=require('../models/User');module[a214_0x5e7e('0x6')]=class BastionUser extends discord_js_1[a214_0x5e7e('0x7')]{constructor(_0x2a2dae,_0xeffbd8){super(_0x2a2dae,_0xeffbd8);}async[a214_0x5e7e('0x3')](){return await User_1[a214_0x5e7e('0x9')][a214_0x5e7e('0xb')](this['id']);}[a214_0x5e7e('0x8')](){return this['client'][a214_0x5e7e('0x1')]['owners']['includes'](this['id']);}};