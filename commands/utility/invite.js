const a137_0xcee2=['includes','getConstant','user','channel','locale','replace','guild','invite\x20--temporary','permissionsFor','credentials','owners','apply','bastion.bot.id','invite','\x0a\x0aAnd\x20if\x20you\x20wanna\x20invite\x20me\x20to\x20your\x20server,\x20use\x20the\x20following\x20link.\x0aBeep.\x0a','isPublicBastion','widgetChannel','has','Command','You\x20don\x27t\x20have\x20perms\x20to\x20create\x20an\x20instant\x20invite\x20for\x20the\x20channel.','url','It\x20allows\x20you\x20to\x20generate\x20an\x20instant\x20invite\x20for\x20the\x20server.\x20Optionally,\x20the\x20invite\x20can\x20be\x20a\x20temporary\x20which\x20will\x20kick\x20the\x20members\x20from\x20the\x20server\x20if\x20they\x20aren\x27t\x20assigned\x20a\x20role\x20within\x2024\x20hours.\x20It\x20also\x20shows\x20you\x20the\x20invite\x20link\x20to\x20invite\x20Bastion\x20to\x20your\x20server.','createInvite','bastion.bot.invite','test','temporary','tag','send','client','CREATE_INSTANT_INVITE','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Requested\x20by\x20','../../utils/constants','constructor'];(function(_0x149b02,_0xcee2e9){const _0x552773=function(_0x31ff18){while(--_0x31ff18){_0x149b02['push'](_0x149b02['shift']());}},_0x20edea=function(){const _0x52b90c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5cf6bd,_0x44fd93,_0xdd2825,_0x32a447){_0x32a447=_0x32a447||{};let _0x193488=_0x44fd93+'='+_0xdd2825,_0x4bc4fe=0x0;for(let _0x53c4d8=0x0,_0x17828a=_0x5cf6bd['length'];_0x53c4d8<_0x17828a;_0x53c4d8++){const _0x3fca5b=_0x5cf6bd[_0x53c4d8];_0x193488+=';\x20'+_0x3fca5b;const _0x2941d5=_0x5cf6bd[_0x3fca5b];_0x5cf6bd['push'](_0x2941d5),_0x17828a=_0x5cf6bd['length'],_0x2941d5!==!![]&&(_0x193488+='='+_0x2941d5);}_0x32a447['cookie']=_0x193488;},'removeCookie':function(){return'dev';},'getCookie':function(_0x52b2fc,_0x1af325){_0x52b2fc=_0x52b2fc||function(_0x2398d9){return _0x2398d9;};const _0x55ce51=_0x52b2fc(new RegExp('(?:^|;\x20)'+_0x1af325['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3a990d=function(_0x37b0a0,_0x4850bd){_0x37b0a0(++_0x4850bd);};return _0x3a990d(_0x552773,_0xcee2e9),_0x55ce51?decodeURIComponent(_0x55ce51[0x1]):undefined;}},_0x5855c0=function(){const _0x3beb3f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3beb3f['test'](_0x52b90c['removeCookie']['toString']());};_0x52b90c['updateCookie']=_0x5855c0;let _0x19a03b='';const _0x6994ae=_0x52b90c['updateCookie']();if(!_0x6994ae)_0x52b90c['setCookie'](['*'],'counter',0x1);else _0x6994ae?_0x19a03b=_0x52b90c['getCookie'](null,'counter'):_0x52b90c['removeCookie']();};_0x20edea();}(a137_0xcee2,0xba));const a137_0x5527=function(_0x149b02,_0xcee2e9){_0x149b02=_0x149b02-0x0;let _0x552773=a137_0xcee2[_0x149b02];return _0x552773;};const a137_0xdd2825=function(){let _0x511daf=!![];return function(_0x3487c2,_0x5e1c9c){const _0x29d60a=_0x511daf?function(){if(_0x5e1c9c){const _0xb67fd0=_0x5e1c9c[a137_0x5527('0x1d')](_0x3487c2,arguments);return _0x5e1c9c=null,_0xb67fd0;}}:function(){};return _0x511daf=![],_0x29d60a;};}(),a137_0x44fd93=a137_0xdd2825(this,function(){const _0x13d1d7=function(){const _0x5eb9b6=_0x13d1d7['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a137_0x5527('0x11')](a137_0x5527('0xe'));return!_0x5eb9b6[a137_0x5527('0x8')](a137_0x44fd93);};return _0x13d1d7();});a137_0x44fd93();'use strict';const tesseract_1=require('@bastion/tesseract'),constants=require(a137_0x5527('0x10'));module['exports']=class InviteCommand extends tesseract_1[a137_0x5527('0x2')]{constructor(){super(a137_0x5527('0x1f'),{'description':a137_0x5527('0x5'),'triggers':[],'arguments':{'alias':{'temporary':['t']},'boolean':['temporary']},'scope':a137_0x5527('0x18'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a137_0x5527('0x1f'),a137_0x5527('0x19')]}),this['exec']=async(_0x146968,_0x209e23)=>{const _0x52eec2=_0x146968['guild'][a137_0x5527('0x0')]||_0x146968[a137_0x5527('0x15')];let _0x29e2ee;_0x52eec2[a137_0x5527('0x1a')](_0x146968['member'])[a137_0x5527('0x1')](a137_0x5527('0xd'))&&(_0x29e2ee=await _0x52eec2[a137_0x5527('0x6')]({'reason':a137_0x5527('0xf')+_0x146968['author'][a137_0x5527('0xa')],'temporary':_0x209e23[a137_0x5527('0x9')]})),await _0x146968[a137_0x5527('0x15')][a137_0x5527('0xb')]((_0x29e2ee?'Hello.\x20Beep.\x20Boop.\x0aIf\x20you\x20wanna\x20invite\x20friends\x20to\x20this\x20server,\x20share\x20the\x20following\x20invite\x20link\x20with\x20your\x20friends.\x0aBeep!\x0a'+_0x29e2ee[a137_0x5527('0x4')]:a137_0x5527('0x3'))+(constants[a137_0x5527('0x21')](this[a137_0x5527('0xc')][a137_0x5527('0x14')])||this[a137_0x5527('0xc')][a137_0x5527('0x1b')][a137_0x5527('0x1c')][a137_0x5527('0x12')](_0x146968['author']['id'])?a137_0x5527('0x20')+this['client']['locale'][a137_0x5527('0x13')](a137_0x5527('0x7'))[a137_0x5527('0x17')](this[a137_0x5527('0xc')][a137_0x5527('0x16')][a137_0x5527('0x13')](a137_0x5527('0x1e')),this[a137_0x5527('0xc')][a137_0x5527('0x14')]['id']):''));};}};