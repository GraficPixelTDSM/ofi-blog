(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1340],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,g=p["".concat(o,".").concat(u)]||p[u]||c[u]||a;return t?i.createElement(g,l(l({ref:n},d),{},{components:t})):i.createElement(g,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var m={};for(var o in n)hasOwnProperty.call(n,o)&&(m[o]=n[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},27627:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=t(22122),r=t(19756),a=(t(67294),t(3905)),l=["components"],m={},o="Einf\xfchrung",s={unversionedId:"Programmieren-1/Turtlegrafik/intro",id:"Programmieren-1/Turtlegrafik/intro",isDocsHomePage:!1,title:"Einf\xfchrung",description:"Programmieren heisst, einer Maschine Befehle zu erteilen und sie damit zu steuern. Die erste solche Maschine, die Sie steuern, ist eine kleine Schildkr\xf6te auf dem Bildschirm: Die Turtle. Was kann diese Turtle und was musst du wissen, um sie zu steuern?",source:"@site/docs/Programmieren-1/Turtlegrafik/001-intro.md",sourceDirName:"Programmieren-1/Turtlegrafik",slug:"/Programmieren-1/Turtlegrafik/intro",permalink:"/ofi-blog/Programmieren-1/Turtlegrafik/intro",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/Turtlegrafik/001-intro.md",version:"current",lastUpdatedAt:1628529781,formattedLastUpdatedAt:"8/9/2021",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"H\xe4ufige Fehler",permalink:"/ofi-blog/Programmieren-1/common-mistakes"},next:{title:"Turtle Graphics",permalink:"/ofi-blog/Programmieren-1/v24/Aufgaben/turtles"}},d=[{value:"Ein weiteres Programm",id:"ein-weiteres-programm",children:[]}],c={toc:d};function p(e){var n=e.components,m=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,m,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"einf\xfchrung"},"Einf\xfchrung"),(0,a.kt)("p",null,"Programmieren heisst, einer Maschine Befehle zu erteilen und sie damit zu steuern. Die erste solche Maschine, die Sie steuern, ist eine kleine Schildkr\xf6te auf dem Bildschirm: Die Turtle. Was kann diese Turtle und was musst du wissen, um sie zu steuern?"),(0,a.kt)("p",null,"Turtlebefehle werden grunds\xe4tzlich Englisch geschrieben und enden immer mit einem Klammerpaar. Dieses enth\xe4lt weitere Angaben zum Befehl. Selbst wenn keine weiteren Angaben n\xf6tig sind, muss ein leeres Klammerpaar vorhanden sein. Die Klein-/Grossschreibung muss exakt eingehalten werden."),(0,a.kt)("p",null,"Die Turtle kann sich innerhalb ihres Fensters bewegen und dabei eine Spur zeichnen. Um die Turtle zu bewegen, verwenden wir die drei Befehle ",(0,a.kt)("inlineCode",{parentName:"p"},"forward(distanz)"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"left(winkel)")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"right(winkel)"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Programmierkonzepte"),": Quellprogramm editieren, Programm ausf\xfchren, Programmsequenz"),(0,a.kt)("h1",{id:"dein-erstes-programm"},"Dein erstes Programm"),(0,a.kt)("p",null,"Das erste Python-Programm zeichnet ein Quadrat. Damit die Befehle zum zeichnen verwendet werden k\xf6nnen, muss zuerst eine Datei mit den entsprechenden Befehlen (ein sogenanntes Modul) ",(0,a.kt)("inlineCode",{parentName:"p"},"turtle")," geladen werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Quadrat",live_py:!0,title:"Quadrat"},"from turtle import *\n\nforward(80)\nleft(90)\nforward(80)\nleft(90)\nforward(80)\nleft(90)\nforward(80)\nleft(90)\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,a.kt)("inlineCode",{parentName:"h5"},"from turtle import *"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"  Damit Python die Befehle zum zeichnen verwenden kann, m\xfcssen diese zuerst aus einem Modul ",(0,a.kt)("strong",{parentName:"p"},"importiert")," werden. Damit beim Importieren nicht jeder einzelne Befehl angegeben werden muss, wird das Zeichen ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," verwendet welches alle verf\xfcgbaren Befehle importiert."))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Befehle: ",(0,a.kt)("inlineCode",{parentName:"h5"},"forward"),", ",(0,a.kt)("inlineCode",{parentName:"h5"},"left"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Alle Befehle in Python sind nach demselben Schema aufgebaut:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"einen Befehlsnamen"),(0,a.kt)("li",{parentName:"ul"},"runde Klammern"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"optional")," in den runden Klammern eine Liste","*"," von Parametern (darf auch leer sein)")),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"       forward(90)\n       \\...../  \\\n         /    Parameter (Bedeutung hier: 90 Schritte vorw\xe4rts)\nBefehlsname\n\n       penup()\n       \\.../ \\\n         /   kein Parameter\nBefehlsname\n")))),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 1")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'\xc4ndern Sie das Programm "Quadrat" so ab, dass:'),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"das Quadrat doppelt so gross gezeichnet wird"),(0,a.kt)("li",{parentName:"ul"},"das Quadrat um 45\xb0 nach links gedreht gezeichnet wird ")))),(0,a.kt)("h2",{id:"ein-weiteres-programm"},"Ein weiteres Programm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Stift-und-Punkte",live_py:!0,title:"Stift-und-Punkte"},"from turtle import *\n\nforward(40)\nleft(90)\n\npenup()\nforward(40)\ndot(5)\nright(180)\nforward(40)\nleft(90)\npendown()\n\nforward(40)\nleft(90)\nforward(80)\nleft(90)\nforward(80)\nleft(90)\nforward(80) \n")),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Aufgabe 2")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Versuchen Sie nachzuvollziehen, welche Zeile was macht."),(0,a.kt)("p",{parentName:"div"},"Erweitern Sie dann das Programm so, dass die gew\xfcrfelte Zahl ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," gezeichnet wird:"),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("img",{alt:"W\xfcrfel 5",src:t(4007).Z})),(0,a.kt)("p",{parentName:"div"},"Tipp: mit ",(0,a.kt)("inlineCode",{parentName:"p"},"hideturtle()")," kann die Turtle unsichtbar gemacht werden."))))}p.isMDXComponent=!0},4007:function(e,n){"use strict";n.Z="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CjxzdmcgaWQ9Im9maV9ibG9nX1Byb2dyYW1taWVyZW5fMV9UdXJ0bGVncmFmaWtfaW50cm9fX1N0aWZ0X3VuZF9QdW5rdGVfc3ZnIiB3aWR0aD0iOTAiIGhlaWdodD0iOTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMjQ1LDE2MSw5MCw5NCI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCAyNTApIj4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI1IiBmaWxsPSJibGFjayIgc3R5bGU9IiI+PC9jaXJjbGU+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iMCIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGxpbmUgeDE9IjQwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iMCIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPGNpcmNsZSBjeD0iNDAiIGN5PSItNDAiIHI9IjUiIGZpbGw9ImJsYWNrIiBzdHlsZT0iIj48L2NpcmNsZT4KPGxpbmUgeDE9IjQwIiB5MT0iLTQwIiB4Mj0iNDAiIHkyPSItNDAiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxsaW5lIHgxPSI0MCIgeTE9IjAiIHgyPSI4MCIgeTI9IjAiIG9wYWNpdHk9IjAiIHN0eWxlPSJzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDE7Ij48L2xpbmU+CjxjaXJjbGUgY3g9IjgwIiBjeT0iMCIgcj0iNSIgZmlsbD0iYmxhY2siIHN0eWxlPSIiPjwvY2lyY2xlPgo8bGluZSB4MT0iODAiIHkxPSIwIiB4Mj0iODAiIHkyPSIwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8Y2lyY2xlIGN4PSI4MCIgY3k9Ii04MCIgcj0iNSIgZmlsbD0iYmxhY2siIHN0eWxlPSIiPjwvY2lyY2xlPgo8bGluZSB4MT0iODAiIHkxPSItODAiIHgyPSIwIiB5Mj0iLTgwIiBvcGFjaXR5PSIwIiBzdHlsZT0ic3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxOyI+PC9saW5lPgo8Y2lyY2xlIGN4PSIwIiBjeT0iLTgwLjAwMDAwMDAwMDAwMDAxIiByPSI1IiBmaWxsPSJibGFjayIgc3R5bGU9IiI+PC9jaXJjbGU+CjxsaW5lIHgxPSIwIiB5MT0iLTgwLjAwMDAwMDAwMDAwMDAxIiB4Mj0iMCIgeTI9Ii04MC4wMDAwMDAwMDAwMDAwMSIgb3BhY2l0eT0iMCIgc3R5bGU9InN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMTsiPjwvbGluZT4KPC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgMjUwKSI+Cjxwb2x5Z29uIHBvaW50cz0iMCwwICwtNSwtOSAsMCwtNyAsNSwtOSAiIHN0cm9rZT0iYmxhY2siIGZpbGw9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMCwtODAuMDAwMDAwMDAwMDAwMDEpIHJvdGF0ZSgtMzYwLDAsMCkiPjwvcG9seWdvbj4KPC9nPgo8bWV0YWRhdGE+PHJhdz5mcm9tIHR1cnRsZSBpbXBvcnQgKgoKcGVudXAoKQpkb3QoMTApCmZvcndhcmQoNDApCmxlZnQoOTApCgpmb3J3YXJkKDQwKQpkb3QoMTApCnJpZ2h0KDE4MCkKZm9yd2FyZCg0MCkKbGVmdCg5MCkKZm9yd2FyZCg0MCkKZG90KDEwKQpsZWZ0KDkwKQpmb3J3YXJkKDgwKQpkb3QoMTApCmxlZnQoOTApCmZvcndhcmQoODApCmRvdCgxMCkKbGVmdCg5MCkKaGlkZXR1cnRsZSgpPC9yYXc+PC9tZXRhZGF0YT48L3N2Zz4="}}]);