const a186_0x1826=['members','member','startsWith','voiceSessions','Requested\x20by\x20','trim','return\x20/\x22\x20+\x20this\x20+\x20\x22/','name','premiumTier','channelID','guild','Constants','user','../models/Guild','➕\x20New','replace','../utils/constants','voiceStateUpdate','children','catch','parentID','deletable','exec','Listener','filter','constructor','newSessionChannelPrefix','exports','channel','tag','categories','size','includes','apply','channels','isPublicBastion','error','type','Members\x20Left','default','voice','client','../utils/omnic','setChannel','@bastion/tesseract','delete','create','parent','test'];(function(_0x59857b,_0x18269d){const _0x2e6fe5=function(_0x5f376f){while(--_0x5f376f){_0x59857b['push'](_0x59857b['shift']());}},_0xfcf6b5=function(){const _0xe0f62={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x28fbbf,_0x3eec30,_0x3a0f53,_0x23aed5){_0x23aed5=_0x23aed5||{};let _0x163400=_0x3eec30+'='+_0x3a0f53,_0x3da54b=0x0;for(let _0x247f2d=0x0,_0x1ff2c9=_0x28fbbf['length'];_0x247f2d<_0x1ff2c9;_0x247f2d++){const _0x5743fd=_0x28fbbf[_0x247f2d];_0x163400+=';\x20'+_0x5743fd;const _0x3eab51=_0x28fbbf[_0x5743fd];_0x28fbbf['push'](_0x3eab51),_0x1ff2c9=_0x28fbbf['length'],_0x3eab51!==!![]&&(_0x163400+='='+_0x3eab51);}_0x23aed5['cookie']=_0x163400;},'removeCookie':function(){return'dev';},'getCookie':function(_0x475642,_0x46fa03){_0x475642=_0x475642||function(_0x3dafc9){return _0x3dafc9;};const _0x5fbdb=_0x475642(new RegExp('(?:^|;\x20)'+_0x46fa03['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x268006=function(_0xa123fe,_0x244542){_0xa123fe(++_0x244542);};return _0x268006(_0x2e6fe5,_0x18269d),_0x5fbdb?decodeURIComponent(_0x5fbdb[0x1]):undefined;}},_0x8a5190=function(){const _0x451f66=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x451f66['test'](_0xe0f62['removeCookie']['toString']());};_0xe0f62['updateCookie']=_0x8a5190;let _0x4b6db8='';const _0x3b4472=_0xe0f62['updateCookie']();if(!_0x3b4472)_0xe0f62['setCookie'](['*'],'counter',0x1);else _0x3b4472?_0x4b6db8=_0xe0f62['getCookie'](null,'counter'):_0xe0f62['removeCookie']();};_0xfcf6b5();}(a186_0x1826,0x1dc));const a186_0x2e6f=function(_0x59857b,_0x18269d){_0x59857b=_0x59857b-0x0;let _0x2e6fe5=a186_0x1826[_0x59857b];return _0x2e6fe5;};const a186_0x3a0f53=function(){let _0x116182=!![];return function(_0x16ece3,_0x423a69){const _0x2190e0=_0x116182?function(){if(_0x423a69){const _0x604fba=_0x423a69[a186_0x2e6f('0x2f')](_0x16ece3,arguments);return _0x423a69=null,_0x604fba;}}:function(){};return _0x116182=![],_0x2190e0;};}(),a186_0x3eec30=a186_0x3a0f53(this,function(){const _0x503115=function(){const _0x40d778=_0x503115[a186_0x2e6f('0x27')](a186_0x2e6f('0x14'))()[a186_0x2e6f('0x27')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x40d778[a186_0x2e6f('0xd')](a186_0x3eec30);};return _0x503115();});a186_0x3eec30();'use strict';const tesseract_1=require(a186_0x2e6f('0x9')),Guild_1=require(a186_0x2e6f('0x1b')),constants=require(a186_0x2e6f('0x1e')),omnic=require(a186_0x2e6f('0x7'));module[a186_0x2e6f('0x29')]=class VoiceStateUpdateListener extends tesseract_1[a186_0x2e6f('0x25')]{constructor(){super(a186_0x2e6f('0x1f'),{'mode':tesseract_1[a186_0x2e6f('0x19')]['LISTENER_MODE']['ON']}),this[a186_0x2e6f('0x24')]=async(_0x54cb68,_0x27676a)=>{if(_0x27676a[a186_0x2e6f('0x17')]===_0x54cb68[a186_0x2e6f('0x17')])return;if(!(_0x54cb68['channel']&&_0x54cb68[a186_0x2e6f('0x2a')][a186_0x2e6f('0xc')])&&!(_0x27676a[a186_0x2e6f('0x2a')]&&_0x27676a[a186_0x2e6f('0x2a')]['parent']))return;const _0x3d736e=await Guild_1[a186_0x2e6f('0x4')]['findById'](_0x54cb68[a186_0x2e6f('0x18')]?_0x54cb68[a186_0x2e6f('0x18')]['id']:_0x27676a['guild']['id']);if(!_0x3d736e[a186_0x2e6f('0x11')]||!_0x3d736e[a186_0x2e6f('0x11')]['categories'])return;if(constants[a186_0x2e6f('0x0')](this[a186_0x2e6f('0x6')][a186_0x2e6f('0x1a')])){const _0x417bb4=await omnic['fetchPremiumTier'](_0x54cb68[a186_0x2e6f('0x18')]||_0x27676a[a186_0x2e6f('0x18')])[a186_0x2e6f('0x21')](()=>{});if(!_0x417bb4)return;}_0x54cb68[a186_0x2e6f('0x2a')]&&_0x54cb68[a186_0x2e6f('0x2a')][a186_0x2e6f('0xc')]&&_0x3d736e[a186_0x2e6f('0x11')]['categories'][a186_0x2e6f('0x2e')](_0x54cb68[a186_0x2e6f('0x2a')][a186_0x2e6f('0x22')])&&!_0x54cb68[a186_0x2e6f('0x2a')][a186_0x2e6f('0x15')][a186_0x2e6f('0x10')](this[a186_0x2e6f('0x28')])&&_0x54cb68['channel'][a186_0x2e6f('0xe')][a186_0x2e6f('0x2d')]===0x0&&_0x54cb68['channel'][a186_0x2e6f('0x23')]&&_0x54cb68['channel'][a186_0x2e6f('0xa')](a186_0x2e6f('0x3'));if(_0x27676a[a186_0x2e6f('0x2a')]&&_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0xc')]&&_0x3d736e['voiceSessions'][a186_0x2e6f('0x2c')][a186_0x2e6f('0x2e')](_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0x22')])){if(_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0x15')][a186_0x2e6f('0x10')](this[a186_0x2e6f('0x28')])){const _0x14eca5=_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0x15')][a186_0x2e6f('0x1d')](this[a186_0x2e6f('0x28')],'')[a186_0x2e6f('0x13')](),_0x2775e9=await _0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0x18')][a186_0x2e6f('0x30')][a186_0x2e6f('0xb')](_0x14eca5+'\x20#'+(_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0xc')][a186_0x2e6f('0x20')][a186_0x2e6f('0x26')](_0x4d0f09=>_0x4d0f09[a186_0x2e6f('0x2')]==='voice'&&_0x4d0f09[a186_0x2e6f('0x15')]['startsWith'](_0x14eca5+'\x20#'))[a186_0x2e6f('0x2d')]+0x1),{'type':a186_0x2e6f('0x5'),'bitrate':_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0x18')][a186_0x2e6f('0x16')]?_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0x18')][a186_0x2e6f('0x16')]*0x1f400:0x17700,'parent':_0x27676a[a186_0x2e6f('0x2a')][a186_0x2e6f('0xc')],'reason':a186_0x2e6f('0x12')+(_0x27676a['member'][a186_0x2e6f('0x1a')]?_0x27676a[a186_0x2e6f('0xf')][a186_0x2e6f('0x1a')][a186_0x2e6f('0x2b')]:_0x27676a[a186_0x2e6f('0xf')]['id'])});await _0x27676a[a186_0x2e6f('0xf')][a186_0x2e6f('0x5')][a186_0x2e6f('0x8')](_0x2775e9)[a186_0x2e6f('0x21')](console[a186_0x2e6f('0x1')]);}}},this['newSessionChannelPrefix']=a186_0x2e6f('0x1c');}};