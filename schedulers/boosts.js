const a204_0x4fe3=['boosts','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','findById','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','../models/Guild','@bastion/tesseract','Logger','user','Scheduler','error','constructor','default','apply','exec','exports','updateMany'];(function(_0x48396f,_0x4fe3ff){const _0x58c18d=function(_0x3d64e8){while(--_0x3d64e8){_0x48396f['push'](_0x48396f['shift']());}},_0x33cf60=function(){const _0x49ce3b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xd32b81,_0x4f5751,_0x3b59bc,_0x47384e){_0x47384e=_0x47384e||{};let _0x594d44=_0x4f5751+'='+_0x3b59bc,_0x278108=0x0;for(let _0x7cd15f=0x0,_0x5c5586=_0xd32b81['length'];_0x7cd15f<_0x5c5586;_0x7cd15f++){const _0x20cc44=_0xd32b81[_0x7cd15f];_0x594d44+=';\x20'+_0x20cc44;const _0x5b8525=_0xd32b81[_0x20cc44];_0xd32b81['push'](_0x5b8525),_0x5c5586=_0xd32b81['length'],_0x5b8525!==!![]&&(_0x594d44+='='+_0x5b8525);}_0x47384e['cookie']=_0x594d44;},'removeCookie':function(){return'dev';},'getCookie':function(_0x21052e,_0x2145a2){_0x21052e=_0x21052e||function(_0xffa84f){return _0xffa84f;};const _0x1b3575=_0x21052e(new RegExp('(?:^|;\x20)'+_0x2145a2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3cc211=function(_0x389ca9,_0x2d9d96){_0x389ca9(++_0x2d9d96);};return _0x3cc211(_0x58c18d,_0x4fe3ff),_0x1b3575?decodeURIComponent(_0x1b3575[0x1]):undefined;}},_0x1d7e58=function(){const _0x1d9183=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1d9183['test'](_0x49ce3b['removeCookie']['toString']());};_0x49ce3b['updateCookie']=_0x1d7e58;let _0x5c83af='';const _0x411bc8=_0x49ce3b['updateCookie']();if(!_0x411bc8)_0x49ce3b['setCookie'](['*'],'counter',0x1);else _0x411bc8?_0x5c83af=_0x49ce3b['getCookie'](null,'counter'):_0x49ce3b['removeCookie']();};_0x33cf60();}(a204_0x4fe3,0x193));const a204_0x58c1=function(_0x48396f,_0x4fe3ff){_0x48396f=_0x48396f-0x0;let _0x58c18d=a204_0x4fe3[_0x48396f];return _0x58c18d;};const a204_0x49ce3b=function(){let _0x5c83af=!![];return function(_0x411bc8,_0xd32b81){const _0x4f5751=_0x5c83af?function(){if(_0xd32b81){const _0x3b59bc=_0xd32b81[a204_0x58c1('0x1')](_0x411bc8,arguments);return _0xd32b81=null,_0x3b59bc;}}:function(){};return _0x5c83af=![],_0x4f5751;};}(),a204_0x3d64e8=a204_0x49ce3b(this,function(){const _0x47384e=function(){const _0x594d44=_0x47384e[a204_0x58c1('0x10')](a204_0x58c1('0x8'))()[a204_0x58c1('0x10')](a204_0x58c1('0x6'));return!_0x594d44[a204_0x58c1('0x9')](a204_0x3d64e8);};return _0x47384e();});a204_0x3d64e8();'use strict';const tesseract_1=require(a204_0x58c1('0xb')),Config_1=require('../models/Config'),Guild_1=require(a204_0x58c1('0xa'));module[a204_0x58c1('0x3')]=class Boosts extends tesseract_1[a204_0x58c1('0xe')]{constructor(){super(a204_0x58c1('0x5'),{'cronTime':'0\x200\x200\x20*\x20*\x20*'}),this[a204_0x58c1('0x2')]=async()=>{try{const _0x278108=await Config_1[a204_0x58c1('0x0')][a204_0x58c1('0x7')](this['client'][a204_0x58c1('0xd')]['id']),_0x7cd15f=new Date()['getMonth']();if(_0x7cd15f===_0x278108['boostResetMonth'])return;await Guild_1['default'][a204_0x58c1('0x4')]({},{'$unset':{'boosts':0x1}}),_0x278108['boostResetMonth']=_0x7cd15f,await _0x278108['save']();}catch(_0x5c5586){tesseract_1[a204_0x58c1('0xc')][a204_0x58c1('0xf')](_0x5c5586);}};}};