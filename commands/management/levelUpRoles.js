const a69_0x4e8f=['info','membershipLimitLevelRoles','GOLD','resolver','createDocument','locale','../../utils/errors','../../utils/gamification','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','ROLE_LEVELS','map','BASTION_ERROR_TYPE','../../utils/omnic','levelUpRoles','constructor','Level\x20','PremiumTier','membershipLimitRoleLevels','Command','name','tag','NO_ROLES_FOR_LEVEL','remove','role','join','cache','push','levelUpRoles\x20--level\x20NUMBER','keys','LIMITED_PREMIUM_MEMBERSHIP','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','IRIS','PLATINUM','MANAGE_ROLES','guild','COLORS','exec','LIMITS','DiscordError','test','catch','length','../../utils/numbers','getString','channel','level','author','roleLevelAdd','levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE','language','resolveRole','send','roles','find','Constants','user','premiumLevelRoles','NO_LEVEL_UP_ROLES','errors','Roles','exports','document','default','_id','levelUpRoles\x20--level\x20NUMBER\x20--remove','fetchDocument','../../utils/constants','roleNotFound','PREMIUM_MEMBERSHIP_REQUIRED','ROLE_NOT_FOUND','client','RED','updateMany','isPublicBastion','error','GREEN','ROLES_PER_LEVEL'];(function(_0x39ea35,_0x4e8f11){const _0x319faf=function(_0x2fff44){while(--_0x2fff44){_0x39ea35['push'](_0x39ea35['shift']());}},_0x10b86c=function(){const _0x3c4d8c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3279b8,_0x415a4a,_0x1594c3,_0x4514d8){_0x4514d8=_0x4514d8||{};let _0x3228e0=_0x415a4a+'='+_0x1594c3,_0x47f077=0x0;for(let _0x7c6ba0=0x0,_0x16b5b0=_0x3279b8['length'];_0x7c6ba0<_0x16b5b0;_0x7c6ba0++){const _0x2e4090=_0x3279b8[_0x7c6ba0];_0x3228e0+=';\x20'+_0x2e4090;const _0x2acd94=_0x3279b8[_0x2e4090];_0x3279b8['push'](_0x2acd94),_0x16b5b0=_0x3279b8['length'],_0x2acd94!==!![]&&(_0x3228e0+='='+_0x2acd94);}_0x4514d8['cookie']=_0x3228e0;},'removeCookie':function(){return'dev';},'getCookie':function(_0xe68c07,_0x296883){_0xe68c07=_0xe68c07||function(_0x34fdba){return _0x34fdba;};const _0x2ce650=_0xe68c07(new RegExp('(?:^|;\x20)'+_0x296883['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x48c6ec=function(_0x5e2505,_0x2d3509){_0x5e2505(++_0x2d3509);};return _0x48c6ec(_0x319faf,_0x4e8f11),_0x2ce650?decodeURIComponent(_0x2ce650[0x1]):undefined;}},_0x3dcffb=function(){const _0x581ef1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x581ef1['test'](_0x3c4d8c['removeCookie']['toString']());};_0x3c4d8c['updateCookie']=_0x3dcffb;let _0x477e13='';const _0x23847b=_0x3c4d8c['updateCookie']();if(!_0x23847b)_0x3c4d8c['setCookie'](['*'],'counter',0x1);else _0x23847b?_0x477e13=_0x3c4d8c['getCookie'](null,'counter'):_0x3c4d8c['removeCookie']();};_0x10b86c();}(a69_0x4e8f,0x157));const a69_0x319f=function(_0x39ea35,_0x4e8f11){_0x39ea35=_0x39ea35-0x0;let _0x319faf=a69_0x4e8f[_0x39ea35];return _0x319faf;};const a69_0x3c4d8c=function(){let _0x477e13=!![];return function(_0x23847b,_0x3279b8){const _0x415a4a=_0x477e13?function(){if(_0x3279b8){const _0x1594c3=_0x3279b8[a69_0x319f('0x4')](_0x23847b,arguments);return _0x3279b8=null,_0x1594c3;}}:function(){};return _0x477e13=![],_0x415a4a;};}(),a69_0x2fff44=a69_0x3c4d8c(this,function(){const _0x4514d8=function(){const _0x3228e0=_0x4514d8[a69_0x319f('0x43')](a69_0x319f('0x5'))()[a69_0x319f('0x43')](a69_0x319f('0x3c'));return!_0x3228e0[a69_0x319f('0xe')](a69_0x2fff44);};return _0x4514d8();});a69_0x2fff44();'use strict';const tesseract_1=require('@bastion/tesseract'),Role_1=require('../../models/Role'),constants=require(a69_0x319f('0x29')),errors=require(a69_0x319f('0x3a')),gamification=require(a69_0x319f('0x3b')),numbers=require(a69_0x319f('0x11')),omnic=require(a69_0x319f('0x41'));module[a69_0x319f('0x23')]=class LevelUpRolesCommand extends tesseract_1[a69_0x319f('0x47')]{constructor(){super(a69_0x319f('0x42'),{'description':a69_0x319f('0x3d'),'triggers':[],'arguments':{'array':[a69_0x319f('0x4c')],'boolean':[a69_0x319f('0x4b')],'string':[a69_0x319f('0x4c')],'number':[a69_0x319f('0x14')],'coerce':{'level':_0x47f077=>numbers['clamp'](_0x47f077,0x1,gamification['MAX_LEVEL'])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a69_0x319f('0x8')],'userPermissions':[a69_0x319f('0x8')],'syntax':[a69_0x319f('0x42'),a69_0x319f('0x1'),a69_0x319f('0x17'),a69_0x319f('0x27')]}),this[a69_0x319f('0xb')]=async(_0x7c6ba0,_0x16b5b0)=>{if(_0x16b5b0[a69_0x319f('0x14')]){if(_0x16b5b0[a69_0x319f('0x4c')]){if(constants[a69_0x319f('0x30')](this['client'][a69_0x319f('0x1e')])){const _0x34fdba=await omnic['fetchPremiumTier'](_0x7c6ba0[a69_0x319f('0x9')])[a69_0x319f('0xf')](()=>{}),_0x5e2505=await Role_1[a69_0x319f('0x25')]['distinct'](a69_0x319f('0x14'),{'guild':_0x7c6ba0[a69_0x319f('0x9')]['id'],'level':{'$exists':!![],'$ne':null}});if(_0x34fdba){if(_0x34fdba===omnic[a69_0x319f('0x45')]['GOLD']&&_0x5e2505[a69_0x319f('0x10')]>=constants['LIMITS']['GOLD']['ROLE_LEVELS'])throw new errors['DiscordError'](errors[a69_0x319f('0x40')][a69_0x319f('0x3')],this['client'][a69_0x319f('0x39')][a69_0x319f('0x12')](_0x7c6ba0[a69_0x319f('0x9')]['document'][a69_0x319f('0x18')],a69_0x319f('0x21'),a69_0x319f('0x46'),constants[a69_0x319f('0xc')][a69_0x319f('0x36')][a69_0x319f('0x3e')]));else{if(_0x34fdba===omnic[a69_0x319f('0x45')][a69_0x319f('0x7')]&&_0x5e2505[a69_0x319f('0x10')]>=constants[a69_0x319f('0xc')][a69_0x319f('0x7')][a69_0x319f('0x3e')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a69_0x319f('0x3')],this[a69_0x319f('0x2d')][a69_0x319f('0x39')]['getString'](_0x7c6ba0['guild'][a69_0x319f('0x24')][a69_0x319f('0x18')],'errors',a69_0x319f('0x46'),constants[a69_0x319f('0xc')][a69_0x319f('0x7')][a69_0x319f('0x3e')]));}}else{if(_0x5e2505[a69_0x319f('0x10')]>=constants[a69_0x319f('0xc')][a69_0x319f('0x3e')])throw new errors[(a69_0x319f('0xd'))](errors[a69_0x319f('0x40')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a69_0x319f('0x2d')][a69_0x319f('0x39')][a69_0x319f('0x12')](_0x7c6ba0['guild'][a69_0x319f('0x24')]['language'],a69_0x319f('0x21'),'premiumRoleLevels',constants[a69_0x319f('0xc')][a69_0x319f('0x3e')]));}const _0x2d3509=await Role_1[a69_0x319f('0x25')]['countDocuments']({'guild':_0x7c6ba0['guild']['id'],'level':_0x16b5b0[a69_0x319f('0x14')]});if(_0x34fdba){if(_0x34fdba===omnic[a69_0x319f('0x45')][a69_0x319f('0x36')]&&_0x2d3509>=constants[a69_0x319f('0xc')][a69_0x319f('0x36')][a69_0x319f('0x33')])throw new errors['DiscordError'](errors[a69_0x319f('0x40')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a69_0x319f('0x39')]['getString'](_0x7c6ba0[a69_0x319f('0x9')][a69_0x319f('0x24')][a69_0x319f('0x18')],'errors',a69_0x319f('0x35'),constants[a69_0x319f('0xc')]['GOLD'][a69_0x319f('0x33')]));else{if(_0x34fdba===omnic['PremiumTier'][a69_0x319f('0x7')]&&_0x2d3509>=constants[a69_0x319f('0xc')][a69_0x319f('0x7')][a69_0x319f('0x33')])throw new errors[(a69_0x319f('0xd'))](errors['BASTION_ERROR_TYPE'][a69_0x319f('0x3')],this['client'][a69_0x319f('0x39')][a69_0x319f('0x12')](_0x7c6ba0[a69_0x319f('0x9')]['document']['language'],a69_0x319f('0x21'),'membershipLimitLevelRoles',constants['LIMITS'][a69_0x319f('0x7')][a69_0x319f('0x33')]));}}else{if(_0x2d3509>=constants[a69_0x319f('0xc')][a69_0x319f('0x33')])throw new errors[(a69_0x319f('0xd'))](errors[a69_0x319f('0x40')][a69_0x319f('0x2b')],this[a69_0x319f('0x2d')][a69_0x319f('0x39')]['getString'](_0x7c6ba0[a69_0x319f('0x9')][a69_0x319f('0x24')][a69_0x319f('0x18')],'errors',a69_0x319f('0x1f'),constants['LIMITS'][a69_0x319f('0x33')]));}}const _0x2ce650=this[a69_0x319f('0x2d')][a69_0x319f('0x37')][a69_0x319f('0x19')](_0x7c6ba0['guild'],_0x16b5b0[a69_0x319f('0x4c')][a69_0x319f('0x4d')]('\x20'));if(!_0x2ce650)throw new errors[(a69_0x319f('0xd'))](errors[a69_0x319f('0x40')][a69_0x319f('0x2c')],this['client'][a69_0x319f('0x39')][a69_0x319f('0x12')](_0x7c6ba0[a69_0x319f('0x9')][a69_0x319f('0x24')]['language'],a69_0x319f('0x31'),a69_0x319f('0x2a')));let _0x48c6ec=await _0x2ce650[a69_0x319f('0x28')]();return!_0x48c6ec&&(_0x48c6ec=await _0x2ce650[a69_0x319f('0x38')]()),_0x48c6ec[a69_0x319f('0x14')]=_0x16b5b0[a69_0x319f('0x14')],await _0x48c6ec['save'](),await _0x7c6ba0[a69_0x319f('0x13')]['send']({'embed':{'color':tesseract_1[a69_0x319f('0x1d')][a69_0x319f('0xa')][a69_0x319f('0x32')],'description':this[a69_0x319f('0x2d')][a69_0x319f('0x39')][a69_0x319f('0x12')](_0x7c6ba0[a69_0x319f('0x9')][a69_0x319f('0x24')]['language'],'info',a69_0x319f('0x16'),_0x7c6ba0[a69_0x319f('0x15')][a69_0x319f('0x49')],_0x2ce650[a69_0x319f('0x48')],_0x16b5b0[a69_0x319f('0x14')])}})['catch'](()=>{});}if(_0x16b5b0['remove'])return await Role_1[a69_0x319f('0x25')][a69_0x319f('0x2f')]({'guild':_0x7c6ba0[a69_0x319f('0x9')]['id'],'level':_0x16b5b0[a69_0x319f('0x14')]},{'$unset':{'level':0x1}}),await _0x7c6ba0[a69_0x319f('0x13')][a69_0x319f('0x1a')]({'embed':{'color':tesseract_1[a69_0x319f('0x1d')][a69_0x319f('0xa')][a69_0x319f('0x2e')],'description':this[a69_0x319f('0x2d')][a69_0x319f('0x39')][a69_0x319f('0x12')](_0x7c6ba0[a69_0x319f('0x9')]['document'][a69_0x319f('0x18')],a69_0x319f('0x34'),'roleLevelClear',_0x7c6ba0[a69_0x319f('0x15')][a69_0x319f('0x49')],_0x16b5b0[a69_0x319f('0x14')])}})['catch'](()=>{});const _0xe68c07=await Role_1[a69_0x319f('0x25')][a69_0x319f('0x1c')]({'guild':_0x7c6ba0['guild']['id'],'level':_0x16b5b0['level']});if(!_0xe68c07[a69_0x319f('0x10')])throw new Error(a69_0x319f('0x4a'));const _0x296883=this['client'][a69_0x319f('0x37')]['resolveRoles'](_0x7c6ba0['guild'],_0xe68c07[a69_0x319f('0x3f')](_0x581ef1=>_0x581ef1[a69_0x319f('0x26')]));return await _0x7c6ba0[a69_0x319f('0x13')][a69_0x319f('0x1a')]({'embed':{'color':tesseract_1[a69_0x319f('0x1d')][a69_0x319f('0xa')]['IRIS'],'title':'Level\x20'+_0x16b5b0[a69_0x319f('0x14')],'fields':[{'name':a69_0x319f('0x22'),'value':_0x296883[a69_0x319f('0x3f')](_0x5ea57b=>_0x5ea57b[a69_0x319f('0x48')])[a69_0x319f('0x4d')]('\x0a')}]}})[a69_0x319f('0xf')](()=>{});}const _0x2e4090=await Role_1[a69_0x319f('0x25')]['find']({'guild':_0x7c6ba0['guild']['id'],'level':{'$exists':!![],'$ne':null}});if(!_0x2e4090[a69_0x319f('0x10')])throw new Error(a69_0x319f('0x20'));const _0x2acd94={};for(const _0x244814 of _0x2e4090){_0x244814[a69_0x319f('0x14')]in _0x2acd94?_0x2acd94[_0x244814[a69_0x319f('0x14')]][a69_0x319f('0x0')](_0x244814['_id']):_0x2acd94[_0x244814[a69_0x319f('0x14')]]=[_0x244814['_id']];}return await _0x7c6ba0[a69_0x319f('0x13')]['send']({'embed':{'color':tesseract_1[a69_0x319f('0x1d')][a69_0x319f('0xa')][a69_0x319f('0x6')],'title':'Level-Up\x20Roles','fields':Object[a69_0x319f('0x2')](_0x2acd94)[a69_0x319f('0x3f')](_0x45bf8a=>({'name':a69_0x319f('0x44')+_0x45bf8a,'value':_0x2acd94[_0x45bf8a]['map'](_0xc57afc=>_0x7c6ba0[a69_0x319f('0x9')][a69_0x319f('0x1b')][a69_0x319f('0x4e')]['has'](_0xc57afc)?_0x7c6ba0[a69_0x319f('0x9')][a69_0x319f('0x1b')][a69_0x319f('0x4e')]['get'](_0xc57afc)[a69_0x319f('0x48')]:_0xc57afc)['join'](',\x20')}))}})[a69_0x319f('0xf')](()=>{});};}};