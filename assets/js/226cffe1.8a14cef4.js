(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9468],{13919:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return a}})},44996:function(e,n,r){"use strict";r.d(n,{C:function(){return i},Z:function(){return l}});var t=r(52263),a=r(13919);function i(){var e=(0,t.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var i=void 0===t?{}:t,l=i.forcePrependBaseUrl,u=void 0!==l&&l,o=i.absolute,s=void 0!==o&&o;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(u)return n+r;var d=r.startsWith(n)?r:n+r.replace(/^\//,"");return s?e+d:d}(i,r,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},58215:function(e,n,r){"use strict";var t=r(67294);n.Z=function(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},55064:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(67294),a=r(79443);var i=function(){var e=(0,t.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(86010),u="tabItem_1uMI",o="tabItemActive_2DSg";var s=function(e){var n,r=e.lazy,a=e.block,s=e.defaultValue,d=e.values,m=e.groupId,c=e.className,f=t.Children.toArray(e.children),p=null!=d?d:f.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value,h=i(),k=h.tabGroupChoices,v=h.setTabGroupChoices,b=(0,t.useState)(g),N=b[0],D=b[1],F=[];if(null!=m){var y=k[m];null!=y&&y!==N&&p.some((function(e){return e.value===y}))&&D(y)}var w=function(e){var n=e.currentTarget,r=F.indexOf(n),t=p[r].value;D(t),null!=m&&(v(m,t),setTimeout((function(){var e,r,t,a,i,l,u,s;(e=n.getBoundingClientRect(),r=e.top,t=e.left,a=e.bottom,i=e.right,l=window,u=l.innerHeight,s=l.innerWidth,r>=0&&i<=s&&a<=u&&t>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(o),setTimeout((function(){return n.classList.remove(o)}),2e3))}),150))},_=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=F.indexOf(e.target)+1;r=F[t]||F[0];break;case"ArrowLeft":var a=F.indexOf(e.target)-1;r=F[a]||F[F.length-1]}null==(n=r)||n.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":a},c)},p.map((function(e){var n=e.value,r=e.label;return t.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,l.default)("tabs__item",u,{"tabs__item--active":N===n}),key:n,ref:function(e){return F.push(e)},onKeyDown:_,onFocus:w,onClick:w},null!=r?r:n)}))),r?(0,t.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},79443:function(e,n,r){"use strict";var t=(0,r(67294).createContext)(void 0);n.Z=t},85107:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(41788),a=r(67294),i=r(55064),l=function(e){function n(){return e.apply(this,arguments)||this}return(0,t.Z)(n,e),n.prototype.render=function(){return a.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},n}(a.Component)},93787:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});var t=r(41788),a=r(67294),i=r(17625),l="videoComponent_187V",u="headerClosed_1HK6",o="headerOpen_hP6H",s="minimize_1JZh",d="description_2U1a",m="title_1XFt",c="cardOpen_1vws",f=r(51436),p=r(86010),g=function(e){function n(){for(var n,r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i];return(n=e.call.apply(e,[this].concat(t))||this).state={open:!!n.props.expanded,visible:!1},n.videoRef=a.createRef(),n.isInViewport=function(){var e=n.videoRef.current.getBoundingClientRect(),r=e.top,t=e.bottom;r<window.innerHeight&&t>0?n.state.visible||n.setState({visible:!0}):n.state.visible&&n.setState({visible:!1})},n.onClick=function(){n.setState({open:!n.state.open}),n.isInViewport()},n}(0,t.Z)(n,e);var r=n.prototype;return r.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},r.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},r.render=function(){var e=this.props,n=e.title,r=e.src,t=e.type,g=e.children;return a.createElement("div",{ref:this.videoRef,className:l},this.state.open?a.createElement("div",{className:c},a.createElement("div",{className:o},n&&a.createElement("h5",{className:m},n),!this.props.expanded&&a.createElement("button",{className:(0,p.default)("button button--sm button--outline button--secondary",s),onClick:this.onClick},a.createElement(i.G,{icon:f.IQi})),g&&a.createElement("div",{className:d},g)),this.state.visible?a.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},a.createElement("source",{src:r,type:"video/"+(t||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(i.G,{icon:f.IJ7,spin:!0}))):a.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},a.createElement("div",{className:u},a.createElement("div",{className:m},n||"Video"),g&&a.createElement("div",{className:d},g)),this.state.visible?a.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},a.createElement("source",{src:r,type:"video/"+(t||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(i.G,{icon:f.IJ7,spin:!0}))))},n}(a.Component)},29402:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return c},default:function(){return p}});var t=r(22122),a=r(19756),i=(r(67294),r(3905)),l=r(85107),u=(r(44996),r(93787),r(58215)),o=(r(17625),["components"]),s={},d="\u270d\ufe0f Pr\xfcfungsfragen",m={unversionedId:"BYOD-Basics/pruefungsfragen",id:"version-24f/BYOD-Basics/pruefungsfragen",isDocsHomePage:!1,title:"\u270d\ufe0f Pr\xfcfungsfragen",description:"Vorbereitung",source:"@site/versioned_docs/version-24f/02-BYOD-Basics/007-pruefungsfragen.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/pruefungsfragen",permalink:"/24f/BYOD-Basics/pruefungsfragen",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/02-BYOD-Basics/007-pruefungsfragen.mdx",tags:[],version:"24f",sidebarPosition:7,frontMatter:{},sidebar:"version-24f/sidebar",previous:{title:"Software",permalink:"/24f/BYOD-Basics/software"},next:{title:"1. Python",permalink:"/24f/Software/python"}},c=[{value:"Vorbereitung",id:"vorbereitung",children:[]},{value:"Frage 1",id:"frage-1",children:[]},{value:"Frage 2",id:"frage-2",children:[]},{value:"Frage 3",id:"frage-3",children:[]},{value:"Frage 4",id:"frage-4",children:[]},{value:"Frage 5",id:"frage-5",children:[]},{value:"Frage 6",id:"frage-6",children:[]},{value:"Frage 7",id:"frage-7",children:[]},{value:"Frage 8",id:"frage-8",children:[]},{value:"Frage 9",id:"frage-9",children:[]},{value:"Frage 10",id:"frage-10",children:[]},{value:"Frage 11",id:"frage-11",children:[]},{value:"Frage 12",id:"frage-12",children:[]},{value:"Frage 13",id:"frage-13",children:[]},{value:"Frage 14",id:"frage-14",children:[]},{value:"Frage 15",id:"frage-15",children:[]},{value:"Frage 16",id:"frage-16",children:[]},{value:"Frage 17",id:"frage-17",children:[]},{value:"Frage 18",id:"frage-18",children:[]},{value:"Frage 19",id:"frage-19",children:[]},{value:"Frage 20",id:"frage-20",children:[]},{value:"Frage 21",id:"frage-21",children:[]},{value:"Frage 22",id:"frage-22",children:[]},{value:"Frage 23",id:"frage-23",children:[]},{value:"Frage 24",id:"frage-24",children:[]},{value:"Frage 25",id:"frage-25",children:[]},{value:"Frage 26",id:"frage-26",children:[]},{value:"Frage 27",id:"frage-27",children:[]},{value:"Frage 28",id:"frage-28",children:[]},{value:"Frage 29",id:"frage-29",children:[]},{value:"Frage 30",id:"frage-30",children:[]}],f={toc:c};function p(e){var n=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-pr\xfcfungsfragen"},"\u270d\ufe0f Pr\xfcfungsfragen"),(0,i.kt)("h3",{id:"vorbereitung"},"Vorbereitung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vorbereitung der Pr\xfcfung"),(0,i.kt)("li",{parentName:"ul"},"Material ",(0,i.kt)("a",{target:"_blank",href:r(61159).Z},"material_byod.zip")," herunterladen"),(0,i.kt)("li",{parentName:"ul"},"material_byod.zip entpacken und nach OneDrive verschieben"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wichtig"),': Eine Kopie von "material_byod.zip" muss weiterhin im Downloads-Ordner sein, damit alle Fragen sinnvoll sind.')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"frage-1"},"Frage 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'einen neuen Ordner namens "Flattermaus" im OneDrive Ordner "material_byod" erstellen'),(0,i.kt)("li",{parentName:"ul"},"diesen Ordner immer synchronisieren")),(0,i.kt)("h2",{id:"frage-2"},"Frage 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nightshift Modus von 21:30 bis 06:00 einschalten")),(0,i.kt)("h2",{id:"frage-3"},"Frage 3"),(0,i.kt)(l.Z,{mdxType:"OsTabs"},(0,i.kt)(u.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Bilschirmfoto vom Programmfenster Datei-Explorer erstellen"),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_explorer" umbenennen'),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben'))),(0,i.kt)(u.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eine Bilschirmfoto vom Programmfenster von Finder erstellen"),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto zu "01_finder" umbenennen'),(0,i.kt)("li",{parentName:"ul"},'Das Bilschirmfoto in den Ordner "material_byod" verschieben')))),(0,i.kt)("h2",{id:"frage-4"},"Frage 4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloads ordner \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Sortieren nach \xc4nderungsdatum, so dass die zuletzt heruntergeladenen Dokumente zuoberst angezeigt werden")),(0,i.kt)("h2",{id:"frage-5"},"Frage 5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},'ein neues Programm mit dem Namen "fledermaus" hinzuf\xfcgen')),(0,i.kt)("h2",{id:"frage-6"},"Frage 6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einen neuen virtuellen Desktop erstellen"),(0,i.kt)("li",{parentName:"ul"},"Auf neuem virtuellen Desktop einen Internet-Browser \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Auf dem anderen virtuellen Desktop Powerpoint starten")),(0,i.kt)("h2",{id:"frage-7"},"Frage 7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"sonnenuntergang.docx" \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt nur mit Tasten-Shortcuts)"),(0,i.kt)("li",{parentName:"ul"},'"ipsum dolor sit amet" ausw\xe4hlen und l\xf6schen'),(0,i.kt)("li",{parentName:"ul"},"Den ganzen zweiten Abschnitt ausw\xe4hlen und l\xf6schen"),(0,i.kt)("li",{parentName:"ul"},"Dokument abspeichern")),(0,i.kt)("h2",{id:"frage-8"},"Frage 8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finder und das Mail-Programm \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Mit Tasten-Shortcuts zwischen diesen Programmen hin- und herwechseln")),(0,i.kt)("h2",{id:"frage-9"},"Frage 9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mail-Programm \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Signatur-Einstellungen \xf6ffnen und eine Signatur erstellen (oder wenn vorhanden \xe4ndern)")),(0,i.kt)("h2",{id:"frage-10"},"Frage 10"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Ordner "programme" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},'Das Programm "create_mesh" \xf6ffnen, den ganzen Code kopieren'),(0,i.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Nachricht mit einer kurzen Begr\xfcssung, dem kopierten Code und einem kurzen Gruss an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"frage-11"},"Frage 11"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},"Ein Bildschrim-Video erstellen in welchem die Ausf\xfchrung des Programms gezeigt wird."),(0,i.kt)("li",{parentName:"ul"},'Bildschrimaufnahme im Ordner "material_byod" abspeichern/dorthin verschieben.')),(0,i.kt)("h2",{id:"frage-12"},"Frage 12"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Die kompirmierte Datei "material_byod.zip" vom Downloads-Ordner in den Ordner "material_byod" unter OneDrive verschieben.')),(0,i.kt)("h2",{id:"frage-13"},"Frage 13"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" komprimieren'),(0,i.kt)("li",{parentName:"ul"},"Den komprimierten Ordner per Mail an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"frage-14"},"Frage 14"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'In der globalen Suche nach "fledermaus.docx" suchen und dieses Dokument \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},"Den Wikipedia Link \xf6ffnen"),(0,i.kt)("li",{parentName:"ul"},"Die Einleitung kopieren und im Word Dokument einf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Das Word-Dokument speichern")),(0,i.kt)("h2",{id:"frage-15"},"Frage 15"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt mit Tasten-Shortcuts)"),(0,i.kt)("li",{parentName:"ul"},"den ganzen Text ausw\xe4hlen und l\xf6schen"),(0,i.kt)("li",{parentName:"ul"},"abspeichern"),(0,i.kt)("li",{parentName:"ul"},"\xc4nderung r\xfcckg\xe4ngig machen und wieder speichern")),(0,i.kt)("h2",{id:"frage-16"},"Frage 16"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Das Programm "hello_world.py" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},"(ab jetzt mit Tastenk\xfcrzel)"),(0,i.kt)("li",{parentName:"ul"},'Den Text "It\'s a beautiful Day." ausw\xe4hlen, ausschneiden und vor "Hello World" einf\xfcgen. (Resultat: ',(0,i.kt)("inlineCode",{parentName:"li"},'print("It\'s a beautiful Day. Hello World!")'),")"),(0,i.kt)("li",{parentName:"ul"},"abspeichern")),(0,i.kt)("h2",{id:"frage-17"},"Frage 17"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Das Programm "create_mesh.py" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},'Nach dem Wort "SQRT3" suchen. Wie oft kommt es im Programm vor?')),(0,i.kt)("h2",{id:"frage-18"},"Frage 18"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'print("Klammern: (), [], {}")')),(0,i.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,i.kt)("h2",{id:"frage-19"},"Frage 19"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" in VS Code \xf6ffnen'),(0,i.kt)("li",{parentName:"ul"},'ein neues Python-Programm "klammern.py" erstellen und folgenden Code eintippen:'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'print("Sonderzeichen: #, &, <, >")')),(0,i.kt)("li",{parentName:"ul"},"abspeichern und Programm ausf\xfchren")),(0,i.kt)("h2",{id:"frage-20"},"Frage 20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'ToDo-App \xf6ffnen und einen neuen Task erfassen: "Milch kaufen"')),(0,i.kt)("h2",{id:"frage-21"},"Frage 21"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Powerpoint-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"frage-22"},"Frage 22"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Excel-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"frage-23"},"Frage 23"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Eine neue Word-Datei erstellen und unter dem Namen "test_vorname_nachname" im Ordner "material_byod" abspeichern. (vorname/nachname ersetzen Sie durch Ihren eigenen Vor-/Nachnamen)')),(0,i.kt)("h2",{id:"frage-24"},"Frage 24"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Auf Forms eine neue Umfrage mit dem Titel "Testumfrage" erstellen'),(0,i.kt)("li",{parentName:"ul"},"Start Datum auf den 6.12.2020 setzen"),(0,i.kt)("li",{parentName:"ul"},"Eine Antwort pro Person zulassen"),(0,i.kt)("li",{parentName:"ul"},"Link zum Ausf\xfcllen kopieren und per Teams an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"frage-25"},"Frage 25"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Auf Google nach "Kalender" suchen'),(0,i.kt)("li",{parentName:"ul"},"Mit Touch-Gesten durch die Ergebnisse scrollen"),(0,i.kt)("li",{parentName:"ul"},"einen Link anklicken, die URL kopiereneinen neuen Tab \xf6ffnen und auf bitly.com gehen"),(0,i.kt)("li",{parentName:"ul"},"den kopierten Link k\xfcrzen")),(0,i.kt)("h2",{id:"frage-26"},"Frage 26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Ein 5 Sekunden Ausschnitt aus dem Video "yogi_bear.mp4" ausschneiden.'),(0,i.kt)("li",{parentName:"ul"},'Das zugeschnittene Video im Ordner "material_byod" unter dem Namen "bear" abspeichern.')),(0,i.kt)("h2",{id:"frage-27"},"Frage 27"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Teams \xf6ffnen und eine Video-Konferenz mit Herrn Hofer starten"),(0,i.kt)("li",{parentName:"ul"},"Den Bildschirm freigeben")),(0,i.kt)("h2",{id:"frage-28"},"Frage 28"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" zur Bearbeitung freigeben'),(0,i.kt)("li",{parentName:"ul"},"Den Link per Teams an Herrn Hofer schicken.")),(0,i.kt)("h2",{id:"frage-29"},"Frage 29"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Den Ordner "programme" immer auf ihrem Laptop synchronisieren'),(0,i.kt)("li",{parentName:"ul"},'Dateien aus dem Ordner "programme" nicht mehr immer synchronisieren.')),(0,i.kt)("h2",{id:"frage-30"},"Frage 30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Die Datei "sonnenuntergang.docx" auf Ihrem Laptop l\xf6schen'),(0,i.kt)("li",{parentName:"ul"},'Im OneDrive Papierkorb die Datei "sonnenuntergang.docx" wiederherstellen')))}p.isMDXComponent=!0},61159:function(e,n,r){"use strict";n.Z=r.p+"assets/files/material_byod-728aae2f4f6e98014955e8e92ac8bbcd.zip"}}]);