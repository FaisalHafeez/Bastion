const a223_0x25a5=['includes','base64','isUnicodeEmoji','from','apply','__esModule','../assets/emojis.json','isValid','toString','return\x20/\x22\x20+\x20this\x20+\x20\x22/','match','defineProperty','parseEmoji','./snowflake','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','utf-8','constructor','getEmojis'];(function(_0x4e551d,_0x25a54a){const _0x322eba=function(_0x559fbc){while(--_0x559fbc){_0x4e551d['push'](_0x4e551d['shift']());}},_0x3c2262=function(){const _0x533ebd={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x25b5b2,_0x398aab,_0xc06e8b,_0x32281d){_0x32281d=_0x32281d||{};let _0x201376=_0x398aab+'='+_0xc06e8b,_0x4a04fc=0x0;for(let _0x315df0=0x0,_0x4e8601=_0x25b5b2['length'];_0x315df0<_0x4e8601;_0x315df0++){const _0x5e526f=_0x25b5b2[_0x315df0];_0x201376+=';\x20'+_0x5e526f;const _0xad9feb=_0x25b5b2[_0x5e526f];_0x25b5b2['push'](_0xad9feb),_0x4e8601=_0x25b5b2['length'],_0xad9feb!==!![]&&(_0x201376+='='+_0xad9feb);}_0x32281d['cookie']=_0x201376;},'removeCookie':function(){return'dev';},'getCookie':function(_0x362554,_0x33b263){_0x362554=_0x362554||function(_0x1fad5a){return _0x1fad5a;};const _0x39a9ef=_0x362554(new RegExp('(?:^|;\x20)'+_0x33b263['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xf293e=function(_0x44997a,_0x3be171){_0x44997a(++_0x3be171);};return _0xf293e(_0x322eba,_0x25a54a),_0x39a9ef?decodeURIComponent(_0x39a9ef[0x1]):undefined;}},_0x3d7473=function(){const _0x470add=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x470add['test'](_0x533ebd['removeCookie']['toString']());};_0x533ebd['updateCookie']=_0x3d7473;let _0x1ef539='';const _0x45a210=_0x533ebd['updateCookie']();if(!_0x45a210)_0x533ebd['setCookie'](['*'],'counter',0x1);else _0x45a210?_0x1ef539=_0x533ebd['getCookie'](null,'counter'):_0x533ebd['removeCookie']();};_0x3c2262();}(a223_0x25a5,0x1ad));const a223_0x322e=function(_0x4e551d,_0x25a54a){_0x4e551d=_0x4e551d-0x0;let _0x322eba=a223_0x25a5[_0x4e551d];return _0x322eba;};const a223_0x533ebd=function(){let _0x1ef539=!![];return function(_0x45a210,_0x25b5b2){const _0x398aab=_0x1ef539?function(){if(_0x25b5b2){const _0xc06e8b=_0x25b5b2[a223_0x322e('0x7')](_0x45a210,arguments);return _0x25b5b2=null,_0xc06e8b;}}:function(){};return _0x1ef539=![],_0x398aab;};}(),a223_0x559fbc=a223_0x533ebd(this,function(){const _0x32281d=function(){const _0x201376=_0x32281d[a223_0x322e('0x1')](a223_0x322e('0xc'))()[a223_0x322e('0x1')](a223_0x322e('0x11'));return!_0x201376['test'](a223_0x559fbc);};return _0x32281d();});a223_0x559fbc();'use strict';Object[a223_0x322e('0xe')](exports,a223_0x322e('0x8'),{'value':!![]}),exports[a223_0x322e('0xf')]=exports[a223_0x322e('0x5')]=exports['getEmojis']=void 0x0;const emojis=require(a223_0x322e('0x9')),snowflake=require(a223_0x322e('0x10')),getEmojis=()=>{return emojis;};exports[a223_0x322e('0x2')]=getEmojis;const isUnicodeEmoji=_0x4a04fc=>{return emojis['includes'](Buffer[a223_0x322e('0x6')](_0x4a04fc)[a223_0x322e('0xb')](a223_0x322e('0x4')));};exports[a223_0x322e('0x5')]=isUnicodeEmoji;const parseEmoji=_0x315df0=>{if(!_0x315df0)return;let _0x4e8601;if(emojis[a223_0x322e('0x3')](_0x315df0))_0x4e8601={'value':_0x315df0,'reaction':Buffer[a223_0x322e('0x6')](_0x315df0,a223_0x322e('0x4'))[a223_0x322e('0xb')](a223_0x322e('0x0'))};else{if(emojis['includes'](Buffer['from'](_0x315df0)[a223_0x322e('0xb')]('base64')))_0x4e8601={'value':Buffer[a223_0x322e('0x6')](_0x315df0)['toString']('base64'),'reaction':_0x315df0};else{if(_0x315df0[a223_0x322e('0x3')](':')){const [,_0x5e526f]=_0x315df0[a223_0x322e('0xd')](/<a?:\w+:(\d+)>/i);_0x4e8601={'value':_0x5e526f,'reaction':_0x5e526f};}else snowflake[a223_0x322e('0xa')](_0x315df0)&&(_0x4e8601={'value':_0x315df0,'reaction':_0x315df0});}}return _0x4e8601;};exports[a223_0x322e('0xf')]=parseEmoji;