const a140_0x43857c=a140_0x4bf4;(function(_0x4d5dbe,_0x2b8878){const _0x43ad92=a140_0x4bf4,_0x17a2f7=_0x4d5dbe();while(!![]){try{const _0x55170b=parseInt(_0x43ad92(0x144))/0x1+parseInt(_0x43ad92(0x143))/0x2+parseInt(_0x43ad92(0x142))/0x3*(-parseInt(_0x43ad92(0x151))/0x4)+parseInt(_0x43ad92(0x12f))/0x5*(-parseInt(_0x43ad92(0x13b))/0x6)+-parseInt(_0x43ad92(0x135))/0x7*(parseInt(_0x43ad92(0x14f))/0x8)+parseInt(_0x43ad92(0x127))/0x9+parseInt(_0x43ad92(0x148))/0xa;if(_0x55170b===_0x2b8878)break;else _0x17a2f7['push'](_0x17a2f7['shift']());}catch(_0x1e8f1a){_0x17a2f7['push'](_0x17a2f7['shift']());}}}(a140_0x3236,0x8de5d));function a140_0x4bf4(_0x7401bb,_0x26c4fb){const _0x4df10d=a140_0x3236();return a140_0x4bf4=function(_0x533929,_0x1c9218){_0x533929=_0x533929-0x127;let _0x32360b=_0x4df10d[_0x533929];return _0x32360b;},a140_0x4bf4(_0x7401bb,_0x26c4fb);}const a140_0x1c9218=(function(){let _0x1260aa=!![];return function(_0x42e85e,_0x54740d){const _0x1a1433=_0x1260aa?function(){const _0x391871=a140_0x4bf4;if(_0x54740d){const _0x27e8ea=_0x54740d[_0x391871(0x13d)](_0x42e85e,arguments);return _0x54740d=null,_0x27e8ea;}}:function(){};return _0x1260aa=![],_0x1a1433;};}()),a140_0x533929=a140_0x1c9218(this,function(){const _0xb63c92=a140_0x4bf4;return a140_0x533929[_0xb63c92(0x158)]()[_0xb63c92(0x145)](_0xb63c92(0x147))[_0xb63c92(0x158)]()['constructor'](a140_0x533929)[_0xb63c92(0x145)](_0xb63c92(0x147));});a140_0x533929();'use strict';const tesseract_1=require(a140_0x43857c(0x130)),errors=require(a140_0x43857c(0x12e)),requests=require('../../utils/requests');function a140_0x3236(){const _0x37bf00=['get','apply','titles,slug,synopsis,startDate,endDate,ageRating,ageRatingGuide,nsfw,posterImage','https://kitsu.io/api/edge/manga?','posterImage','Airing','12333hThVmq','1128158dQdiRy','8965BbWfGL','search','Constants','(((.+)+)+)+$','9012370LCWFWA','anime\x20TITLE','\x20-\x20','json','channel','sanitize','endDate','7678368sgzkBa','name','832CKMEjX','COLORS','exec','values','NOT_FOUND','guild','\x0a...','toString','attributes','slug','join','slice','synopsis','8417448cTOmHx','INVALID_COMMAND_SYNTAX','nsfw','application/vnd.api+json','data','Status','send','../../utils/errors','10pWemGO','@bastion/tesseract','Command','[NSFW]','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20anime.','original','7lIotjo','length','startDate','Powered\x20by\x20Kitsu','\x20-\x20Present','ageRatingGuide','40368weHBhY'];a140_0x3236=function(){return _0x37bf00;};return a140_0x3236();}module['exports']=class AnimeCommand extends tesseract_1[a140_0x43857c(0x131)]{constructor(){const _0x58ec21=a140_0x43857c;super('anime',{'description':_0x58ec21(0x133),'triggers':[],'arguments':{},'scope':_0x58ec21(0x156),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x58ec21(0x149)]});}['sanitize']=_0x13575a=>{const _0x3163fe=a140_0x43857c;return _0x13575a[_0x3163fe(0x136)]>0x7d0?_0x13575a[_0x3163fe(0x15c)](0x0,0x7d0)+_0x3163fe(0x157):_0x13575a;};[a140_0x43857c(0x153)]=async(_0x5268c6,_0x5bafb6)=>{const _0x5dc4c9=a140_0x43857c;if(!_0x5bafb6['_']['length'])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][_0x5dc4c9(0x128)],this[_0x5dc4c9(0x150)]);const _0x40e205=_0x5bafb6['_'][_0x5dc4c9(0x15b)]('\x20'),_0x55d5c5=await requests[_0x5dc4c9(0x13c)](_0x5dc4c9(0x13f)+new URLSearchParams({'fields[anime]':_0x5dc4c9(0x13e),'filter[text]':_0x40e205}),{'Accept':_0x5dc4c9(0x12a)}),_0x1c8cf1=await _0x55d5c5[_0x5dc4c9(0x14b)]();if(!_0x1c8cf1||!_0x1c8cf1[_0x5dc4c9(0x12b)]||!_0x1c8cf1['data'][_0x5dc4c9(0x136)])throw new Error(_0x5dc4c9(0x155));await _0x5268c6[_0x5dc4c9(0x14c)][_0x5dc4c9(0x12d)]({'embed':{'color':tesseract_1[_0x5dc4c9(0x146)][_0x5dc4c9(0x152)]['IRIS'],'author':{'name':'Anime'},'title':Object[_0x5dc4c9(0x154)](_0x1c8cf1[_0x5dc4c9(0x12b)][0x0]['attributes']['titles'])[0x0],'url':'https://kitsu.io/anime/'+_0x1c8cf1['data'][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x15a)],'description':this[_0x5dc4c9(0x14d)](_0x1c8cf1['data'][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x15d)]),'fields':[{'name':_0x5dc4c9(0x12c),'value':_0x1c8cf1[_0x5dc4c9(0x12b)][0x0]['attributes'][_0x5dc4c9(0x14e)]?'Finished':_0x5dc4c9(0x141),'inline':!![]},{'name':'Aired','value':_0x1c8cf1[_0x5dc4c9(0x12b)][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x14e)]?_0x1c8cf1['data'][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x137)]+_0x5dc4c9(0x14a)+_0x1c8cf1[_0x5dc4c9(0x12b)][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x14e)]:_0x1c8cf1[_0x5dc4c9(0x12b)][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x137)]+_0x5dc4c9(0x139),'inline':!![]},{'name':'Rating','value':_0x1c8cf1[_0x5dc4c9(0x12b)][0x0][_0x5dc4c9(0x159)]['ageRating']+_0x5dc4c9(0x14a)+_0x1c8cf1[_0x5dc4c9(0x12b)][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x13a)]+'\x20'+(_0x1c8cf1[_0x5dc4c9(0x12b)][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x129)]?_0x5dc4c9(0x132):''),'inline':!![]}],'image':{'url':_0x1c8cf1[_0x5dc4c9(0x12b)][0x0][_0x5dc4c9(0x159)][_0x5dc4c9(0x140)][_0x5dc4c9(0x134)]},'footer':{'text':_0x5dc4c9(0x138)}}});};};