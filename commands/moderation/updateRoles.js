const a105_0x2d75=['unauthorized','BASTION_ERROR_TYPE','Reason','highest','roles','toBulletList','test','map','apply','getString','member','canManage','catch','ORANGE','info','filter','resolver','resolveRoles','set','It\x20allows\x20you\x20to\x20update\x20roles\x20of\x20server\x20members.','comparePositionTo','../../utils/errors','user','author','ownerID','removeAll','length','locale','name','client','INVALID_COMMAND_SYNTAX','memberRoleUpdate','MANAGE_ROLES','../../utils/arrays','language','channel','add','constructor','COLORS','```','Role\x20Changes','tag','guild','remove','send','@bastion/tesseract','errors','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Constants','DiscordError','document'];(function(_0x39aa8a,_0x2d758f){const _0x19db60=function(_0x46d795){while(--_0x46d795){_0x39aa8a['push'](_0x39aa8a['shift']());}},_0x10939a=function(){const _0x1d5038={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x254f76,_0x31d2f2,_0x556f15,_0x31509a){_0x31509a=_0x31509a||{};let _0x583955=_0x31d2f2+'='+_0x556f15,_0x420309=0x0;for(let _0x3bc4fb=0x0,_0x339ec8=_0x254f76['length'];_0x3bc4fb<_0x339ec8;_0x3bc4fb++){const _0x479d84=_0x254f76[_0x3bc4fb];_0x583955+=';\x20'+_0x479d84;const _0x22f9d3=_0x254f76[_0x479d84];_0x254f76['push'](_0x22f9d3),_0x339ec8=_0x254f76['length'],_0x22f9d3!==!![]&&(_0x583955+='='+_0x22f9d3);}_0x31509a['cookie']=_0x583955;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3d9bf8,_0x4e98ff){_0x3d9bf8=_0x3d9bf8||function(_0x337170){return _0x337170;};const _0x267831=_0x3d9bf8(new RegExp('(?:^|;\x20)'+_0x4e98ff['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4a38be=function(_0x424d17,_0x323ec2){_0x424d17(++_0x323ec2);};return _0x4a38be(_0x19db60,_0x2d758f),_0x267831?decodeURIComponent(_0x267831[0x1]):undefined;}},_0x2febf5=function(){const _0x300134=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x300134['test'](_0x1d5038['removeCookie']['toString']());};_0x1d5038['updateCookie']=_0x2febf5;let _0x5bf854='';const _0x1aa700=_0x1d5038['updateCookie']();if(!_0x1aa700)_0x1d5038['setCookie'](['*'],'counter',0x1);else _0x1aa700?_0x5bf854=_0x1d5038['getCookie'](null,'counter'):_0x1d5038['removeCookie']();};_0x10939a();}(a105_0x2d75,0xf7));const a105_0x19db=function(_0x39aa8a,_0x2d758f){_0x39aa8a=_0x39aa8a-0x0;let _0x19db60=a105_0x2d75[_0x39aa8a];return _0x19db60;};const _0x4849c1=a105_0x19db,a105_0x1d5038=function(){let _0x5bf854=!![];return function(_0x1aa700,_0x254f76){const _0x31d2f2=_0x5bf854?function(){const _0x514e2c=a105_0x19db;if(_0x254f76){const _0x556f15=_0x254f76[_0x514e2c('0x10')](_0x1aa700,arguments);return _0x254f76=null,_0x556f15;}}:function(){};return _0x5bf854=![],_0x31d2f2;};}(),a105_0x46d795=a105_0x1d5038(this,function(){const _0x31509a=function(){const _0x3e9a4b=a105_0x19db,_0x583955=_0x31509a[_0x3e9a4b('0x2d')](_0x3e9a4b('0x4'))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x583955[_0x3e9a4b('0xe')](a105_0x46d795);};return _0x31509a();});a105_0x46d795();'use strict';const tesseract_1=require(_0x4849c1('0x2')),arrays=require(_0x4849c1('0x29')),errors=require(_0x4849c1('0x1d'));module['exports']=class UpdateRoles extends tesseract_1['Command']{constructor(){const _0x46fc2f=_0x4849c1;super('updateRoles',{'description':_0x46fc2f('0x1b'),'triggers':[],'arguments':{'alias':{'add':'a','remove':'r','user':'u'},'array':['add','remove'],'boolean':['removeAll'],'string':[_0x46fc2f('0x2c'),_0x46fc2f('0x0'),'user']},'scope':_0x46fc2f('0x32'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x46fc2f('0x28')],'userPermissions':[_0x46fc2f('0x28')],'syntax':['updateRoles\x20--user\x20USER_ID\x20--add\x20ROLE_ID','updateRoles\x20--user\x20USER_ID\x20--remove\x20ROLE_ID','updateRoles\x20--user\x20USER_ID\x20--remove-all']}),this['exec']=async(_0x420309,_0x3bc4fb)=>{const _0x5aa7d3=_0x46fc2f,_0x339ec8=this[_0x5aa7d3('0x25')][_0x5aa7d3('0x18')]['resolveGuildMember'](_0x420309[_0x5aa7d3('0x32')],_0x3bc4fb[_0x5aa7d3('0x1e')]);let _0x479d84=this[_0x5aa7d3('0x25')][_0x5aa7d3('0x18')][_0x5aa7d3('0x19')](_0x420309[_0x5aa7d3('0x32')],_0x3bc4fb['add']),_0x22f9d3=this[_0x5aa7d3('0x25')][_0x5aa7d3('0x18')]['resolveRoles'](_0x420309[_0x5aa7d3('0x32')],_0x3bc4fb[_0x5aa7d3('0x0')]);if(!_0x339ec8||!_0x479d84[_0x5aa7d3('0x22')]&&!_0x22f9d3[_0x5aa7d3('0x22')])throw new errors[(_0x5aa7d3('0x6'))](errors[_0x5aa7d3('0x9')][_0x5aa7d3('0x26')],this[_0x5aa7d3('0x24')]);if(_0x420309[_0x5aa7d3('0x1f')]['id']!==_0x420309['guild'][_0x5aa7d3('0x20')]&&_0x420309[_0x5aa7d3('0x12')][_0x5aa7d3('0x13')](_0x339ec8)){_0x479d84=_0x479d84['filter'](_0x4e98ff=>_0x420309[_0x5aa7d3('0x12')][_0x5aa7d3('0xc')][_0x5aa7d3('0xb')][_0x5aa7d3('0x1c')](_0x4e98ff)>0x0),_0x22f9d3=_0x22f9d3[_0x5aa7d3('0x17')](_0x267831=>_0x420309[_0x5aa7d3('0x12')][_0x5aa7d3('0xc')]['highest'][_0x5aa7d3('0x1c')](_0x267831)>0x0);if(!_0x479d84[_0x5aa7d3('0x22')]&&!_0x22f9d3[_0x5aa7d3('0x22')])return await _0x420309[_0x5aa7d3('0x2b')][_0x5aa7d3('0x1')]({'embed':{'color':tesseract_1[_0x5aa7d3('0x5')][_0x5aa7d3('0x2e')]['RED'],'title':this['client'][_0x5aa7d3('0x23')]['getString'](_0x420309[_0x5aa7d3('0x32')][_0x5aa7d3('0x7')][_0x5aa7d3('0x2a')],_0x5aa7d3('0x3'),_0x5aa7d3('0x8')),'description':this[_0x5aa7d3('0x25')][_0x5aa7d3('0x23')][_0x5aa7d3('0x11')](_0x420309['guild'][_0x5aa7d3('0x7')][_0x5aa7d3('0x2a')],_0x5aa7d3('0x3'),'rolePosition',_0x420309['author'][_0x5aa7d3('0x31')],_0x339ec8[_0x5aa7d3('0x1e')][_0x5aa7d3('0x31')])}})[_0x5aa7d3('0x14')](()=>{});}const _0x3d9bf8=_0x3bc4fb['_']['join']('\x20')||'-';if(_0x479d84[_0x5aa7d3('0x22')])await _0x339ec8['roles'][_0x5aa7d3('0x2c')](_0x479d84,_0x3d9bf8);if(_0x3bc4fb[_0x5aa7d3('0x21')])await _0x339ec8[_0x5aa7d3('0xc')][_0x5aa7d3('0x1a')]([],_0x3d9bf8);else{if(_0x22f9d3[_0x5aa7d3('0x22')])await _0x339ec8[_0x5aa7d3('0xc')][_0x5aa7d3('0x0')](_0x22f9d3,_0x3d9bf8);}await _0x420309[_0x5aa7d3('0x2b')][_0x5aa7d3('0x1')]({'embed':{'color':tesseract_1[_0x5aa7d3('0x5')][_0x5aa7d3('0x2e')][_0x5aa7d3('0x15')],'description':this['client'][_0x5aa7d3('0x23')]['getString'](_0x420309[_0x5aa7d3('0x32')]['document'][_0x5aa7d3('0x2a')],_0x5aa7d3('0x16'),_0x5aa7d3('0x27'),_0x420309['author'][_0x5aa7d3('0x31')],_0x339ec8[_0x5aa7d3('0x1e')][_0x5aa7d3('0x31')]),'fields':[{'name':_0x5aa7d3('0x30'),'value':'```diff\x0a'+arrays[_0x5aa7d3('0xd')](_0x479d84[_0x5aa7d3('0xf')](_0x4a38be=>_0x4a38be['name']),'+')+arrays[_0x5aa7d3('0xd')](_0x22f9d3[_0x5aa7d3('0xf')](_0x337170=>_0x337170[_0x5aa7d3('0x24')]),'-')+_0x5aa7d3('0x2f')},{'name':_0x5aa7d3('0xa'),'value':_0x3d9bf8}],'footer':{'text':_0x339ec8['id']}}})[_0x5aa7d3('0x14')](()=>{});};}};