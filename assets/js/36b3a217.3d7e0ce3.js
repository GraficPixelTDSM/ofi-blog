(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8262],{16668:function(e,a,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.d(a,{Z:function(){return l}});var r=t(14665);function i(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&(0,r.Z)(e,a)}function l(){l=function(e,a){return new t(e,void 0,a)};var e=RegExp.prototype,a=new WeakMap;function t(e,n,i){var l=new RegExp(e,n);return a.set(l,i||a.get(e)),(0,r.Z)(l,t.prototype)}function o(e,t){var n=a.get(t);return Object.keys(n).reduce((function(a,t){return a[t]=e[n[t]],a}),Object.create(null))}return i(t,RegExp),t.prototype.exec=function(a){var t=e.exec.call(this,a);return t&&(t.groups=o(t,this)),t},t.prototype[Symbol.replace]=function(t,r){if("string"==typeof r){var i=a.get(this);return e[Symbol.replace].call(this,t,r.replace(/\$<([^>]+)>/g,(function(e,a){return"$"+i[a]})))}if("function"==typeof r){var l=this;return e[Symbol.replace].call(this,t,(function(){var e=arguments;return"object"!==n(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,l)),r.apply(this,e)}))}return e[Symbol.replace].call(this,t,r)},l.apply(this,arguments)}},42634:function(e,a,t){"use strict";t.d(a,{Z:function(){return h}});var n=t(16668),r=t(67294),i={answer:"answer_DHtd",blue:"blue_3iLc",red:"red_1sdT",green:"green_i3qg",black:"black_19Rg",checkButton:"checkButton_Bbqn",correct:"correct_2l2N",wrong:"wrong_23TW",unchecked:"unchecked_3Ykw"},l=864e5,o=31536e6,c=function(e,a,t){var n;if(void 0===a&&(a=void 0),void 0===t&&(t=void 0),(n=Date.now())-JSON.parse(localStorage.getItem("last_cleanup")||""+n)>l&&s(),a){var r=localStorage.getItem(a);if(r){var i=JSON.parse(r);if("object"==typeof i){var o=i[e];return void 0===o?t:o}return t}}var c=localStorage.getItem(e);return c?JSON.parse(c):t},s=function(){var e=Date.now();Object.keys(localStorage).forEach((function(a){var t=c(a,{});t.expiry&&t.expiry>e&&localStorage.removeItem(a)})),localStorage.setItem("last_cleanup",""+e)},m=t(17625),d=t(51436),p=t(86010),u=(0,n.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),g=function(e){if(u.test(e))return e.match(u).groups.klass},f=function(e){return i[g(e)]};function b(){try{return function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")}(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}var v=function(e){var a=e.value,t=e.showDataAttr,n=a,l=void 0;if(u.test(a)){var o=g(a);l=i[o],n=a.replace(u,"")+(t?" "+o:"")}return r.createElement("option",{value:a,className:l},n)},h=function(e){var a=r.useState(!1),t=a[0],n=a[1],l=r.useState("array"===e.type?[]:""),s=l[0],u=l[1],g=r.useState(""),h=g[0],z=g[1],k=r.useState("unchecked"),N=k[0],w=k[1];r.useEffect((function(){t&&function(e,a,t,n){void 0===t&&(t=void 0),void 0===n&&(n=2592e6);var r=Date.now();if(t){var i=c(t,void 0,{});"object"!=typeof i&&(i={});var l=i[e]||{},o=Object.assign({},l,a);return i.expiry=r+n,i[e]=o,void localStorage.setItem(t,JSON.stringify(i))}var s=c(e,t,{}),m=Object.assign({},s,a,{expiry:r+n});localStorage.setItem(e,JSON.stringify(m))}(e.id,{value:s,type:e.type},h,o)}),[s]),r.useEffect((function(){var a=b();z(b());var t=c(e.id,a,{}).value,r=!!t;void 0===t&&(t=function(e){return"string"===e.type?"":Array(e.size).fill("")}(e)),"array"===e.type&&Array.isArray(t)&&(t.length>e.size?t=t.slice(0,e.size):t.length<e.size&&(t=[].concat(t,[].concat(Array(e.size-t.length).map((function(){return""})))))),u(t),n(!0),e.solution&&r&&x(t)}),[]);var y,Z=function(a,t){if(void 0===t&&(t=0),w("unchecked"),"string"===e.type)u(a);else{var n=[].concat(s.slice(0,t),[a],s.slice(t+1));u(n)}},x=function(a){w(a===e.solution?"correct":"wrong")};return"string"===e.type?r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return Z(e.target.value)},value:s,className:f(s),disabled:!t},e.select.map((function(a,t){return r.createElement(v,{value:a,key:t,showDataAttr:!e.hideDataAttr})}))):r.createElement("input",{disabled:!t,type:"text",onChange:function(e){return Z(e.target.value)},value:s}),e.solution&&r.createElement("button",{onClick:function(){return x(s)},className:(0,p.default)(i[N],i.checkButton)},r.createElement(m.G,{icon:(y=N,"correct"===y?d.f8k:"wrong"===y?d.nYk:d.sph)}))):r.createElement("div",{className:i.answer,"data-loaded":t},e.label&&r.createElement("label",null,e.label),s.map((function(a,n){return e.select?r.createElement("select",{key:n,onChange:function(e){return Z(e.target.value,n)},value:a,className:f(a),disabled:!t},e.select.map((function(a,t){return r.createElement(v,{value:a,key:t,showDataAttr:!e.hideDataAttr})}))):r.createElement("input",{key:n,type:"text",onChange:function(e){return Z(e.target.value,n)},value:a,disabled:!t})})))}},1700:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=t(22122),r=t(19756),i=(t(67294),t(3905)),l=t(42634),o=["components"],c={title:"RoboZZle"},s="RoboZZle",m={unversionedId:"Programmieren-1/Algorithmen/Uebungen/robozzle",id:"version-25h/Programmieren-1/Algorithmen/Uebungen/robozzle",isDocsHomePage:!1,title:"RoboZZle",description:"Puzzle 1",source:"@site/versioned_docs/version-25h/03-Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",sourceDirName:"03-Programmieren-1/01-Algorithmen/100-Uebungen",slug:"/Programmieren-1/Algorithmen/Uebungen/robozzle",permalink:"/25h/Programmieren-1/Algorithmen/Uebungen/robozzle",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/03-Programmieren-1/01-Algorithmen/100-Uebungen/01-robozzle.mdx",version:"25h",sidebarPosition:1,frontMatter:{title:"RoboZZle"},sidebar:"version-25h/sidebar",previous:{title:"Flussdiagramm",permalink:"/25h/Programmieren-1/Algorithmen/Flussdiagramm"}},d=[],p={toc:d};function u(e){var a=e.components,c=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,c,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"robozzle"},"RoboZZle"),(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube-nocookie.com/embed/MmqBVWi_Pc0?start=21",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 1")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12419"},"Puzzle 1")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(16509).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a1",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 2")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2741"},"Puzzle 2")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(59051).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a2",label:"L\xf6sung F1",size:3,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10858"},"Puzzle 3")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(79825).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a3",label:"L\xf6sung F1",size:7,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 4")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=12511"},"Puzzle 4")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(31799).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a4",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 5")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10895"},"Puzzle 5")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(45996).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a5",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 6.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=10048"},"Puzzle 6")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(20353).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a6a",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a6b",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 7.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=2748"},"Puzzle 7")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(9034).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a7",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 8.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=140"},"Puzzle 8")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(46429).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a8",label:"L\xf6sung F1",size:6,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 9.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=1040"},"Puzzle 9")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(55512).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a9",label:"L\xf6sung F1",size:4,select:["","\u2191","\u21b0","\u21b1","F1","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green"],mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 10.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"http://www.robozzle.com/beta/index.html?puzzle=87"},"Puzzle 10")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{src:t(95428).Z})),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a10a",label:"L\xf6sung F1",size:5,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}),(0,i.kt)(l.Z,{type:"array",id:"robozzle_a10b",label:"L\xf6sung F2",size:3,select:["","\u2191","\u21b0","\u21b1","F1","F2","\u2191--blue","\u21b0--blue","\u21b1--blue","F1--blue","F2--blue","\u2191--red","\u21b0--red","\u21b1--red","F1--red","F2--red","\u2191--green","\u21b0--green","\u21b1--green","F1--green","F2--green"],mdxType:"Answer"}))))}u.isMDXComponent=!0},16509:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a1-9f88e1913a1251d499bdfb0a2c7fb2b7.png"},95428:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a10-c715bd3fb509c1d38ff2f9fd71177302.png"},59051:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a2-b543492edbe8b6375cf700f5988d3ee5.png"},79825:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a3-161aca72f309f94bd52b0b113745717b.png"},31799:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a4-4409a04081e5d33f9e8a364227172666.png"},45996:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a5-152d08fb7bcd5be8b0342534e1465859.png"},20353:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a6-874c825cfa7a6ce99aec0506367ab2c3.png"},9034:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a7-04e86296810da925b2665cd89167c460.png"},46429:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a8-02d9e336651d2befe3b2f5178908c732.png"},55512:function(e,a,t){"use strict";a.Z=t.p+"assets/images/RoboZZle_a9-12892684d0b832904433762ae750c699.png"}}]);