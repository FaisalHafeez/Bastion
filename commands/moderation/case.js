const a73_0x1e41=['embeds','language','channel','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','clamp','getString','apply','type','moderationLogChannelId','../../models/Case','case\x20--number\x20NUMBER','messages','fetch','exec','guild','text','name','It\x20allows\x20you\x20to\x20see\x20the\x20moderation\x20case\x20log\x20for\x20the\x20specified\x20case\x20number.','news','compile','has','TextChannel','locale','MAX_SAFE_INTEGER','messageId','errors','number','NewsChannel','../../utils/errors','BASTION_ERROR_TYPE','floor','channels','exports','../../utils/numbers','default','INVALID_COMMAND_SYNTAX','case','document','test','@bastion/tesseract','MANAGE_GUILD'];(function(_0x3b8083,_0x1e4176){const _0x4d4675=function(_0x331364){while(--_0x331364){_0x3b8083['push'](_0x3b8083['shift']());}};const _0xd7354=function(){const _0x35862c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5daf37,_0x3de018,_0x31b7bd,_0x2f63a5){_0x2f63a5=_0x2f63a5||{};let _0x52f378=_0x3de018+'='+_0x31b7bd;let _0x55dc3b=0x0;for(let _0x46c202=0x0,_0x28e74a=_0x5daf37['length'];_0x46c202<_0x28e74a;_0x46c202++){const _0x1f4d3e=_0x5daf37[_0x46c202];_0x52f378+=';\x20'+_0x1f4d3e;const _0x31beb9=_0x5daf37[_0x1f4d3e];_0x5daf37['push'](_0x31beb9);_0x28e74a=_0x5daf37['length'];if(_0x31beb9!==!![]){_0x52f378+='='+_0x31beb9;}}_0x2f63a5['cookie']=_0x52f378;},'removeCookie':function(){return'dev';},'getCookie':function(_0x51e045,_0xc56b87){_0x51e045=_0x51e045||function(_0x255858){return _0x255858;};const _0x2549ba=_0x51e045(new RegExp('(?:^|;\x20)'+_0xc56b87['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x486c6a=function(_0x93a0a3,_0x1d5026){_0x93a0a3(++_0x1d5026);};_0x486c6a(_0x4d4675,_0x1e4176);return _0x2549ba?decodeURIComponent(_0x2549ba[0x1]):undefined;}};const _0x29c3a6=function(){const _0x1fe11a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1fe11a['test'](_0x35862c['removeCookie']['toString']());};_0x35862c['updateCookie']=_0x29c3a6;let _0x3283ff='';const _0x14a87a=_0x35862c['updateCookie']();if(!_0x14a87a){_0x35862c['setCookie'](['*'],'counter',0x1);}else if(_0x14a87a){_0x3283ff=_0x35862c['getCookie'](null,'counter');}else{_0x35862c['removeCookie']();}};_0xd7354();}(a73_0x1e41,0x15e));const a73_0x4d46=function(_0x3b8083,_0x1e4176){_0x3b8083=_0x3b8083-0x0;let _0x4d4675=a73_0x1e41[_0x3b8083];return _0x4d4675;};const a73_0x35862c=function(){let _0x2517c7=!![];return function(_0x25b941,_0x5674b8){const _0x2f3c0d=_0x2517c7?function(){if(_0x5674b8){const _0x270e19=_0x5674b8[a73_0x4d46('0x23')](_0x25b941,arguments);_0x5674b8=null;return _0x270e19;}}:function(){};_0x2517c7=![];return _0x2f3c0d;};}();const a73_0x331364=a73_0x35862c(this,function(){const _0x3b0113=function(){const _0x24c395=_0x3b0113[a73_0x4d46('0x1f')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a73_0x4d46('0x6')](a73_0x4d46('0x20'));return!_0x24c395[a73_0x4d46('0x19')](a73_0x331364);};return _0x3b0113();});a73_0x331364();'use strict';const tesseract_1=require(a73_0x4d46('0x1a'));const discord_js_1=require('discord.js');const errors=require(a73_0x4d46('0xf'));const numbers=require(a73_0x4d46('0x14'));const Case_1=require(a73_0x4d46('0x26'));module[a73_0x4d46('0x13')]=class CaseCommand extends tesseract_1['Command']{constructor(){super(a73_0x4d46('0x17'),{'description':a73_0x4d46('0x4'),'triggers':[],'arguments':{'alias':{'number':'n'},'number':['number'],'coerce':{'number':_0x5286f1=>Math[a73_0x4d46('0x11')](numbers[a73_0x4d46('0x21')](_0x5286f1,0x1,Number[a73_0x4d46('0xa')]))}},'scope':a73_0x4d46('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a73_0x4d46('0x1b')],'syntax':[a73_0x4d46('0x27')]});this[a73_0x4d46('0x0')]=async(_0x4d6908,_0x35f280)=>{if(!_0x35f280[a73_0x4d46('0xd')])throw new errors['DiscordError'](errors[a73_0x4d46('0x10')][a73_0x4d46('0x16')],this[a73_0x4d46('0x3')]);const _0x19dcf9=await Case_1[a73_0x4d46('0x15')]['findOne']({'guild':_0x4d6908[a73_0x4d46('0x1')]['id'],'number':_0x35f280[a73_0x4d46('0xd')]});if(!_0x19dcf9)throw new Error(this['client'][a73_0x4d46('0x9')][a73_0x4d46('0x22')](_0x4d6908['guild'][a73_0x4d46('0x18')][a73_0x4d46('0x1d')],a73_0x4d46('0xc'),'caseNotFound'));const _0x20a7da=_0x4d6908[a73_0x4d46('0x1')][a73_0x4d46('0x12')]['cache']['filter'](_0x340d87=>_0x340d87[a73_0x4d46('0x24')]===a73_0x4d46('0x2')||_0x340d87[a73_0x4d46('0x24')]===a73_0x4d46('0x5'));if(_0x4d6908[a73_0x4d46('0x1')][a73_0x4d46('0x18')][a73_0x4d46('0x25')]&&_0x20a7da[a73_0x4d46('0x7')](_0x4d6908[a73_0x4d46('0x1')][a73_0x4d46('0x18')][a73_0x4d46('0x25')])){const _0x1bac4e=_0x20a7da['get'](_0x4d6908[a73_0x4d46('0x1')][a73_0x4d46('0x18')][a73_0x4d46('0x25')]);if(_0x1bac4e instanceof discord_js_1[a73_0x4d46('0xe')]||_0x1bac4e instanceof discord_js_1[a73_0x4d46('0x8')]){const _0xbd376c=await _0x1bac4e[a73_0x4d46('0x28')][a73_0x4d46('0x29')](_0x19dcf9[a73_0x4d46('0xb')]);await _0x4d6908[a73_0x4d46('0x1e')]['send']({'embed':_0xbd376c[a73_0x4d46('0x1c')][0x0]});}}};}};