const a131_0x13d9=['Powered\x20by\x20Omnic','name','Wikipedia','DiscordError','guild','\x0a...','@bastion/tesseract','exec','length','source','channel','sanitize','send','return\x20/\x22\x20+\x20this\x20+\x20\x22/','/wikimedia/wikipedia/','title','makeRequest','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','slice','pages','query','apply','../../utils/omnic','It\x20allows\x20you\x20to\x20search\x20the\x20Wikipedia\x20for\x20the\x20specified\x20title.','json','exports','INVALID_COMMAND_SYNTAX','extract','../../utils/errors','Command','join','fullurl','Constants','BASTION_ERROR_TYPE','constructor','NOT_FOUND'];(function(_0x129139,_0x13d9ef){const _0x401446=function(_0x3ad704){while(--_0x3ad704){_0x129139['push'](_0x129139['shift']());}},_0x4ec689=function(){const _0x167921={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2b2517,_0x28e4ad,_0x5bf902,_0x3201e2){_0x3201e2=_0x3201e2||{};let _0x3162a6=_0x28e4ad+'='+_0x5bf902,_0x233213=0x0;for(let _0x2b1e88=0x0,_0x342e53=_0x2b2517['length'];_0x2b1e88<_0x342e53;_0x2b1e88++){const _0x29fac8=_0x2b2517[_0x2b1e88];_0x3162a6+=';\x20'+_0x29fac8;const _0x5754a8=_0x2b2517[_0x29fac8];_0x2b2517['push'](_0x5754a8),_0x342e53=_0x2b2517['length'],_0x5754a8!==!![]&&(_0x3162a6+='='+_0x5754a8);}_0x3201e2['cookie']=_0x3162a6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43a764,_0x3224ab){_0x43a764=_0x43a764||function(_0x1bab34){return _0x1bab34;};const _0x5bba24=_0x43a764(new RegExp('(?:^|;\x20)'+_0x3224ab['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x8291ad=function(_0x25cddf,_0xeb3e86){_0x25cddf(++_0xeb3e86);};return _0x8291ad(_0x401446,_0x13d9ef),_0x5bba24?decodeURIComponent(_0x5bba24[0x1]):undefined;}},_0x20d3c3=function(){const _0x44a0c1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x44a0c1['test'](_0x167921['removeCookie']['toString']());};_0x167921['updateCookie']=_0x20d3c3;let _0x16c8fb='';const _0x6e59b6=_0x167921['updateCookie']();if(!_0x6e59b6)_0x167921['setCookie'](['*'],'counter',0x1);else _0x6e59b6?_0x16c8fb=_0x167921['getCookie'](null,'counter'):_0x167921['removeCookie']();};_0x4ec689();}(a131_0x13d9,0xb2));const a131_0x4014=function(_0x129139,_0x13d9ef){_0x129139=_0x129139-0x0;let _0x401446=a131_0x13d9[_0x129139];return _0x401446;};const a131_0x167921=function(){let _0x16c8fb=!![];return function(_0x6e59b6,_0x2b2517){const _0x28e4ad=_0x16c8fb?function(){if(_0x2b2517){const _0x5bf902=_0x2b2517[a131_0x4014('0x17')](_0x6e59b6,arguments);return _0x2b2517=null,_0x5bf902;}}:function(){};return _0x16c8fb=![],_0x28e4ad;};}(),a131_0x3ad704=a131_0x167921(this,function(){const _0x3201e2=function(){const _0x3162a6=_0x3201e2[a131_0x4014('0x0')](a131_0x4014('0xf'))()[a131_0x4014('0x0')](a131_0x4014('0x13'));return!_0x3162a6['test'](a131_0x3ad704);};return _0x3201e2();});a131_0x3ad704();'use strict';const tesseract_1=require(a131_0x4014('0x8')),errors=require(a131_0x4014('0x1e')),omnic=require(a131_0x4014('0x18'));module[a131_0x4014('0x1b')]=class WikipediaCommand extends tesseract_1[a131_0x4014('0x1f')]{constructor(){super('wikipedia',{'description':a131_0x4014('0x19'),'triggers':[],'arguments':{},'scope':a131_0x4014('0x6'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['wikipedia\x20TITLE']}),this[a131_0x4014('0xd')]=_0x233213=>{return _0x233213['length']>0x7d0?_0x233213[a131_0x4014('0x14')](0x0,0x7d0)+a131_0x4014('0x7'):_0x233213;},this[a131_0x4014('0x9')]=async(_0x2b1e88,_0x342e53)=>{if(!_0x342e53['_'][a131_0x4014('0xa')])throw new errors[(a131_0x4014('0x5'))](errors[a131_0x4014('0x23')][a131_0x4014('0x1c')],this[a131_0x4014('0x3')]);const _0x29fac8=_0x342e53['_'][a131_0x4014('0x20')]('\x20'),_0x5754a8=await omnic[a131_0x4014('0x12')](a131_0x4014('0x10')+_0x29fac8),_0x43a764=await _0x5754a8[a131_0x4014('0x1a')]();if(!_0x43a764[a131_0x4014('0x16')]||!_0x43a764[a131_0x4014('0x16')][a131_0x4014('0x15')])throw new Error(a131_0x4014('0x1'));await _0x2b1e88[a131_0x4014('0xc')][a131_0x4014('0xe')]({'embed':{'color':tesseract_1[a131_0x4014('0x22')]['COLORS']['IRIS'],'author':{'name':a131_0x4014('0x4'),'url':'https://en.wikipedia.org/'},'title':_0x43a764[a131_0x4014('0x16')][a131_0x4014('0x15')][0x0][a131_0x4014('0x11')],'url':_0x43a764[a131_0x4014('0x16')]['pages'][0x0][a131_0x4014('0x21')],'description':this[a131_0x4014('0xd')](_0x43a764[a131_0x4014('0x16')]['pages'][0x0][a131_0x4014('0x1d')]),'image':{'url':_0x43a764[a131_0x4014('0x16')][a131_0x4014('0x15')][0x0]['thumbnail'][a131_0x4014('0xb')]},'footer':{'text':a131_0x4014('0x2')}}});};}};