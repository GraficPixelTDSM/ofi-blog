!function(){"use strict";var f,e,c,b,a,d={},t={};function n(f){var e=t[f];if(void 0!==e)return e.exports;var c=t[f]={id:f,loaded:!1,exports:{}};return d[f].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}n.m=d,n.c=t,n.amdD=function(){throw new Error("define cannot be used indirect")},f=[],n.O=function(e,c,b,a){if(!c){var d=1/0;for(o=0;o<f.length;o++){c=f[o][0],b=f[o][1],a=f[o][2];for(var t=!0,r=0;r<c.length;r++)(!1&a||d>=a)&&Object.keys(n.O).every((function(f){return n.O[f](c[r])}))?c.splice(r--,1):(t=!1,a<d&&(d=a));t&&(f.splice(o--,1),e=b())}return e}a=a||0;for(var o=f.length;o>0&&f[o-1][2]>a;o--)f[o]=f[o-1];f[o]=[c,b,a]},n.n=function(f){var e=f&&f.__esModule?function(){return f.default}:function(){return f};return n.d(e,{a:e}),e},c=Object.getPrototypeOf?function(f){return Object.getPrototypeOf(f)}:function(f){return f.__proto__},n.t=function(f,b){if(1&b&&(f=this(f)),8&b)return f;if("object"==typeof f&&f){if(4&b&&f.__esModule)return f;if(16&b&&"function"==typeof f.then)return f}var a=Object.create(null);n.r(a);var d={};e=e||[null,c({}),c([]),c(c)];for(var t=2&b&&f;"object"==typeof t&&!~e.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((function(e){d[e]=function(){return f[e]}}));return d.default=function(){return f},n.d(a,d),a},n.d=function(f,e){for(var c in e)n.o(e,c)&&!n.o(f,c)&&Object.defineProperty(f,c,{enumerable:!0,get:e[c]})},n.f={},n.e=function(f){return Promise.all(Object.keys(n.f).reduce((function(e,c){return n.f[c](f,e),e}),[]))},n.u=function(f){return"assets/js/"+({53:"935f2afb",100:"0a6303b0",102:"f7894820",153:"0539b754",188:"3df67093",208:"a67ce82e",224:"420749db",247:"53f070a0",276:"e8a1ebbc",436:"726f2915",477:"9818e81a",507:"35ee637d",510:"3ac2c726",546:"44937557",582:"a158ffb3",709:"8fb01fd9",780:"276dde3c",871:"69c6eb84",910:"10518bd9",945:"939dab8c",1063:"674d03c0",1075:"acc3b1c6",1104:"72271f55",1123:"1c89cb3c",1206:"019a41e7",1236:"d70cac07",1243:"6ebd1c5e",1314:"00f886fd",1340:"c3aafa04",1354:"efb3804a",1415:"827e5380",1443:"a11f96e8",1471:"f27f87ed",1592:"fa328034",1625:"b3ca6cbc",1673:"d46e6d7f",1735:"d3c3ca72",1797:"657ebaca",1924:"74c819a0",1943:"15c46457",2006:"671a48ba",2019:"b7851066",2090:"da60f438",2092:"da17ec70",2125:"3d9c95a4",2128:"4cc00591",2132:"c597aca0",2204:"e1d0c6bf",2212:"065a5363",2233:"2406bff0",2361:"76de2161",2364:"790132bf",2396:"2b7434ec",2477:"bd1f9c98",2501:"031c9037",2554:"f404c41a",2580:"9811db4c",2678:"488aa316",2701:"db10949c",2706:"02858b93",2770:"651d98b3",2811:"cf74becf",2824:"f2a1587c",2860:"cf4b9775",2867:"442cb3d2",2869:"e57b096a",2927:"3073bd02",2935:"a6220aed",2998:"5b7c56c9",3004:"975f1447",3064:"98a1fb2d",3066:"517be5e3",3085:"1f391b9e",3138:"b2ca6a13",3153:"6f27721d",3233:"894501fd",3237:"1df93b7f",3249:"efbfabfb",3308:"55fb9dd6",3356:"66401345",3377:"de4a7af5",3401:"6bb82255",3426:"63f3b05f",3436:"cf4c4977",3447:"437b71a6",3527:"3bc95bbf",3600:"878bb1ab",3621:"115129aa",3642:"3241050c",3683:"f115f3ee",3687:"a06eef2e",3699:"3eb4c6ab",3803:"704607d2",3819:"4ecb91b3",3837:"803c0436",3859:"cff1e141",3880:"ad37b15f",3951:"67344c7d",3965:"465ee19f",3975:"046b4402",3994:"0dba96d1",4151:"92cea6b1",4213:"058de714",4261:"4ba3937a",4301:"2fe12bf0",4303:"a70d454f",4336:"6d38fc27",4406:"901295b7",4459:"627eb5ac",4480:"06e95c4d",4526:"25e50802",4592:"ac67b356",4594:"2a304f7d",4613:"4d837c14",4630:"9b10fd77",4787:"986136cf",4826:"888a2a46",4860:"69624cb6",4876:"16ab6de1",4893:"8542818d",4899:"b1c846f7",4923:"15313f21",4948:"313fbeff",5013:"5fa1322c",5022:"de436372",5027:"25aefa21",5073:"988c424d",5078:"102bc122",5088:"e132bfd9",5096:"0a916777",5135:"a5e2f2c5",5149:"7ab878c0",5155:"4b3fbf15",5185:"2c08f81a",5191:"b25e1859",5194:"3697e284",5319:"ee038ded",5331:"cd4c4c6d",5336:"c401d2ff",5339:"ea49eee8",5346:"5f371f44",5369:"19112c8d",5404:"21c97ff8",5448:"2cc7ad0f",5544:"57f1e6a9",5546:"4792e528",5560:"d963ecaf",5561:"d005084e",5585:"4d7c4257",5648:"900f420a",5659:"5844b1bb",5685:"5efaadeb",5838:"30effe00",5841:"fdaa473f",5849:"d7f0ed24",5883:"fa83644a",5906:"f510df13",5967:"705460dc",6022:"03fa52c3",6049:"67bc8b9e",6066:"7a61ea70",6090:"2158cdf6",6136:"3c295b71",6161:"463d3c81",6178:"863cf927",6185:"525ded3b",6191:"d2ad4c85",6250:"3e7ec442",6310:"aa9861d4",6312:"bb43394e",6386:"ce3cc1dd",6389:"7f1344e3",6463:"45586f4a",6465:"76c06bb6",6607:"6795a592",6621:"0ab1f0a1",6624:"3cbf09c4",6673:"b9601a4a",6695:"de7f8e4f",6730:"1770729e",6735:"5ea635d2",6762:"933fd068",6764:"e1012dcf",6770:"e0ff63a1",6796:"7c63bf7f",6819:"8abeee4c",6826:"27f1ef12",6838:"ec2d7a7a",6881:"a5a48f56",6890:"04354d8c",6935:"f7714e5c",6973:"4798f9d4",6988:"0be4da16",7013:"d9c435ff",7016:"9e87201d",7021:"ea1e727b",7078:"51255b47",7089:"41c13a25",7097:"0bf8fef9",7108:"7e6bbbe8",7140:"5dd7be4b",7273:"c9ff7a08",7324:"fb220c9c",7401:"d41b7002",7439:"457fbd88",7494:"aadd5477",7521:"335c073b",7543:"91d1a7fc",7638:"f7c71432",7694:"f3e8a725",7740:"c61fa505",7750:"d7650eb3",7755:"3d8f5c70",7766:"302b53dc",7835:"1bf38796",7861:"cf1c6f03",7863:"b55b76b5",7918:"17896441",7924:"f8c9630f",7968:"04f34c03",8048:"0621c7f2",8110:"5793bd31",8125:"2b3a8c52",8159:"574456fc",8196:"8fd50288",8236:"68dc0479",8351:"78668860",8408:"98d11e1d",8430:"ae7c7bb9",8471:"4063109a",8522:"7a604033",8538:"ef300203",8553:"dcb8e663",8554:"91e3028b",8598:"0b48c52c",8643:"0f398f75",8715:"7a028b30",8832:"881f6ccd",8873:"eb30fe79",8979:"b88b3775",9065:"62514178",9157:"85093c72",9178:"9d1bf180",9281:"b5012721",9309:"cc86facb",9350:"6b077eec",9438:"5952020b",9468:"226cffe1",9514:"1be78505",9563:"3e915c84",9593:"99143605",9598:"53fb35fd",9707:"91f37be8",9726:"97598d67",9771:"25fd5747",9876:"6bfb7357",9886:"1e3a33cc",9960:"eaa944b8",9961:"f400de28"}[f]||f)+"."+{53:"210c6c3a",68:"522cfccc",100:"d7046cb9",102:"1ae5bf63",153:"ba096374",188:"5d6ac250",208:"92c06a7d",224:"0d38be05",247:"5bc989a6",276:"4a1b66d7",436:"a40be2bc",477:"d8d9b22d",507:"a4479fc9",510:"29b680fd",546:"81691106",582:"6c92d5c2",709:"ecf96732",780:"c2f86a7c",871:"c1608a88",910:"46b2ce9f",945:"aae4ec70",1063:"6d201c44",1075:"f044ffc7",1104:"f6e405fb",1123:"68262297",1206:"7d690a28",1236:"b60cbee7",1243:"73e36151",1314:"5f7d92ba",1340:"e6784b04",1354:"66da7ae9",1415:"3c3cd9d2",1433:"a6ede8f4",1443:"05209c02",1471:"b84aa06a",1592:"95585798",1625:"62d105a5",1673:"eea99489",1735:"96f15a1d",1797:"7956171c",1879:"a542dfb4",1924:"8774e5a1",1943:"ed70fd81",2006:"fb190793",2019:"042d1c9f",2090:"b231e17e",2092:"12fbb140",2125:"31db28a9",2128:"efc10c29",2132:"a0d6c9cb",2204:"3b84ac29",2212:"b4ac3f04",2233:"6cfee26e",2273:"68b06198",2307:"9d6d51e8",2361:"f833d9d1",2364:"e692dfab",2396:"99725b53",2477:"d5faa9b3",2501:"c16002be",2554:"39088f23",2580:"6b19a7d1",2678:"73adf1c0",2679:"2f178807",2701:"b0712d10",2706:"f2390df7",2770:"98765b94",2811:"d2e3df36",2824:"b8dbebaf",2860:"10ae2c06",2867:"98f2301c",2869:"c134f6c4",2927:"0a1190c4",2935:"01609707",2998:"db5cee12",3004:"eadb02c7",3064:"b2257fb4",3066:"b1beaf92",3085:"c8047b5a",3138:"97aafa8b",3153:"68475abe",3233:"80508e96",3237:"12951856",3249:"97fcf253",3308:"1c32d24d",3356:"935ef42a",3377:"c2456325",3401:"e0438ad5",3426:"c220d626",3436:"e9f6484e",3447:"987bf507",3527:"b7134e53",3600:"c0b05163",3621:"ae5f8983",3642:"afc8ab36",3683:"3624c2d3",3687:"10940c60",3699:"6276e09d",3803:"5645f649",3819:"519f178b",3837:"cad6d1cf",3859:"f45b2a92",3880:"cbfca5ed",3951:"97ecef92",3965:"84d52337",3975:"82aea01a",3994:"9ddbf699",4007:"6f293758",4034:"3ce73133",4151:"ca83028a",4213:"4de9d2a4",4261:"8f3220e9",4301:"075e7c59",4303:"090e4a7f",4336:"66304cd9",4406:"1134be94",4459:"159b860d",4480:"3534ae7f",4526:"6bd0020f",4592:"33399b26",4594:"b11df556",4613:"a4962b32",4630:"d2e0c87f",4787:"943ec3cd",4826:"2034b1fb",4860:"1a2690af",4876:"4e7d6b49",4893:"06408c83",4899:"d99e539f",4923:"42707f7c",4948:"cda43b30",4981:"addcce17",5013:"e2925874",5022:"d3a3c40d",5027:"1adfac5c",5073:"60fd0b30",5078:"90c6348b",5088:"6fc14f6b",5096:"1d31173e",5135:"dd3fa326",5149:"9b71e31d",5155:"9cbc95ed",5185:"d54e329b",5191:"29e3a15f",5194:"1aca7228",5319:"bd80539b",5331:"afa9a992",5336:"32f9c722",5339:"696e4420",5346:"0d81b2de",5369:"8f9e235f",5404:"47d1a6e5",5448:"39a7b65f",5544:"320fca10",5546:"a5d3e939",5560:"74974e72",5561:"6ea9553f",5585:"d2b3e029",5648:"9c9da664",5659:"0ec005cb",5685:"5de9fca2",5838:"0d45b3d8",5841:"eb3f1740",5849:"3b5ceaa8",5883:"5236d982",5906:"74799b5e",5967:"9f5cea45",6022:"e2e01385",6049:"eccc029f",6066:"f521d9e0",6090:"6503b87e",6136:"681237f9",6161:"cae95b58",6178:"a3238fe3",6185:"3fe01cd2",6191:"f36ca74c",6250:"0322a19d",6310:"7be9d4b8",6312:"75be5f60",6386:"4332d5f0",6389:"41771a91",6463:"e29e54b0",6465:"238159bb",6604:"fd04d6d6",6607:"19aa37c5",6621:"8d41223b",6624:"a2d334df",6673:"07c57165",6695:"14f7f986",6730:"9cffb256",6735:"91159b99",6762:"134d571c",6764:"0c655663",6770:"910563f0",6796:"0e96bb5d",6819:"aee3a6db",6826:"c2fab9ce",6838:"e58971f5",6881:"dcffd187",6890:"5fbe2299",6935:"a5453a94",6973:"10234687",6988:"04ecd4ba",7013:"c2c41993",7016:"185ca2cf",7021:"d390ac99",7078:"46ef164f",7089:"af399f6c",7097:"2c51fda7",7108:"953fa72b",7140:"b8cda1dc",7273:"2adaf9b7",7324:"0efef6ee",7401:"b99c0642",7439:"a1c9d6a2",7494:"2e24bd04",7521:"a6aa0d9a",7539:"6fdf0624",7543:"bd2a88e3",7638:"e9fb65cc",7694:"7efdeaff",7740:"8c0c2ac4",7750:"f248b006",7755:"76081258",7766:"56176e56",7787:"00f2ca58",7835:"56fde9b0",7861:"666f21ca",7863:"120eac30",7918:"b3226377",7924:"47e87e3b",7968:"8db211d3",8048:"0eaff84c",8110:"95142b12",8125:"b1863fb3",8159:"acb69469",8196:"49bf610e",8236:"1893d4d4",8351:"605f4545",8408:"ea89d468",8430:"be4a45a7",8471:"8bafe9bb",8486:"70b0b894",8522:"2f3efd4b",8538:"86865259",8553:"e5029c98",8554:"154e77bc",8598:"8160d921",8643:"02821da7",8715:"4dc45bbb",8832:"ed805c51",8873:"c2a3e79f",8979:"f7ccca91",9065:"ff9d6248",9157:"b5417452",9178:"71f1ae59",9281:"9d07964f",9309:"35bf7887",9350:"e60cc491",9438:"3cd7637c",9468:"312f268d",9514:"84606eca",9552:"b9cfb0d3",9563:"a959b2d0",9593:"0d2e6712",9598:"a64cec83",9707:"fba057cc",9726:"077d8c0b",9771:"17f17517",9876:"b5853215",9886:"4a96ee49",9960:"0c805b36",9961:"f315b7a5"}[f]+".js"},n.miniCssF=function(f){return"assets/css/styles.214b057e.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(f){if("object"==typeof window)return window}}(),n.o=function(f,e){return Object.prototype.hasOwnProperty.call(f,e)},b={},a="ofi-blog-versioned:",n.l=function(f,e,c,d){if(b[f])b[f].push(e);else{var t,r;if(void 0!==c)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==f||u.getAttribute("data-webpack")==a+c){t=u;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",a+c),t.src=f),b[f]=[e];var l=function(e,c){t.onerror=t.onload=null,clearTimeout(s);var a=b[f];if(delete b[f],t.parentNode&&t.parentNode.removeChild(t),a&&a.forEach((function(f){return f(c)})),e)return e(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(f){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},n.nmd=function(f){return f.paths=[],f.children||(f.children=[]),f},n.p="/",n.gca=function(f){return f={17896441:"7918",44937557:"546",62514178:"9065",66401345:"3356",78668860:"8351",99143605:"9593","935f2afb":"53","0a6303b0":"100",f7894820:"102","0539b754":"153","3df67093":"188",a67ce82e:"208","420749db":"224","53f070a0":"247",e8a1ebbc:"276","726f2915":"436","9818e81a":"477","35ee637d":"507","3ac2c726":"510",a158ffb3:"582","8fb01fd9":"709","276dde3c":"780","69c6eb84":"871","10518bd9":"910","939dab8c":"945","674d03c0":"1063",acc3b1c6:"1075","72271f55":"1104","1c89cb3c":"1123","019a41e7":"1206",d70cac07:"1236","6ebd1c5e":"1243","00f886fd":"1314",c3aafa04:"1340",efb3804a:"1354","827e5380":"1415",a11f96e8:"1443",f27f87ed:"1471",fa328034:"1592",b3ca6cbc:"1625",d46e6d7f:"1673",d3c3ca72:"1735","657ebaca":"1797","74c819a0":"1924","15c46457":"1943","671a48ba":"2006",b7851066:"2019",da60f438:"2090",da17ec70:"2092","3d9c95a4":"2125","4cc00591":"2128",c597aca0:"2132",e1d0c6bf:"2204","065a5363":"2212","2406bff0":"2233","76de2161":"2361","790132bf":"2364","2b7434ec":"2396",bd1f9c98:"2477","031c9037":"2501",f404c41a:"2554","9811db4c":"2580","488aa316":"2678",db10949c:"2701","02858b93":"2706","651d98b3":"2770",cf74becf:"2811",f2a1587c:"2824",cf4b9775:"2860","442cb3d2":"2867",e57b096a:"2869","3073bd02":"2927",a6220aed:"2935","5b7c56c9":"2998","975f1447":"3004","98a1fb2d":"3064","517be5e3":"3066","1f391b9e":"3085",b2ca6a13:"3138","6f27721d":"3153","894501fd":"3233","1df93b7f":"3237",efbfabfb:"3249","55fb9dd6":"3308",de4a7af5:"3377","6bb82255":"3401","63f3b05f":"3426",cf4c4977:"3436","437b71a6":"3447","3bc95bbf":"3527","878bb1ab":"3600","115129aa":"3621","3241050c":"3642",f115f3ee:"3683",a06eef2e:"3687","3eb4c6ab":"3699","704607d2":"3803","4ecb91b3":"3819","803c0436":"3837",cff1e141:"3859",ad37b15f:"3880","67344c7d":"3951","465ee19f":"3965","046b4402":"3975","0dba96d1":"3994","92cea6b1":"4151","058de714":"4213","4ba3937a":"4261","2fe12bf0":"4301",a70d454f:"4303","6d38fc27":"4336","901295b7":"4406","627eb5ac":"4459","06e95c4d":"4480","25e50802":"4526",ac67b356:"4592","2a304f7d":"4594","4d837c14":"4613","9b10fd77":"4630","986136cf":"4787","888a2a46":"4826","69624cb6":"4860","16ab6de1":"4876","8542818d":"4893",b1c846f7:"4899","15313f21":"4923","313fbeff":"4948","5fa1322c":"5013",de436372:"5022","25aefa21":"5027","988c424d":"5073","102bc122":"5078",e132bfd9:"5088","0a916777":"5096",a5e2f2c5:"5135","7ab878c0":"5149","4b3fbf15":"5155","2c08f81a":"5185",b25e1859:"5191","3697e284":"5194",ee038ded:"5319",cd4c4c6d:"5331",c401d2ff:"5336",ea49eee8:"5339","5f371f44":"5346","19112c8d":"5369","21c97ff8":"5404","2cc7ad0f":"5448","57f1e6a9":"5544","4792e528":"5546",d963ecaf:"5560",d005084e:"5561","4d7c4257":"5585","900f420a":"5648","5844b1bb":"5659","5efaadeb":"5685","30effe00":"5838",fdaa473f:"5841",d7f0ed24:"5849",fa83644a:"5883",f510df13:"5906","705460dc":"5967","03fa52c3":"6022","67bc8b9e":"6049","7a61ea70":"6066","2158cdf6":"6090","3c295b71":"6136","463d3c81":"6161","863cf927":"6178","525ded3b":"6185",d2ad4c85:"6191","3e7ec442":"6250",aa9861d4:"6310",bb43394e:"6312",ce3cc1dd:"6386","7f1344e3":"6389","45586f4a":"6463","76c06bb6":"6465","6795a592":"6607","0ab1f0a1":"6621","3cbf09c4":"6624",b9601a4a:"6673",de7f8e4f:"6695","1770729e":"6730","5ea635d2":"6735","933fd068":"6762",e1012dcf:"6764",e0ff63a1:"6770","7c63bf7f":"6796","8abeee4c":"6819","27f1ef12":"6826",ec2d7a7a:"6838",a5a48f56:"6881","04354d8c":"6890",f7714e5c:"6935","4798f9d4":"6973","0be4da16":"6988",d9c435ff:"7013","9e87201d":"7016",ea1e727b:"7021","51255b47":"7078","41c13a25":"7089","0bf8fef9":"7097","7e6bbbe8":"7108","5dd7be4b":"7140",c9ff7a08:"7273",fb220c9c:"7324",d41b7002:"7401","457fbd88":"7439",aadd5477:"7494","335c073b":"7521","91d1a7fc":"7543",f7c71432:"7638",f3e8a725:"7694",c61fa505:"7740",d7650eb3:"7750","3d8f5c70":"7755","302b53dc":"7766","1bf38796":"7835",cf1c6f03:"7861",b55b76b5:"7863",f8c9630f:"7924","04f34c03":"7968","0621c7f2":"8048","5793bd31":"8110","2b3a8c52":"8125","574456fc":"8159","8fd50288":"8196","68dc0479":"8236","98d11e1d":"8408",ae7c7bb9:"8430","4063109a":"8471","7a604033":"8522",ef300203:"8538",dcb8e663:"8553","91e3028b":"8554","0b48c52c":"8598","0f398f75":"8643","7a028b30":"8715","881f6ccd":"8832",eb30fe79:"8873",b88b3775:"8979","85093c72":"9157","9d1bf180":"9178",b5012721:"9281",cc86facb:"9309","6b077eec":"9350","5952020b":"9438","226cffe1":"9468","1be78505":"9514","3e915c84":"9563","53fb35fd":"9598","91f37be8":"9707","97598d67":"9726","25fd5747":"9771","6bfb7357":"9876","1e3a33cc":"9886",eaa944b8:"9960",f400de28:"9961"}[f]||f,n.p+n.u(f)},function(){var f={1303:0,532:0};n.f.j=function(e,c){var b=n.o(f,e)?f[e]:void 0;if(0!==b)if(b)c.push(b[2]);else if(/^(1303|532)$/.test(e))f[e]=0;else{var a=new Promise((function(c,a){b=f[e]=[c,a]}));c.push(b[2]=a);var d=n.p+n.u(e),t=new Error;n.l(d,(function(c){if(n.o(f,e)&&(0!==(b=f[e])&&(f[e]=void 0),b)){var a=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;t.message="Loading chunk "+e+" failed.\n("+a+": "+d+")",t.name="ChunkLoadError",t.type=a,t.request=d,b[1](t)}}),"chunk-"+e,e)}},n.O.j=function(e){return 0===f[e]};var e=function(e,c){var b,a,d=c[0],t=c[1],r=c[2],o=0;for(b in t)n.o(t,b)&&(n.m[b]=t[b]);if(r)var i=r(n);for(e&&e(c);o<d.length;o++)a=d[o],n.o(f,a)&&f[a]&&f[a][0](),f[d[o]]=0;return n.O(i)},c=self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[];c.forEach(e.bind(null,0)),c.push=e.bind(null,c.push.bind(c))}()}();