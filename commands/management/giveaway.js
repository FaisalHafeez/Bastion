const a63_0x51c5=['language','\x20or\x20','../../utils/numbers','test','catch','GIVEAWAY!','fetchPremiumTier','reactions','client','LIMITS','number','default','GIVEAWAYS','defaultTimeout','isPublicBastion','MANAGE_CHANNELS','membershipLimitGiveawayTimeout','constructor','MAX_SAFE_INTEGER','channel','GIVEAWAY_TIMEOUT','../../models/Giveaway','clamp','GOLD','now','Constants','send','countDocuments','../../utils/constants','giveaway\x20--winners\x20NUMBER\x20--\x20ITEM','floor','name','PremiumTier','document','join','timeout','IRIS','errors','INVALID_COMMAND_SYNTAX','BASTION_ERROR_TYPE','winners','DiscordError','membershipLimitGiveaways','PREMIUM_MEMBERSHIP_REQUIRED','../../utils/omnic','premiumGiveaways','guild','react','Command','exports','locale','user','defaultWinners','PLATINUM','getString','LIMITED_PREMIUM_MEMBERSHIP','giveaway\x20--timeout\x20HOURS\x20--\x20ITEM'];(function(_0x1f45d5,_0x51c543){const _0x38c09f=function(_0x5b6af0){while(--_0x5b6af0){_0x1f45d5['push'](_0x1f45d5['shift']());}},_0x65f118=function(){const _0x220d17={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x12efb6,_0x323161,_0x581682,_0x3cb83b){_0x3cb83b=_0x3cb83b||{};let _0x4c44d5=_0x323161+'='+_0x581682,_0x51402f=0x0;for(let _0x8f77da=0x0,_0x18fec1=_0x12efb6['length'];_0x8f77da<_0x18fec1;_0x8f77da++){const _0x2ab815=_0x12efb6[_0x8f77da];_0x4c44d5+=';\x20'+_0x2ab815;const _0x9c2e22=_0x12efb6[_0x2ab815];_0x12efb6['push'](_0x9c2e22),_0x18fec1=_0x12efb6['length'],_0x9c2e22!==!![]&&(_0x4c44d5+='='+_0x9c2e22);}_0x3cb83b['cookie']=_0x4c44d5;},'removeCookie':function(){return'dev';},'getCookie':function(_0xfd6960,_0x7850d0){_0xfd6960=_0xfd6960||function(_0x2275c6){return _0x2275c6;};const _0x2a335d=_0xfd6960(new RegExp('(?:^|;\x20)'+_0x7850d0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x520b26=function(_0x9c43d,_0x34053e){_0x9c43d(++_0x34053e);};return _0x520b26(_0x38c09f,_0x51c543),_0x2a335d?decodeURIComponent(_0x2a335d[0x1]):undefined;}},_0x2d324c=function(){const _0x48d003=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x48d003['test'](_0x220d17['removeCookie']['toString']());};_0x220d17['updateCookie']=_0x2d324c;let _0x4588a5='';const _0x3ce4f=_0x220d17['updateCookie']();if(!_0x3ce4f)_0x220d17['setCookie'](['*'],'counter',0x1);else _0x3ce4f?_0x4588a5=_0x220d17['getCookie'](null,'counter'):_0x220d17['removeCookie']();};_0x65f118();}(a63_0x51c5,0xe7));const a63_0x38c0=function(_0x1f45d5,_0x51c543){_0x1f45d5=_0x1f45d5-0x0;let _0x38c09f=a63_0x51c5[_0x1f45d5];return _0x38c09f;};const a63_0x220d17=function(){let _0x4588a5=!![];return function(_0x3ce4f,_0x12efb6){const _0x323161=_0x4588a5?function(){if(_0x12efb6){const _0x581682=_0x12efb6['apply'](_0x3ce4f,arguments);return _0x12efb6=null,_0x581682;}}:function(){};return _0x4588a5=![],_0x323161;};}(),a63_0x5b6af0=a63_0x220d17(this,function(){const _0x3cb83b=function(){const _0x4c44d5=_0x3cb83b[a63_0x38c0('0xe')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a63_0x38c0('0xe')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4c44d5[a63_0x38c0('0x0')](a63_0x5b6af0);};return _0x3cb83b();});a63_0x5b6af0();'use strict';const tesseract_1=require('@bastion/tesseract'),Giveaway_1=require(a63_0x38c0('0x12')),constants=require(a63_0x38c0('0x19')),errors=require('../../utils/errors'),numbers=require(a63_0x38c0('0x38')),omnic=require(a63_0x38c0('0x29'));module[a63_0x38c0('0x2e')]=class GiveawayCommand extends tesseract_1[a63_0x38c0('0x2d')]{constructor(){super('giveaway',{'description':'It\x20allows\x20you\x20to\x20run\x20giveaway\x20events\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20any\x20number\x20of\x20winners\x20for\x20the\x20event.\x20And\x20it\x20also\x20allows\x20you\x20to\x20reroll\x20the\x20winners,\x20if\x20need\x20be,\x20after\x20the\x20end\x20of\x20the\x20event.','triggers':[],'arguments':{'alias':{'timeout':['t'],'winners':['w']},'number':['timeout',a63_0x38c0('0x25')],'coerce':{'timeout':_0x51402f=>typeof _0x51402f===a63_0x38c0('0x7')&&numbers[a63_0x38c0('0x13')](_0x51402f,0x1,0x2d0),'winners':_0x8f77da=>typeof _0x8f77da===a63_0x38c0('0x7')&&Math[a63_0x38c0('0x1b')](numbers[a63_0x38c0('0x13')](_0x8f77da,0x1,Number[a63_0x38c0('0xf')]))},'default':{'timeout':0x3,'winners':0x1}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a63_0x38c0('0xc')],'syntax':['giveaway\x20--\x20ITEM',a63_0x38c0('0x1a'),a63_0x38c0('0x35')]}),this['exec']=async(_0x18fec1,_0x2ab815)=>{if(!_0x2ab815['_']['length'])throw new errors[(a63_0x38c0('0x26'))](errors[a63_0x38c0('0x24')][a63_0x38c0('0x23')],this[a63_0x38c0('0x1c')]);const _0x9c2e22=_0x2ab815['_'][a63_0x38c0('0x1f')]('\x20'),_0xfd6960=_0x2ab815['timeout']?_0x2ab815[a63_0x38c0('0x20')]:this[a63_0x38c0('0xa')],_0x7850d0=_0x2ab815['winners']?_0x2ab815[a63_0x38c0('0x25')]:this['defaultWinners'];if(constants[a63_0x38c0('0xb')](this[a63_0x38c0('0x5')][a63_0x38c0('0x30')])){const _0x2275c6=await omnic[a63_0x38c0('0x3')](_0x18fec1[a63_0x38c0('0x2b')])[a63_0x38c0('0x1')](()=>{});if(_0x2275c6){if(_0x2275c6===omnic[a63_0x38c0('0x1d')][a63_0x38c0('0x14')]&&_0xfd6960>constants[a63_0x38c0('0x6')][a63_0x38c0('0x14')][a63_0x38c0('0x11')])throw new errors[(a63_0x38c0('0x26'))](errors[a63_0x38c0('0x24')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a63_0x38c0('0x5')][a63_0x38c0('0x2f')][a63_0x38c0('0x33')](_0x18fec1[a63_0x38c0('0x2b')][a63_0x38c0('0x1e')][a63_0x38c0('0x36')],'errors',a63_0x38c0('0xd'),constants['LIMITS'][a63_0x38c0('0x14')]['GIVEAWAY_TIMEOUT']));else{if(_0x2275c6===omnic[a63_0x38c0('0x1d')]['PLATINUM']&&_0xfd6960>constants[a63_0x38c0('0x6')]['PLATINUM'][a63_0x38c0('0x11')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a63_0x38c0('0x34')],this[a63_0x38c0('0x5')][a63_0x38c0('0x2f')][a63_0x38c0('0x33')](_0x18fec1[a63_0x38c0('0x2b')][a63_0x38c0('0x1e')][a63_0x38c0('0x36')],'errors','membershipLimitGiveawayTimeout',constants[a63_0x38c0('0x6')][a63_0x38c0('0x32')]['GIVEAWAY_TIMEOUT']));}}else{if(_0xfd6960>constants[a63_0x38c0('0x6')][a63_0x38c0('0x11')])throw new errors[(a63_0x38c0('0x26'))](errors[a63_0x38c0('0x24')][a63_0x38c0('0x28')],this['client']['locale'][a63_0x38c0('0x33')](_0x18fec1['guild'][a63_0x38c0('0x1e')][a63_0x38c0('0x36')],a63_0x38c0('0x22'),'premiumGiveawayTimeout',constants['LIMITS'][a63_0x38c0('0x11')]));}const _0x9c43d=await Giveaway_1[a63_0x38c0('0x8')][a63_0x38c0('0x18')]({'guild':_0x18fec1[a63_0x38c0('0x2b')]['id'],'ends':{'$gte':new Date()}});if(_0x2275c6){if(_0x2275c6===omnic['PremiumTier'][a63_0x38c0('0x14')]&&_0x9c43d>=constants[a63_0x38c0('0x6')][a63_0x38c0('0x14')][a63_0x38c0('0x9')])throw new errors['DiscordError'](errors[a63_0x38c0('0x24')][a63_0x38c0('0x34')],this[a63_0x38c0('0x5')][a63_0x38c0('0x2f')]['getString'](_0x18fec1[a63_0x38c0('0x2b')][a63_0x38c0('0x1e')]['language'],a63_0x38c0('0x22'),a63_0x38c0('0x27'),constants[a63_0x38c0('0x6')][a63_0x38c0('0x14')]['GIVEAWAYS']));else{if(_0x2275c6===omnic[a63_0x38c0('0x1d')][a63_0x38c0('0x32')]&&_0x9c43d>=constants[a63_0x38c0('0x6')][a63_0x38c0('0x32')][a63_0x38c0('0x9')])throw new errors[(a63_0x38c0('0x26'))](errors[a63_0x38c0('0x24')][a63_0x38c0('0x34')],this[a63_0x38c0('0x5')][a63_0x38c0('0x2f')][a63_0x38c0('0x33')](_0x18fec1[a63_0x38c0('0x2b')][a63_0x38c0('0x1e')]['language'],a63_0x38c0('0x22'),'membershipLimitGiveaways',constants['LIMITS'][a63_0x38c0('0x32')]['GIVEAWAYS']));}}else{if(_0x9c43d>=constants[a63_0x38c0('0x6')][a63_0x38c0('0x9')])throw new errors[(a63_0x38c0('0x26'))](errors[a63_0x38c0('0x24')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a63_0x38c0('0x5')]['locale'][a63_0x38c0('0x33')](_0x18fec1[a63_0x38c0('0x2b')]['document'][a63_0x38c0('0x36')],a63_0x38c0('0x22'),a63_0x38c0('0x2a'),constants['LIMITS'][a63_0x38c0('0x9')]));}}const _0x2a335d=new Date(Date[a63_0x38c0('0x15')]()+_0xfd6960*0x36ee80),_0x520b26=await _0x18fec1[a63_0x38c0('0x10')][a63_0x38c0('0x17')]({'embed':{'color':tesseract_1[a63_0x38c0('0x16')]['COLORS'][a63_0x38c0('0x21')],'author':{'name':a63_0x38c0('0x2')},'title':_0x9c2e22,'description':'React\x20to\x20this\x20message\x20with\x20'+this[a63_0x38c0('0x4')][a63_0x38c0('0x1f')](a63_0x38c0('0x37'))+'\x20to\x20participate\x20in\x20the\x20giveaway\x20for\x20a\x20chance\x20to\x20win.','footer':{'text':_0x7850d0+'\x20Winners\x20•\x20Ends'},'timestamp':_0x2a335d}});await Giveaway_1[a63_0x38c0('0x8')]['create']({'_id':_0x520b26['id'],'channel':_0x520b26['channel']['id'],'guild':_0x520b26[a63_0x38c0('0x2b')]['id'],'winners':_0x7850d0,'ends':_0x2a335d});for(const _0x34053e of this[a63_0x38c0('0x4')]){await _0x520b26[a63_0x38c0('0x2c')](_0x34053e)['catch'](()=>{});}},this['reactions']=['🎊','🎉'],this[a63_0x38c0('0xa')]=0x3,this[a63_0x38c0('0x31')]=0x1;}};