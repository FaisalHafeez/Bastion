const a181_0x272d=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','message','code','random','Greetings\x20from\x20','default','Joined\x20using\x20the\x20invite\x20','forBots','Joined\x20Discord','user','Logger','error','timeout','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Listener','bot','generateEmbed','fetchInvites','replaceMemberVariables','Member','channelId','LISTENER_MODE','handleInviteRoles','stringify','getDocument','then','../assets/greetings.json','guildMemberAdd','createLog','@bastion/tesseract','length','send','map','values','parse','isPublicBastion','filter','.\x20Welcome\x20to\x20our\x20server!','name','delete','_id','get','channels','exec','handleGreetings','roles','Constants','cache','handleAutoRoles','../utils/embeds','add','guild','autoAssignable','uses','../utils/constants','Greetings!','apply','forUsers','Member\x20ID','partial','catch','Member\x20Type','client','deletable','exports','has','toUTCString','invites','createDM','find','test','greeting','../models/Role','../utils/variables'];(function(_0x2fd337,_0x272dce){const _0x51b6b1=function(_0x302207){while(--_0x302207){_0x2fd337['push'](_0x2fd337['shift']());}},_0x410645=function(){const _0x3fb04c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x165f61,_0x39c791,_0x3ed168,_0x55bb93){_0x55bb93=_0x55bb93||{};let _0x73febd=_0x39c791+'='+_0x3ed168,_0x921c0a=0x0;for(let _0x4394e0=0x0,_0x24d920=_0x165f61['length'];_0x4394e0<_0x24d920;_0x4394e0++){const _0x19262d=_0x165f61[_0x4394e0];_0x73febd+=';\x20'+_0x19262d;const _0x18b1d7=_0x165f61[_0x19262d];_0x165f61['push'](_0x18b1d7),_0x24d920=_0x165f61['length'],_0x18b1d7!==!![]&&(_0x73febd+='='+_0x18b1d7);}_0x55bb93['cookie']=_0x73febd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3906c4,_0x1acd7d){_0x3906c4=_0x3906c4||function(_0x47fc0e){return _0x47fc0e;};const _0x3b7855=_0x3906c4(new RegExp('(?:^|;\x20)'+_0x1acd7d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x37a771=function(_0x22f14e,_0x23907e){_0x22f14e(++_0x23907e);};return _0x37a771(_0x51b6b1,_0x272dce),_0x3b7855?decodeURIComponent(_0x3b7855[0x1]):undefined;}},_0x5dbc52=function(){const _0xb9ecd9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xb9ecd9['test'](_0x3fb04c['removeCookie']['toString']());};_0x3fb04c['updateCookie']=_0x5dbc52;let _0x3bd8ff='';const _0x438f8c=_0x3fb04c['updateCookie']();if(!_0x438f8c)_0x3fb04c['setCookie'](['*'],'counter',0x1);else _0x438f8c?_0x3bd8ff=_0x3fb04c['getCookie'](null,'counter'):_0x3fb04c['removeCookie']();};_0x410645();}(a181_0x272d,0x1df));const a181_0x51b6=function(_0x2fd337,_0x272dce){_0x2fd337=_0x2fd337-0x0;let _0x51b6b1=a181_0x272d[_0x2fd337];return _0x51b6b1;};const _0x2576e5=a181_0x51b6,a181_0x3fb04c=function(){let _0x3bd8ff=!![];return function(_0x438f8c,_0x165f61){const _0x39c791=_0x3bd8ff?function(){const _0x27cd43=a181_0x51b6;if(_0x165f61){const _0x3ed168=_0x165f61[_0x27cd43('0x1c')](_0x438f8c,arguments);return _0x165f61=null,_0x3ed168;}}:function(){};return _0x3bd8ff=![],_0x39c791;};}(),a181_0x302207=a181_0x3fb04c(this,function(){const _0x55bb93=function(){const _0x5e5218=a181_0x51b6,_0x73febd=_0x55bb93[_0x5e5218('0x3b')](_0x5e5218('0x2e'))()[_0x5e5218('0x3b')](_0x5e5218('0x3c'));return!_0x73febd[_0x5e5218('0x2a')](a181_0x302207);};return _0x55bb93();});a181_0x302207();'use strict';const tesseract_1=require(_0x2576e5('0x1')),Role_1=require(_0x2576e5('0x2c')),constants=require(_0x2576e5('0x1a')),embeds=require(_0x2576e5('0x15')),variables=require(_0x2576e5('0x2d')),greetings=require(_0x2576e5('0x49'));module[_0x2576e5('0x24')]=class GuildMemberAddListener extends tesseract_1[_0x2576e5('0x3d')]{constructor(){const _0x10b3e1=_0x2576e5;super(_0x10b3e1('0x4a'),{'mode':tesseract_1[_0x10b3e1('0x12')][_0x10b3e1('0x44')]['ON']}),this['handleAutoRoles']=async(_0x921c0a,_0x4394e0)=>{const _0x30954=_0x10b3e1,_0x24d920=await Role_1[_0x30954('0x33')][_0x30954('0x29')]({'guild':_0x4394e0['id'],'autoAssignable':{'$exists':!![],'$ne':null}}),_0x19262d=_0x24d920[_0x30954('0x8')](_0x1acd7d=>_0x1acd7d[_0x30954('0x18')]&&_0x1acd7d[_0x30954('0x18')]['forBots'])[_0x30954('0x4')](_0x3b7855=>_0x3b7855[_0x30954('0xc')]),_0x18b1d7=_0x24d920[_0x30954('0x8')](_0x37a771=>_0x37a771[_0x30954('0x18')]&&_0x37a771[_0x30954('0x18')][_0x30954('0x1d')])[_0x30954('0x4')](_0x47fc0e=>_0x47fc0e[_0x30954('0xc')]),_0x3906c4=_0x24d920[_0x30954('0x8')](_0x22f14e=>_0x22f14e[_0x30954('0x18')]&&(Number(_0x22f14e[_0x30954('0x18')][_0x30954('0x35')])^Number(_0x22f14e[_0x30954('0x18')][_0x30954('0x1d')]))===0x0)[_0x30954('0x4')](_0x23907e=>_0x23907e[_0x30954('0xc')]);(_0x19262d[_0x30954('0x2')]||_0x18b1d7['length']||_0x3906c4[_0x30954('0x2')])&&_0x921c0a[_0x30954('0x11')][_0x30954('0x16')](_0x3906c4['concat'](_0x921c0a['user']['bot']?_0x19262d:_0x18b1d7),'Auto\x20added\x20via\x20Auto\x20Roles');},this['handleGreetings']=(_0xb9ecd9,_0x4e17e1)=>{const _0x2a1387=_0x10b3e1;if(!_0x4e17e1[_0x2a1387('0x2b')])return;_0x4e17e1[_0x2a1387('0x2b')]['privateMessage']&&_0xb9ecd9[_0x2a1387('0x28')]()[_0x2a1387('0x48')](_0x44644d=>{const _0x2c5423=_0x2a1387;_0x44644d[_0x2c5423('0x3')]({'embed':{...JSON[_0x2c5423('0x6')](variables[_0x2c5423('0x41')](JSON[_0x2c5423('0x46')](_0x1b2c84),_0xb9ecd9)),'footer':{'text':_0x2c5423('0x32')+_0xb9ecd9[_0x2c5423('0x17')][_0x2c5423('0xa')]+_0x2c5423('0x9')}}})[_0x2c5423('0x20')](()=>{});})[_0x2a1387('0x20')](()=>{});if(!_0x4e17e1[_0x2a1387('0x2b')]['channelId'])return;if(!_0xb9ecd9[_0x2a1387('0x17')][_0x2a1387('0xe')][_0x2a1387('0x13')][_0x2a1387('0x25')](_0x4e17e1['greeting']['channelId']))return;const _0x3a6122=_0xb9ecd9[_0x2a1387('0x17')][_0x2a1387('0xe')][_0x2a1387('0x13')][_0x2a1387('0xd')](_0x4e17e1[_0x2a1387('0x2b')][_0x2a1387('0x43')]),_0x1b2c84=embeds[_0x2a1387('0x3f')](_0x4e17e1['greeting']['message']?_0x4e17e1[_0x2a1387('0x2b')][_0x2a1387('0x2f')]:greetings[Math['floor'](Math[_0x2a1387('0x31')]()*greetings[_0x2a1387('0x2')])]);_0x3a6122['send']({'embed':{...JSON['parse'](variables[_0x2a1387('0x41')](JSON['stringify'](_0x1b2c84),_0xb9ecd9)),'footer':{'text':_0x2a1387('0x1b')}}})[_0x2a1387('0x48')](_0x512c13=>{const _0x2bfb30=_0x2a1387;_0x4e17e1[_0x2bfb30('0x2b')][_0x2bfb30('0x3a')]&&_0x512c13[_0x2bfb30('0x23')]&&_0x512c13[_0x2bfb30('0xb')]({'timeout':_0x4e17e1[_0x2bfb30('0x2b')]['timeout']*0xea60})[_0x2bfb30('0x20')](()=>{});})[_0x2a1387('0x20')](()=>{});},this[_0x10b3e1('0x45')]=async _0x5e79b7=>{const _0x1abdb7=_0x10b3e1;if(constants[_0x1abdb7('0x7')](_0x5e79b7[_0x1abdb7('0x22')]['user']))return;const _0x3082f4=await _0x5e79b7[_0x1abdb7('0x17')][_0x1abdb7('0x40')](),_0x5d72bd=_0x3082f4[_0x1abdb7('0x29')](_0x521295=>_0x521295[_0x1abdb7('0x19')]>_0x5e79b7['guild'][_0x1abdb7('0x27')][_0x521295['code']]);for(const _0x266d5 of _0x3082f4[_0x1abdb7('0x5')]()){_0x5e79b7[_0x1abdb7('0x17')][_0x1abdb7('0x27')][_0x266d5[_0x1abdb7('0x30')]]=_0x266d5[_0x1abdb7('0x19')]||0x0;}const _0x4303bd=await Role_1['default']['find']({'guild':_0x5e79b7[_0x1abdb7('0x17')]['id'],'invite':_0x5d72bd[_0x1abdb7('0x30')]});_0x4303bd&&_0x4303bd['length']&&await _0x5e79b7['roles'][_0x1abdb7('0x16')](_0x4303bd[_0x1abdb7('0x4')](_0x4572ec=>_0x4572ec['_id']),_0x1abdb7('0x34')+_0x5d72bd['code']);},this[_0x10b3e1('0xf')]=async _0x285ebb=>{const _0x18bd0c=_0x10b3e1;_0x285ebb[_0x18bd0c('0x1f')]&&await _0x285ebb['fetch']();const _0x39ba56=_0x285ebb[_0x18bd0c('0x17')],_0x38ac5c=await _0x39ba56[_0x18bd0c('0x47')]();this[_0x18bd0c('0x10')](_0x285ebb,_0x38ac5c),this[_0x18bd0c('0x14')](_0x285ebb,_0x39ba56),this['handleInviteRoles'](_0x285ebb)[_0x18bd0c('0x20')](tesseract_1[_0x18bd0c('0x38')][_0x18bd0c('0x39')]),_0x39ba56[_0x18bd0c('0x0')]({'event':_0x18bd0c('0x4a'),'fields':[{'name':_0x18bd0c('0x42'),'value':_0x285ebb['user']['tag'],'inline':!![]},{'name':_0x18bd0c('0x1e'),'value':_0x285ebb['id'],'inline':!![]},{'name':_0x18bd0c('0x21'),'value':_0x285ebb['user'][_0x18bd0c('0x3e')]?'Bot':'Human','inline':!![]},{'name':_0x18bd0c('0x36'),'value':_0x285ebb[_0x18bd0c('0x37')]['createdAt'][_0x18bd0c('0x26')](),'inline':!![]}],'timestamp':_0x285ebb['joinedTimestamp']});};}};