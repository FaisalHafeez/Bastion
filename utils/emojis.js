const a243_0x1f9b1d=a243_0x2702;(function(_0x5c69dd,_0x3c2268){const _0xbc777d=a243_0x2702,_0x127354=_0x5c69dd();while(!![]){try{const _0x519d5d=parseInt(_0xbc777d(0x1c1))/0x1+parseInt(_0xbc777d(0x1ab))/0x2+parseInt(_0xbc777d(0x1bc))/0x3+parseInt(_0xbc777d(0x1b5))/0x4*(parseInt(_0xbc777d(0x1be))/0x5)+-parseInt(_0xbc777d(0x1b6))/0x6*(-parseInt(_0xbc777d(0x1ac))/0x7)+-parseInt(_0xbc777d(0x1bf))/0x8*(-parseInt(_0xbc777d(0x1ad))/0x9)+-parseInt(_0xbc777d(0x1b9))/0xa*(parseInt(_0xbc777d(0x1ba))/0xb);if(_0x519d5d===_0x3c2268)break;else _0x127354['push'](_0x127354['shift']());}catch(_0x240600){_0x127354['push'](_0x127354['shift']());}}}(a243_0x3e52,0x86f3e));function a243_0x2702(_0x37341e,_0x497e66){const _0x492ebb=a243_0x3e52();return a243_0x2702=function(_0x4544cf,_0x992b58){_0x4544cf=_0x4544cf-0x1ab;let _0x3e522f=_0x492ebb[_0x4544cf];return _0x3e522f;},a243_0x2702(_0x37341e,_0x497e66);}const a243_0x992b58=(function(){let _0x30170a=!![];return function(_0x35004f,_0x1760ec){const _0x1f0f0f=_0x30170a?function(){if(_0x1760ec){const _0x7d3cc7=_0x1760ec['apply'](_0x35004f,arguments);return _0x1760ec=null,_0x7d3cc7;}}:function(){};return _0x30170a=![],_0x1f0f0f;};}()),a243_0x4544cf=a243_0x992b58(this,function(){const _0x3176cd=a243_0x2702;return a243_0x4544cf[_0x3176cd(0x1c4)]()[_0x3176cd(0x1b0)]('(((.+)+)+)+$')['toString']()[_0x3176cd(0x1b8)](a243_0x4544cf)[_0x3176cd(0x1b0)]('(((.+)+)+)+$');});function a243_0x3e52(){const _0x5d96d2=['4792cgtWrN','base64','585938YjoKHV','includes','getEmojis','toString','203550GOtHrJ','14AoKVwD','11484GdYBOv','./snowflake','defineProperty','search','match','__esModule','isUnicodeEmoji','from','547112QEDFvD','1864956rDAalq','parseEmoji','constructor','12290QePDAC','25817OTmSZt','isValid','1628616gkhpIR','../assets/emojis.json','30nMnFAV'];a243_0x3e52=function(){return _0x5d96d2;};return a243_0x3e52();}a243_0x4544cf();'use strict';Object[a243_0x1f9b1d(0x1af)](exports,a243_0x1f9b1d(0x1b2),{'value':!![]}),exports[a243_0x1f9b1d(0x1b7)]=exports[a243_0x1f9b1d(0x1b3)]=exports[a243_0x1f9b1d(0x1c3)]=void 0x0;const emojis=require(a243_0x1f9b1d(0x1bd)),snowflake=require(a243_0x1f9b1d(0x1ae)),getEmojis=()=>{return emojis;};exports[a243_0x1f9b1d(0x1c3)]=getEmojis;const isUnicodeEmoji=_0x33786=>{const _0x226c3e=a243_0x1f9b1d;return emojis[_0x226c3e(0x1c2)](Buffer[_0x226c3e(0x1b4)](_0x33786)['toString'](_0x226c3e(0x1c0)));};exports['isUnicodeEmoji']=isUnicodeEmoji;const parseEmoji=_0x22dd71=>{const _0x2934b9=a243_0x1f9b1d;if(!_0x22dd71)return;let _0x158059;if(emojis[_0x2934b9(0x1c2)](_0x22dd71))_0x158059={'value':_0x22dd71,'reaction':Buffer['from'](_0x22dd71,'base64')[_0x2934b9(0x1c4)]('utf-8')};else{if(emojis[_0x2934b9(0x1c2)](Buffer[_0x2934b9(0x1b4)](_0x22dd71)['toString']('base64')))_0x158059={'value':Buffer[_0x2934b9(0x1b4)](_0x22dd71)['toString'](_0x2934b9(0x1c0)),'reaction':_0x22dd71};else{if(_0x22dd71['includes'](':')){const [,_0x9712d8]=_0x22dd71[_0x2934b9(0x1b1)](/<a?:\w+:(\d+)>/i);_0x158059={'value':_0x9712d8,'reaction':_0x9712d8};}else snowflake[_0x2934b9(0x1bb)](_0x22dd71)&&(_0x158059={'value':_0x22dd71,'reaction':_0x22dd71});}}return _0x158059;};exports[a243_0x1f9b1d(0x1b7)]=parseEmoji;