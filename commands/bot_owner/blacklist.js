const a2_0x101e=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','blacklist','getString','user','exports','Servers','blacklist\x20--users\x20USER_ID\x20--remove','blacklistedGuildIds','\x20Blacklisted\x20Users','length','exec','Command','channel','language','save','isValid','locale','blacklist\x20--users\x20USER_ID','Bastion\x27s\x20Blacklist','users','servers','toBulletList','findById','blacklistedUserIds','client','return\x20/\x22\x20+\x20this\x20+\x20\x22/','It\x20allows\x20you\x20to\x20blacklist\x20users\x20and\x20servers\x20that.\x20Blacklisted\x20servers\x20and\x20users\x20don\x27t\x20have\x20access\x20to\x20Bastion\x27s\x20commands.','Constants','blacklist\x20--servers\x20SERVER_ID','apply','guild','includes','@bastion/tesseract','remove','author','\x20Blacklisted\x20Servers\x20/\x20','send','tag','test','constructor','push','Users','blacklist\x20--servers\x20SERVER_ID\x20--remove','bastionBlacklistUpdate','filter'];(function(_0x4288ef,_0x101e55){const _0x34d6fa=function(_0x312219){while(--_0x312219){_0x4288ef['push'](_0x4288ef['shift']());}},_0x3a2196=function(){const _0x4fdb51={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1dea73,_0x5d962c,_0x21126e,_0x3c880b){_0x3c880b=_0x3c880b||{};let _0x1d125e=_0x5d962c+'='+_0x21126e,_0x674a4=0x0;for(let _0x3bb4e8=0x0,_0x3d4a22=_0x1dea73['length'];_0x3bb4e8<_0x3d4a22;_0x3bb4e8++){const _0x53ecc5=_0x1dea73[_0x3bb4e8];_0x1d125e+=';\x20'+_0x53ecc5;const _0x168b4e=_0x1dea73[_0x53ecc5];_0x1dea73['push'](_0x168b4e),_0x3d4a22=_0x1dea73['length'],_0x168b4e!==!![]&&(_0x1d125e+='='+_0x168b4e);}_0x3c880b['cookie']=_0x1d125e;},'removeCookie':function(){return'dev';},'getCookie':function(_0xccd116,_0x4da413){_0xccd116=_0xccd116||function(_0x2a1aa6){return _0x2a1aa6;};const _0x181403=_0xccd116(new RegExp('(?:^|;\x20)'+_0x4da413['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5c2fc6=function(_0x336b2d,_0x2af00b){_0x336b2d(++_0x2af00b);};return _0x5c2fc6(_0x34d6fa,_0x101e55),_0x181403?decodeURIComponent(_0x181403[0x1]):undefined;}},_0x4e059f=function(){const _0x36c6f6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x36c6f6['test'](_0x4fdb51['removeCookie']['toString']());};_0x4fdb51['updateCookie']=_0x4e059f;let _0xbd5d59='';const _0x14d11f=_0x4fdb51['updateCookie']();if(!_0x14d11f)_0x4fdb51['setCookie'](['*'],'counter',0x1);else _0x14d11f?_0xbd5d59=_0x4fdb51['getCookie'](null,'counter'):_0x4fdb51['removeCookie']();};_0x3a2196();}(a2_0x101e,0x17b));const a2_0x34d6=function(_0x4288ef,_0x101e55){_0x4288ef=_0x4288ef-0x0;let _0x34d6fa=a2_0x101e[_0x4288ef];return _0x34d6fa;};const a2_0x4fdb51=function(){let _0xbd5d59=!![];return function(_0x14d11f,_0x1dea73){const _0x5d962c=_0xbd5d59?function(){if(_0x1dea73){const _0x21126e=_0x1dea73[a2_0x34d6('0xa')](_0x14d11f,arguments);return _0x1dea73=null,_0x21126e;}}:function(){};return _0xbd5d59=![],_0x5d962c;};}(),a2_0x312219=a2_0x4fdb51(this,function(){const _0x3c880b=function(){const _0x1d125e=_0x3c880b['constructor'](a2_0x34d6('0x6'))()[a2_0x34d6('0x14')](a2_0x34d6('0x1a'));return!_0x1d125e[a2_0x34d6('0x13')](a2_0x312219);};return _0x3c880b();});a2_0x312219();'use strict';const tesseract_1=require(a2_0x34d6('0xd')),Config_1=require('../../models/Config'),arrays=require('../../utils/arrays'),snowflake=require('../../utils/snowflake');module[a2_0x34d6('0x1e')]=class Blacklist extends tesseract_1[a2_0x34d6('0x25')]{constructor(){super(a2_0x34d6('0x1b'),{'description':a2_0x34d6('0x7'),'triggers':[],'arguments':{'array':[a2_0x34d6('0x1'),a2_0x34d6('0x0')],'boolean':['remove'],'string':[a2_0x34d6('0x1'),a2_0x34d6('0x0')]},'scope':'guild','owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a2_0x34d6('0x2b'),a2_0x34d6('0x9'),a2_0x34d6('0x20'),a2_0x34d6('0x17')]}),this[a2_0x34d6('0x24')]=async(_0x674a4,_0x3bb4e8)=>{const _0x3d4a22=await Config_1['default'][a2_0x34d6('0x3')](this[a2_0x34d6('0x5')][a2_0x34d6('0x1d')]['id']),_0x53ecc5=_0x3bb4e8[a2_0x34d6('0x1')]?_0x3bb4e8[a2_0x34d6('0x1')][a2_0x34d6('0x19')](_0x5c2fc6=>snowflake[a2_0x34d6('0x29')](_0x5c2fc6)):[],_0x168b4e=_0x3bb4e8[a2_0x34d6('0x0')]?_0x3bb4e8['users'][a2_0x34d6('0x19')](_0x2a1aa6=>snowflake['isValid'](_0x2a1aa6)):[],_0xccd116=[];if(_0x3bb4e8[a2_0x34d6('0xe')])_0x3d4a22[a2_0x34d6('0x21')]=_0x3d4a22['blacklistedGuildIds']['filter'](_0x336b2d=>!_0x53ecc5[a2_0x34d6('0xc')](_0x336b2d));else _0x3d4a22[a2_0x34d6('0x21')]=[..._0x53ecc5,..._0x3d4a22[a2_0x34d6('0x21')]];_0x3d4a22[a2_0x34d6('0x21')]=[...new Set(_0x3d4a22[a2_0x34d6('0x21')])];const _0x4da413=arrays[a2_0x34d6('0x2')](_0x3d4a22[a2_0x34d6('0x21')]);_0x4da413&&_0xccd116[a2_0x34d6('0x15')]({'name':a2_0x34d6('0x1f'),'value':_0x4da413,'inline':!![]});if(_0x3bb4e8[a2_0x34d6('0xe')])_0x3d4a22[a2_0x34d6('0x4')]=_0x3d4a22[a2_0x34d6('0x4')][a2_0x34d6('0x19')](_0x2af00b=>!_0x168b4e[a2_0x34d6('0xc')](_0x2af00b));else _0x3d4a22[a2_0x34d6('0x4')]=[..._0x168b4e,..._0x3d4a22['blacklistedUserIds']];_0x3d4a22['blacklistedUserIds']=[...new Set(_0x3d4a22[a2_0x34d6('0x4')])];const _0x181403=arrays[a2_0x34d6('0x2')](_0x3d4a22[a2_0x34d6('0x4')]);_0x181403&&_0xccd116['push']({'name':a2_0x34d6('0x16'),'value':_0x181403,'inline':!![]}),await _0x3d4a22[a2_0x34d6('0x28')](),await _0x674a4[a2_0x34d6('0x26')][a2_0x34d6('0x11')]({'embed':{'color':tesseract_1[a2_0x34d6('0x8')]['COLORS']['PUPIL'],'title':a2_0x34d6('0x2c'),'description':this[a2_0x34d6('0x5')][a2_0x34d6('0x2a')][a2_0x34d6('0x1c')](_0x674a4[a2_0x34d6('0xb')]['document'][a2_0x34d6('0x27')],'info',_0x53ecc5[a2_0x34d6('0x23')]||_0x168b4e[a2_0x34d6('0x23')]?a2_0x34d6('0x18'):'bastionBlacklistUnchanged',_0x674a4[a2_0x34d6('0xf')][a2_0x34d6('0x12')]),'fields':_0xccd116,'footer':{'text':_0x3d4a22['blacklistedGuildIds'][a2_0x34d6('0x23')]+a2_0x34d6('0x10')+_0x3d4a22[a2_0x34d6('0x4')]['length']+a2_0x34d6('0x22')}}});};}};