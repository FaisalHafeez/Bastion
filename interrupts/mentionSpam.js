const a168_0x5d59=['Mention\x20spam.','guild','permissionsFor','some','\x20/\x20','has','mentionSpam','roles','User','safelist','threshold','catch','MANAGE_CHANNELS','content','apply','MANAGE_MESSAGES','mentions','@bastion/tesseract','document','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','author','member','cache','constructor','Interrupt','discord.js','exports','length','channel','Channel','createModerationLog','toLowerCase','tag','TextChannel'];(function(_0x40f7d0,_0x5d5974){const _0x5a1f8a=function(_0x40a14a){while(--_0x40a14a){_0x40f7d0['push'](_0x40f7d0['shift']());}},_0x420397=function(){const _0x1ca993={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5210c5,_0x1586db,_0x4f6070,_0x1b5bcc){_0x1b5bcc=_0x1b5bcc||{};let _0x261053=_0x1586db+'='+_0x4f6070,_0x2287a9=0x0;for(let _0x48ae54=0x0,_0x5c91e6=_0x5210c5['length'];_0x48ae54<_0x5c91e6;_0x48ae54++){const _0x59dbc=_0x5210c5[_0x48ae54];_0x261053+=';\x20'+_0x59dbc;const _0x36086a=_0x5210c5[_0x59dbc];_0x5210c5['push'](_0x36086a),_0x5c91e6=_0x5210c5['length'],_0x36086a!==!![]&&(_0x261053+='='+_0x36086a);}_0x1b5bcc['cookie']=_0x261053;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5e48fc,_0x403c5c){_0x5e48fc=_0x5e48fc||function(_0x9df8d8){return _0x9df8d8;};const _0x3db639=_0x5e48fc(new RegExp('(?:^|;\x20)'+_0x403c5c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5edf0e=function(_0x3a8078,_0x423135){_0x3a8078(++_0x423135);};return _0x5edf0e(_0x5a1f8a,_0x5d5974),_0x3db639?decodeURIComponent(_0x3db639[0x1]):undefined;}},_0x244ddb=function(){const _0x5636e5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5636e5['test'](_0x1ca993['removeCookie']['toString']());};_0x1ca993['updateCookie']=_0x244ddb;let _0x1f06e8='';const _0x1c0438=_0x1ca993['updateCookie']();if(!_0x1c0438)_0x1ca993['setCookie'](['*'],'counter',0x1);else _0x1c0438?_0x1f06e8=_0x1ca993['getCookie'](null,'counter'):_0x1ca993['removeCookie']();};_0x420397();}(a168_0x5d59,0xa4));const a168_0x5a1f=function(_0x40f7d0,_0x5d5974){_0x40f7d0=_0x40f7d0-0x0;let _0x5a1f8a=a168_0x5d59[_0x40f7d0];return _0x5a1f8a;};const _0x46f022=a168_0x5a1f,a168_0x1ca993=function(){let _0x1f06e8=!![];return function(_0x1c0438,_0x5210c5){const _0x1586db=_0x1f06e8?function(){const _0x28fc11=a168_0x5a1f;if(_0x5210c5){const _0x4f6070=_0x5210c5[_0x28fc11('0x14')](_0x1c0438,arguments);return _0x5210c5=null,_0x4f6070;}}:function(){};return _0x1f06e8=![],_0x1586db;};}(),a168_0x40a14a=a168_0x1ca993(this,function(){const _0x1b5bcc=function(){const _0x276e32=a168_0x5a1f,_0x261053=_0x1b5bcc[_0x276e32('0x1d')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x276e32('0x1d')](_0x276e32('0x19'));return!_0x261053['test'](a168_0x40a14a);};return _0x1b5bcc();});a168_0x40a14a();'use strict';const tesseract_1=require(_0x46f022('0x17')),discord_js_1=require(_0x46f022('0x1f'));module[_0x46f022('0x20')]=class MentionSpamInterrupt extends tesseract_1[_0x46f022('0x1e')]{constructor(){const _0x3d6b5=_0x46f022;super(_0x3d6b5('0xc'),{'type':0x2}),this['exec']=async _0x2287a9=>{const _0xb8e93a=_0x3d6b5;if(!_0x2287a9[_0xb8e93a('0x7')])return;if(!(_0x2287a9[_0xb8e93a('0x0')]instanceof discord_js_1[_0xb8e93a('0x5')]))return;if(!_0x2287a9['content']||!_0x2287a9[_0xb8e93a('0x13')][_0xb8e93a('0x21')])return![];const _0x48ae54=_0x2287a9['guild'];if(_0x2287a9[_0xb8e93a('0x1b')]&&_0x2287a9[_0xb8e93a('0x1b')][_0xb8e93a('0xd')][_0xb8e93a('0x1c')][_0xb8e93a('0x9')](_0x59dbc=>_0x59dbc['name'][_0xb8e93a('0x3')]()===_0xb8e93a('0xf')))return![];if(_0x2287a9['channel']['permissionsFor'](_0x2287a9['member'])&&_0x2287a9['channel'][_0xb8e93a('0x8')](_0x2287a9[_0xb8e93a('0x1b')])[_0xb8e93a('0xb')]([_0xb8e93a('0x12'),_0xb8e93a('0x15')]))return![];if(!_0x48ae54[_0xb8e93a('0x18')]||!_0x48ae54[_0xb8e93a('0x18')]['mentionSpam']||!_0x48ae54[_0xb8e93a('0x18')][_0xb8e93a('0xc')][_0xb8e93a('0x10')])return![];let _0x5c91e6=![];if(_0x2287a9['mentions']['users']['size']>_0x48ae54['document'][_0xb8e93a('0xc')]['threshold'])_0x5c91e6=!![];if(_0x2287a9[_0xb8e93a('0x16')]['roles']['size']>_0x48ae54[_0xb8e93a('0x18')][_0xb8e93a('0xc')]['threshold'])_0x5c91e6=!![];return _0x5c91e6&&(_0x2287a9['member']['addInfraction'](_0xb8e93a('0x6')),_0x48ae54[_0xb8e93a('0x2')]({'event':'mentionSpam','fields':[{'name':_0xb8e93a('0xe'),'value':_0x2287a9[_0xb8e93a('0x1a')][_0xb8e93a('0x4')]+_0xb8e93a('0xa')+_0x2287a9['author']['id']},{'name':_0xb8e93a('0x1'),'value':_0x2287a9[_0xb8e93a('0x0')]['name']+'\x20/\x20'+_0x2287a9[_0xb8e93a('0x0')]['id']}]})[_0xb8e93a('0x11')](()=>{})),_0x5c91e6;};}};