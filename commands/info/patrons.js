const a71_0x24e4=['COLORS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','.png','client','apply','It\x20allows\x20you\x20to\x20see\x20our\x20Patrons,\x20the\x20amazing\x20people\x20who\x20support\x20the\x20development\x20of\x20The\x20Bastion\x20Bot\x20Project.','bastion.website','getConstant','https://c5.patreon.com/external/logo/guidelines/wordmark_on_navy.jpg','Patrons','These\x20are\x20the\x20amazing\x20people\x20who\x20continuously\x20support\x20us,\x20by\x20being\x20our\x20patron,\x20on\x20Patreon.','Anonymous','map','makeRequest','json','Former\x20Patrons','return\x20/\x22\x20+\x20this\x20+\x20\x22/','channel','catch','full_name','exec','../../utils/omnic','patrons','Active\x20Patrons','patron_status','/donate','bastion.project.url','exports','active_patron','locale','Command','join','PATREON','test','../../utils/constants','You\x20can\x20be\x20one\x20of\x20them\x20too!','filter'];(function(_0x35abd8,_0x24e467){const _0x3080b4=function(_0x27afbf){while(--_0x27afbf){_0x35abd8['push'](_0x35abd8['shift']());}},_0x9dceed=function(){const _0x28c94f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x387cb5,_0x4567b3,_0xddc3d4,_0x205e43){_0x205e43=_0x205e43||{};let _0x57a819=_0x4567b3+'='+_0xddc3d4,_0x419e1f=0x0;for(let _0x1a21f3=0x0,_0x161094=_0x387cb5['length'];_0x1a21f3<_0x161094;_0x1a21f3++){const _0x166e31=_0x387cb5[_0x1a21f3];_0x57a819+=';\x20'+_0x166e31;const _0x26f31e=_0x387cb5[_0x166e31];_0x387cb5['push'](_0x26f31e),_0x161094=_0x387cb5['length'],_0x26f31e!==!![]&&(_0x57a819+='='+_0x26f31e);}_0x205e43['cookie']=_0x57a819;},'removeCookie':function(){return'dev';},'getCookie':function(_0x62d989,_0x15258a){_0x62d989=_0x62d989||function(_0x54ef6b){return _0x54ef6b;};const _0x431dd7=_0x62d989(new RegExp('(?:^|;\x20)'+_0x15258a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1c02b4=function(_0x2b03fd,_0x566e93){_0x2b03fd(++_0x566e93);};return _0x1c02b4(_0x3080b4,_0x24e467),_0x431dd7?decodeURIComponent(_0x431dd7[0x1]):undefined;}},_0x16652c=function(){const _0x2cd53d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2cd53d['test'](_0x28c94f['removeCookie']['toString']());};_0x28c94f['updateCookie']=_0x16652c;let _0x3a09c6='';const _0x468929=_0x28c94f['updateCookie']();if(!_0x468929)_0x28c94f['setCookie'](['*'],'counter',0x1);else _0x468929?_0x3a09c6=_0x28c94f['getCookie'](null,'counter'):_0x28c94f['removeCookie']();};_0x9dceed();}(a71_0x24e4,0x1a7));const a71_0x3080=function(_0x35abd8,_0x24e467){_0x35abd8=_0x35abd8-0x0;let _0x3080b4=a71_0x24e4[_0x35abd8];return _0x3080b4;};const _0x290238=a71_0x3080,a71_0x28c94f=function(){let _0x3a09c6=!![];return function(_0x468929,_0x387cb5){const _0x4567b3=_0x3a09c6?function(){const _0x232319=a71_0x3080;if(_0x387cb5){const _0xddc3d4=_0x387cb5[_0x232319('0x0')](_0x468929,arguments);return _0x387cb5=null,_0xddc3d4;}}:function(){};return _0x3a09c6=![],_0x4567b3;};}(),a71_0x27afbf=a71_0x28c94f(this,function(){const _0x205e43=function(){const _0x50a14c=a71_0x3080,_0x57a819=_0x205e43['constructor'](_0x50a14c('0xc'))()[_0x50a14c('0x23')](_0x50a14c('0x22'));return!_0x57a819[_0x50a14c('0x1d')](a71_0x27afbf);};return _0x205e43();});a71_0x27afbf();'use strict';const tesseract_1=require('@bastion/tesseract'),constants=require(_0x290238('0x1e')),omnic=require(_0x290238('0x11'));module[_0x290238('0x17')]=class PatronsCommand extends tesseract_1[_0x290238('0x1a')]{constructor(){const _0x25a19b=_0x290238;super(_0x25a19b('0x12'),{'description':_0x25a19b('0x1'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0x25a19b('0x10')]=async _0x419e1f=>{const _0x486d20=_0x25a19b,_0x1a21f3=await omnic[_0x486d20('0x9')]('/patreon/patrons'),_0x161094=await _0x1a21f3[_0x486d20('0xa')]();await _0x419e1f[_0x486d20('0xd')]['send']({'embed':{'color':constants[_0x486d20('0x21')][_0x486d20('0x1c')],'author':{'name':this[_0x486d20('0x25')][_0x486d20('0x19')]['getConstant']('bastion.project'),'iconURL':this[_0x486d20('0x25')][_0x486d20('0x19')]['getConstant'](_0x486d20('0x16'))+_0x486d20('0x24')},'title':_0x486d20('0x5'),'url':this['client'][_0x486d20('0x19')][_0x486d20('0x3')](_0x486d20('0x2'))+_0x486d20('0x15'),'description':_0x486d20('0x6'),'thumbnail':{'url':_0x486d20('0x4')},'fields':[{'name':_0x486d20('0x13'),'value':_0x161094[_0x486d20('0x20')](_0x166e31=>_0x166e31[_0x486d20('0x14')]===_0x486d20('0x18'))['map'](_0x26f31e=>_0x26f31e[_0x486d20('0xf')]||'Anonymous')[_0x486d20('0x1b')](',\x20')},{'name':_0x486d20('0xb'),'value':_0x161094[_0x486d20('0x20')](_0x62d989=>_0x62d989[_0x486d20('0x14')]==='former_patron')[_0x486d20('0x8')](_0x15258a=>_0x15258a[_0x486d20('0xf')]||_0x486d20('0x7'))['join'](',\x20')}],'footer':{'text':_0x486d20('0x1f')}}})[_0x486d20('0xe')](()=>{});};}};