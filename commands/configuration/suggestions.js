const a37_0x5968=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','suggestionsDisable','locale','guild','exports','tag','getString','COLORS','MANAGE_GUILD','exec','send','language','save','document','suggestionsChannelId','channel','suggestions','Checkout\x20[**Glee**](https://glee.traction.one).\x20The\x20best\x20way\x20to\x20collect\x20user\x20feedback.','apply','RED','author','constructor','disable','suggestionsEnable','suggestions\x20--disable','Constants'];(function(_0x3056aa,_0x596883){const _0x472faa=function(_0x1e8709){while(--_0x1e8709){_0x3056aa['push'](_0x3056aa['shift']());}},_0x360f63=function(){const _0x5052aa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1c0191,_0x48813a,_0x379dbe,_0x11eda3){_0x11eda3=_0x11eda3||{};let _0x4b5cc0=_0x48813a+'='+_0x379dbe,_0x13737f=0x0;for(let _0xc2cc11=0x0,_0x559637=_0x1c0191['length'];_0xc2cc11<_0x559637;_0xc2cc11++){const _0x3ec3b8=_0x1c0191[_0xc2cc11];_0x4b5cc0+=';\x20'+_0x3ec3b8;const _0x437a82=_0x1c0191[_0x3ec3b8];_0x1c0191['push'](_0x437a82),_0x559637=_0x1c0191['length'],_0x437a82!==!![]&&(_0x4b5cc0+='='+_0x437a82);}_0x11eda3['cookie']=_0x4b5cc0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14b1b5,_0x53e00b){_0x14b1b5=_0x14b1b5||function(_0x31c890){return _0x31c890;};const _0x482312=_0x14b1b5(new RegExp('(?:^|;\x20)'+_0x53e00b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x8777bd=function(_0x363172,_0x488187){_0x363172(++_0x488187);};return _0x8777bd(_0x472faa,_0x596883),_0x482312?decodeURIComponent(_0x482312[0x1]):undefined;}},_0x2e14d7=function(){const _0x403090=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x403090['test'](_0x5052aa['removeCookie']['toString']());};_0x5052aa['updateCookie']=_0x2e14d7;let _0x35089a='';const _0x2a2919=_0x5052aa['updateCookie']();if(!_0x2a2919)_0x5052aa['setCookie'](['*'],'counter',0x1);else _0x2a2919?_0x35089a=_0x5052aa['getCookie'](null,'counter'):_0x5052aa['removeCookie']();};_0x360f63();}(a37_0x5968,0x12f));const a37_0x472f=function(_0x3056aa,_0x596883){_0x3056aa=_0x3056aa-0x0;let _0x472faa=a37_0x5968[_0x3056aa];return _0x472faa;};const a37_0x5052aa=function(){let _0x35089a=!![];return function(_0x2a2919,_0x1c0191){const _0x48813a=_0x35089a?function(){if(_0x1c0191){const _0x379dbe=_0x1c0191[a37_0x472f('0xd')](_0x2a2919,arguments);return _0x1c0191=null,_0x379dbe;}}:function(){};return _0x35089a=![],_0x48813a;};}(),a37_0x1e8709=a37_0x5052aa(this,function(){const _0x11eda3=function(){const _0x4b5cc0=_0x11eda3[a37_0x472f('0x10')](a37_0x472f('0x15'))()[a37_0x472f('0x10')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4b5cc0[a37_0x472f('0x16')](a37_0x1e8709);};return _0x11eda3();});a37_0x1e8709();'use strict';const tesseract_1=require('@bastion/tesseract');module[a37_0x472f('0x1a')]=class Suggestions extends tesseract_1['Command']{constructor(){super(a37_0x472f('0xb'),{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20suggestions\x20in\x20the\x20server.\x20It\x20sets\x20the\x20channel\x20as\x20the\x20Suggestion\x20Channel\x20that\x20will\x20receive\x20the\x20suggestions,\x20suggested\x20by\x20the\x20server\x20members\x20using\x20the\x20`suggest`\x20command.','triggers':[],'arguments':{'alias':{'disable':['d']},'boolean':['disable']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a37_0x472f('0x3')],'syntax':[a37_0x472f('0xb'),a37_0x472f('0x13')]}),this[a37_0x472f('0x4')]=async(_0x13737f,_0xc2cc11)=>{const _0x559637=_0x13737f['guild'];_0xc2cc11[a37_0x472f('0x11')]?(_0x559637['document'][a37_0x472f('0x9')]=undefined,delete _0x559637[a37_0x472f('0x8')][a37_0x472f('0x9')]):_0x559637[a37_0x472f('0x8')][a37_0x472f('0x9')]=_0x13737f[a37_0x472f('0xa')]['id'],await _0x559637[a37_0x472f('0x8')][a37_0x472f('0x7')](),await _0x13737f['channel'][a37_0x472f('0x5')]({'embed':{'color':_0x559637[a37_0x472f('0x8')][a37_0x472f('0x9')]?tesseract_1[a37_0x472f('0x14')][a37_0x472f('0x2')]['GREEN']:tesseract_1['Constants'][a37_0x472f('0x2')][a37_0x472f('0xe')],'description':this['client'][a37_0x472f('0x18')][a37_0x472f('0x1')](_0x13737f[a37_0x472f('0x19')][a37_0x472f('0x8')][a37_0x472f('0x6')],'info',_0x559637['document'][a37_0x472f('0x9')]?a37_0x472f('0x12'):a37_0x472f('0x17'),_0x13737f[a37_0x472f('0xf')][a37_0x472f('0x0')]),'fields':[{'name':'Collect\x20and\x20track\x20suggestions\x20more\x20effectively.','value':a37_0x472f('0xc')}]}});};}};