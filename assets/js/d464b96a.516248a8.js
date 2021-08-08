(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7568],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||a;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8115:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var t=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],l={},p="For Schleife",c={unversionedId:"Programmieren-1/Turtles/for-loop",id:"Programmieren-1/Turtles/for-loop",isDocsHomePage:!1,title:"For Schleife",description:"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die for Schleife und die while Schleife.",source:"@site/docs/Programmieren-1/Turtles/002-for-loop.md",sourceDirName:"Programmieren-1/Turtles",slug:"/Programmieren-1/Turtles/for-loop",permalink:"/ofi-blog/Programmieren-1/Turtles/for-loop",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/Turtles/002-for-loop.md",version:"current",lastUpdatedAt:1627903549,formattedLastUpdatedAt:"8/2/2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Ein Python Algorithmus",permalink:"/ofi-blog/Programmieren-1/Turtles/intro"},next:{title:"While Schleife",permalink:"/ofi-blog/Programmieren-1/Turtles/while-loop"}},u=[{value:"Was ist die Ausgabe des folgenden Programms?",id:"was-ist-die-ausgabe-des-folgenden-programms",children:[]}],s={toc:u};function f(e){var n=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"for-schleife"},"For Schleife"),(0,a.kt)("p",null,"Programmiersprachen k\xf6nnen Code-Teile mehrfach nacheinander ausf\xfchren. In Python gibt es dabei zwei Konzepte. Die ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," Schleife und die ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," Schleife."),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," Schleife kann man sich wie ein Ticket-Schalter vorstellen. Der Verk\xe4ufer am Schalter bedient der Reihe nach jede Person in der Warteschlange und wiederholt jedesmal dieselbe Aufgabe: ",(0,a.kt)("em",{parentName:"p"},"den Kunden bedienen")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Warteschlange",src:r(3830).Z})),(0,a.kt)("p",null,"In Python wird die Warteschleife als Liste in eckigen Klammern geschrieben:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py",live_py:!0},"for person in ['Jack', 'Maria', 'Reto']:\n    print(f'Guten Tag {person}, wie kann ich helfen?')\n    print('...')\n    print('Auf wiedersehen')\n")),(0,a.kt)("p",null,"Die Personen ",(0,a.kt)("em",{parentName:"p"},"Jack"),", ",(0,a.kt)("em",{parentName:"p"},"Maria")," und ",(0,a.kt)("em",{parentName:"p"},"Reto")," werden nacheinander begr\xfcsst, bedient und verabschiedet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"Guten Tag Jack, wie kann ich helfen?\n...\nAuf wiedersehen.\n\nGuten Tag Maria, wie kann ich helfen?\n...\nAuf wiedersehen.\n\nGuten Tag Reto, wie kann ich helfen?\n...\nAuf wiedersehen.\n")),(0,a.kt)("p",null,"Um einen beliebigen Code-Teil mehrfach nacheinander auszuf\xfchren, k\xf6nnen wir nun auch Zahlen als Warteschleife verwenden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py",live_py:!0},"from turtle import *\nfor counter in [0, 1, 2, 3]:\n    forward(100)\n    left(90)\n")),(0,a.kt)("p",null,"F\xfcr jede Zahl wird der Code-Teil wiederholt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py",live_py:!0},"from turtle import *\n# 0\nforward(100)\nleft(90)\n# 1\nforward(100)\nleft(90)\n# 2\nforward(100)\nleft(90)\n# 3\nforward(100)\nleft(90)\n")),(0,a.kt)("p",null,"Oder in Kurzschreibweise:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py",live_py:!0},"from turtle import *\nfor counter in range(4):\n    forward(100)\n    left(90)\n")),(0,a.kt)("p",null,"wobei ",(0,a.kt)("inlineCode",{parentName:"p"},"range(4)")," eine Warteschleife mit ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," Elementen erzeugt."),(0,a.kt)("h2",{id:"was-ist-die-ausgabe-des-folgenden-programms"},"Was ist die Ausgabe des folgenden Programms?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py",live_py:!0},"from turtle import *\npenup()\ngoto(-30, 0)\npendown()\n\nfor counter in range(8):\n    forward(60)\n    left(45)\n\npenup()\ngoto(-30, 100)\npendown()\n\nsetheading(180)     # Orientierung nach links: \u25c0\ufe0f\n\nfor counter in range(8):\n    forward(5)\n    right(45)\n\npenup()\ngoto(30, 100)\npendown()\n\nsetheading(0)       # Orientierung nach rechts: \u25b6\ufe0f\n\n\nfor counter in range(8):\n    forward(5)\n    left(45)\n\npenup()\ngoto(-48, 40)\npendown()\n\nsetheading(-45)     # Orientierung nach rechts unten: \u2198\ufe0f\n\nfor counter in range(3):\n    forward(40)\n    left(45)\n\n")))}f.isMDXComponent=!0},3830:function(e,n,r){"use strict";n.Z=r.p+"assets/images/queue-8064bf7946c4724e4fbeb25e2d35cb83.png"}}]);