(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1593],{181:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(1788),i=n(7294),l=n(7625),r="videoComponent_187V",s="headerClosed_1HK6",m="headerOpen_hP6H",p="minimize_1JZh",o="description_2U1a",k="title_1XFt",u="cardOpen_1vws",d=n(1436),c=n(6010),N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).state={open:!1,visible:!1},t.videoRef=i.createRef(),t.isInViewport=function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,a=e.bottom;n<window.innerHeight&&a>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})},t.onClick=function(){t.setState({open:!t.state.open}),t.isInViewport()},t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,a=e.type,N=e.children;return i.createElement("div",{ref:this.videoRef,className:r},this.state.open?i.createElement("div",{className:u},i.createElement("div",{className:m},t&&i.createElement("h5",{className:k},t),i.createElement("button",{className:(0,c.default)("button button--sm button--outline button--secondary",p),onClick:this.onClick},i.createElement(l.G,{icon:d.IQi})),N&&i.createElement("div",{className:o},N)),this.state.visible?i.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},i.createElement("source",{src:n,type:"video/"+(a||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(l.G,{icon:d.IJ7,spin:!0}))):i.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},i.createElement("div",{className:s},i.createElement("div",{className:k},t||"Video"),N&&i.createElement("div",{className:o},N)),this.state.visible?i.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,height:"150px",loop:!0},i.createElement("source",{src:n,type:"video/"+(a||"mp4")})):i.createElement("div",{style:{height:"150px"}},i.createElement(l.G,{icon:d.IJ7,spin:!0}))))},t}(i.Component)},7468:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return N},toc:function(){return h},default:function(){return f}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),r=n(5107),s=n(4996),m=n(181),p=n(8215),o=n(7625),k=n(1417),u=["components"],d={},c="Systemnavigation",N={unversionedId:"byod-basics/navigation",id:"version-25h/byod-basics/navigation",isDocsHomePage:!1,title:"Systemnavigation",description:"Tastatur",source:"@site/versioned_docs/version-25h/byod-basics/004-navigation.mdx",sourceDirName:"byod-basics",slug:"/byod-basics/navigation",permalink:"/ofi-blog/25h/byod-basics/navigation",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/byod-basics/004-navigation.mdx",version:"25h",sidebarPosition:4,frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"Dateiexplorer",permalink:"/ofi-blog/25h/byod-basics/dateiexplorer"},next:{title:"Software",permalink:"/ofi-blog/25h/byod-basics/software"}},h=[{value:"Tastatur",id:"tastatur",children:[{value:"Tastenk\xfcrzel",id:"tastenk\xfcrzel",children:[]},{value:"Pfeiltasten",id:"pfeiltasten",children:[]},{value:"Klammern",id:"klammern",children:[]},{value:"Weitere g\xe4ngige Zeichen",id:"weitere-g\xe4ngige-zeichen",children:[]}]},{value:"Touch-Gesten",id:"touch-gesten",children:[{value:"Klicken durch Tippen",id:"klicken-durch-tippen",children:[]},{value:"Rechtsklick",id:"rechtsklick",children:[]},{value:"Scrollen",id:"scrollen",children:[]},{value:"Alle Programme Anzeigen",id:"alle-programme-anzeigen",children:[]},{value:"Virtuelle Desktops",id:"virtuelle-desktops",children:[]}]}],g={toc:h};function f(e){var t=e.components,d=(0,i.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"systemnavigation"},"Systemnavigation"),(0,l.kt)("h2",{id:"tastatur"},"Tastatur"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Windows"),"-Taste) ",(0,l.kt)(o.G,{icon:k.ts2,mdxType:"FontAwesomeIcon"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Caps-Lock"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn")))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Befehlstaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2318")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Option")," oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2325")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2303")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn"))))),(0,l.kt)("h3",{id:"tastenk\xfcrzel"},"Tastenk\xfcrzel"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Ctrl-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(o.G,{icon:k.ts2,mdxType:"FontAwesomeIcon"}),(0,l.kt)("b",null,"-Tabulatortaste"),": Alle ge\xf6ffneten Apps anzeigen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)"))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Cmd-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)")))),(0,l.kt)("h3",{id:"pfeiltasten"},"Pfeiltasten"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Shift-Pfeiltasten")," ganze W\xf6rter selektieren"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win-Pfeiltasten")," Fenster auf dem Bildschirm anordnen"))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Alt-Pfeiltasten")," ganze W\xf6rter selektieren")))),(0,l.kt)("h3",{id:"klammern"},"Klammern"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 9"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xe4")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + $)"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xfc")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + !"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^")," und dann ein Leerschlag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"))))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+(")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmd+Click")))))),(0,l.kt)("h3",{id:"weitere-g\xe4ngige-zeichen"},"Weitere g\xe4ngige Zeichen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + <")))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + g")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + option + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + >"))))),(0,l.kt)("h2",{id:"touch-gesten"},"Touch-Gesten"),(0,l.kt)("h3",{id:"klicken-durch-tippen"},"Klicken durch Tippen"),(0,l.kt)("p",null,"Auf modernen Touchpads reicht ein Antippen aus, um einen Klick auszul\xf6sen."),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8185).Z}))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7694).Z})))),(0,l.kt)("h3",{id:"rechtsklick"},"Rechtsklick"),(0,l.kt)("p",null,"Auch hier kann wahlweise Geklickt oder nur getippt werdem."),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4710).Z}))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7684).Z})))),(0,l.kt)("h3",{id:"scrollen"},"Scrollen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(821).Z}))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(432).Z})))),(0,l.kt)("h3",{id:"alle-programme-anzeigen"},"Alle Programme Anzeigen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3967).Z})),(0,l.kt)("p",null,"(",(0,l.kt)("em",{parentName:"p"},"Diese Option ist nicht bei allen Touchpads verf\xfcgbar."),")")),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Mission Control"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3607).Z})))),(0,l.kt)("h3",{id:"virtuelle-desktops"},"Virtuelle Desktops"),(0,l.kt)("p",null,"Mit virtuellen Desktops lassen sich mehrere Arbeitsbereiche und Fensteranordnungen erstellen."),(0,l.kt)("h4",{id:"erstellen"},"Erstellen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Virtuelle Desktops: Mit ",(0,l.kt)("inlineCode",{parentName:"p"},"Win-Tabulatortaste")," alle ge\xf6ffneten Fenster anzeigen und oben im Fenster einen neuen Virtuellen Desktop erstellen:"),(0,l.kt)(m.Z,{src:(0,s.Z)("/img/byod-basics/win/create_virtual_desktops.mp4"),mdxType:"Video"})),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)(m.Z,{src:(0,s.Z)("/img/byod-basics/osx/create_virtual_desktops.mp4"),mdxType:"Video"}))),(0,l.kt)("h4",{id:"wechseln"},"Wechseln"),(0,l.kt)("p",null,"Mit folgenden Gesten kann zwischen diesen Desktops hin- und hergewechselt werden.","*"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3825).Z}))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5547).Z})))),(0,l.kt)("p",null,"*"," Je nach Voreinstellungen ist diese Geste mit nur 3 statt 4 Fingern zu machen."),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(p.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/touchpad-gesten-f%C3%BCr-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741"},"hier"))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/de-ch/HT204895"},"hier")))))}f.isMDXComponent=!0},5547:function(e,t,n){"use strict";t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},7694:function(e,t,n){"use strict";t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},3607:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},7684:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},432:function(e,t,n){"use strict";t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},3825:function(e,t,n){"use strict";t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},8185:function(e,t,n){"use strict";t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},3967:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},4710:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},821:function(e,t,n){"use strict";t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"}}]);