(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6312],{58215:function(e,t,n){"use strict";var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,s=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(67294),s=n(79443);var a=function(){var e=(0,i.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,m=e.groupId,p=e.className,b=a(),h=b.tabGroupChoices,f=b.setTabGroupChoices,v=(0,i.useState)(s),k=v[0],y=v[1],g=i.Children.toArray(e.children),w=[];if(null!=m){var E=h[m];null!=E&&E!==k&&d.some((function(e){return e.value===E}))&&y(E)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),i=d[n].value;y(i),null!=m&&(f(m,i),setTimeout((function(){var e,n,i,s,a,r,o,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,s=e.bottom,a=e.right,r=window,o=r.innerHeight,c=r.innerWidth,n>=0&&a<=c&&s<=o&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var i=w.indexOf(e.target)+1;n=w[i]||w[0];break;case c:var s=w.indexOf(e.target)-1;n=w[s]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.default)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:x,onClick:x},n)}))),t?(0,i.cloneElement)(g.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},85107:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(41788),s=n(67294),a=n(55064),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return s.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(s.Component)},80181:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(41788),s=n(67294),a=n(17625),r="videoComponent_187V",o="headerClosed_1HK6",l="headerOpen_hP6H",c="minimize_1JZh",u="description_2U1a",d="title_1XFt",m="cardOpen_1vws",p=n(51436),b=n(86010),h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).state={open:!!t.props.expanded,visible:!1},t.videoRef=s.createRef(),t.isInViewport=function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,i=e.bottom;n<window.innerHeight&&i>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})},t.onClick=function(){t.setState({open:!t.state.open}),t.isInViewport()},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,i=e.type,h=e.children;return s.createElement("div",{ref:this.videoRef,className:r},this.state.open?s.createElement("div",{className:m},s.createElement("div",{className:l},t&&s.createElement("h5",{className:d},t),s.createElement("button",{className:(0,b.default)("button button--sm button--outline button--secondary",c),onClick:this.onClick},s.createElement(a.G,{icon:p.IQi})),h&&s.createElement("div",{className:u},h)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(a.G,{icon:p.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:o},s.createElement("div",{className:d},t||"Video"),h&&s.createElement("div",{className:u},h)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(a.G,{icon:p.IJ7,spin:!0}))))},t}(s.Component)},60957:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return b},metadata:function(){return h},toc:function(){return f},default:function(){return k}});var i=n(22122),s=n(19756),a=(n(67294),n(3905)),r=n(85107),o=n(58215),l=n(17625),c=n(51417),u=n(44996),d=n(80181),m=["components"],p={},b="Betriebssystem",h={unversionedId:"byod-basics/Skills/betriebssystem",id:"version-25h/byod-basics/Skills/betriebssystem",isDocsHomePage:!1,title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-25h/byod-basics/003-Skills/003-betriebssystem.mdx",sourceDirName:"byod-basics/003-Skills",slug:"/byod-basics/Skills/betriebssystem",permalink:"/25h/byod-basics/Skills/betriebssystem",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/byod-basics/003-Skills/003-betriebssystem.mdx",version:"25h",sidebarPosition:3,frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"Schadsoftware",permalink:"/25h/byod-basics/ICT/Sicherheit/Schadsoftware"},next:{title:"Dateiexplorer",permalink:"/25h/byod-basics/Skills/dateiexplorer"}},f=[{value:"Globale Suche",id:"globale-suche",children:[]},{value:"Night-Shift",id:"night-shift",children:[]}],v={toc:f};function k(e){var t=e.components,p=(0,s.Z)(e,m);return(0,a.kt)("wrapper",(0,i.Z)({},v,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,a.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Startmen\xfc")," \xf6ffnen (",(0,a.kt)(l.G,{icon:c.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,a.kt)("li",{parentName:"ul"},"Auf die Lupe klicken und Suchanfrage starten.")),(0,a.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(31910).Z}))),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spotlight")," \xf6ffnen (",(0,a.kt)("strong",{parentName:"li"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen.")),(0,a.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(89961).Z})))),(0,a.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,a.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,a.kt)(r.Z,{mdxType:"OsTabs"},(0,a.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,a.kt)(d.Z,{src:(0,u.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,a.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,a.kt)(d.Z,{src:(0,u.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}k.isMDXComponent=!0},89961:function(e,t,n){"use strict";t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},31910:function(e,t,n){"use strict";t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);