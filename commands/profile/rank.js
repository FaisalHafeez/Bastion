const a110_0x4417=['apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','experience','../../models/Member','tag','rank','It\x20allows\x20you\x20to\x20see\x20your\x20(or\x20any\x20of\x20the\x20server\x20member\x27s)\x20rank,\x20level,\x20experience,\x20and\x20karma.','Command','Constants','@bastion/tesseract','user','Experience','document','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','resolveGuildMember','exports','findById','color','errors','catch','displayAvatarURL','constructor','level','findOne','getString','send','Level','default','IRIS','../../models/User','checkProfile','find','client','guild','channel','Rank\x20','member','author','exec','karma','compile','language'];(function(_0x1a9e0c,_0x44176f){const _0x301ec8=function(_0x23cefa){while(--_0x23cefa){_0x1a9e0c['push'](_0x1a9e0c['shift']());}};const _0x37893a=function(){const _0x544744={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x144dd7,_0x9d55ca,_0x291d84,_0x1513b9){_0x1513b9=_0x1513b9||{};let _0x24ef4d=_0x9d55ca+'='+_0x291d84;let _0x151d12=0x0;for(let _0x2f6e34=0x0,_0x7a697a=_0x144dd7['length'];_0x2f6e34<_0x7a697a;_0x2f6e34++){const _0x12e96f=_0x144dd7[_0x2f6e34];_0x24ef4d+=';\x20'+_0x12e96f;const _0x397ba6=_0x144dd7[_0x12e96f];_0x144dd7['push'](_0x397ba6);_0x7a697a=_0x144dd7['length'];if(_0x397ba6!==!![]){_0x24ef4d+='='+_0x397ba6;}}_0x1513b9['cookie']=_0x24ef4d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x9acfaa,_0x38c4de){_0x9acfaa=_0x9acfaa||function(_0x4adceb){return _0x4adceb;};const _0x52f034=_0x9acfaa(new RegExp('(?:^|;\x20)'+_0x38c4de['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x697f27=function(_0x3ffc14,_0x5bb40e){_0x3ffc14(++_0x5bb40e);};_0x697f27(_0x301ec8,_0x44176f);return _0x52f034?decodeURIComponent(_0x52f034[0x1]):undefined;}};const _0x50fde4=function(){const _0x166efa=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x166efa['test'](_0x544744['removeCookie']['toString']());};_0x544744['updateCookie']=_0x50fde4;let _0x8d3515='';const _0x4b1e44=_0x544744['updateCookie']();if(!_0x4b1e44){_0x544744['setCookie'](['*'],'counter',0x1);}else if(_0x4b1e44){_0x8d3515=_0x544744['getCookie'](null,'counter');}else{_0x544744['removeCookie']();}};_0x37893a();}(a110_0x4417,0xd3));const a110_0x301e=function(_0x1a9e0c,_0x44176f){_0x1a9e0c=_0x1a9e0c-0x0;let _0x301ec8=a110_0x4417[_0x1a9e0c];return _0x301ec8;};const a110_0x544744=function(){let _0x15c640=!![];return function(_0x854b22,_0x53d514){const _0x871674=_0x15c640?function(){if(_0x53d514){const _0x47711b=_0x53d514[a110_0x301e('0x4')](_0x854b22,arguments);_0x53d514=null;return _0x47711b;}}:function(){};_0x15c640=![];return _0x871674;};}();const a110_0x23cefa=a110_0x544744(this,function(){const _0x5615fe=function(){const _0x59c459=_0x5615fe[a110_0x301e('0x1a')](a110_0x301e('0x5'))()[a110_0x301e('0x2')](a110_0x301e('0x11'));return!_0x59c459[a110_0x301e('0x12')](a110_0x23cefa);};return _0x5615fe();});a110_0x23cefa();'use strict';const tesseract_1=require(a110_0x301e('0xd'));const Member_1=require(a110_0x301e('0x7'));const User_1=require(a110_0x301e('0x22'));module[a110_0x301e('0x14')]=class RankCommand extends tesseract_1[a110_0x301e('0xb')]{constructor(){super(a110_0x301e('0x9'),{'description':a110_0x301e('0xa'),'triggers':[a110_0x301e('0x1b'),'xp'],'arguments':{},'scope':a110_0x301e('0x26'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a110_0x301e('0x9'),'rank\x20USER']});this[a110_0x301e('0x0')]=async(_0x754a8,_0x44f4f9)=>{const _0x2b3682=_0x44f4f9['_']['length']?_0x44f4f9['_'][0x0]:_0x754a8[a110_0x301e('0x2a')]['id'];const _0x3129e6=_0x2b3682===_0x754a8['author']['id']?_0x754a8[a110_0x301e('0x29')]:this[a110_0x301e('0x25')]['resolver'][a110_0x301e('0x13')](_0x754a8[a110_0x301e('0x26')],_0x2b3682);if(!_0x3129e6)throw new Error(this[a110_0x301e('0x25')]['locale'][a110_0x301e('0x1d')](_0x754a8[a110_0x301e('0x26')][a110_0x301e('0x10')][a110_0x301e('0x3')],a110_0x301e('0x17'),'memberNotFound'));const _0x341024=_0x2b3682===_0x754a8[a110_0x301e('0x2a')]['id']?_0x754a8[a110_0x301e('0x2a')][a110_0x301e('0x10')]:await User_1['default'][a110_0x301e('0x15')](_0x2b3682);const _0x25ec68=_0x2b3682===_0x754a8[a110_0x301e('0x2a')]['id']?_0x3129e6[a110_0x301e('0x10')]:await Member_1[a110_0x301e('0x20')][a110_0x301e('0x1c')]({'user':_0x2b3682,'guild':_0x754a8['guild']['id']});if(!_0x341024||!_0x25ec68)throw new Error(this[a110_0x301e('0x25')]['locale'][a110_0x301e('0x1d')](_0x754a8[a110_0x301e('0x26')]['document'][a110_0x301e('0x3')],a110_0x301e('0x17'),'profileNotFound'));const _0x277c68=await Member_1[a110_0x301e('0x20')][a110_0x301e('0x24')]({'guild':_0x754a8[a110_0x301e('0x26')]['id']},null,{'sort':{'level':-0x1,'experience':-0x1,'karma':-0x1,'balance':-0x1}})['countDocuments']({'$or':[{'level':{'$gt':_0x25ec68[a110_0x301e('0x1b')]}},{'level':_0x25ec68[a110_0x301e('0x1b')],'experience':{'$gt':_0x25ec68[a110_0x301e('0x6')]}},{'level':_0x25ec68[a110_0x301e('0x1b')],'experience':_0x25ec68[a110_0x301e('0x6')],'karma':{'$gt':_0x25ec68['karma']}},{'level':_0x25ec68[a110_0x301e('0x1b')],'experience':_0x25ec68['experience'],'karma':_0x25ec68[a110_0x301e('0x1')],'balance':{'$gt':_0x25ec68['balance']}}]});await _0x754a8[a110_0x301e('0x27')][a110_0x301e('0x1e')]({'embed':{'color':_0x341024[a110_0x301e('0x16')]||tesseract_1[a110_0x301e('0xc')]['COLORS'][a110_0x301e('0x21')],'author':{'name':_0x3129e6[a110_0x301e('0xe')][a110_0x301e('0x8')]},'title':a110_0x301e('0x28')+(_0x277c68+0x1),'description':this['client']['locale'][a110_0x301e('0x1d')](_0x754a8[a110_0x301e('0x26')][a110_0x301e('0x10')]['language'],'info',a110_0x301e('0x23')),'fields':[{'name':a110_0x301e('0x1f'),'value':_0x25ec68[a110_0x301e('0x1b')],'inline':!![]},{'name':a110_0x301e('0xf'),'value':_0x25ec68[a110_0x301e('0x6')],'inline':!![]},{'name':'Karma','value':_0x25ec68['karma'],'inline':!![]}],'thumbnail':{'url':_0x3129e6[a110_0x301e('0xe')][a110_0x301e('0x19')]({'dynamic':!![],'size':0x200})}}})[a110_0x301e('0x18')](()=>{});};}};