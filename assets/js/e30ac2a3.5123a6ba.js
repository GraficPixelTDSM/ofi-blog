(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[526],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return s}});var r=n(52263),i=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,a=void 0!==s&&s,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8027:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(41788),i=n(67294),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return i.createElement("div",{style:{display:this.props.display||"flex",alignItems:this.props.alignItems||"stretch",alignContent:this.props.alignContent||"space-between",justifyContent:this.props.justifyContent||"space-between",flexWrap:this.props.flexWrap||"wrap",flexDirection:this.props.flexDirection||"row"}},this.props.children)},t}(i.Component)},33532:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),s=n(44996),a=n(8027),l=["components"],u={title:"Notenblatt"},c="Notenblatt [^1]",d={unversionedId:"Programmieren-1/Algorithmen/Notenblatt",id:"Programmieren-1/Algorithmen/Notenblatt",isDocsHomePage:!1,title:"Notenblatt",description:"Ein Notenblatt ist ein Algorithmus, welches den Prozess \xabMusikst\xfcck spielen\xbb beschreibt. Notenbl\xe4tter sind in einer symbolischen Sprache, der Notenschrift, verfasst.",source:"@site/docs/Programmieren-1/01-Algorithmen/04-Notenblatt.md",sourceDirName:"Programmieren-1/01-Algorithmen",slug:"/Programmieren-1/Algorithmen/Notenblatt",permalink:"/Programmieren-1/Algorithmen/Notenblatt",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/01-Algorithmen/04-Notenblatt.md",tags:[],version:"current",lastUpdatedAt:1629554373,formattedLastUpdatedAt:"8/21/2021",sidebarPosition:4,frontMatter:{title:"Notenblatt"},sidebar:"sidebar",previous:{title:"Bauanleitung",permalink:"/Programmieren-1/Algorithmen/Bauanleitung"},next:{title:"Flussdiagramm",permalink:"/Programmieren-1/Algorithmen/Flussdiagramm"}},p=[{value:"Schritt",id:"schritt",children:[]},{value:"Wiederholung",id:"wiederholung",children:[]},{value:"Bedingte Ausf\xfchrung",id:"bedingte-ausf\xfchrung",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Beispiel",id:"beispiel",children:[]}],m={toc:p};function f(e){var t=e.components,u=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notenblatt"},"Notenblatt ",(0,o.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("p",null,"Ein Notenblatt ist ein Algorithmus, welches den Prozess \xabMusikst\xfcck spielen\xbb beschreibt. Notenbl\xe4tter sind in einer symbolischen Sprache, der ",(0,o.kt)("strong",{parentName:"p"},"Notenschrift"),", verfasst."),(0,o.kt)("h2",{id:"schritt"},"Schritt"),(0,o.kt)("p",null,"Ein einzelner Schritt in der Notenschrift ist eine Note oder eine Pause. Im folgenden beschreiben die ersten drei \xfcbereinanderliegenden Noten \xabSpiele einen Akkord bestehend aus einem kleinen ",(0,o.kt)("inlineCode",{parentName:"p"},"d"),", einem eingestrichenen ",(0,o.kt)("inlineCode",{parentName:"p"},"fis'")," und einem zweigestrichenen ",(0,o.kt)("inlineCode",{parentName:"p"},"e''")," von einem Achtel L\xe4nge\xbb."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Erste Zeile eines Notenblatts",src:n(18861).Z})),(0,o.kt)("h2",{id:"wiederholung"},"Wiederholung"),(0,o.kt)("p",null,"In der Notenschrift wird durch Wiederholungszeichen (rot) angezeigt, dass die dazwischenliegenden Takte wiederholt werden sollen:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wiederholungszeichen",src:n(70435).Z})),(0,o.kt)("p",null,"Eine andere Variante ist die Anweisung D.S. (Dal Segno, ",(0,o.kt)("em",{parentName:"p"},"\xabvom Zeichen\xbb"),"). Gemeint ist, dass das St\xfcck von einem bezeichneten Punkt an (meist mit dem Zeichen ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2551:"),") wiederholt wird."),(0,o.kt)("h2",{id:"bedingte-ausf\xfchrung"},"Bedingte Ausf\xfchrung"),(0,o.kt)("p",null,"Einer oder mehrere Schritte werden manchmal nur unter bestimmten Bedingungen ausgef\xfchrt. Auf einem Notenblatt wird mit sogenannten Voltenklammern (rot) gekennzeichnet, dass ein Takt nur im ersten oder zweiten Durchgang gespielt werden soll."),(0,o.kt)("p",null,"In der folgenden Zeile wird also der dritte Takt nur im ersten und der vierte Takt nur im zweiten Durchgang gespielt:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Voltenklammern",src:n(4594).Z})),(0,o.kt)(a.Z,{mdxType:"Flex"},(0,o.kt)("div",null,"So t\xf6nt der erste Durchgang:",(0,o.kt)("audio",{controls:!0},(0,o.kt)("source",{src:(0,s.Z)("/sounds/music-conditional-1.mp3"),type:"audio/mpeg"}))),(0,o.kt)("div",null,"So t\xf6nt der zweite Durchgang:",(0,o.kt)("audio",{controls:!0},(0,o.kt)("source",{src:(0,s.Z)("/sounds/music-conditional-2.mp3"),type:"audio/mpeg"})))),(0,o.kt)("h2",{id:"parameter"},"Parameter"),(0,o.kt)("p",null,"Durch die Noten alleine sind die L\xe4nge und die H\xf6he nur relativ festgelegt."),(0,o.kt)("p",null,"Erst durch die Tempoangabe \u2669=180 wird festgelegt, dass pro Minute 180 Viertelnoten gespielt werden sollen. Mit Violin- und Bassschl\xfcssel wird festgelegt, auf welcher Notenlinie das g' bzw. das f liegt und somit in welcher H\xf6he die Noten gespielt werden sollen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tempoangabe und Notenschl\xfcssel",src:n(84256).Z})),(0,o.kt)("p",null,"Tempoangabe und Notenschl\xfcssel sind Parameter eines Notenblatts, deren \xc4nderung die Bedeutung aller Noten und somit das gespielte St\xfcck \xe4ndert."),(0,o.kt)("h2",{id:"beispiel"},"Beispiel"),(0,o.kt)("p",null,"Auf der Website ",(0,o.kt)("a",{parentName:"p",href:"https://musescore.com/sheetmusic"},"musescore.com")," sind Notenbl\xe4tter f\xfcr viele Musikst\xfccke verf\xfcgbar und k\xf6nnen dort auch gleich abgespielt werden. Hier sind Ausschnitte aus folgenden St\xfccken verwendet worden:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://musescore.com/user/2072681/scores/2601926"},"Super Mario Bros: Main Theme")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://musescore.com/user/685336/scores/4797212"},"Jingle Bells"))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle ",(0,o.kt)("a",{parentName:"li",href:"https://rothe.io/?page=prog1/1-algo/3-sheet-music/"},"rothe.io"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},4594:function(e,t,n){"use strict";t.Z=n.p+"assets/images/music-conditional-2f5db8c1d1425fdd1cf993e0340a8ea9.svg"},84256:function(e,t,n){"use strict";t.Z=n.p+"assets/images/music-parameter-8b0bc3bb7a39d7b2488a9cae9b901cb7.svg"},70435:function(e,t,n){"use strict";t.Z=n.p+"assets/images/music-repeat-7875ce1b0ad3bd627b68c4726cfa4112.svg"},18861:function(e,t,n){"use strict";t.Z=n.p+"assets/images/music-step-ae15ff29bb474d72da3580bb3271f6c5.svg"}}]);