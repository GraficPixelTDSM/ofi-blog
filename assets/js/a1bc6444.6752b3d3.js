(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9680],{8215:function(e,t,n){"use strict";var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(7294),a=n(9443);var r=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var d=37,c=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,m=e.values,p=e.groupId,u=e.className,h=r(),k=h.tabGroupChoices,f=h.setTabGroupChoices,b=(0,i.useState)(a),g=b[0],v=b[1],y=i.Children.toArray(e.children),w=[];if(null!=p){var N=k[p];null!=N&&N!==g&&m.some((function(e){return e.value===N}))&&v(N)}var Z=function(e){var t=e.currentTarget,n=w.indexOf(t),i=m[n].value;v(i),null!=p&&(f(p,i),setTimeout((function(){var e,n,i,a,r,s,o,d;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,s=window,o=s.innerHeight,d=s.innerWidth,n>=0&&r<=d&&a<=o&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var i=w.indexOf(e.target)+1;n=w[i]||w[0];break;case d:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":n},u)},m.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.default)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:Z,onClick:Z},n)}))),t?(0,i.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},5107:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(1788),a=n(7294),r=n(5064),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return a.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(a.Component)},181:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(1788),a=n(7294),r=n(7625),s="headerClosed_1HK6",o="headerOpen_hP6H",l="minimize_1JZh",d="description_2U1a",c="title_1XFt",m="cardOpen_1vws",p=n(1436),u=n(6010),h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={open:!1,visible:!1},t.videoRef=a.createRef(),t.isInViewport=function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,i=e.bottom;n<window.innerHeight&&i>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})},t.onClick=function(){t.setState({open:!t.state.open}),t.isInViewport()},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,i=e.type,h=e.children;return a.createElement("div",{ref:this.videoRef},this.state.open?a.createElement("div",{className:m},a.createElement("div",{className:o},t&&a.createElement("h5",{className:c},t),a.createElement("button",{className:(0,u.default)("button button--sm button--outline button--secondary",l),onClick:this.onClick},a.createElement(r.G,{icon:p.IQi})),h&&a.createElement("div",{className:d},h)),this.state.visible?a.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},a.createElement("source",{src:n,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(r.G,{icon:p.IJ7,spin:!0}))):a.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},a.createElement("div",{className:s},a.createElement("div",{className:c},t||"Video"),h&&a.createElement("div",{className:d},h)),this.state.visible?a.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,height:"150px",loop:!0},a.createElement("source",{src:n,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(r.G,{icon:p.IJ7,spin:!0}))))},t}(a.Component)},9918:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return h},default:function(){return f}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),s=n(5107),o=n(4996),l=n(181),d=n(8215),c=(n(7625),["components"]),m={},p="Software",u={unversionedId:"byod-basics/software",id:"version-24f/byod-basics/software",isDocsHomePage:!1,title:"Software",description:"Der Ausdruck Software ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort Hardware das erste Mal verwendet wurde. Dabei bezeichnet Hardware alle physischen Bestandteile eines Computers. In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet.",source:"@site/versioned_docs/version-24f/byod-basics/006-software.mdx",sourceDirName:"byod-basics",slug:"/byod-basics/software",permalink:"/ofi-blog/24f/byod-basics/software",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/byod-basics/006-software.mdx",version:"24f",lastUpdatedAt:1628344586,formattedLastUpdatedAt:"8/7/2021",sidebarPosition:6,frontMatter:{},sidebar:"version-24f/sidebar",previous:{title:"Systemnavigation",permalink:"/ofi-blog/24f/byod-basics/navigation"}},h=[{value:"Fotos / Videos",id:"fotos--videos",children:[{value:"Bildschrimfoto erstellen",id:"bildschrimfoto-erstellen",children:[]},{value:"Bildschirmaufnahme erstellen",id:"bildschirmaufnahme-erstellen",children:[]},{value:"Foto zuschneiden/drehen/bearbeiten (basics)",id:"foto-zuschneidendrehenbearbeiten-basics",children:[]}]},{value:"Video zuschneiden",id:"video-zuschneiden",children:[]},{value:"Browser",id:"browser",children:[]},{value:"Mailprogramm &amp; Kalender",id:"mailprogramm--kalender",children:[]},{value:"ToDo",id:"todo",children:[]},{value:"Word/Powerpoint/Excel",id:"wordpowerpointexcel",children:[]},{value:"Forms",id:"forms",children:[]},{value:"Teams",id:"teams",children:[{value:"Nachrichten an Lehrpersonen",id:"nachrichten-an-lehrpersonen",children:[]}]},{value:"OneDrive",id:"onedrive",children:[]}],k={toc:h};function f(e){var t=e.components,m=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},k,m,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"software"},"Software"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Der Ausdruck ",(0,r.kt)("strong",{parentName:"p"},"Software")," ist ein Kunstwort, das von John W. Tukey im Jahr 1958 im American Mathematical Monthly als Gegenst\xfcck zu dem wesentlich \xe4lteren Wort ",(0,r.kt)("strong",{parentName:"p"},"Hardware")," das erste Mal verwendet wurde. Dabei bezeichnet ",(0,r.kt)("strong",{parentName:"p"},"Hardware alle physischen Bestandteile eines Computers"),". In diesem Sinn k\xf6nnten unter Software \u2013 als dem Gegenst\xfcck zur Hardware \u2013 grunds\xe4tzlich alle elektronisch gespeicherten Daten verstanden werden. Als Software werden jedoch nur Programme (bspw. Word oder Firefox) bezeichnet - die damit erzeugten Dateien/Daten werden jedoch nicht als solche bezeichnet. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("p",null,'Im folgenden werden g\xe4ngige Abl\xe4ufe zu verschiedener Software auf dem BYOD-Ger\xe4t gezeigt. Oft gibt es mehr als eine M\xf6glichkeit, das gew\xfcnschte Ziel zu erreichen (bspw. \xfcber Tastenk\xfcrzel, sog. "Shortcuts"). Es steht Ihnen frei, auch eigene Varianten auszuprobieren oder sich anzueignen. '),(0,r.kt)("h2",{id:"fotos--videos"},"Fotos / Videos"),(0,r.kt)("h3",{id:"bildschrimfoto-erstellen"},"Bildschrimfoto erstellen"),(0,r.kt)(s.Z,{mdxType:"OsTabs"},(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ausschneiden und Skizzieren",src:n(698).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unter dem Startmen\xfc nach ",(0,r.kt)("inlineCode",{parentName:"li"},"Ausschneiden und Skizzieren")," (franz\xf6sisch: ",(0,r.kt)("inlineCode",{parentName:"li"},"Capture et croquis"),") suchen."),(0,r.kt)("li",{parentName:"ol"},"Es gibt drei Optionen um eine Bildschirmaufnahme zu erfassen:"),(0,r.kt)("li",{parentName:"ol"},"der ganze Bildschirm"),(0,r.kt)("li",{parentName:"ol"},"ein einzelnes Fenster"),(0,r.kt)("li",{parentName:"ol"},"ein selbst gew\xe4hlter Ausschnitt"))),(0,r.kt)(d.Z,{value:"mac",mdxType:"TabItem"})),(0,r.kt)("h3",{id:"bildschirmaufnahme-erstellen"},"Bildschirmaufnahme erstellen"),(0,r.kt)(s.Z,{mdxType:"OsTabs"},(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"Unter Windows gibt es aktuell keine M\xf6glichkeit, den gesamten Bildschirm (inkl. dem Desktop und dem Dateiexplorer) aufzunehmen.\nHier springt ",(0,r.kt)("strong",{parentName:"p"},"Powerpoint")," ein - in einem Powerpointdokument kann unter ",(0,r.kt)("inlineCode",{parentName:"p"},"Einf\xfcgen>Bildschirmaufzeichnung"),' eine Bildschirmaufnahme gestartet werden.\nDas aufgenommene Video muss dann gespeichert werden - mittels rechtsklick auf das Video und dann "Medien speichern unter...".'),(0,r.kt)("p",null,"Optional kann das Video zuerst noch zugeschnitten werden."),(0,r.kt)(l.Z,{src:(0,o.Z)("/img/byod-basics/win/create_screencast.mp4"),mdxType:"Video"})),(0,r.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{src:(0,o.Z)("/img/byod-basics/osx/create_screencast.mp4"),mdxType:"Video"}))),(0,r.kt)("h3",{id:"foto-zuschneidendrehenbearbeiten-basics"},"Foto zuschneiden/drehen/bearbeiten (basics)"),(0,r.kt)(s.Z,{mdxType:"OsTabs"},(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Zeichnung hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/win/edit_picture1.mp4"),mdxType:"Video"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zeichnen")))),(0,r.kt)(l.Z,{title:"Zuschneiden/Drehen",src:(0,o.Z)("/img/byod-basics/win/edit_picture2.mp4"),mdxType:"Video"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Foto doppelklicken (\xf6ffnen in "Fotos")'),(0,r.kt)("li",{parentName:"ol"},"Direkt zuschneiden oder drehen"),(0,r.kt)("li",{parentName:"ol"},"(Alternativ: ",(0,r.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Bearbeiten"),")")))),(0,r.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Zeichnung hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/osx/edit_picture1.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Zuschneiden/Drehen",src:(0,o.Z)("/img/byod-basics/osx/edit_picture2.mp4"),mdxType:"Video"}))),(0,r.kt)("h2",{id:"video-zuschneiden"},"Video zuschneiden"),(0,r.kt)(s.Z,{mdxType:"OsTabs"},(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Video zuschneiden",src:(0,o.Z)("/img/byod-basics/win/shorten_video.mp4"),mdxType:"Video"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Video in "Fotos" \xf6ffnen'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Bearbeiten > Zuschneiden"))))),(0,r.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Video zuschneiden",src:(0,o.Z)("/img/byod-basics/osx/shorten_video.mp4"),mdxType:"Video"}))),(0,r.kt)("h2",{id:"browser"},"Browser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Internetseite aufrufen (bspw. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://srf.ch"),")"),(0,r.kt)("li",{parentName:"ul"},"Auf Seite suchen (",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+f")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"Einstellungen > Auf Seite suchen"),")"),(0,r.kt)("li",{parentName:"ul"},"Seite drucken (",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+p"),")"),(0,r.kt)("li",{parentName:"ul"},"URL k\xfcrzen um sie einfacher zu teilen, bspw. mit ",(0,r.kt)("a",{parentName:"li",href:"https://bitly.com/"},"https://bitly.com/")),(0,r.kt)("li",{parentName:"ul"},"Neuer Tab \xf6ffnen (",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+t"),")"),(0,r.kt)("li",{parentName:"ul"},"Privates Fenster \xf6ffnen (",(0,r.kt)("em",{parentName:"li"},"Inkognito Mode"),") - hier werden alle pers\xf6nlichen Daten nach dem Schliessen ",(0,r.kt)("em",{parentName:"li"},"aller"),' privater Fenster wieder gel\xf6scht. So werden Sie bspw. auch von allen angemeldeten Websites automatisch abgemeldet und auch "Automatische Logins" werden verworfen. Auf fremden Laptops empfielt sich also der private Modus.  ')),(0,r.kt)("h2",{id:"mailprogramm--kalender"},"Mailprogramm & Kalender"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Voraussetzung"),' GBSL Mail ist in einem Mailprogramm (bspw. im Programm "Mail") Eingerichtet.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Neue Mail schreiben")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Neuen Kalender-Eintrag erstellen (bspw. \xfcber die Kalender-App)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mail-Signatur hinzuf\xfcgen/\xe4ndern"))),(0,r.kt)(s.Z,{mdxType:"OsTabs"},(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("img",{src:(0,o.Z)("/img/byod-basics/win/mail_app.png"),width:"150px",height:"150px"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Mail Einrichten"),(0,r.kt)("p",null,"In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Einstellungen \xf6ffnen:\n",(0,r.kt)("img",{alt:"Einstellungen \xf6ffnen",src:n(2875).Z})),(0,r.kt)("li",{parentName:"ol"},"Konto hinzuf\xfcgen:\n",(0,r.kt)("img",{alt:"Konto hinzuf\xfcgen",src:n(5201).Z})),(0,r.kt)("li",{parentName:"ol"},"Exchange-Konto hinzuf\xfcgen:\n",(0,r.kt)("img",{alt:"Exchange-Konto hinzuf\xfcgen",src:n(4026).Z})))),(0,r.kt)(l.Z,{title:"Signatur hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/win/mail_signature.mp4"),mdxType:"Video"})),(0,r.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("img",{src:(0,o.Z)("/img/byod-basics/osx/mail_app.webp"),width:"150px",height:"150px"}),(0,r.kt)("p",null,"  In der Mail-App einen neuen Exchange Mailaccount hinzuf\xfcgen:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Konto hinzuf\xfcgen:\n",(0,r.kt)("img",{alt:"Konto hinzuf\xfcgen",src:n(8251).Z})),(0,r.kt)("li",{parentName:"ol"},"Exchange-Konto hinzuf\xfcgen:\n",(0,r.kt)("img",{alt:"Exchange-Konto hinzuf\xfcgen",src:n(1902).Z}))),(0,r.kt)(l.Z,{title:"Signatur hinzuf\xfcgen",src:(0,o.Z)("/img/byod-basics/osx/mail_signature.mp4"),mdxType:"Video"}))),(0,r.kt)("h1",{id:"office-365"},"Office 365"),(0,r.kt)("h2",{id:"todo"},"ToDo"),(0,r.kt)("p",null,"Unter ",(0,r.kt)("a",{parentName:"p",href:"https://to-do.office.com/"},"https://to-do.office.com/"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-in/p/microsoft-to-do-lists-tasks-reminders/9nblggh5r558"},"Auf dem Laptop installieren"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/de/app/microsoft-to-do/id1212616790"},"Auf dem iPhone installieren"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.microsoft.todos&hl=de"},"Auf Android installieren"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Neue ToDo-Liste erstellen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Neue ToDos erfassen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Erinnerung einschalten"))),(0,r.kt)("h2",{id:"wordpowerpointexcel"},"Word/Powerpoint/Excel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Neue Datei erstellen"),(0,r.kt)("li",{parentName:"ul"},"Datei in einem vorgegebenen Ordner auf dem Computer speichern")),(0,r.kt)("h2",{id:"forms"},"Forms"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://forms.office.com"},"https://forms.office.com")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Neue Umfrage erstellen und teilen"),(0,r.kt)("li",{parentName:"ul"},"Anonyme Umfrage"),(0,r.kt)("li",{parentName:"ul"},"Mit Angabe der Email-Adresse"),(0,r.kt)("li",{parentName:"ul"},"Mit Zeitbeschr\xe4nkung"),(0,r.kt)("li",{parentName:"ul"},"Mit Benachrichtigung")),(0,r.kt)("h2",{id:"teams"},"Teams"),(0,r.kt)(s.Z,{mdxType:"OsTabs"},(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:(0,r.kt)("span",null,"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks ",(0,r.kt)("code",null,"`code`")),src:(0,o.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Bildschirm freigeben",src:(0,o.Z)("/img/byod-basics/win/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Ordner Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Benachrichtigungen verwalten",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Zoom Faktor einstellen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"})),(0,r.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Nachrichten mit \xdcberschrift verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_new_message.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Nachrichten mit Code-Teilen verfassen: Code kommt zwischen Backticks `code`",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_inline_code.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Nachrichten mit Codebl\xf6cken verfassen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_code.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Bildschirm freigeben",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_share_screen.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Ordner Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_sync.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Benachrichtigungen verwalten",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_configure_alerts.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Zoom Faktor einstellen",src:(0,o.Z)("/img/byod-basics/osx/ms_teams_zoom.mp4"),mdxType:"Video"}))),(0,r.kt)("h3",{id:"nachrichten-an-lehrpersonen"},"Nachrichten an Lehrpersonen"),(0,r.kt)("p",null,"Nachrichten an Lehrpersonen werden mit ",(0,r.kt)("strong",{parentName:"p"},"Sorgfalt")," geschrieben. Es geh\xf6rt eine kurze ",(0,r.kt)("strong",{parentName:"p"},"Anrede")," sowie eine ",(0,r.kt)("strong",{parentName:"p"},"Schlussformel")," dazu. In der Schlussformel am Ende der Nachricht halten Sie nebst ihrem Namen auch die ",(0,r.kt)("strong",{parentName:"p"},"Klassenbezeichnung")," fest."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lieber Herr M\xfcller"),(0,r.kt)("p",{parentName:"blockquote"},'Ist bei der Nettobilanz beim Citratzyklus mit "aktiver Essigs\xe4ure" die gebundene Essigs\xe4ure gemeint?'),(0,r.kt)("p",{parentName:"blockquote"},"Mit freundlichen Gr\xfcssen"),(0,r.kt)("p",{parentName:"blockquote"},"Mark Muster, 24z")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Teams \u2260 WhatsApp")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Auch wenn Sie nur eine kurze Frage haben geh\xf6rt die Anrede und Schlussformel dazu (es ist ",(0,r.kt)("strong",{parentName:"p"},"kein WhatsApp-Chat unter Freunden"),"!)."),(0,r.kt)("p",{parentName:"div"},"Entwickelt sich durch die Antwort der Lehrperson einen Chat-Charakter (daher die Lehrperson schreibt innerhalb kurzer Zeit zur\xfcck und Sie haben eine R\xfcckfrage zum selben Thema), darf die Anrede und die Schlussformel anschliessend f\xfcr diese Unterhaltung weggelassen werden."))),(0,r.kt)("h2",{id:"onedrive"},"OneDrive"),(0,r.kt)(s.Z,{mdxType:"OsTabs"},(0,r.kt)(d.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Auf den Laptop Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Dateien freigeben",src:(0,o.Z)("/img/byod-basics/win/onedrive_share.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,r.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,r.kt)(l.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,o.Z)("/img/byod-basics/win/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,o.Z)("/img/byod-basics/win/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,r.kt)(l.Z,{title:"Dateiversionsverlauf",src:(0,o.Z)("/img/byod-basics/win/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,o.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,r.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht."))),(0,r.kt)(d.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(l.Z,{title:"Auf den Laptop Synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_sync.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Dateien freigeben",src:(0,o.Z)("/img/byod-basics/osx/onedrive_share.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"F\xfcr freigegebene Dateien k\xf6nnen die Berechtigungen online ge\xe4ndert oder widerrufen werden: ",(0,r.kt)("inlineCode",{parentName:"p"},"Rechtsklick > Online anzeigen > ... > Zugriff verwalten"))),(0,r.kt)(l.Z,{title:"Dateien/Ordner immer synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_keep_on_device.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Dateien/Ordner nicht mehr immer synchronisieren",src:(0,o.Z)("/img/byod-basics/osx/onedrive_speicher_freigeben.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"  ",(0,r.kt)("inlineCode",{parentName:"p"},"Speicherplatz freigeben")," - die Dateien sind weiterhin auf OneDrive verf\xfcgbar, es braucht aber Internet damit Sie diese auf Ihrem Ger\xe4t verwenden k\xf6nnen.")),(0,r.kt)(l.Z,{title:"Dateiversionsverlauf",src:(0,o.Z)("/img/byod-basics/osx/onedrive_versionhistory.mp4"),mdxType:"Video"}),(0,r.kt)(l.Z,{title:"Gel\xf6schte Dateien Wiederherstellen",src:(0,o.Z)("/img/byod-basics/osx/onedrive_restore_deleted.mp4"),mdxType:"Video"},(0,r.kt)("p",null,"Gel\xf6schte Dateien k\xf6nnen ",(0,r.kt)("strong",{parentName:"p"},"online")," w\xe4hrend 30 Tagen wiederhergestellt werden. Danach sind sie definitiv gel\xf6scht.")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,r.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Software#Etymologie"},"Wikipedia"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},8251:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mail_add_account-2781d50b2265c40ab3980d19e3946835.png"},1902:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mail_add_exchange-0a6ddd45f625eff7e5880a2c76c0a6af.png"},698:function(e,t,n){"use strict";t.Z=n.p+"assets/images/apps_ausschneiden_skizzieren-f5c35c4f4c11ff5caa1198b54bbd11bc.png"},2875:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mail_add_account_01-bdf9885a7616907a6ef06afa5588efae.png"},5201:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mail_add_account_02-9c73bcf7c83df2b6f5411d410224b316.png"},4026:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mail_add_account_03-98a892a644600fd5de5f21ed0902f364.png"}}]);