const a71_0x58d3=['GREEN','client','update','constructor','lockdown','exec','remove','MANAGE_GUILD','channel','It\x20allows\x20you\x20lockdown\x20a\x20channel\x20in\x20the\x20server\x20from\x20users\x20who\x20don\x27t\x20have\x20permission\x20to\x20manage\x20messages\x20or\x20the\x20channel.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','has','lockdown\x20--remove','tag','COLORS','lockdownChannel','locale','Constants','allow','document','ORANGE','lockdownChannelRemove','@bastion/tesseract','Command','catch','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','guild','info','values','MANAGE_CHANNELS','MANAGE_MESSAGES'];(function(_0x163654,_0x58d3d1){const _0x477416=function(_0x200965){while(--_0x200965){_0x163654['push'](_0x163654['shift']());}},_0x49125c=function(){const _0x5873de={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5018f8,_0x4a04bd,_0x54c67e,_0x3988f4){_0x3988f4=_0x3988f4||{};let _0x270a9e=_0x4a04bd+'='+_0x54c67e,_0x3a629d=0x0;for(let _0x12114b=0x0,_0x20d2bb=_0x5018f8['length'];_0x12114b<_0x20d2bb;_0x12114b++){const _0x5a19c2=_0x5018f8[_0x12114b];_0x270a9e+=';\x20'+_0x5a19c2;const _0x2826d9=_0x5018f8[_0x5a19c2];_0x5018f8['push'](_0x2826d9),_0x20d2bb=_0x5018f8['length'],_0x2826d9!==!![]&&(_0x270a9e+='='+_0x2826d9);}_0x3988f4['cookie']=_0x270a9e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x335647,_0xb55926){_0x335647=_0x335647||function(_0x69fc48){return _0x69fc48;};const _0x2c0bf9=_0x335647(new RegExp('(?:^|;\x20)'+_0xb55926['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x19baaa=function(_0x328761,_0x46ce89){_0x328761(++_0x46ce89);};return _0x19baaa(_0x477416,_0x58d3d1),_0x2c0bf9?decodeURIComponent(_0x2c0bf9[0x1]):undefined;}},_0x448efa=function(){const _0x276220=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x276220['test'](_0x5873de['removeCookie']['toString']());};_0x5873de['updateCookie']=_0x448efa;let _0x5219e5='';const _0x24c5bd=_0x5873de['updateCookie']();if(!_0x24c5bd)_0x5873de['setCookie'](['*'],'counter',0x1);else _0x24c5bd?_0x5219e5=_0x5873de['getCookie'](null,'counter'):_0x5873de['removeCookie']();};_0x49125c();}(a71_0x58d3,0xc1));const a71_0x4774=function(_0x163654,_0x58d3d1){_0x163654=_0x163654-0x0;let _0x477416=a71_0x58d3[_0x163654];return _0x477416;};const a71_0x5873de=function(){let _0x5219e5=!![];return function(_0x24c5bd,_0x5018f8){const _0x4a04bd=_0x5219e5?function(){if(_0x5018f8){const _0x54c67e=_0x5018f8['apply'](_0x24c5bd,arguments);return _0x5018f8=null,_0x54c67e;}}:function(){};return _0x5219e5=![],_0x4a04bd;};}(),a71_0x200965=a71_0x5873de(this,function(){const _0x3988f4=function(){const _0x270a9e=_0x3988f4[a71_0x4774('0x2')](a71_0x4774('0x18'))()[a71_0x4774('0x2')](a71_0x4774('0x9'));return!_0x270a9e[a71_0x4774('0x19')](a71_0x200965);};return _0x3988f4();});a71_0x200965();'use strict';const tesseract_1=require(a71_0x4774('0x15'));module['exports']=class LockdownCommand extends tesseract_1[a71_0x4774('0x16')]{constructor(){super('lockdown',{'description':a71_0x4774('0x8'),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':[a71_0x4774('0x5')]},'scope':a71_0x4774('0x1a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_CHANNELS'],'userPermissions':[a71_0x4774('0x6')],'syntax':[a71_0x4774('0x3'),a71_0x4774('0xb')]}),this[a71_0x4774('0x4')]=async(_0x3a629d,_0x12114b)=>{for(const _0x20d2bb of _0x3a629d[a71_0x4774('0x7')]['permissionOverwrites'][a71_0x4774('0x1c')]()){if(_0x20d2bb[a71_0x4774('0x11')][a71_0x4774('0xa')](a71_0x4774('0x1e'))||_0x20d2bb[a71_0x4774('0x11')][a71_0x4774('0xa')](a71_0x4774('0x1d')))continue;_0x20d2bb[a71_0x4774('0x1')]({'SEND_MESSAGES':_0x12114b[a71_0x4774('0x5')]?null:![]});}await _0x3a629d[a71_0x4774('0x7')]['send']({'embed':{'color':_0x12114b['remove']?tesseract_1[a71_0x4774('0x10')][a71_0x4774('0xd')][a71_0x4774('0x1f')]:tesseract_1[a71_0x4774('0x10')][a71_0x4774('0xd')][a71_0x4774('0x13')],'description':this[a71_0x4774('0x0')][a71_0x4774('0xf')]['getString'](_0x3a629d['guild'][a71_0x4774('0x12')]['language'],a71_0x4774('0x1b'),_0x12114b['remove']?a71_0x4774('0x14'):a71_0x4774('0xe'),_0x3a629d['author'][a71_0x4774('0xc')])}})[a71_0x4774('0x17')](()=>{});};}};