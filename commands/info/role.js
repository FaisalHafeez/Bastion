const a57_0x1210=['Page\x20','role\x20ROLE\x20--members\x20PAGE','map','Command','bitfield','language','locale','cache','\x20Role','\x20of\x20','items','displayName','join','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Created','getString','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BASTION_ERROR_TYPE','user','\x20/\x20','members','../../utils/pagination','resolveRole','guild','toString','Role\x20Members','toArray','roleInfo','color','Permissions','managed','roleNotFound','toUTCString','snakeToTitleCase','rawPosition','roles','Position','channel','size','Members','test','name','DiscordError','page','Hoisted\x20•\x20','permissions','../../utils/errors','\x20Members','client','document'];(function(_0xac5710,_0x121030){const _0x477df7=function(_0x3c5e08){while(--_0x3c5e08){_0xac5710['push'](_0xac5710['shift']());}},_0x464509=function(){const _0x267614={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2bd5ee,_0x291b61,_0x24275f,_0x5a6667){_0x5a6667=_0x5a6667||{};let _0x2be19=_0x291b61+'='+_0x24275f,_0x3b6fbe=0x0;for(let _0x2dd034=0x0,_0x3bb877=_0x2bd5ee['length'];_0x2dd034<_0x3bb877;_0x2dd034++){const _0x4c7733=_0x2bd5ee[_0x2dd034];_0x2be19+=';\x20'+_0x4c7733;const _0x196f59=_0x2bd5ee[_0x4c7733];_0x2bd5ee['push'](_0x196f59),_0x3bb877=_0x2bd5ee['length'],_0x196f59!==!![]&&(_0x2be19+='='+_0x196f59);}_0x5a6667['cookie']=_0x2be19;},'removeCookie':function(){return'dev';},'getCookie':function(_0x525a03,_0x4f97d5){_0x525a03=_0x525a03||function(_0xff1d61){return _0xff1d61;};const _0x56ed0c=_0x525a03(new RegExp('(?:^|;\x20)'+_0x4f97d5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4f2df1=function(_0x36a1f2,_0x4a1f0d){_0x36a1f2(++_0x4a1f0d);};return _0x4f2df1(_0x477df7,_0x121030),_0x56ed0c?decodeURIComponent(_0x56ed0c[0x1]):undefined;}},_0x14c9fb=function(){const _0x3a1ff3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3a1ff3['test'](_0x267614['removeCookie']['toString']());};_0x267614['updateCookie']=_0x14c9fb;let _0x7a730c='';const _0x3f857e=_0x267614['updateCookie']();if(!_0x3f857e)_0x267614['setCookie'](['*'],'counter',0x1);else _0x3f857e?_0x7a730c=_0x267614['getCookie'](null,'counter'):_0x267614['removeCookie']();};_0x464509();}(a57_0x1210,0x91));const a57_0x477d=function(_0xac5710,_0x121030){_0xac5710=_0xac5710-0x0;let _0x477df7=a57_0x1210[_0xac5710];return _0x477df7;};const a57_0x267614=function(){let _0x7a730c=!![];return function(_0x3f857e,_0x2bd5ee){const _0x291b61=_0x7a730c?function(){if(_0x2bd5ee){const _0x24275f=_0x2bd5ee['apply'](_0x3f857e,arguments);return _0x2bd5ee=null,_0x24275f;}}:function(){};return _0x7a730c=![],_0x291b61;};}(),a57_0x3c5e08=a57_0x267614(this,function(){const _0x5a6667=function(){const _0x2be19=_0x5a6667['constructor'](a57_0x477d('0x15'))()['constructor'](a57_0x477d('0x12'));return!_0x2be19[a57_0x477d('0x2d')](a57_0x3c5e08);};return _0x5a6667();});a57_0x3c5e08();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a57_0x477d('0x1')),pagination=require(a57_0x477d('0x1a')),strings=require('../../utils/strings');module['exports']=class RoleCommand extends tesseract_1[a57_0x477d('0x8')]{constructor(){super('role',{'description':'It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20role.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20members\x20in\x20a\x20role.','triggers':[a57_0x477d('0x20')],'arguments':{'alias':{'members':['m']},'number':[a57_0x477d('0x19')]},'scope':a57_0x477d('0x1c'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['role\x20ROLE',a57_0x477d('0x6')]}),this['exec']=async(_0x3b6fbe,_0x2dd034)=>{const _0x3bb877=_0x2dd034['_'][a57_0x477d('0x11')]('\x20'),_0x4c7733=this[a57_0x477d('0x3')]['resolver'][a57_0x477d('0x1b')](_0x3b6fbe[a57_0x477d('0x1c')],_0x3bb877);if(!_0x4c7733)throw new errors[(a57_0x477d('0x2f'))](errors[a57_0x477d('0x16')]['ROLE_NOT_FOUND'],this[a57_0x477d('0x3')][a57_0x477d('0xb')][a57_0x477d('0x14')](_0x3b6fbe[a57_0x477d('0x1c')][a57_0x477d('0x4')][a57_0x477d('0xa')],'errors',a57_0x477d('0x24')));if(_0x2dd034['members']){const _0x196f59=pagination['paginate']([..._0x4c7733[a57_0x477d('0x19')]['values']()],_0x2dd034[a57_0x477d('0x19')]);return await _0x3b6fbe[a57_0x477d('0x2a')]['send']({'embed':{'color':_0x4c7733[a57_0x477d('0x21')],'author':{'name':_0x4c7733[a57_0x477d('0x2e')]},'title':a57_0x477d('0x1e'),'fields':_0x196f59[a57_0x477d('0xf')][a57_0x477d('0x7')](_0x525a03=>({'name':_0x525a03[a57_0x477d('0x10')],'value':_0x525a03[a57_0x477d('0x17')]['tag']+a57_0x477d('0x18')+_0x525a03['id']})),'footer':{'text':a57_0x477d('0x5')+_0x196f59[a57_0x477d('0x30')]+a57_0x477d('0xe')+_0x196f59['pages']}}});}return await _0x3b6fbe['channel']['send']({'embed':{'color':_0x4c7733[a57_0x477d('0x21')],'author':{'name':_0x4c7733[a57_0x477d('0x2e')]},'title':(_0x4c7733[a57_0x477d('0x23')]?'Managed':'')+a57_0x477d('0xd'),'fields':[{'name':a57_0x477d('0x29'),'value':(_0x3b6fbe['guild'][a57_0x477d('0x28')][a57_0x477d('0xc')]['size']-_0x4c7733[a57_0x477d('0x27')])[a57_0x477d('0x1d')](),'inline':!![]},{'name':a57_0x477d('0x2c'),'value':_0x4c7733[a57_0x477d('0x19')][a57_0x477d('0x2b')]+a57_0x477d('0x2'),'inline':!![]},{'name':a57_0x477d('0x13'),'value':_0x4c7733['createdAt'][a57_0x477d('0x25')](),'inline':!![]},{'name':a57_0x477d('0x22'),'value':_0x4c7733[a57_0x477d('0x0')][a57_0x477d('0x9')]?_0x4c7733[a57_0x477d('0x0')][a57_0x477d('0x1f')]()[a57_0x477d('0x7')](_0x4f97d5=>strings[a57_0x477d('0x26')](_0x4f97d5))[a57_0x477d('0x11')](',\x20'):'-'}],'footer':{'text':(_0x4c7733['hoist']?a57_0x477d('0x31'):'')+_0x4c7733['id']}}});};}};