const a18_0x4325=['constructor','author','toString','BASTION_ERROR_TYPE','../../utils/errors','GREEN','number','language','info','client','isPublicBastion','guild','It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gambling\x20in\x20the\x20server.\x20When\x20enabled,\x20members\x20can\x20use\x20their\x20Bastion\x20Coins\x20to\x20gamble\x20in\x20games.','gambling','multiplier','exports','DiscordError','gamblingDisable','../../utils/omnic','Constants','errors','gamblingEnable','../../utils/constants','RED','exec','@bastion/tesseract','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getString','enabled','test','premiumGamblingMultiplier','PREMIUM_MEMBERSHIP_REQUIRED','fetchPremiumTier','save','catch','user','locale','channel','document','Gambling\x20Reward\x20Multiplier','COLORS'];(function(_0x145023,_0x432597){const _0xc3204f=function(_0x564d80){while(--_0x564d80){_0x145023['push'](_0x145023['shift']());}},_0x30f56c=function(){const _0x3506bf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x28d054,_0x5f5a91,_0x5f007b,_0x4e06e8){_0x4e06e8=_0x4e06e8||{};let _0x4ebaec=_0x5f5a91+'='+_0x5f007b,_0x339a58=0x0;for(let _0x869bef=0x0,_0x4206eb=_0x28d054['length'];_0x869bef<_0x4206eb;_0x869bef++){const _0x4adfdd=_0x28d054[_0x869bef];_0x4ebaec+=';\x20'+_0x4adfdd;const _0x3e61a9=_0x28d054[_0x4adfdd];_0x28d054['push'](_0x3e61a9),_0x4206eb=_0x28d054['length'],_0x3e61a9!==!![]&&(_0x4ebaec+='='+_0x3e61a9);}_0x4e06e8['cookie']=_0x4ebaec;},'removeCookie':function(){return'dev';},'getCookie':function(_0x16dff3,_0x36c1ba){_0x16dff3=_0x16dff3||function(_0x2273c7){return _0x2273c7;};const _0x2493be=_0x16dff3(new RegExp('(?:^|;\x20)'+_0x36c1ba['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xd520c4=function(_0x48ad0e,_0x557f74){_0x48ad0e(++_0x557f74);};return _0xd520c4(_0xc3204f,_0x432597),_0x2493be?decodeURIComponent(_0x2493be[0x1]):undefined;}},_0x5902dd=function(){const _0x3f8d02=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f8d02['test'](_0x3506bf['removeCookie']['toString']());};_0x3506bf['updateCookie']=_0x5902dd;let _0x1cc6cb='';const _0x119ce5=_0x3506bf['updateCookie']();if(!_0x119ce5)_0x3506bf['setCookie'](['*'],'counter',0x1);else _0x119ce5?_0x1cc6cb=_0x3506bf['getCookie'](null,'counter'):_0x3506bf['removeCookie']();};_0x30f56c();}(a18_0x4325,0xb9));const a18_0xc320=function(_0x145023,_0x432597){_0x145023=_0x145023-0x0;let _0xc3204f=a18_0x4325[_0x145023];return _0xc3204f;};const a18_0x5f007b=function(){let _0x488faf=!![];return function(_0x29f0f9,_0x37a862){const _0x2ba4bd=_0x488faf?function(){if(_0x37a862){const _0x2b2a46=_0x37a862['apply'](_0x29f0f9,arguments);return _0x37a862=null,_0x2b2a46;}}:function(){};return _0x488faf=![],_0x2ba4bd;};}(),a18_0x5f5a91=a18_0x5f007b(this,function(){const _0x5ab9a9=function(){const _0x598e5f=_0x5ab9a9[a18_0xc320('0x14')](a18_0xc320('0x5'))()[a18_0xc320('0x14')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x598e5f[a18_0xc320('0x8')](a18_0x5f5a91);};return _0x5ab9a9();});a18_0x5f5a91();'use strict';const tesseract_1=require(a18_0xc320('0x4')),constants=require(a18_0xc320('0x1')),errors=require(a18_0xc320('0x18')),omnic=require(a18_0xc320('0x26'));module[a18_0xc320('0x23')]=class GamblingCommand extends tesseract_1['Command']{constructor(){super(a18_0xc320('0x21'),{'description':a18_0xc320('0x20'),'triggers':[],'arguments':{'number':[a18_0xc320('0x22')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[a18_0xc320('0x21'),'gambling\x20--multiplier\x201..13']}),this[a18_0xc320('0x3')]=async(_0x19e3e9,_0x5af90d)=>{if(_0x5af90d[a18_0xc320('0x22')]&&constants[a18_0xc320('0x1e')](this['client'][a18_0xc320('0xe')])){const _0x11f09b=await omnic[a18_0xc320('0xb')](_0x19e3e9[a18_0xc320('0x1f')])[a18_0xc320('0xd')](()=>{});if(!_0x11f09b)throw new errors[(a18_0xc320('0x24'))](errors[a18_0xc320('0x17')][a18_0xc320('0xa')],this[a18_0xc320('0x1d')]['locale'][a18_0xc320('0x6')](_0x19e3e9['guild'][a18_0xc320('0x11')][a18_0xc320('0x1b')],a18_0xc320('0x28'),a18_0xc320('0x9')));}const _0x5bb4c4=_0x19e3e9['guild'],_0x458f44=_0x5af90d[a18_0xc320('0x22')]?!![]:!(_0x5bb4c4['document'][a18_0xc320('0x21')]&&_0x5bb4c4['document'][a18_0xc320('0x21')][a18_0xc320('0x7')]);_0x5bb4c4[a18_0xc320('0x11')]['gambling']={'enabled':_0x458f44,'multiplier':typeof _0x5af90d[a18_0xc320('0x22')]===a18_0xc320('0x1a')?_0x5af90d[a18_0xc320('0x22')]:_0x458f44?_0x5bb4c4['document'][a18_0xc320('0x21')]&&_0x5bb4c4[a18_0xc320('0x11')]['gambling']['multiplier']:undefined},await _0x5bb4c4[a18_0xc320('0x11')][a18_0xc320('0xc')](),await _0x19e3e9[a18_0xc320('0x10')]['send']({'embed':{'color':_0x5bb4c4[a18_0xc320('0x11')][a18_0xc320('0x21')][a18_0xc320('0x7')]?tesseract_1['Constants'][a18_0xc320('0x13')][a18_0xc320('0x19')]:tesseract_1[a18_0xc320('0x27')]['COLORS'][a18_0xc320('0x2')],'description':this[a18_0xc320('0x1d')][a18_0xc320('0xf')][a18_0xc320('0x6')](_0x19e3e9[a18_0xc320('0x1f')]['document']['language'],a18_0xc320('0x1c'),_0x5bb4c4['document']['gambling']['enabled']?a18_0xc320('0x0'):a18_0xc320('0x25'),_0x19e3e9[a18_0xc320('0x15')]['tag']),'fields':_0x5bb4c4[a18_0xc320('0x11')][a18_0xc320('0x21')][a18_0xc320('0x7')]?[{'name':a18_0xc320('0x12'),'value':_0x5bb4c4[a18_0xc320('0x11')]['gambling'][a18_0xc320('0x22')]?_0x5bb4c4['document']['gambling'][a18_0xc320('0x22')][a18_0xc320('0x16')]():0x1[a18_0xc320('0x16')](),'inline':!![]}]:[]}})[a18_0xc320('0xd')](()=>{});};}};