(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[9514],{38704:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ee}});var n=a(67294),l=a(3905),o=a(52263),r=a(46291),i=a(62273),c=a(86010),s=a(13018),d=a(93783),u=a(77898),m=a(55537),p=a(22122),f=function(e){return n.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=a(24973),h=a(19756),v=a(36742),E=a(13919),g=a(18617),_="menuLinkText_1J2g",C=["items"],k=["item"],N=["item","onItemClick","activePath"],S=["item","onItemClick","activePath"],Z=function e(t,a){return"link"===t.type?(0,s.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},T=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,C);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,p.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,h.Z)(e,k);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(w,(0,p.Z)({item:t},a));case"link":default:return n.createElement(M,(0,p.Z)({item:t},a))}}function w(e){var t,a=e.item,l=e.onItemClick,o=e.activePath,r=(0,h.Z)(e,N),i=a.items,d=a.label,u=a.collapsible,m=Z(a,o),f=(0,s.uR)({initialState:function(){return!!u&&(!m&&a.collapsed)}}),b=f.collapsed,v=f.setCollapsed,E=f.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,o=(0,s.D9)(t);(0,n.useEffect)((function(){t&&!o&&a&&l(!1)}),[t,o,a])}({isActive:m,collapsed:b,setCollapsed:v}),n.createElement("li",{className:(0,c.default)("menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,p.Z)({className:(0,c.default)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&m},t[_]=!u,t)),onClick:u?function(e){e.preventDefault(),E()}:void 0,href:u?"#":void 0},r),d),n.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.createElement(T,{items:i,tabIndex:b?-1:0,onItemClick:l,activePath:o})))}function M(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=(0,h.Z)(e,S),r=t.href,i=t.label,s=Z(t,l);return n.createElement("li",{className:"menu__list-item",key:i},n.createElement(v.Z,(0,p.Z)({className:(0,c.default)("menu__link",{"menu__link--active":s}),to:r},(0,E.Z)(r)&&{isNavLink:!0,exact:!0,onClick:a},o),(0,E.Z)(r)?i:n.createElement("span",null,i,n.createElement(g.Z,null))))}var y="sidebar_15mo",x="sidebarWithHideableNavbar_267A",A="sidebarHidden_2kNb",P="sidebarLogo_3h0W",B="menu_Bmed",L="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",H="collapseSidebarButtonIcon_3E-R";function R(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.default)("button button--secondary button--outline",F),onClick:t},n.createElement(f,{className:H}))}function W(e){var t,a,l=e.path,o=e.sidebar,r=e.onCollapse,i=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],l=t[1];return(0,u.Z)((function(t){var a=t.scrollY;e||l(0===a)})),a}(),p=(0,s.LU)(),f=p.navbar.hideOnScroll,b=p.hideableSidebar,h=(0,s.nT)().isClosed;return n.createElement("div",{className:(0,c.default)(y,(t={},t[x]=f,t[A]=i,t))},f&&n.createElement(m.Z,{tabIndex:-1,className:P}),n.createElement("nav",{className:(0,c.default)("menu thin-scrollbar",B,(a={},a[L]=!h&&d,a))},n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:o,activePath:l}))),b&&n.createElement(R,{onClick:r}))}var D=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:a,activePath:l,onItemClick:function(){return t()}}))};function z(e){return n.createElement(s.Cv,{component:D,props:e})}var Y=n.memo(W),J=n.memo(z);function K(e){var t=(0,d.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Y,e),l&&n.createElement(J,e))}var U=a(61433),q=a(24608),G="backToTopButton_35hR",O="backToTopButtonShow_18ls";function Q(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=Q(),a=t.smoothScrollTop,l=t.cancelScrollToTop,o=(0,n.useState)(!1),r=o[0],i=o[1];return(0,u.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||l(),a<300)i(!1);else if(n){var o=document.documentElement.scrollHeight;a+window.innerHeight<o&&i(!0)}else i(!1)}}),[]),n.createElement("button",{className:(0,c.default)("clean-btn",G,(e={},e[O]=r,e)),type:"button",title:"Scroll to top",onClick:function(){return a()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j=a(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,a,r,d=e.currentDocRoute,u=e.versionMetadata,m=e.children,p=(0,o.Z)().isClient,h=u.pluginId,v=u.version,E=d.sidebar,g=E?u.docsSidebars[E]:void 0,_=(0,n.useState)(!1),C=_[0],k=_[1],N=(0,n.useState)(!1),S=N[0],Z=N[1],T=(0,n.useCallback)((function(){S&&Z(!1),k(!C)}),[S]);return n.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(h,v)}},n.createElement("div",{className:V.docPage},n.createElement(X,null),g&&n.createElement("aside",{className:(0,c.default)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&C&&Z(!0)}},n.createElement(K,{key:E,sidebar:g,path:d.path,onCollapse:T,isHidden:S}),S&&n.createElement("div",{className:V.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},n.createElement(f,{className:V.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.default)(V.docMainContainer,(a={},a[V.docMainContainerEnhanced]=C||!g,a))},n.createElement("div",{className:(0,c.default)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(r={},r[V.docItemWrapperEnhanced]=C,r))},n.createElement(l.Zo,{components:U.Z},m)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,j.LX)(l.pathname,e)}));return o?n.createElement($,{currentDocRoute:o,versionMetadata:a},(0,r.Z)(t,{versionMetadata:a})):n.createElement(q.default,e)}},24608:function(e,t,a){"use strict";a.r(t);var n=a(67294),l=a(62273),o=a(24973);t.default=function(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);