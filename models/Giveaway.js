const a191_0x3a9b=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','default','mongoose','__esModule','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Schema','apply','test'];(function(_0x3f5c11,_0x3a9b2e){const _0x4d55eb=function(_0x14c913){while(--_0x14c913){_0x3f5c11['push'](_0x3f5c11['shift']());}},_0x234e8d=function(){const _0x12cde9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1cc214,_0x195dd9,_0x35a3b6,_0x51b687){_0x51b687=_0x51b687||{};let _0x5d14f9=_0x195dd9+'='+_0x35a3b6,_0x341f56=0x0;for(let _0x5469c1=0x0,_0xb8b7b3=_0x1cc214['length'];_0x5469c1<_0xb8b7b3;_0x5469c1++){const _0x2d50bb=_0x1cc214[_0x5469c1];_0x5d14f9+=';\x20'+_0x2d50bb;const _0x37be71=_0x1cc214[_0x2d50bb];_0x1cc214['push'](_0x37be71),_0xb8b7b3=_0x1cc214['length'],_0x37be71!==!![]&&(_0x5d14f9+='='+_0x37be71);}_0x51b687['cookie']=_0x5d14f9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4556b3,_0x5995bb){_0x4556b3=_0x4556b3||function(_0x363ff5){return _0x363ff5;};const _0x7cdf48=_0x4556b3(new RegExp('(?:^|;\x20)'+_0x5995bb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5419e4=function(_0x5641ee,_0x5ec1ed){_0x5641ee(++_0x5ec1ed);};return _0x5419e4(_0x4d55eb,_0x3a9b2e),_0x7cdf48?decodeURIComponent(_0x7cdf48[0x1]):undefined;}},_0x15c92a=function(){const _0x39a60e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x39a60e['test'](_0x12cde9['removeCookie']['toString']());};_0x12cde9['updateCookie']=_0x15c92a;let _0x5bb02d='';const _0x2a5145=_0x12cde9['updateCookie']();if(!_0x2a5145)_0x12cde9['setCookie'](['*'],'counter',0x1);else _0x2a5145?_0x5bb02d=_0x12cde9['getCookie'](null,'counter'):_0x12cde9['removeCookie']();};_0x234e8d();}(a191_0x3a9b,0x16e));const a191_0x4d55=function(_0x3f5c11,_0x3a9b2e){_0x3f5c11=_0x3f5c11-0x0;let _0x4d55eb=a191_0x3a9b[_0x3f5c11];return _0x4d55eb;};const a191_0x12cde9=function(){let _0x5bb02d=!![];return function(_0x2a5145,_0x1cc214){const _0x195dd9=_0x5bb02d?function(){if(_0x1cc214){const _0x35a3b6=_0x1cc214[a191_0x4d55('0x1')](_0x2a5145,arguments);return _0x1cc214=null,_0x35a3b6;}}:function(){};return _0x5bb02d=![],_0x195dd9;};}(),a191_0x14c913=a191_0x12cde9(this,function(){const _0x51b687=function(){const _0x5d14f9=_0x51b687[a191_0x4d55('0x4')](a191_0x4d55('0x3'))()['constructor'](a191_0x4d55('0x8'));return!_0x5d14f9[a191_0x4d55('0x2')](a191_0x14c913);};return _0x51b687();});a191_0x14c913();'use strict';Object['defineProperty'](exports,a191_0x4d55('0x7'),{'value':!![]});const mongoose=require(a191_0x4d55('0x6')),giveawaySchema=new mongoose[(a191_0x4d55('0x0'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':'TextChannel'},'guild':{'type':String,'required':!![],'ref':'Guild'},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports[a191_0x4d55('0x5')]=mongoose['model']('Giveaway',giveawaySchema);