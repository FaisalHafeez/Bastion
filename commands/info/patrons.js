const a55_0x3480=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','json','../../utils/constants','bastion.project','PATREON','active_patron','apply','constructor','send','guild','Active\x20Patrons','patrons','Patrons','full_name','getConstant','map','bastion.website','join','bastion.project.url','catch','COLORS','Former\x20Patrons','patron_status','channel','client','It\x20allows\x20you\x20to\x20see\x20our\x20Patrons,\x20the\x20amazing\x20people\x20who\x20support\x20the\x20development\x20of\x20The\x20Bastion\x20Bot\x20Project.','Anonymous','../../utils/omnic','Command','https://c5.patreon.com/external/logo/guidelines/wordmark_on_navy.jpg','filter','locale','/patreon/patrons','exec','makeRequest'];(function(_0x425cd6,_0x34800a){const _0x48738a=function(_0x2a208a){while(--_0x2a208a){_0x425cd6['push'](_0x425cd6['shift']());}},_0x4a16c0=function(){const _0x18b463={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x577434,_0x775d19,_0x3df8fe,_0x91af03){_0x91af03=_0x91af03||{};let _0x126746=_0x775d19+'='+_0x3df8fe,_0x258912=0x0;for(let _0x54e8f4=0x0,_0x35706f=_0x577434['length'];_0x54e8f4<_0x35706f;_0x54e8f4++){const _0x22a59b=_0x577434[_0x54e8f4];_0x126746+=';\x20'+_0x22a59b;const _0x100869=_0x577434[_0x22a59b];_0x577434['push'](_0x100869),_0x35706f=_0x577434['length'],_0x100869!==!![]&&(_0x126746+='='+_0x100869);}_0x91af03['cookie']=_0x126746;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4e4a47,_0x3c398a){_0x4e4a47=_0x4e4a47||function(_0x117508){return _0x117508;};const _0x39f7ed=_0x4e4a47(new RegExp('(?:^|;\x20)'+_0x3c398a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4a94d0=function(_0x325b70,_0x31cb10){_0x325b70(++_0x31cb10);};return _0x4a94d0(_0x48738a,_0x34800a),_0x39f7ed?decodeURIComponent(_0x39f7ed[0x1]):undefined;}},_0x123d53=function(){const _0x1efecd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1efecd['test'](_0x18b463['removeCookie']['toString']());};_0x18b463['updateCookie']=_0x123d53;let _0x177edd='';const _0xe68f18=_0x18b463['updateCookie']();if(!_0xe68f18)_0x18b463['setCookie'](['*'],'counter',0x1);else _0xe68f18?_0x177edd=_0x18b463['getCookie'](null,'counter'):_0x18b463['removeCookie']();};_0x4a16c0();}(a55_0x3480,0x17b));const a55_0x4873=function(_0x425cd6,_0x34800a){_0x425cd6=_0x425cd6-0x0;let _0x48738a=a55_0x3480[_0x425cd6];return _0x48738a;};const a55_0x3df8fe=function(){let _0x1da0e7=!![];return function(_0x1cfa05,_0x1be9ff){const _0x31fa4a=_0x1da0e7?function(){if(_0x1be9ff){const _0x5058b0=_0x1be9ff[a55_0x4873('0x18')](_0x1cfa05,arguments);return _0x1be9ff=null,_0x5058b0;}}:function(){};return _0x1da0e7=![],_0x31fa4a;};}(),a55_0x775d19=a55_0x3df8fe(this,function(){const _0x92f1e0=function(){const _0x4b83c4=_0x92f1e0[a55_0x4873('0x19')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a55_0x4873('0x19')](a55_0x4873('0x11'));return!_0x4b83c4[a55_0x4873('0x12')](a55_0x775d19);};return _0x92f1e0();});a55_0x775d19();'use strict';const tesseract_1=require('@bastion/tesseract'),constants=require(a55_0x4873('0x14')),omnic=require(a55_0x4873('0x9'));module['exports']=class PatronsCommand extends tesseract_1[a55_0x4873('0xa')]{constructor(){super(a55_0x4873('0x1d'),{'description':a55_0x4873('0x7'),'triggers':[],'arguments':{},'scope':a55_0x4873('0x1b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[a55_0x4873('0xf')]=async _0x45fda4=>{const _0x537460=await omnic[a55_0x4873('0x10')](a55_0x4873('0xe')),_0x2b4700=await _0x537460[a55_0x4873('0x13')]();await _0x45fda4[a55_0x4873('0x5')][a55_0x4873('0x1a')]({'embed':{'color':constants[a55_0x4873('0x2')][a55_0x4873('0x16')],'author':{'name':this[a55_0x4873('0x6')][a55_0x4873('0xd')]['getConstant'](a55_0x4873('0x15')),'iconURL':this['client']['locale']['getConstant'](a55_0x4873('0x0'))+'.png'},'title':a55_0x4873('0x1e'),'url':this[a55_0x4873('0x6')][a55_0x4873('0xd')][a55_0x4873('0x20')](a55_0x4873('0x22'))+'/donate','description':'These\x20are\x20the\x20amazing\x20people\x20who\x20continuously\x20support\x20us,\x20by\x20being\x20our\x20patron,\x20on\x20Patreon.','thumbnail':{'url':a55_0x4873('0xb')},'fields':[{'name':a55_0x4873('0x1c'),'value':_0x2b4700[a55_0x4873('0xc')](_0x3bada7=>_0x3bada7[a55_0x4873('0x4')]===a55_0x4873('0x17'))[a55_0x4873('0x21')](_0x19694c=>_0x19694c[a55_0x4873('0x1f')]||a55_0x4873('0x8'))['join'](',\x20')},{'name':a55_0x4873('0x3'),'value':_0x2b4700[a55_0x4873('0xc')](_0x13a0a4=>_0x13a0a4[a55_0x4873('0x4')]==='former_patron')[a55_0x4873('0x21')](_0x2ef266=>_0x2ef266[a55_0x4873('0x1f')]||a55_0x4873('0x8'))[a55_0x4873('0x23')](',\x20')}],'footer':{'text':'You\x20can\x20be\x20one\x20of\x20them\x20too!'}}})[a55_0x4873('0x1')](()=>{});};}};