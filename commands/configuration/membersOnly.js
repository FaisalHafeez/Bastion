const a24_0x14c7=['catch','return\x20/\x22\x20+\x20this\x20+\x20\x22/','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Members\x20Only\x20mode\x20in\x20the\x20server.\x20If\x20enabled,\x20only\x20the\x20members\x20who\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server\x20can\x20use\x20Bastion.','client','constructor','tag','membersOnlyEnable','locale','guild','save','getString','COLORS','test','Constants','send','channel','exec','membersOnly','exports','document','membersOnlyDisable','RED','language','MANAGE_GUILD','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','info','GREEN','author'];(function(_0x424cb4,_0x14c7f4){const _0x2ba5b7=function(_0x204842){while(--_0x204842){_0x424cb4['push'](_0x424cb4['shift']());}},_0x5a8979=function(){const _0x336bd0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1efa11,_0x28b958,_0x1ce4ff,_0x46a74f){_0x46a74f=_0x46a74f||{};let _0x1dbfa2=_0x28b958+'='+_0x1ce4ff,_0x20e47f=0x0;for(let _0x1f68e2=0x0,_0x557116=_0x1efa11['length'];_0x1f68e2<_0x557116;_0x1f68e2++){const _0x57717c=_0x1efa11[_0x1f68e2];_0x1dbfa2+=';\x20'+_0x57717c;const _0x3a3213=_0x1efa11[_0x57717c];_0x1efa11['push'](_0x3a3213),_0x557116=_0x1efa11['length'],_0x3a3213!==!![]&&(_0x1dbfa2+='='+_0x3a3213);}_0x46a74f['cookie']=_0x1dbfa2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14716c,_0x3e760){_0x14716c=_0x14716c||function(_0x409df3){return _0x409df3;};const _0x1eb19c=_0x14716c(new RegExp('(?:^|;\x20)'+_0x3e760['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2d3711=function(_0x3f2f8c,_0x264ef4){_0x3f2f8c(++_0x264ef4);};return _0x2d3711(_0x2ba5b7,_0x14c7f4),_0x1eb19c?decodeURIComponent(_0x1eb19c[0x1]):undefined;}},_0x59039a=function(){const _0x4a4e41=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4a4e41['test'](_0x336bd0['removeCookie']['toString']());};_0x336bd0['updateCookie']=_0x59039a;let _0x4f0161='';const _0x47de9c=_0x336bd0['updateCookie']();if(!_0x47de9c)_0x336bd0['setCookie'](['*'],'counter',0x1);else _0x47de9c?_0x4f0161=_0x336bd0['getCookie'](null,'counter'):_0x336bd0['removeCookie']();};_0x5a8979();}(a24_0x14c7,0x17a));const a24_0x2ba5=function(_0x424cb4,_0x14c7f4){_0x424cb4=_0x424cb4-0x0;let _0x2ba5b7=a24_0x14c7[_0x424cb4];return _0x2ba5b7;};const a24_0x336bd0=function(){let _0x4f0161=!![];return function(_0x47de9c,_0x1efa11){const _0x28b958=_0x4f0161?function(){if(_0x1efa11){const _0x1ce4ff=_0x1efa11['apply'](_0x47de9c,arguments);return _0x1efa11=null,_0x1ce4ff;}}:function(){};return _0x4f0161=![],_0x28b958;};}(),a24_0x204842=a24_0x336bd0(this,function(){const _0x46a74f=function(){const _0x1dbfa2=_0x46a74f['constructor'](a24_0x2ba5('0xf'))()[a24_0x2ba5('0x12')](a24_0x2ba5('0xa'));return!_0x1dbfa2[a24_0x2ba5('0x1a')](a24_0x204842);};return _0x46a74f();});a24_0x204842();'use strict';const tesseract_1=require('@bastion/tesseract');module[a24_0x2ba5('0x4')]=class MembersOnlyCommand extends tesseract_1['Command']{constructor(){super(a24_0x2ba5('0x3'),{'description':a24_0x2ba5('0x10'),'triggers':[],'arguments':{},'scope':a24_0x2ba5('0x16'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a24_0x2ba5('0x9')],'syntax':[]}),this[a24_0x2ba5('0x2')]=async _0x20e47f=>{const _0x1f68e2=_0x20e47f[a24_0x2ba5('0x16')];_0x1f68e2['document'][a24_0x2ba5('0x3')]?(_0x1f68e2[a24_0x2ba5('0x5')]['membersOnly']=undefined,delete _0x1f68e2[a24_0x2ba5('0x5')][a24_0x2ba5('0x3')]):_0x1f68e2[a24_0x2ba5('0x5')][a24_0x2ba5('0x3')]=!![],await _0x1f68e2['document'][a24_0x2ba5('0x17')](),await _0x20e47f[a24_0x2ba5('0x1')][a24_0x2ba5('0x0')]({'embed':{'color':_0x1f68e2['document']['membersOnly']?tesseract_1[a24_0x2ba5('0x1b')]['COLORS'][a24_0x2ba5('0xc')]:tesseract_1[a24_0x2ba5('0x1b')][a24_0x2ba5('0x19')][a24_0x2ba5('0x7')],'description':this[a24_0x2ba5('0x11')][a24_0x2ba5('0x15')][a24_0x2ba5('0x18')](_0x20e47f[a24_0x2ba5('0x16')][a24_0x2ba5('0x5')][a24_0x2ba5('0x8')],a24_0x2ba5('0xb'),_0x1f68e2['document'][a24_0x2ba5('0x3')]?a24_0x2ba5('0x14'):a24_0x2ba5('0x6'),_0x20e47f[a24_0x2ba5('0xd')][a24_0x2ba5('0x13')])}})[a24_0x2ba5('0xe')](()=>{});};}};