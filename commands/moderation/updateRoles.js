const a90_0x4f09=['channel','exports','send','info','toBulletList','../../utils/arrays','Constants','errors','Command','length','@bastion/tesseract','updateRoles','getString','member','user','resolver','resolveGuildMember','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','updateRoles\x20--user\x20USER_ID\x20--remove\x20ROLE_ID','remove','tag','```diff\x0a','resolveRoles','../../utils/errors','exec','locale','map','language','catch','MANAGE_ROLES','client','filter','join','Role\x20Changes','ownerID','comparePositionTo','canManage','updateRoles\x20--user\x20USER_ID\x20--add\x20ROLE_ID','highest','DiscordError','document','roles','It\x20allows\x20you\x20to\x20update\x20roles\x20of\x20server\x20members.','INVALID_COMMAND_SYNTAX','author','guild','memberRoleUpdate','COLORS','add','name','constructor'];(function(_0x1ea6fe,_0x4f0981){const _0x157dad=function(_0x38299f){while(--_0x38299f){_0x1ea6fe['push'](_0x1ea6fe['shift']());}},_0x5a784b=function(){const _0x2007ca={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x498599,_0x37fe01,_0x17fdd7,_0x336828){_0x336828=_0x336828||{};let _0x3a1ab7=_0x37fe01+'='+_0x17fdd7,_0x4bbf3a=0x0;for(let _0xe92b58=0x0,_0x43f902=_0x498599['length'];_0xe92b58<_0x43f902;_0xe92b58++){const _0x38fab9=_0x498599[_0xe92b58];_0x3a1ab7+=';\x20'+_0x38fab9;const _0x29af9e=_0x498599[_0x38fab9];_0x498599['push'](_0x29af9e),_0x43f902=_0x498599['length'],_0x29af9e!==!![]&&(_0x3a1ab7+='='+_0x29af9e);}_0x336828['cookie']=_0x3a1ab7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4ce31c,_0x44fd38){_0x4ce31c=_0x4ce31c||function(_0x157468){return _0x157468;};const _0x11844e=_0x4ce31c(new RegExp('(?:^|;\x20)'+_0x44fd38['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x269797=function(_0x59732e,_0x370bf9){_0x59732e(++_0x370bf9);};return _0x269797(_0x157dad,_0x4f0981),_0x11844e?decodeURIComponent(_0x11844e[0x1]):undefined;}},_0x414326=function(){const _0x562d8b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x562d8b['test'](_0x2007ca['removeCookie']['toString']());};_0x2007ca['updateCookie']=_0x414326;let _0x4c936b='';const _0x3a7008=_0x2007ca['updateCookie']();if(!_0x3a7008)_0x2007ca['setCookie'](['*'],'counter',0x1);else _0x3a7008?_0x4c936b=_0x2007ca['getCookie'](null,'counter'):_0x2007ca['removeCookie']();};_0x5a784b();}(a90_0x4f09,0xe4));const a90_0x157d=function(_0x1ea6fe,_0x4f0981){_0x1ea6fe=_0x1ea6fe-0x0;let _0x157dad=a90_0x4f09[_0x1ea6fe];return _0x157dad;};const a90_0x2007ca=function(){let _0x4c936b=!![];return function(_0x3a7008,_0x498599){const _0x37fe01=_0x4c936b?function(){if(_0x498599){const _0x17fdd7=_0x498599['apply'](_0x3a7008,arguments);return _0x498599=null,_0x17fdd7;}}:function(){};return _0x4c936b=![],_0x37fe01;};}(),a90_0x38299f=a90_0x2007ca(this,function(){const _0x336828=function(){const _0x3a1ab7=_0x336828[a90_0x157d('0x1a')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a90_0x157d('0x1a')](a90_0x157d('0x2c'));return!_0x3a1ab7['test'](a90_0x38299f);};return _0x336828();});a90_0x38299f();'use strict';const tesseract_1=require(a90_0x157d('0x25')),arrays=require(a90_0x157d('0x20')),errors=require(a90_0x157d('0x32'));module[a90_0x157d('0x1c')]=class UpdateRoles extends tesseract_1[a90_0x157d('0x23')]{constructor(){super(a90_0x157d('0x26'),{'description':a90_0x157d('0x12'),'triggers':[],'arguments':{'alias':{'add':'a','remove':'r','user':'u'},'array':['add',a90_0x157d('0x2e')],'boolean':['removeAll'],'string':[a90_0x157d('0x18'),a90_0x157d('0x2e'),a90_0x157d('0x29')]},'scope':a90_0x157d('0x15'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[a90_0x157d('0x5')],'syntax':[a90_0x157d('0xd'),a90_0x157d('0x2d'),'updateRoles\x20--user\x20USER_ID\x20--remove-all']}),this[a90_0x157d('0x0')]=async(_0x4bbf3a,_0xe92b58)=>{const _0x43f902=this[a90_0x157d('0x6')][a90_0x157d('0x2a')][a90_0x157d('0x2b')](_0x4bbf3a['guild'],_0xe92b58[a90_0x157d('0x29')]);let _0x38fab9=this[a90_0x157d('0x6')][a90_0x157d('0x2a')][a90_0x157d('0x31')](_0x4bbf3a['guild'],_0xe92b58[a90_0x157d('0x18')]),_0x29af9e=this[a90_0x157d('0x6')][a90_0x157d('0x2a')]['resolveRoles'](_0x4bbf3a[a90_0x157d('0x15')],_0xe92b58[a90_0x157d('0x2e')]);if(!_0x43f902||!_0x38fab9[a90_0x157d('0x24')]&&!_0x29af9e[a90_0x157d('0x24')])throw new errors[(a90_0x157d('0xf'))](errors['BASTION_ERROR_TYPE'][a90_0x157d('0x13')],this['name']);if(_0x4bbf3a[a90_0x157d('0x14')]['id']!==_0x4bbf3a[a90_0x157d('0x15')][a90_0x157d('0xa')]&&_0x4bbf3a[a90_0x157d('0x28')][a90_0x157d('0xc')](_0x43f902)){_0x38fab9=_0x38fab9[a90_0x157d('0x7')](_0x44fd38=>_0x4bbf3a[a90_0x157d('0x28')][a90_0x157d('0x11')][a90_0x157d('0xe')][a90_0x157d('0xb')](_0x44fd38)>0x0),_0x29af9e=_0x29af9e[a90_0x157d('0x7')](_0x11844e=>_0x4bbf3a[a90_0x157d('0x28')][a90_0x157d('0x11')]['highest'][a90_0x157d('0xb')](_0x11844e)>0x0);if(!_0x38fab9[a90_0x157d('0x24')]&&!_0x29af9e['length'])return await _0x4bbf3a[a90_0x157d('0x1b')][a90_0x157d('0x1d')]({'embed':{'color':tesseract_1[a90_0x157d('0x21')][a90_0x157d('0x17')]['RED'],'title':this[a90_0x157d('0x6')][a90_0x157d('0x1')]['getString'](_0x4bbf3a[a90_0x157d('0x15')]['document'][a90_0x157d('0x3')],'errors','unauthorized'),'description':this[a90_0x157d('0x6')][a90_0x157d('0x1')][a90_0x157d('0x27')](_0x4bbf3a['guild']['document'][a90_0x157d('0x3')],a90_0x157d('0x22'),'rolePosition',_0x4bbf3a[a90_0x157d('0x14')][a90_0x157d('0x2f')],_0x43f902['user']['tag'])}})[a90_0x157d('0x4')](()=>{});}const _0x4ce31c=_0xe92b58['_'][a90_0x157d('0x8')]('\x20')||'-';if(_0x38fab9[a90_0x157d('0x24')])await _0x43f902[a90_0x157d('0x11')][a90_0x157d('0x18')](_0x38fab9,_0x4ce31c);if(_0xe92b58['removeAll'])await _0x43f902[a90_0x157d('0x11')]['set']([],_0x4ce31c);else{if(_0x29af9e[a90_0x157d('0x24')])await _0x43f902[a90_0x157d('0x11')][a90_0x157d('0x2e')](_0x29af9e,_0x4ce31c);}await _0x4bbf3a[a90_0x157d('0x1b')][a90_0x157d('0x1d')]({'embed':{'color':tesseract_1['Constants'][a90_0x157d('0x17')]['ORANGE'],'description':this['client'][a90_0x157d('0x1')]['getString'](_0x4bbf3a['guild'][a90_0x157d('0x10')][a90_0x157d('0x3')],a90_0x157d('0x1e'),a90_0x157d('0x16'),_0x4bbf3a[a90_0x157d('0x14')][a90_0x157d('0x2f')],_0x43f902['user']['tag']),'fields':[{'name':a90_0x157d('0x9'),'value':a90_0x157d('0x30')+arrays[a90_0x157d('0x1f')](_0x38fab9['map'](_0x269797=>_0x269797['name']),'+')+arrays['toBulletList'](_0x29af9e[a90_0x157d('0x2')](_0x157468=>_0x157468[a90_0x157d('0x19')]),'-')+'```'},{'name':'Reason','value':_0x4ce31c}],'footer':{'text':_0x43f902['id']}}})[a90_0x157d('0x4')](()=>{});};}};