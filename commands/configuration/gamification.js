const a19_0x2172=['../../utils/errors','apply','info','send','fetchPremiumTier','toString','channel','isPublicBastion','gamification\x20--multiplier\x20NUMBER','../../utils/omnic','save','@bastion/tesseract','user','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','catch','constructor','locale','BASTION_ERROR_TYPE','boolean','Level-Up\x20Messages','gamification','gamificationDisable','exports','PREMIUM_MEMBERSHIP_REQUIRED','Disabled','author','Enabled','guild','../../utils/constants','Constants','number','exec','GREEN','RED','gamification\x20--messages','It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gamification\x20in\x20the\x20server.\x20When\x20enabled,\x20users\x20gain\x20experience\x20and\x20level\x20up\x20in\x20the\x20server\x20by\x20participating\x20in\x20the\x20server,\x20competing\x20against\x20each\x20other\x20to\x20climb\x20the\x20leaderboard.\x20It\x20also\x20allows\x20you\x20to\x20toggle\x20level\x20up\x20messages\x20and\x20set\x20the\x20level\x20up\x20multiplier.','client','enabled','language','multiplier','document','Command','Level-Up\x20Multiplier','COLORS','getString','DiscordError','tag','MANAGE_GUILD','../../utils/gamification','messages'];(function(_0x536fc6,_0x2172a0){const _0x5cf3ae=function(_0x3fabed){while(--_0x3fabed){_0x536fc6['push'](_0x536fc6['shift']());}},_0x46e7e0=function(){const _0xcd5e17={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x7edcf7,_0x5cfb59,_0x2821cd,_0x4b1d3d){_0x4b1d3d=_0x4b1d3d||{};let _0x19899e=_0x5cfb59+'='+_0x2821cd,_0x837239=0x0;for(let _0x3ddfba=0x0,_0x352ffa=_0x7edcf7['length'];_0x3ddfba<_0x352ffa;_0x3ddfba++){const _0x396c28=_0x7edcf7[_0x3ddfba];_0x19899e+=';\x20'+_0x396c28;const _0x527915=_0x7edcf7[_0x396c28];_0x7edcf7['push'](_0x527915),_0x352ffa=_0x7edcf7['length'],_0x527915!==!![]&&(_0x19899e+='='+_0x527915);}_0x4b1d3d['cookie']=_0x19899e;},'removeCookie':function(){return'dev';},'getCookie':function(_0xff3882,_0x2b5c47){_0xff3882=_0xff3882||function(_0xe262f5){return _0xe262f5;};const _0x3691a9=_0xff3882(new RegExp('(?:^|;\x20)'+_0x2b5c47['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x15ff5b=function(_0x3ec8f7,_0x3fa4a3){_0x3ec8f7(++_0x3fa4a3);};return _0x15ff5b(_0x5cf3ae,_0x2172a0),_0x3691a9?decodeURIComponent(_0x3691a9[0x1]):undefined;}},_0x1a54f2=function(){const _0x2a49b2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a49b2['test'](_0xcd5e17['removeCookie']['toString']());};_0xcd5e17['updateCookie']=_0x1a54f2;let _0x34c245='';const _0x144e85=_0xcd5e17['updateCookie']();if(!_0x144e85)_0xcd5e17['setCookie'](['*'],'counter',0x1);else _0x144e85?_0x34c245=_0xcd5e17['getCookie'](null,'counter'):_0xcd5e17['removeCookie']();};_0x46e7e0();}(a19_0x2172,0x1c2));const a19_0x5cf3=function(_0x536fc6,_0x2172a0){_0x536fc6=_0x536fc6-0x0;let _0x5cf3ae=a19_0x2172[_0x536fc6];return _0x5cf3ae;};const a19_0x2821cd=function(){let _0x5b1bc5=!![];return function(_0x47bda0,_0xd38c88){const _0x53fbe4=_0x5b1bc5?function(){if(_0xd38c88){const _0x127f70=_0xd38c88[a19_0x5cf3('0xa')](_0x47bda0,arguments);return _0xd38c88=null,_0x127f70;}}:function(){};return _0x5b1bc5=![],_0x53fbe4;};}(),a19_0x5cfb59=a19_0x2821cd(this,function(){const _0x262df3=function(){const _0x228e7b=_0x262df3[a19_0x5cf3('0x19')](a19_0x5cf3('0x16'))()[a19_0x5cf3('0x19')](a19_0x5cf3('0x17'));return!_0x228e7b['test'](a19_0x5cfb59);};return _0x262df3();});a19_0x5cfb59();'use strict';const tesseract_1=require(a19_0x5cf3('0x14')),constants=require(a19_0x5cf3('0x26')),errors=require(a19_0x5cf3('0x9')),gamification=require(a19_0x5cf3('0x7')),omnic=require(a19_0x5cf3('0x12'));module[a19_0x5cf3('0x20')]=class Gamification extends tesseract_1[a19_0x5cf3('0x0')]{constructor(){super(a19_0x5cf3('0x1e'),{'description':a19_0x5cf3('0x2d'),'triggers':[],'arguments':{'boolean':[a19_0x5cf3('0x8')],'number':['multiplier']},'scope':a19_0x5cf3('0x25'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a19_0x5cf3('0x6')],'syntax':[a19_0x5cf3('0x1e'),a19_0x5cf3('0x2c'),a19_0x5cf3('0x11')]}),this[a19_0x5cf3('0x29')]=async(_0x23edf1,_0x44ca6d)=>{if(_0x44ca6d[a19_0x5cf3('0x31')]&&constants[a19_0x5cf3('0x10')](this[a19_0x5cf3('0x2e')][a19_0x5cf3('0x15')])){const _0x202400=await omnic[a19_0x5cf3('0xd')](_0x23edf1['guild'])['catch'](()=>{});if(!_0x202400)throw new errors[(a19_0x5cf3('0x4'))](errors[a19_0x5cf3('0x1b')][a19_0x5cf3('0x21')],this['client'][a19_0x5cf3('0x1a')][a19_0x5cf3('0x3')](_0x23edf1[a19_0x5cf3('0x25')]['document'][a19_0x5cf3('0x30')],'errors','premiumGamificationMultiplier'));}const _0x3cdd2e=_0x23edf1[a19_0x5cf3('0x25')],_0x143f7a=typeof _0x44ca6d[a19_0x5cf3('0x8')]===a19_0x5cf3('0x1c')||_0x44ca6d[a19_0x5cf3('0x31')]?!![]:!(_0x3cdd2e['document']['gamification']&&_0x3cdd2e[a19_0x5cf3('0x32')]['gamification']['enabled']);_0x3cdd2e[a19_0x5cf3('0x32')]['gamification']={'enabled':_0x143f7a,'messages':typeof _0x44ca6d[a19_0x5cf3('0x8')]===a19_0x5cf3('0x1c')?_0x44ca6d[a19_0x5cf3('0x8')]:_0x143f7a?_0x3cdd2e['document'][a19_0x5cf3('0x1e')]&&_0x3cdd2e['document'][a19_0x5cf3('0x1e')][a19_0x5cf3('0x8')]:undefined,'multiplier':typeof _0x44ca6d[a19_0x5cf3('0x31')]===a19_0x5cf3('0x28')?_0x44ca6d[a19_0x5cf3('0x31')]:_0x143f7a?_0x3cdd2e[a19_0x5cf3('0x32')]['gamification']&&_0x3cdd2e['document'][a19_0x5cf3('0x1e')][a19_0x5cf3('0x31')]:undefined},await _0x3cdd2e['document'][a19_0x5cf3('0x13')](),await _0x23edf1[a19_0x5cf3('0xf')][a19_0x5cf3('0xc')]({'embed':{'color':_0x3cdd2e[a19_0x5cf3('0x32')][a19_0x5cf3('0x1e')][a19_0x5cf3('0x2f')]?tesseract_1[a19_0x5cf3('0x27')][a19_0x5cf3('0x2')][a19_0x5cf3('0x2a')]:tesseract_1[a19_0x5cf3('0x27')][a19_0x5cf3('0x2')][a19_0x5cf3('0x2b')],'description':this['client']['locale'][a19_0x5cf3('0x3')](_0x23edf1[a19_0x5cf3('0x25')][a19_0x5cf3('0x32')][a19_0x5cf3('0x30')],a19_0x5cf3('0xb'),_0x3cdd2e[a19_0x5cf3('0x32')][a19_0x5cf3('0x1e')][a19_0x5cf3('0x2f')]?'gamificationEnable':a19_0x5cf3('0x1f'),_0x23edf1[a19_0x5cf3('0x23')][a19_0x5cf3('0x5')]),'fields':_0x3cdd2e['document'][a19_0x5cf3('0x1e')][a19_0x5cf3('0x2f')]?[{'name':a19_0x5cf3('0x1d'),'value':_0x3cdd2e[a19_0x5cf3('0x32')][a19_0x5cf3('0x1e')][a19_0x5cf3('0x8')]?a19_0x5cf3('0x24'):a19_0x5cf3('0x22'),'inline':!![]},{'name':a19_0x5cf3('0x1'),'value':_0x3cdd2e['document'][a19_0x5cf3('0x1e')][a19_0x5cf3('0x31')]?_0x3cdd2e[a19_0x5cf3('0x32')][a19_0x5cf3('0x1e')][a19_0x5cf3('0x31')][a19_0x5cf3('0xe')]():gamification['DEFAUL_LEVELUP_MULTIPLIER'][a19_0x5cf3('0xe')](),'inline':!![]}]:[]}})[a19_0x5cf3('0x18')](()=>{});};}};