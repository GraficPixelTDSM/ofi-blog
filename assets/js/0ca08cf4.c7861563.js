(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8267],{8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,m=39;var u=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,k=e.groupId,d=e.className,c=l(),N=c.tabGroupChoices,f=c.setTabGroupChoices,h=(0,a.useState)(i),g=h[0],b=h[1],C=a.Children.toArray(e.children),T=[];if(null!=k){var v=N[k];null!=v&&v!==g&&u.some((function(e){return e.value===v}))&&b(v)}var Z=function(e){var t=e.currentTarget,n=T.indexOf(t),a=u[n].value;b(a),null!=k&&(f(k,a),setTimeout((function(){var e,n,a,i,l,r,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,l=e.right,r=window,s=r.innerHeight,p=r.innerWidth,n>=0&&l<=p&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case m:var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case p:var i=T.indexOf(e.target)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.default)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:y,onFocus:Z,onClick:Z},n)}))),t?(0,a.cloneElement)(C.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},5107:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(1788),i=n(7294),l=n(5064),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return i.createElement(l.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(i.Component)},147:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(1788),i=n(7294),l=n(7625),r=n(1436),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={open:!1},t.onClick=function(){t.setState({open:!t.state.open})},t}return(0,a.Z)(t,e),t.prototype.render=function(){return this.state.open?i.createElement("div",null,i.createElement("button",{className:"button button--sm button--outline button--secondary",style:{float:"right"},onClick:this.onClick},i.createElement(l.G,{icon:r.IQi})),i.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},i.createElement("source",{src:this.props.src,type:"video/"+(this.props.type||"mp4")}))):i.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between"}},i.createElement("div",null,"Video"),i.createElement("video",{autoPlay:!0,height:"150px",loop:!0},i.createElement("source",{src:this.props.src,type:"video/"+(this.props.type||"mp4")})))},t}(i.Component)},9235:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return N},default:function(){return h}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),r=n(5107),s=n(147),o=n(8215),p=n(7625),m=n(1417),u=["components"],k={},d="Systemnavigation",c={unversionedId:"byod-basics/navigation",id:"version-24i/byod-basics/navigation",isDocsHomePage:!1,title:"Systemnavigation",description:"Tastatur",source:"@site/versioned_docs/version-24i/byod-basics/004-navigation.mdx",sourceDirName:"byod-basics",slug:"/byod-basics/navigation",permalink:"/ofi-blog/24i/byod-basics/navigation",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/byod-basics/004-navigation.mdx",version:"24i",lastUpdatedAt:1628279941,formattedLastUpdatedAt:"8/6/2021",sidebarPosition:4,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Dateiexplorer",permalink:"/ofi-blog/24i/byod-basics/dateiexplorer"},next:{title:"software",permalink:"/ofi-blog/24i/byod-basics/software"}},N=[{value:"Tastatur",id:"tastatur",children:[{value:"Tastenk\xfcrzel",id:"tastenk\xfcrzel",children:[]},{value:"Pfeiltasten",id:"pfeiltasten",children:[]},{value:"Klammern",id:"klammern",children:[]},{value:"Weitere g\xe4ngige Zeichen",id:"weitere-g\xe4ngige-zeichen",children:[]}]},{value:"Touch-Gesten",id:"touch-gesten",children:[{value:"Klicken durch Tippen",id:"klicken-durch-tippen",children:[]},{value:"Rechtsklick",id:"rechtsklick",children:[]},{value:"Scrollen",id:"scrollen",children:[]},{value:"Alle Programme Anzeigen",id:"alle-programme-anzeigen",children:[]},{value:"Virtuelle Desktops",id:"virtuelle-desktops",children:[]}]}],f={toc:N};function h(e){var t=e.components,k=(0,i.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,k,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"systemnavigation"},"Systemnavigation"),(0,l.kt)("h2",{id:"tastatur"},"Tastatur"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Windows"),"-Taste) ",(0,l.kt)(p.G,{icon:m.ts2,mdxType:"FontAwesomeIcon"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Caps-Lock"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn")))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Befehlstaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2318")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Umschalttaste"),") ",(0,l.kt)("strong",{parentName:"li"},"\u21e7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Option")," oder ",(0,l.kt)("strong",{parentName:"li"},"Wahltaste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2325")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl")," (oder ",(0,l.kt)("strong",{parentName:"li"},"Control-Taste"),"-Taste) ",(0,l.kt)("strong",{parentName:"li"},"\u2303")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Feststelltaste")," ",(0,l.kt)("strong",{parentName:"li"},"\u21ea")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Funktionstaste")," ",(0,l.kt)("em",{parentName:"li"},"Fn"))))),(0,l.kt)("h3",{id:"tastenk\xfcrzel"},"Tastenk\xfcrzel"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Explorer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Ctrl-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(p.G,{icon:m.ts2,mdxType:"FontAwesomeIcon"}),(0,l.kt)("b",null,"-Tabulatortaste"),": Alle ge\xf6ffneten Apps anzeigen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)"))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-X"),": Ausgew\xe4hltes Objekt aus dem Originaltext l\xf6schen und in die Zwischenablage kopieren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-C"),": Ausgew\xe4hltes Objekt in die Zwischenablage kopieren. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-V"),": Den Inhalt der Zwischenablage in das aktuelle Dokument oder die aktuelle App einf\xfcgen. Dies funktioniert auch mit Dateien im Finder."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Z"),': "R\xfcckg\xe4ngig machen" - Den vorherigen Befehl widerrufen. Du kannst anschlie\xdfend zum Wiederholen den Tastaturkurzbefehl ',(0,l.kt)("em",{parentName:"li"},"Shift-Cmd-Z")," dr\xfccken, um den Widerrufen-Befehl umzukehren."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-A"),": Alle Objekte ausw\xe4hlen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-F"),": Elemente in einem Dokument suchen oder ein Suchfenster \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-P"),": Das aktuelle Dokument drucken."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-S"),": Das aktuelle Dokument sichern."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-T"),": Einen neuen Tab \xf6ffnen."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Tabulatortaste"),": Unter den ge\xf6ffneten Apps zur zuletzt verwendeten wechseln."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cmd-Leertaste"),": Das Spotlight-Suchfeld ein- oder ausblenden."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Enter"),": Neue Zeile im selben Absatz (oder eine neue Zeile in Teams/WhatsApp ohne zu senden)")))),(0,l.kt)("h3",{id:"pfeiltasten"},"Pfeiltasten"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Ctrl-Shift-Pfeiltasten")," ganze W\xf6rter selektieren"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Win-Pfeiltasten")," Fenster auf dem Bildschirm anordnen"))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Pfeiltasten")," Text ausw\xe4hlen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Alt-Pfeiltasten")," ganze W\xf6rter \xfcberspringen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Shift-Alt-Pfeiltasten")," ganze W\xf6rter selektieren")))),(0,l.kt)("h3",{id:"klammern"},"Klammern"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + 9"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xe4")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + $)"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (normalerweise: ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + \xfc")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt Gr + !"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^")," und dann ein Leerschlag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+Click"))))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"()")," ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 8")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"shift + 9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"{}")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+(")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"[]")," ",(0,l.kt)("inlineCode",{parentName:"p"},"option+5")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"option+6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backtick ",(0,l.kt)("code",null,"`"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift + ^"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Link \xf6ffnen: ",(0,l.kt)("inlineCode",{parentName:"p"},"Cmd+Click")))))),(0,l.kt)("h3",{id:"weitere-g\xe4ngige-zeichen"},"Weitere g\xe4ngige Zeichen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Alt Gr + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift + <")))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + g")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"+"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"option + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\\"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + option + 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"<")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"shift + >"))))),(0,l.kt)("h2",{id:"touch-gesten"},"Touch-Gesten"),(0,l.kt)("h3",{id:"klicken-durch-tippen"},"Klicken durch Tippen"),(0,l.kt)("p",null,"Auf modernen Touchpads reicht ein Antippen aus, um einen Klick auszul\xf6sen."),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8185).Z}))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7694).Z})))),(0,l.kt)("h3",{id:"rechtsklick"},"Rechtsklick"),(0,l.kt)("p",null,"Auch hier kann wahlweise Geklickt oder nur getippt werdem."),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4710).Z}))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7684).Z})))),(0,l.kt)("h3",{id:"scrollen"},"Scrollen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(821).Z}))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(432).Z})))),(0,l.kt)("h3",{id:"alle-programme-anzeigen"},"Alle Programme Anzeigen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3967).Z})),(0,l.kt)("p",null,"(",(0,l.kt)("em",{parentName:"p"},"Diese Option ist nicht bei allen Touchpads verf\xfcgbar."),")")),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Mission Control"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3607).Z})))),(0,l.kt)("h3",{id:"virtuelle-desktops"},"Virtuelle Desktops"),(0,l.kt)("p",null,"Mit virtuellen Desktops lassen sich mehrere Arbeitsbereiche und Fensteranordnungen erstellen."),(0,l.kt)("h4",{id:"erstellen"},"Erstellen"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Virtuelle Desktops: Mit ",(0,l.kt)("inlineCode",{parentName:"p"},"Win-Tabulatortaste")," alle ge\xf6ffneten Fenster anzeigen und oben im Fenster einen neuen Virtuellen Desktop erstellen:"),(0,l.kt)(s.Z,{src:n(786).Z,mdxType:"Video"})),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)(s.Z,{src:n(3606).Z,mdxType:"Video"}))),(0,l.kt)("h4",{id:"wechseln"},"Wechseln"),(0,l.kt)("p",null,"Mit folgenden Gesten kann zwischen diesen Desktops hin- und hergewechselt werden.","*"),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3825).Z}))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5547).Z})))),(0,l.kt)("p",null,"*"," Je nach Voreinstellungen ist diese Geste mit nur 3 statt 4 Fingern zu machen."),(0,l.kt)(r.Z,{mdxType:"OsTabs"},(0,l.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/de-de/windows/touchpad-gesten-f%C3%BCr-windows-10-a9d28305-4818-a5df-4e2b-e5590f850741"},"hier"))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("p",null,"Weitere Gesten ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/de-ch/HT204895"},"hier")))))}h.isMDXComponent=!0},3606:function(e,t,n){"use strict";t.Z=n.p+"assets/medias/create_virtual_desktops-34981b666a03a9119b3e45dfc77cf3a7.mp4"},786:function(e,t,n){"use strict";t.Z=n.p+"assets/medias/create_virtual_desktops-b2044bc7e914c86af40dfe4d3299ee25.mp4"},5547:function(e,t,n){"use strict";t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},7694:function(e,t,n){"use strict";t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},3607:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},7684:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},432:function(e,t,n){"use strict";t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"},3825:function(e,t,n){"use strict";t.Z=n.p+"assets/images/change_virtual_desktops-1a33e6f9c322b24252b3f4ef1af523f4.png"},8185:function(e,t,n){"use strict";t.Z=n.p+"assets/images/klick-d402b7508c290fb7dd0cbbbdad505f83.png"},3967:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mission_control-0ac9ffee647fccd942da3f1f1cb3baa3.png"},4710:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rechtsklick-3eac2a409fde6c0412430dfba359fc16.png"},821:function(e,t,n){"use strict";t.Z=n.p+"assets/images/scrollen-18747585cae80c48487ba8e77d0c5182.png"}}]);