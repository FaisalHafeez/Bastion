const a70_0x2249=['test','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','members','prune','tag','exports','channel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','language','@bastion/tesseract','Constants','number','join','abs','exec','COLORS','days','catch','guild','locale','It\x20allows\x20you\x20to\x20prune\x20members\x20without\x20any\x20roles,\x20from\x20the\x20server,\x20based\x20on\x20how\x20long\x20they\x20have\x20been\x20inactive.','client','apply','document','author','membersPrune','MANAGE_GUILD','prune\x20--\x20REASON','membersPruneQuestion','info','default'];(function(_0x523976,_0x2249c7){const _0x4c3d3f=function(_0x576a84){while(--_0x576a84){_0x523976['push'](_0x523976['shift']());}},_0x26beb9=function(){const _0xee852f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x305f08,_0x2f43e3,_0x127191,_0x28d951){_0x28d951=_0x28d951||{};let _0x35bf2d=_0x2f43e3+'='+_0x127191,_0x164945=0x0;for(let _0x23f452=0x0,_0x1ddc70=_0x305f08['length'];_0x23f452<_0x1ddc70;_0x23f452++){const _0x2a12b6=_0x305f08[_0x23f452];_0x35bf2d+=';\x20'+_0x2a12b6;const _0x8aacfc=_0x305f08[_0x2a12b6];_0x305f08['push'](_0x8aacfc),_0x1ddc70=_0x305f08['length'],_0x8aacfc!==!![]&&(_0x35bf2d+='='+_0x8aacfc);}_0x28d951['cookie']=_0x35bf2d;},'removeCookie':function(){return'dev';},'getCookie':function(_0xbca1de,_0x4d50ff){_0xbca1de=_0xbca1de||function(_0x1610e7){return _0x1610e7;};const _0xc76e4d=_0xbca1de(new RegExp('(?:^|;\x20)'+_0x4d50ff['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x532954=function(_0xac3e40,_0x35a8ba){_0xac3e40(++_0x35a8ba);};return _0x532954(_0x4c3d3f,_0x2249c7),_0xc76e4d?decodeURIComponent(_0xc76e4d[0x1]):undefined;}},_0x4bd1a6=function(){const _0x2d7f62=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2d7f62['test'](_0xee852f['removeCookie']['toString']());};_0xee852f['updateCookie']=_0x4bd1a6;let _0x4643f0='';const _0x21753c=_0xee852f['updateCookie']();if(!_0x21753c)_0xee852f['setCookie'](['*'],'counter',0x1);else _0x21753c?_0x4643f0=_0xee852f['getCookie'](null,'counter'):_0xee852f['removeCookie']();};_0x26beb9();}(a70_0x2249,0x1bd));const a70_0x4c3d=function(_0x523976,_0x2249c7){_0x523976=_0x523976-0x0;let _0x4c3d3f=a70_0x2249[_0x523976];return _0x4c3d3f;};const a70_0x127191=function(){let _0x4a6bfa=!![];return function(_0x515e8b,_0x11d155){const _0x2bf680=_0x4a6bfa?function(){if(_0x11d155){const _0x34b824=_0x11d155[a70_0x4c3d('0x1a')](_0x515e8b,arguments);return _0x11d155=null,_0x34b824;}}:function(){};return _0x4a6bfa=![],_0x2bf680;};}(),a70_0x2f43e3=a70_0x127191(this,function(){const _0x79fb5b=function(){const _0x26e9f0=_0x79fb5b[a70_0x4c3d('0x4')](a70_0x4c3d('0x5'))()[a70_0x4c3d('0x4')](a70_0x4c3d('0xb'));return!_0x26e9f0[a70_0x4c3d('0x3')](a70_0x2f43e3);};return _0x79fb5b();});a70_0x2f43e3();'use strict';const tesseract_1=require(a70_0x4c3d('0xd')),confirmation_1=require('../../utils/confirmation');module[a70_0x4c3d('0x9')]=class PruneCommand extends tesseract_1['Command']{constructor(){super(a70_0x4c3d('0x7'),{'description':a70_0x4c3d('0x18'),'triggers':[],'arguments':{'alias':{'days':'d'},'string':[a70_0x4c3d('0x14')]},'scope':a70_0x4c3d('0x16'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a70_0x4c3d('0x1e')],'userPermissions':['MANAGE_GUILD'],'syntax':[a70_0x4c3d('0x1f'),'prune\x20--days\x20NUMBER\x20--\x20REASON']}),this[a70_0x4c3d('0x12')]=async(_0x37288e,_0x5c2893)=>{const _0x4b5b1e=typeof _0x5c2893[a70_0x4c3d('0x14')]===a70_0x4c3d('0xf')?Math[a70_0x4c3d('0x11')](_0x5c2893[a70_0x4c3d('0x14')]):0x7,_0x2c852a=_0x5c2893['_'][a70_0x4c3d('0x10')]('\x20')||'-',_0x27e1a1=await confirmation_1[a70_0x4c3d('0x2')](_0x37288e,this['client']['locale']['getString'](_0x37288e['guild']['document'][a70_0x4c3d('0xc')],'info',a70_0x4c3d('0x0'),_0x37288e[a70_0x4c3d('0x1c')][a70_0x4c3d('0x8')],_0x4b5b1e));if(!_0x27e1a1)return;return await _0x37288e[a70_0x4c3d('0x16')][a70_0x4c3d('0x6')][a70_0x4c3d('0x7')]({'days':_0x4b5b1e,'reason':_0x2c852a}),_0x37288e[a70_0x4c3d('0xa')]['send']({'embed':{'color':tesseract_1[a70_0x4c3d('0xe')][a70_0x4c3d('0x13')]['RED'],'description':this[a70_0x4c3d('0x19')][a70_0x4c3d('0x17')]['getString'](_0x37288e[a70_0x4c3d('0x16')][a70_0x4c3d('0x1b')][a70_0x4c3d('0xc')],a70_0x4c3d('0x1'),a70_0x4c3d('0x1d'),_0x37288e[a70_0x4c3d('0x1c')]['tag'],_0x4b5b1e,_0x2c852a)}})[a70_0x4c3d('0x15')](()=>{});};}};