const a60_0x4634=['getString','findById','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../utils/errors','language','boosts','Constants','It\x20allows\x20you\x20to\x20boost\x20the\x20server\x20in\x20Bastion\x27s\x20server\x20listings.\x20You\x20can\x20boost\x20the\x20server\x20once\x20every\x2024\x20hours.\x20Server\x27s\x20boost\x20score\x20gets\x20reset\x20every\x20month.','boost','DiscordError','save','test','exec','Command','BASTION_ERROR_TYPE','channel','../../models/Guild','author','default','findOne','exports','client','tag','toDateString','locale','alreadyBoosted','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getTime','apply','document','bump','guild','ERROR','errors'];(function(_0x2846e9,_0x463437){const _0xd50eb5=function(_0x25ac7b){while(--_0x25ac7b){_0x2846e9['push'](_0x2846e9['shift']());}},_0x458aec=function(){const _0x419a43={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4acc36,_0x409642,_0x1ac5f6,_0x42544a){_0x42544a=_0x42544a||{};let _0x321255=_0x409642+'='+_0x1ac5f6,_0x51b08b=0x0;for(let _0x169a44=0x0,_0x4b19bf=_0x4acc36['length'];_0x169a44<_0x4b19bf;_0x169a44++){const _0x24108a=_0x4acc36[_0x169a44];_0x321255+=';\x20'+_0x24108a;const _0x3e41e0=_0x4acc36[_0x24108a];_0x4acc36['push'](_0x3e41e0),_0x4b19bf=_0x4acc36['length'],_0x3e41e0!==!![]&&(_0x321255+='='+_0x3e41e0);}_0x42544a['cookie']=_0x321255;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a3c93,_0x471470){_0x5a3c93=_0x5a3c93||function(_0xf52e36){return _0xf52e36;};const _0x5c2907=_0x5a3c93(new RegExp('(?:^|;\x20)'+_0x471470['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x15efc8=function(_0x41a2e7,_0x1ab1ab){_0x41a2e7(++_0x1ab1ab);};return _0x15efc8(_0xd50eb5,_0x463437),_0x5c2907?decodeURIComponent(_0x5c2907[0x1]):undefined;}},_0x4edc75=function(){const _0x2802ec=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2802ec['test'](_0x419a43['removeCookie']['toString']());};_0x419a43['updateCookie']=_0x4edc75;let _0x2bd92a='';const _0x5acb5d=_0x419a43['updateCookie']();if(!_0x5acb5d)_0x419a43['setCookie'](['*'],'counter',0x1);else _0x5acb5d?_0x2bd92a=_0x419a43['getCookie'](null,'counter'):_0x419a43['removeCookie']();};_0x458aec();}(a60_0x4634,0x10d));const a60_0xd50e=function(_0x2846e9,_0x463437){_0x2846e9=_0x2846e9-0x0;let _0xd50eb5=a60_0x4634[_0x2846e9];return _0xd50eb5;};const a60_0x1ac5f6=function(){let _0x57cba4=!![];return function(_0x3b0178,_0x297cc0){const _0x4d7347=_0x57cba4?function(){if(_0x297cc0){const _0x235c8d=_0x297cc0[a60_0xd50e('0x1f')](_0x3b0178,arguments);return _0x297cc0=null,_0x235c8d;}}:function(){};return _0x57cba4=![],_0x4d7347;};}(),a60_0x409642=a60_0x1ac5f6(this,function(){const _0x16b636=function(){const _0x4ee13d=_0x16b636['constructor'](a60_0xd50e('0x1d'))()['constructor'](a60_0xd50e('0x5'));return!_0x4ee13d[a60_0xd50e('0xe')](a60_0x409642);};return _0x16b636();});a60_0x409642();'use strict';const tesseract_1=require('@bastion/tesseract'),Guild_1=require(a60_0xd50e('0x13')),Member_1=require('../../models/Member'),errors=require(a60_0xd50e('0x6'));module[a60_0xd50e('0x17')]=class BoostCommand extends tesseract_1[a60_0xd50e('0x10')]{constructor(){super(a60_0xd50e('0xb'),{'description':a60_0xd50e('0xa'),'triggers':[a60_0xd50e('0x21')],'arguments':{},'scope':a60_0xd50e('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a60_0xd50e('0xf')]=async _0x53b973=>{const _0x4c29ab=await Member_1[a60_0xd50e('0x15')][a60_0xd50e('0x16')]({'user':_0x53b973[a60_0xd50e('0x14')]['id'],'guild':_0x53b973[a60_0xd50e('0x0')]['id']}),_0x4b7a39=new Date(),_0x11b111=new Date(_0x4c29ab[a60_0xd50e('0xb')]);if(_0x4b7a39[a60_0xd50e('0x1a')]()===_0x11b111[a60_0xd50e('0x1a')]())throw new errors[(a60_0xd50e('0xc'))](errors[a60_0xd50e('0x11')][a60_0xd50e('0x1')],this[a60_0xd50e('0x18')]['locale'][a60_0xd50e('0x3')](_0x53b973[a60_0xd50e('0x0')][a60_0xd50e('0x20')][a60_0xd50e('0x7')],a60_0xd50e('0x2'),a60_0xd50e('0x1c'),_0x53b973[a60_0xd50e('0x14')][a60_0xd50e('0x19')]));_0x4c29ab['boost']=_0x4b7a39[a60_0xd50e('0x1e')]();const _0x261ca8=await Guild_1[a60_0xd50e('0x15')][a60_0xd50e('0x4')](_0x53b973[a60_0xd50e('0x0')]['id']);if(_0x261ca8[a60_0xd50e('0x8')])_0x261ca8[a60_0xd50e('0x8')]+=0x1;else _0x261ca8[a60_0xd50e('0x8')]=0x1;await _0x261ca8[a60_0xd50e('0xd')](),await _0x4c29ab[a60_0xd50e('0xd')](),await _0x53b973[a60_0xd50e('0x12')]['send']({'embed':{'color':tesseract_1[a60_0xd50e('0x9')]['COLORS']['IRIS'],'description':this[a60_0xd50e('0x18')][a60_0xd50e('0x1b')][a60_0xd50e('0x3')](_0x53b973['guild']['document'][a60_0xd50e('0x7')],'info',a60_0xd50e('0xb'),_0x53b973[a60_0xd50e('0x14')][a60_0xd50e('0x19')])}});};}};