const a3_0x5600=['constructor','length','locale','apply','manager','return\x20/\x22\x20+\x20this\x20+\x20\x22/','errors','guild','command','BASTION_ERROR_TYPE','exec','disable','commandDisabled','catch','Command','volatileCommandDisable','tag','PUPIL','exports','document','name','COLORS','commandModule\x20COMMAND\x20--enable','modules','enabled','Constants','getString','commandModule\x20COMMAND','enable','commandModule\x20COMMAND\x20--disable','INVALID_COMMAND_SYNTAX','send','volatileCommandEnable','DiscordError','toLowerCase','client','It\x20allows\x20you\x20to\x20temporarily\x20enable\x20or\x20disable\x20a\x20command\x20module\x20until\x20the\x20next\x20restart.\x20It\x20also\x20allows\x20you\x20to\x20check\x20whether\x20the\x20command\x20is\x20currently\x20enabled.','info','../../utils/errors','Command\x20Module','GREEN','channel','test','language'];(function(_0x3a9da2,_0x56007b){const _0x3e4454=function(_0x2af556){while(--_0x2af556){_0x3a9da2['push'](_0x3a9da2['shift']());}},_0x376c30=function(){const _0x4f60f6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x7c0a35,_0x9ba461,_0x4cf382,_0x42e6b8){_0x42e6b8=_0x42e6b8||{};let _0x150969=_0x9ba461+'='+_0x4cf382,_0x2de52a=0x0;for(let _0x18680b=0x0,_0x3a1062=_0x7c0a35['length'];_0x18680b<_0x3a1062;_0x18680b++){const _0x599dc7=_0x7c0a35[_0x18680b];_0x150969+=';\x20'+_0x599dc7;const _0x33467d=_0x7c0a35[_0x599dc7];_0x7c0a35['push'](_0x33467d),_0x3a1062=_0x7c0a35['length'],_0x33467d!==!![]&&(_0x150969+='='+_0x33467d);}_0x42e6b8['cookie']=_0x150969;},'removeCookie':function(){return'dev';},'getCookie':function(_0x51b4dd,_0x2f4552){_0x51b4dd=_0x51b4dd||function(_0x5335da){return _0x5335da;};const _0x2fc36a=_0x51b4dd(new RegExp('(?:^|;\x20)'+_0x2f4552['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xc0c183=function(_0xa123d0,_0xd0db6){_0xa123d0(++_0xd0db6);};return _0xc0c183(_0x3e4454,_0x56007b),_0x2fc36a?decodeURIComponent(_0x2fc36a[0x1]):undefined;}},_0x4b425b=function(){const _0x369802=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x369802['test'](_0x4f60f6['removeCookie']['toString']());};_0x4f60f6['updateCookie']=_0x4b425b;let _0x2a5d01='';const _0x6bc864=_0x4f60f6['updateCookie']();if(!_0x6bc864)_0x4f60f6['setCookie'](['*'],'counter',0x1);else _0x6bc864?_0x2a5d01=_0x4f60f6['getCookie'](null,'counter'):_0x4f60f6['removeCookie']();};_0x376c30();}(a3_0x5600,0x15a));const a3_0x3e44=function(_0x3a9da2,_0x56007b){_0x3a9da2=_0x3a9da2-0x0;let _0x3e4454=a3_0x5600[_0x3a9da2];return _0x3e4454;};const a3_0x4cf382=function(){let _0x5e7fdf=!![];return function(_0x51a166,_0x1f7dfb){const _0x3316b3=_0x5e7fdf?function(){if(_0x1f7dfb){const _0x24763e=_0x1f7dfb[a3_0x3e44('0x9')](_0x51a166,arguments);return _0x1f7dfb=null,_0x24763e;}}:function(){};return _0x5e7fdf=![],_0x3316b3;};}(),a3_0x9ba461=a3_0x4cf382(this,function(){const _0x3f5947=function(){const _0x322aa9=_0x3f5947[a3_0x3e44('0x6')](a3_0x3e44('0xb'))()[a3_0x3e44('0x6')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x322aa9[a3_0x3e44('0x4')](a3_0x9ba461);};return _0x3f5947();});a3_0x9ba461();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a3_0x3e44('0x0'));module[a3_0x3e44('0x18')]=class CommandModuleCommand extends tesseract_1[a3_0x3e44('0x14')]{constructor(){super('commandModule',{'description':a3_0x3e44('0x2a'),'triggers':[a3_0x3e44('0xe')],'arguments':{'alias':{'disable':['d'],'enable':['e']},'boolean':[a3_0x3e44('0x11'),'enable']},'scope':a3_0x3e44('0xd'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a3_0x3e44('0x21'),a3_0x3e44('0x23'),a3_0x3e44('0x1c')]}),this[a3_0x3e44('0x10')]=async(_0x4010b0,_0x14d16f)=>{if(!_0x14d16f['_'][a3_0x3e44('0x7')])throw new errors[(a3_0x3e44('0x27'))](errors['BASTION_ERROR_TYPE'][a3_0x3e44('0x24')],this['name']);const _0x248004=this[a3_0x3e44('0xa')][a3_0x3e44('0x1d')]['find'](_0x2e0503=>_0x2e0503[a3_0x3e44('0x1a')][a3_0x3e44('0x28')]()===_0x14d16f['_']['join']('')['toLowerCase']());if(!_0x248004)throw new errors[(a3_0x3e44('0x27'))](errors[a3_0x3e44('0xf')]['ERROR'],this[a3_0x3e44('0x29')]['locale'][a3_0x3e44('0x20')](_0x4010b0['guild'][a3_0x3e44('0x19')][a3_0x3e44('0x5')],a3_0x3e44('0xc'),'commandNotFound'));_0x248004[a3_0x3e44('0x1e')]=_0x14d16f[a3_0x3e44('0x22')]?!![]:_0x14d16f[a3_0x3e44('0x11')]?![]:_0x248004[a3_0x3e44('0x1e')],await _0x4010b0[a3_0x3e44('0x3')][a3_0x3e44('0x25')]({'embed':{'color':_0x14d16f[a3_0x3e44('0x22')]?tesseract_1['Constants'][a3_0x3e44('0x1b')][a3_0x3e44('0x2')]:_0x14d16f[a3_0x3e44('0x11')]?tesseract_1[a3_0x3e44('0x1f')]['COLORS']['RED']:tesseract_1['Constants'][a3_0x3e44('0x1b')][a3_0x3e44('0x17')],'author':{'name':_0x248004[a3_0x3e44('0x1a')]},'title':a3_0x3e44('0x1'),'description':this[a3_0x3e44('0x29')][a3_0x3e44('0x8')]['getString'](_0x4010b0[a3_0x3e44('0xd')][a3_0x3e44('0x19')][a3_0x3e44('0x5')],a3_0x3e44('0x2b'),_0x14d16f[a3_0x3e44('0x22')]?a3_0x3e44('0x26'):_0x14d16f[a3_0x3e44('0x11')]?a3_0x3e44('0x15'):_0x248004['enabled']?'commandEnabled':a3_0x3e44('0x12'),_0x4010b0['author'][a3_0x3e44('0x16')],_0x248004['name'])}})[a3_0x3e44('0x13')](()=>{});};}};