(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[736],{8215:function(e,t,n){"use strict";var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(7294),a=n(9443);var s=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,d=e.values,m=e.groupId,b=e.className,p=s(),h=p.tabGroupChoices,f=p.setTabGroupChoices,v=(0,i.useState)(a),g=v[0],y=v[1],k=i.Children.toArray(e.children),w=[];if(null!=m){var E=h[m];null!=E&&E!==g&&d.some((function(e){return e.value===E}))&&y(E)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),i=d[n].value;y(i),null!=m&&(f(m,i),setTimeout((function(){var e,n,i,a,s,r,o,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,s=e.right,r=window,o=r.innerHeight,c=r.innerWidth,n>=0&&s<=c&&a<=o&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var i=w.indexOf(e.target)+1;n=w[i]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.default)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:x,onClick:x},n)}))),t?(0,i.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},5107:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(1788),a=n(7294),s=n(5064),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return a.createElement(s.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(a.Component)},181:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(1788),a=n(7294),s=n(7625),r="videoComponent_187V",o="headerClosed_1HK6",l="headerOpen_hP6H",c="minimize_1JZh",u="description_2U1a",d="title_1XFt",m="cardOpen_1vws",b=n(1436),p=n(6010),h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))||this).state={open:!1,visible:!1},t.videoRef=a.createRef(),t.isInViewport=function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,i=e.bottom;n<window.innerHeight&&i>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})},t.onClick=function(){t.setState({open:!t.state.open}),t.isInViewport()},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,i=e.type,h=e.children;return a.createElement("div",{ref:this.videoRef,className:r},this.state.open?a.createElement("div",{className:m},a.createElement("div",{className:l},t&&a.createElement("h5",{className:d},t),a.createElement("button",{className:(0,p.default)("button button--sm button--outline button--secondary",c),onClick:this.onClick},a.createElement(s.G,{icon:b.IQi})),h&&a.createElement("div",{className:u},h)),this.state.visible?a.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},a.createElement("source",{src:n,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(s.G,{icon:b.IJ7,spin:!0}))):a.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},a.createElement("div",{className:o},a.createElement("div",{className:d},t||"Video"),h&&a.createElement("div",{className:u},h)),this.state.visible?a.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,height:"150px",loop:!0},a.createElement("source",{src:n,type:"video/"+(i||"mp4")})):a.createElement("div",{style:{height:"150px"}},a.createElement(s.G,{icon:b.IJ7,spin:!0}))))},t}(a.Component)},8580:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return f},default:function(){return g}});var i=n(2122),a=n(9756),s=(n(7294),n(3905)),r=n(5107),o=n(8215),l=n(7625),c=n(1417),u=n(4996),d=n(181),m=["components"],b={},p="Betriebssystem",h={unversionedId:"byod-basics/v25/betriebssystem",id:"byod-basics/v25/betriebssystem",isDocsHomePage:!1,title:"Betriebssystem",description:"Globale Suche",source:"@site/docs/byod-basics/v25/002-betriebssystem.mdx",sourceDirName:"byod-basics/v25",slug:"/byod-basics/v25/betriebssystem",permalink:"/ofi-blog/byod-basics/v25/betriebssystem",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/002-betriebssystem.mdx",version:"current",lastUpdatedAt:1628457292,formattedLastUpdatedAt:"8/8/2021",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Basics",permalink:"/ofi-blog/byod-basics/v25/overview"},next:{title:"Dateiexplorer",permalink:"/ofi-blog/byod-basics/v25/dateiexplorer"}},f=[{value:"Globale Suche",id:"globale-suche",children:[]},{value:"Night-Shift",id:"night-shift",children:[]}],v={toc:f};function g(e){var t=e.components,b=(0,a.Z)(e,m);return(0,s.kt)("wrapper",(0,i.Z)({},v,b,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,s.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,s.kt)(r.Z,{mdxType:"OsTabs"},(0,s.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Startmen\xfc")," \xf6ffnen (",(0,s.kt)(l.G,{icon:c.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,s.kt)("li",{parentName:"ul"},"Auf die Lupe klicken und Suchanfrage starten.")),(0,s.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1910).Z}))),(0,s.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Spotlight")," \xf6ffnen (",(0,s.kt)("strong",{parentName:"li"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen.")),(0,s.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(9961).Z})))),(0,s.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,s.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,s.kt)(r.Z,{mdxType:"OsTabs"},(0,s.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,s.kt)(d.Z,{src:(0,u.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,s.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)(d.Z,{src:(0,u.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}g.isMDXComponent=!0},9961:function(e,t,n){"use strict";t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},1910:function(e,t,n){"use strict";t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);