const a63_0x16fc=['base64','question','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','correct_answer','apply','!\x2020\x20seconds\x20isn\x27t\x20enough\x20for\x20you?','RED','send','author','includes','map','!\x20The\x20correct\x20answer\x20is\x20**','content','IRIS','difficulty','Constants','Trivia\x20Question\x20for\x20','**Q.\x20','member','awaitMessages','COLORS','../../utils/arrays','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','exports','first','category','incorrect_answers','displayName','Play\x20a\x20game\x20of\x20trivia\x20and\x20see\x20if\x20you\x20can\x20answer\x20the\x20questions\x20of\x20various\x20difficulty\x20across\x20multiple\x20categories.','**\x0a\x0a','@bastion/tesseract','channel','concat','trivia-api','parseInt','!\x20That\x20was\x20the\x20correct\x20answer.','guild','Hey,\x20','Difficulty','getQuestions','trivia'];(function(_0x6e40f0,_0x16fc62){const _0x9618a4=function(_0x2b2f50){while(--_0x2b2f50){_0x6e40f0['push'](_0x6e40f0['shift']());}},_0x2f76b2=function(){const _0x6c04b3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x236981,_0x1c6c75,_0x131589,_0x390211){_0x390211=_0x390211||{};let _0x1e1864=_0x1c6c75+'='+_0x131589,_0x35a0dd=0x0;for(let _0xb14980=0x0,_0x244fee=_0x236981['length'];_0xb14980<_0x244fee;_0xb14980++){const _0x33dff0=_0x236981[_0xb14980];_0x1e1864+=';\x20'+_0x33dff0;const _0x4eee80=_0x236981[_0x33dff0];_0x236981['push'](_0x4eee80),_0x244fee=_0x236981['length'],_0x4eee80!==!![]&&(_0x1e1864+='='+_0x4eee80);}_0x390211['cookie']=_0x1e1864;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e5517,_0x42a8e5){_0x3e5517=_0x3e5517||function(_0x429415){return _0x429415;};const _0x485428=_0x3e5517(new RegExp('(?:^|;\x20)'+_0x42a8e5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4e65ff=function(_0x492051,_0x42b9b4){_0x492051(++_0x42b9b4);};return _0x4e65ff(_0x9618a4,_0x16fc62),_0x485428?decodeURIComponent(_0x485428[0x1]):undefined;}},_0x7fd372=function(){const _0x24a7d4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x24a7d4['test'](_0x6c04b3['removeCookie']['toString']());};_0x6c04b3['updateCookie']=_0x7fd372;let _0xfbcc88='';const _0x2ac1f2=_0x6c04b3['updateCookie']();if(!_0x2ac1f2)_0x6c04b3['setCookie'](['*'],'counter',0x1);else _0x2ac1f2?_0xfbcc88=_0x6c04b3['getCookie'](null,'counter'):_0x6c04b3['removeCookie']();};_0x2f76b2();}(a63_0x16fc,0x107));const a63_0x9618=function(_0x6e40f0,_0x16fc62){_0x6e40f0=_0x6e40f0-0x0;let _0x9618a4=a63_0x16fc[_0x6e40f0];return _0x9618a4;};const _0x2c3ec6=a63_0x9618,a63_0x6c04b3=function(){let _0xfbcc88=!![];return function(_0x2ac1f2,_0x236981){const _0x1c6c75=_0xfbcc88?function(){const _0x565542=a63_0x9618;if(_0x236981){const _0x131589=_0x236981[_0x565542('0x0')](_0x2ac1f2,arguments);return _0x236981=null,_0x131589;}}:function(){};return _0xfbcc88=![],_0x1c6c75;};}(),a63_0x2b2f50=a63_0x6c04b3(this,function(){const _0x390211=function(){const _0xb7a33b=a63_0x9618,_0x1e1864=_0x390211[_0xb7a33b('0x13')](_0xb7a33b('0x12'))()['constructor'](_0xb7a33b('0x29'));return!_0x1e1864['test'](a63_0x2b2f50);};return _0x390211();});a63_0x2b2f50();'use strict';const tesseract_1=require(_0x2c3ec6('0x1b')),he_1=require('he'),arrays=require(_0x2c3ec6('0x11')),Trivia=require(_0x2c3ec6('0x1e')),trivia=new Trivia({'encoding':_0x2c3ec6('0x26')});module[_0x2c3ec6('0x14')]=class TriviaCommand extends tesseract_1[_0x2c3ec6('0x28')]{constructor(){const _0x1da1f1=_0x2c3ec6;super(_0x1da1f1('0x25'),{'description':_0x1da1f1('0x19'),'triggers':[],'arguments':{},'scope':_0x1da1f1('0x21'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this['exec']=async _0x35a0dd=>{const _0x4b1eee=_0x1da1f1,_0xb14980=await trivia[_0x4b1eee('0x24')](),_0x244fee=_0xb14980['results'][0x0],_0x33dff0=arrays['shuffle'](_0x244fee[_0x4b1eee('0x17')][_0x4b1eee('0x1d')](_0x244fee[_0x4b1eee('0x2a')]));await _0x35a0dd['channel'][_0x4b1eee('0x3')]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x4b1eee('0x9')],'title':_0x4b1eee('0xc')+_0x35a0dd[_0x4b1eee('0xe')][_0x4b1eee('0x18')],'description':_0x4b1eee('0xd')+he_1['decode'](_0x244fee[_0x4b1eee('0x27')])+_0x4b1eee('0x1a')+_0x33dff0[_0x4b1eee('0x6')]((_0x3e5517,_0x42a8e5)=>_0x42a8e5+0x1+'.\x20'+_0x3e5517)['join']('\x0a'),'fields':[{'name':_0x4b1eee('0x23'),'value':_0x244fee[_0x4b1eee('0xa')],'inline':!![]},{'name':'Category','value':_0x244fee[_0x4b1eee('0x16')],'inline':!![]}],'footer':{'text':'You\x20have\x2020\x20seconds\x20to\x20answer\x20the\x20question.'}}});const _0x4eee80=await _0x35a0dd[_0x4b1eee('0x1c')][_0x4b1eee('0xf')](_0x485428=>_0x485428['author']['id']===_0x35a0dd[_0x4b1eee('0x4')]['id']&&['1','2','3','4'][_0x4b1eee('0x5')](_0x485428['content']),{'max':0x1,'time':0x4e20});if(_0x4eee80['size']){const _0x4e65ff=Number[_0x4b1eee('0x1f')](_0x4eee80[_0x4b1eee('0x15')]()[_0x4b1eee('0x8')])-0x1;_0x33dff0[_0x4e65ff]===_0x244fee[_0x4b1eee('0x2a')]?await _0x35a0dd[_0x4b1eee('0x1c')]['send']({'embed':{'color':tesseract_1[_0x4b1eee('0xb')]['COLORS']['GREEN'],'description':'You\x27re\x20absolutely\x20right\x20'+_0x35a0dd[_0x4b1eee('0xe')][_0x4b1eee('0x18')]+_0x4b1eee('0x20')}}):await _0x35a0dd[_0x4b1eee('0x1c')]['send']({'embed':{'color':tesseract_1[_0x4b1eee('0xb')][_0x4b1eee('0x10')][_0x4b1eee('0x2')],'description':'You\x27re\x20wrong,\x20'+_0x35a0dd[_0x4b1eee('0xe')][_0x4b1eee('0x18')]+_0x4b1eee('0x7')+_0x244fee['correct_answer']+'**.'}});}else await _0x35a0dd[_0x4b1eee('0x1c')][_0x4b1eee('0x3')]({'embed':{'color':tesseract_1[_0x4b1eee('0xb')]['COLORS'][_0x4b1eee('0x2')],'description':_0x4b1eee('0x22')+_0x35a0dd[_0x4b1eee('0xe')][_0x4b1eee('0x18')]+_0x4b1eee('0x1')}});};}};