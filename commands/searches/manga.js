const a122_0x4dcf=['Constants','values','INVALID_COMMAND_SYNTAX','COLORS','@bastion/tesseract','startDate','channel','data','original','Finished','makeRequest','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20manga.','test','attributes','posterImage','IRIS','exports','manga','constructor','slice','../../utils/errors','NOT_FOUND','Publishing','\x20-\x20Present','slug','Command','Published','titles','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','endDate','apply','https://kitsu.io/manga/','/kitsu/manga/','guild','Powered\x20by\x20Kitsu','name','length','join','../../utils/omnic'];(function(_0x1e3264,_0x4dcf91){const _0x4ddfa6=function(_0x48d3c7){while(--_0x48d3c7){_0x1e3264['push'](_0x1e3264['shift']());}},_0x36a57d=function(){const _0xfb16fb={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4acd4c,_0x2d8b0e,_0x5ab48a,_0x21fa09){_0x21fa09=_0x21fa09||{};let _0x3bebdf=_0x2d8b0e+'='+_0x5ab48a,_0x291fea=0x0;for(let _0x5264aa=0x0,_0x15f167=_0x4acd4c['length'];_0x5264aa<_0x15f167;_0x5264aa++){const _0x2249e0=_0x4acd4c[_0x5264aa];_0x3bebdf+=';\x20'+_0x2249e0;const _0x43eb25=_0x4acd4c[_0x2249e0];_0x4acd4c['push'](_0x43eb25),_0x15f167=_0x4acd4c['length'],_0x43eb25!==!![]&&(_0x3bebdf+='='+_0x43eb25);}_0x21fa09['cookie']=_0x3bebdf;},'removeCookie':function(){return'dev';},'getCookie':function(_0xe78831,_0x67cf28){_0xe78831=_0xe78831||function(_0x3b00a3){return _0x3b00a3;};const _0x8ab150=_0xe78831(new RegExp('(?:^|;\x20)'+_0x67cf28['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3fe6e3=function(_0x2caa5f,_0x1a0741){_0x2caa5f(++_0x1a0741);};return _0x3fe6e3(_0x4ddfa6,_0x4dcf91),_0x8ab150?decodeURIComponent(_0x8ab150[0x1]):undefined;}},_0x163222=function(){const _0x5801f6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5801f6['test'](_0xfb16fb['removeCookie']['toString']());};_0xfb16fb['updateCookie']=_0x163222;let _0x2e78e9='';const _0x4197f1=_0xfb16fb['updateCookie']();if(!_0x4197f1)_0xfb16fb['setCookie'](['*'],'counter',0x1);else _0x4197f1?_0x2e78e9=_0xfb16fb['getCookie'](null,'counter'):_0xfb16fb['removeCookie']();};_0x36a57d();}(a122_0x4dcf,0x6b));const a122_0x4ddf=function(_0x1e3264,_0x4dcf91){_0x1e3264=_0x1e3264-0x0;let _0x4ddfa6=a122_0x4dcf[_0x1e3264];return _0x4ddfa6;};const a122_0x5ab48a=function(){let _0x52662b=!![];return function(_0x10f30c,_0x8a49cb){const _0xd36f63=_0x52662b?function(){if(_0x8a49cb){const _0x87eaf2=_0x8a49cb[a122_0x4ddf('0x1')](_0x10f30c,arguments);return _0x8a49cb=null,_0x87eaf2;}}:function(){};return _0x52662b=![],_0xd36f63;};}(),a122_0x2d8b0e=a122_0x5ab48a(this,function(){const _0x45e11e=function(){const _0x46b17e=_0x45e11e[a122_0x4ddf('0x1c')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a122_0x4ddf('0x1c')](a122_0x4ddf('0x26'));return!_0x46b17e[a122_0x4ddf('0x16')](a122_0x2d8b0e);};return _0x45e11e();});a122_0x2d8b0e();'use strict';const tesseract_1=require(a122_0x4ddf('0xe')),errors=require(a122_0x4ddf('0x1e')),omnic=require(a122_0x4ddf('0x9'));module[a122_0x4ddf('0x1a')]=class MangaCommand extends tesseract_1[a122_0x4ddf('0x23')]{constructor(){super(a122_0x4ddf('0x1b'),{'description':a122_0x4ddf('0x15'),'triggers':[],'arguments':{},'scope':a122_0x4ddf('0x4'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['manga\x20TITLE']}),this['sanitize']=_0xecccd2=>{return _0xecccd2[a122_0x4ddf('0x7')]>0x7d0?_0xecccd2[a122_0x4ddf('0x1d')](0x0,0x7d0)+'\x0a...':_0xecccd2;},this['exec']=async(_0x146429,_0x1e9cef)=>{if(!_0x1e9cef['_'][a122_0x4ddf('0x7')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a122_0x4ddf('0xc')],this[a122_0x4ddf('0x6')]);const _0x39aca5=_0x1e9cef['_'][a122_0x4ddf('0x8')]('\x20'),_0x569ac9=await omnic[a122_0x4ddf('0x14')](a122_0x4ddf('0x3')+encodeURIComponent(_0x39aca5)),_0x1ecd4e=await _0x569ac9['json']();if(!_0x1ecd4e||!_0x1ecd4e[a122_0x4ddf('0x11')]||!_0x1ecd4e[a122_0x4ddf('0x11')][a122_0x4ddf('0x7')])throw new Error(a122_0x4ddf('0x1f'));await _0x146429[a122_0x4ddf('0x10')]['send']({'embed':{'color':tesseract_1[a122_0x4ddf('0xa')][a122_0x4ddf('0xd')][a122_0x4ddf('0x19')],'author':{'name':'Manga'},'title':Object[a122_0x4ddf('0xb')](_0x1ecd4e[a122_0x4ddf('0x11')][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0x25')])[0x0],'url':a122_0x4ddf('0x2')+_0x1ecd4e['data'][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0x22')],'description':this['sanitize'](_0x1ecd4e[a122_0x4ddf('0x11')][0x0][a122_0x4ddf('0x17')]['synopsis']),'fields':[{'name':'Status','value':_0x1ecd4e['data'][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0x0')]?a122_0x4ddf('0x13'):a122_0x4ddf('0x20'),'inline':!![]},{'name':a122_0x4ddf('0x24'),'value':_0x1ecd4e[a122_0x4ddf('0x11')][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0x0')]?_0x1ecd4e[a122_0x4ddf('0x11')][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0xf')]+'\x20-\x20'+_0x1ecd4e['data'][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0x0')]:_0x1ecd4e[a122_0x4ddf('0x11')][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0xf')]+a122_0x4ddf('0x21'),'inline':!![]}],'image':{'url':_0x1ecd4e[a122_0x4ddf('0x11')][0x0][a122_0x4ddf('0x17')][a122_0x4ddf('0x18')][a122_0x4ddf('0x12')]},'footer':{'text':a122_0x4ddf('0x5')}}});};}};