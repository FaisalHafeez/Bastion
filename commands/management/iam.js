const a85_0x487e01=a85_0x1004;(function(_0xd460e3,_0x52bc96){const _0x4e4c1b=a85_0x1004,_0x46cc4d=_0xd460e3();while(!![]){try{const _0x1eed2b=-parseInt(_0x4e4c1b(0xed))/0x1+parseInt(_0x4e4c1b(0xfd))/0x2+-parseInt(_0x4e4c1b(0xdb))/0x3*(-parseInt(_0x4e4c1b(0xec))/0x4)+-parseInt(_0x4e4c1b(0xfb))/0x5*(-parseInt(_0x4e4c1b(0x101))/0x6)+parseInt(_0x4e4c1b(0xf7))/0x7+-parseInt(_0x4e4c1b(0xe2))/0x8+-parseInt(_0x4e4c1b(0xff))/0x9*(parseInt(_0x4e4c1b(0xf1))/0xa);if(_0x1eed2b===_0x52bc96)break;else _0x46cc4d['push'](_0x46cc4d['shift']());}catch(_0x494dc5){_0x46cc4d['push'](_0x46cc4d['shift']());}}}(a85_0x427a,0x57062));function a85_0x1004(_0x1d6533,_0x1174eb){const _0x5589bf=a85_0x427a();return a85_0x1004=function(_0x5f1519,_0x1b116d){_0x5f1519=_0x5f1519-0xcd;let _0x427a0b=_0x5589bf[_0x5f1519];return _0x427a0b;},a85_0x1004(_0x1d6533,_0x1174eb);}const a85_0x1b116d=(function(){let _0x3995d8=!![];return function(_0x3fed82,_0xb21d6a){const _0x42613f=_0x3995d8?function(){if(_0xb21d6a){const _0x5d22cb=_0xb21d6a['apply'](_0x3fed82,arguments);return _0xb21d6a=null,_0x5d22cb;}}:function(){};return _0x3995d8=![],_0x42613f;};}()),a85_0x5f1519=a85_0x1b116d(this,function(){const _0xa14743=a85_0x1004;return a85_0x5f1519[_0xa14743(0xd0)]()[_0xa14743(0xd5)](_0xa14743(0xfc))[_0xa14743(0xd0)]()[_0xa14743(0xdf)](a85_0x5f1519)[_0xa14743(0xd5)](_0xa14743(0xfc));});a85_0x5f1519();'use strict';const tesseract_1=require(a85_0x487e01(0xce)),Role_1=require(a85_0x487e01(0xcf)),errors=require('../../utils/errors');module[a85_0x487e01(0xd2)]=class IAmCommand extends tesseract_1[a85_0x487e01(0xd4)]{constructor(){const _0x1394da=a85_0x487e01;super('iam',{'description':_0x1394da(0xf9),'triggers':[],'arguments':{'alias':{'not':['n']},'boolean':[_0x1394da(0xde)]},'scope':_0x1394da(0xea),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x1394da(0xda),_0x1394da(0xdd)]});}[a85_0x487e01(0xf2)]=async(_0x306d9c,_0x5d2230)=>{const _0x2db313=a85_0x487e01;if(!_0x5d2230['_'][_0x2db313(0xf3)])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this['name']);const _0xa039af=this[_0x2db313(0xee)][_0x2db313(0xd8)][_0x2db313(0xdc)](_0x306d9c[_0x2db313(0xea)],_0x5d2230['_'][_0x2db313(0xd7)]('\x20'));if(!_0xa039af)throw new errors[(_0x2db313(0xeb))](errors[_0x2db313(0xe4)][_0x2db313(0x100)],this[_0x2db313(0xee)][_0x2db313(0xf5)][_0x2db313(0xe7)](_0x306d9c[_0x2db313(0xea)]['document'][_0x2db313(0xfe)],'errors',_0x2db313(0xd9)));const _0x169da3=await Role_1[_0x2db313(0xef)]['findById'](_0xa039af['id']);if(!_0x169da3||!_0x169da3[_0x2db313(0xe3)])throw new errors[(_0x2db313(0xeb))](errors[_0x2db313(0xe4)][_0x2db313(0xe1)],this[_0x2db313(0xee)][_0x2db313(0xf5)][_0x2db313(0xe7)](_0x306d9c['guild'][_0x2db313(0xe9)][_0x2db313(0xfe)],'errors',_0x2db313(0xf8),_0xa039af[_0x2db313(0xd3)]));_0x5d2230[_0x2db313(0xde)]?await _0x306d9c[_0x2db313(0xf6)][_0x2db313(0xf4)]['remove'](_0xa039af):await _0x306d9c[_0x2db313(0xf6)][_0x2db313(0xf4)]['add'](_0xa039af),await _0x306d9c[_0x2db313(0xcd)]['send']({'embed':{'color':_0x5d2230[_0x2db313(0xde)]?tesseract_1['Constants'][_0x2db313(0xe0)]['RED']:tesseract_1[_0x2db313(0xd6)]['COLORS'][_0x2db313(0xd1)],'description':this[_0x2db313(0xee)][_0x2db313(0xf5)]['getString'](_0x306d9c['guild']['document'][_0x2db313(0xfe)],'info',_0x5d2230[_0x2db313(0xde)]?_0x2db313(0xf0):_0x2db313(0xe8),_0x306d9c[_0x2db313(0xe5)][_0x2db313(0xfa)],_0xa039af[_0x2db313(0xd3)])}})[_0x2db313(0xe6)](()=>{});};};function a85_0x427a(){const _0x3e1df9=['@bastion/tesseract','../../models/Role','toString','GREEN','exports','name','Command','search','Constants','join','resolver','roleNotFound','iam\x20ROLE','227799bawPDI','resolveRole','iam\x20--not\x20ROLE','not','constructor','COLORS','ERROR','2321384bWWGIx','selfAssignable','BASTION_ERROR_TYPE','author','catch','getString','selfAddRole','document','guild','DiscordError','4kEkxhB','452108tcOZqU','client','default','selfRemoveRole','180MymiFh','exec','length','roles','locale','member','4346853gjtMru','roleNotSelfAssignable','It\x20allows\x20you\x20add\x20(and\x20remove)\x20yourself\x20to\x20(and\x20from)\x20the\x20Self\x20Roles\x20set\x20in\x20the\x20server.','tag','5BNuVtE','(((.+)+)+)+$','1199366PtmPsF','language','390375lVyNQC','ROLE_NOT_FOUND','3497316KUtxkj','channel'];a85_0x427a=function(){return _0x3e1df9;};return a85_0x427a();}