const a62_0x5e00=['channels\x20--delete\x20--\x20REASON','catch','info','COLORS','author','join','locale','document','limit','cache','topic','send','nsfw','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20channels\x20in\x20the\x20server.','has','channels\x20--create\x20NAME\x20--\x20REASON','ChannelCreate','tag','type','parent','name','channels\x20--create\x20NAME\x20--type\x20TYPE\x20--\x20REASON','getString','clamp','text','apply','INVALID_COMMAND_SYNTAX','rename','channelDeleteQuestion','../../utils/errors','guild','delete','premiumTier','toLowerCase','channels','length','../../utils/numbers','DiscordError','../../utils/confirmation','test','constructor','channel','MANAGE_CHANNELS','category','slowmode','language','edit','channels\x20--create\x20NAME\x20--category\x20ID\x20--\x20REASON','channels\x20--rename\x20NAME\x20--\x20REASON','channels\x20--create\x20NAME\x20--nsfw\x20--\x20REASON','Constants','create','GREEN','exports'];(function(_0x54c5ca,_0x5e00f4){const _0x52be3e=function(_0x504b86){while(--_0x504b86){_0x54c5ca['push'](_0x54c5ca['shift']());}},_0x529b87=function(){const _0x17b2de={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1c5a88,_0xb1f24c,_0x229ae7,_0xc7470a){_0xc7470a=_0xc7470a||{};let _0x55eb53=_0xb1f24c+'='+_0x229ae7,_0x512b9a=0x0;for(let _0x275619=0x0,_0x533523=_0x1c5a88['length'];_0x275619<_0x533523;_0x275619++){const _0x4582f7=_0x1c5a88[_0x275619];_0x55eb53+=';\x20'+_0x4582f7;const _0x5d899f=_0x1c5a88[_0x4582f7];_0x1c5a88['push'](_0x5d899f),_0x533523=_0x1c5a88['length'],_0x5d899f!==!![]&&(_0x55eb53+='='+_0x5d899f);}_0xc7470a['cookie']=_0x55eb53;},'removeCookie':function(){return'dev';},'getCookie':function(_0xa95d80,_0x2cb35a){_0xa95d80=_0xa95d80||function(_0x4336c3){return _0x4336c3;};const _0x12de43=_0xa95d80(new RegExp('(?:^|;\x20)'+_0x2cb35a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1c6233=function(_0x51bb62,_0x7e3082){_0x51bb62(++_0x7e3082);};return _0x1c6233(_0x52be3e,_0x5e00f4),_0x12de43?decodeURIComponent(_0x12de43[0x1]):undefined;}},_0x4e7c47=function(){const _0x211edd=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x211edd['test'](_0x17b2de['removeCookie']['toString']());};_0x17b2de['updateCookie']=_0x4e7c47;let _0x33cd0b='';const _0x2984d5=_0x17b2de['updateCookie']();if(!_0x2984d5)_0x17b2de['setCookie'](['*'],'counter',0x1);else _0x2984d5?_0x33cd0b=_0x17b2de['getCookie'](null,'counter'):_0x17b2de['removeCookie']();};_0x529b87();}(a62_0x5e00,0x1c8));const a62_0x52be=function(_0x54c5ca,_0x5e00f4){_0x54c5ca=_0x54c5ca-0x0;let _0x52be3e=a62_0x5e00[_0x54c5ca];return _0x52be3e;};const a62_0x17b2de=function(){let _0x33cd0b=!![];return function(_0x2984d5,_0x1c5a88){const _0xb1f24c=_0x33cd0b?function(){if(_0x1c5a88){const _0x229ae7=_0x1c5a88[a62_0x52be('0x1')](_0x2984d5,arguments);return _0x1c5a88=null,_0x229ae7;}}:function(){};return _0x33cd0b=![],_0xb1f24c;};}(),a62_0x504b86=a62_0x17b2de(this,function(){const _0xc7470a=function(){const _0x55eb53=_0xc7470a[a62_0x52be('0x10')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a62_0x52be('0x10')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x55eb53[a62_0x52be('0xf')](a62_0x504b86);};return _0xc7470a();});a62_0x504b86();'use strict';const tesseract_1=require('@bastion/tesseract'),confirmation_1=require(a62_0x52be('0xe')),errors=require(a62_0x52be('0x5')),numbers=require(a62_0x52be('0xc'));module[a62_0x52be('0x1d')]=class ChannelsCommand extends tesseract_1['Command']{constructor(){super(a62_0x52be('0xa'),{'description':a62_0x52be('0x2b'),'triggers':[],'arguments':{'array':['create',a62_0x52be('0x3'),a62_0x52be('0x28')],'boolean':[a62_0x52be('0x7'),a62_0x52be('0x2a'),a62_0x52be('0x14')],'number':[a62_0x52be('0x26')],'string':['category',a62_0x52be('0x1b'),a62_0x52be('0x3'),'topic'],'coerce':{'type':_0x512b9a=>['category','text','voice']['includes'](_0x512b9a[a62_0x52be('0x9')]())?_0x512b9a:a62_0x52be('0x0'),'limit':_0x275619=>numbers[a62_0x52be('0x35')](_0x275619,0x1,0x63)}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a62_0x52be('0x12')],'userPermissions':[a62_0x52be('0x12')],'syntax':[a62_0x52be('0x2d'),a62_0x52be('0x33'),a62_0x52be('0x17'),'channels\x20--create\x20NAME\x20--topic\x20TOPIC\x20--\x20REASON','channels\x20--create\x20NAME\x20--limit\x201-99\x20--\x20REASON','channels\x20--create\x20NAME\x20--slowmode\x20--\x20REASON',a62_0x52be('0x19'),a62_0x52be('0x1e'),a62_0x52be('0x18')]}),this['exec']=async(_0x533523,_0x4582f7)=>{const _0x5d899f=_0x4582f7['_'][a62_0x52be('0x23')]('\x20')||'-';if(_0x4582f7[a62_0x52be('0x1b')]&&_0x4582f7[a62_0x52be('0x1b')]['length']){const _0xa95d80=_0x4582f7[a62_0x52be('0x1b')][a62_0x52be('0x23')]('\x20'),_0x2cb35a=await _0x533523['guild'][a62_0x52be('0xa')][a62_0x52be('0x1b')](_0xa95d80,{'type':_0x4582f7[a62_0x52be('0x30')],'bitrate':_0x533523[a62_0x52be('0x6')][a62_0x52be('0x8')]*0x1f400||0x17700,'nsfw':_0x4582f7[a62_0x52be('0x2a')],'reason':_0x5d899f,'topic':_0x4582f7['topic']&&_0x4582f7[a62_0x52be('0x28')][a62_0x52be('0xb')]?_0x4582f7[a62_0x52be('0x28')][a62_0x52be('0x23')]('\x20'):'','userLimit':_0x4582f7[a62_0x52be('0x26')]?_0x4582f7[a62_0x52be('0x26')]:0x0,'rateLimitPerUser':_0x4582f7[a62_0x52be('0x14')]?0x5:0x0,'parent':_0x533523['guild'][a62_0x52be('0xa')][a62_0x52be('0x27')][a62_0x52be('0x2c')](_0x4582f7[a62_0x52be('0x13')])?_0x4582f7[a62_0x52be('0x13')]:_0x533523[a62_0x52be('0x11')][a62_0x52be('0x31')]});return await _0x533523[a62_0x52be('0x11')][a62_0x52be('0x29')]({'embed':{'color':tesseract_1[a62_0x52be('0x1a')][a62_0x52be('0x21')]['GREEN'],'description':this['client']['locale'][a62_0x52be('0x34')](_0x533523[a62_0x52be('0x6')][a62_0x52be('0x25')][a62_0x52be('0x15')],a62_0x52be('0x20'),_0x2cb35a[a62_0x52be('0x30')]+a62_0x52be('0x2e'),_0x533523[a62_0x52be('0x22')][a62_0x52be('0x2f')],_0x2cb35a[a62_0x52be('0x32')],_0x5d899f)}})[a62_0x52be('0x1f')](()=>{});}if(_0x4582f7[a62_0x52be('0x7')]){const _0x12de43=await confirmation_1['default'](_0x533523,this['client'][a62_0x52be('0x24')][a62_0x52be('0x34')](_0x533523[a62_0x52be('0x6')]['document'][a62_0x52be('0x15')],'info',a62_0x52be('0x4'),_0x533523['author']['tag'],_0x533523['channel'][a62_0x52be('0x32')]));return _0x12de43&&await _0x533523[a62_0x52be('0x11')][a62_0x52be('0x7')](_0x5d899f),!![];}if(_0x4582f7['rename']&&_0x4582f7[a62_0x52be('0x3')][a62_0x52be('0xb')]){const _0x1c6233=await _0x533523[a62_0x52be('0x11')][a62_0x52be('0x16')]({'name':_0x4582f7[a62_0x52be('0x3')]['join']('\x20')});return await _0x533523['channel'][a62_0x52be('0x29')]({'embed':{'color':tesseract_1['Constants'][a62_0x52be('0x21')][a62_0x52be('0x1c')],'description':this['client']['locale']['getString'](_0x533523['guild'][a62_0x52be('0x25')][a62_0x52be('0x15')],a62_0x52be('0x20'),'textChannelRename',_0x533523[a62_0x52be('0x22')][a62_0x52be('0x2f')],_0x1c6233['name'],_0x5d899f)}})['catch'](()=>{});}throw new errors[(a62_0x52be('0xd'))](errors['BASTION_ERROR_TYPE'][a62_0x52be('0x2')],this[a62_0x52be('0x32')]);};}};