const a230_0x3f2c04=a230_0x3375;(function(_0x2f156b,_0x56e29b){const _0x2eb145=a230_0x3375,_0xebadaa=_0x2f156b();while(!![]){try{const _0x58fc3e=-parseInt(_0x2eb145(0x1e4))/0x1*(parseInt(_0x2eb145(0x1e9))/0x2)+parseInt(_0x2eb145(0x1ea))/0x3+parseInt(_0x2eb145(0x1ca))/0x4+-parseInt(_0x2eb145(0x1ef))/0x5*(-parseInt(_0x2eb145(0x1db))/0x6)+parseInt(_0x2eb145(0x1ee))/0x7+parseInt(_0x2eb145(0x1d3))/0x8*(parseInt(_0x2eb145(0x1d1))/0x9)+-parseInt(_0x2eb145(0x1c7))/0xa;if(_0x58fc3e===_0x56e29b)break;else _0xebadaa['push'](_0xebadaa['shift']());}catch(_0x4e3c74){_0xebadaa['push'](_0xebadaa['shift']());}}}(a230_0x37dc,0x6be5a));const a230_0x22d03e=(function(){let _0x165c2a=!![];return function(_0x50f35a,_0x30ed43){const _0x3bcc78=_0x165c2a?function(){const _0x500989=a230_0x3375;if(_0x30ed43){const _0x56a2dd=_0x30ed43[_0x500989(0x1dc)](_0x50f35a,arguments);return _0x30ed43=null,_0x56a2dd;}}:function(){};return _0x165c2a=![],_0x3bcc78;};}()),a230_0x5b87de=a230_0x22d03e(this,function(){const _0xb365ef=a230_0x3375;return a230_0x5b87de[_0xb365ef(0x1e7)]()[_0xb365ef(0x1df)](_0xb365ef(0x1e6))[_0xb365ef(0x1e7)]()[_0xb365ef(0x1c3)](a230_0x5b87de)[_0xb365ef(0x1df)](_0xb365ef(0x1e6));});a230_0x5b87de();function a230_0x3375(_0x1053fe,_0x326007){const _0x2faf75=a230_0x37dc();return a230_0x3375=function(_0x5b87de,_0x22d03e){_0x5b87de=_0x5b87de-0x1c1;let _0x37dcbe=_0x2faf75[_0x5b87de];return _0x37dcbe;},a230_0x3375(_0x1053fe,_0x326007);}'use strict';const tesseract_1=require(a230_0x3f2c04(0x1dd)),discord_js_1=require(a230_0x3f2c04(0x1d9)),Guild_1=require(a230_0x3f2c04(0x1c5)),Case_1=require(a230_0x3f2c04(0x1ce));module['exports']=class BastionGuild extends discord_js_1[a230_0x3f2c04(0x1e3)]{['document'];[a230_0x3f2c04(0x1c8)];[a230_0x3f2c04(0x1c9)];constructor(_0x4349ab,_0x897ea8){super(_0x4349ab,_0x897ea8),this['music']={'queue':[],'history':[],'playing':![],'repeat':![],'skipVotes':[]},this['invites']={};}async[a230_0x3f2c04(0x1e0)](){const _0x1de428=a230_0x3f2c04;return await Guild_1['default'][_0x1de428(0x1e8)](this['id']);}async[a230_0x3f2c04(0x1d8)](_0x34a0b6){const _0x4d6fc4=a230_0x3f2c04,_0x2b1d9c=await this[_0x4d6fc4(0x1e0)](),_0x55c251=this[_0x4d6fc4(0x1c6)]['channels'][_0x4d6fc4(0x1c1)]['filter'](_0x2764f4=>_0x2764f4['type']==='text'||_0x2764f4[_0x4d6fc4(0x1d4)]==='news');if(_0x2b1d9c[_0x4d6fc4(0x1e5)]&&_0x55c251['has'](_0x2b1d9c['serverLogChannelId'])){const _0x22f951=_0x55c251[_0x4d6fc4(0x1de)](_0x2b1d9c[_0x4d6fc4(0x1e5)]);if(_0x22f951 instanceof discord_js_1['NewsChannel']||_0x22f951 instanceof discord_js_1[_0x4d6fc4(0x1d2)])return _0x22f951[_0x4d6fc4(0x1ed)]({'embed':{'color':tesseract_1[_0x4d6fc4(0x1cf)][_0x4d6fc4(0x1d6)][_0x4d6fc4(0x1eb)],'title':this['client']['locale'][_0x4d6fc4(0x1c2)](_0x2b1d9c[_0x4d6fc4(0x1d7)],_0x4d6fc4(0x1c4),_0x34a0b6[_0x4d6fc4(0x1d0)]),'fields':_0x34a0b6[_0x4d6fc4(0x1ec)],'footer':{'text':_0x34a0b6['footer']},'timestamp':_0x34a0b6['timestamp']||new Date()}});}}async['createModerationLog'](_0x37257e){const _0x447cf2=a230_0x3f2c04,_0x4008a4=await this[_0x447cf2(0x1e0)](),_0x1c51fa=this[_0x447cf2(0x1c6)]['channels'][_0x447cf2(0x1c1)][_0x447cf2(0x1e2)](_0x32c488=>_0x32c488['type']===_0x447cf2(0x1f0)||_0x32c488[_0x447cf2(0x1d4)]==='news');if(_0x4008a4['moderationLogChannelId']&&_0x1c51fa[_0x447cf2(0x1f1)](_0x4008a4[_0x447cf2(0x1cb)])){const _0x56dd08=_0x1c51fa[_0x447cf2(0x1de)](_0x4008a4[_0x447cf2(0x1cb)]);if(_0x56dd08 instanceof discord_js_1[_0x447cf2(0x1da)]||_0x56dd08 instanceof discord_js_1[_0x447cf2(0x1d2)]){_0x4008a4[_0x447cf2(0x1cc)]=_0x4008a4[_0x447cf2(0x1cc)]?_0x4008a4[_0x447cf2(0x1cc)]+0x1:0x1;const _0x22235a=await _0x56dd08[_0x447cf2(0x1ed)]({'embed':{'color':tesseract_1[_0x447cf2(0x1cf)][_0x447cf2(0x1d6)]['ORANGE'],'title':this[_0x447cf2(0x1c6)][_0x447cf2(0x1e1)][_0x447cf2(0x1c2)](_0x4008a4[_0x447cf2(0x1d7)],_0x447cf2(0x1c4),_0x37257e[_0x447cf2(0x1d0)]),'fields':_0x37257e['fields'],'footer':{'text':'Case\x20#'+_0x4008a4['moderationCaseCount']},'timestamp':new Date()}});await Case_1[_0x447cf2(0x1cd)]['create']({'guild':this['id'],'number':_0x4008a4[_0x447cf2(0x1cc)],'messageId':_0x22235a['id']}),await _0x4008a4[_0x447cf2(0x1d5)]();}}}};function a230_0x37dc(){const _0x33872f=['../models/Case','Constants','event','9pDADDs','TextChannel','2031144tuEOoV','type','save','COLORS','language','createLog','discord.js','NewsChannel','12588eVWocE','apply','@bastion/tesseract','get','search','getDocument','locale','filter','Guild','196pIGhHu','serverLogChannelId','(((.+)+)+)+$','toString','findById','3942BGRTsP','491589uHjtHK','SOMEWHAT_DARK','fields','send','2439906GnwlLm','1650zVFoKB','text','has','cache','getString','constructor','events','../models/Guild','client','8504120MDwjEN','music','invites','880080oVkNsm','moderationLogChannelId','moderationCaseCount','default'];a230_0x37dc=function(){return _0x33872f;};return a230_0x37dc();}