(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[629],{8215:function(e,t,n){"use strict";var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(7294),r=n(9443);var a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",c="tabItemActive_2DSg";var u=37,l=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,f=e.groupId,m=e.className,p=a(),b=p.tabGroupChoices,v=p.setTabGroupChoices,h=(0,o.useState)(r),y=h[0],g=h[1],w=o.Children.toArray(e.children),k=[];if(null!=f){var C=b[f];null!=C&&C!==y&&d.some((function(e){return e.value===C}))&&g(C)}var E=function(e){var t=e.currentTarget,n=k.indexOf(t),o=d[n].value;g(o),null!=f&&(v(f,o),setTimeout((function(){var e,n,o,r,a,i,s,u;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,a=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&r<=s&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case l:var o=k.indexOf(e.target)+1;n=k[o]||k[0];break;case u:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.default)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:E,onClick:E},n)}))),t?(0,o.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var o=(0,n(7294).createContext)(void 0);t.Z=o},5107:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(3552),r=n(7294),a=n(5064),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){return r.createElement(a.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},147:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(3552),r=n(7294),a=n(7625),i=n(1436),s=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={open:!1},t.onClick=function(){t.setState({open:!t.state.open})},t}return(0,o.Z)(t,e),t.prototype.render=function(){return this.state.open?r.createElement("div",null,r.createElement("button",{className:"button button--sm button--outline button--secondary",style:{float:"right"},onClick:this.onClick},r.createElement(a.G,{icon:i.IQi})),r.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},r.createElement("source",{src:this.props.src,type:"video/"+(this.props.type||"mp4")}))):r.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between"}},r.createElement("div",null,"Video"),r.createElement("video",{autoPlay:!0,height:"150px",loop:!0},r.createElement("source",{src:this.props.src,type:"video/"+(this.props.type||"mp4")})))},t}(r.Component)},6562:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=(n(5107),n(147),n(8215),n(7625),["components"]),s={},c="Software",u={unversionedId:"byod-basics/software",id:"byod-basics/software",isDocsHomePage:!1,title:"Software",description:"",source:"@site/docs/byod-basics/006-software.mdx",sourceDirName:"byod-basics",slug:"/byod-basics/software",permalink:"/ofi-blog/byod-basics/software",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/byod-basics/006-software.mdx",version:"current",lastUpdatedAt:1624924060,formattedLastUpdatedAt:"6/28/2021",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Systemnavigation",permalink:"/ofi-blog/byod-basics/navigation"},next:{title:"Ein Python Algorithmus",permalink:"/ofi-blog/Programmieren 1/Turtles/intro"}},l=[],d={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"software"},"Software"))}f.isMDXComponent=!0}}]);