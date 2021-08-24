(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9065],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74575:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o=["components"],l={title:"Ports"},s="Ports [^1]",p={unversionedId:"Netzwerke/Begriffe/ports",id:"version-24K/Netzwerke/Begriffe/ports",isDocsHomePage:!1,title:"Ports",description:"Wozu ben\xf6tigt man Ports?",source:"@site/versioned_docs/version-24K/05-Netzwerke/002-Begriffe/3-ports.md",sourceDirName:"05-Netzwerke/002-Begriffe",slug:"/Netzwerke/Begriffe/ports",permalink:"/24K/Netzwerke/Begriffe/ports",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/05-Netzwerke/002-Begriffe/3-ports.md",version:"24K",sidebarPosition:3,frontMatter:{title:"Ports"},sidebar:"version-24K/sidebar",previous:{title:"MAC-Adresse",permalink:"/24K/Netzwerke/Begriffe/mac-adresse"},next:{title:"Begriff",permalink:"/24K/Netzwerke/Codierung/Begriff"}},d=[{value:"Wozu ben\xf6tigt man Ports?",id:"wozu-ben\xf6tigt-man-ports",children:[]},{value:"Well-known Ports",id:"well-known-ports",children:[]}],c={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ports"},"Ports ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"wozu-ben\xf6tigt-man-ports"},"Wozu ben\xf6tigt man Ports?"),(0,a.kt)("p",null,"Ein Computer, der sich in einem Netzwerk befindet, hat meist etliche Verbindungen gleichzeitig zu vielen anderen Computern ge\xf6ffnet. Sogar zwei Computer untereinander verwenden h\xe4ufig mehrere Verbindungen gleichzeitig:"),(0,a.kt)("p",null,"So k\xf6nnte ein Benutzer auf seinem Computer im Browser eine Webseite besuchen, w\xe4hrend das Betriebssystem gerade den Update-Server kontaktiert \u2013 beides ben\xf6tigt eine DNS-Abfrage, d.h. Verbindungen zum DNS-Server."),(0,a.kt)("p",null,"Auf der Vermittlungsschicht kontaktiert derselbe Client mit seiner IP-Adresse f\xfcr beide Verbindungen die IP-Adresse desselben (DNS-)Servers. Eine Stufe h\xf6her \u2013 auf der Transportschicht \u2013 m\xfcssen die Verbindungen unterschieden werden k\xf6nnen. Schliesslich sollen die beiden Antworten ja nicht vertauscht werden. Daher verwendet man Ports \u2013 eine 16-bit Zahl (sprich: Werte von 0 - 65'535)."),(0,a.kt)("h2",{id:"well-known-ports"},"Well-known Ports"),(0,a.kt)("p",null,"Auf der Serverseite werden in der Regel stets dieselben Ports eingesetzt \u2013 schliesslich muss ein Client wissen, auf welchem Port er den gew\xfcnschten Dienst erreichen kann."),(0,a.kt)("p",null,"Einige bekannte Ports sind:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"right"},"Portnummer"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Dienst"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"25")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Simple Mail Transfer Protocol (SMTP)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"53")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Domain Name System (DNS)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"80")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HyperText Transfer Protocol (HTTP)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"143")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Internet Message Access Protocol (IMAP)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"465")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Simple Mail Transfer Protocol ",(0,a.kt)("strong",{parentName:"td"},"Secure")," (SMTPS)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"443")),(0,a.kt)("td",{parentName:"tr",align:"left"},"HyperText Transfer Protocol ",(0,a.kt)("strong",{parentName:"td"},"Secure")," (HTTPS)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"right"},(0,a.kt)("inlineCode",{parentName:"td"},"993")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Internet Message Access Protocol ",(0,a.kt)("strong",{parentName:"td"},"Secure")," (IMAPS)")))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=240119"},"rothe.io Ports"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);