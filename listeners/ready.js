const a177_0x1390=['find','exec','default','@bastion/tesseract','Constants','LISTENER_MODE','findByIdAndUpdate','guilds','constructor','map','insertMany','../models/Config','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','_id','apply','exports','client','Listener'];(function(_0x58e7bf,_0x13908c){const _0x283b4d=function(_0x56fde0){while(--_0x56fde0){_0x58e7bf['push'](_0x58e7bf['shift']());}},_0x327f5b=function(){const _0x416a54={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x27f336,_0x512754,_0x5e2b62,_0xa37a73){_0xa37a73=_0xa37a73||{};let _0x34e10f=_0x512754+'='+_0x5e2b62,_0x1a9768=0x0;for(let _0x4d4fd6=0x0,_0x311c55=_0x27f336['length'];_0x4d4fd6<_0x311c55;_0x4d4fd6++){const _0x1c1d96=_0x27f336[_0x4d4fd6];_0x34e10f+=';\x20'+_0x1c1d96;const _0x3086bf=_0x27f336[_0x1c1d96];_0x27f336['push'](_0x3086bf),_0x311c55=_0x27f336['length'],_0x3086bf!==!![]&&(_0x34e10f+='='+_0x3086bf);}_0xa37a73['cookie']=_0x34e10f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x552a13,_0x323c85){_0x552a13=_0x552a13||function(_0x3fe577){return _0x3fe577;};const _0x5c00d5=_0x552a13(new RegExp('(?:^|;\x20)'+_0x323c85['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x254f22=function(_0x5ec1b4,_0x42a0ec){_0x5ec1b4(++_0x42a0ec);};return _0x254f22(_0x283b4d,_0x13908c),_0x5c00d5?decodeURIComponent(_0x5c00d5[0x1]):undefined;}},_0x42bd14=function(){const _0x31c5b5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x31c5b5['test'](_0x416a54['removeCookie']['toString']());};_0x416a54['updateCookie']=_0x42bd14;let _0x500fd0='';const _0x385c56=_0x416a54['updateCookie']();if(!_0x385c56)_0x416a54['setCookie'](['*'],'counter',0x1);else _0x385c56?_0x500fd0=_0x416a54['getCookie'](null,'counter'):_0x416a54['removeCookie']();};_0x327f5b();}(a177_0x1390,0x1d9));const a177_0x283b=function(_0x58e7bf,_0x13908c){_0x58e7bf=_0x58e7bf-0x0;let _0x283b4d=a177_0x1390[_0x58e7bf];return _0x283b4d;};const a177_0x5e2b62=function(){let _0x10a02a=!![];return function(_0x35932d,_0x565feb){const _0x3c826=_0x10a02a?function(){if(_0x565feb){const _0x3e757a=_0x565feb[a177_0x283b('0x11')](_0x35932d,arguments);return _0x565feb=null,_0x3e757a;}}:function(){};return _0x10a02a=![],_0x3c826;};}(),a177_0x512754=a177_0x5e2b62(this,function(){const _0x4ac0f4=function(){const _0x326434=_0x4ac0f4[a177_0x283b('0xa')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a177_0x283b('0xa')](a177_0x283b('0xe'));return!_0x326434[a177_0x283b('0xf')](a177_0x512754);};return _0x4ac0f4();});a177_0x512754();'use strict';const tesseract_1=require(a177_0x283b('0x5')),Config_1=require(a177_0x283b('0xd')),Guild_1=require('../models/Guild');module[a177_0x283b('0x12')]=class ReadyListener extends tesseract_1[a177_0x283b('0x1')]{constructor(){super('ready',{'mode':tesseract_1[a177_0x283b('0x6')][a177_0x283b('0x7')]['ON']}),this[a177_0x283b('0x3')]=async()=>{await Config_1[a177_0x283b('0x4')][a177_0x283b('0x8')](this['client']['user']['id'],{'_id':this[a177_0x283b('0x0')]['user']['id']},{'upsert':!![]});const _0x53fd18=await Guild_1[a177_0x283b('0x4')][a177_0x283b('0x2')]({},'id'),_0x40c048=_0x53fd18['map'](_0x153c67=>_0x153c67['_id']),_0x378267=this['client'][a177_0x283b('0x9')]['cache'][a177_0x283b('0xb')](_0x240d5c=>({'_id':_0x240d5c['id']}))['filter'](_0x20f2a7=>!_0x40c048['includes'](_0x20f2a7[a177_0x283b('0x10')]));_0x378267['length']&&await Guild_1['default'][a177_0x283b('0xc')](_0x378267);};}};