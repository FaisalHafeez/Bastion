const a121_0x2cbe=['wikipedia','/wikimedia/wikipedia/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','json','sanitize','INVALID_COMMAND_SYNTAX','name','guild','slice','send','@bastion/tesseract','fullurl','BASTION_ERROR_TYPE','../../utils/omnic','return\x20/\x22\x20+\x20this\x20+\x20\x22/','DiscordError','exports','pages','https://en.wikipedia.org/','extract','../../utils/errors','query','exec','channel','title','Constants','Powered\x20by\x20Omnic','constructor','COLORS','wikipedia\x20TITLE','IRIS','NOT_FOUND','thumbnail','join','length','source'];(function(_0x32c48c,_0x2cbe4b){const _0x59da22=function(_0x17d879){while(--_0x17d879){_0x32c48c['push'](_0x32c48c['shift']());}};const _0x471994=function(){const _0x72c274={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x42d695,_0x5c6f2f,_0x23149b,_0x51c409){_0x51c409=_0x51c409||{};let _0x364abe=_0x5c6f2f+'='+_0x23149b;let _0x2e50d2=0x0;for(let _0xc8785=0x0,_0x1cc3d1=_0x42d695['length'];_0xc8785<_0x1cc3d1;_0xc8785++){const _0x527134=_0x42d695[_0xc8785];_0x364abe+=';\x20'+_0x527134;const _0x87c34d=_0x42d695[_0x527134];_0x42d695['push'](_0x87c34d);_0x1cc3d1=_0x42d695['length'];if(_0x87c34d!==!![]){_0x364abe+='='+_0x87c34d;}}_0x51c409['cookie']=_0x364abe;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4a22ba,_0x15d8a0){_0x4a22ba=_0x4a22ba||function(_0x1908df){return _0x1908df;};const _0x41b117=_0x4a22ba(new RegExp('(?:^|;\x20)'+_0x15d8a0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x13d326=function(_0x37a884,_0x5a36df){_0x37a884(++_0x5a36df);};_0x13d326(_0x59da22,_0x2cbe4b);return _0x41b117?decodeURIComponent(_0x41b117[0x1]):undefined;}};const _0x20529a=function(){const _0x410566=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x410566['test'](_0x72c274['removeCookie']['toString']());};_0x72c274['updateCookie']=_0x20529a;let _0x50b172='';const _0x13c6c1=_0x72c274['updateCookie']();if(!_0x13c6c1){_0x72c274['setCookie'](['*'],'counter',0x1);}else if(_0x13c6c1){_0x50b172=_0x72c274['getCookie'](null,'counter');}else{_0x72c274['removeCookie']();}};_0x471994();}(a121_0x2cbe,0x139));const a121_0x59da=function(_0x32c48c,_0x2cbe4b){_0x32c48c=_0x32c48c-0x0;let _0x59da22=a121_0x2cbe[_0x32c48c];return _0x59da22;};const a121_0x72c274=function(){let _0x404a89=!![];return function(_0x258afe,_0x78e582){const _0x472319=_0x404a89?function(){if(_0x78e582){const _0x267c1d=_0x78e582['apply'](_0x258afe,arguments);_0x78e582=null;return _0x267c1d;}}:function(){};_0x404a89=![];return _0x472319;};}();const a121_0x17d879=a121_0x72c274(this,function(){const _0x3c03cb=function(){const _0x539556=_0x3c03cb[a121_0x59da('0x2')](a121_0x59da('0x19'))()['compile'](a121_0x59da('0xd'));return!_0x539556['test'](a121_0x17d879);};return _0x3c03cb();});a121_0x17d879();'use strict';const tesseract_1=require(a121_0x59da('0x15'));const errors=require(a121_0x59da('0x1f'));const omnic=require(a121_0x59da('0x18'));module[a121_0x59da('0x1b')]=class WikipediaCommand extends tesseract_1['Command']{constructor(){super(a121_0x59da('0xb'),{'description':'It\x20allows\x20you\x20to\x20search\x20the\x20Wikipedia\x20for\x20the\x20specified\x20title.','triggers':[],'arguments':{},'scope':a121_0x59da('0x12'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a121_0x59da('0x4')]});this[a121_0x59da('0xf')]=_0x52e1c7=>{return _0x52e1c7[a121_0x59da('0x9')]>0x7d0?_0x52e1c7[a121_0x59da('0x13')](0x0,0x7d0)+'\x0a...':_0x52e1c7;};this[a121_0x59da('0x21')]=async(_0x4a0abc,_0x132f09)=>{if(!_0x132f09['_'][a121_0x59da('0x9')])throw new errors[(a121_0x59da('0x1a'))](errors[a121_0x59da('0x17')][a121_0x59da('0x10')],this[a121_0x59da('0x11')]);const _0x189047=_0x132f09['_'][a121_0x59da('0x8')]('\x20');const _0x236588=await omnic['makeRequest'](a121_0x59da('0xc')+_0x189047);const _0xa14914=await _0x236588[a121_0x59da('0xe')]();if(!_0xa14914[a121_0x59da('0x20')]||!_0xa14914[a121_0x59da('0x20')]['pages'])throw new Error(a121_0x59da('0x6'));await _0x4a0abc[a121_0x59da('0x22')][a121_0x59da('0x14')]({'embed':{'color':tesseract_1[a121_0x59da('0x0')][a121_0x59da('0x3')][a121_0x59da('0x5')],'author':{'name':'Wikipedia','url':a121_0x59da('0x1d')},'title':_0xa14914['query'][a121_0x59da('0x1c')][0x0][a121_0x59da('0x23')],'url':_0xa14914[a121_0x59da('0x20')][a121_0x59da('0x1c')][0x0][a121_0x59da('0x16')],'description':this[a121_0x59da('0xf')](_0xa14914[a121_0x59da('0x20')][a121_0x59da('0x1c')][0x0][a121_0x59da('0x1e')]),'image':{'url':_0xa14914[a121_0x59da('0x20')][a121_0x59da('0x1c')][0x0][a121_0x59da('0x7')][a121_0x59da('0xa')]},'footer':{'text':a121_0x59da('0x1')}}});};}};