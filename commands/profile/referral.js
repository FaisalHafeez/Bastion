const a116_0x4a1a=['Referral\x20invite\x20generated\x20for\x20','exports','findOne','../../models/Role','constructor','referral','referralsChannel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','get','../../models/Member','exec','code','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','Code','BASTION_ERROR_TYPE','Command','channel','member','errors','COLORS','noReferralsChannel','../../utils/errors','uses','map','info','DiscordError','locale','noReferralRewards','getString','author','tag','ERROR','Referral\x20Reward\x20Claimed','apply','referral\x20--claim','guild','document','Constants','claim','url','default','toLocaleString','length','language','client','fetchInvites','IRIS','channels','find'];(function(_0x4feb21,_0x4a1abc){const _0x2224d4=function(_0x547603){while(--_0x547603){_0x4feb21['push'](_0x4feb21['shift']());}},_0x18e01e=function(){const _0x25eb5f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5d5606,_0x39b774,_0x29c4d1,_0x220c48){_0x220c48=_0x220c48||{};let _0x391020=_0x39b774+'='+_0x29c4d1,_0x477792=0x0;for(let _0x43fec7=0x0,_0x3ef70b=_0x5d5606['length'];_0x43fec7<_0x3ef70b;_0x43fec7++){const _0x3c4b34=_0x5d5606[_0x43fec7];_0x391020+=';\x20'+_0x3c4b34;const _0x565e07=_0x5d5606[_0x3c4b34];_0x5d5606['push'](_0x565e07),_0x3ef70b=_0x5d5606['length'],_0x565e07!==!![]&&(_0x391020+='='+_0x565e07);}_0x220c48['cookie']=_0x391020;},'removeCookie':function(){return'dev';},'getCookie':function(_0x58926b,_0x2400f6){_0x58926b=_0x58926b||function(_0x2e3faa){return _0x2e3faa;};const _0x247506=_0x58926b(new RegExp('(?:^|;\x20)'+_0x2400f6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3b0f63=function(_0x3bc7f4,_0x3bb7aa){_0x3bc7f4(++_0x3bb7aa);};return _0x3b0f63(_0x2224d4,_0x4a1abc),_0x247506?decodeURIComponent(_0x247506[0x1]):undefined;}},_0x25cdea=function(){const _0x4a38b9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4a38b9['test'](_0x25eb5f['removeCookie']['toString']());};_0x25eb5f['updateCookie']=_0x25cdea;let _0x27abea='';const _0x4215a0=_0x25eb5f['updateCookie']();if(!_0x4215a0)_0x25eb5f['setCookie'](['*'],'counter',0x1);else _0x4215a0?_0x27abea=_0x25eb5f['getCookie'](null,'counter'):_0x25eb5f['removeCookie']();};_0x18e01e();}(a116_0x4a1a,0x1b4));const a116_0x2224=function(_0x4feb21,_0x4a1abc){_0x4feb21=_0x4feb21-0x0;let _0x2224d4=a116_0x4a1a[_0x4feb21];return _0x2224d4;};const a116_0x29c4d1=function(){let _0x24d0a3=!![];return function(_0x43a041,_0x20237f){const _0x2c22c5=_0x24d0a3?function(){if(_0x20237f){const _0x48ad2e=_0x20237f[a116_0x2224('0x30')](_0x43a041,arguments);return _0x20237f=null,_0x48ad2e;}}:function(){};return _0x24d0a3=![],_0x2c22c5;};}(),a116_0x39b774=a116_0x29c4d1(this,function(){const _0x10f00f=function(){const _0x61dfdb=_0x10f00f[a116_0x2224('0x12')](a116_0x2224('0x1a'))()[a116_0x2224('0x12')](a116_0x2224('0x15'));return!_0x61dfdb['test'](a116_0x39b774);};return _0x10f00f();});a116_0x39b774();'use strict';const tesseract_1=require('@bastion/tesseract'),Member_1=require(a116_0x2224('0x17')),Role_1=require(a116_0x2224('0x11')),errors=require(a116_0x2224('0x24'));module[a116_0x2224('0xf')]=class ReferralCommand extends tesseract_1[a116_0x2224('0x1e')]{constructor(){super(a116_0x2224('0x13'),{'description':'It\x20allows\x20you\x20to\x20see\x20your\x20referral\x20invite\x20that\x20you\x20can\x20use\x20to\x20invite\x20people\x20to\x20the\x20server\x20and\x20increase\x20your\x20referral\x20points.\x20It\x20can\x20also\x20be\x20used\x20to\x20claim\x20your\x20referral\x20rewards\x20set\x20by\x20the\x20server\x20managers.','triggers':[],'arguments':{'boolean':[a116_0x2224('0x3')]},'scope':a116_0x2224('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a116_0x2224('0x13'),a116_0x2224('0x31')]}),this[a116_0x2224('0x18')]=async(_0x2a475d,_0x3ec2fa)=>{const _0x5fda74=await Member_1[a116_0x2224('0x5')][a116_0x2224('0x10')]({'user':_0x2a475d[a116_0x2224('0x2c')]['id'],'guild':_0x2a475d[a116_0x2224('0x0')]['id']});let _0x3cf234;if(_0x5fda74[a116_0x2224('0x13')]){const _0x22ae3d=await _0x2a475d[a116_0x2224('0x0')][a116_0x2224('0xa')]();_0x3cf234=_0x22ae3d['get'](_0x5fda74['referral']);}if(!_0x3cf234){const _0x11a37c=_0x2a475d[a116_0x2224('0x0')][a116_0x2224('0xc')]['cache'][a116_0x2224('0x16')](_0x2a475d[a116_0x2224('0x0')][a116_0x2224('0x1')][a116_0x2224('0x14')]);if(!_0x11a37c)throw new errors[(a116_0x2224('0x28'))](errors[a116_0x2224('0x1d')][a116_0x2224('0x2e')],this[a116_0x2224('0x9')][a116_0x2224('0x29')][a116_0x2224('0x2b')](_0x2a475d[a116_0x2224('0x0')]['document'][a116_0x2224('0x8')],'errors',a116_0x2224('0x23')));_0x3cf234=await _0x11a37c['createInvite']({'reason':a116_0x2224('0xe')+_0x2a475d['author'][a116_0x2224('0x2d')],'temporary':![],'maxAge':0x0,'maxUses':0x0,'unique':!![]}),_0x5fda74['referral']=_0x3cf234[a116_0x2224('0x19')],await _0x5fda74['save']();}if(_0x3ec2fa['claim']){const _0x495871=await Role_1[a116_0x2224('0x5')][a116_0x2224('0xd')]({'guild':_0x2a475d['guild']['id'],'referrals':{'$lte':_0x3cf234[a116_0x2224('0x25')]}});if(!_0x495871[a116_0x2224('0x7')])throw new errors[(a116_0x2224('0x28'))](errors[a116_0x2224('0x1d')][a116_0x2224('0x2e')],this['client'][a116_0x2224('0x29')][a116_0x2224('0x2b')](_0x2a475d[a116_0x2224('0x0')][a116_0x2224('0x1')][a116_0x2224('0x8')],a116_0x2224('0x21'),a116_0x2224('0x2a'),_0x3cf234[a116_0x2224('0x25')]));await _0x2a475d[a116_0x2224('0x20')]['roles']['add'](_0x495871[a116_0x2224('0x26')](_0x56bc6c=>_0x56bc6c['id'])),await _0x2a475d[a116_0x2224('0x1f')][a116_0x2224('0x1b')]({'embed':{'color':tesseract_1[a116_0x2224('0x2')][a116_0x2224('0x22')][a116_0x2224('0xb')],'title':a116_0x2224('0x2f'),'description':this[a116_0x2224('0x9')][a116_0x2224('0x29')][a116_0x2224('0x2b')](_0x2a475d[a116_0x2224('0x0')][a116_0x2224('0x1')][a116_0x2224('0x8')],a116_0x2224('0x27'),'referralRewardsClaim',_0x2a475d[a116_0x2224('0x2c')]['tag'],_0x3cf234[a116_0x2224('0x25')])}});}else await _0x2a475d[a116_0x2224('0x1f')][a116_0x2224('0x1b')]({'embed':{'color':tesseract_1[a116_0x2224('0x2')][a116_0x2224('0x22')][a116_0x2224('0xb')],'title':'Referral\x20Invite','description':_0x3cf234[a116_0x2224('0x4')],'fields':[{'name':a116_0x2224('0x1c'),'value':_0x3cf234[a116_0x2224('0x19')],'inline':!![]},{'name':'Uses','value':(_0x3cf234[a116_0x2224('0x25')]||0x0)[a116_0x2224('0x6')](),'inline':!![]}]}});};}};