const a105_0x6c0b=['toLowerCase','exec','send','INVALID_COMMAND_SYNTAX','test','Command','error','../../utils/omnic','DiscordError','Fortnite\x20-\x20Player\x20Stats','map','channel','apply','psn','exports','lifeTimeStats','/playerstats/fortnite/','platformNameLong','BASTION_ERROR_TYPE','makeRequest','toUpperCase','@bastion/tesseract','xbl','value','constructor','../../utils/errors','platform','fortnite','join','key','../../utils/constants','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Fortnite\x20player\x20in\x20any\x20supported\x20platform.','fortnite\x20USERNAME','epicUserHandle','json'];(function(_0x525c4a,_0x6c0bbf){const _0x18db05=function(_0x18d1c2){while(--_0x18d1c2){_0x525c4a['push'](_0x525c4a['shift']());}},_0x5dd5a7=function(){const _0x44a6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3216ea,_0x4f82d9,_0x34df91,_0x1f171d){_0x1f171d=_0x1f171d||{};let _0x93e614=_0x4f82d9+'='+_0x34df91,_0x1e3b1c=0x0;for(let _0x508b99=0x0,_0x404c79=_0x3216ea['length'];_0x508b99<_0x404c79;_0x508b99++){const _0xfd9c5a=_0x3216ea[_0x508b99];_0x93e614+=';\x20'+_0xfd9c5a;const _0x3c7e62=_0x3216ea[_0xfd9c5a];_0x3216ea['push'](_0x3c7e62),_0x404c79=_0x3216ea['length'],_0x3c7e62!==!![]&&(_0x93e614+='='+_0x3c7e62);}_0x1f171d['cookie']=_0x93e614;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3465e1,_0x3bb0b1){_0x3465e1=_0x3465e1||function(_0x483233){return _0x483233;};const _0x40d637=_0x3465e1(new RegExp('(?:^|;\x20)'+_0x3bb0b1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x64f2bc=function(_0xfa1704,_0x404c8e){_0xfa1704(++_0x404c8e);};return _0x64f2bc(_0x18db05,_0x6c0bbf),_0x40d637?decodeURIComponent(_0x40d637[0x1]):undefined;}},_0x40b532=function(){const _0x211b51=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x211b51['test'](_0x44a6['removeCookie']['toString']());};_0x44a6['updateCookie']=_0x40b532;let _0x12cc27='';const _0x51205a=_0x44a6['updateCookie']();if(!_0x51205a)_0x44a6['setCookie'](['*'],'counter',0x1);else _0x51205a?_0x12cc27=_0x44a6['getCookie'](null,'counter'):_0x44a6['removeCookie']();};_0x5dd5a7();}(a105_0x6c0b,0x1be));const a105_0x18db=function(_0x525c4a,_0x6c0bbf){_0x525c4a=_0x525c4a-0x0;let _0x18db05=a105_0x6c0b[_0x525c4a];return _0x18db05;};const a105_0x34df91=function(){let _0xd52194=!![];return function(_0x5a9d9f,_0x14b3f9){const _0x54656e=_0xd52194?function(){if(_0x14b3f9){const _0x217b5f=_0x14b3f9[a105_0x18db('0x22')](_0x5a9d9f,arguments);return _0x14b3f9=null,_0x217b5f;}}:function(){};return _0xd52194=![],_0x54656e;};}(),a105_0x4f82d9=a105_0x34df91(this,function(){const _0x268d0b=function(){const _0x121257=_0x268d0b[a105_0x18db('0xa')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a105_0x18db('0xa')](a105_0x18db('0x11'));return!_0x121257[a105_0x18db('0x1a')](a105_0x4f82d9);};return _0x268d0b();});a105_0x4f82d9();'use strict';const tesseract_1=require(a105_0x18db('0x7')),constants=require(a105_0x18db('0x10')),errors=require(a105_0x18db('0xb')),omnic=require(a105_0x18db('0x1d'));module[a105_0x18db('0x0')]=class FortniteCommand extends tesseract_1[a105_0x18db('0x1b')]{constructor(){super(a105_0x18db('0xd'),{'description':a105_0x18db('0x12'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':[a105_0x18db('0xc')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a105_0x18db('0x13'),'fortnite\x20USERNAME\x20--platform\x20PLATFORM']}),this[a105_0x18db('0x17')]=async(_0x189b1f,_0x417dbb)=>{if(!_0x417dbb['_']['length'])throw new errors[(a105_0x18db('0x1e'))](errors[a105_0x18db('0x4')][a105_0x18db('0x19')],this['name']);const _0x3ceed2=_0x417dbb['_'][a105_0x18db('0xe')]('\x20'),_0x46ecf3=_0x417dbb['platform']&&this['platforms']['includes'](_0x417dbb['platform'][a105_0x18db('0x16')]())?_0x417dbb['platform'][a105_0x18db('0x16')]():this['platforms'][0x0],_0x4e7367=await omnic[a105_0x18db('0x5')](a105_0x18db('0x2')+_0x46ecf3+'/'+encodeURIComponent(_0x3ceed2)),_0x472665=await _0x4e7367[a105_0x18db('0x15')]();if(_0x472665[a105_0x18db('0x1c')])throw new Error(_0x472665[a105_0x18db('0x1c')]);await _0x189b1f[a105_0x18db('0x21')][a105_0x18db('0x18')]({'embed':{'color':constants['COLORS']['FORTNITE'],'author':{'name':_0x472665[a105_0x18db('0x14')]},'title':a105_0x18db('0x1f'),'fields':_0x472665[a105_0x18db('0x1')][a105_0x18db('0x20')](_0x193530=>({'name':_0x193530[a105_0x18db('0xf')],'value':_0x193530[a105_0x18db('0x9')],'inline':!![]})),'footer':{'text':_0x472665[a105_0x18db('0x3')][a105_0x18db('0x6')]()+'\x20•\x20Powered\x20by\x20Fortnite\x20Tracker'}}});},this['platforms']=['pc',a105_0x18db('0x23'),a105_0x18db('0x8')];}};