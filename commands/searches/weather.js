const a144_0x421f=['West\x20-\x20South\x20West','humidity','makeRequest','speed','sys','getMinutes','country','DiscordError','grnd_level','snow','Pressure','North','\x20cm\x20(Snow)\x0a','visibility','\x20cm\x20(Rain)\x0a','degreesToDirection','constructor','@bastion/tesseract','weather','COLORS','lat','../../utils/omnic','name','West','rain','East\x20-\x20South\x20East','South','temp','length','guild','lon','getHours','message','IRIS','West\x20-\x20North\x20West','json','Coordinates','cod','@2x.png','Cloudiness','getTime','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exports','test','sunset','South\x20West','temp_min','Time\x20Zone','North\x20West','\x20m/s\x0a','North\x20-\x20North\x20West','sunrise','Command','South\x20East','pressure','send','icon','../../utils/errors','https://openweathermap.org/img/wn/','North\x20-\x20North\x20East','Condition','It\x20allows\x20you\x20to\x20see\x20the\x20current\x20weather\x20forcast\x20of\x20the\x20specified\x20location.','feels_like','BASTION_ERROR_TYPE','\x20hPa\x20(Ground\x20Level)','High','Weather','join','deg','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','clouds','all','timezone','round','coord','main','channel','temp_max','kelvinToFahrenheit','Humidity','°C\x20/\x20','Low','Precipitation','kelvinToCelcius','Powered\x20by\x20OpenWeatherMap','wind','Constants','South\x20-South\x20East'];(function(_0x54e284,_0x421fc8){const _0x119d40=function(_0x5bd72d){while(--_0x5bd72d){_0x54e284['push'](_0x54e284['shift']());}},_0xbee8d3=function(){const _0x4a22ff={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x50baca,_0x5b13a1,_0x80e260,_0x4a8f04){_0x4a8f04=_0x4a8f04||{};let _0xd5819e=_0x5b13a1+'='+_0x80e260,_0x14c8af=0x0;for(let _0x570914=0x0,_0x2db198=_0x50baca['length'];_0x570914<_0x2db198;_0x570914++){const _0x49c70f=_0x50baca[_0x570914];_0xd5819e+=';\x20'+_0x49c70f;const _0x2d21cd=_0x50baca[_0x49c70f];_0x50baca['push'](_0x2d21cd),_0x2db198=_0x50baca['length'],_0x2d21cd!==!![]&&(_0xd5819e+='='+_0x2d21cd);}_0x4a8f04['cookie']=_0xd5819e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x14c576,_0x4ec4ab){_0x14c576=_0x14c576||function(_0x2f6871){return _0x2f6871;};const _0x268bb7=_0x14c576(new RegExp('(?:^|;\x20)'+_0x4ec4ab['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0xa2d20d=function(_0x4936c9,_0x1ecac4){_0x4936c9(++_0x1ecac4);};return _0xa2d20d(_0x119d40,_0x421fc8),_0x268bb7?decodeURIComponent(_0x268bb7[0x1]):undefined;}},_0x530ac4=function(){const _0x5dbdd1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5dbdd1['test'](_0x4a22ff['removeCookie']['toString']());};_0x4a22ff['updateCookie']=_0x530ac4;let _0x34ad02='';const _0x5c525c=_0x4a22ff['updateCookie']();if(!_0x5c525c)_0x4a22ff['setCookie'](['*'],'counter',0x1);else _0x5c525c?_0x34ad02=_0x4a22ff['getCookie'](null,'counter'):_0x4a22ff['removeCookie']();};_0xbee8d3();}(a144_0x421f,0x1ef));const a144_0x119d=function(_0x54e284,_0x421fc8){_0x54e284=_0x54e284-0x0;let _0x119d40=a144_0x421f[_0x54e284];return _0x119d40;};const _0x25a41f=a144_0x119d,a144_0x4a22ff=function(){let _0x34ad02=!![];return function(_0x5c525c,_0x50baca){const _0x5b13a1=_0x34ad02?function(){if(_0x50baca){const _0x80e260=_0x50baca['apply'](_0x5c525c,arguments);return _0x50baca=null,_0x80e260;}}:function(){};return _0x34ad02=![],_0x5b13a1;};}(),a144_0x5bd72d=a144_0x4a22ff(this,function(){const _0x4a8f04=function(){const _0x31a299=a144_0x119d,_0xd5819e=_0x4a8f04['constructor'](_0x31a299('0x4a'))()[_0x31a299('0x31')](_0x31a299('0xe'));return!_0xd5819e[_0x31a299('0x4c')](a144_0x5bd72d);};return _0x4a8f04();});a144_0x5bd72d();'use strict';const tesseract_1=require(_0x25a41f('0x32')),errors=require(_0x25a41f('0x2')),omnic=require(_0x25a41f('0x36'));module[_0x25a41f('0x4b')]=class WeatherCommand extends tesseract_1[_0x25a41f('0x55')]{constructor(){const _0x2543c2=_0x25a41f;super(_0x2543c2('0x33'),{'description':_0x2543c2('0x6'),'triggers':[],'arguments':{},'scope':_0x2543c2('0x3e'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['weather\x20LOCATION']}),this[_0x2543c2('0x49')]=_0x14c8af=>{const _0x551eb4=_0x2543c2,_0x570914=_0x14c8af[_0x551eb4('0x40')](),_0x2db198=_0x14c8af[_0x551eb4('0x26')]();return(_0x570914<0xa?'0':'')+_0x570914+':'+(_0x2db198<0xa?'0':'')+_0x2db198;},this[_0x2543c2('0x1c')]=_0x49c70f=>Math[_0x2543c2('0x12')](_0x49c70f-273.15),this[_0x2543c2('0x17')]=_0x2d21cd=>Math[_0x2543c2('0x12')](_0x2d21cd*1.8-459.67),this[_0x2543c2('0x30')]=_0x14c576=>{const _0x45d2c8=_0x2543c2,_0x4ec4ab=[_0x45d2c8('0x2c'),_0x45d2c8('0x4'),'North\x20East','East\x20-\x20North\x20East','East',_0x45d2c8('0x3a'),_0x45d2c8('0x56'),_0x45d2c8('0x20'),_0x45d2c8('0x3b'),'South\x20-\x20South\x20West',_0x45d2c8('0x4e'),_0x45d2c8('0x21'),_0x45d2c8('0x38'),_0x45d2c8('0x43'),_0x45d2c8('0x51'),_0x45d2c8('0x53')];return _0x4ec4ab[Math[_0x45d2c8('0x12')](_0x14c576/22.5+0.5)%0x8];},this['exec']=async(_0x268bb7,_0xa2d20d)=>{const _0x137def=_0x2543c2;if(!_0xa2d20d['_'][_0x137def('0x3d')])throw new errors[(_0x137def('0x28'))](errors[_0x137def('0x8')]['INVALID_COMMAND_SYNTAX'],this[_0x137def('0x37')]);const _0x2f6871=_0xa2d20d['_'][_0x137def('0xc')]('\x20'),_0x4936c9=await omnic[_0x137def('0x23')]('/weather/'+_0x2f6871),_0x1ecac4=await _0x4936c9[_0x137def('0x44')]();if(_0x1ecac4[_0x137def('0x46')]!==0xc8)throw new Error(_0x1ecac4[_0x137def('0x41')]);await _0x268bb7[_0x137def('0x15')][_0x137def('0x0')]({'embed':{'color':tesseract_1[_0x137def('0x1f')][_0x137def('0x34')][_0x137def('0x42')],'author':{'name':_0x137def('0xb')},'title':_0x1ecac4[_0x137def('0x37')]+(_0x1ecac4['sys'][_0x137def('0x27')]?',\x20'+_0x1ecac4[_0x137def('0x25')]['country']:''),'fields':[{'name':_0x137def('0x5'),'value':_0x1ecac4[_0x137def('0x33')][0x0][_0x137def('0x14')],'inline':!![]},{'name':_0x137def('0x45'),'value':_0x1ecac4[_0x137def('0x13')][_0x137def('0x35')]+',\x20'+_0x1ecac4[_0x137def('0x13')][_0x137def('0x3f')],'inline':!![]},{'name':_0x137def('0x50'),'value':'UTC'+(_0x1ecac4[_0x137def('0x11')]<0x0?'':'+')+_0x1ecac4['timezone']/0x3c/0x3c,'inline':!![]},{'name':'Temperature','value':this[_0x137def('0x1c')](_0x1ecac4[_0x137def('0x14')][_0x137def('0x3c')])+_0x137def('0x19')+this[_0x137def('0x17')](_0x1ecac4[_0x137def('0x14')][_0x137def('0x3c')])+'°F','inline':!![]},{'name':_0x137def('0x1a'),'value':this[_0x137def('0x1c')](_0x1ecac4[_0x137def('0x14')][_0x137def('0x4f')])+_0x137def('0x19')+this[_0x137def('0x17')](_0x1ecac4[_0x137def('0x14')][_0x137def('0x4f')])+'°F','inline':!![]},{'name':_0x137def('0xa'),'value':this[_0x137def('0x1c')](_0x1ecac4[_0x137def('0x14')]['temp_max'])+'°C\x20/\x20'+this[_0x137def('0x17')](_0x1ecac4['main'][_0x137def('0x16')])+'°F','inline':!![]},{'name':'Feels\x20Like','value':this[_0x137def('0x1c')](_0x1ecac4[_0x137def('0x14')][_0x137def('0x7')])+_0x137def('0x19')+this['kelvinToFahrenheit'](_0x1ecac4[_0x137def('0x14')][_0x137def('0x7')])+'°F','inline':!![]},{'name':_0x137def('0x18'),'value':_0x1ecac4[_0x137def('0x14')][_0x137def('0x22')]+'%','inline':!![]},{'name':_0x137def('0x2b'),'value':_0x1ecac4[_0x137def('0x14')][_0x137def('0x57')]+'\x20hPa\x20(Sea\x20Level)\x0a'+(_0x1ecac4['main'][_0x137def('0x29')]?_0x1ecac4[_0x137def('0x14')][_0x137def('0x29')]:'-')+_0x137def('0x9'),'inline':!![]},{'name':'Wind','value':_0x1ecac4[_0x137def('0x1e')][_0x137def('0x24')]+_0x137def('0x52')+(_0x1ecac4[_0x137def('0x1e')][_0x137def('0xd')]?this[_0x137def('0x30')](_0x1ecac4[_0x137def('0x1e')]['deg']):_0x1ecac4[_0x137def('0x1e')][_0x137def('0xd')]),'inline':!![]},{'name':_0x137def('0x48'),'value':(_0x1ecac4[_0x137def('0xf')]?_0x1ecac4[_0x137def('0xf')][_0x137def('0x10')]:0x0)+'%','inline':!![]},{'name':_0x137def('0x1b'),'value':(_0x1ecac4['rain']?_0x1ecac4[_0x137def('0x39')]['1h']:'-')+_0x137def('0x2f')+(_0x1ecac4[_0x137def('0x2a')]?_0x1ecac4[_0x137def('0x2a')]['1h']:'-')+_0x137def('0x2d'),'inline':!![]},{'name':'Visibility','value':(_0x1ecac4[_0x137def('0x2e')]?_0x1ecac4['visibility']:'-')+'\x20m','inline':!![]},{'name':'Sunrise','value':_0x1ecac4[_0x137def('0x25')][_0x137def('0x54')]?this['getTime'](new Date(_0x1ecac4[_0x137def('0x25')][_0x137def('0x54')]*0x3e8)):'-','inline':!![]},{'name':'Sunset','value':_0x1ecac4[_0x137def('0x25')]['sunset']?this[_0x137def('0x49')](new Date(_0x1ecac4[_0x137def('0x25')][_0x137def('0x4d')]*0x3e8)):'-','inline':!![]}],'thumbnail':{'url':_0x137def('0x3')+_0x1ecac4[_0x137def('0x33')][0x0][_0x137def('0x1')]+_0x137def('0x47')},'footer':{'text':_0x137def('0x1d')},'timestamp':new Date(_0x1ecac4['dt']*0x3e8)}});};}};