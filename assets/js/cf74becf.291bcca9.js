(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[2811],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),i=n(79443);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=a(),h=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,r.useState)(i),v=k[0],b=k[1],w=r.Children.toArray(e.children),y=[];if(null!=p){var N=h[p];null!=N&&N!==v&&d.some((function(e){return e.value===N}))&&b(N)}var S=function(e){var t=e.currentTarget,n=y.indexOf(t),r=d[n].value;b(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,i,a,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&a<=c&&i<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case c:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.default)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:S,onClick:S},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},85107:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(41788),i=n(67294),a=n(55064),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return i.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},2271:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=n(85107),s=n(58215),l=["components"],c={title:"2. VS Code"},u="VS Code",d={unversionedId:"Software/vscode",id:"version-24L/Software/vscode",isDocsHomePage:!1,title:"2. VS Code",description:"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar.",source:"@site/versioned_docs/version-24L/03-Software/02-vscode.mdx",sourceDirName:"03-Software",slug:"/Software/vscode",permalink:"/24L/Software/vscode",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/03-Software/02-vscode.mdx",tags:[],version:"24L",sidebarPosition:2,frontMatter:{title:"2. VS Code"},sidebar:"version-24L/sidebar",previous:{title:"1. Python",permalink:"/24L/Software/python"},next:{title:"Turtle Graphics",permalink:"/24L/Programmieren-1/Aufgaben/turtles"}},p=[{value:"Installieren",id:"installieren",children:[]},{value:"Konfigurieren",id:"konfigurieren",children:[{value:"Python Interpreter",id:"python-interpreter",children:[]}]},{value:"Verwenden",id:"verwenden",children:[{value:"1. Wo ist was?",id:"1-wo-ist-was",children:[]},{value:"2. Python Befehle ausprobieren",id:"2-python-befehle-ausprobieren",children:[]},{value:"3. Einen Ordner \xf6ffnen",id:"3-einen-ordner-\xf6ffnen",children:[]},{value:"4. Ein neues Python Script erstellen",id:"4-ein-neues-python-script-erstellen",children:[]},{value:"5. Einzelne Programm-Schritte nachvollziehen (debuggen)",id:"5-einzelne-programm-schritte-nachvollziehen-debuggen",children:[]}]}],m={toc:p};function f(e){var t=e.components,c=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vs-code"},"VS Code"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattform\xfcbergreifend f\xfcr die Betriebssysteme Windows, macOS und Linux verf\xfcgbar. ",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,a.kt)("h2",{id:"installieren"},"Installieren"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unter ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"https://code.visualstudio.com/")," die aktuelle Version von Python herunterladen. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Surface Pro X -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ARM")),(0,a.kt)("li",{parentName:"ul"},"Windows -> ",(0,a.kt)("inlineCode",{parentName:"li"},"64 bit")),(0,a.kt)("li",{parentName:"ul"},"Mac mit M1 Chip -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Apple Silicon")),(0,a.kt)("li",{parentName:"ul"},"Mac OS -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Intel Chip"),(0,a.kt)("img",{alt:"Download Optionen",src:n(74963).Z})))),(0,a.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken"),(0,a.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Installations-Optionen"),(0,a.kt)(o.Z,{mdxType:"OsTabs"},(0,a.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)("img",{alt:"Installationsschritt 1.",src:n(69675).Z})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)("img",{alt:"Installationsschritt 2.",src:n(68853).Z})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)("img",{alt:"Installationsschritt 3.",src:n(73078).Z})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)("img",{alt:"Installationsschritt 4.",src:n(57219).Z})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)("img",{alt:"Installationsschritt 5.",src:n(13567).Z})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)("img",{alt:"Installationsschritt 6.",src:n(26968).Z})),(0,a.kt)("li",{parentName:"ol"},"Schritt: ",(0,a.kt)("img",{alt:"Installationsschritt 7.",src:n(96839).Z})),(0,a.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,a.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei ist eine komprimierte ",(0,a.kt)("inlineCode",{parentName:"li"},".zip"),"-Datei - nach dem Doppelklicken befindet sich im Download-Ordner eine Datei `Visual Studio Code.app``"),(0,a.kt)("li",{parentName:"ol"},"Die Datei ",(0,a.kt)("inlineCode",{parentName:"li"},"Visual Studio Code.app"),' in den Ordner "Programme" ziehen.'),(0,a.kt)("li",{parentName:"ol"},"Beim ersten \xd6fnnen kommt folgender Hinweis:\n",(0,a.kt)("img",{alt:"Installationsschritt 3.",src:n(50089).Z})),(0,a.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"konfigurieren"},"Konfigurieren"),(0,a.kt)("p",null,"Damit die richtigen Voreinstellungen geladen werden, muss eine Erweiterung, ein sog. Plugin, installiert werden. Unter ",(0,a.kt)("inlineCode",{parentName:"p"},"Erweiterungen")," nach dem Plugin ",(0,a.kt)("strong",{parentName:"p"},"gbsl-informatik")," suchen und dieses installieren."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VS Code Plugins",src:n(53104).Z})),(0,a.kt)("h3",{id:"python-interpreter"},"Python Interpreter"),(0,a.kt)("p",null,"Um Python-Programme auszuf\xfchren, ist ein \xdcbersetzer der Befehle zu Maschinenverst\xe4ndlichem Code notwendig. Diese Aufgabe \xfcbernimmt der ",(0,a.kt)("strong",{parentName:"p"},"Python Interpreter"),". Auf einem Ger\xe4t sind meist mehrere verschiedene Python-Interpreter installiert - in VS Code soll aber der von uns installierte Interpreter verwendet werden:"),(0,a.kt)(o.Z,{mdxType:"OsTabs"},(0,a.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Es muss immer \xfcberpr\xfcft werden, dass der von uns installierte Interpreter ausgew\xe4hlt ist."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interpreter Ausw\xe4hlen",src:n(3419).Z}))),(0,a.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Der ",(0,a.kt)("strong",{parentName:"p"},"zuletzt")," installierte Python-Interpreter ist jeweils unter ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/python3")," (in der zweiten Zeile vermerkt) verf\xfcgbar. Es muss immer \xfcberpr\xfcft werden, dass dieser Interpreter ausgew\xe4hlt ist."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interpreter Ausw\xe4hlen",src:n(4763).Z})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Eine andere Version verwenden"),(0,a.kt)("p",null,"Unter ",(0,a.kt)("inlineCode",{parentName:"p"},"/Library/Frameworks/Python.framework/Versions/")," sind alle Python-Versionen verf\xfcgbar. Beim Konfigurieren des Interpreters kann \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter interpreter path...")," auch dieser Pfad angegeben werden."),(0,a.kt)("p",null,"Beispiel-Pfad f\xfcr die Version 3.9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Welcher Interpreter wird aktuell verwendet?"),(0,a.kt)("p",null,"Mit folgendem Python-Programm kann man herausfinden, wo sich der Python Interpreter befindet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import sys\nprint(sys.executable)\n"))),(0,a.kt)("h2",{id:"verwenden"},"Verwenden"),(0,a.kt)("p",null,"In VS Code lassen sich einzelne Dateien oder Ordner \xf6ffnen. Damit alle relevanten Dateien beim Ausf\xfchren von Python-Programmen von VS Code gefunden werden, sollten immer ganze Ordner ge\xf6ffnet werden."),(0,a.kt)("h3",{id:"1-wo-ist-was"},"1. Wo ist was?"),(0,a.kt)("p",null,"Alle im moment ge\xf6ffneten Programme sind auf der linken Seite im Dateiexplorer zu sehen."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69176).Z})),(0,a.kt)("h3",{id:"2-python-befehle-ausprobieren"},"2. Python Befehle ausprobieren"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92288).Z})),(0,a.kt)("h3",{id:"3-einen-ordner-\xf6ffnen"},"3. Einen Ordner \xf6ffnen"),(0,a.kt)("p",null,"\xd6ffnen Sie jeweils einen ganzen Ordner, in welchem sich Ihre Python Scripts befinden."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17567).Z})),(0,a.kt)("h3",{id:"4-ein-neues-python-script-erstellen"},"4. Ein neues Python Script erstellen"),(0,a.kt)("p",null,'Um ein neues Python Script hinzuzuf\xfcgen, klicken Sie "New File". Wichtig: ',(0,a.kt)("strong",{parentName:"p"},"Die Dateiendung des Skripts muss ",(0,a.kt)("inlineCode",{parentName:"strong"},".py")," sein!")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(68945).Z})),(0,a.kt)("h3",{id:"5-einzelne-programm-schritte-nachvollziehen-debuggen"},"5. Einzelne Programm-Schritte nachvollziehen (debuggen)"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35747).Z})),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Visual_Studio_Code"},"wikipedia"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.r(t),n.d(t,{default:function(){return i}})},17567:function(e,t,n){"use strict";t.Z=n.p+"assets/images/01_open_folder-6b8c50bf8bdbe5ca661f3a205f7a46e0.png"},68945:function(e,t,n){"use strict";t.Z=n.p+"assets/images/02_create_file-28fa79b6e9402bb63491ad46d045d1f6.png"},69176:function(e,t,n){"use strict";t.Z=n.p+"assets/images/03_workbench-ad181c29f7e8eb911dee87a30601f490.png"},35747:function(e,t,n){"use strict";t.Z=n.p+"assets/images/04_debug-c784828bbbf44ed5b654de1ec294e660.png"},92288:function(e,t,n){"use strict";t.Z=n.p+"assets/images/05_ipython-0f140f77b1fdcda1caa6e3e48d398353.png"},50089:function(e,t,n){"use strict";t.Z=n.p+"assets/images/osx-01-5872446b74c32e0d5a2ce83678fe2d6e.png"},4763:function(e,t,n){"use strict";t.Z=n.p+"assets/images/osx-configure-python-interpreter-67015f759d16c72b412e28ebed0c2711.png"},74963:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vscode-download-3e1dc5f9d925fa7c5093e7a1651b3bb0.png"},53104:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vscode-plugins-0c606baa8b2ba3e15dfb2a76194e917d.png"},69675:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-01-dc8eb8cf9e34639b8ec37e83b2bf300d.png"},68853:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-02-9c9854461dbf29288b13fe0c5806e58d.png"},73078:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-03-9de93d64a534850600758d4d5e3d0a5b.png"},57219:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-04-496ef2b5f696f9dfe852580f4b2069b4.png"},13567:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-05-432431227c0f183f79405080829692ca.png"},26968:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-06-3b922ac653e5d24d4e62b150c17d50e6.png"},96839:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-07-7449c627f872fef6f1f4012589d65fbc.png"},3419:function(e,t,n){"use strict";t.Z=n.p+"assets/images/win-configure-python-interpreter-a8db42baa9a40b35935eb98222843bb2.png"}}]);