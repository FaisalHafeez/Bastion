const a95_0x5926=['MANAGE_GUILD','cache','moderationLogChannelId','apply','locale','../../utils/errors','channels','errors','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Command','default','type','MAX_SAFE_INTEGER','caseNotFound','exports','../../utils/numbers','DiscordError','guild','document','language','../../models/Case','case\x20--number\x20NUMBER','messages','number','news','floor','get','name','text','test','findOne','case','It\x20allows\x20you\x20to\x20see\x20the\x20moderation\x20case\x20log\x20for\x20the\x20specified\x20case\x20number.','has','getString','NewsChannel','send','embeds','filter','messageId','discord.js','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];(function(_0x162617,_0x592661){const _0x21d466=function(_0x426095){while(--_0x426095){_0x162617['push'](_0x162617['shift']());}},_0x4f9afe=function(){const _0x515da3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x50aafa,_0x14fe14,_0x593dc7,_0x59d793){_0x59d793=_0x59d793||{};let _0x1e1a9b=_0x14fe14+'='+_0x593dc7,_0x1c26fc=0x0;for(let _0x171be8=0x0,_0xfc1b1c=_0x50aafa['length'];_0x171be8<_0xfc1b1c;_0x171be8++){const _0x25c945=_0x50aafa[_0x171be8];_0x1e1a9b+=';\x20'+_0x25c945;const _0x585083=_0x50aafa[_0x25c945];_0x50aafa['push'](_0x585083),_0xfc1b1c=_0x50aafa['length'],_0x585083!==!![]&&(_0x1e1a9b+='='+_0x585083);}_0x59d793['cookie']=_0x1e1a9b;},'removeCookie':function(){return'dev';},'getCookie':function(_0xca5a23,_0xceb4b6){_0xca5a23=_0xca5a23||function(_0x3980f6){return _0x3980f6;};const _0x4a7a39=_0xca5a23(new RegExp('(?:^|;\x20)'+_0xceb4b6['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x212d31=function(_0x30f729,_0x508b1b){_0x30f729(++_0x508b1b);};return _0x212d31(_0x21d466,_0x592661),_0x4a7a39?decodeURIComponent(_0x4a7a39[0x1]):undefined;}},_0x20f478=function(){const _0xaa4816=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xaa4816['test'](_0x515da3['removeCookie']['toString']());};_0x515da3['updateCookie']=_0x20f478;let _0x5c68b8='';const _0x1556e2=_0x515da3['updateCookie']();if(!_0x1556e2)_0x515da3['setCookie'](['*'],'counter',0x1);else _0x1556e2?_0x5c68b8=_0x515da3['getCookie'](null,'counter'):_0x515da3['removeCookie']();};_0x4f9afe();}(a95_0x5926,0x69));const a95_0x21d4=function(_0x162617,_0x592661){_0x162617=_0x162617-0x0;let _0x21d466=a95_0x5926[_0x162617];return _0x21d466;};const _0x371498=a95_0x21d4,a95_0x515da3=function(){let _0x5c68b8=!![];return function(_0x1556e2,_0x50aafa){const _0x14fe14=_0x5c68b8?function(){const _0x363e00=a95_0x21d4;if(_0x50aafa){const _0x593dc7=_0x50aafa[_0x363e00('0x1b')](_0x1556e2,arguments);return _0x50aafa=null,_0x593dc7;}}:function(){};return _0x5c68b8=![],_0x14fe14;};}(),a95_0x426095=a95_0x515da3(this,function(){const _0x59d793=function(){const _0x9e887a=a95_0x21d4,_0x1e1a9b=_0x59d793[_0x9e887a('0x16')](_0x9e887a('0x20'))()[_0x9e887a('0x16')](_0x9e887a('0x17'));return!_0x1e1a9b[_0x9e887a('0xa')](a95_0x426095);};return _0x59d793();});a95_0x426095();'use strict';const tesseract_1=require('@bastion/tesseract'),discord_js_1=require(_0x371498('0x15')),errors=require(_0x371498('0x1d')),numbers=require(_0x371498('0x27')),Case_1=require(_0x371498('0x1'));module[_0x371498('0x26')]=class CaseCommand extends tesseract_1[_0x371498('0x21')]{constructor(){const _0xd7621e=_0x371498;super(_0xd7621e('0xc'),{'description':_0xd7621e('0xd'),'triggers':[],'arguments':{'alias':{'number':'n'},'number':[_0xd7621e('0x4')],'coerce':{'number':_0x1c26fc=>Math[_0xd7621e('0x6')](numbers['clamp'](_0x1c26fc,0x1,Number[_0xd7621e('0x24')]))}},'scope':_0xd7621e('0x29'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0xd7621e('0x18')],'syntax':[_0xd7621e('0x2')]}),this['exec']=async(_0x171be8,_0xfc1b1c)=>{const _0xff9d70=_0xd7621e;if(!_0xfc1b1c[_0xff9d70('0x4')])throw new errors[(_0xff9d70('0x28'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this[_0xff9d70('0x8')]);const _0x25c945=await Case_1[_0xff9d70('0x22')][_0xff9d70('0xb')]({'guild':_0x171be8[_0xff9d70('0x29')]['id'],'number':_0xfc1b1c[_0xff9d70('0x4')]});if(!_0x25c945)throw new Error(this['client'][_0xff9d70('0x1c')][_0xff9d70('0xf')](_0x171be8['guild'][_0xff9d70('0x2a')][_0xff9d70('0x0')],_0xff9d70('0x1f'),_0xff9d70('0x25')));const _0x585083=_0x171be8['guild'][_0xff9d70('0x1e')][_0xff9d70('0x19')][_0xff9d70('0x13')](_0xca5a23=>_0xca5a23[_0xff9d70('0x23')]===_0xff9d70('0x9')||_0xca5a23[_0xff9d70('0x23')]===_0xff9d70('0x5'));if(_0x171be8[_0xff9d70('0x29')][_0xff9d70('0x2a')][_0xff9d70('0x1a')]&&_0x585083[_0xff9d70('0xe')](_0x171be8['guild'][_0xff9d70('0x2a')][_0xff9d70('0x1a')])){const _0xceb4b6=_0x585083[_0xff9d70('0x7')](_0x171be8[_0xff9d70('0x29')]['document'][_0xff9d70('0x1a')]);if(_0xceb4b6 instanceof discord_js_1[_0xff9d70('0x10')]||_0xceb4b6 instanceof discord_js_1['TextChannel']){const _0x4a7a39=await _0xceb4b6[_0xff9d70('0x3')]['fetch'](_0x25c945[_0xff9d70('0x14')]);await _0x171be8['channel'][_0xff9d70('0x11')]({'embed':_0x4a7a39[_0xff9d70('0x12')][0x0]});}}};}};