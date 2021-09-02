(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7452],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return p}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(r),p=i,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return r?t.createElement(f,o(o({ref:n},l),{},{components:r})):t.createElement(f,o({ref:n},l))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9850:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var t=r(22122),i=r(19756),a=(r(67294),r(3905)),o=["components"],c={},s="Screen",d={unversionedId:"Programmieren-1/Turtlegrafik/screen",id:"Programmieren-1/Turtlegrafik/screen",isDocsHomePage:!1,title:"Screen",description:"Die Zeichenfl\xe4che kann konfiguriert werden, z.B. mit einer Hintergrundfarbe, oder aber auch die Dimensionen des Hintergrunds.",source:"@site/docs/Programmieren-1/Turtlegrafik/002-screen.md",sourceDirName:"Programmieren-1/Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/screen",permalink:"/Programmieren-1/Turtlegrafik/screen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/Turtlegrafik/002-screen.md",tags:[],version:"current",lastUpdatedAt:1630618245,formattedLastUpdatedAt:"9/2/2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Einf\xfchrung",permalink:"/Programmieren-1/Turtlegrafik/intro"},next:{title:"Screencoord",permalink:"/Programmieren-1/Turtlegrafik/screen-coords"}},l=[],u={toc:l};function m(e){var n=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"screen"},"Screen"),(0,a.kt)("p",null,"Die Zeichenfl\xe4che kann konfiguriert werden, z.B. mit einer Hintergrundfarbe, oder aber auch die Dimensionen des Hintergrunds."),(0,a.kt)("p",null,"Standarm\xe4ssig ist keine Hintergrundfarbe gesetzt (=durchsichtig) und die Dimensionen die Koordinaten des Bildschirms sind ",(0,a.kt)("inlineCode",{parentName:"p"},"500x500")," Pixel. Das zugrundeliegende Koordinatensystem hat den Ursprung immer in der Mitte des Bildschirms."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(58286).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from turtle import *\n\n# wenn die Bildschirm-Dimensionen ver\xe4ndert werden sollen, muss dies\n# zwingend als erster Befehl gemacht werden.\n# Die Gr\xf6sse kann anschliessend nicht mehr ver\xe4ndert werden.\nturtle.set_defaults(canvwidth=200, canvheight=100)\n\n# Die Hintergrundfarbe kann auch ge\xe4ndert werden.\nScreen().bgcolor('orange')\n\nforward(100)\n\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Wird mit ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen().bgcolor('yellow')")," eine Hintergrundfarbe festgelegt, kann das umgebende Rechteck der Figur (englisch ",(0,a.kt)("inlineCode",{parentName:"p"},"Bounding Box"),") nicht mehr bestimmt werden und es wird immer die ganze Bildfl\xe4che heruntergeladen. "))))}m.isMDXComponent=!0},58286:function(e,n,r){"use strict";n.Z=r.p+"assets/images/Screen__coordinates_py-5a1714d690d70f7894d878e561269826.svg"}}]);