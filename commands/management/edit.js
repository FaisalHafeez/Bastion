const a78_0x41e5=['language','tag','It\x20allows\x20you\x20to\x20edit\x20any\x20message\x20sent\x20by\x20Bastion\x20in\x20the\x20current\x20channel.','editable','guild','join','Command','locale','parse','roleNotFound','ROLE_NOT_FOUND','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','edit\x20--message\x20MESSAGE_ID\x20--\x20NEW\x20MESSAGE','../../utils/embeds','exec','length','edit','@bastion/tesseract','errors','INVALID_COMMAND_SYNTAX','test','constructor','react','DiscordError','document','BASTION_ERROR_TYPE','INVALID_BASTION_EMBED','../../utils/errors','author','message','generateEmbed','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x508616,_0x41e56c){const _0x51b188=function(_0x231798){while(--_0x231798){_0x508616['push'](_0x508616['shift']());}},_0x49dc78=function(){const _0x207bb2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5c4eae,_0x34c716,_0x2c3c0d,_0x5ded86){_0x5ded86=_0x5ded86||{};let _0x37d805=_0x34c716+'='+_0x2c3c0d,_0x19f5c0=0x0;for(let _0x3e18f2=0x0,_0x1dd11d=_0x5c4eae['length'];_0x3e18f2<_0x1dd11d;_0x3e18f2++){const _0x1710c7=_0x5c4eae[_0x3e18f2];_0x37d805+=';\x20'+_0x1710c7;const _0x37bc70=_0x5c4eae[_0x1710c7];_0x5c4eae['push'](_0x37bc70),_0x1dd11d=_0x5c4eae['length'],_0x37bc70!==!![]&&(_0x37d805+='='+_0x37bc70);}_0x5ded86['cookie']=_0x37d805;},'removeCookie':function(){return'dev';},'getCookie':function(_0x485e84,_0xfa0706){_0x485e84=_0x485e84||function(_0x5619db){return _0x5619db;};const _0x1d887f=_0x485e84(new RegExp('(?:^|;\x20)'+_0xfa0706['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2d00e1=function(_0x24f5cb,_0x30ac5c){_0x24f5cb(++_0x30ac5c);};return _0x2d00e1(_0x51b188,_0x41e56c),_0x1d887f?decodeURIComponent(_0x1d887f[0x1]):undefined;}},_0x46525e=function(){const _0x1c6e0e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c6e0e['test'](_0x207bb2['removeCookie']['toString']());};_0x207bb2['updateCookie']=_0x46525e;let _0x359284='';const _0x5aebee=_0x207bb2['updateCookie']();if(!_0x5aebee)_0x207bb2['setCookie'](['*'],'counter',0x1);else _0x5aebee?_0x359284=_0x207bb2['getCookie'](null,'counter'):_0x207bb2['removeCookie']();};_0x49dc78();}(a78_0x41e5,0xb4));const a78_0x51b1=function(_0x508616,_0x41e56c){_0x508616=_0x508616-0x0;let _0x51b188=a78_0x41e5[_0x508616];return _0x51b188;};const _0x29aa9d=a78_0x51b1,a78_0x207bb2=function(){let _0x359284=!![];return function(_0x5aebee,_0x5c4eae){const _0x34c716=_0x359284?function(){if(_0x5c4eae){const _0x2c3c0d=_0x5c4eae['apply'](_0x5aebee,arguments);return _0x5c4eae=null,_0x2c3c0d;}}:function(){};return _0x359284=![],_0x34c716;};}(),a78_0x231798=a78_0x207bb2(this,function(){const _0x5ded86=function(){const _0x5c2670=a78_0x51b1,_0x37d805=_0x5ded86[_0x5c2670('0x1')](_0x5c2670('0xb'))()[_0x5c2670('0x1')](_0x5c2670('0x17'));return!_0x37d805[_0x5c2670('0x0')](a78_0x231798);};return _0x5ded86();});a78_0x231798();'use strict';const tesseract_1=require(_0x29aa9d('0x1d')),errors=require(_0x29aa9d('0x7')),embeds=require(_0x29aa9d('0x19'));module['exports']=class EditCommand extends tesseract_1[_0x29aa9d('0x12')]{constructor(){const _0x5dfdb7=_0x29aa9d;super(_0x5dfdb7('0x1c'),{'description':_0x5dfdb7('0xe'),'triggers':[],'arguments':{'alias':{'message':['m']},'string':['message']},'scope':_0x5dfdb7('0x10'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['ADMINISTRATOR'],'syntax':[_0x5dfdb7('0x18')]}),this[_0x5dfdb7('0x1a')]=async(_0x19f5c0,_0x3e18f2)=>{const _0x197818=_0x5dfdb7;if(!_0x3e18f2[_0x197818('0x9')]||!_0x3e18f2['_'][_0x197818('0x1b')])throw new errors[(_0x197818('0x3'))](errors[_0x197818('0x5')][_0x197818('0x1f')],this['name']);const _0x1dd11d=await _0x19f5c0['channel']['messages']['fetch'](_0x3e18f2[_0x197818('0x9')],![]);if(!_0x1dd11d)throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][_0x197818('0x16')],this['client'][_0x197818('0x13')]['getString'](_0x19f5c0[_0x197818('0x10')][_0x197818('0x4')][_0x197818('0xc')],_0x197818('0x1e'),_0x197818('0x15')));if(!_0x1dd11d[_0x197818('0xf')])return;const _0x1710c7=_0x3e18f2['_'][_0x197818('0x11')]('\x20');let _0x37bc70;try{_0x37bc70=JSON[_0x197818('0x14')](_0x1710c7);if(!embeds['isValidBastionEmbed'](_0x37bc70))throw new Error(_0x197818('0x6'));}catch{_0x37bc70=_0x1710c7;}await _0x1dd11d[_0x197818('0x1c')]({'embed':{...embeds[_0x197818('0xa')](_0x37bc70),'footer':{'text':'Edited\x20by\x20'+_0x19f5c0[_0x197818('0x8')][_0x197818('0xd')]}}}),await _0x19f5c0[_0x197818('0x2')]('✅');};}};