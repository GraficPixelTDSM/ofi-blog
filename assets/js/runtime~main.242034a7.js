!function(){"use strict";var e,f,c,b,a,d={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}n.m=d,n.c=t,n.amdD=function(){throw new Error("define cannot be used indirect")},e=[],n.O=function(f,c,b,a){if(!c){var d=1/0;for(o=0;o<e.length;o++){c=e[o][0],b=e[o][1],a=e[o][2];for(var t=!0,r=0;r<c.length;r++)(!1&a||d>=a)&&Object.keys(n.O).every((function(e){return n.O[e](c[r])}))?c.splice(r--,1):(t=!1,a<d&&(d=a));t&&(e.splice(o--,1),f=b())}return f}a=a||0;for(var o=e.length;o>0&&e[o-1][2]>a;o--)e[o]=e[o-1];e[o]=[c,b,a]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},c=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var a=Object.create(null);n.r(a);var d={};f=f||[null,c({}),c([]),c(c)];for(var t=2&b&&e;"object"==typeof t&&!~f.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((function(f){d[f]=function(){return e[f]}}));return d.default=function(){return e},n.d(a,d),a},n.d=function(e,f){for(var c in f)n.o(f,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:f[c]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,c){return n.f[c](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",102:"f7894820",142:"e62b060c",153:"0539b754",188:"3df67093",199:"c7992637",208:"a67ce82e",247:"53f070a0",276:"e8a1ebbc",361:"7d17ecc1",436:"726f2915",457:"1322b5cb",510:"3ac2c726",546:"44937557",582:"a158ffb3",780:"276dde3c",871:"69c6eb84",910:"10518bd9",945:"939dab8c",1075:"acc3b1c6",1243:"6ebd1c5e",1314:"00f886fd",1340:"c3aafa04",1354:"efb3804a",1437:"07654d07",1471:"f27f87ed",1592:"fa328034",1625:"b3ca6cbc",1673:"d46e6d7f",1735:"d3c3ca72",1936:"172ddcfa",1943:"15c46457",2019:"b7851066",2090:"da60f438",2125:"3d9c95a4",2128:"4cc00591",2132:"c597aca0",2143:"980011da",2176:"b39086da",2204:"e1d0c6bf",2212:"065a5363",2233:"2406bff0",2364:"790132bf",2396:"2b7434ec",2477:"bd1f9c98",2501:"031c9037",2580:"9811db4c",2678:"488aa316",2701:"db10949c",2706:"02858b93",2811:"cf74becf",2824:"f2a1587c",2860:"cf4b9775",2867:"442cb3d2",2869:"e57b096a",2935:"a6220aed",2998:"5b7c56c9",3004:"975f1447",3038:"f58f7fb5",3066:"517be5e3",3085:"1f391b9e",3153:"6f27721d",3233:"894501fd",3237:"1df93b7f",3249:"efbfabfb",3308:"55fb9dd6",3401:"6bb82255",3426:"63f3b05f",3436:"cf4c4977",3447:"437b71a6",3495:"4c0978e4",3600:"878bb1ab",3621:"115129aa",3642:"3241050c",3683:"f115f3ee",3687:"a06eef2e",3699:"3eb4c6ab",3819:"4ecb91b3",3837:"803c0436",3880:"ad37b15f",3951:"67344c7d",3959:"dbf95b26",3965:"465ee19f",3994:"0dba96d1",4151:"92cea6b1",4213:"058de714",4301:"2fe12bf0",4303:"a70d454f",4336:"6d38fc27",4406:"901295b7",4459:"627eb5ac",4480:"06e95c4d",4592:"ac67b356",4594:"2a304f7d",4613:"4d837c14",4787:"986136cf",4860:"69624cb6",4923:"15313f21",4948:"313fbeff",5013:"5fa1322c",5022:"de436372",5027:"25aefa21",5055:"1907db23",5078:"102bc122",5088:"e132bfd9",5096:"0a916777",5135:"a5e2f2c5",5145:"f8ff45ea",5149:"7ab878c0",5155:"4b3fbf15",5174:"23a59a17",5194:"3697e284",5319:"ee038ded",5331:"cd4c4c6d",5336:"c401d2ff",5346:"5f371f44",5369:"19112c8d",5404:"21c97ff8",5448:"2cc7ad0f",5544:"57f1e6a9",5546:"4792e528",5560:"d963ecaf",5561:"d005084e",5637:"fbc938a6",5648:"900f420a",5659:"5844b1bb",5666:"f06beded",5737:"9748130d",5838:"30effe00",5841:"fdaa473f",5849:"d7f0ed24",5883:"fa83644a",5906:"f510df13",5967:"705460dc",6022:"03fa52c3",6049:"67bc8b9e",6090:"2158cdf6",6136:"3c295b71",6161:"463d3c81",6178:"863cf927",6191:"d2ad4c85",6224:"3482b56e",6250:"3e7ec442",6312:"bb43394e",6389:"7f1344e3",6398:"45640a65",6463:"45586f4a",6465:"76c06bb6",6543:"b4c52a90",6607:"6795a592",6621:"0ab1f0a1",6624:"3cbf09c4",6639:"b2ddc52c",6673:"b9601a4a",6695:"de7f8e4f",6730:"1770729e",6735:"5ea635d2",6762:"933fd068",6764:"e1012dcf",6770:"e0ff63a1",6796:"7c63bf7f",6819:"8abeee4c",6826:"27f1ef12",6838:"ec2d7a7a",6881:"a5a48f56",6890:"04354d8c",6935:"f7714e5c",6973:"4798f9d4",6988:"0be4da16",7013:"d9c435ff",7016:"9e87201d",7021:"ea1e727b",7028:"e8e800c8",7078:"51255b47",7097:"0bf8fef9",7140:"5dd7be4b",7382:"7108e5f3",7401:"d41b7002",7439:"457fbd88",7521:"335c073b",7543:"91d1a7fc",7590:"c6681ae7",7619:"60826680",7638:"f7c71432",7694:"f3e8a725",7740:"c61fa505",7755:"3d8f5c70",7766:"302b53dc",7835:"1bf38796",7861:"cf1c6f03",7863:"b55b76b5",7918:"17896441",7924:"f8c9630f",7968:"04f34c03",8048:"0621c7f2",8125:"2b3a8c52",8159:"574456fc",8196:"8fd50288",8264:"ddc3c17f",8408:"98d11e1d",8430:"ae7c7bb9",8466:"bab5a682",8471:"4063109a",8522:"7a604033",8540:"0e1e5229",8553:"dcb8e663",8554:"91e3028b",8598:"0b48c52c",8643:"0f398f75",8715:"7a028b30",8832:"881f6ccd",8873:"eb30fe79",8928:"be57eff9",8979:"b88b3775",9093:"50948be4",9157:"85093c72",9178:"9d1bf180",9274:"a1ddf171",9281:"b5012721",9309:"cc86facb",9313:"a921065f",9350:"6b077eec",9438:"5952020b",9468:"226cffe1",9514:"1be78505",9598:"53fb35fd",9644:"bebd7fa4",9707:"91f37be8",9766:"2478e0d5",9785:"930226b2",9843:"5b7c9e9a",9876:"6bfb7357",9886:"1e3a33cc",9961:"f400de28"}[e]||e)+"."+{53:"0ba9d5d3",68:"522cfccc",102:"1ae5bf63",142:"7e9e27c9",153:"ba096374",188:"5d6ac250",199:"ea9888d8",208:"92c06a7d",247:"5bc989a6",276:"4a1b66d7",361:"f45607db",436:"a40be2bc",457:"6518549b",510:"29b680fd",546:"e7d04996",582:"6c92d5c2",780:"c2f86a7c",871:"77f1dbf6",910:"46b2ce9f",945:"aae4ec70",1075:"2c51f831",1243:"73e36151",1314:"7964d28c",1340:"e6784b04",1354:"66da7ae9",1433:"cf19b5cb",1437:"7a356579",1471:"b84aa06a",1592:"c54702c8",1625:"62d105a5",1673:"eea99489",1735:"96f15a1d",1879:"a542dfb4",1936:"d2df0eac",1943:"ed70fd81",2019:"042d1c9f",2090:"aacb7dc7",2125:"31db28a9",2128:"efc10c29",2132:"a0d6c9cb",2143:"7d284535",2176:"266583e2",2204:"3b84ac29",2212:"b4ac3f04",2233:"6cfee26e",2273:"68b06198",2307:"9d6d51e8",2364:"e692dfab",2396:"99725b53",2477:"d5faa9b3",2501:"c16002be",2580:"6b19a7d1",2678:"95e8eb52",2679:"2f178807",2701:"b0712d10",2706:"f2390df7",2811:"d2e3df36",2824:"b8dbebaf",2860:"10ae2c06",2867:"c4599cca",2869:"c134f6c4",2935:"01609707",2998:"db5cee12",3004:"a006d49b",3038:"10798630",3066:"dc71a783",3085:"c8047b5a",3153:"c5e53ca0",3233:"80508e96",3237:"12951856",3249:"97fcf253",3308:"1c32d24d",3401:"e0438ad5",3426:"c220d626",3436:"e9f6484e",3447:"987bf507",3495:"a2218b0f",3600:"c0b05163",3621:"ae5f8983",3642:"afc8ab36",3683:"3624c2d3",3687:"e38da75c",3699:"ef2f726a",3819:"519f178b",3837:"cad6d1cf",3880:"cbfca5ed",3951:"97ecef92",3959:"e7c96bb8",3965:"84d52337",3994:"9ddbf699",4007:"6f293758",4034:"3ce73133",4151:"ca83028a",4213:"4de9d2a4",4301:"075e7c59",4303:"090e4a7f",4336:"66304cd9",4406:"1134be94",4459:"159b860d",4480:"3534ae7f",4592:"33399b26",4594:"b11df556",4613:"a4962b32",4787:"943ec3cd",4860:"df371c4f",4923:"42707f7c",4948:"cda43b30",4981:"addcce17",5013:"e2925874",5022:"d3a3c40d",5027:"1adfac5c",5055:"8b35dc7a",5078:"90c6348b",5088:"6fc14f6b",5096:"1d31173e",5135:"786fad83",5145:"ebafe9b4",5149:"9b71e31d",5155:"9cbc95ed",5174:"70ca707a",5194:"1aca7228",5319:"bd80539b",5331:"afa9a992",5336:"32f9c722",5346:"5f313eaf",5369:"45f08855",5404:"47d1a6e5",5448:"39a7b65f",5544:"320fca10",5546:"a5d3e939",5560:"74974e72",5561:"6ea9553f",5637:"3d57515e",5648:"9c9da664",5659:"0ec005cb",5666:"de5d05ff",5737:"3ec4a62c",5838:"0d45b3d8",5841:"eb3f1740",5849:"3b5ceaa8",5883:"5236d982",5906:"c015c65f",5967:"9f5cea45",6022:"e2e01385",6049:"eccc029f",6090:"6503b87e",6136:"f6a82219",6161:"cae95b58",6178:"a3238fe3",6191:"f36ca74c",6224:"4cf2fb87",6250:"0322a19d",6312:"75be5f60",6389:"0f82e53e",6398:"9adc7d1a",6463:"e29e54b0",6465:"238159bb",6543:"335c7cf9",6604:"fd04d6d6",6607:"19aa37c5",6621:"8d41223b",6624:"a2d334df",6639:"da66cedf",6673:"07c57165",6695:"14f7f986",6730:"2b7e00c6",6735:"91159b99",6762:"134d571c",6764:"0c655663",6770:"910563f0",6796:"0e96bb5d",6819:"aee3a6db",6826:"c2fab9ce",6838:"0b37cc43",6881:"dcffd187",6890:"5fbe2299",6935:"a5453a94",6973:"10234687",6988:"04ecd4ba",7013:"c2c41993",7016:"185ca2cf",7021:"d390ac99",7028:"df7e0e09",7078:"90836901",7097:"2c51fda7",7140:"b8cda1dc",7382:"a2611b4d",7401:"b99c0642",7439:"a1c9d6a2",7521:"a6aa0d9a",7539:"6fdf0624",7543:"bd2a88e3",7590:"e229cfbb",7619:"644bb90f",7638:"e9fb65cc",7694:"7efdeaff",7740:"8c0c2ac4",7755:"76081258",7766:"56176e56",7787:"00f2ca58",7835:"56fde9b0",7861:"666f21ca",7863:"1b1abbc3",7918:"b3226377",7924:"47e87e3b",7968:"8db211d3",8048:"0eaff84c",8125:"b1863fb3",8159:"592e2f77",8196:"49bf610e",8264:"04f967e1",8408:"ea89d468",8430:"be4a45a7",8466:"2f974562",8471:"8bafe9bb",8486:"70b0b894",8522:"2f3efd4b",8540:"4f4e8eed",8553:"e5029c98",8554:"154e77bc",8598:"8160d921",8643:"02821da7",8715:"4dc45bbb",8832:"ed805c51",8873:"c2a3e79f",8928:"6a4eac73",8979:"f7ccca91",9093:"58728741",9157:"b5417452",9178:"71f1ae59",9274:"d1ad0c26",9281:"9d07964f",9309:"80eb401c",9313:"be29b50b",9350:"e60cc491",9438:"3cd7637c",9468:"312f268d",9514:"84606eca",9552:"b9cfb0d3",9598:"a64cec83",9644:"4902554d",9707:"fba057cc",9766:"ff6f43a4",9785:"8015b2fb",9843:"e79e3d13",9876:"b5853215",9886:"4a96ee49",9961:"f315b7a5"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.4eef92e9.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},b={},a="ofi-blog-versioned:",n.l=function(e,f,c,d){if(b[e])b[e].push(f);else{var t,r;if(void 0!==c)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+c){t=u;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",a+c),t.src=e),b[e]=[f];var l=function(f,c){t.onerror=t.onload=null,clearTimeout(s);var a=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),a&&a.forEach((function(e){return e(c)})),f)return f(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="/",n.gca=function(e){return e={17896441:"7918",44937557:"546",60826680:"7619","935f2afb":"53",f7894820:"102",e62b060c:"142","0539b754":"153","3df67093":"188",c7992637:"199",a67ce82e:"208","53f070a0":"247",e8a1ebbc:"276","7d17ecc1":"361","726f2915":"436","1322b5cb":"457","3ac2c726":"510",a158ffb3:"582","276dde3c":"780","69c6eb84":"871","10518bd9":"910","939dab8c":"945",acc3b1c6:"1075","6ebd1c5e":"1243","00f886fd":"1314",c3aafa04:"1340",efb3804a:"1354","07654d07":"1437",f27f87ed:"1471",fa328034:"1592",b3ca6cbc:"1625",d46e6d7f:"1673",d3c3ca72:"1735","172ddcfa":"1936","15c46457":"1943",b7851066:"2019",da60f438:"2090","3d9c95a4":"2125","4cc00591":"2128",c597aca0:"2132","980011da":"2143",b39086da:"2176",e1d0c6bf:"2204","065a5363":"2212","2406bff0":"2233","790132bf":"2364","2b7434ec":"2396",bd1f9c98:"2477","031c9037":"2501","9811db4c":"2580","488aa316":"2678",db10949c:"2701","02858b93":"2706",cf74becf:"2811",f2a1587c:"2824",cf4b9775:"2860","442cb3d2":"2867",e57b096a:"2869",a6220aed:"2935","5b7c56c9":"2998","975f1447":"3004",f58f7fb5:"3038","517be5e3":"3066","1f391b9e":"3085","6f27721d":"3153","894501fd":"3233","1df93b7f":"3237",efbfabfb:"3249","55fb9dd6":"3308","6bb82255":"3401","63f3b05f":"3426",cf4c4977:"3436","437b71a6":"3447","4c0978e4":"3495","878bb1ab":"3600","115129aa":"3621","3241050c":"3642",f115f3ee:"3683",a06eef2e:"3687","3eb4c6ab":"3699","4ecb91b3":"3819","803c0436":"3837",ad37b15f:"3880","67344c7d":"3951",dbf95b26:"3959","465ee19f":"3965","0dba96d1":"3994","92cea6b1":"4151","058de714":"4213","2fe12bf0":"4301",a70d454f:"4303","6d38fc27":"4336","901295b7":"4406","627eb5ac":"4459","06e95c4d":"4480",ac67b356:"4592","2a304f7d":"4594","4d837c14":"4613","986136cf":"4787","69624cb6":"4860","15313f21":"4923","313fbeff":"4948","5fa1322c":"5013",de436372:"5022","25aefa21":"5027","1907db23":"5055","102bc122":"5078",e132bfd9:"5088","0a916777":"5096",a5e2f2c5:"5135",f8ff45ea:"5145","7ab878c0":"5149","4b3fbf15":"5155","23a59a17":"5174","3697e284":"5194",ee038ded:"5319",cd4c4c6d:"5331",c401d2ff:"5336","5f371f44":"5346","19112c8d":"5369","21c97ff8":"5404","2cc7ad0f":"5448","57f1e6a9":"5544","4792e528":"5546",d963ecaf:"5560",d005084e:"5561",fbc938a6:"5637","900f420a":"5648","5844b1bb":"5659",f06beded:"5666","9748130d":"5737","30effe00":"5838",fdaa473f:"5841",d7f0ed24:"5849",fa83644a:"5883",f510df13:"5906","705460dc":"5967","03fa52c3":"6022","67bc8b9e":"6049","2158cdf6":"6090","3c295b71":"6136","463d3c81":"6161","863cf927":"6178",d2ad4c85:"6191","3482b56e":"6224","3e7ec442":"6250",bb43394e:"6312","7f1344e3":"6389","45640a65":"6398","45586f4a":"6463","76c06bb6":"6465",b4c52a90:"6543","6795a592":"6607","0ab1f0a1":"6621","3cbf09c4":"6624",b2ddc52c:"6639",b9601a4a:"6673",de7f8e4f:"6695","1770729e":"6730","5ea635d2":"6735","933fd068":"6762",e1012dcf:"6764",e0ff63a1:"6770","7c63bf7f":"6796","8abeee4c":"6819","27f1ef12":"6826",ec2d7a7a:"6838",a5a48f56:"6881","04354d8c":"6890",f7714e5c:"6935","4798f9d4":"6973","0be4da16":"6988",d9c435ff:"7013","9e87201d":"7016",ea1e727b:"7021",e8e800c8:"7028","51255b47":"7078","0bf8fef9":"7097","5dd7be4b":"7140","7108e5f3":"7382",d41b7002:"7401","457fbd88":"7439","335c073b":"7521","91d1a7fc":"7543",c6681ae7:"7590",f7c71432:"7638",f3e8a725:"7694",c61fa505:"7740","3d8f5c70":"7755","302b53dc":"7766","1bf38796":"7835",cf1c6f03:"7861",b55b76b5:"7863",f8c9630f:"7924","04f34c03":"7968","0621c7f2":"8048","2b3a8c52":"8125","574456fc":"8159","8fd50288":"8196",ddc3c17f:"8264","98d11e1d":"8408",ae7c7bb9:"8430",bab5a682:"8466","4063109a":"8471","7a604033":"8522","0e1e5229":"8540",dcb8e663:"8553","91e3028b":"8554","0b48c52c":"8598","0f398f75":"8643","7a028b30":"8715","881f6ccd":"8832",eb30fe79:"8873",be57eff9:"8928",b88b3775:"8979","50948be4":"9093","85093c72":"9157","9d1bf180":"9178",a1ddf171:"9274",b5012721:"9281",cc86facb:"9309",a921065f:"9313","6b077eec":"9350","5952020b":"9438","226cffe1":"9468","1be78505":"9514","53fb35fd":"9598",bebd7fa4:"9644","91f37be8":"9707","2478e0d5":"9766","930226b2":"9785","5b7c9e9a":"9843","6bfb7357":"9876","1e3a33cc":"9886",f400de28:"9961"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,c){var b=n.o(e,f)?e[f]:void 0;if(0!==b)if(b)c.push(b[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var a=new Promise((function(c,a){b=e[f]=[c,a]}));c.push(b[2]=a);var d=n.p+n.u(f),t=new Error;n.l(d,(function(c){if(n.o(e,f)&&(0!==(b=e[f])&&(e[f]=void 0),b)){var a=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;t.message="Loading chunk "+f+" failed.\n("+a+": "+d+")",t.name="ChunkLoadError",t.type=a,t.request=d,b[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,c){var b,a,d=c[0],t=c[1],r=c[2],o=0;for(b in t)n.o(t,b)&&(n.m[b]=t[b]);if(r)var i=r(n);for(f&&f(c);o<d.length;o++)a=d[o],n.o(e,a)&&e[a]&&e[a][0](),e[d[o]]=0;return n.O(i)},c=self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[];c.forEach(f.bind(null,0)),c.push=f.bind(null,c.push.bind(c))}()}();