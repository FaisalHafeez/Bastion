const a201_0x1e3e4d=a201_0x430c;(function(_0x14f38e,_0x349cf2){const _0x362ada=a201_0x430c,_0x4a0c00=_0x14f38e();while(!![]){try{const _0x5f2969=parseInt(_0x362ada(0x7f))/0x1+-parseInt(_0x362ada(0x7d))/0x2*(parseInt(_0x362ada(0x69))/0x3)+parseInt(_0x362ada(0x88))/0x4+-parseInt(_0x362ada(0x80))/0x5*(-parseInt(_0x362ada(0x85))/0x6)+-parseInt(_0x362ada(0x7e))/0x7+-parseInt(_0x362ada(0x86))/0x8+parseInt(_0x362ada(0x6f))/0x9*(parseInt(_0x362ada(0x79))/0xa);if(_0x5f2969===_0x349cf2)break;else _0x4a0c00['push'](_0x4a0c00['shift']());}catch(_0x35425e){_0x4a0c00['push'](_0x4a0c00['shift']());}}}(a201_0x3885,0xd836a));function a201_0x3885(){const _0xd50c97=['map','2133oknbZw','_id','apply','includes','exports','LISTENER_MODE','exec','fetchInvites','client','../models/Config','14940qIRBNb','filter','toString','cache','1330FloUbn','2088345AnBLVj','999103cPrvTy','3043365EvQQzh','Listener','findByIdAndUpdate','find','guilds','6owOhqU','3266648GdJsLJ','@bastion/tesseract','2258988MvjKRw','uses','code','constructor','values','invites','user','4215aIiyIk','(((.+)+)+)+$','ready','../models/Guild','default'];a201_0x3885=function(){return _0xd50c97;};return a201_0x3885();}const a201_0x214733=(function(){let _0x301565=!![];return function(_0x4af23d,_0x215e2b){const _0x19946b=_0x301565?function(){const _0x7db1e0=a201_0x430c;if(_0x215e2b){const _0x44037d=_0x215e2b[_0x7db1e0(0x71)](_0x4af23d,arguments);return _0x215e2b=null,_0x44037d;}}:function(){};return _0x301565=![],_0x19946b;};}()),a201_0x2001cd=a201_0x214733(this,function(){const _0x4d7552=a201_0x430c;return a201_0x2001cd[_0x4d7552(0x7b)]()['search'](_0x4d7552(0x6a))[_0x4d7552(0x7b)]()[_0x4d7552(0x65)](a201_0x2001cd)['search'](_0x4d7552(0x6a));});a201_0x2001cd();'use strict';function a201_0x430c(_0x420648,_0x9fada4){const _0x4b71d9=a201_0x3885();return a201_0x430c=function(_0x2001cd,_0x214733){_0x2001cd=_0x2001cd-0x65;let _0x38854b=_0x4b71d9[_0x2001cd];return _0x38854b;},a201_0x430c(_0x420648,_0x9fada4);}const tesseract_1=require(a201_0x1e3e4d(0x87)),Config_1=require(a201_0x1e3e4d(0x78)),Guild_1=require(a201_0x1e3e4d(0x6c)),constants=require('../utils/constants');module[a201_0x1e3e4d(0x73)]=class ReadyListener extends tesseract_1[a201_0x1e3e4d(0x81)]{constructor(){const _0x4958ae=a201_0x1e3e4d;super(_0x4958ae(0x6b),{'mode':tesseract_1['Constants'][_0x4958ae(0x74)]['ON']});}[a201_0x1e3e4d(0x75)]=async()=>{const _0x3a3860=a201_0x1e3e4d;await Config_1[_0x3a3860(0x6d)][_0x3a3860(0x82)](this['client'][_0x3a3860(0x68)]['id'],{'_id':this[_0x3a3860(0x77)][_0x3a3860(0x68)]['id']},{'upsert':!![]});const _0x5c6436=await Guild_1[_0x3a3860(0x6d)][_0x3a3860(0x83)]({},'id'),_0x57c285=_0x5c6436['map'](_0x1ebd3d=>_0x1ebd3d['_id']),_0x3c37ad=this['client']['guilds'][_0x3a3860(0x7c)][_0x3a3860(0x6e)](_0x486ada=>({'_id':_0x486ada['id']}))[_0x3a3860(0x7a)](_0x3e0c02=>!_0x57c285[_0x3a3860(0x72)](_0x3e0c02[_0x3a3860(0x70)]));_0x3c37ad['length']&&await Guild_1[_0x3a3860(0x6d)]['insertMany'](_0x3c37ad);if(!constants['isPublicBastion'](this[_0x3a3860(0x77)][_0x3a3860(0x68)]))for(const _0x587729 of this[_0x3a3860(0x77)][_0x3a3860(0x84)][_0x3a3860(0x7c)][_0x3a3860(0x66)]()){const _0x22ddb7=await _0x587729[_0x3a3860(0x76)]();for(const _0x1797d of _0x22ddb7[_0x3a3860(0x66)]()){_0x587729[_0x3a3860(0x67)][_0x1797d[_0x3a3860(0x8a)]]=_0x1797d[_0x3a3860(0x89)]||0x0;}}};};