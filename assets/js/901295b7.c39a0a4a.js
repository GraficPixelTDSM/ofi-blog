(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[4406],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,o(o({ref:e},u),{},{components:n})):r.createElement(d,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},55064:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(67294),a=n(79443);var i=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var f=function(t){var e=t.lazy,n=t.block,a=t.defaultValue,f=t.values,p=t.groupId,m=t.className,d=i(),g=d.tabGroupChoices,b=d.setTabGroupChoices,h=(0,r.useState)(a),v=h[0],y=h[1],k=r.Children.toArray(t.children),w=[];if(null!=p){var Z=g[p];null!=Z&&Z!==v&&f.some((function(t){return t.value===Z}))&&y(Z)}var O=function(t){var e=t.currentTarget,n=w.indexOf(e),r=f[n].value;y(r),null!=p&&(b(p,r),setTimeout((function(){var t,n,r,a,i,o,s,c;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,i=t.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},N=function(t){var e,n;switch(t.keyCode){case u:var r=w.indexOf(t.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(t.target)-1;n=w[a]||w[w.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":n},m)},f.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,o.default)("tabs__item",s,{"tabs__item--active":v===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:N,onFocus:O,onClick:O},n)}))),e?(0,r.cloneElement)(k.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},85107:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(41788),a=n(67294),i=n(55064),o=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){return a.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},e}(a.Component)},56773:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return f},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(85107),s=n(58215),l=["components"],c={title:"1. Python"},u="Python installieren",f={unversionedId:"Software/python",id:"version-24o/Software/python",isDocsHomePage:!1,title:"1. Python",description:"1. Unter https://www.python.org/ die aktuelle Version von Python herunterladen.",source:"@site/versioned_docs/version-24o/03-Software/01-python.mdx",sourceDirName:"03-Software",slug:"/Software/python",permalink:"/ofi-blog/24o/Software/python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/03-Software/01-python.mdx",version:"24o",sidebarPosition:1,frontMatter:{title:"1. Python"},sidebar:"version-24o/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/ofi-blog/24o/byod-basics/pruefungsfragen"},next:{title:"2. VS Code",permalink:"/ofi-blog/24o/Software/vscode"}},p=[],m={toc:p};function d(t){var e=t.components,c=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-installieren"},"Python installieren"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unter ",(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/"},"https://www.python.org/")," die aktuelle Version von Python herunterladen."),(0,i.kt)("li",{parentName:"ol"},"Die heruntergeladene Datei doppelklicken (Dateiendung unter Windows ",(0,i.kt)("inlineCode",{parentName:"li"},".exe"),", unter Mac OSX ",(0,i.kt)("inlineCode",{parentName:"li"},".pkg"),")"),(0,i.kt)("li",{parentName:"ol"},"Folgende Optionen bei der Installation ber\xfccksichtigen:")),(0,i.kt)(o.Z,{mdxType:"OsTabs"},(0,i.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 1.",src:n(97940).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,i.kt)("img",{alt:"Installationsschritt 2.",src:n(74789).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: Falls die Option zum Entfernen des Pfadl\xe4ngenlimits angezeigt wird: ",(0,i.kt)("img",{alt:"Installationsschritt 3.",src:n(47702).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 4.",src:n(63722).Z})),(0,i.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73"))),(0,i.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 1.",src:n(43881).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 2.",src:n(75644).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 3.",src:n(14225).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 4.",src:n(54500).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 5.",src:n(67228).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 6.",src:n(9056).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: ",(0,i.kt)("img",{alt:"Installationsschritt 7.",src:n(41067).Z})),(0,i.kt)("li",{parentName:"ol"},"Schritt: Warten... ",(0,i.kt)("img",{alt:"Installationsschritt 8.",src:n(43968).Z})),(0,i.kt)("li",{parentName:"ol"},"Fertig \ud83e\udd73")))))}d.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.r(e),n.d(e,{default:function(){return a}})},43881:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-01-b5b2ccfbba33840a9e9397d20d3627f8.png"},75644:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-02-b5b77b49524307e7568fa0e265d30852.png"},14225:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-03-31c550d5dc425c54a8f7cee4a49e9419.png"},54500:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-04-79bc9c73cbf5cd69ca9af6359e586f3c.png"},67228:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-05-678a2f70ce6b77e3996b0cb7f1339578.png"},9056:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-06-b7212fa45e920b82734ccb5702a886d9.png"},41067:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-07-152c19d10aad3c4a8570b3e5c522bf14.png"},43968:function(t,e,n){"use strict";e.Z=n.p+"assets/images/osx-08-d36a36508ab33be1c2d497077f27f64a.png"},97940:function(t,e,n){"use strict";e.Z=n.p+"assets/images/win-01-9c850cec901e9204802687251f9d814d.png"},74789:function(t,e,n){"use strict";e.Z=n.p+"assets/images/win-02-783cd4ed2a0a66c7cf4679f3d26c43f3.png"},47702:function(t,e,n){"use strict";e.Z=n.p+"assets/images/win-03-075e4584ae09b4554d5556c97378d623.png"},63722:function(t,e,n){"use strict";e.Z=n.p+"assets/images/win-04-35a978458d84bacd9e643a9efec4ad1f.png"}}]);