const a117_0x245d87=a117_0x2aaa;(function(_0x18c9de,_0x4bedd9){const _0x4c2ae8=a117_0x2aaa,_0x540607=_0x18c9de();while(!![]){try{const _0x2e1aa5=parseInt(_0x4c2ae8(0x100))/0x1*(parseInt(_0x4c2ae8(0xec))/0x2)+-parseInt(_0x4c2ae8(0xb9))/0x3*(parseInt(_0x4c2ae8(0xd8))/0x4)+parseInt(_0x4c2ae8(0xdd))/0x5+parseInt(_0x4c2ae8(0x77))/0x6+-parseInt(_0x4c2ae8(0xf6))/0x7+parseInt(_0x4c2ae8(0xe0))/0x8*(-parseInt(_0x4c2ae8(0x101))/0x9)+parseInt(_0x4c2ae8(0xa1))/0xa*(parseInt(_0x4c2ae8(0x79))/0xb);if(_0x2e1aa5===_0x4bedd9)break;else _0x540607['push'](_0x540607['shift']());}catch(_0x3c2556){_0x540607['push'](_0x540607['shift']());}}}(a117_0x3498,0x47be5));const a117_0x46f9ed=(function(){let _0x89c727=!![];return function(_0x1ed1d9,_0x45e40a){const _0x12b636=_0x89c727?function(){const _0x50020b=a117_0x2aaa;if(_0x45e40a){const _0x224dab=_0x45e40a[_0x50020b(0xbb)](_0x1ed1d9,arguments);return _0x45e40a=null,_0x224dab;}}:function(){};return _0x89c727=![],_0x12b636;};}()),a117_0x57d12c=a117_0x46f9ed(this,function(){const _0x57ed50=a117_0x2aaa;return a117_0x57d12c[_0x57ed50(0x8d)]()[_0x57ed50(0xe2)](_0x57ed50(0x10d))[_0x57ed50(0x8d)]()[_0x57ed50(0xb6)](a117_0x57d12c)[_0x57ed50(0xe2)](_0x57ed50(0x10d));});function a117_0x3498(){const _0x3a07ab=['8SswhZA','../../utils/regex','search','https://youtu.be/','member','errors','streamInfoHandler','isMusicMaster','DiscordError','uuid','ytsearch:','--flat-playlist','8644YWgkFW','test','Album','creator','error','premiumMusic','.mp3','noMusicChannelsAsOwner','voiceChannel','info','4089050pddDZR','url','type','rmdir','track','getInfo','play\x20Remember\x20The\x20Name\x20by\x20Ed\x20Sheeran','send','queue','--ignore-errors','34gYaqsw','3678867cpDqQQ','INVALID_COMMAND_SYNTAX','join','fulltitle','tag','playing','isPublicBastion','getString','http','channels','failed','connection','(((.+)+)+)+$','../../utils/constants','Constants','channel','streamEndHandler','alt_title','2716464aQtjnx','--no-cache-dir','739409oTYLzb','includes','--force-ipv4','history','videoId','catch','locale','./music/','joinable','getSongInfo','voiceChannelId','items','exports','noMusicChannels','thumbnail','../../utils/omnic','Added\x20to\x20Queue','requester','BASTION_ERROR_TYPE','end','toString','Logger','musicDirectory','cache','play\x20https://www.youtube.com/watch?v=dQw4w9WgXcQ','--geo-bypass-country=US','startsWith','artist','PINK','google','album','URI','\x20•\x20','--dump-single-json','musicDownloadError','prepareStream','exec','fetchPremiumTier','default','activity','110BIKBOy','has','node-fetch','length','author','leave','setDeaf','client','youtube.com','Playing','name','Artist','startStreamDispatcher','user','dispatcherFinishHandler','musicDisabled','--quiet','shift','members','--youtube-skip-dash-manifest','--no-playlist','constructor','get','statusText','3GlayHN','textChannel','apply','configurations','COLORS','mkdir','createWriteStream','uploader','--user-agent=Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_0)\x20AppleWebKit/604.1\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.4\x20Safari/604.1','filter','duration','guild','document','RED','PREMIUM_MEMBERSHIP_REQUIRED','play','music','setActivity','presence','unjoinable','--format=bestaudio[protocol^=http]','voice','push','json','map','https://youtube.com/watch?v=','apiKey','credentials','--no-warnings','No\x20results\x20found\x20for\x20the\x20specified\x20query.','youtube-dl','691052oFQkuO','--dump-json','unspeakable','playlist','--referer=https://bastion.traction.one','602180TolYkC','language','searchYouTube'];a117_0x3498=function(){return _0x3a07ab;};return a117_0x3498();}a117_0x57d12c();function a117_0x2aaa(_0x161797,_0x40535e){const _0x1c7e27=a117_0x3498();return a117_0x2aaa=function(_0x57d12c,_0x46f9ed){_0x57d12c=_0x57d12c-0x74;let _0x349867=_0x1c7e27[_0x57d12c];return _0x349867;},a117_0x2aaa(_0x161797,_0x40535e);}'use strict';const fs=require('fs'),tesseract_1=require('@bastion/tesseract'),node_fetch_1=require(a117_0x245d87(0xa3)),youtube=require(a117_0x245d87(0xd7)),uuid_1=require(a117_0x245d87(0xe9)),constants=require(a117_0x245d87(0x10e)),errors=require('../../utils/errors'),omnic=require(a117_0x245d87(0x88)),regex=require(a117_0x245d87(0xe1));module[a117_0x245d87(0x85)]=class Play extends tesseract_1['Command']{[a117_0x245d87(0x8f)];constructor(){const _0x48b601=a117_0x245d87;super('play',{'description':'It\x20allows\x20you\x20to\x20play\x20a\x20music\x20in\x20the\x20server,\x20from\x20the\x20given\x20query\x20or\x20from\x20any\x20supported\x20source.','triggers':['p'],'arguments':{},'scope':_0x48b601(0xc4),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x48b601(0xfc),_0x48b601(0x91)]}),this[_0x48b601(0x8f)]=_0x48b601(0x80);}['searchYouTube']=async _0x9f757e=>{const _0x5b6324=a117_0x245d87,_0x35e274=await(0x0,node_fetch_1[_0x5b6324(0x9f)])('https://youtube.googleapis.com/youtube/v3/search?part=id&regionCode=US&type=video&maxResults=5&q='+encodeURIComponent(_0x9f757e)+'&key='+this[_0x5b6324(0xa8)][_0x5b6324(0xd4)][_0x5b6324(0x96)][_0x5b6324(0xd3)]);if(_0x35e274['ok']){const _0x37f953=await _0x35e274[_0x5b6324(0xd0)]();if(_0x37f953[_0x5b6324(0x84)][_0x5b6324(0xa4)])return _0x37f953['items'][0x0]['id'][_0x5b6324(0x7d)];throw _0x5b6324(0xd6);}else throw _0x35e274[_0x5b6324(0xb8)];};[a117_0x245d87(0x82)](_0x210d3a,_0x1fb6d7){return new Promise(async(_0x50de15,_0x5bdc37)=>{const _0x546b3f=a117_0x2aaa;if(this[_0x546b3f(0xa8)][_0x546b3f(0xd4)]['google']&&this['client'][_0x546b3f(0xd4)][_0x546b3f(0x96)]['apiKey']&&!regex[_0x546b3f(0x98)][_0x546b3f(0xed)](_0x210d3a)){const _0x5cccd7=await this[_0x546b3f(0xdf)](_0x210d3a)[_0x546b3f(0x7e)](()=>{});if(_0x5cccd7)return _0x50de15({'url':_0x546b3f(0xe3)+_0x5cccd7,'webpage_url':_0x546b3f(0xd2)+_0x5cccd7});}youtube[_0x546b3f(0xfb)](regex[_0x546b3f(0x98)][_0x546b3f(0xed)](_0x210d3a)?_0x210d3a:_0x546b3f(0xea)+_0x210d3a,[_0x546b3f(0xff),_0x546b3f(0x7b),_0x546b3f(0x92),..._0x1fb6d7?[_0x546b3f(0xeb),'--yes-playlist']:['--no-playlist'],_0x546b3f(0x78),_0x1fb6d7?_0x546b3f(0x9a):'--dump-json',_0x546b3f(0xb1),'--no-warnings',_0x546b3f(0xc1),_0x546b3f(0xdc),_0x546b3f(0xcd),_0x546b3f(0xb4)],(_0x40567a,_0x205eee)=>{if(_0x40567a)return _0x5bdc37(_0x40567a);return _0x50de15(_0x205eee);});});}[a117_0x245d87(0x9c)]=(_0x56a3ed,_0x3996a8,_0x431557)=>{return new Promise((_0x11eb49,_0x2e5385)=>{const _0x2eff2d=a117_0x2aaa,_0x50cda3=(0x0,uuid_1['v4'])(),_0x11af15=youtube(_0x56a3ed,[_0x2eff2d(0xff),_0x2eff2d(0x7b),'--geo-bypass-country=US',_0x2eff2d(0xb5),_0x2eff2d(0x78),_0x2eff2d(0xd9),_0x2eff2d(0xb1),_0x2eff2d(0xd5),_0x2eff2d(0xc1),_0x2eff2d(0xdc),_0x2eff2d(0xcd),_0x2eff2d(0xb4)],{});_0x11af15['on'](_0x2eff2d(0xf5),_0x261039=>this[_0x2eff2d(0xe6)](_0x3996a8['guild'],{..._0x261039,'id':_0x50cda3,'requester':_0x3996a8[_0x2eff2d(0xa5)]['id']})),_0x11af15['on'](_0x2eff2d(0x8c),()=>{const _0x152f16=_0x2eff2d;this[_0x152f16(0x75)](_0x3996a8[_0x152f16(0xc4)]),_0x11eb49(!![]);}),_0x11af15['on']('error',()=>{const _0x850188=_0x2eff2d;_0x431557&&_0x3996a8[_0x850188(0x74)][_0x850188(0xfd)]({'embed':{'color':tesseract_1[_0x850188(0x10f)][_0x850188(0xbd)]['RED'],'description':this[_0x850188(0xa8)]['locale'][_0x850188(0x108)](_0x3996a8[_0x850188(0xc4)][_0x850188(0xc5)]['language'],'errors',_0x850188(0x9b))}})[_0x850188(0x7e)](()=>{}),_0x2e5385(this[_0x850188(0xa8)][_0x850188(0x7f)][_0x850188(0x108)](_0x3996a8[_0x850188(0xc4)][_0x850188(0xc5)][_0x850188(0xde)],_0x850188(0xe5),_0x850188(0x9b)));}),_0x11af15['pipe'](fs[_0x2eff2d(0xbf)](this[_0x2eff2d(0x8f)]+_0x3996a8[_0x2eff2d(0xc4)]['id']+'/'+_0x50cda3+_0x2eff2d(0xf2)));});};[a117_0x245d87(0xe6)]=(_0x34333d,_0x2e66ee)=>{const _0x50731e=a117_0x245d87,_0x147035=_0x2e66ee['id'],_0x16067f=_0x2e66ee['track']||_0x2e66ee['title']||_0x2e66ee[_0x50731e(0x104)]||_0x2e66ee[_0x50731e(0x76)],_0x1f12fa=_0x2e66ee['album'],_0x405cb9=_0x2e66ee[_0x50731e(0x94)]||_0x2e66ee[_0x50731e(0xef)]||_0x2e66ee[_0x50731e(0xc0)],_0x2ccfee=_0x2e66ee['duration'],_0x2b94e0=_0x2e66ee[_0x50731e(0x87)],_0x18d6bb=_0x2e66ee['requester'];_0x34333d[_0x50731e(0xc9)][_0x50731e(0xfe)][_0x50731e(0xcf)]({'id':_0x147035,'track':_0x16067f,'album':_0x1f12fa,'artist':_0x405cb9,'duration':_0x2ccfee,'thumbnail':_0x2b94e0,'requester':_0x18d6bb});const _0x59b0ae=[];_0x1f12fa&&_0x59b0ae[_0x50731e(0xcf)]({'name':_0x50731e(0xee),'value':_0x1f12fa,'inline':!![]}),_0x405cb9&&_0x59b0ae['push']({'name':_0x50731e(0xac),'value':_0x405cb9,'inline':!![]}),_0x34333d['music'][_0x50731e(0xba)]['send']({'embed':{'color':tesseract_1['Constants'][_0x50731e(0xbd)]['PINK'],'title':_0x50731e(0x89),'description':_0x16067f,'fields':_0x59b0ae,'thumbnail':{'url':_0x2b94e0},'footer':{'text':(_0x34333d[_0x50731e(0xc9)][_0x50731e(0xfe)][_0x50731e(0xa4)]?'#'+(_0x34333d[_0x50731e(0xc9)][_0x50731e(0xfe)][_0x50731e(0xa4)]-0x1):'Up\x20Next')+(_0x50731e(0x99)+_0x2ccfee+_0x50731e(0x99)+(_0x34333d['members'][_0x50731e(0x90)][_0x50731e(0xb7)](_0x18d6bb)[_0x50731e(0xae)][_0x50731e(0x105)]||_0x18d6bb))}}})['catch'](()=>{});};[a117_0x245d87(0x75)]=_0x2d8955=>{const _0x128e3e=a117_0x245d87;!_0x2d8955[_0x128e3e(0xc9)][_0x128e3e(0x106)]&&this[_0x128e3e(0xad)](_0x2d8955);};[a117_0x245d87(0xad)]=_0x554f2d=>{const _0x36060e=a117_0x245d87;if(_0x554f2d['music'][_0x36060e(0xfe)][_0x36060e(0xa4)]){const _0x3c4b81=_0x554f2d['music'][_0x36060e(0xfe)][0x0],_0x2d9691=[];_0x3c4b81['album']&&_0x2d9691[_0x36060e(0xcf)]({'name':_0x36060e(0xee),'value':_0x3c4b81[_0x36060e(0x97)],'inline':!![]});_0x3c4b81[_0x36060e(0x94)]&&_0x2d9691[_0x36060e(0xcf)]({'name':_0x36060e(0xac),'value':_0x3c4b81[_0x36060e(0x94)],'inline':!![]});_0x554f2d[_0x36060e(0xc9)][_0x36060e(0xba)][_0x36060e(0xfd)]({'embed':{'color':tesseract_1[_0x36060e(0x10f)]['COLORS'][_0x36060e(0x95)],'title':_0x36060e(0xaa),'description':_0x3c4b81[_0x36060e(0xfa)],'fields':_0x2d9691,'thumbnail':{'url':_0x3c4b81[_0x36060e(0x87)]},'footer':{'text':_0x3c4b81[_0x36060e(0xc3)]+_0x36060e(0x99)+(_0x554f2d[_0x36060e(0xb3)]['cache'][_0x36060e(0xb7)](_0x3c4b81['requester'])[_0x36060e(0xae)][_0x36060e(0x105)]||_0x3c4b81[_0x36060e(0x8a)])}}})['catch'](()=>{}),_0x554f2d[_0x36060e(0xc9)][_0x36060e(0x106)]=!![];const _0x490ddd=_0x554f2d[_0x36060e(0xce)]&&_0x554f2d[_0x36060e(0xce)]['connection'][_0x36060e(0xc8)](this[_0x36060e(0x8f)]+_0x554f2d['id']+'/'+_0x3c4b81['id']+_0x36060e(0xf2));this[_0x36060e(0xa8)][_0x36060e(0xbc)][_0x36060e(0xc9)]&&this['client']['configurations'][_0x36060e(0xc9)][_0x36060e(0xa0)]&&this[_0x36060e(0xa8)][_0x36060e(0xae)][_0x36060e(0xca)]({'name':_0x3c4b81[_0x36060e(0xfa)],'type':'LISTENING'})[_0x36060e(0x7e)](()=>{}),_0x490ddd['on']('finish',()=>this[_0x36060e(0xaf)](_0x554f2d)),_0x490ddd['on'](_0x36060e(0xf0),_0x5a1b09=>{const _0x716078=_0x36060e;tesseract_1[_0x716078(0x8e)]['error'](_0x5a1b09),this[_0x716078(0xaf)](_0x554f2d);});}else _0x554f2d['music'][_0x36060e(0xfe)]=[],_0x554f2d[_0x36060e(0xc9)][_0x36060e(0x7c)]=[],fs['promises'][_0x36060e(0xf9)](this['musicDirectory']+_0x554f2d['id'],{'recursive':!![]})['catch'](()=>{}),this['client'][_0x36060e(0xbc)][_0x36060e(0xc9)]&&this['client'][_0x36060e(0xbc)][_0x36060e(0xc9)][_0x36060e(0xa0)]&&this[_0x36060e(0xa8)]['user']['setActivity'](this[_0x36060e(0xa8)][_0x36060e(0xbc)][_0x36060e(0xcb)]instanceof Array?this['client'][_0x36060e(0xbc)][_0x36060e(0xcb)][0x0][_0x36060e(0xa0)]:this['client'][_0x36060e(0xbc)]['presence'][_0x36060e(0xa0)])[_0x36060e(0x7e)](()=>{}),!_0x554f2d[_0x36060e(0xc5)][_0x36060e(0xc9)]['keepAlive']&&(_0x554f2d[_0x36060e(0xce)]&&_0x554f2d[_0x36060e(0xce)][_0x36060e(0x74)][_0x36060e(0xa6)]()),_0x554f2d[_0x36060e(0xc9)]['textChannel'][_0x36060e(0xfd)]({'embed':{'color':tesseract_1[_0x36060e(0x10f)][_0x36060e(0xbd)][_0x36060e(0x95)],'title':'Stopping\x20Playback'}})[_0x36060e(0x7e)](()=>{});};[a117_0x245d87(0xaf)]=_0x3f38c2=>{const _0x5f0316=a117_0x245d87;_0x3f38c2[_0x5f0316(0xc9)][_0x5f0316(0x106)]=![],_0x3f38c2[_0x5f0316(0xc9)]['skipVotes']=[],_0x3f38c2[_0x5f0316(0xc9)][_0x5f0316(0xfe)][_0x5f0316(0xa4)]&&_0x3f38c2[_0x5f0316(0xc9)]['history'][_0x5f0316(0xcf)](_0x3f38c2[_0x5f0316(0xc9)]['queue'][_0x5f0316(0xb2)]()),!_0x3f38c2[_0x5f0316(0xc9)][_0x5f0316(0xfe)]['length']&&_0x3f38c2['music']['repeat']&&(_0x3f38c2['music'][_0x5f0316(0xfe)]=_0x3f38c2['music'][_0x5f0316(0x7c)],_0x3f38c2[_0x5f0316(0xc9)]['history']=[]),this[_0x5f0316(0xad)](_0x3f38c2);};[a117_0x245d87(0x9d)]=async(_0x339ee5,_0x5acfa0)=>{const _0x16864d=a117_0x245d87,_0x2a216c=_0x339ee5[_0x16864d(0xc4)];if(!_0x2a216c[_0x16864d(0xc5)][_0x16864d(0xc9)]||!_0x2a216c[_0x16864d(0xc5)][_0x16864d(0xc9)]['enabled'])return await _0x339ee5['channel']['send']({'embed':{'color':tesseract_1[_0x16864d(0x10f)][_0x16864d(0xbd)][_0x16864d(0xc6)],'description':this[_0x16864d(0xa8)][_0x16864d(0x7f)][_0x16864d(0x108)](_0x339ee5[_0x16864d(0xc4)][_0x16864d(0xc5)][_0x16864d(0xde)],_0x16864d(0xe5),constants[_0x16864d(0x107)](_0x339ee5[_0x16864d(0xa5)])?'musicDisabledPublic':_0x16864d(0xb0))}})[_0x16864d(0x7e)](()=>{});if(constants[_0x16864d(0x107)](this['client']['user'])){const _0x41a120=await omnic[_0x16864d(0x9e)](_0x339ee5[_0x16864d(0xc4)])[_0x16864d(0x7e)](()=>{});if(!_0x41a120)throw new errors[(_0x16864d(0xe8))](errors['BASTION_ERROR_TYPE'][_0x16864d(0xc7)],this['client'][_0x16864d(0x7f)][_0x16864d(0x108)](_0x339ee5[_0x16864d(0xc4)][_0x16864d(0xc5)]['language'],'errors',_0x16864d(0xf1)));}const _0x53fbdd=_0x5acfa0['_'][_0x16864d(0x103)]('\x20'),_0x102921=regex[_0x16864d(0x98)][_0x16864d(0xed)](_0x53fbdd),_0x675442=_0x102921?_0x53fbdd['startsWith']('http')&&_0x53fbdd['includes'](_0x16864d(0xa9))&&_0x53fbdd[_0x16864d(0x7a)]('playlist')?await this['getSongInfo'](_0x53fbdd,!![]):null:await this[_0x16864d(0x82)](_0x53fbdd),_0x46831=_0x675442?_0x53fbdd[_0x16864d(0x93)](_0x16864d(0x109))&&_0x53fbdd[_0x16864d(0x7a)]('youtube.com')&&_0x53fbdd[_0x16864d(0x7a)](_0x16864d(0xdb))?_0x675442['entries'][_0x16864d(0xd1)](_0x357708=>_0x16864d(0xe3)+_0x357708['id']):[_0x675442['webpage_url']||_0x675442[_0x16864d(0xf7)]]:_0x102921?[_0x53fbdd]:null;if(!_0x46831||!_0x46831[_0x16864d(0xa4)])throw new errors[(_0x16864d(0xe8))](errors[_0x16864d(0x8b)][_0x16864d(0x102)],this[_0x16864d(0xab)]);_0x2a216c[_0x16864d(0xc9)][_0x16864d(0xba)]=_0x339ee5['guild'][_0x16864d(0x10a)][_0x16864d(0x90)][_0x16864d(0xa2)](_0x2a216c[_0x16864d(0xc5)][_0x16864d(0xc9)]['textChannelId'])?_0x339ee5[_0x16864d(0xc4)]['channels'][_0x16864d(0x90)][_0x16864d(0xb7)](_0x2a216c[_0x16864d(0xc5)][_0x16864d(0xc9)]['textChannelId']):_0x339ee5[_0x16864d(0x74)],_0x2a216c[_0x16864d(0xc9)]['voiceChannel']=_0x339ee5[_0x16864d(0xc4)][_0x16864d(0xce)]&&_0x339ee5['guild'][_0x16864d(0xce)][_0x16864d(0x10c)]?_0x339ee5[_0x16864d(0xc4)][_0x16864d(0xce)][_0x16864d(0x74)]:_0x339ee5[_0x16864d(0xc4)][_0x16864d(0x10a)]['cache']['filter'](_0x4a3ff2=>_0x4a3ff2[_0x16864d(0xf8)]===_0x16864d(0xce))[_0x16864d(0xa2)](_0x2a216c['document'][_0x16864d(0xc9)][_0x16864d(0x83)])?_0x339ee5[_0x16864d(0xc4)][_0x16864d(0x10a)][_0x16864d(0x90)][_0x16864d(0xc2)](_0x4bd923=>_0x4bd923[_0x16864d(0xf8)]===_0x16864d(0xce))['get'](_0x2a216c[_0x16864d(0xc5)]['music'][_0x16864d(0x83)]):_0x339ee5[_0x16864d(0xe4)][_0x16864d(0xe7)]()?_0x339ee5[_0x16864d(0xe4)][_0x16864d(0xce)][_0x16864d(0x74)]:null;if(!_0x2a216c[_0x16864d(0xc9)]['voiceChannel'])return await _0x339ee5[_0x16864d(0x74)]['send']({'embed':{'color':tesseract_1[_0x16864d(0x10f)][_0x16864d(0xbd)][_0x16864d(0xc6)],'description':this[_0x16864d(0xa8)][_0x16864d(0x7f)][_0x16864d(0x108)](_0x339ee5[_0x16864d(0xc4)][_0x16864d(0xc5)]['language'],_0x16864d(0xe5),_0x339ee5[_0x16864d(0xe4)][_0x16864d(0xe7)]()?_0x16864d(0xf3):_0x16864d(0x86))}})[_0x16864d(0x7e)](()=>{});if(!_0x2a216c[_0x16864d(0xc9)]['voiceChannel'][_0x16864d(0x81)])return await _0x339ee5[_0x16864d(0x74)]['send']({'embed':{'color':tesseract_1[_0x16864d(0x10f)][_0x16864d(0xbd)]['RED'],'description':this[_0x16864d(0xa8)][_0x16864d(0x7f)][_0x16864d(0x108)](_0x339ee5['guild']['document'][_0x16864d(0xde)],_0x16864d(0xe5),_0x16864d(0xcc),_0x2a216c[_0x16864d(0xc9)][_0x16864d(0xf4)][_0x16864d(0xab)])}})[_0x16864d(0x7e)](()=>{});if(!_0x2a216c[_0x16864d(0xc9)][_0x16864d(0xf4)]['speakable'])return await _0x339ee5[_0x16864d(0x74)][_0x16864d(0xfd)]({'embed':{'color':tesseract_1[_0x16864d(0x10f)][_0x16864d(0xbd)]['RED'],'description':this[_0x16864d(0xa8)][_0x16864d(0x7f)][_0x16864d(0x108)](_0x339ee5[_0x16864d(0xc4)][_0x16864d(0xc5)][_0x16864d(0xde)],'errors',_0x16864d(0xda),_0x2a216c[_0x16864d(0xc9)][_0x16864d(0xf4)]['name'])}})[_0x16864d(0x7e)](()=>{});const _0xa5ed2a=await _0x2a216c[_0x16864d(0xc9)][_0x16864d(0xf4)]['join']();_0xa5ed2a['on']('error',tesseract_1[_0x16864d(0x8e)][_0x16864d(0xf0)]),_0xa5ed2a['on'](_0x16864d(0x10b),tesseract_1[_0x16864d(0x8e)][_0x16864d(0xf0)]),_0x339ee5[_0x16864d(0xc4)]['me'][_0x16864d(0xce)]['setMute'](![])[_0x16864d(0x7e)](()=>{}),_0x339ee5[_0x16864d(0xc4)]['me'][_0x16864d(0xce)][_0x16864d(0xa7)](!![])[_0x16864d(0x7e)](()=>{}),await fs['promises'][_0x16864d(0xbe)](this[_0x16864d(0x8f)]+_0x339ee5[_0x16864d(0xc4)]['id']+'/',{'recursive':!![]})[_0x16864d(0x7e)](tesseract_1['Logger'][_0x16864d(0xf0)]);for(const _0x3441a7 of _0x46831){await this['prepareStream'](_0x3441a7,_0x339ee5,_0x46831[_0x16864d(0xa4)]>0x1)['catch'](tesseract_1['Logger'][_0x16864d(0xf0)]);}};};