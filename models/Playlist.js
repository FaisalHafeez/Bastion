const a194_0x3b98=['User','default','test','constructor','defineProperty','Schema','model','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','Playlist'];(function(_0x7ff2e1,_0x3b98cc){const _0x8fd85a=function(_0x15f256){while(--_0x15f256){_0x7ff2e1['push'](_0x7ff2e1['shift']());}},_0x13621f=function(){const _0x512f33={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x330dae,_0x250929,_0x3139ac,_0x16964e){_0x16964e=_0x16964e||{};let _0x11ba7a=_0x250929+'='+_0x3139ac,_0xeb2159=0x0;for(let _0x342fde=0x0,_0x2514a3=_0x330dae['length'];_0x342fde<_0x2514a3;_0x342fde++){const _0x5e0f99=_0x330dae[_0x342fde];_0x11ba7a+=';\x20'+_0x5e0f99;const _0xf70503=_0x330dae[_0x5e0f99];_0x330dae['push'](_0xf70503),_0x2514a3=_0x330dae['length'],_0xf70503!==!![]&&(_0x11ba7a+='='+_0xf70503);}_0x16964e['cookie']=_0x11ba7a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x39ab90,_0x3106fe){_0x39ab90=_0x39ab90||function(_0x110ce6){return _0x110ce6;};const _0x502ad8=_0x39ab90(new RegExp('(?:^|;\x20)'+_0x3106fe['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x49c644=function(_0x3cf3c3,_0x22f511){_0x3cf3c3(++_0x22f511);};return _0x49c644(_0x8fd85a,_0x3b98cc),_0x502ad8?decodeURIComponent(_0x502ad8[0x1]):undefined;}},_0x5e3190=function(){const _0x59b280=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x59b280['test'](_0x512f33['removeCookie']['toString']());};_0x512f33['updateCookie']=_0x5e3190;let _0x59d2f6='';const _0x2d1d6c=_0x512f33['updateCookie']();if(!_0x2d1d6c)_0x512f33['setCookie'](['*'],'counter',0x1);else _0x2d1d6c?_0x59d2f6=_0x512f33['getCookie'](null,'counter'):_0x512f33['removeCookie']();};_0x13621f();}(a194_0x3b98,0x85));const a194_0x8fd8=function(_0x7ff2e1,_0x3b98cc){_0x7ff2e1=_0x7ff2e1-0x0;let _0x8fd85a=a194_0x3b98[_0x7ff2e1];return _0x8fd85a;};const a194_0x512f33=function(){let _0x59d2f6=!![];return function(_0x2d1d6c,_0x330dae){const _0x250929=_0x59d2f6?function(){if(_0x330dae){const _0x3139ac=_0x330dae[a194_0x8fd8('0x5')](_0x2d1d6c,arguments);return _0x330dae=null,_0x3139ac;}}:function(){};return _0x59d2f6=![],_0x250929;};}(),a194_0x15f256=a194_0x512f33(this,function(){const _0x16964e=function(){const _0x11ba7a=_0x16964e[a194_0x8fd8('0x0')](a194_0x8fd8('0x4'))()[a194_0x8fd8('0x0')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x11ba7a[a194_0x8fd8('0x9')](a194_0x15f256);};return _0x16964e();});a194_0x15f256();'use strict';Object[a194_0x8fd8('0x1')](exports,'__esModule',{'value':!![]});const mongoose=require('mongoose'),playlistSchema=new mongoose[(a194_0x8fd8('0x2'))]({'guild':{'type':String,'required':!![],'ref':'Guild'},'creator':{'type':String,'required':!![],'ref':a194_0x8fd8('0x7')},'songs':{'type':[String]}});exports[a194_0x8fd8('0x8')]=mongoose[a194_0x8fd8('0x3')](a194_0x8fd8('0x6'),playlistSchema);