const a49_0x2562=['toSnakeCase','bastion.name','getString','../../utils/strings','Need\x20more\x20details?','Constants','compile','language','\x20Category','didYouKnowCommandsCount','commands\x20--search\x20QUERY','@bastion/tesseract','Commands\x20in\x20','channel','commandsWebsite','COLORS','category','commands','commands\x20CATEGORY','test','bastion.website','send','Want\x20the\x20complete\x20list?','\x20is\x20an\x20invalid\x20command\x20category.\x20Use\x20the\x20`commands`\x20command\x20without\x20any\x20arguments\x20to\x20get\x20a\x20list\x20of\x20all\x20the\x20available\x20command\x20categories.','catch','size','includes','client','map','Command\x20Categories','keys','getConstant','guild','apply','exports','manager','toLowerCase','values','push','return\x20/\x22\x20+\x20this\x20+\x20\x22/','```css\x0a','commandCategoriesCommand','exec','toString','categoryCommandsCommand','commandSearchFound','info','Command\x20Search','YELLOW','```','length','Commands','name','```bash\x0acommands\x20--help```','slice','join','document','locale','modules','constructor','filter','Command','snakeToTitleCase','search'];(function(_0x405df5,_0x256238){const _0x5b2c1a=function(_0x4a7371){while(--_0x4a7371){_0x405df5['push'](_0x405df5['shift']());}};const _0x3a361b=function(){const _0x4dca2e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x176514,_0xb932f5,_0x556814,_0x3a7034){_0x3a7034=_0x3a7034||{};let _0x21f584=_0xb932f5+'='+_0x556814;let _0x7b25d3=0x0;for(let _0x121465=0x0,_0x289fbe=_0x176514['length'];_0x121465<_0x289fbe;_0x121465++){const _0x1e84c4=_0x176514[_0x121465];_0x21f584+=';\x20'+_0x1e84c4;const _0x4c9c9d=_0x176514[_0x1e84c4];_0x176514['push'](_0x4c9c9d);_0x289fbe=_0x176514['length'];if(_0x4c9c9d!==!![]){_0x21f584+='='+_0x4c9c9d;}}_0x3a7034['cookie']=_0x21f584;},'removeCookie':function(){return'dev';},'getCookie':function(_0x26552d,_0xb6c98b){_0x26552d=_0x26552d||function(_0x371c13){return _0x371c13;};const _0x2e4988=_0x26552d(new RegExp('(?:^|;\x20)'+_0xb6c98b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x272670=function(_0x1ec008,_0x439835){_0x1ec008(++_0x439835);};_0x272670(_0x5b2c1a,_0x256238);return _0x2e4988?decodeURIComponent(_0x2e4988[0x1]):undefined;}};const _0x2716a2=function(){const _0x545672=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x545672['test'](_0x4dca2e['removeCookie']['toString']());};_0x4dca2e['updateCookie']=_0x2716a2;let _0x37b22c='';const _0x45b25e=_0x4dca2e['updateCookie']();if(!_0x45b25e){_0x4dca2e['setCookie'](['*'],'counter',0x1);}else if(_0x45b25e){_0x37b22c=_0x4dca2e['getCookie'](null,'counter');}else{_0x4dca2e['removeCookie']();}};_0x3a361b();}(a49_0x2562,0x172));const a49_0x5b2c=function(_0x405df5,_0x256238){_0x405df5=_0x405df5-0x0;let _0x5b2c1a=a49_0x2562[_0x405df5];return _0x5b2c1a;};const a49_0x4dca2e=function(){let _0x2d4070=!![];return function(_0x47bf03,_0x498747){const _0x344462=_0x2d4070?function(){if(_0x498747){const _0x41ed93=_0x498747[a49_0x5b2c('0x2f')](_0x47bf03,arguments);_0x498747=null;return _0x41ed93;}}:function(){};_0x2d4070=![];return _0x344462;};}();const a49_0x4a7371=a49_0x4dca2e(this,function(){const _0x212ead=function(){const _0x22f1ad=_0x212ead[a49_0x5b2c('0x9')](a49_0x5b2c('0x35'))()[a49_0x5b2c('0x14')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x22f1ad[a49_0x5b2c('0x21')](a49_0x4a7371);};return _0x212ead();});a49_0x4a7371();'use strict';const tesseract_1=require(a49_0x5b2c('0x19'));const strings=require(a49_0x5b2c('0x11'));module[a49_0x5b2c('0x30')]=class Commands extends tesseract_1[a49_0x5b2c('0xb')]{constructor(){super(a49_0x5b2c('0x1f'),{'description':'It\x20allows\x20you\x20the\x20see\x20the\x20list\x20of\x20commands\x20available\x20in\x20Bastion.\x20You\x20can\x20also\x20use\x20it\x20to\x20search\x20for\x20commands\x20matching\x20a\x20given\x20query.','triggers':[],'arguments':{'alias':{'search':['s']},'string':[a49_0x5b2c('0xd')]},'scope':a49_0x5b2c('0x2e'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a49_0x5b2c('0x1f'),a49_0x5b2c('0x20'),a49_0x5b2c('0x18')]});this[a49_0x5b2c('0x38')]=async(_0x425bb3,_0x854daf)=>{if(_0x854daf[a49_0x5b2c('0xd')]){const _0x1baa03=this['manager']['modules'][a49_0x5b2c('0x2a')](_0x47157e=>_0x47157e['name'])[a49_0x5b2c('0xa')](_0x5100c2=>_0x5100c2[a49_0x5b2c('0x32')]()[a49_0x5b2c('0x28')](_0x854daf[a49_0x5b2c('0xd')][a49_0x5b2c('0x32')]()));return await _0x425bb3[a49_0x5b2c('0x1b')][a49_0x5b2c('0x23')]({'embed':{'color':tesseract_1[a49_0x5b2c('0x13')][a49_0x5b2c('0x1d')][a49_0x5b2c('0x3e')],'author':{'name':this['client']['locale'][a49_0x5b2c('0x2d')](a49_0x5b2c('0xf')),'url':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')]['getConstant'](a49_0x5b2c('0x22'))},'title':a49_0x5b2c('0x3d'),'url':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')]['getConstant'](a49_0x5b2c('0x22'))+'/commands','description':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')][a49_0x5b2c('0x10')](_0x425bb3[a49_0x5b2c('0x2e')][a49_0x5b2c('0x6')][a49_0x5b2c('0x15')],'info',a49_0x5b2c('0x3b'),_0x1baa03['length'][a49_0x5b2c('0x39')](),_0x854daf[a49_0x5b2c('0xd')]),'fields':[{'name':a49_0x5b2c('0x1'),'value':'```\x0a'+_0x1baa03[a49_0x5b2c('0x4')](0x0,0xa)[a49_0x5b2c('0x5')]('\x0a')+a49_0x5b2c('0x3f')},{'name':a49_0x5b2c('0x24'),'value':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')]['getString'](_0x425bb3[a49_0x5b2c('0x2e')][a49_0x5b2c('0x6')][a49_0x5b2c('0x15')],a49_0x5b2c('0x3c'),a49_0x5b2c('0x1c'))}],'footer':{'text':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')]['getString'](_0x425bb3[a49_0x5b2c('0x2e')][a49_0x5b2c('0x6')][a49_0x5b2c('0x15')],a49_0x5b2c('0x3c'),a49_0x5b2c('0x17'),this['manager'][a49_0x5b2c('0x8')]['size'])}}})[a49_0x5b2c('0x26')](()=>{});}const _0x6f236c={};for(const _0x4aef0f of this[a49_0x5b2c('0x31')]['modules'][a49_0x5b2c('0x33')]()){if(_0x4aef0f[a49_0x5b2c('0x1e')]in _0x6f236c){_0x6f236c[_0x4aef0f[a49_0x5b2c('0x1e')]][a49_0x5b2c('0x34')](_0x4aef0f[a49_0x5b2c('0x2')]);}else{_0x6f236c[_0x4aef0f[a49_0x5b2c('0x1e')]]=[_0x4aef0f[a49_0x5b2c('0x2')]];}}if(_0x854daf['_'][a49_0x5b2c('0x0')]){const _0x20ccdd=strings[a49_0x5b2c('0xe')](_0x854daf['_'][a49_0x5b2c('0x5')]('\x20'));if(Object[a49_0x5b2c('0x2c')](_0x6f236c)[a49_0x5b2c('0x28')](_0x20ccdd)){return await _0x425bb3[a49_0x5b2c('0x1b')][a49_0x5b2c('0x23')]({'embed':{'color':tesseract_1[a49_0x5b2c('0x13')][a49_0x5b2c('0x1d')][a49_0x5b2c('0x3e')],'author':{'name':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')][a49_0x5b2c('0x2d')](a49_0x5b2c('0xf')),'url':this[a49_0x5b2c('0x29')]['locale'][a49_0x5b2c('0x2d')](a49_0x5b2c('0x22'))},'title':a49_0x5b2c('0x1a')+strings[a49_0x5b2c('0xc')](_0x20ccdd)+a49_0x5b2c('0x16'),'url':this['client'][a49_0x5b2c('0x7')][a49_0x5b2c('0x2d')](a49_0x5b2c('0x22'))+'/commands','description':this[a49_0x5b2c('0x29')]['locale']['getString'](_0x425bb3[a49_0x5b2c('0x2e')][a49_0x5b2c('0x6')]['language'],a49_0x5b2c('0x3c'),a49_0x5b2c('0x37'),Object[a49_0x5b2c('0x2c')](_0x6f236c)[a49_0x5b2c('0x0')]),'fields':[{'name':a49_0x5b2c('0x1'),'value':a49_0x5b2c('0x36')+_0x6f236c[_0x20ccdd]['join']('\x0a')+a49_0x5b2c('0x3f')},{'name':a49_0x5b2c('0x12'),'value':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')]['getString'](_0x425bb3['guild']['document']['language'],a49_0x5b2c('0x3c'),'commandDetailsOption')+a49_0x5b2c('0x3')}],'footer':{'text':this[a49_0x5b2c('0x29')]['locale'][a49_0x5b2c('0x10')](_0x425bb3['guild']['document'][a49_0x5b2c('0x15')],a49_0x5b2c('0x3c'),'didYouKnowCommandsCount',this[a49_0x5b2c('0x31')][a49_0x5b2c('0x8')]['size'])}}})[a49_0x5b2c('0x26')](()=>{});}return await _0x425bb3['channel']['send']({'embed':{'color':tesseract_1['Constants'][a49_0x5b2c('0x1d')][a49_0x5b2c('0x3e')],'description':strings['snakeToTitleCase'](_0x20ccdd)+a49_0x5b2c('0x25')}})[a49_0x5b2c('0x26')](()=>{});}await _0x425bb3[a49_0x5b2c('0x1b')][a49_0x5b2c('0x23')]({'embed':{'color':tesseract_1[a49_0x5b2c('0x13')][a49_0x5b2c('0x1d')][a49_0x5b2c('0x3e')],'author':{'name':this[a49_0x5b2c('0x29')][a49_0x5b2c('0x7')][a49_0x5b2c('0x2d')]('bastion.name'),'url':this['client'][a49_0x5b2c('0x7')][a49_0x5b2c('0x2d')](a49_0x5b2c('0x22'))},'title':a49_0x5b2c('0x2b'),'url':this['client'][a49_0x5b2c('0x7')]['getConstant'](a49_0x5b2c('0x22'))+'/commands','description':this[a49_0x5b2c('0x29')]['locale'][a49_0x5b2c('0x10')](_0x425bb3[a49_0x5b2c('0x2e')]['document'][a49_0x5b2c('0x15')],a49_0x5b2c('0x3c'),a49_0x5b2c('0x3a')),'fields':[{'name':a49_0x5b2c('0x2b'),'value':a49_0x5b2c('0x36')+Object[a49_0x5b2c('0x2c')](_0x6f236c)['map'](_0x54cef2=>strings['snakeToTitleCase'](_0x54cef2))['join']('\x0a')+a49_0x5b2c('0x3f')},{'name':a49_0x5b2c('0x24'),'value':this[a49_0x5b2c('0x29')]['locale']['getString'](_0x425bb3[a49_0x5b2c('0x2e')]['document'][a49_0x5b2c('0x15')],a49_0x5b2c('0x3c'),a49_0x5b2c('0x1c'))}],'footer':{'text':this['client'][a49_0x5b2c('0x7')]['getString'](_0x425bb3[a49_0x5b2c('0x2e')]['document'][a49_0x5b2c('0x15')],a49_0x5b2c('0x3c'),'didYouKnowCommandsCount',this['manager'][a49_0x5b2c('0x8')][a49_0x5b2c('0x27')])}}})[a49_0x5b2c('0x26')](()=>{});};}};