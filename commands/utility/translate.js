const a140_0x4f09=['language','translate\x20--from\x20LANGUAGE\x20--to\x20LANGUAGE\x20--\x20TEXT','Source\x20Language','toLowerCase','return\x20/\x22\x20+\x20this\x20+\x20\x22/','translate','apply','send','exports','It\x20allows\x20you\x20to\x20translate\x20the\x20specified\x20text\x20from\x20one\x20language\x20to\x20another.','translate\x20--to\x20LANGUAGE\x20--\x20TEXT','../../utils/errors','name','DiscordError','@bastion/tesseract','BASTION_ERROR_TYPE','test','from','join','exec','guild','translate\x20--\x20TEXT','Target\x20Language','Translation','COLORS','Constants','Powered\x20by\x20Google','constructor'];(function(_0x4239d0,_0x4f094d){const _0x1ae08d=function(_0x4fe835){while(--_0x4fe835){_0x4239d0['push'](_0x4239d0['shift']());}},_0x206099=function(){const _0x4ffa75={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3fb005,_0x33a623,_0xa8b332,_0xe9f4df){_0xe9f4df=_0xe9f4df||{};let _0xc420b3=_0x33a623+'='+_0xa8b332,_0x2815dd=0x0;for(let _0xcf27b5=0x0,_0x3c6729=_0x3fb005['length'];_0xcf27b5<_0x3c6729;_0xcf27b5++){const _0x59ad5b=_0x3fb005[_0xcf27b5];_0xc420b3+=';\x20'+_0x59ad5b;const _0x1be9d2=_0x3fb005[_0x59ad5b];_0x3fb005['push'](_0x1be9d2),_0x3c6729=_0x3fb005['length'],_0x1be9d2!==!![]&&(_0xc420b3+='='+_0x1be9d2);}_0xe9f4df['cookie']=_0xc420b3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x64a76,_0x54682c){_0x64a76=_0x64a76||function(_0x5d382a){return _0x5d382a;};const _0x772727=_0x64a76(new RegExp('(?:^|;\x20)'+_0x54682c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x28b0f2=function(_0x380707,_0x2b3039){_0x380707(++_0x2b3039);};return _0x28b0f2(_0x1ae08d,_0x4f094d),_0x772727?decodeURIComponent(_0x772727[0x1]):undefined;}},_0x5f245b=function(){const _0x2d586b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2d586b['test'](_0x4ffa75['removeCookie']['toString']());};_0x4ffa75['updateCookie']=_0x5f245b;let _0x87f587='';const _0x52e6bb=_0x4ffa75['updateCookie']();if(!_0x52e6bb)_0x4ffa75['setCookie'](['*'],'counter',0x1);else _0x52e6bb?_0x87f587=_0x4ffa75['getCookie'](null,'counter'):_0x4ffa75['removeCookie']();};_0x206099();}(a140_0x4f09,0x17a));const a140_0x1ae0=function(_0x4239d0,_0x4f094d){_0x4239d0=_0x4239d0-0x0;let _0x1ae08d=a140_0x4f09[_0x4239d0];return _0x1ae08d;};const a140_0xa8b332=function(){let _0x1e9fba=!![];return function(_0x10f653,_0x1b69f5){const _0x1998f1=_0x1e9fba?function(){if(_0x1b69f5){const _0x50f99a=_0x1b69f5[a140_0x1ae0('0x14')](_0x10f653,arguments);return _0x1b69f5=null,_0x50f99a;}}:function(){};return _0x1e9fba=![],_0x1998f1;};}(),a140_0x33a623=a140_0xa8b332(this,function(){const _0x2497bf=function(){const _0x250ce0=_0x2497bf[a140_0x1ae0('0xd')](a140_0x1ae0('0x12'))()[a140_0x1ae0('0xd')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x250ce0[a140_0x1ae0('0x2')](a140_0x33a623);};return _0x2497bf();});a140_0x33a623();'use strict';const tesseract_1=require(a140_0x1ae0('0x0')),translate=require('@k3rn31p4nic/google-translate-api'),errors=require(a140_0x1ae0('0x19'));module[a140_0x1ae0('0x16')]=class TranslateCommand extends tesseract_1['Command']{constructor(){super(a140_0x1ae0('0x13'),{'description':a140_0x1ae0('0x17'),'triggers':[],'arguments':{},'scope':a140_0x1ae0('0x6'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a140_0x1ae0('0x7'),a140_0x1ae0('0x18'),a140_0x1ae0('0xf')]}),this[a140_0x1ae0('0x5')]=async(_0x5096cb,_0x59c457)=>{if(!_0x59c457['_']['length'])throw new errors[(a140_0x1ae0('0x1b'))](errors[a140_0x1ae0('0x1')]['INVALID_COMMAND_SYNTAX'],this[a140_0x1ae0('0x1a')]);const _0x1829c6=_0x59c457['_'][a140_0x1ae0('0x4')]('\x20'),_0x27768b=_0x59c457[a140_0x1ae0('0x3')]?_0x59c457[a140_0x1ae0('0x3')][a140_0x1ae0('0x11')]():'auto',_0x5c0ec1=_0x59c457['to']?_0x59c457['to'][a140_0x1ae0('0x11')]():'en',_0x1515fc=await translate(_0x1829c6,{'from':_0x27768b,'to':_0x5c0ec1});await _0x5096cb['channel'][a140_0x1ae0('0x15')]({'embed':{'color':tesseract_1[a140_0x1ae0('0xb')][a140_0x1ae0('0xa')]['IRIS'],'title':a140_0x1ae0('0x9'),'description':_0x1515fc['text'],'fields':[{'name':a140_0x1ae0('0x10'),'value':_0x1515fc[a140_0x1ae0('0x3')][a140_0x1ae0('0xe')]['iso']['toUpperCase'](),'inline':!![]},{'name':a140_0x1ae0('0x8'),'value':_0x5c0ec1['toUpperCase'](),'inline':!![]}],'footer':{'text':a140_0x1ae0('0xc')}}});};}};