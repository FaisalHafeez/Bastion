const a86_0x5356ee=a86_0x152b;function a86_0x152b(_0x1d53e6,_0x545966){const _0x343524=a86_0x326e();return a86_0x152b=function(_0x3850f0,_0x4a731c){_0x3850f0=_0x3850f0-0x85;let _0x326ebe=_0x343524[_0x3850f0];return _0x326ebe;},a86_0x152b(_0x1d53e6,_0x545966);}(function(_0x74c612,_0x3b82b7){const _0x4ae732=a86_0x152b,_0x2a7656=_0x74c612();while(!![]){try{const _0x45eee3=parseInt(_0x4ae732(0xa0))/0x1+-parseInt(_0x4ae732(0x90))/0x2+-parseInt(_0x4ae732(0x98))/0x3*(-parseInt(_0x4ae732(0xa9))/0x4)+parseInt(_0x4ae732(0xb7))/0x5*(parseInt(_0x4ae732(0x8f))/0x6)+-parseInt(_0x4ae732(0xae))/0x7*(-parseInt(_0x4ae732(0xc1))/0x8)+parseInt(_0x4ae732(0xbc))/0x9+-parseInt(_0x4ae732(0x9b))/0xa*(parseInt(_0x4ae732(0xb1))/0xb);if(_0x45eee3===_0x3b82b7)break;else _0x2a7656['push'](_0x2a7656['shift']());}catch(_0x334d58){_0x2a7656['push'](_0x2a7656['shift']());}}}(a86_0x326e,0x72db5));const a86_0x4a731c=(function(){let _0xec7aa1=!![];return function(_0x70cc14,_0x4440b5){const _0x257578=_0xec7aa1?function(){const _0xa93b4e=a86_0x152b;if(_0x4440b5){const _0x315fc4=_0x4440b5[_0xa93b4e(0x87)](_0x70cc14,arguments);return _0x4440b5=null,_0x315fc4;}}:function(){};return _0xec7aa1=![],_0x257578;};}()),a86_0x3850f0=a86_0x4a731c(this,function(){const _0x2f8216=a86_0x152b;return a86_0x3850f0[_0x2f8216(0xba)]()[_0x2f8216(0x8e)]('(((.+)+)+)+$')[_0x2f8216(0xba)]()[_0x2f8216(0xa8)](a86_0x3850f0)[_0x2f8216(0x8e)]('(((.+)+)+)+$');});a86_0x3850f0();function a86_0x326e(){const _0x247055=['../../utils/errors','20jQjhxG','MANAGE_GUILD','cache','roleNotFound','role','301071Phicos','Invite\x20Roles','channel','inviteRoles','exports','BASTION_ERROR_TYPE','roleInviteRemove','name','constructor','40136asqPCN','invite','language','inviteRoles\x20--role\x20ROLE\x20--delete','map','7GIxQls','Command','resolver','8973899AyQeiZ','ROLE_NOT_FOUND','DiscordError','It\x20allows\x20you\x20to\x20associate\x20server\x20invites\x20with\x20roles.\x20Anyone\x20who\x20joins\x20the\x20server\x20with\x20an\x20invite\x20associated\x20with\x20a\x20role\x20will\x20be\x20assigned\x20the\x20specified\x20role\x20automatically.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20list\x20of\x20roles\x20associated\x20with\x20an\x20invite.','pop','send','74535lcZHtP','COLORS','split','toString','\x20/\x20','4782186ADpuPn','Constants','roleInviteSet','document','findByIdAndUpdate','1506256cWRIdU','delete','getString','info','has','_id','@bastion/tesseract','apply','tag','Invite\x20Code\x20-\x20','RED','default','exec','locale','search','354CATQjJ','519426alQEtX','[DELETED]','IRIS','client','guild','GREEN','roles','author','138iTSIKz','errors'];a86_0x326e=function(){return _0x247055;};return a86_0x326e();}'use strict';const tesseract_1=require(a86_0x5356ee(0x86)),Role_1=require('../../models/Role'),errors=require(a86_0x5356ee(0x9a));module[a86_0x5356ee(0xa4)]=class InviteRolesCommand extends tesseract_1[a86_0x5356ee(0xaf)]{constructor(){const _0x56a8a4=a86_0x5356ee;super(_0x56a8a4(0xa3),{'description':_0x56a8a4(0xb4),'triggers':[],'arguments':{'boolean':[_0x56a8a4(0xc2)],'string':[_0x56a8a4(0xaa),'role']},'scope':_0x56a8a4(0x94),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[_0x56a8a4(0x9c)],'syntax':[_0x56a8a4(0xa3),'inviteRoles\x20--role\x20ROLE\x20--invite\x20CODE',_0x56a8a4(0xac)]});}[a86_0x5356ee(0x8c)]=async(_0x1c33fa,_0xc19545)=>{const _0x5bdb14=a86_0x5356ee;if(_0xc19545[_0x5bdb14(0x9f)]){const _0x2a909b=this['client'][_0x5bdb14(0xb0)]['resolveRole'](_0x1c33fa['guild'],_0xc19545[_0x5bdb14(0x9f)]);if(!_0x2a909b)throw new errors[(_0x5bdb14(0xb3))](errors[_0x5bdb14(0xa5)][_0x5bdb14(0xb2)],this[_0x5bdb14(0x93)][_0x5bdb14(0x8d)][_0x5bdb14(0xc3)](_0x1c33fa[_0x5bdb14(0x94)][_0x5bdb14(0xbf)][_0x5bdb14(0xab)],_0x5bdb14(0x99),_0x5bdb14(0x9e)));if(_0xc19545[_0x5bdb14(0xaa)])return await Role_1[_0x5bdb14(0x8b)][_0x5bdb14(0xc0)](_0x2a909b['id'],{'invite':_0xc19545[_0x5bdb14(0xaa)][_0x5bdb14(0xb9)]('/')['filter'](_0x24c16f=>_0x24c16f)[_0x5bdb14(0xb5)]()}),await _0x1c33fa[_0x5bdb14(0xa2)][_0x5bdb14(0xb6)]({'embed':{'color':tesseract_1[_0x5bdb14(0xbd)][_0x5bdb14(0xb8)][_0x5bdb14(0x95)],'description':this[_0x5bdb14(0x93)][_0x5bdb14(0x8d)][_0x5bdb14(0xc3)](_0x1c33fa[_0x5bdb14(0x94)][_0x5bdb14(0xbf)][_0x5bdb14(0xab)],_0x5bdb14(0xc4),_0x5bdb14(0xbe),_0x1c33fa[_0x5bdb14(0x97)][_0x5bdb14(0x88)],_0x2a909b[_0x5bdb14(0xa7)],_0xc19545[_0x5bdb14(0xaa)])}});if(_0xc19545['delete'])return await Role_1['default']['findByIdAndUpdate'](_0x2a909b['id'],{'$unset':{'invite':0x1}}),await _0x1c33fa[_0x5bdb14(0xa2)][_0x5bdb14(0xb6)]({'embed':{'color':tesseract_1[_0x5bdb14(0xbd)][_0x5bdb14(0xb8)][_0x5bdb14(0x8a)],'description':this[_0x5bdb14(0x93)][_0x5bdb14(0x8d)]['getString'](_0x1c33fa['guild'][_0x5bdb14(0xbf)]['language'],_0x5bdb14(0xc4),_0x5bdb14(0xa6),_0x1c33fa[_0x5bdb14(0x97)][_0x5bdb14(0x88)],_0x2a909b[_0x5bdb14(0xa7)])}});}const _0x3dbfc0=await Role_1['default']['find']({'guild':_0x1c33fa[_0x5bdb14(0x94)]['id'],'invite':{'$exists':!![],'$ne':null}});if(!_0x3dbfc0)throw new Error('NO_INVITE_ROLES');await _0x1c33fa['channel'][_0x5bdb14(0xb6)]({'embed':{'color':tesseract_1[_0x5bdb14(0xbd)][_0x5bdb14(0xb8)][_0x5bdb14(0x92)],'title':_0x5bdb14(0xa1),'fields':_0x3dbfc0[_0x5bdb14(0xad)](_0xb2133c=>({'name':(_0x1c33fa['guild'][_0x5bdb14(0x96)]['cache'][_0x5bdb14(0xc5)](_0xb2133c[_0x5bdb14(0x85)])?_0x1c33fa[_0x5bdb14(0x94)]['roles'][_0x5bdb14(0x9d)]['get'](_0xb2133c[_0x5bdb14(0x85)])[_0x5bdb14(0xa7)]:_0x5bdb14(0x91))+_0x5bdb14(0xbb)+_0xb2133c[_0x5bdb14(0x85)],'value':_0x5bdb14(0x89)+_0xb2133c[_0x5bdb14(0xaa)]}))}});};};