const a136_0x2ce5=['node-fetch','constructor','followRedirects\x20URL','name','length','default','@bastion/tesseract','COLORS','exports','INVALID_COMMAND_SYNTAX','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/errors','It\x20follows\x20all\x20the\x20redirects\x20in\x20the\x20specified\x20URL\x20and\x20allows\x20you\x20to\x20see\x20the\x20final\x20URL.','HEAD','test','followRedirects','apply','followURL','URL','send','Original\x20URL','DiscordError','exec','channel'];(function(_0x1055dc,_0x2ce5cd){const _0x33616d=function(_0x1c6cb1){while(--_0x1c6cb1){_0x1055dc['push'](_0x1055dc['shift']());}},_0x3d2adf=function(){const _0x282874={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x49bbcd,_0x4bb82e,_0x30fdde,_0x3dfe44){_0x3dfe44=_0x3dfe44||{};let _0x764198=_0x4bb82e+'='+_0x30fdde,_0x509600=0x0;for(let _0xf09bd9=0x0,_0x6bd655=_0x49bbcd['length'];_0xf09bd9<_0x6bd655;_0xf09bd9++){const _0x55fb58=_0x49bbcd[_0xf09bd9];_0x764198+=';\x20'+_0x55fb58;const _0x224c1e=_0x49bbcd[_0x55fb58];_0x49bbcd['push'](_0x224c1e),_0x6bd655=_0x49bbcd['length'],_0x224c1e!==!![]&&(_0x764198+='='+_0x224c1e);}_0x3dfe44['cookie']=_0x764198;},'removeCookie':function(){return'dev';},'getCookie':function(_0x916e95,_0x1e14a9){_0x916e95=_0x916e95||function(_0x4d3407){return _0x4d3407;};const _0x6a6b6e=_0x916e95(new RegExp('(?:^|;\x20)'+_0x1e14a9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x44c2bc=function(_0x2b57b0,_0x33022b){_0x2b57b0(++_0x33022b);};return _0x44c2bc(_0x33616d,_0x2ce5cd),_0x6a6b6e?decodeURIComponent(_0x6a6b6e[0x1]):undefined;}},_0x23df40=function(){const _0xb02826=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xb02826['test'](_0x282874['removeCookie']['toString']());};_0x282874['updateCookie']=_0x23df40;let _0x186db0='';const _0xce7b97=_0x282874['updateCookie']();if(!_0xce7b97)_0x282874['setCookie'](['*'],'counter',0x1);else _0xce7b97?_0x186db0=_0x282874['getCookie'](null,'counter'):_0x282874['removeCookie']();};_0x3d2adf();}(a136_0x2ce5,0xa8));const a136_0x3361=function(_0x1055dc,_0x2ce5cd){_0x1055dc=_0x1055dc-0x0;let _0x33616d=a136_0x2ce5[_0x1055dc];return _0x33616d;};const a136_0x30fdde=function(){let _0x2ea3fa=!![];return function(_0x425b66,_0x1313cf){const _0x56ef84=_0x2ea3fa?function(){if(_0x1313cf){const _0x235589=_0x1313cf[a136_0x3361('0x10')](_0x425b66,arguments);return _0x1313cf=null,_0x235589;}}:function(){};return _0x2ea3fa=![],_0x56ef84;};}(),a136_0x4bb82e=a136_0x30fdde(this,function(){const _0x24ceb2=function(){const _0x66f344=_0x24ceb2['constructor'](a136_0x3361('0xa'))()[a136_0x3361('0x1')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x66f344[a136_0x3361('0xe')](a136_0x4bb82e);};return _0x24ceb2();});a136_0x4bb82e();'use strict';const tesseract_1=require(a136_0x3361('0x6')),node_fetch_1=require(a136_0x3361('0x0')),errors=require(a136_0x3361('0xb'));module[a136_0x3361('0x8')]=class FollowRedirectsCommand extends tesseract_1['Command']{constructor(){super(a136_0x3361('0xf'),{'description':a136_0x3361('0xc'),'triggers':[a136_0x3361('0x11')],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a136_0x3361('0x2')]}),this[a136_0x3361('0x16')]=async(_0x2b18fa,_0x504cc8)=>{if(!_0x504cc8['_'][a136_0x3361('0x4')])throw new errors[(a136_0x3361('0x15'))](errors['BASTION_ERROR_TYPE'][a136_0x3361('0x9')],this[a136_0x3361('0x3')]);const _0x4b5eb5=_0x504cc8['_']['join']('\x20'),_0x184cef=await node_fetch_1[a136_0x3361('0x5')](_0x4b5eb5,{'method':a136_0x3361('0xd'),'redirect':'follow'});await _0x2b18fa[a136_0x3361('0x17')][a136_0x3361('0x13')]({'embed':{'color':tesseract_1['Constants'][a136_0x3361('0x7')]['IRIS'],'fields':[{'name':a136_0x3361('0x12'),'value':_0x4b5eb5},{'name':a136_0x3361('0x14'),'value':_0x184cef['url']}]}});};}};