const a134_0x4868=['constructor','DiscordError','@bastion/tesseract','apply','rgb','channel','color\x20R\x20G\x20B','INVALID_COMMAND_SYNTAX','../../utils/colors','RGB','name','Integer','integer','return\x20/\x22\x20+\x20this\x20+\x20\x22/','color\x20C\x20M\x20Y\x20K','parse','send','color','cmyk','join','color\x20HEX','exec','exports','guild','CMYK','../../utils/errors'];(function(_0x5e042e,_0x4868cf){const _0x4197a3=function(_0x5f4ab9){while(--_0x5f4ab9){_0x5e042e['push'](_0x5e042e['shift']());}},_0x5584e2=function(){const _0x3f46d8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x54400e,_0x2ba5aa,_0xf7bd7b,_0x446557){_0x446557=_0x446557||{};let _0x319b15=_0x2ba5aa+'='+_0xf7bd7b,_0x47414e=0x0;for(let _0x111c57=0x0,_0x455988=_0x54400e['length'];_0x111c57<_0x455988;_0x111c57++){const _0x13b0f9=_0x54400e[_0x111c57];_0x319b15+=';\x20'+_0x13b0f9;const _0x264935=_0x54400e[_0x13b0f9];_0x54400e['push'](_0x264935),_0x455988=_0x54400e['length'],_0x264935!==!![]&&(_0x319b15+='='+_0x264935);}_0x446557['cookie']=_0x319b15;},'removeCookie':function(){return'dev';},'getCookie':function(_0xeabbbb,_0xaceb3){_0xeabbbb=_0xeabbbb||function(_0x26b1ea){return _0x26b1ea;};const _0x377f8f=_0xeabbbb(new RegExp('(?:^|;\x20)'+_0xaceb3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1723d2=function(_0x2baeef,_0x525255){_0x2baeef(++_0x525255);};return _0x1723d2(_0x4197a3,_0x4868cf),_0x377f8f?decodeURIComponent(_0x377f8f[0x1]):undefined;}},_0x5ae4b8=function(){const _0x5c1093=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5c1093['test'](_0x3f46d8['removeCookie']['toString']());};_0x3f46d8['updateCookie']=_0x5ae4b8;let _0x29e7ee='';const _0x4e357a=_0x3f46d8['updateCookie']();if(!_0x4e357a)_0x3f46d8['setCookie'](['*'],'counter',0x1);else _0x4e357a?_0x29e7ee=_0x3f46d8['getCookie'](null,'counter'):_0x3f46d8['removeCookie']();};_0x5584e2();}(a134_0x4868,0x1ef));const a134_0x4197=function(_0x5e042e,_0x4868cf){_0x5e042e=_0x5e042e-0x0;let _0x4197a3=a134_0x4868[_0x5e042e];return _0x4197a3;};const a134_0x3f46d8=function(){let _0x29e7ee=!![];return function(_0x4e357a,_0x54400e){const _0x2ba5aa=_0x29e7ee?function(){if(_0x54400e){const _0xf7bd7b=_0x54400e[a134_0x4197('0x2')](_0x4e357a,arguments);return _0x54400e=null,_0xf7bd7b;}}:function(){};return _0x29e7ee=![],_0x2ba5aa;};}(),a134_0x5f4ab9=a134_0x3f46d8(this,function(){const _0x446557=function(){const _0x319b15=_0x446557[a134_0x4197('0x19')](a134_0x4197('0xc'))()[a134_0x4197('0x19')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x319b15['test'](a134_0x5f4ab9);};return _0x446557();});a134_0x5f4ab9();'use strict';const tesseract_1=require(a134_0x4197('0x1')),colors=require(a134_0x4197('0x7')),errors=require(a134_0x4197('0x18'));module[a134_0x4197('0x15')]=class ColorCommand extends tesseract_1['Command']{constructor(){super(a134_0x4197('0x10'),{'description':'It\x20allows\x20you\x20the\x20convert\x20the\x20specified\x20color\x20in\x20one\x20format\x20into\x20many\x20differt\x20formats.','triggers':['colour'],'arguments':{},'scope':a134_0x4197('0x16'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a134_0x4197('0x13'),a134_0x4197('0x5'),a134_0x4197('0xd')]}),this[a134_0x4197('0x14')]=async(_0x47414e,_0x111c57)=>{const _0x455988=colors[a134_0x4197('0xe')](_0x111c57['_'][a134_0x4197('0x12')]('\x20'));if(!_0x455988)throw new errors[(a134_0x4197('0x0'))](errors['BASTION_ERROR_TYPE'][a134_0x4197('0x6')],this[a134_0x4197('0x9')]);await _0x47414e[a134_0x4197('0x4')][a134_0x4197('0xf')]({'embed':{'color':_0x455988[a134_0x4197('0xb')],'title':'Color','fields':[{'name':a134_0x4197('0x8'),'value':_0x455988[a134_0x4197('0x3')][a134_0x4197('0x12')](',\x20'),'inline':!![]},{'name':a134_0x4197('0x17'),'value':_0x455988[a134_0x4197('0x11')][a134_0x4197('0x12')](',\x20'),'inline':!![]},{'name':'HEX','value':'#'+_0x455988['hex'],'inline':!![]},{'name':a134_0x4197('0xa'),'value':_0x455988[a134_0x4197('0xb')],'inline':!![]}]}});};}};