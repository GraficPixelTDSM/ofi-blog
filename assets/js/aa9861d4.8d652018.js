(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6310],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),h=i,f=m["".concat(c,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(67294),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),s="tabItem_1uMI",c="tabItemActive_2DSg";var o=function(e){var t,n=e.lazy,i=e.block,o=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=a.Children.toArray(e.children),f=null!=u?u:h.map((function(e){return{value:e.props.value,label:e.props.label}})),p=null!=o?o:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),k=v.tabGroupChoices,b=v.setTabGroupChoices,g=(0,a.useState)(p),w=g[0],N=g[1],S=[];if(null!=d){var y=k[d];null!=y&&y!==w&&f.some((function(e){return e.value===y}))&&N(y)}var z=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;N(a),null!=d&&(b(d,a),setTimeout((function(){var e,n,a,i,r,l,s,o;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,s=l.innerHeight,o=l.innerWidth,n>=0&&r<=o&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.target)+1;n=S[a]||S[0];break;case"ArrowLeft":var i=S.indexOf(e.target)-1;n=S[i]||S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":i},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,l.default)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:z,onClick:z},null!=n?n:t)}))),n?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},30742:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l=n(55064),s=n(58215),c=["components"],o={sidebar_label:"Schichtenmodell",sidebar_position:1},u="Schichtenmodell [^1]",d={unversionedId:"Netzwerke/Schichtenmodell/0a-Schichtenmodell",id:"version-24K/Netzwerke/Schichtenmodell/0a-Schichtenmodell",isDocsHomePage:!1,title:"Schichtenmodell [^1]",description:"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden.",source:"@site/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/0a-Schichtenmodell.mdx",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/0a-Schichtenmodell",permalink:"/24K/Netzwerke/Schichtenmodell/0a-Schichtenmodell",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/05-Netzwerke/001-Schichtenmodell/0a-Schichtenmodell.mdx",tags:[],version:"24K",sidebarPosition:1,frontMatter:{sidebar_label:"Schichtenmodell",sidebar_position:1},sidebar:"version-24K/sidebar",previous:{title:"While Schleife",permalink:"/24K/Programmieren-1/Turtles/while-loop"},next:{title:"TCP/IP-Schichtenmodell",permalink:"/24K/Netzwerke/Schichtenmodell/0b-TCP-IP-Schichtenmodell"}},m=[{value:"Vorteile des Schichtenmodells",id:"vorteile-des-schichtenmodells",children:[{value:"Aufbau auf bestehendem",id:"aufbau-auf-bestehendem",children:[]},{value:"Austauschbare Schichten",id:"austauschbare-schichten",children:[]}]},{value:"Andere Schichtenmondelle",id:"andere-schichtenmondelle",children:[{value:"Informatik",id:"informatik",children:[]},{value:"Andere Wissenschaften",id:"andere-wissenschaften",children:[]},{value:"Weitere...",id:"weitere",children:[]}]}],h={toc:m};function f(e){var t=e.components,o=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schichtenmodell"},"Schichtenmodell ",(0,r.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("p",null,"Viele komplexe Vorg\xe4nge und Konstruktionen k\xf6nnen mit Hilfe eines sogenannten Schichtenmodells in einfachere Einzelteile aufgespalten werden."),(0,r.kt)("p",null,"Wir wollen die Vorteile des Schichtenmodell an Hand eines Beispiels versuchen zu verstehen:"),(0,r.kt)("h1",{id:"beispiel-schule"},'Beispiel "Schule"'),(0,r.kt)("p",null,"Die Schule Madretsch feiert 100-j\xe4hriges Jubil\xe4um und braucht f\xfcr ihr Fest zus\xe4tzliche Schulpulte. Wir m\xf6chten helfen und einige Pulte schicken."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pulte zum Verschicken",src:n(74645).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wie funktioniert dies?"),(0,r.kt)("li",{parentName:"ul"},"Wer ist alles involviert?")),(0,r.kt)("blockquote",null,(0,r.kt)(l.Z,{defaultValue:"step-1",values:[{label:"Details 1",value:"step-1"},{label:"Details 2",value:"step-2"},{label:"Details 3",value:"step-3"},{label:"Details 4",value:"step-4"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"step-1",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51243).Z,title:"Author: Stefan Rothe @ Creative Commons 4.0, Bearbeitet"})),(0,r.kt)("p",null,"Den Sch\xfcler:innen ist egal, wie die Pulte in die Schule kommen. Sie freuen sich einfach \xfcber die zus\xe4tzlichen Schulpulte.")),(0,r.kt)(s.Z,{value:"step-2",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(44748).Z,title:"Author: Stefan Rothe @ Creative Commons 4.0, Bearbeitet"})),(0,r.kt)("p",null,"Da die Pulte zu sperrig sind, werden diese vom GBSL-Hausdienst zerlegt und in einzelne Pakete verpackt.\nWenn die Pakete ankommen, kann der Madretsch-Hausdienst die Pakete auspacken und die Pulte wieder zusammensetzen.  ")),(0,r.kt)(s.Z,{value:"step-3",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(60359).Z,title:"Author: Stefan Rothe @ Creative Commons 4.0, Bearbeitet"})),(0,r.kt)("p",null,"Der Hausdienst tr\xe4gt diese Pakete aber nicht selber zur Schule Madretsch.\nNein, die Pakete werden an die Post \xfcbergeben.\nDiese ist f\xfcr den Transport zust\xe4ndig.\nDie Pakete machen auch einen Zwischenstopp im Verteilzentrum H\xe4rkingen.")),(0,r.kt)(s.Z,{value:"step-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88385).Z,title:"Author: Stefan Rothe @ Creative Commons 4.0, Bearbeitet"})),(0,r.kt)("p",null,"Die Post verwendet nun f\xfcr den eigentlichen Transport verschiedene Fahrzeuge.\nIm Verteilzentrum wird der Inhalt entladen und gem\xe4ss Adresse weitergeleitet.")))),(0,r.kt)("h2",{id:"vorteile-des-schichtenmodells"},"Vorteile des Schichtenmodells"),(0,r.kt)("h3",{id:"aufbau-auf-bestehendem"},"Aufbau auf bestehendem"),(0,r.kt)("p",null,"Ohne Probleme liesse sich das obenstehende Beispiel verwenden, um andere Inhalte zu transportieren. So k\xf6nnten statt Pulten auch St\xfchle \u2013 oder z.B. auch Esswaren transportiert werden."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"So funktioniert auch unser Postsystem: Bis auf wenige Ausnahmen transportiert die Post alles."),(0,r.kt)("li",{parentName:"ul"},"Die \xdcbertragung von E-Mails und die einer Webseite unterscheidet sich nur in der obersten Schicht. Beide bauen auf den 3 identischen unteren Schichten auf")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufbau auf bestehendem")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Was k\xf6nnte noch \xdcbertragen werden, wobei die unteren Schichten verwendet werden?"))),(0,r.kt)("h3",{id:"austauschbare-schichten"},"Austauschbare Schichten"),(0,r.kt)("p",null,"Die Schichten k\xf6nnen ausgetauscht werden, solange sie ihre Aufgabe erf\xfcllen und die Schnittstelle zwischen der dar\xfcber- und der darunterliegenden Schicht erf\xfcllt wird."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Post kann auch mit dem Flugzeug oder dem Zug transportiert werden. (Daten k\xf6nnen Kabelgebunden oder per Funk \xfcbertragen werden)"),(0,r.kt)("li",{parentName:"ul"},"Statt der Post kann man einen privaten Transportservice engagieren. (Swisscom- oder UPC-Anschluss f\xfcrs Internet zu Hause)"),(0,r.kt)("li",{parentName:"ul"},"Statt des Hauswartes k\xf6nnen Sch\xfcler*innen die Pulte auseinanderschrauben und wieder zusammensetzen.")),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichten austauschen")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sehen Sie andere Optionen zum Austauschen einer Schicht?"))),(0,r.kt)("h2",{id:"andere-schichtenmondelle"},"Andere Schichtenmondelle"),(0,r.kt)("h3",{id:"informatik"},"Informatik"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"@",src:n(29465).Z,title:"Author: Golftheman @ Creative Commons 3.0"})),(0,r.kt)("h3",{id:"andere-wissenschaften"},"Andere Wissenschaften"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Naturwissenschaften als Schichtenmodell @",src:n(58361).Z,title:"Author: Golftheman @ Creative Commons 4.0"})),(0,r.kt)("p",null,"Verschiedene Naturwissenschaften bauen aufeinander auf und bilden so eine Art Schichtenmodell, um die ungeheure Komplexit\xe4t der Natur in den Griff zu bekommen. Somit kann man sich z.B. auf sehr verschiedenen Abstraktionsebenen mit dem Organismus \xabSchwan\xbb auseinandersetzen (K\xf6rperbau? Verhalten? DNA?) und kann die jeweils anderen Ebenen gr\xf6sstenteils ausblenden."),(0,r.kt)("h3",{id:"weitere"},"Weitere..."),(0,r.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,r.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Schichtenmodelle finden")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Finden Sie weitere Schichtenmodelle?"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/01.schichtenmodell.html#beispiel-%C2%ABpaketversand%C2%BB"},"mygymer.ch"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.r(t),n.d(t,{default:function(){return i}})},58361:function(e,t,n){"use strict";t.Z=n.p+"assets/images/0a-Schichtenmodell-Wissenschaft-ed96a0fa69c4c3caaf6cac7dc8737a00.png"},29465:function(e,t,n){"use strict";t.Z=n.p+"assets/images/0a-os-structure-f2e1ec5100d5e2f8578db65034aac9fc.svg"},74645:function(e,t,n){"use strict";t.Z=n.p+"assets/images/0a-pulte-af22b48fa4ecbe2a1b45dd0771e2467f.png"},88385:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-school-example-29693bc380317d5bdccd3323c36a3dee.svg"},60359:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2-school-example-a07bd0300d2a933f2eaa84f8533cfd15.svg"},44748:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-school-example-a37f93854ca9799e39d5038a2d4866d3.svg"},51243:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4-school-example-fbef75aead28316ece5916b9ee068869.svg"}}]);