!function(){"use strict";var e,f,c,a,b,d={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}n.m=d,n.c=t,n.amdD=function(){throw new Error("define cannot be used indirect")},e=[],n.O=function(f,c,a,b){if(!c){var d=1/0;for(o=0;o<e.length;o++){c=e[o][0],a=e[o][1],b=e[o][2];for(var t=!0,r=0;r<c.length;r++)(!1&b||d>=b)&&Object.keys(n.O).every((function(e){return n.O[e](c[r])}))?c.splice(r--,1):(t=!1,b<d&&(d=b));t&&(e.splice(o--,1),f=a())}return f}b=b||0;for(var o=e.length;o>0&&e[o-1][2]>b;o--)e[o]=e[o-1];e[o]=[c,a,b]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},c=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var b=Object.create(null);n.r(b);var d={};f=f||[null,c({}),c([]),c(c)];for(var t=2&a&&e;"object"==typeof t&&!~f.indexOf(t);t=c(t))Object.getOwnPropertyNames(t).forEach((function(f){d[f]=function(){return e[f]}}));return d.default=function(){return e},n.d(b,d),b},n.d=function(e,f){for(var c in f)n.o(f,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:f[c]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,c){return n.f[c](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",62:"ad884340",153:"0539b754",208:"a67ce82e",247:"53f070a0",276:"e8a1ebbc",436:"726f2915",546:"44937557",871:"69c6eb84",910:"10518bd9",945:"939dab8c",1075:"acc3b1c6",1243:"6ebd1c5e",1314:"00f886fd",1340:"c3aafa04",1354:"efb3804a",1418:"43dc70e0",1518:"7aeddb7a",1578:"495f7dd5",1592:"fa328034",1625:"b3ca6cbc",1735:"d3c3ca72",2019:"b7851066",2025:"d039c667",2090:"da60f438",2125:"3d9c95a4",2128:"4cc00591",2132:"c597aca0",2162:"82153202",2204:"e1d0c6bf",2212:"065a5363",2233:"2406bff0",2396:"2b7434ec",2477:"bd1f9c98",2501:"031c9037",2580:"9811db4c",2629:"0ab6bab4",2678:"488aa316",2701:"db10949c",2706:"02858b93",2809:"7f405f79",2811:"cf74becf",2824:"f2a1587c",2860:"cf4b9775",2867:"442cb3d2",2869:"e57b096a",2935:"a6220aed",2998:"5b7c56c9",3004:"975f1447",3066:"517be5e3",3153:"6f27721d",3237:"1df93b7f",3249:"efbfabfb",3308:"55fb9dd6",3392:"5d32ed08",3401:"6bb82255",3426:"63f3b05f",3436:"cf4c4977",3583:"fb00f84e",3621:"115129aa",3642:"3241050c",3683:"f115f3ee",3687:"a06eef2e",3699:"3eb4c6ab",3726:"a9421c99",3802:"1b1ea2fb",3819:"4ecb91b3",3837:"803c0436",3929:"1d0924cf",3951:"67344c7d",3965:"465ee19f",3994:"0dba96d1",4151:"92cea6b1",4213:"058de714",4262:"140f3d23",4301:"2fe12bf0",4303:"a70d454f",4336:"6d38fc27",4406:"901295b7",4459:"627eb5ac",4592:"ac67b356",4594:"2a304f7d",4613:"4d837c14",4787:"986136cf",4860:"69624cb6",4923:"15313f21",4948:"313fbeff",5013:"5fa1322c",5044:"e041b2f5",5078:"102bc122",5096:"0a916777",5135:"a5e2f2c5",5149:"7ab878c0",5155:"4b3fbf15",5194:"3697e284",5275:"f5a5f741",5319:"ee038ded",5331:"cd4c4c6d",5336:"c401d2ff",5369:"19112c8d",5404:"21c97ff8",5463:"a36ae16e",5544:"57f1e6a9",5546:"4792e528",5578:"348a93f0",5659:"5844b1bb",5838:"30effe00",5841:"fdaa473f",5849:"d7f0ed24",5883:"fa83644a",5906:"f510df13",5967:"705460dc",6022:"03fa52c3",6049:"67bc8b9e",6090:"2158cdf6",6136:"3c295b71",6161:"463d3c81",6178:"863cf927",6191:"d2ad4c85",6250:"3e7ec442",6312:"bb43394e",6339:"cea79486",6389:"7f1344e3",6465:"76c06bb6",6621:"0ab1f0a1",6624:"3cbf09c4",6695:"de7f8e4f",6730:"1770729e",6735:"5ea635d2",6762:"933fd068",6764:"e1012dcf",6770:"e0ff63a1",6796:"7c63bf7f",6819:"8abeee4c",6826:"27f1ef12",6838:"ec2d7a7a",6881:"a5a48f56",6890:"04354d8c",6935:"f7714e5c",6973:"4798f9d4",6988:"0be4da16",7013:"d9c435ff",7016:"9e87201d",7021:"ea1e727b",7078:"51255b47",7081:"a5cdfeff",7097:"0bf8fef9",7140:"5dd7be4b",7439:"457fbd88",7521:"335c073b",7543:"91d1a7fc",7557:"84897db1",7638:"f7c71432",7694:"f3e8a725",7740:"c61fa505",7755:"3d8f5c70",7766:"302b53dc",7787:"ef94e8c8",7835:"1bf38796",7861:"cf1c6f03",7863:"b55b76b5",7876:"a4fecb5a",7918:"17896441",7924:"f8c9630f",7951:"7840e346",7968:"04f34c03",8048:"0621c7f2",8125:"2b3a8c52",8159:"574456fc",8196:"8fd50288",8233:"672c4a25",8238:"a3e46734",8267:"0ca08cf4",8471:"4063109a",8522:"7a604033",8553:"dcb8e663",8554:"91e3028b",8598:"0b48c52c",8643:"0f398f75",8715:"7a028b30",8830:"19eb31e1",8832:"881f6ccd",8873:"eb30fe79",9178:"9d1bf180",9309:"cc86facb",9350:"6b077eec",9438:"5952020b",9514:"1be78505",9598:"53fb35fd",9680:"a1bc6444",9707:"91f37be8",9791:"3ff8dc71",9812:"3a5d3574",9876:"6bfb7357",9886:"1e3a33cc",9961:"f400de28"}[e]||e)+"."+{53:"0973e56f",62:"a0220dec",68:"522cfccc",153:"65089e97",208:"dd284191",247:"b152cbd1",276:"38e8db5c",436:"1f1cbff2",546:"2081a0e2",871:"076699db",910:"8e4f8ffd",945:"a86061ac",1075:"aef59d75",1243:"df5f8df1",1314:"e8bcd7b0",1340:"4821f507",1354:"ebdd37b4",1418:"d8e731fd",1518:"c52a1c77",1578:"d65cc1b7",1592:"da172ecd",1625:"4a61bd4a",1735:"e12eb75c",1879:"a542dfb4",2019:"45dc1bc0",2025:"19495e6b",2090:"6f2fda11",2125:"c372e615",2128:"1f9bcd09",2132:"965ee496",2162:"d4bc3b6b",2204:"d2a2a717",2212:"9c044809",2233:"b6357021",2273:"68b06198",2307:"9d6d51e8",2396:"74c57ee9",2477:"ee666209",2501:"03e375a1",2580:"35ffddfd",2629:"1d25f021",2678:"0bef4b0b",2679:"2f178807",2701:"8ae73057",2706:"5145eb9c",2809:"f7af50ea",2811:"38b89a73",2824:"7ddf8532",2860:"10b9d2e2",2867:"331995e9",2869:"1678f883",2935:"de94206f",2998:"0a65cc9f",3004:"87c8b530",3066:"a916ef29",3153:"885b73a4",3237:"ac39eb2b",3249:"65f1be38",3308:"c462e4c7",3392:"101c4da1",3401:"2757fee9",3426:"5202bf54",3436:"192732e7",3583:"21340aec",3621:"a1bec697",3642:"6712c34c",3683:"53b89b26",3687:"8218b44a",3699:"dcedaa56",3726:"f1345cb7",3802:"04859be8",3819:"b7453cde",3837:"548a9c40",3929:"7bdb0e5c",3951:"d976dc62",3965:"6b9e7886",3994:"88d51661",4007:"6f293758",4034:"3ce73133",4151:"d7cbd53b",4213:"9af1a78d",4262:"9b9410bb",4301:"bd24fad4",4303:"fb95f0d9",4336:"63e51ef4",4406:"c39a0a4a",4459:"2ba1cb76",4592:"41f7da2a",4594:"c69ab842",4613:"f942c148",4787:"9ec1501f",4860:"9fdfad64",4923:"25c5096d",4948:"0bca1755",4981:"addcce17",5013:"e42bc2bf",5044:"66870cbe",5078:"558ec79d",5096:"33399fe6",5135:"6cf04a5a",5149:"22c031e9",5155:"e403b98d",5194:"ea5e3eff",5275:"b8180062",5319:"e58f6ef0",5331:"1d086b8b",5336:"c6be3d3b",5369:"322b7a38",5404:"e3ce813b",5463:"734e2c70",5544:"606a2dd5",5546:"cd0fdbd9",5578:"36057356",5659:"72629cc2",5838:"ade10d0d",5841:"9a6cd82c",5849:"21a8bba5",5883:"471837f9",5906:"9954f1c2",5967:"6099f4c6",6022:"0454e346",6049:"299f147c",6090:"d6a1e923",6136:"fdf68f3e",6161:"f2adabc3",6178:"fff83b69",6191:"2db486c2",6250:"ea847481",6312:"c2e50521",6339:"8aadb8e6",6389:"42933a85",6465:"abf6694b",6604:"fd04d6d6",6621:"beb16b74",6624:"a2206897",6695:"0157373f",6730:"dccfa793",6735:"47d514d6",6762:"d60fa4e4",6764:"3fa79a2e",6770:"6af7f73e",6796:"652857e0",6819:"a7a8a967",6826:"cd537cbf",6838:"89737614",6881:"cb2b53a6",6890:"ad39dfbc",6935:"219c87d1",6973:"19ef4590",6988:"b5b09d7c",7013:"da905646",7016:"3b455711",7021:"2ebfb98c",7078:"30fb8cf6",7081:"ccf7c0f0",7097:"54049a03",7140:"93f80800",7439:"155d22ea",7495:"a512750a",7521:"e8899ca8",7539:"6fdf0624",7543:"baa1b0c5",7557:"b7d52af5",7638:"1f28f2a3",7694:"f35d4904",7740:"5a8bec1e",7755:"2ca151ed",7766:"ad4fec1a",7787:"ee292f1f",7835:"d74dcd28",7861:"a2b8a415",7863:"34b8121d",7876:"257d1193",7918:"71edb888",7924:"75ec86cb",7951:"e41047b0",7968:"02d43949",8048:"5783fa26",8125:"034b3d8a",8159:"92f7b218",8196:"aa910939",8233:"7507d6a5",8238:"001608d4",8267:"b7927bc7",8471:"57450089",8486:"70b0b894",8522:"2c98d154",8553:"59ed91a1",8554:"ea265bb0",8598:"f3118b36",8643:"23cab9d1",8715:"233f212e",8830:"14808a06",8832:"a7b7585b",8873:"385dbfbe",9178:"f515fedf",9309:"0d86eae4",9350:"1e8da254",9438:"295b61f3",9514:"294f1e0e",9552:"b9cfb0d3",9598:"6649d364",9680:"fcd9d011",9707:"413cec9c",9791:"be8b5ca6",9812:"aec5faa3",9876:"f85f87db",9886:"75947b34",9961:"5182715c"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.cde00130.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},a={},b="ofi-blog-versioned:",n.l=function(e,f,c,d){if(a[e])a[e].push(f);else{var t,r;if(void 0!==c)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+c){t=u;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",b+c),t.src=e),a[e]=[f];var l=function(f,c){t.onerror=t.onload=null,clearTimeout(s);var b=a[e];if(delete a[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((function(e){return e(c)})),f)return f(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="/ofi-blog/",n.gca=function(e){return e={17896441:"7918",44937557:"546",82153202:"2162","935f2afb":"53",ad884340:"62","0539b754":"153",a67ce82e:"208","53f070a0":"247",e8a1ebbc:"276","726f2915":"436","69c6eb84":"871","10518bd9":"910","939dab8c":"945",acc3b1c6:"1075","6ebd1c5e":"1243","00f886fd":"1314",c3aafa04:"1340",efb3804a:"1354","43dc70e0":"1418","7aeddb7a":"1518","495f7dd5":"1578",fa328034:"1592",b3ca6cbc:"1625",d3c3ca72:"1735",b7851066:"2019",d039c667:"2025",da60f438:"2090","3d9c95a4":"2125","4cc00591":"2128",c597aca0:"2132",e1d0c6bf:"2204","065a5363":"2212","2406bff0":"2233","2b7434ec":"2396",bd1f9c98:"2477","031c9037":"2501","9811db4c":"2580","0ab6bab4":"2629","488aa316":"2678",db10949c:"2701","02858b93":"2706","7f405f79":"2809",cf74becf:"2811",f2a1587c:"2824",cf4b9775:"2860","442cb3d2":"2867",e57b096a:"2869",a6220aed:"2935","5b7c56c9":"2998","975f1447":"3004","517be5e3":"3066","6f27721d":"3153","1df93b7f":"3237",efbfabfb:"3249","55fb9dd6":"3308","5d32ed08":"3392","6bb82255":"3401","63f3b05f":"3426",cf4c4977:"3436",fb00f84e:"3583","115129aa":"3621","3241050c":"3642",f115f3ee:"3683",a06eef2e:"3687","3eb4c6ab":"3699",a9421c99:"3726","1b1ea2fb":"3802","4ecb91b3":"3819","803c0436":"3837","1d0924cf":"3929","67344c7d":"3951","465ee19f":"3965","0dba96d1":"3994","92cea6b1":"4151","058de714":"4213","140f3d23":"4262","2fe12bf0":"4301",a70d454f:"4303","6d38fc27":"4336","901295b7":"4406","627eb5ac":"4459",ac67b356:"4592","2a304f7d":"4594","4d837c14":"4613","986136cf":"4787","69624cb6":"4860","15313f21":"4923","313fbeff":"4948","5fa1322c":"5013",e041b2f5:"5044","102bc122":"5078","0a916777":"5096",a5e2f2c5:"5135","7ab878c0":"5149","4b3fbf15":"5155","3697e284":"5194",f5a5f741:"5275",ee038ded:"5319",cd4c4c6d:"5331",c401d2ff:"5336","19112c8d":"5369","21c97ff8":"5404",a36ae16e:"5463","57f1e6a9":"5544","4792e528":"5546","348a93f0":"5578","5844b1bb":"5659","30effe00":"5838",fdaa473f:"5841",d7f0ed24:"5849",fa83644a:"5883",f510df13:"5906","705460dc":"5967","03fa52c3":"6022","67bc8b9e":"6049","2158cdf6":"6090","3c295b71":"6136","463d3c81":"6161","863cf927":"6178",d2ad4c85:"6191","3e7ec442":"6250",bb43394e:"6312",cea79486:"6339","7f1344e3":"6389","76c06bb6":"6465","0ab1f0a1":"6621","3cbf09c4":"6624",de7f8e4f:"6695","1770729e":"6730","5ea635d2":"6735","933fd068":"6762",e1012dcf:"6764",e0ff63a1:"6770","7c63bf7f":"6796","8abeee4c":"6819","27f1ef12":"6826",ec2d7a7a:"6838",a5a48f56:"6881","04354d8c":"6890",f7714e5c:"6935","4798f9d4":"6973","0be4da16":"6988",d9c435ff:"7013","9e87201d":"7016",ea1e727b:"7021","51255b47":"7078",a5cdfeff:"7081","0bf8fef9":"7097","5dd7be4b":"7140","457fbd88":"7439","335c073b":"7521","91d1a7fc":"7543","84897db1":"7557",f7c71432:"7638",f3e8a725:"7694",c61fa505:"7740","3d8f5c70":"7755","302b53dc":"7766",ef94e8c8:"7787","1bf38796":"7835",cf1c6f03:"7861",b55b76b5:"7863",a4fecb5a:"7876",f8c9630f:"7924","7840e346":"7951","04f34c03":"7968","0621c7f2":"8048","2b3a8c52":"8125","574456fc":"8159","8fd50288":"8196","672c4a25":"8233",a3e46734:"8238","0ca08cf4":"8267","4063109a":"8471","7a604033":"8522",dcb8e663:"8553","91e3028b":"8554","0b48c52c":"8598","0f398f75":"8643","7a028b30":"8715","19eb31e1":"8830","881f6ccd":"8832",eb30fe79:"8873","9d1bf180":"9178",cc86facb:"9309","6b077eec":"9350","5952020b":"9438","1be78505":"9514","53fb35fd":"9598",a1bc6444:"9680","91f37be8":"9707","3ff8dc71":"9791","3a5d3574":"9812","6bfb7357":"9876","1e3a33cc":"9886",f400de28:"9961"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,c){var a=n.o(e,f)?e[f]:void 0;if(0!==a)if(a)c.push(a[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var b=new Promise((function(c,b){a=e[f]=[c,b]}));c.push(a[2]=b);var d=n.p+n.u(f),t=new Error;n.l(d,(function(c){if(n.o(e,f)&&(0!==(a=e[f])&&(e[f]=void 0),a)){var b=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;t.message="Loading chunk "+f+" failed.\n("+b+": "+d+")",t.name="ChunkLoadError",t.type=b,t.request=d,a[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,c){var a,b,d=c[0],t=c[1],r=c[2],o=0;for(a in t)n.o(t,a)&&(n.m[a]=t[a]);if(r)var i=r(n);for(f&&f(c);o<d.length;o++)b=d[o],n.o(e,b)&&e[b]&&e[b][0](),e[d[o]]=0;return n.O(i)},c=self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[];c.forEach(f.bind(null,0)),c.push=f.bind(null,c.push.bind(c))}()}();