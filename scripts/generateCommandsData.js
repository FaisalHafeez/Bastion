const a229_0x3c0823=a229_0x3f8e;(function(_0x542b85,_0x5ceac9){const _0x9ae45c=a229_0x3f8e,_0x119f82=_0x542b85();while(!![]){try{const _0x5c9598=-parseInt(_0x9ae45c(0x81))/0x1*(-parseInt(_0x9ae45c(0x99))/0x2)+-parseInt(_0x9ae45c(0x8a))/0x3+parseInt(_0x9ae45c(0xa3))/0x4+-parseInt(_0x9ae45c(0x9d))/0x5*(parseInt(_0x9ae45c(0x94))/0x6)+parseInt(_0x9ae45c(0x88))/0x7+-parseInt(_0x9ae45c(0x97))/0x8*(parseInt(_0x9ae45c(0x9f))/0x9)+parseInt(_0x9ae45c(0x92))/0xa;if(_0x5c9598===_0x5ceac9)break;else _0x119f82['push'](_0x119f82['shift']());}catch(_0x245e90){_0x119f82['push'](_0x119f82['shift']());}}}(a229_0x28b4,0xed982));const a229_0x4bf81b=(function(){let _0x43e8c9=!![];return function(_0x224ddb,_0x39c907){const _0x141022=_0x43e8c9?function(){if(_0x39c907){const _0x3a0c07=_0x39c907['apply'](_0x224ddb,arguments);return _0x39c907=null,_0x3a0c07;}}:function(){};return _0x43e8c9=![],_0x141022;};}()),a229_0x3529a8=a229_0x4bf81b(this,function(){const _0x589ba1=a229_0x3f8e;return a229_0x3529a8[_0x589ba1(0x9b)]()['search'](_0x589ba1(0x7c))['toString']()[_0x589ba1(0xa4)](a229_0x3529a8)[_0x589ba1(0x98)](_0x589ba1(0x7c));});a229_0x3529a8();'use strict';Object[a229_0x3c0823(0x80)](exports,a229_0x3c0823(0xa5),{'value':!![]});const fs=require('fs'),path=require(a229_0x3c0823(0x89)),yaml=require(a229_0x3c0823(0xa7)),walkDirectory=_0x31bb83=>{const _0x2abbf0=[];return function _0xf01199(_0xeb4d46){const _0x49922f=a229_0x3f8e,_0x3e472f=fs[_0x49922f(0x8e)](_0xeb4d46);for(const _0x193505 of _0x3e472f){const _0x598603=path[_0x49922f(0xa0)](_0xeb4d46,_0x193505);if(fs[_0x49922f(0xa1)](_0x598603)['isDirectory']())_0xf01199(_0x598603);else _0x2abbf0[_0x49922f(0xa2)](_0x598603);}}(_0x31bb83),_0x2abbf0;},commandsDirectory=path['resolve'](a229_0x3c0823(0x7f));function a229_0x3f8e(_0x3560b7,_0x41ac98){const _0x31d71f=a229_0x28b4();return a229_0x3f8e=function(_0x3529a8,_0x4bf81b){_0x3529a8=_0x3529a8-0x7b;let _0x28b40c=_0x31d71f[_0x3529a8];return _0x28b40c;},a229_0x3f8e(_0x3560b7,_0x41ac98);}if(fs[a229_0x3c0823(0x83)](commandsDirectory)){const files=walkDirectory(commandsDirectory),commandStrings={},commands={};for(const file of files['filter'](_0x3168d0=>_0x3168d0[a229_0x3c0823(0x9a)](a229_0x3c0823(0x87)))){const Command=require(file),command=new Command(),commandCategory=path[a229_0x3c0823(0x86)](path[a229_0x3c0823(0x9c)](commandsDirectory,file));commandStrings[command[a229_0x3c0823(0x8b)]]=command['description'],commandCategory in commands?commands[commandCategory][a229_0x3c0823(0xa2)]({'name':command[a229_0x3c0823(0x8b)],'description':command[a229_0x3c0823(0x8c)],'triggers':command[a229_0x3c0823(0x93)],'scope':command[a229_0x3c0823(0x8f)],'owner':command['owner'],'typing':command['typing'],'schedulable':command[a229_0x3c0823(0x7e)],'unsafe':command['unsafe'],'nsfw':command[a229_0x3c0823(0x9e)],'cooldown':command[a229_0x3c0823(0x96)],'ratelimit':command[a229_0x3c0823(0x84)],'clientPermission':command[a229_0x3c0823(0x95)],'userPermissions':command[a229_0x3c0823(0xa8)],'syntax':command[a229_0x3c0823(0x91)]}):commands[commandCategory]=[{'name':command[a229_0x3c0823(0x8b)],'description':command['description'],'triggers':command[a229_0x3c0823(0x93)],'scope':command['scope'],'owner':command[a229_0x3c0823(0x85)],'typing':command[a229_0x3c0823(0x82)],'schedulable':command[a229_0x3c0823(0x7e)],'unsafe':command[a229_0x3c0823(0x90)],'nsfw':command[a229_0x3c0823(0x9e)],'cooldown':command[a229_0x3c0823(0x96)],'ratelimit':command[a229_0x3c0823(0x84)],'clientPermission':command[a229_0x3c0823(0x95)],'userPermissions':command[a229_0x3c0823(0xa8)],'syntax':command[a229_0x3c0823(0x91)]}];}fs['writeFileSync'](a229_0x3c0823(0xa6),yaml[a229_0x3c0823(0x7b)](commandStrings),{'encoding':a229_0x3c0823(0x8d)}),fs['writeFileSync'](a229_0x3c0823(0x7d),JSON[a229_0x3c0823(0x7b)](commands),{'encoding':'utf-8'});}function a229_0x28b4(){const _0x529faa=['owner','dirname','.js','2892953rSZzkI','path','3577494scEDfL','name','description','utf-8','readdirSync','scope','unsafe','syntax','9276530QEbhvF','triggers','4392cNoGym','clientPermission','cooldown','1233752LYTXGA','search','2806482wdMguW','endsWith','toString','relative','7570iUYWdp','nsfw','63hjythq','join','statSync','push','6437168mCoexj','constructor','__esModule','./locales/en_us/commands.yaml','yaml','userPermissions','stringify','(((.+)+)+)+$','./assets/commands.json','schedulable','./commands/','defineProperty','1AwWReV','typing','existsSync','ratelimit'];a229_0x28b4=function(){return _0x529faa;};return a229_0x28b4();}