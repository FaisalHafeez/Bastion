const a21_0x46e3=['channel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','COLORS','constructor','infraction','inviteFilterDisabled','RED','inviteFilter\x20--infraction','save','getString','Constants','filterInfractionDisabled','client','locale','filters','inviteFilter\x20--disable','inviteFilterEnable','@bastion/tesseract','tag','enabled','Command','exports','exec','disable','inviteFilterEnabled','guild','inviteFilter','GREEN','document','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','info','language','IRIS','enable'];(function(_0x73cbb2,_0x46e3a9){const _0x6b1675=function(_0x4ca438){while(--_0x4ca438){_0x73cbb2['push'](_0x73cbb2['shift']());}},_0x26b17a=function(){const _0x22c318={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3de9fa,_0x86928e,_0x2eacac,_0x1a9449){_0x1a9449=_0x1a9449||{};let _0x5b76ab=_0x86928e+'='+_0x2eacac,_0x4dbafd=0x0;for(let _0x226b0e=0x0,_0x195d60=_0x3de9fa['length'];_0x226b0e<_0x195d60;_0x226b0e++){const _0x3dc606=_0x3de9fa[_0x226b0e];_0x5b76ab+=';\x20'+_0x3dc606;const _0x4b0bac=_0x3de9fa[_0x3dc606];_0x3de9fa['push'](_0x4b0bac),_0x195d60=_0x3de9fa['length'],_0x4b0bac!==!![]&&(_0x5b76ab+='='+_0x4b0bac);}_0x1a9449['cookie']=_0x5b76ab;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1742a9,_0x1bb9ba){_0x1742a9=_0x1742a9||function(_0x56684b){return _0x56684b;};const _0x2f0182=_0x1742a9(new RegExp('(?:^|;\x20)'+_0x1bb9ba['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x24a7a4=function(_0x249ab6,_0x2c181f){_0x249ab6(++_0x2c181f);};return _0x24a7a4(_0x6b1675,_0x46e3a9),_0x2f0182?decodeURIComponent(_0x2f0182[0x1]):undefined;}},_0x46b9ff=function(){const _0x3283f0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3283f0['test'](_0x22c318['removeCookie']['toString']());};_0x22c318['updateCookie']=_0x46b9ff;let _0x452b91='';const _0x1c4afa=_0x22c318['updateCookie']();if(!_0x1c4afa)_0x22c318['setCookie'](['*'],'counter',0x1);else _0x1c4afa?_0x452b91=_0x22c318['getCookie'](null,'counter'):_0x22c318['removeCookie']();};_0x26b17a();}(a21_0x46e3,0x82));const a21_0x6b16=function(_0x73cbb2,_0x46e3a9){_0x73cbb2=_0x73cbb2-0x0;let _0x6b1675=a21_0x46e3[_0x73cbb2];return _0x6b1675;};const a21_0x2eacac=function(){let _0x2c6d79=!![];return function(_0x1c89fa,_0xf6abe7){const _0x42b3e8=_0x2c6d79?function(){if(_0xf6abe7){const _0x5adef9=_0xf6abe7['apply'](_0x1c89fa,arguments);return _0xf6abe7=null,_0x5adef9;}}:function(){};return _0x2c6d79=![],_0x42b3e8;};}(),a21_0x86928e=a21_0x2eacac(this,function(){const _0x1d8e18=function(){const _0x5347ea=_0x1d8e18['constructor'](a21_0x6b16('0x7'))()[a21_0x6b16('0x9')](a21_0x6b16('0x1'));return!_0x5347ea['test'](a21_0x86928e);};return _0x1d8e18();});a21_0x86928e();'use strict';const tesseract_1=require(a21_0x6b16('0x17'));module[a21_0x6b16('0x1b')]=class InviteFilterCommand extends tesseract_1[a21_0x6b16('0x1a')]{constructor(){super(a21_0x6b16('0x20'),{'description':'It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Invite\x20Filter\x20in\x20the\x20server.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','triggers':[],'arguments':{'alias':{'disable':['d'],'enable':['e'],'infraction':['i']},'boolean':[a21_0x6b16('0x1d'),a21_0x6b16('0x5'),a21_0x6b16('0xa')]},'scope':a21_0x6b16('0x1f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':['inviteFilter','inviteFilter\x20--enable',a21_0x6b16('0x15'),a21_0x6b16('0xd'),'inviteFilter\x20--no-infraction']}),this[a21_0x6b16('0x1c')]=async(_0x36193d,_0x3bd6bc)=>{const _0x2b138e=_0x36193d['guild'];_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')]={..._0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')],'inviteFilter':{'enabled':_0x3bd6bc[a21_0x6b16('0x1d')]?undefined:_0x3bd6bc[a21_0x6b16('0x5')]||_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')]&&_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')][a21_0x6b16('0x20')]&&_0x2b138e['document'][a21_0x6b16('0x14')]['inviteFilter'][a21_0x6b16('0x19')]?!![]:undefined,'infraction':_0x3bd6bc['infraction']===![]?undefined:_0x3bd6bc[a21_0x6b16('0xa')]||_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')]&&_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')][a21_0x6b16('0x20')]&&_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')][a21_0x6b16('0x20')]['infraction']?!![]:undefined}},await _0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0xe')](),await _0x36193d[a21_0x6b16('0x6')]['send']({'embed':{'color':_0x3bd6bc[a21_0x6b16('0x5')]?tesseract_1[a21_0x6b16('0x10')][a21_0x6b16('0x8')][a21_0x6b16('0x21')]:_0x3bd6bc[a21_0x6b16('0x1d')]?tesseract_1[a21_0x6b16('0x10')][a21_0x6b16('0x8')][a21_0x6b16('0xc')]:tesseract_1['Constants'][a21_0x6b16('0x8')][a21_0x6b16('0x4')],'description':this[a21_0x6b16('0x12')][a21_0x6b16('0x13')]['getString'](_0x36193d[a21_0x6b16('0x1f')][a21_0x6b16('0x0')][a21_0x6b16('0x3')],a21_0x6b16('0x2'),_0x3bd6bc['enable']?a21_0x6b16('0x16'):_0x3bd6bc[a21_0x6b16('0x1d')]?'inviteFilterDisable':_0x2b138e[a21_0x6b16('0x0')]['filters'][a21_0x6b16('0x20')][a21_0x6b16('0x19')]?a21_0x6b16('0x1e'):a21_0x6b16('0xb'),_0x36193d['author'][a21_0x6b16('0x18')]),'footer':{'text':_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')][a21_0x6b16('0x20')][a21_0x6b16('0x19')]?this[a21_0x6b16('0x12')][a21_0x6b16('0x13')][a21_0x6b16('0xf')](_0x36193d['guild'][a21_0x6b16('0x0')][a21_0x6b16('0x3')],'info',_0x2b138e[a21_0x6b16('0x0')][a21_0x6b16('0x14')][a21_0x6b16('0x20')][a21_0x6b16('0xa')]?'filterInfractionEnabled':a21_0x6b16('0x11')):''}}})['catch'](()=>{});};}};