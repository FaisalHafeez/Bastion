const a44_0x3a69=['data','url','send','Powered\x20by\x20r/jokes','channel','Constants','slice','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','children','selftext','guild','jokes','exec','makeRequest','constructor','apply','Command','return\x20/\x22\x20+\x20this\x20+\x20\x22/','joke','exports','json','IRIS','../../utils/omnic'];(function(_0x37d273,_0x3a6940){const _0x5e0b99=function(_0x2e2b){while(--_0x2e2b){_0x37d273['push'](_0x37d273['shift']());}},_0x5b948a=function(){const _0x23aac4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4a5546,_0x2e87ff,_0xeba30b,_0x2defcc){_0x2defcc=_0x2defcc||{};let _0x10d32e=_0x2e87ff+'='+_0xeba30b,_0x538fce=0x0;for(let _0x30dd99=0x0,_0x3da3c3=_0x4a5546['length'];_0x30dd99<_0x3da3c3;_0x30dd99++){const _0x3962a9=_0x4a5546[_0x30dd99];_0x10d32e+=';\x20'+_0x3962a9;const _0x378ad2=_0x4a5546[_0x3962a9];_0x4a5546['push'](_0x378ad2),_0x3da3c3=_0x4a5546['length'],_0x378ad2!==!![]&&(_0x10d32e+='='+_0x378ad2);}_0x2defcc['cookie']=_0x10d32e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42aa59,_0x51cba0){_0x42aa59=_0x42aa59||function(_0x49096f){return _0x49096f;};const _0x19e56d=_0x42aa59(new RegExp('(?:^|;\x20)'+_0x51cba0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x158ddd=function(_0x29624b,_0x4c435d){_0x29624b(++_0x4c435d);};return _0x158ddd(_0x5e0b99,_0x3a6940),_0x19e56d?decodeURIComponent(_0x19e56d[0x1]):undefined;}},_0x15f0ab=function(){const _0x49484d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x49484d['test'](_0x23aac4['removeCookie']['toString']());};_0x23aac4['updateCookie']=_0x15f0ab;let _0x273029='';const _0x50a78e=_0x23aac4['updateCookie']();if(!_0x50a78e)_0x23aac4['setCookie'](['*'],'counter',0x1);else _0x50a78e?_0x273029=_0x23aac4['getCookie'](null,'counter'):_0x23aac4['removeCookie']();};_0x5b948a();}(a44_0x3a69,0xc1));const a44_0x5e0b=function(_0x37d273,_0x3a6940){_0x37d273=_0x37d273-0x0;let _0x5e0b99=a44_0x3a69[_0x37d273];return _0x5e0b99;};const _0x3ccd5c=a44_0x5e0b,a44_0x23aac4=function(){let _0x273029=!![];return function(_0x50a78e,_0x4a5546){const _0x2e87ff=_0x273029?function(){const _0x47edd8=a44_0x5e0b;if(_0x4a5546){const _0xeba30b=_0x4a5546[_0x47edd8('0x6')](_0x50a78e,arguments);return _0x4a5546=null,_0xeba30b;}}:function(){};return _0x273029=![],_0x2e87ff;};}(),a44_0x2e2b=a44_0x23aac4(this,function(){const _0x2defcc=function(){const _0x4a83b1=a44_0x5e0b,_0x10d32e=_0x2defcc[_0x4a83b1('0x5')](_0x4a83b1('0x8'))()['constructor'](_0x4a83b1('0x15'));return!_0x10d32e['test'](a44_0x2e2b);};return _0x2defcc();});a44_0x2e2b();'use strict';const tesseract_1=require('@bastion/tesseract'),omnic=require(_0x3ccd5c('0xd'));module[_0x3ccd5c('0xa')]=class JokeCommand extends tesseract_1[_0x3ccd5c('0x7')]{constructor(){const _0xb8692b=_0x3ccd5c;super(_0xb8692b('0x9'),{'description':'Posts\x20a\x20random\x20joke\x20collected\x20from\x20the\x20r/jokes\x20subreddit.','triggers':[_0xb8692b('0x2')],'arguments':{},'scope':_0xb8692b('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0xb8692b('0x3')]=async _0x538fce=>{const _0x578ec1=_0xb8692b,_0x30dd99=await omnic[_0x578ec1('0x4')]('/reddit/jokes/random'),[_0x3da3c3]=await _0x30dd99[_0x578ec1('0xb')]();if(!_0x3da3c3||!_0x3da3c3[_0x578ec1('0xe')]||!_0x3da3c3[_0x578ec1('0xe')][_0x578ec1('0x16')]||!_0x3da3c3[_0x578ec1('0xe')][_0x578ec1('0x16')]['length']||!_0x3da3c3[_0x578ec1('0xe')]['children'][0x0][_0x578ec1('0xe')])return;await _0x538fce[_0x578ec1('0x12')][_0x578ec1('0x10')]({'embed':{'color':tesseract_1[_0x578ec1('0x13')]['COLORS'][_0x578ec1('0xc')],'title':_0x3da3c3[_0x578ec1('0xe')]['children'][0x0]['data']['title'][_0x578ec1('0x14')](0x0,0x100),'url':_0x3da3c3[_0x578ec1('0xe')]['children'][0x0]['data'][_0x578ec1('0xf')],..._0x3da3c3[_0x578ec1('0xe')][_0x578ec1('0x16')][0x0]['data']['selftext']?{'description':_0x3da3c3[_0x578ec1('0xe')][_0x578ec1('0x16')][0x0][_0x578ec1('0xe')][_0x578ec1('0x0')][_0x578ec1('0x14')](0x0,0x400)}:{},'footer':{'text':_0x578ec1('0x11')}}});};}};