const a132_0x55ac=['slice','exports','ERROR','@bastion/tesseract','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','DiscordError','sanitize','INVALID_COMMAND_SYNTAX','COLORS','channel','BASTION_ERROR_TYPE','calculate','constructor','Constants','```js\x0a','IRIS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','calculate\x20--\x20EXPRESSION','Calculator','name','exec','INPUT','It\x20allows\x20you\x20to\x20evaluate\x20mathematical\x20expressions\x20and\x20see\x20their\x20result.','```','test','../../utils/errors','length','Command','join','calc','apply','mathjs','toString','guild','OUTPUT'];(function(_0x9f8d9a,_0x55ac77){const _0x2b314e=function(_0x3dad98){while(--_0x3dad98){_0x9f8d9a['push'](_0x9f8d9a['shift']());}},_0x2a666f=function(){const _0x4205ac={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x190df4,_0x1284fe,_0x833a0e,_0x2e83a7){_0x2e83a7=_0x2e83a7||{};let _0x5401bd=_0x1284fe+'='+_0x833a0e,_0x5c1a4f=0x0;for(let _0x27de10=0x0,_0x2372f9=_0x190df4['length'];_0x27de10<_0x2372f9;_0x27de10++){const _0x1528e3=_0x190df4[_0x27de10];_0x5401bd+=';\x20'+_0x1528e3;const _0x50e170=_0x190df4[_0x1528e3];_0x190df4['push'](_0x50e170),_0x2372f9=_0x190df4['length'],_0x50e170!==!![]&&(_0x5401bd+='='+_0x50e170);}_0x2e83a7['cookie']=_0x5401bd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4554ff,_0x46ba19){_0x4554ff=_0x4554ff||function(_0x18dc18){return _0x18dc18;};const _0xefd1cd=_0x4554ff(new RegExp('(?:^|;\x20)'+_0x46ba19['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x57e1ba=function(_0x24e2ee,_0x262311){_0x24e2ee(++_0x262311);};return _0x57e1ba(_0x2b314e,_0x55ac77),_0xefd1cd?decodeURIComponent(_0xefd1cd[0x1]):undefined;}},_0x5d4b2c=function(){const _0x217800=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x217800['test'](_0x4205ac['removeCookie']['toString']());};_0x4205ac['updateCookie']=_0x5d4b2c;let _0x4a7ae2='';const _0x53bbca=_0x4205ac['updateCookie']();if(!_0x53bbca)_0x4205ac['setCookie'](['*'],'counter',0x1);else _0x53bbca?_0x4a7ae2=_0x4205ac['getCookie'](null,'counter'):_0x4205ac['removeCookie']();};_0x2a666f();}(a132_0x55ac,0x8d));const a132_0x2b31=function(_0x9f8d9a,_0x55ac77){_0x9f8d9a=_0x9f8d9a-0x0;let _0x2b314e=a132_0x55ac[_0x9f8d9a];return _0x2b314e;};const a132_0x4205ac=function(){let _0x4a7ae2=!![];return function(_0x53bbca,_0x190df4){const _0x1284fe=_0x4a7ae2?function(){if(_0x190df4){const _0x833a0e=_0x190df4[a132_0x2b31('0x22')](_0x53bbca,arguments);return _0x190df4=null,_0x833a0e;}}:function(){};return _0x4a7ae2=![],_0x1284fe;};}(),a132_0x3dad98=a132_0x4205ac(this,function(){const _0x2e83a7=function(){const _0x5401bd=_0x2e83a7[a132_0x2b31('0x10')](a132_0x2b31('0x7'))()['constructor'](a132_0x2b31('0x14'));return!_0x5401bd[a132_0x2b31('0x1c')](a132_0x3dad98);};return _0x2e83a7();});a132_0x3dad98();'use strict';const tesseract_1=require(a132_0x2b31('0x6')),math=require(a132_0x2b31('0x23')),errors=require(a132_0x2b31('0x1d'));module[a132_0x2b31('0x4')]=class CalculateCommand extends tesseract_1[a132_0x2b31('0x1f')]{constructor(){super(a132_0x2b31('0xf'),{'description':a132_0x2b31('0x1a'),'triggers':[a132_0x2b31('0x21')],'arguments':{},'scope':a132_0x2b31('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a132_0x2b31('0x15')]}),this[a132_0x2b31('0xa')]=_0x5c1a4f=>{return _0x5c1a4f[a132_0x2b31('0x1e')]>0x3e8?_0x5c1a4f[a132_0x2b31('0x3')](0x0,0x3e8)+'\x0a...':_0x5c1a4f;},this[a132_0x2b31('0x18')]=async(_0x27de10,_0x2372f9)=>{if(!_0x2372f9['_'][a132_0x2b31('0x1e')])throw new errors[(a132_0x2b31('0x9'))](errors[a132_0x2b31('0xe')][a132_0x2b31('0xb')],this[a132_0x2b31('0x17')]);const _0x1528e3=_0x2372f9['_'][a132_0x2b31('0x20')]('\x20');let _0x50e170,_0x4554ff;try{_0x50e170=math['evaluate'](_0x1528e3)[a132_0x2b31('0x0')]();}catch(_0x46ba19){_0x4554ff=_0x46ba19[a132_0x2b31('0x0')]();}await _0x27de10[a132_0x2b31('0xd')][a132_0x2b31('0x8')]({'embed':{'color':tesseract_1[a132_0x2b31('0x11')][a132_0x2b31('0xc')][a132_0x2b31('0x13')],'title':a132_0x2b31('0x16'),'fields':[{'name':a132_0x2b31('0x19'),'value':a132_0x2b31('0x12')+this[a132_0x2b31('0xa')](_0x1528e3)+a132_0x2b31('0x1b')},{'name':_0x4554ff?a132_0x2b31('0x5'):a132_0x2b31('0x2'),'value':a132_0x2b31('0x12')+this[a132_0x2b31('0xa')](_0x4554ff?_0x4554ff:_0x50e170)+a132_0x2b31('0x1b')}]}});};}};