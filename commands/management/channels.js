const a60_0x21dd=['author','type','channels','send','test','../../utils/numbers','../../utils/confirmation','slowmode','GREEN','tag','Command','getString','catch','info','text','@bastion/tesseract','language','create','length','client','premiumTier','return\x20/\x22\x20+\x20this\x20+\x20\x22/','locale','COLORS','rename','channels\x20--create\x20NAME\x20--nsfw\x20--\x20REASON','default','compile','toLowerCase','channels\x20--rename\x20NAME\x20--\x20REASON','topic','textChannelRename','document','delete','limit','channels\x20--create\x20NAME\x20--topic\x20TOPIC\x20--\x20REASON','channel','guild','join','category','channels\x20--create\x20NAME\x20--\x20REASON','parent','nsfw','channelDeleteQuestion','has','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20channels\x20in\x20the\x20server.','BASTION_ERROR_TYPE','ChannelCreate','channels\x20--create\x20NAME\x20--category\x20ID\x20--\x20REASON','name','Constants','DiscordError','includes','clamp'];(function(_0x275ad8,_0x21dd69){const _0x57d555=function(_0x19f58e){while(--_0x19f58e){_0x275ad8['push'](_0x275ad8['shift']());}};const _0x2e50fa=function(){const _0x17c16e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x523cfd,_0xab4d1b,_0xa91a40,_0x1d7b64){_0x1d7b64=_0x1d7b64||{};let _0x3f7bdc=_0xab4d1b+'='+_0xa91a40;let _0x317b8b=0x0;for(let _0x4b2839=0x0,_0x5cabb=_0x523cfd['length'];_0x4b2839<_0x5cabb;_0x4b2839++){const _0x53ff17=_0x523cfd[_0x4b2839];_0x3f7bdc+=';\x20'+_0x53ff17;const _0x41ae2b=_0x523cfd[_0x53ff17];_0x523cfd['push'](_0x41ae2b);_0x5cabb=_0x523cfd['length'];if(_0x41ae2b!==!![]){_0x3f7bdc+='='+_0x41ae2b;}}_0x1d7b64['cookie']=_0x3f7bdc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x16adcc,_0x20ffc5){_0x16adcc=_0x16adcc||function(_0x41f9af){return _0x41f9af;};const _0x549f91=_0x16adcc(new RegExp('(?:^|;\x20)'+_0x20ffc5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3d031e=function(_0x22a696,_0x2c9d70){_0x22a696(++_0x2c9d70);};_0x3d031e(_0x57d555,_0x21dd69);return _0x549f91?decodeURIComponent(_0x549f91[0x1]):undefined;}};const _0x7d21b3=function(){const _0x157ed2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x157ed2['test'](_0x17c16e['removeCookie']['toString']());};_0x17c16e['updateCookie']=_0x7d21b3;let _0x4b334f='';const _0x57f58a=_0x17c16e['updateCookie']();if(!_0x57f58a){_0x17c16e['setCookie'](['*'],'counter',0x1);}else if(_0x57f58a){_0x4b334f=_0x17c16e['getCookie'](null,'counter');}else{_0x17c16e['removeCookie']();}};_0x2e50fa();}(a60_0x21dd,0x109));const a60_0x57d5=function(_0x275ad8,_0x21dd69){_0x275ad8=_0x275ad8-0x0;let _0x57d555=a60_0x21dd[_0x275ad8];return _0x57d555;};const a60_0x17c16e=function(){let _0x3084a1=!![];return function(_0x41b0fa,_0x4a1544){const _0x2f983c=_0x3084a1?function(){if(_0x4a1544){const _0x3db1a9=_0x4a1544['apply'](_0x41b0fa,arguments);_0x4a1544=null;return _0x3db1a9;}}:function(){};_0x3084a1=![];return _0x2f983c;};}();const a60_0x19f58e=a60_0x17c16e(this,function(){const _0x5088ae=function(){const _0x3b4aec=_0x5088ae['constructor'](a60_0x57d5('0x1f'))()[a60_0x57d5('0x25')](a60_0x57d5('0x0'));return!_0x3b4aec[a60_0x57d5('0xe')](a60_0x19f58e);};return _0x5088ae();});a60_0x19f58e();'use strict';const tesseract_1=require(a60_0x57d5('0x19'));const confirmation_1=require(a60_0x57d5('0x10'));const errors=require('../../utils/errors');const numbers=require(a60_0x57d5('0xf'));module['exports']=class ChannelsCommand extends tesseract_1[a60_0x57d5('0x14')]{constructor(){super(a60_0x57d5('0xc'),{'description':a60_0x57d5('0x1'),'triggers':[],'arguments':{'array':[a60_0x57d5('0x1b'),a60_0x57d5('0x22'),a60_0x57d5('0x28')],'boolean':[a60_0x57d5('0x2b'),a60_0x57d5('0x34'),a60_0x57d5('0x11')],'number':['limit'],'string':[a60_0x57d5('0x31'),a60_0x57d5('0x1b'),a60_0x57d5('0x22'),'topic'],'coerce':{'type':_0x68521e=>[a60_0x57d5('0x31'),a60_0x57d5('0x18'),'voice'][a60_0x57d5('0x8')](_0x68521e[a60_0x57d5('0x26')]())?_0x68521e:a60_0x57d5('0x18'),'limit':_0x43ef30=>numbers[a60_0x57d5('0x9')](_0x43ef30,0x1,0x63)}},'scope':a60_0x57d5('0x2f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_CHANNELS'],'userPermissions':['MANAGE_CHANNELS'],'syntax':[a60_0x57d5('0x32'),'channels\x20--create\x20NAME\x20--type\x20TYPE\x20--\x20REASON',a60_0x57d5('0x4'),a60_0x57d5('0x2d'),'channels\x20--create\x20NAME\x20--limit\x201-99\x20--\x20REASON','channels\x20--create\x20NAME\x20--slowmode\x20--\x20REASON',a60_0x57d5('0x23'),'channels\x20--delete\x20--\x20REASON',a60_0x57d5('0x27')]});this['exec']=async(_0x53da0c,_0x5ada33)=>{const _0x78b540=_0x5ada33['_']['join']('\x20')||'-';if(_0x5ada33[a60_0x57d5('0x1b')]&&_0x5ada33['create'][a60_0x57d5('0x1c')]){const _0xc96380=_0x5ada33[a60_0x57d5('0x1b')][a60_0x57d5('0x30')]('\x20');const _0x21ebf0=await _0x53da0c['guild'][a60_0x57d5('0xc')][a60_0x57d5('0x1b')](_0xc96380,{'type':_0x5ada33[a60_0x57d5('0xb')],'bitrate':_0x53da0c[a60_0x57d5('0x2f')][a60_0x57d5('0x1e')]*0x1f400||0x17700,'nsfw':_0x5ada33[a60_0x57d5('0x34')],'reason':_0x78b540,'topic':_0x5ada33[a60_0x57d5('0x28')]&&_0x5ada33[a60_0x57d5('0x28')][a60_0x57d5('0x1c')]?_0x5ada33[a60_0x57d5('0x28')][a60_0x57d5('0x30')]('\x20'):'','userLimit':_0x5ada33[a60_0x57d5('0x2c')]?_0x5ada33[a60_0x57d5('0x2c')]:0x0,'rateLimitPerUser':_0x5ada33[a60_0x57d5('0x11')]?0x5:0x0,'parent':_0x53da0c[a60_0x57d5('0x2f')][a60_0x57d5('0xc')]['cache'][a60_0x57d5('0x36')](_0x5ada33[a60_0x57d5('0x31')])?_0x5ada33[a60_0x57d5('0x31')]:_0x53da0c['channel'][a60_0x57d5('0x33')]});return await _0x53da0c[a60_0x57d5('0x2e')][a60_0x57d5('0xd')]({'embed':{'color':tesseract_1[a60_0x57d5('0x6')][a60_0x57d5('0x21')][a60_0x57d5('0x12')],'description':this[a60_0x57d5('0x1d')][a60_0x57d5('0x20')][a60_0x57d5('0x15')](_0x53da0c['guild'][a60_0x57d5('0x2a')][a60_0x57d5('0x1a')],a60_0x57d5('0x17'),_0x21ebf0[a60_0x57d5('0xb')]+a60_0x57d5('0x3'),_0x53da0c['author']['tag'],_0x21ebf0[a60_0x57d5('0x5')],_0x78b540)}})[a60_0x57d5('0x16')](()=>{});}if(_0x5ada33['delete']){const _0x56b6f3=await confirmation_1[a60_0x57d5('0x24')](_0x53da0c,this['client']['locale'][a60_0x57d5('0x15')](_0x53da0c[a60_0x57d5('0x2f')][a60_0x57d5('0x2a')][a60_0x57d5('0x1a')],a60_0x57d5('0x17'),a60_0x57d5('0x35'),_0x53da0c[a60_0x57d5('0xa')][a60_0x57d5('0x13')],_0x53da0c[a60_0x57d5('0x2e')][a60_0x57d5('0x5')]));if(_0x56b6f3){await _0x53da0c['channel']['delete'](_0x78b540);}return!![];}if(_0x5ada33['rename']&&_0x5ada33[a60_0x57d5('0x22')][a60_0x57d5('0x1c')]){const _0xc67561=await _0x53da0c['channel']['edit']({'name':_0x5ada33[a60_0x57d5('0x22')][a60_0x57d5('0x30')]('\x20')});return await _0x53da0c[a60_0x57d5('0x2e')]['send']({'embed':{'color':tesseract_1[a60_0x57d5('0x6')]['COLORS'][a60_0x57d5('0x12')],'description':this[a60_0x57d5('0x1d')][a60_0x57d5('0x20')][a60_0x57d5('0x15')](_0x53da0c[a60_0x57d5('0x2f')][a60_0x57d5('0x2a')][a60_0x57d5('0x1a')],a60_0x57d5('0x17'),a60_0x57d5('0x29'),_0x53da0c[a60_0x57d5('0xa')][a60_0x57d5('0x13')],_0xc67561[a60_0x57d5('0x5')],_0x78b540)}})[a60_0x57d5('0x16')](()=>{});}throw new errors[(a60_0x57d5('0x7'))](errors[a60_0x57d5('0x2')]['INVALID_COMMAND_SYNTAX'],this['name']);};}};