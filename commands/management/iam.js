const a81_0x491d=['language','BASTION_ERROR_TYPE','name','It\x20allows\x20you\x20add\x20(and\x20remove)\x20yourself\x20to\x20(and\x20from)\x20the\x20Self\x20Roles\x20set\x20in\x20the\x20server.','length','GREEN','ROLE_NOT_FOUND','iam','Constants','info','test','client','roleNotFound','not','../../utils/errors','author','../../models/Role','channel','constructor','INVALID_COMMAND_SYNTAX','selfAddRole','exec','default','COLORS','join','DiscordError','resolver','@bastion/tesseract','selfRemoveRole','getString','roleNotSelfAssignable','iam\x20--not\x20ROLE','RED','return\x20/\x22\x20+\x20this\x20+\x20\x22/','document','roles','iam\x20ROLE','catch','Command','selfAssignable','errors','guild','locale','add','member'];(function(_0x30bfd9,_0x491d2d){const _0x4e5b91=function(_0x41797c){while(--_0x41797c){_0x30bfd9['push'](_0x30bfd9['shift']());}},_0x2825d4=function(){const _0x5cf8b0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x59d5af,_0x2bf085,_0x3523e7,_0x16f999){_0x16f999=_0x16f999||{};let _0x3d064d=_0x2bf085+'='+_0x3523e7,_0x3eaef2=0x0;for(let _0x4593a7=0x0,_0xcfc91c=_0x59d5af['length'];_0x4593a7<_0xcfc91c;_0x4593a7++){const _0x80a898=_0x59d5af[_0x4593a7];_0x3d064d+=';\x20'+_0x80a898;const _0x4ae109=_0x59d5af[_0x80a898];_0x59d5af['push'](_0x4ae109),_0xcfc91c=_0x59d5af['length'],_0x4ae109!==!![]&&(_0x3d064d+='='+_0x4ae109);}_0x16f999['cookie']=_0x3d064d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3b5c0c,_0x13ae62){_0x3b5c0c=_0x3b5c0c||function(_0x2d80d3){return _0x2d80d3;};const _0x9d481d=_0x3b5c0c(new RegExp('(?:^|;\x20)'+_0x13ae62['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4ef82f=function(_0x1184aa,_0x504321){_0x1184aa(++_0x504321);};return _0x4ef82f(_0x4e5b91,_0x491d2d),_0x9d481d?decodeURIComponent(_0x9d481d[0x1]):undefined;}},_0x340153=function(){const _0x294475=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x294475['test'](_0x5cf8b0['removeCookie']['toString']());};_0x5cf8b0['updateCookie']=_0x340153;let _0x15ea12='';const _0xe17908=_0x5cf8b0['updateCookie']();if(!_0xe17908)_0x5cf8b0['setCookie'](['*'],'counter',0x1);else _0xe17908?_0x15ea12=_0x5cf8b0['getCookie'](null,'counter'):_0x5cf8b0['removeCookie']();};_0x2825d4();}(a81_0x491d,0x88));const a81_0x4e5b=function(_0x30bfd9,_0x491d2d){_0x30bfd9=_0x30bfd9-0x0;let _0x4e5b91=a81_0x491d[_0x30bfd9];return _0x4e5b91;};const _0x265a9a=a81_0x4e5b,a81_0x5cf8b0=function(){let _0x15ea12=!![];return function(_0xe17908,_0x59d5af){const _0x2bf085=_0x15ea12?function(){if(_0x59d5af){const _0x3523e7=_0x59d5af['apply'](_0xe17908,arguments);return _0x59d5af=null,_0x3523e7;}}:function(){};return _0x15ea12=![],_0x2bf085;};}(),a81_0x41797c=a81_0x5cf8b0(this,function(){const _0x16f999=function(){const _0x5568dd=a81_0x4e5b,_0x3d064d=_0x16f999[_0x5568dd('0x11')](_0x5568dd('0x20'))()[_0x5568dd('0x11')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3d064d[_0x5568dd('0x9')](a81_0x41797c);};return _0x16f999();});a81_0x41797c();'use strict';const tesseract_1=require(_0x265a9a('0x1a')),Role_1=require(_0x265a9a('0xf')),errors=require(_0x265a9a('0xd'));module['exports']=class IAmCommand extends tesseract_1[_0x265a9a('0x25')]{constructor(){const _0x2c05ce=_0x265a9a;super(_0x2c05ce('0x6'),{'description':_0x2c05ce('0x2'),'triggers':[],'arguments':{'alias':{'not':['n']},'boolean':['not']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x2c05ce('0x23'),_0x2c05ce('0x1e')]}),this[_0x2c05ce('0x14')]=async(_0x3eaef2,_0x4593a7)=>{const _0x4111c1=_0x2c05ce;if(!_0x4593a7['_'][_0x4111c1('0x3')])throw new errors[(_0x4111c1('0x18'))](errors[_0x4111c1('0x0')][_0x4111c1('0x12')],this[_0x4111c1('0x1')]);const _0xcfc91c=this[_0x4111c1('0xa')][_0x4111c1('0x19')]['resolveRole'](_0x3eaef2[_0x4111c1('0x28')],_0x4593a7['_'][_0x4111c1('0x17')]('\x20'));if(!_0xcfc91c)throw new errors[(_0x4111c1('0x18'))](errors['BASTION_ERROR_TYPE'][_0x4111c1('0x5')],this[_0x4111c1('0xa')]['locale'][_0x4111c1('0x1c')](_0x3eaef2['guild'][_0x4111c1('0x21')][_0x4111c1('0x2c')],_0x4111c1('0x27'),_0x4111c1('0xb')));const _0x80a898=await Role_1[_0x4111c1('0x15')]['findById'](_0xcfc91c['id']);if(!_0x80a898||!_0x80a898[_0x4111c1('0x26')])throw new errors[(_0x4111c1('0x18'))](errors[_0x4111c1('0x0')]['ERROR'],this[_0x4111c1('0xa')]['locale']['getString'](_0x3eaef2[_0x4111c1('0x28')]['document'][_0x4111c1('0x2c')],_0x4111c1('0x27'),_0x4111c1('0x1d'),_0xcfc91c[_0x4111c1('0x1')]));_0x4593a7[_0x4111c1('0xc')]?await _0x3eaef2[_0x4111c1('0x2b')][_0x4111c1('0x22')]['remove'](_0xcfc91c):await _0x3eaef2[_0x4111c1('0x2b')]['roles'][_0x4111c1('0x2a')](_0xcfc91c),await _0x3eaef2[_0x4111c1('0x10')]['send']({'embed':{'color':_0x4593a7[_0x4111c1('0xc')]?tesseract_1[_0x4111c1('0x7')]['COLORS'][_0x4111c1('0x1f')]:tesseract_1[_0x4111c1('0x7')][_0x4111c1('0x16')][_0x4111c1('0x4')],'description':this[_0x4111c1('0xa')][_0x4111c1('0x29')][_0x4111c1('0x1c')](_0x3eaef2['guild'][_0x4111c1('0x21')][_0x4111c1('0x2c')],_0x4111c1('0x8'),_0x4593a7[_0x4111c1('0xc')]?_0x4111c1('0x1b'):_0x4111c1('0x13'),_0x3eaef2[_0x4111c1('0xe')]['tag'],_0xcfc91c[_0x4111c1('0x1')])}})[_0x4111c1('0x24')](()=>{});};}};