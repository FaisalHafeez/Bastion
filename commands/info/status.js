const a74_0x594c=['ids','toFixed','Shard\x20','\x20•\x20','Uptime','client','count','send','status\x20--shard','Bot\x20ID','/status','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/constants','version','Memory\x20Usage','description','created_at','\x20Status','test','application/json','toLocaleString','rss','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','humanize','getMembership','BASTION_BOOT_TIME','Command','COLORS','locale','author.url','resolved_at','guild','between','then','\x20/\x20','Presence','minor','Connected\x20via\x20Starlink.','guilds','GREEN','Environment','toString','json','status','cache','size','configurations','concat','catch','memberCount','https://status.discord.com','getConstant','user','Constants','none','Bastion\x20v','bastion.website','reduce','Discord\x20Status','stats','join','name','ping','toUpperCase','emoji','\x20Servers\x0a','/premium)','apply','color','[Get\x20**Bastion\x20Premium\x20Membership**\x20for\x20an\x20enhanced\x20Bastion\x20experience.](','process.memoryUsage().rss','IRIS','impact','shard','arch','info','discord','Unresolved','It\x20allows\x20you\x20to\x20see\x20Bastion\x27s\x20status,\x20at\x20a\x20glance.\x20It\x20also\x20allows\x20you\x20to\x20see\x20status\x20of\x20the\x20current\x20shard.\x20You\x20can\x20also\x20see\x20a\x20summary\x20of\x20Discord\x27s\x20status.','author.username','Bastion\x20(Discord\x20Bot;\x20https://bastion.traction.one)','parseInt','https://srhpyqt94yxb.statuspage.io/api/v2/summary.json','Bot\x20Owners','Developer','broadcastEval','indicator','badgeValue','incidents','channel','this.guilds.cache.map(g\x20=>\x20g.memberCount).reduce((acc,\x20val)\x20=>\x20acc\x20+\x20val,\x200)','fetchBadges','Shards','../../utils/badges','displayAvatarURL','ownerID'];(function(_0x50c9d,_0x594c83){const _0x29d8bb=function(_0x56fefa){while(--_0x56fefa){_0x50c9d['push'](_0x50c9d['shift']());}},_0x3832a5=function(){const _0x817ffe={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2c7bda,_0x17e130,_0x311489,_0x2575db){_0x2575db=_0x2575db||{};let _0x4741e4=_0x17e130+'='+_0x311489,_0x96630=0x0;for(let _0x526c80=0x0,_0x4151dc=_0x2c7bda['length'];_0x526c80<_0x4151dc;_0x526c80++){const _0x8fe32b=_0x2c7bda[_0x526c80];_0x4741e4+=';\x20'+_0x8fe32b;const _0x700ad=_0x2c7bda[_0x8fe32b];_0x2c7bda['push'](_0x700ad),_0x4151dc=_0x2c7bda['length'],_0x700ad!==!![]&&(_0x4741e4+='='+_0x700ad);}_0x2575db['cookie']=_0x4741e4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x10bdf2,_0x90989b){_0x10bdf2=_0x10bdf2||function(_0x3dc35d){return _0x3dc35d;};const _0x29132e=_0x10bdf2(new RegExp('(?:^|;\x20)'+_0x90989b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5de5c7=function(_0x438b45,_0x311cd9){_0x438b45(++_0x311cd9);};return _0x5de5c7(_0x29d8bb,_0x594c83),_0x29132e?decodeURIComponent(_0x29132e[0x1]):undefined;}},_0x261e23=function(){const _0x5662a6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5662a6['test'](_0x817ffe['removeCookie']['toString']());};_0x817ffe['updateCookie']=_0x261e23;let _0x6f30ed='';const _0x4f0e78=_0x817ffe['updateCookie']();if(!_0x4f0e78)_0x817ffe['setCookie'](['*'],'counter',0x1);else _0x4f0e78?_0x6f30ed=_0x817ffe['getCookie'](null,'counter'):_0x817ffe['removeCookie']();};_0x3832a5();}(a74_0x594c,0x1bd));const a74_0x29d8=function(_0x50c9d,_0x594c83){_0x50c9d=_0x50c9d-0x0;let _0x29d8bb=a74_0x594c[_0x50c9d];return _0x29d8bb;};const _0x40ac0e=a74_0x29d8,a74_0x817ffe=function(){let _0x6f30ed=!![];return function(_0x4f0e78,_0x2c7bda){const _0x17e130=_0x6f30ed?function(){const _0x28859c=a74_0x29d8;if(_0x2c7bda){const _0x311489=_0x2c7bda[_0x28859c('0xb')](_0x4f0e78,arguments);return _0x2c7bda=null,_0x311489;}}:function(){};return _0x6f30ed=![],_0x17e130;};}(),a74_0x56fefa=a74_0x817ffe(this,function(){const _0x2575db=function(){const _0x379471=a74_0x29d8,_0x4741e4=_0x2575db[_0x379471('0x3f')](_0x379471('0x33'))()[_0x379471('0x3f')](_0x379471('0x3e'));return!_0x4741e4[_0x379471('0x3a')](a74_0x56fefa);};return _0x2575db();});a74_0x56fefa();'use strict';const tesseract_1=require('@bastion/tesseract'),node_fetch_1=require('node-fetch'),constants=require(_0x40ac0e('0x34')),duration=require('../../utils/durations'),badges=require(_0x40ac0e('0x25')),package_json_1=require('../../package.json');module['exports']=class StatusCommand extends tesseract_1[_0x40ac0e('0x43')]{constructor(){const _0x2e636a=_0x40ac0e;super(_0x2e636a('0x54'),{'description':_0x2e636a('0x16'),'triggers':[_0x2e636a('0x3'),_0x2e636a('0x13')],'arguments':{'boolean':[_0x2e636a('0x14'),'shard']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x2e636a('0x54'),_0x2e636a('0x30'),'status\x20--discord']}),this['exec']=async(_0x96630,_0x526c80)=>{const _0xe58339=_0x2e636a;if(_0x526c80[_0xe58339('0x14')]){const _0x5662a6=await node_fetch_1['default'](_0xe58339('0x1a'),{'method':'GET','headers':{'Accepts':_0xe58339('0x3b'),'Content-Type':_0xe58339('0x3b'),'User-Agent':_0xe58339('0x18')}}),_0x13fc14=await _0x5662a6[_0xe58339('0x53')]();return await _0x96630[_0xe58339('0x21')]['send']({'embed':{'color':_0x13fc14[_0xe58339('0x54')][_0xe58339('0x1e')]===_0xe58339('0x5f')?tesseract_1[_0xe58339('0x5e')][_0xe58339('0x44')][_0xe58339('0x50')]:_0x13fc14[_0xe58339('0x54')]['indicator']===_0xe58339('0x4d')?tesseract_1['Constants'][_0xe58339('0x44')]['ORANGE']:tesseract_1['Constants'][_0xe58339('0x44')]['RED'],'author':{'name':_0xe58339('0x2'),'url':'https://status.discord.com'},'title':_0x13fc14[_0xe58339('0x54')][_0xe58339('0x37')],'description':_0x13fc14[_0xe58339('0x54')][_0xe58339('0x1e')][_0xe58339('0x7')](),'url':_0xe58339('0x5b'),'fields':_0x13fc14[_0xe58339('0x20')]['map'](_0x3c3229=>({'name':_0x3c3229[_0xe58339('0x5')],'value':_0x3c3229[_0xe58339('0x54')]+'\x20/\x20'+_0x3c3229[_0xe58339('0x10')]+_0xe58339('0x4b')+(_0x3c3229[_0xe58339('0x47')]?'Resolved':_0xe58339('0x15'))+'\x0a'+new Date(_0x3c3229[_0xe58339('0x38')])[_0xe58339('0x3c')]()})),'timestamp':new Date()}})[_0xe58339('0x59')](()=>{});}const _0x4151dc=constants['isPublicBastion'](this[_0xe58339('0x2d')][_0xe58339('0x5d')])&&await badges[_0xe58339('0x23')](_0x96630['guild'][_0xe58339('0x27')],_0x96630[_0xe58339('0x48')]['id'])[_0xe58339('0x4a')](_0x10073e=>_0x10073e[_0xe58339('0x53')]())[_0xe58339('0x59')](()=>{}),_0x8fe32b=badges[_0xe58339('0x41')](_0x4151dc?_0x4151dc[_0xe58339('0x1f')]:0x0),_0x700ad=await this[_0xe58339('0x2d')][_0xe58339('0x11')]['broadcastEval']('this.guilds.cache.size'),_0x10bdf2=_0x526c80[_0xe58339('0x11')]?this[_0xe58339('0x2d')][_0xe58339('0x4f')][_0xe58339('0x55')][_0xe58339('0x56')]:_0x700ad[_0xe58339('0x1')]((_0x31cae5,_0x33d496)=>_0x31cae5+_0x33d496,0x0),_0x90989b=_0x526c80[_0xe58339('0x11')]?this[_0xe58339('0x2d')]['guilds']['cache']['map'](_0x25c87a=>_0x25c87a[_0xe58339('0x5a')]):await this[_0xe58339('0x2d')][_0xe58339('0x11')][_0xe58339('0x1d')](_0xe58339('0x22')),_0x29132e=_0x90989b[_0xe58339('0x1')]((_0x2bbec3,_0x37e251)=>_0x2bbec3+_0x37e251,0x0),_0x5de5c7=await this[_0xe58339('0x2d')]['shard'][_0xe58339('0x1d')](_0xe58339('0xe')),_0x3dc35d=_0x526c80['shard']?process['memoryUsage']()[_0xe58339('0x3d')]:_0x5de5c7[_0xe58339('0x1')]((_0x35bb9e,_0x218e74)=>_0x35bb9e+_0x218e74,0x0),_0x438b45=[{'name':_0xe58339('0x1c'),'value':'['+this[_0xe58339('0x2d')]['locale'][_0xe58339('0x5c')](_0xe58339('0x17'))+']('+this['client'][_0xe58339('0x45')]['getConstant'](_0xe58339('0x46'))+')','inline':!![]},{'name':_0xe58339('0x31'),'value':this['client'][_0xe58339('0x5d')]['id'],'inline':!![]},{'name':_0xe58339('0x1b'),'value':this['client']['credentials']['owners'][_0xe58339('0x4')]('\x0a')||'-','inline':!![]},{'name':'Default\x20Prefixes','value':this[_0xe58339('0x2d')][_0xe58339('0x57')]['prefixes']['join']('\x20'),'inline':!![]},{'name':_0xe58339('0x24'),'value':this[_0xe58339('0x2d')][_0xe58339('0x11')][_0xe58339('0x2e')][_0xe58339('0x52')](),'inline':!![]}],_0x311cd9=[{'name':_0xe58339('0x4c'),'value':_0x10bdf2+_0xe58339('0x9')+_0x29132e+'\x20Users','inline':!![]},{'name':_0xe58339('0x2c'),'value':duration[_0xe58339('0x40')](duration[_0xe58339('0x49')](Date['now'](),Number[_0xe58339('0x19')](process['env'][_0xe58339('0x42')]))),'inline':!![]},{'name':_0xe58339('0x36'),'value':(_0x3dc35d/0x400/0x400)[_0xe58339('0x29')](0x2)+'MB','inline':!![]},{'name':_0xe58339('0x51'),'value':'Node\x20'+process[_0xe58339('0x35')]+'\x20on\x20'+process['platform']+'\x20'+process[_0xe58339('0x12')]+'.\x20'+(constants['isPublicBastion'](this[_0xe58339('0x2d')][_0xe58339('0x5d')])?_0xe58339('0x4e'):''),'inline':!![]}];return await _0x96630[_0xe58339('0x21')][_0xe58339('0x2f')]({'embed':{'color':_0x8fe32b?_0x8fe32b[_0xe58339('0xc')]:tesseract_1[_0xe58339('0x5e')]['COLORS'][_0xe58339('0xf')],'author':{'name':_0xe58339('0x60')+package_json_1[_0xe58339('0x35')],'url':this['client'][_0xe58339('0x45')][_0xe58339('0x5c')]('bastion.website')},'title':(_0x526c80[_0xe58339('0x11')]?_0xe58339('0x2a')+this[_0xe58339('0x2d')][_0xe58339('0x11')][_0xe58339('0x28')][_0xe58339('0x4')](_0xe58339('0x4b')):'')+_0xe58339('0x39'),'description':_0x8fe32b?_0x8fe32b[_0xe58339('0x8')]+'\x20'+_0x8fe32b[_0xe58339('0x5')]:_0xe58339('0xd')+this['client']['locale'][_0xe58339('0x5c')](_0xe58339('0x0'))+_0xe58339('0xa'),'url':this['client'][_0xe58339('0x45')][_0xe58339('0x5c')](_0xe58339('0x0'))+_0xe58339('0x32'),'thumbnail':{'url':this['client'][_0xe58339('0x5d')][_0xe58339('0x26')]({'dynamic':!![],'size':0x200})},'fields':_0x526c80[_0xe58339('0x11')]?_0x311cd9:_0x438b45[_0xe58339('0x58')](_0x311cd9),'footer':{'text':(_0x526c80['shard']?'':'Shard\x20'+this[_0xe58339('0x2d')][_0xe58339('0x11')][_0xe58339('0x28')][_0xe58339('0x4')](_0xe58339('0x4b'))+_0xe58339('0x2b'))+this[_0xe58339('0x2d')]['ws'][_0xe58339('0x6')]+'ms'},'timestamp':new Date()}});};}};