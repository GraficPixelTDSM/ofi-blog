(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5967],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){"use strict";var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},55064:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(67294),a=t(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,p=e.values,m=e.groupId,d=e.className,g=i(),h=g.tabGroupChoices,f=g.setTabGroupChoices,b=(0,r.useState)(a),k=b[0],v=b[1],N=r.Children.toArray(e.children),y=[];if(null!=m){var w=h[m];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&v(w)}var S=function(e){var n=e.currentTarget,t=y.indexOf(n),r=p[t].value;v(r),null!=m&&(f(m,r),setTimeout((function(){var e,t,r,a,i,l,o,u;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,t>=0&&i<=u&&a<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case c:var r=y.indexOf(e.target)+1;t=y[r]||y[0];break;case u:var a=y.indexOf(e.target)-1;t=y[a]||y[y.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,l.default)("tabs__item",o,{"tabs__item--active":k===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:S,onClick:S},t)}))),n?(0,r.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},79443:function(e,n,t){"use strict";var r=(0,t(67294).createContext)(void 0);n.Z=r},67936:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),l=t(55064),o=t(58215),s=["components"],u={},c="Modulo",p={unversionedId:"Programmieren-1/Aufgaben/modulo",id:"version-24K/Programmieren-1/Aufgaben/modulo",isDocsHomePage:!1,title:"Modulo",description:"11modulo.zip",source:"@site/versioned_docs/version-24K/04-Programmieren-1/Aufgaben/11_modulo.mdx",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/modulo",permalink:"/ofi-blog/24K/Programmieren-1/Aufgaben/modulo",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24K/04-Programmieren-1/Aufgaben/11_modulo.mdx",version:"24K",sidebarPosition:11,frontMatter:{},sidebar:"version-24K/sidebar",previous:{title:"Name",permalink:"/ofi-blog/24K/Programmieren-1/Aufgaben/name"},next:{title:"Uhren",permalink:"/ofi-blog/24K/Programmieren-1/Aufgaben/uhren"}},m=[{value:"1. Kalender",id:"1-kalender",children:[]},{value:"2. Schachbrett",id:"2-schachbrett",children:[{value:"Zusatz",id:"zusatz",children:[]}]}],d={toc:m};function g(e){var n=e.components,u=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,u,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modulo"},"Modulo"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:t(36899).Z},"11_modulo.zip")),(0,i.kt)("h2",{id:"1-kalender"},"1. Kalender"),(0,i.kt)("p",null,"Schreiben Sie ein Programm, das von einem gegebenen Datum im 21. Jahrhundert (vom 1. 1. 2001 bis 31.12.2100) den Wochentag bestimmt."),(0,i.kt)("p",null,"Dabei muss Folgendes beachtet werden:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der 1.1.2001 war ein Montag."),(0,i.kt)("li",{parentName:"ul"},"Schaltjahre haben ",(0,i.kt)("inlineCode",{parentName:"li"},"366")," statt ",(0,i.kt)("inlineCode",{parentName:"li"},"365")," Tage. Ein Schaltjahr ist...",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"durch ",(0,i.kt)("inlineCode",{parentName:"li"},"4")," teilbar, aber nicht durch ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," teilbar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ausnahme"),": Ist die Jahreszahl durch ",(0,i.kt)("inlineCode",{parentName:"li"},"400")," teilbar, dann ist es ein Schaltjahr")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Zusatzaufgabe"),": Erweitern Sie das Programm so, dass es f\xfcr alle Daten im Gregorianischen Kalender (ab Freitag 15.10.1582) funktioniert."),(0,i.kt)(l.Z,{defaultValue:"step-1",values:[{label:"Schritt 1",value:"step-1"},{label:"Schritt 2",value:"step-2"},{label:"Schritt 3",value:"step-3"},{label:"Schritt 4",value:"step-4"},{label:"Schritt 5",value:"step-5"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"step-1",mdxType:"TabItem"},(0,i.kt)("p",null,"Zuerst \xfcber eine Eingabe Tag, Monat und Jahr abfragen (achtung Datentyp...)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"tag = input('Tag')\nmonat = input('Monat')\njahr = input('Jahr')\n"))),(0,i.kt)(o.Z,{value:"step-2",mdxType:"TabItem"},(0,i.kt)("p",null,"Erster Schritt: Wie bestimmt man den Wochentag?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr den Januar 2001 funktionieren."),(0,i.kt)("p",null,"--\x3e Wir brauchen eine Liste, welche der Reihe nach die Wochentage enth\xe4lt."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgabe"),": Der 1.1.2001 sollte ein Montag sein. Das stimmt aktuell noch nicht. Wie muss das Programm angepasst werden, damits stimmt? Wieso?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"TAGE = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']\n\nwochentag = TAGE[tag % 7]\nprint(wochentag)\n"))),(0,i.kt)(o.Z,{value:"step-3",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr das Jahr 2001 funktionieren."),(0,i.kt)("p",null,"Es m\xfcsssen die Anzahl Tage jedes ",(0,i.kt)("strong",{parentName:"p"},"verstrichenen")," Monats umgewandelt werden. Dazu erstellen wir eine Liste, welche die Anzahl Tage jedes Jahres enth\xe4lt."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgabe"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Der Tag kann nun berechnet werden durch den entstehenden Rest von ",(0,i.kt)("inlineCode",{parentName:"li"},"tag + monats_tage"),"."),(0,i.kt)("li",{parentName:"ol"},"\xdcberpr\xfcfe: Der 1.6.2001 ist war ein Freitag. ",(0,i.kt)("em",{parentName:"li"},"Hinweis"),': Aktuell wird es noch "Sonntag" ausgeben, wieso? \xdcberpr\xfcfe wie viele Monate zu ',(0,i.kt)("inlineCode",{parentName:"li"},"monats_tage")," hinzugef\xfcgt werden")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"MONATE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n\nmonates_tage = 0\nfor m in range(0, monat, 1):\n    monates_tage = monates_tage + MONATE[m]\n"))),(0,i.kt)(o.Z,{value:"step-4",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Nur Daten f\xfcr bis zum Jahr 2003 funktionieren."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgabe"),":"),(0,i.kt)("p",null,"Der Tag kann nun berechnet werden durch den entstehenden Rest von ",(0,i.kt)("inlineCode",{parentName:"p"},"tag + monats_tage + jahres_tage"),". Der 1.6.2003 sollte ein Sonntag sein."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"jahres_tage = 0\nfor year in range(2001, jahr, 1):\n    jahres_tage = jahres_tage + 365\n"))),(0,i.kt)(o.Z,{value:"step-5",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Szenario"),": Schaltjahre, bis 2001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beim Berechnen von ",(0,i.kt)("inlineCode",{parentName:"li"},"jahres_tage")," \xfcberpr\xfcfen, ob ein Jahr ein Schaltjahr ist. Falls ja: ",(0,i.kt)("inlineCode",{parentName:"li"},"366")," Tage hinzuf\xfcgen, sonst ",(0,i.kt)("inlineCode",{parentName:"li"},"365")),(0,i.kt)("li",{parentName:"ul"},"Beim Berechnen von ",(0,i.kt)("inlineCode",{parentName:"li"},"monats_tage")," \xfcberpr\xfcfen, ob das gew\xe4hlte Jahr ein Schaltjahr ist ",(0,i.kt)("strong",{parentName:"li"},"und")," ob der Monat nach dem Februar gew\xe4hlt ist. Dann muss noch ein Tag zus\xe4tzlich hinzugef\xfcgt werden.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\xdcberpr\xfcfen")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"28.6.2020 war ein Sonntag"),(0,i.kt)("li",{parentName:"ul"},"28.6.2100 wird ein Montag sein")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:'live_py title="kalender.py"',live_py:!0,title:'"kalender.py"'},"# kalender\n\n")),(0,i.kt)("h2",{id:"2-schachbrett"},"2. Schachbrett"),(0,i.kt)("p",null,"Erzeugen Sie auf ",(0,i.kt)("a",{parentName:"p",href:"https://io.gbsl.website/playground"},"https://io.gbsl.website")," ein ",(0,i.kt)("inlineCode",{parentName:"p"},"8x8")," Schachbrett."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Schachbrett",src:t(88293).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tipps"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zeichnen Sie ein Feld ",(0,i.kt)("inlineCode",{parentName:"li"},"20x20")," einheiten gross"),(0,i.kt)("li",{parentName:"ul"},"verwenden Sie eine verschachtelte ",(0,i.kt)("inlineCode",{parentName:"li"},"for"),"-Schleife - eine f\xfcr die ",(0,i.kt)("inlineCode",{parentName:"li"},"y"),"-Werte, eine f\xfcr die ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),"-Werte:\n",(0,i.kt)("img",{alt:"checker-anim",src:t(30857).Z}))),(0,i.kt)("h3",{id:"zusatz"},"Zusatz"),(0,i.kt)("p",null,"Stellen Sie die Schach-Figuren auf:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(99534).Z})),(0,i.kt)("p",null,"Die Bilder f\xfcr die Figuren finden Sie im Ordner ",(0,i.kt)("inlineCode",{parentName:"p"},"chess")," - dieser Ordner muss beim Konfigurieren des Playgrounds angegeben werden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"device.configure_playground(\n  width=180,\n  height=180,\n  origin_x=10,\n  origin_y=10,\n  color='bisque',\n  images='chess'\n)\n")),(0,i.kt)("p",null,"Anschliessend kann einem Objekt ein Hintergrundbild mitgegeben werden (",(0,i.kt)("strong",{parentName:"p"},"Achtung"),": nur der Name des Bildes wird angegeben, keine Dateierweiterung!)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"device.add_square(\n  pos_x=0,\n  pos_y=0,\n  size=15,\n  image='s_dame'\n)\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/07T_Playground.ipynb"},"Theorie: Jupyterhub Kapitel 7.4")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tipp"),": Setzen Sie den Anker der Schach-Figuren auf ",(0,i.kt)("inlineCode",{parentName:"p"},"anchor=[0.5, 0.5]"),"."))}g.isMDXComponent=!0},86010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.r(n),t.d(n,{default:function(){return a}})},36899:function(e,n,t){"use strict";n.Z=t.p+"assets/files/11_modulo-0e910dcaeeae2d5be0eda8905be727c8.zip"},30857:function(e,n,t){"use strict";n.Z=t.p+"assets/images/animate_draw-cb56433100290e187e835da5ef47d1b5.gif"},88293:function(e,n,t){"use strict";n.Z=t.p+"assets/images/chess1-76130d67696b99434bc39c71027873b6.png"},99534:function(e,n,t){"use strict";n.Z=t.p+"assets/images/chess2-efed82b0da53bf68a52ffd15d6de5d3b.png"}}]);