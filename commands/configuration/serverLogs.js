const a33_0x19d9=['GREEN','disable','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20logging\x20of\x20the\x20server\x20events.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Server\x20Log\x20Channel\x20that\x20will\x20log\x20the\x20server\x20events.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','serverLogs\x20--disable','send','COLORS','exec','serverLogChannelId','document','serverLogsEnable','test','catch','client','RED','channel','guild','info','tag','Constants','serverLogsDisable','constructor','locale','apply','serverLogs','save','@bastion/tesseract','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getString','MANAGE_GUILD','exports'];(function(_0x27cfee,_0x19d9c6){const _0x4cba6e=function(_0x4e3e45){while(--_0x4e3e45){_0x27cfee['push'](_0x27cfee['shift']());}},_0x2d1f5d=function(){const _0x4bd9dc={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4f0237,_0x2a6dc3,_0x2b8b00,_0xf86649){_0xf86649=_0xf86649||{};let _0x1bdeab=_0x2a6dc3+'='+_0x2b8b00,_0x42dad3=0x0;for(let _0x39ba1b=0x0,_0xad9e4=_0x4f0237['length'];_0x39ba1b<_0xad9e4;_0x39ba1b++){const _0x1d3135=_0x4f0237[_0x39ba1b];_0x1bdeab+=';\x20'+_0x1d3135;const _0x26f88c=_0x4f0237[_0x1d3135];_0x4f0237['push'](_0x26f88c),_0xad9e4=_0x4f0237['length'],_0x26f88c!==!![]&&(_0x1bdeab+='='+_0x26f88c);}_0xf86649['cookie']=_0x1bdeab;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1935d0,_0x31dfa9){_0x1935d0=_0x1935d0||function(_0x2daea1){return _0x2daea1;};const _0x5a951e=_0x1935d0(new RegExp('(?:^|;\x20)'+_0x31dfa9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2b9022=function(_0x487d56,_0x3eb0fb){_0x487d56(++_0x3eb0fb);};return _0x2b9022(_0x4cba6e,_0x19d9c6),_0x5a951e?decodeURIComponent(_0x5a951e[0x1]):undefined;}},_0x29389c=function(){const _0x3f1384=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f1384['test'](_0x4bd9dc['removeCookie']['toString']());};_0x4bd9dc['updateCookie']=_0x29389c;let _0x45cc93='';const _0x6f9784=_0x4bd9dc['updateCookie']();if(!_0x6f9784)_0x4bd9dc['setCookie'](['*'],'counter',0x1);else _0x6f9784?_0x45cc93=_0x4bd9dc['getCookie'](null,'counter'):_0x4bd9dc['removeCookie']();};_0x2d1f5d();}(a33_0x19d9,0x10b));const a33_0x4cba=function(_0x27cfee,_0x19d9c6){_0x27cfee=_0x27cfee-0x0;let _0x4cba6e=a33_0x19d9[_0x27cfee];return _0x4cba6e;};const a33_0x2b8b00=function(){let _0xa7f596=!![];return function(_0x55779b,_0x2561c4){const _0x30e0b9=_0xa7f596?function(){if(_0x2561c4){const _0x5ec42d=_0x2561c4[a33_0x4cba('0x4')](_0x55779b,arguments);return _0x2561c4=null,_0x5ec42d;}}:function(){};return _0xa7f596=![],_0x30e0b9;};}(),a33_0x2a6dc3=a33_0x2b8b00(this,function(){const _0x56d7b2=function(){const _0x22eb73=_0x56d7b2[a33_0x4cba('0x2')](a33_0x4cba('0xf'))()[a33_0x4cba('0x2')](a33_0x4cba('0x8'));return!_0x22eb73[a33_0x4cba('0x17')](a33_0x2a6dc3);};return _0x56d7b2();});a33_0x2a6dc3();'use strict';const tesseract_1=require(a33_0x4cba('0x7'));module[a33_0x4cba('0xb')]=class ServerLogs extends tesseract_1['Command']{constructor(){super(a33_0x4cba('0x5'),{'description':a33_0x4cba('0xe'),'triggers':[],'arguments':{'alias':{'disable':['d']},'boolean':['disable']},'scope':a33_0x4cba('0x1c'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a33_0x4cba('0xa')],'syntax':['serverLogs',a33_0x4cba('0x10')]}),this[a33_0x4cba('0x13')]=async(_0x15b0f6,_0x58f0fc)=>{const _0x471955=_0x15b0f6[a33_0x4cba('0x1c')];_0x58f0fc[a33_0x4cba('0xd')]?(_0x471955['document'][a33_0x4cba('0x14')]=undefined,delete _0x471955[a33_0x4cba('0x15')][a33_0x4cba('0x14')]):_0x471955[a33_0x4cba('0x15')]['serverLogChannelId']=_0x15b0f6[a33_0x4cba('0x1b')]['id'],await _0x471955[a33_0x4cba('0x15')][a33_0x4cba('0x6')](),await _0x15b0f6[a33_0x4cba('0x1b')][a33_0x4cba('0x11')]({'embed':{'color':_0x471955[a33_0x4cba('0x15')][a33_0x4cba('0x14')]?tesseract_1[a33_0x4cba('0x0')][a33_0x4cba('0x12')][a33_0x4cba('0xc')]:tesseract_1[a33_0x4cba('0x0')]['COLORS'][a33_0x4cba('0x1a')],'description':this[a33_0x4cba('0x19')][a33_0x4cba('0x3')][a33_0x4cba('0x9')](_0x15b0f6[a33_0x4cba('0x1c')]['document']['language'],a33_0x4cba('0x1d'),_0x471955[a33_0x4cba('0x15')][a33_0x4cba('0x14')]?a33_0x4cba('0x16'):a33_0x4cba('0x1'),_0x15b0f6['author'][a33_0x4cba('0x1e')])}})[a33_0x4cba('0x18')](()=>{});};}};