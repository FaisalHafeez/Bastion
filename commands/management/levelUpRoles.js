const a68_0xc1a9=['constructor','premiumRoleLevels','LIMITS','MAX_LEVEL','createDocument','BASTION_ERROR_TYPE','DiscordError','getString','author','client','Level\x20','tag','has','clamp','updateMany','errors','Command','level','PREMIUM_MEMBERSHIP_REQUIRED','../../utils/numbers','../../utils/omnic','fetchDocument','find','document','ROLES_PER_LEVEL','roleLevelClear','IRIS','guild','apply','roleNotFound','../../utils/errors','send','default','resolveRole','name','levelUpRoles\x20--level\x20NUMBER\x20--remove','roles','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','RED','remove','ROLE_NOT_FOUND','levelUpRoles','NO_LEVEL_UP_ROLES','GOLD','It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','Roles','PremiumTier','membershipLimitRoleLevels','_id','language','distinct','NO_ROLES_FOR_LEVEL','get','Constants','premiumLevelRoles','length','catch','join','info','push','Level-Up\x20Roles','levelUpRoles\x20--level\x20NUMBER','resolver','isPublicBastion','resolveRoles','return\x20/\x22\x20+\x20this\x20+\x20\x22/','channel','ROLE_LEVELS','countDocuments','exec','COLORS','locale','test','role','../../models/Role','map','membershipLimitLevelRoles','PLATINUM'];(function(_0x1e45d6,_0xc1a980){const _0xe6e8f3=function(_0x56dd44){while(--_0x56dd44){_0x1e45d6['push'](_0x1e45d6['shift']());}},_0x33c394=function(){const _0x30278e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x306334,_0x1083e1,_0x25b35c,_0x1f5dd0){_0x1f5dd0=_0x1f5dd0||{};let _0x20b385=_0x1083e1+'='+_0x25b35c,_0x2baab1=0x0;for(let _0x5ab102=0x0,_0x1b8fec=_0x306334['length'];_0x5ab102<_0x1b8fec;_0x5ab102++){const _0x330c00=_0x306334[_0x5ab102];_0x20b385+=';\x20'+_0x330c00;const _0x450ae8=_0x306334[_0x330c00];_0x306334['push'](_0x450ae8),_0x1b8fec=_0x306334['length'],_0x450ae8!==!![]&&(_0x20b385+='='+_0x450ae8);}_0x1f5dd0['cookie']=_0x20b385;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4f45bb,_0x538faa){_0x4f45bb=_0x4f45bb||function(_0x38f6b1){return _0x38f6b1;};const _0x257f27=_0x4f45bb(new RegExp('(?:^|;\x20)'+_0x538faa['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x55f257=function(_0x3cb416,_0xfccc0f){_0x3cb416(++_0xfccc0f);};return _0x55f257(_0xe6e8f3,_0xc1a980),_0x257f27?decodeURIComponent(_0x257f27[0x1]):undefined;}},_0x3b1fc2=function(){const _0x1152cd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1152cd['test'](_0x30278e['removeCookie']['toString']());};_0x30278e['updateCookie']=_0x3b1fc2;let _0x26fc0f='';const _0x5a0bc1=_0x30278e['updateCookie']();if(!_0x5a0bc1)_0x30278e['setCookie'](['*'],'counter',0x1);else _0x5a0bc1?_0x26fc0f=_0x30278e['getCookie'](null,'counter'):_0x30278e['removeCookie']();};_0x33c394();}(a68_0xc1a9,0xe3));const a68_0xe6e8=function(_0x1e45d6,_0xc1a980){_0x1e45d6=_0x1e45d6-0x0;let _0xe6e8f3=a68_0xc1a9[_0x1e45d6];return _0xe6e8f3;};const a68_0x30278e=function(){let _0x26fc0f=!![];return function(_0x5a0bc1,_0x306334){const _0x1083e1=_0x26fc0f?function(){if(_0x306334){const _0x25b35c=_0x306334[a68_0xe6e8('0x23')](_0x5a0bc1,arguments);return _0x306334=null,_0x25b35c;}}:function(){};return _0x26fc0f=![],_0x1083e1;};}(),a68_0x56dd44=a68_0x30278e(this,function(){const _0x1f5dd0=function(){const _0x20b385=_0x1f5dd0[a68_0xe6e8('0x7')](a68_0xe6e8('0x48'))()['constructor'](a68_0xe6e8('0x2c'));return!_0x20b385[a68_0xe6e8('0x1')](a68_0x56dd44);};return _0x1f5dd0();});a68_0x56dd44();'use strict';const tesseract_1=require('@bastion/tesseract'),Role_1=require(a68_0xe6e8('0x3')),constants=require('../../utils/constants'),errors=require(a68_0xe6e8('0x25')),gamification=require('../../utils/gamification'),numbers=require(a68_0xe6e8('0x1a')),omnic=require(a68_0xe6e8('0x1b'));module['exports']=class LevelUpRolesCommand extends tesseract_1[a68_0xe6e8('0x17')]{constructor(){super(a68_0xe6e8('0x30'),{'description':a68_0xe6e8('0x33'),'triggers':[],'arguments':{'array':[a68_0xe6e8('0x2')],'boolean':[a68_0xe6e8('0x2e')],'string':[a68_0xe6e8('0x2')],'number':[a68_0xe6e8('0x18')],'coerce':{'level':_0x2baab1=>numbers[a68_0xe6e8('0x14')](_0x2baab1,0x1,gamification[a68_0xe6e8('0xa')])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':['MANAGE_ROLES'],'syntax':[a68_0xe6e8('0x30'),a68_0xe6e8('0x44'),'levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE',a68_0xe6e8('0x2a')]}),this[a68_0xe6e8('0x4c')]=async(_0x5ab102,_0x1b8fec)=>{if(_0x1b8fec[a68_0xe6e8('0x18')]){if(_0x1b8fec[a68_0xe6e8('0x2')]){if(constants[a68_0xe6e8('0x46')](this['client']['user'])){const _0x38f6b1=await omnic['fetchPremiumTier'](_0x5ab102[a68_0xe6e8('0x22')])[a68_0xe6e8('0x3f')](()=>{}),_0x3cb416=await Role_1[a68_0xe6e8('0x27')][a68_0xe6e8('0x39')](a68_0xe6e8('0x18'),{'guild':_0x5ab102[a68_0xe6e8('0x22')]['id'],'level':{'$exists':!![],'$ne':null}});if(_0x38f6b1){if(_0x38f6b1===omnic[a68_0xe6e8('0x35')]['GOLD']&&_0x3cb416['length']>=constants[a68_0xe6e8('0x9')]['GOLD']['ROLE_LEVELS'])throw new errors[(a68_0xe6e8('0xd'))](errors[a68_0xe6e8('0xc')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a68_0xe6e8('0x10')][a68_0xe6e8('0x0')][a68_0xe6e8('0xe')](_0x5ab102[a68_0xe6e8('0x22')][a68_0xe6e8('0x1e')][a68_0xe6e8('0x38')],'errors',a68_0xe6e8('0x36'),constants['LIMITS'][a68_0xe6e8('0x32')]['ROLE_LEVELS']));else{if(_0x38f6b1===omnic[a68_0xe6e8('0x35')]['PLATINUM']&&_0x3cb416[a68_0xe6e8('0x3e')]>=constants['LIMITS']['PLATINUM'][a68_0xe6e8('0x4a')])throw new errors['DiscordError'](errors[a68_0xe6e8('0xc')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a68_0xe6e8('0x10')][a68_0xe6e8('0x0')][a68_0xe6e8('0xe')](_0x5ab102['guild']['document'][a68_0xe6e8('0x38')],a68_0xe6e8('0x16'),a68_0xe6e8('0x36'),constants[a68_0xe6e8('0x9')][a68_0xe6e8('0x6')]['ROLE_LEVELS']));}}else{if(_0x3cb416['length']>=constants['LIMITS'][a68_0xe6e8('0x4a')])throw new errors[(a68_0xe6e8('0xd'))](errors[a68_0xe6e8('0xc')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a68_0xe6e8('0x10')][a68_0xe6e8('0x0')][a68_0xe6e8('0xe')](_0x5ab102[a68_0xe6e8('0x22')][a68_0xe6e8('0x1e')][a68_0xe6e8('0x38')],a68_0xe6e8('0x16'),a68_0xe6e8('0x8'),constants['LIMITS']['ROLE_LEVELS']));}const _0xfccc0f=await Role_1['default'][a68_0xe6e8('0x4b')]({'guild':_0x5ab102[a68_0xe6e8('0x22')]['id'],'level':_0x1b8fec[a68_0xe6e8('0x18')]});if(_0x38f6b1){if(_0x38f6b1===omnic[a68_0xe6e8('0x35')][a68_0xe6e8('0x32')]&&_0xfccc0f>=constants[a68_0xe6e8('0x9')][a68_0xe6e8('0x32')]['ROLES_PER_LEVEL'])throw new errors[(a68_0xe6e8('0xd'))](errors[a68_0xe6e8('0xc')]['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a68_0xe6e8('0x0')]['getString'](_0x5ab102[a68_0xe6e8('0x22')][a68_0xe6e8('0x1e')][a68_0xe6e8('0x38')],a68_0xe6e8('0x16'),a68_0xe6e8('0x5'),constants['LIMITS']['GOLD'][a68_0xe6e8('0x1f')]));else{if(_0x38f6b1===omnic[a68_0xe6e8('0x35')][a68_0xe6e8('0x6')]&&_0xfccc0f>=constants[a68_0xe6e8('0x9')][a68_0xe6e8('0x6')][a68_0xe6e8('0x1f')])throw new errors['DiscordError'](errors[a68_0xe6e8('0xc')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a68_0xe6e8('0x10')]['locale'][a68_0xe6e8('0xe')](_0x5ab102[a68_0xe6e8('0x22')]['document'][a68_0xe6e8('0x38')],a68_0xe6e8('0x16'),'membershipLimitLevelRoles',constants[a68_0xe6e8('0x9')][a68_0xe6e8('0x6')][a68_0xe6e8('0x1f')]));}}else{if(_0xfccc0f>=constants[a68_0xe6e8('0x9')][a68_0xe6e8('0x1f')])throw new errors[(a68_0xe6e8('0xd'))](errors[a68_0xe6e8('0xc')][a68_0xe6e8('0x19')],this[a68_0xe6e8('0x10')]['locale']['getString'](_0x5ab102[a68_0xe6e8('0x22')][a68_0xe6e8('0x1e')][a68_0xe6e8('0x38')],a68_0xe6e8('0x16'),a68_0xe6e8('0x3d'),constants[a68_0xe6e8('0x9')][a68_0xe6e8('0x1f')]));}}const _0x257f27=this[a68_0xe6e8('0x10')][a68_0xe6e8('0x45')][a68_0xe6e8('0x28')](_0x5ab102[a68_0xe6e8('0x22')],_0x1b8fec[a68_0xe6e8('0x2')]['join']('\x20'));if(!_0x257f27)throw new errors[(a68_0xe6e8('0xd'))](errors[a68_0xe6e8('0xc')][a68_0xe6e8('0x2f')],this[a68_0xe6e8('0x10')][a68_0xe6e8('0x0')]['getString'](_0x5ab102[a68_0xe6e8('0x22')][a68_0xe6e8('0x1e')]['language'],'error',a68_0xe6e8('0x24')));let _0x55f257=await _0x257f27[a68_0xe6e8('0x1c')]();return!_0x55f257&&(_0x55f257=await _0x257f27[a68_0xe6e8('0xb')]()),_0x55f257[a68_0xe6e8('0x18')]=_0x1b8fec[a68_0xe6e8('0x18')],await _0x55f257['save'](),await _0x5ab102[a68_0xe6e8('0x49')][a68_0xe6e8('0x26')]({'embed':{'color':tesseract_1[a68_0xe6e8('0x3c')][a68_0xe6e8('0x4d')]['GREEN'],'description':this[a68_0xe6e8('0x10')]['locale']['getString'](_0x5ab102[a68_0xe6e8('0x22')][a68_0xe6e8('0x1e')]['language'],a68_0xe6e8('0x41'),'roleLevelAdd',_0x5ab102['author'][a68_0xe6e8('0x12')],_0x257f27[a68_0xe6e8('0x29')],_0x1b8fec['level'])}})[a68_0xe6e8('0x3f')](()=>{});}if(_0x1b8fec[a68_0xe6e8('0x2e')])return await Role_1[a68_0xe6e8('0x27')][a68_0xe6e8('0x15')]({'guild':_0x5ab102[a68_0xe6e8('0x22')]['id'],'level':_0x1b8fec[a68_0xe6e8('0x18')]},{'$unset':{'level':0x1}}),await _0x5ab102[a68_0xe6e8('0x49')][a68_0xe6e8('0x26')]({'embed':{'color':tesseract_1['Constants'][a68_0xe6e8('0x4d')][a68_0xe6e8('0x2d')],'description':this[a68_0xe6e8('0x10')][a68_0xe6e8('0x0')][a68_0xe6e8('0xe')](_0x5ab102[a68_0xe6e8('0x22')][a68_0xe6e8('0x1e')][a68_0xe6e8('0x38')],a68_0xe6e8('0x41'),a68_0xe6e8('0x20'),_0x5ab102[a68_0xe6e8('0xf')][a68_0xe6e8('0x12')],_0x1b8fec[a68_0xe6e8('0x18')])}})['catch'](()=>{});const _0x4f45bb=await Role_1[a68_0xe6e8('0x27')][a68_0xe6e8('0x1d')]({'guild':_0x5ab102['guild']['id'],'level':_0x1b8fec['level']});if(!_0x4f45bb[a68_0xe6e8('0x3e')])throw new Error(a68_0xe6e8('0x3a'));const _0x538faa=this['client'][a68_0xe6e8('0x45')][a68_0xe6e8('0x47')](_0x5ab102[a68_0xe6e8('0x22')],_0x4f45bb[a68_0xe6e8('0x4')](_0x1152cd=>_0x1152cd[a68_0xe6e8('0x37')]));return await _0x5ab102['channel'][a68_0xe6e8('0x26')]({'embed':{'color':tesseract_1[a68_0xe6e8('0x3c')]['COLORS'][a68_0xe6e8('0x21')],'title':a68_0xe6e8('0x11')+_0x1b8fec[a68_0xe6e8('0x18')],'fields':[{'name':a68_0xe6e8('0x34'),'value':_0x538faa[a68_0xe6e8('0x4')](_0x38b1fe=>_0x38b1fe[a68_0xe6e8('0x29')])[a68_0xe6e8('0x40')]('\x0a')}]}})[a68_0xe6e8('0x3f')](()=>{});}const _0x330c00=await Role_1[a68_0xe6e8('0x27')][a68_0xe6e8('0x1d')]({'guild':_0x5ab102[a68_0xe6e8('0x22')]['id'],'level':{'$exists':!![],'$ne':null}});if(!_0x330c00[a68_0xe6e8('0x3e')])throw new Error(a68_0xe6e8('0x31'));const _0x450ae8={};for(const _0x1be7ac of _0x330c00){_0x1be7ac[a68_0xe6e8('0x18')]in _0x450ae8?_0x450ae8[_0x1be7ac[a68_0xe6e8('0x18')]][a68_0xe6e8('0x42')](_0x1be7ac[a68_0xe6e8('0x37')]):_0x450ae8[_0x1be7ac[a68_0xe6e8('0x18')]]=[_0x1be7ac[a68_0xe6e8('0x37')]];}return await _0x5ab102[a68_0xe6e8('0x49')]['send']({'embed':{'color':tesseract_1['Constants'][a68_0xe6e8('0x4d')]['IRIS'],'title':a68_0xe6e8('0x43'),'fields':Object['keys'](_0x450ae8)[a68_0xe6e8('0x4')](_0xaede43=>({'name':a68_0xe6e8('0x11')+_0xaede43,'value':_0x450ae8[_0xaede43][a68_0xe6e8('0x4')](_0x5a66b9=>_0x5ab102[a68_0xe6e8('0x22')]['roles']['cache'][a68_0xe6e8('0x13')](_0x5a66b9)?_0x5ab102['guild'][a68_0xe6e8('0x2b')]['cache'][a68_0xe6e8('0x3b')](_0x5a66b9)[a68_0xe6e8('0x29')]:_0x5a66b9)[a68_0xe6e8('0x40')](',\x20')}))}})[a68_0xe6e8('0x3f')](()=>{});};}};