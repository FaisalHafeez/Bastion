const a118_0x5c0f=['setVolume','INVALID_COMMAND_SYNTAX','name','../../utils/constants','locale','musicDisabledPublic','client','music','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/errors','COLORS','voice','dispatcher','guild','tag','exec','@bastion/tesseract','paused','\x20•\x20','getString','enabled','isMusicMaster','channel','volume','playing','constructor','Constants','catch','language','queue','connection','errors','document','apply','parseInt','textChannel','test','length','BASTION_ERROR_TYPE','isInteger','author','DiscordError','volume\x2042','musicDisabled','RED','send'];(function(_0x325634,_0x5c0f0b){const _0x1b8804=function(_0x4f88aa){while(--_0x4f88aa){_0x325634['push'](_0x325634['shift']());}},_0x368eb7=function(){const _0x574bea={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x75b7a4,_0x49e69c,_0x1937ed,_0x17bf25){_0x17bf25=_0x17bf25||{};let _0x15725d=_0x49e69c+'='+_0x1937ed,_0x5206bb=0x0;for(let _0x4df94e=0x0,_0x2f2edf=_0x75b7a4['length'];_0x4df94e<_0x2f2edf;_0x4df94e++){const _0x3b8ca9=_0x75b7a4[_0x4df94e];_0x15725d+=';\x20'+_0x3b8ca9;const _0x2bf1c6=_0x75b7a4[_0x3b8ca9];_0x75b7a4['push'](_0x2bf1c6),_0x2f2edf=_0x75b7a4['length'],_0x2bf1c6!==!![]&&(_0x15725d+='='+_0x2bf1c6);}_0x17bf25['cookie']=_0x15725d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x237f25,_0x2a542d){_0x237f25=_0x237f25||function(_0x27824b){return _0x27824b;};const _0xc0c61f=_0x237f25(new RegExp('(?:^|;\x20)'+_0x2a542d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x21e7ea=function(_0x4e4a5a,_0x17caed){_0x4e4a5a(++_0x17caed);};return _0x21e7ea(_0x1b8804,_0x5c0f0b),_0xc0c61f?decodeURIComponent(_0xc0c61f[0x1]):undefined;}},_0xb8b3f6=function(){const _0x24aaca=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x24aaca['test'](_0x574bea['removeCookie']['toString']());};_0x574bea['updateCookie']=_0xb8b3f6;let _0xf18980='';const _0xe6df78=_0x574bea['updateCookie']();if(!_0xe6df78)_0x574bea['setCookie'](['*'],'counter',0x1);else _0xe6df78?_0xf18980=_0x574bea['getCookie'](null,'counter'):_0x574bea['removeCookie']();};_0x368eb7();}(a118_0x5c0f,0x131));const a118_0x1b88=function(_0x325634,_0x5c0f0b){_0x325634=_0x325634-0x0;let _0x1b8804=a118_0x5c0f[_0x325634];return _0x1b8804;};const _0x3a5fa0=a118_0x1b88,a118_0x574bea=function(){let _0xf18980=!![];return function(_0xe6df78,_0x75b7a4){const _0x49e69c=_0xf18980?function(){const _0x94d2b8=a118_0x1b88;if(_0x75b7a4){const _0x1937ed=_0x75b7a4[_0x94d2b8('0x4')](_0xe6df78,arguments);return _0x75b7a4=null,_0x1937ed;}}:function(){};return _0xf18980=![],_0x49e69c;};}(),a118_0x4f88aa=a118_0x574bea(this,function(){const _0x17bf25=function(){const _0x389b27=a118_0x1b88,_0x15725d=_0x17bf25[_0x389b27('0x2a')](_0x389b27('0x19'))()[_0x389b27('0x2a')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x15725d[_0x389b27('0x7')](a118_0x4f88aa);};return _0x17bf25();});a118_0x4f88aa();'use strict';const tesseract_1=require(_0x3a5fa0('0x21')),constants=require(_0x3a5fa0('0x14')),errors=require(_0x3a5fa0('0x1a'));module['exports']=class Volume extends tesseract_1['Command']{constructor(){const _0x255c5c=_0x3a5fa0;super(_0x255c5c('0x28'),{'description':'It\x20allows\x20you\x20to\x20set\x20the\x20volume\x20of\x20the\x20music\x20track\x20that\x20is\x20currently\x20being\x20played\x20in\x20the\x20server.','triggers':[],'arguments':{},'scope':_0x255c5c('0x1e'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x255c5c('0xd')]}),this[_0x255c5c('0x20')]=async(_0x5206bb,_0x4df94e)=>{const _0x4ed992=_0x255c5c;let _0x2f2edf=Number[_0x4ed992('0x5')](_0x4df94e['_'][0x0]);if(!_0x4df94e['_'][_0x4ed992('0x8')]||!Number[_0x4ed992('0xa')](_0x2f2edf))throw new errors[(_0x4ed992('0xc'))](errors[_0x4ed992('0x9')][_0x4ed992('0x12')],this[_0x4ed992('0x13')]);const _0x3b8ca9=_0x5206bb['guild'];if(!_0x3b8ca9[_0x4ed992('0x3')][_0x4ed992('0x18')]||!_0x3b8ca9['document']['music'][_0x4ed992('0x25')])return await _0x5206bb[_0x4ed992('0x27')][_0x4ed992('0x10')]({'embed':{'color':tesseract_1[_0x4ed992('0x2b')]['COLORS'][_0x4ed992('0xf')],'description':this[_0x4ed992('0x17')][_0x4ed992('0x15')][_0x4ed992('0x24')](_0x5206bb[_0x4ed992('0x1e')][_0x4ed992('0x3')][_0x4ed992('0x2d')],_0x4ed992('0x2'),constants['isPublicBastion'](_0x5206bb['author'])?_0x4ed992('0x16'):_0x4ed992('0xe'))}})['catch'](()=>{});if(!_0x5206bb['member'][_0x4ed992('0x26')]())return;if(_0x3b8ca9[_0x4ed992('0x18')][_0x4ed992('0x29')]&&_0x3b8ca9['voice']&&_0x3b8ca9[_0x4ed992('0x1c')][_0x4ed992('0x1')]['dispatcher']&&!_0x3b8ca9[_0x4ed992('0x1c')]['connection'][_0x4ed992('0x1d')][_0x4ed992('0x22')]){_0x2f2edf=_0x2f2edf<0x1?0x1:_0x2f2edf>0xc8?0xc8:_0x2f2edf,_0x3b8ca9[_0x4ed992('0x1c')][_0x4ed992('0x1')][_0x4ed992('0x1d')][_0x4ed992('0x11')](_0x2f2edf/0x64);const _0x2bf1c6=_0x3b8ca9[_0x4ed992('0x18')][_0x4ed992('0x0')][0x0];_0x3b8ca9[_0x4ed992('0x18')][_0x4ed992('0x6')][_0x4ed992('0x10')]({'embed':{'color':tesseract_1[_0x4ed992('0x2b')][_0x4ed992('0x1b')]['PINK'],'title':'Volume','description':this[_0x4ed992('0x17')][_0x4ed992('0x15')][_0x4ed992('0x24')](_0x5206bb[_0x4ed992('0x1e')][_0x4ed992('0x3')][_0x4ed992('0x2d')],'info',_0x4ed992('0x11'),_0x5206bb[_0x4ed992('0xb')][_0x4ed992('0x1f')],_0x2f2edf),'footer':{'text':_0x2bf1c6['track']+_0x4ed992('0x23')+_0x3b8ca9[_0x4ed992('0x1c')][_0x4ed992('0x1')][_0x4ed992('0x27')][_0x4ed992('0x13')]}}})[_0x4ed992('0x2c')](()=>{});}};}};