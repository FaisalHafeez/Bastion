const a206_0x2879=['Schema','Guild','TextChannel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Giveaway','test','constructor','model','apply','mongoose'];(function(_0xbd7b79,_0x287980){const _0x424f1e=function(_0x200bf1){while(--_0x200bf1){_0xbd7b79['push'](_0xbd7b79['shift']());}},_0x46a65b=function(){const _0x1cfdb1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4037e7,_0x2377e9,_0x2e9521,_0xc99f66){_0xc99f66=_0xc99f66||{};let _0x317f8e=_0x2377e9+'='+_0x2e9521,_0x1a7784=0x0;for(let _0x114a28=0x0,_0x1e52d0=_0x4037e7['length'];_0x114a28<_0x1e52d0;_0x114a28++){const _0x499592=_0x4037e7[_0x114a28];_0x317f8e+=';\x20'+_0x499592;const _0x24569b=_0x4037e7[_0x499592];_0x4037e7['push'](_0x24569b),_0x1e52d0=_0x4037e7['length'],_0x24569b!==!![]&&(_0x317f8e+='='+_0x24569b);}_0xc99f66['cookie']=_0x317f8e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2f05ef,_0x3a2d1a){_0x2f05ef=_0x2f05ef||function(_0x5c245b){return _0x5c245b;};const _0x57a5b1=_0x2f05ef(new RegExp('(?:^|;\x20)'+_0x3a2d1a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3bcf9b=function(_0x2ab10f,_0x3d55e8){_0x2ab10f(++_0x3d55e8);};return _0x3bcf9b(_0x424f1e,_0x287980),_0x57a5b1?decodeURIComponent(_0x57a5b1[0x1]):undefined;}},_0x2df5c1=function(){const _0x59d16f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x59d16f['test'](_0x1cfdb1['removeCookie']['toString']());};_0x1cfdb1['updateCookie']=_0x2df5c1;let _0x204aa4='';const _0x5a00b6=_0x1cfdb1['updateCookie']();if(!_0x5a00b6)_0x1cfdb1['setCookie'](['*'],'counter',0x1);else _0x5a00b6?_0x204aa4=_0x1cfdb1['getCookie'](null,'counter'):_0x1cfdb1['removeCookie']();};_0x46a65b();}(a206_0x2879,0x18b));const a206_0x424f=function(_0xbd7b79,_0x287980){_0xbd7b79=_0xbd7b79-0x0;let _0x424f1e=a206_0x2879[_0xbd7b79];return _0x424f1e;};const _0x1b73d1=a206_0x424f,a206_0x1cfdb1=function(){let _0x204aa4=!![];return function(_0x5a00b6,_0x4037e7){const _0x2377e9=_0x204aa4?function(){const _0xfc7229=a206_0x424f;if(_0x4037e7){const _0x2e9521=_0x4037e7[_0xfc7229('0xa')](_0x5a00b6,arguments);return _0x4037e7=null,_0x2e9521;}}:function(){};return _0x204aa4=![],_0x2377e9;};}(),a206_0x200bf1=a206_0x1cfdb1(this,function(){const _0xc99f66=function(){const _0x55d85f=a206_0x424f,_0x317f8e=_0xc99f66[_0x55d85f('0x8')](_0x55d85f('0x4'))()[_0x55d85f('0x8')](_0x55d85f('0x5'));return!_0x317f8e[_0x55d85f('0x7')](a206_0x200bf1);};return _0xc99f66();});a206_0x200bf1();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const mongoose=require(_0x1b73d1('0x0')),giveawaySchema=new mongoose[(_0x1b73d1('0x1'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':_0x1b73d1('0x3')},'guild':{'type':String,'required':!![],'ref':_0x1b73d1('0x2')},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports['default']=mongoose[_0x1b73d1('0x9')](_0x1b73d1('0x6'),giveawaySchema);