(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8196],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return c}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),c=i,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function c(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},76285:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=t(22122),i=t(19756),a=(t(67294),t(3905)),l=["components"],o={},s="Sieb des Eratosthenes",u={unversionedId:"Programmieren-1/Aufgaben/grid",id:"version-24L/Programmieren-1/Aufgaben/grid",isDocsHomePage:!1,title:"Sieb des Eratosthenes",description:"09grid.zip",source:"@site/versioned_docs/version-24L/04-Programmieren-1/Aufgaben/09_grid.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/grid",permalink:"/24L/Programmieren-1/Aufgaben/grid",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/04-Programmieren-1/Aufgaben/09_grid.md",tags:[],version:"24L",sidebarPosition:9,frontMatter:{},sidebar:"version-24L/sidebar",previous:{title:"Zufallszahl",permalink:"/24L/Programmieren-1/Aufgaben/zufalls_zahl"},next:{title:"Name",permalink:"/24L/Programmieren-1/Aufgaben/name"}},d=[{value:"Aufgaben",id:"aufgaben",children:[]}],m={toc:d};function p(e){var r=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sieb-des-eratosthenes"},"Sieb des Eratosthenes"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:t(76988).Z},"09_grid.zip")),(0,a.kt)("p",null,"Mit folgendem Programm wird auf ",(0,a.kt)("a",{parentName:"p",href:"https://io.gbsl.website/color_grid"},"https://io.gbsl.website/color_grid")," ein Gitternetz mit nummerierten Feldern erzeugt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from smartphone_connector import Connector\n\ndevice = Connector('https://io.gbsl.website', 'FooBar')\ndevice.setup_grid(10, 15, enumerate=True)\n\n# verbindung mit dem Ger\xe4t beenden\ndevice.disconnect()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(34953).Z})),(0,a.kt)("p",null,"Mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},'device.set_grid_at(cell_number=1, color="red")')," kann die Farbe des ersten Feldes auf rot gesetzt werden. Als Farbe sind alle englischen Farb-Namen erlaubt."),(0,a.kt)("p",null,"Weiter kann mit dem Befehl ",(0,a.kt)("inlineCode",{parentName:"p"},"device.get_grid_at(cell_number=1)")," die aktuelle Farbe des ersten Feldes abgefragt werden."),(0,a.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Zeichnen Sie ein ",(0,a.kt)("inlineCode",{parentName:"p"},"10x10")," grosses Gitternetz und f\xe4rben Sie folgenden Felder rot ein:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"alle Felder der 2er Reihe, ausser die 2 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 3er Reihe, ausser die 3 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 5er Reihe, ausser die 5 selbst"),(0,a.kt)("li",{parentName:"ul"},"alle Felder der 7er Reihe, ausser die 7 selbst")),(0,a.kt)("p",{parentName:"li"},"Was f\xe4llt Ihnen auf? Was f\xfcr Zahlen sind auf den noch weissen feldern abgebildet?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Dieser Algorithmus zum Auffinden von Primzahlen wurde schon viele Jahrhunderte vor Christus entdeckt, es war aber Eratosthenes welcher ca. 300 v. Chr. dieses Verfahren "Zahlensieb" nannte, weshalb es bis heute noch "Sieb des Eratosthenes" genannt wird.'),(0,a.kt)("p",{parentName:"li"},"Der eigentliche Algorithmus funktioniert wie folgt:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Starte bei der Zahl 2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ist das Ende des Gitters erreicht, springe zu Punkt 4."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ist das Feld rot, fahre mit Schritt 3 weiter."),(0,a.kt)("li",{parentName:"ul"},"Ist das aktuelle Feld noch nicht rot, so ist es eine Primzahl und wird ",(0,a.kt)("em",{parentName:"li"},"nicht")," rot gef\xe4rbt. Alle Vielfachen dieser Zahl bis zum Ende des Gitters werden rot gef\xe4rbt."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Gehe zum n\xe4chsten Feld und fahre mit Schritt 2 weiter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ende"))),(0,a.kt)("p",{parentName:"li"},"Implementieren Sie diesen Algorithmus und pr\xfcfen Sie ihn mit einem ",(0,a.kt)("inlineCode",{parentName:"p"},"20x20")," Gitter."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Zusatz"),": Eigentlich m\xfcssen nicht ganz alle Felder \xfcberpr\xfcft werden. Optimieren Sie ihr Programm, indem Sie nur soviele Felder \xfcberpr\xfcfen, wie minimal n\xf6tig sind."))))}p.isMDXComponent=!0},76988:function(e,r,t){"use strict";r.Z=t.p+"assets/files/09_grid-bd77570506806e9323706d31cd9d9e2d.zip"},34953:function(e,r,t){"use strict";r.Z=t.p+"assets/images/grid-73bfaaa3f2cb98f8f88e10258aab8821.png"}}]);