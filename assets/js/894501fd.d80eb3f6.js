(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[3233],{58215:function(e,t,n){"use strict";var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,s=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(67294),s=n(79443);var r=function(){var e=(0,i.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,s=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,p=i.Children.toArray(e.children),b=null!=u?u:p.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,f=r(),v=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,i.useState)(h),y=k[0],w=k[1],E=[];if(null!=d){var x=v[d];null!=x&&x!==y&&b.some((function(e){return e.value===x}))&&w(x)}var B=function(e){var t=e.currentTarget,n=E.indexOf(t),i=b[n].value;w(i),null!=d&&(g(d,i),setTimeout((function(){var e,n,i,s,r,a,o,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,s=e.bottom,r=e.right,a=window,o=a.innerHeight,c=a.innerWidth,n>=0&&r<=c&&s<=o&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=E.indexOf(e.target)+1;n=E[i]||E[0];break;case"ArrowLeft":var s=E.indexOf(e.target)-1;n=E[s]||E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":s},m)},b.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,a.default)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:N,onFocus:B,onClick:B},null!=n?n:t)}))),n?(0,i.cloneElement)(p.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},85107:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(41788),s=n(67294),r=n(55064),a=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){return s.createElement(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(s.Component)},93787:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(41788),s=n(67294),r=n(17625),a="videoComponent_187V",o="headerClosed_1HK6",l="headerOpen_hP6H",c="minimize_1JZh",u="description_2U1a",d="title_1XFt",m="cardOpen_1vws",p=n(51436),b=n(86010),h=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={open:!!t.props.expanded,visible:!1},t.videoRef=s.createRef(),t.isInViewport=function(){var e=t.videoRef.current.getBoundingClientRect(),n=e.top,i=e.bottom;n<window.innerHeight&&i>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})},t.onClick=function(){t.setState({open:!t.state.open}),t.isInViewport()},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},n.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},n.render=function(){var e=this.props,t=e.title,n=e.src,i=e.type,h=e.children;return s.createElement("div",{ref:this.videoRef,className:a},this.state.open?s.createElement("div",{className:m},s.createElement("div",{className:l},t&&s.createElement("h5",{className:d},t),!this.props.expanded&&s.createElement("button",{className:(0,b.default)("button button--sm button--outline button--secondary",c),onClick:this.onClick},s.createElement(r.G,{icon:p.IQi})),h&&s.createElement("div",{className:u},h)),this.state.visible?s.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(r.G,{icon:p.IJ7,spin:!0}))):s.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},s.createElement("div",{className:o},s.createElement("div",{className:d},t||"Video"),h&&s.createElement("div",{className:u},h)),this.state.visible?s.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},s.createElement("source",{src:n,type:"video/"+(i||"mp4")})):s.createElement("div",{style:{height:"150px"}},s.createElement(r.G,{icon:p.IJ7,spin:!0}))))},t}(s.Component)},46722:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return b},metadata:function(){return h},toc:function(){return f},default:function(){return g}});var i=n(22122),s=n(19756),r=(n(67294),n(3905)),a=n(85107),o=n(58215),l=n(17625),c=n(51417),u=n(44996),d=n(93787),m=["components"],p={},b="Betriebssystem",h={unversionedId:"BYOD-Basics/betriebssystem",id:"version-24L/BYOD-Basics/betriebssystem",isDocsHomePage:!1,title:"Betriebssystem",description:"Globale Suche",source:"@site/versioned_docs/version-24L/02-BYOD-Basics/002-betriebssystem.mdx",sourceDirName:"02-BYOD-Basics",slug:"/BYOD-Basics/betriebssystem",permalink:"/24L/BYOD-Basics/betriebssystem",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24L/02-BYOD-Basics/002-betriebssystem.mdx",tags:[],version:"24L",sidebarPosition:2,frontMatter:{},sidebar:"version-24L/sidebar",previous:{title:"Basics",permalink:"/24L/BYOD-Basics/overview"},next:{title:"Dateiexplorer",permalink:"/24L/BYOD-Basics/dateiexplorer"}},f=[{value:"Globale Suche",id:"globale-suche",children:[]},{value:"Night-Shift",id:"night-shift",children:[]}],v={toc:f};function g(e){var t=e.components,p=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,i.Z)({},v,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"betriebssystem"},"Betriebssystem"),(0,r.kt)("h2",{id:"globale-suche"},"Globale Suche"),(0,r.kt)(a.Z,{mdxType:"OsTabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Startmen\xfc")," \xf6ffnen (",(0,r.kt)(l.G,{icon:c.ts2,mdxType:"FontAwesomeIcon"}),"-Taste)) und direkt mit Tippen beginnen."),(0,r.kt)("li",{parentName:"ul"},"Auf die Lupe klicken und Suchanfrage starten.")),(0,r.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31910).Z}))),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spotlight")," \xf6ffnen (",(0,r.kt)("strong",{parentName:"li"},"Cmd+Leertaste"),") und direkt mit Tippen beginnen.")),(0,r.kt)("p",null,"Es kann nach Programmen, Ordnern, Dateien, aber auch z.B. nach dem Wetter gesucht werden."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89961).Z})))),(0,r.kt)("h2",{id:"night-shift"},"Night-Shift"),(0,r.kt)("p",null,"Wenns mal sp\xe4t wird - Augenschonender Bildschirm um den Schlafrhythmus nicht zu st\xf6ren."),(0,r.kt)(a.Z,{mdxType:"OsTabs"},(0,r.kt)(o.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)(d.Z,{src:(0,u.Z)("/img/byod-basics/win/nightshift.mp4"),mdxType:"Video"})),(0,r.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)(d.Z,{src:(0,u.Z)("/img/byod-basics/osx/nightshift.mp4"),mdxType:"Video"}))))}g.isMDXComponent=!0},89961:function(e,t,n){"use strict";t.Z=n.p+"assets/images/global_search-986a71b60f3517db2bd39cbe6ad4dffd.png"},31910:function(e,t,n){"use strict";t.Z=n.p+"assets/images/global_search-eadd1daa67449d6fedded2d488b880b9.png"}}]);