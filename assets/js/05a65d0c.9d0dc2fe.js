(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1045],{16668:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return l}});var r=n(14665);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}function l(){l=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,a,i){var l=new RegExp(e,a);return t.set(l,i||t.get(e)),(0,r.Z)(l,n.prototype)}function o(e,n){var a=t.get(n);return Object.keys(a).reduce((function(t,n){return t[n]=e[a[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=o(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"==typeof r){var i=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof r){var l=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==a(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,l)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},l.apply(this,arguments)}},72389:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(67294),r=n(9913);function i(){return(0,a.useContext)(r._)}},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,c=e.values,d=e.groupId,m=e.className,p=a.Children.toArray(e.children),f=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,h=i(),v=h.tabGroupChoices,k=h.setTabGroupChoices,b=(0,a.useState)(g),N=b[0],w=b[1],y=[];if(null!=d){var z=v[d];null!=z&&z!==N&&f.some((function(e){return e.value===z}))&&w(z)}var S=function(e){var t=e.currentTarget,n=y.indexOf(t),a=f[n].value;w(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,r,i,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.default)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:E,onFocus:S,onClick:S},null!=n?n:t)}))),n?(0,a.cloneElement)(p.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},86043:function(e,t,n){"use strict";n.d(t,{u:function(){return s},z:function(){return h}});var a=n(19756),r=n(10412),i=n(67294),l=["collapsed"],o=["lazy"];function s(e){var t=e.initialState,n=(0,i.useState)(null!=t&&t),a=n[0],r=n[1],l=(0,i.useCallback)((function(){r((function(e){return!e}))}),[]);return{collapsed:a,setCollapsed:r,toggleCollapsed:l}}var u={display:"none",overflow:"hidden",height:"0px"},c={display:"block",overflow:"visible",height:"auto"};function d(e,t){var n=t?u:c;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function m(e){var t=e.collapsibleRef,n=e.collapsed,a=e.animation,r=(0,i.useRef)(!1);(0,i.useEffect)((function(){var e,i=t.current;function l(){var e,t,n=i.scrollHeight;return{transition:"height "+(null!==(e=null==a?void 0:a.duration)&&void 0!==e?e:function(e){var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(n))+"ms "+(null!==(t=null==a?void 0:a.easing)&&void 0!==t?t:"ease-in-out"),height:n+"px"}}function o(){var e=l();i.style.transition=e.transition,i.style.height=e.height}if(!r.current)return d(i,n),void(r.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){n?(o(),requestAnimationFrame((function(){i.style.height=u.height,i.style.overflow=u.overflow}))):(i.style.display="block",requestAnimationFrame((function(){o()})))})),function(){return cancelAnimationFrame(e)}}),[t,n,a])}function p(e){if(!r.Z.canUseDOM)return e?u:c}function f(e){var t=e.as,n=void 0===t?"div":t,a=e.collapsed,r=e.children,l=e.animation,o=e.onCollapseTransitionEnd,s=e.className,c=e.disableSSRStyle,f=(0,i.useRef)(null);return m({collapsibleRef:f,collapsed:a,animation:l}),i.createElement(n,{ref:f,style:c?void 0:p(a),onTransitionEnd:function(e){if("height"===e.propertyName){var t=f.current,n=t.style.height;a||parseInt(n,10)!==t.scrollHeight||(d(t,!1),null==o||o(!1)),n===u.height&&(d(t,!0),null==o||o(!0))}},className:s},r)}function g(e){var t=e.collapsed,n=(0,a.Z)(e,l),r=(0,i.useState)(!t),o=r[0],s=r[1];(0,i.useLayoutEffect)((function(){t||s(!0)}),[t]);var u=(0,i.useState)(t),c=u[0],d=u[1];return(0,i.useLayoutEffect)((function(){o&&d(t)}),[o,t]),o?i.createElement(f,Object.assign({},n,{collapsed:c})):null}function h(e){var t=e.lazy,n=(0,a.Z)(e,o),r=t?g:f;return i.createElement(r,Object.assign({},n))}},95429:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(19756),r=n(67294),i=n(72389),l=n(86010),o=n(86043),s="details_2Ziz",u="isBrowser_2j9b",c="collapsibleContent_3OHp",d=["summary","children"];function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}var f=function(e){var t,n=e.summary,f=e.children,g=(0,a.Z)(e,d),h=(0,i.Z)(),v=(0,r.useRef)(null),k=(0,o.u)({initialState:!g.open}),b=k.collapsed,N=k.setCollapsed,w=(0,r.useState)(g.open),y=w[0],z=w[1];return r.createElement("details",Object.assign({},g,{ref:v,open:y,"data-collapsed":b,className:(0,l.default)(s,(t={},t[u]=h,t),g.className),onMouseDown:function(e){m(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;m(t)&&p(t,v.current)&&(e.preventDefault(),b?(N(!1),z(!0)):N(!0))}}),n,r.createElement(o.z,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){N(e),z(!e)}},r.createElement("div",{className:c},f)))}},42634:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(16668),r=n(67294),i={answer:"answer_DHtd",blue:"blue_3iLc",red:"red_1sdT",green:"green_i3qg",black:"black_19Rg",checkButton:"checkButton_Bbqn",correct:"correct_2l2N",wrong:"wrong_23TW",unchecked:"unchecked_3Ykw",edited:"edited_1EQQ",quillAnswer:"quillAnswer_1Q5w"},l=864e5,o=function(e,t,n){var a;if(void 0===t&&(t=void 0),void 0===n&&(n=void 0),(a=Date.now())-JSON.parse(localStorage.getItem("last_cleanup")||""+a)>l&&s(),t){var r=localStorage.getItem(t);if(r){var i=JSON.parse(r);if("object"==typeof i){var o=i[e];return void 0===o?n:o}return n}}var u=localStorage.getItem(e);return u?JSON.parse(u):n},s=function(){var e=Date.now();Object.keys(localStorage).forEach((function(t){var n=o(t,{});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",""+e)},u=n(17625),c=n(51436),d=n(86010),m=(0,a.Z)(/\x2D\x2D([0-9A-Z_a-z]+)$/,{klass:1}),p=function(e){if(m.test(e))return e.match(m).groups.klass},f=function(e){return i[p(e)]};function g(){try{return function(e){if(e)return e.replace(/[\/\.\-#]/g,"_").replace(/%201/g,"_").replace(/[\.:,"'\s]/g,"")}(window.location.pathname.replace(/^\/|\/$/g,"")).toLowerCase()}catch(e){return"answer"}}var h=function(e){var t=e.value,n=e.showDataAttr,a=t,l=void 0;if(m.test(t)){var o=p(t);l=i[o],a=t.replace(m,"")+(n?" "+o:"")}return r.createElement("option",{value:t,className:l},a)},v=void 0,k=function(e){var t=r.useState(!1),a=t[0],l=t[1],s=r.useState("array"===e.type?[]:""),m=s[0],p=s[1],k=r.useState(""),b=k[0],N=k[1],w=r.useState(!1),y=w[0],z=w[1],S=r.useState(!1),E=S[0],x=S[1],A=r.useState("unchecked"),Z=A[0],B=A[1],L=r.useState(!1),R=L[0],M=L[1],C=r.useRef(null),D=function(e){e.preventDefault()};r.useEffect((function(){if("text"===e.type){var t=!0;return function(e){if(v)return e();n.e(1167).then(n.t.bind(n,44290,23)).then((function(t){return Promise.all([Promise.all([n.e(532),n.e(1940)]).then(n.bind(n,11940))]).then((function(n){v=t.default,e()}))}))}((function(){t&&(M(!0),C&&C.current&&(C.current.editor.getModule("toolbar").container.addEventListener("mousedown",D),V(C.current.editor)))})),function(){t=!1,C&&C.current&&C.current.editor.getModule("toolbar").container.removeEventListener("mousedown",D)}}}),[]),r.useEffect((function(){a&&function(e,t,n,a){void 0===n&&(n=void 0),void 0===a&&(a=2592e6);var r=Date.now();if(n){var i=o(n,void 0,{});"object"!=typeof i&&(i={});var l=i[e]||{},s=Object.assign({},l,t);return i.expiry=r+a,i[e]=s,void localStorage.setItem(n,JSON.stringify(i))}var u=o(e,n,{}),c=Object.assign({},u,t,{expiry:r+a});localStorage.setItem(e,JSON.stringify(c))}(e.id,{value:m,type:e.type},b,126144e6)}),[m]),r.useEffect((function(){var t=g();N(g());var n=o(e.id,t,{}).value,a=!!n;void 0===n&&(n=function(e){return"string"===e.type||"text"===e.type?e.default?e.default:"":Array(e.size).fill("")}(e)),"array"===e.type&&Array.isArray(n)&&(n.length>e.size?n=n.slice(0,e.size):n.length<e.size&&(n=[].concat(n,[].concat(Array(e.size-n.length).map((function(){return""})))))),p(n),l(!0),"text"!==e.type&&e.solution&&a&&H(n)}),[]);var _,V=function(t){if("text"===e.type){var n=t.getText().length>(e.minLength||10);n!==E&&x(n)}},T=function(t,n){if(void 0===n&&(n=0),B("unchecked"),"string"===e.type||"text"===e.type)p(t);else{var a=[].concat(m.slice(0,n),[t],m.slice(n+1));p(a)}},H=function(t){"text"!==e.type&&B(t===e.solution?"correct":"wrong")};switch(e.type){case"array":return r.createElement("div",{className:i.answer,"data-loaded":a},e.label&&r.createElement("label",null,e.label),m.map((function(t,n){return e.select?r.createElement("select",{key:n,onChange:function(e){return T(e.target.value,n)},value:t,className:f(t),disabled:!a},e.select.map((function(t,n){return r.createElement(h,{value:t,key:n,showDataAttr:!e.hideDataAttr})}))):r.createElement("input",{key:n,type:"text",onChange:function(e){return T(e.target.value,n)},value:t,disabled:!a})})));case"string":return r.createElement("div",{className:i.answer},e.label&&r.createElement("label",null,e.label),e.children&&r.createElement("label",null,e.children),e.select?r.createElement("select",{onChange:function(e){return T(e.target.value)},value:m,className:f(m),disabled:!a},e.select.map((function(t,n){return r.createElement(h,{value:t,key:n,showDataAttr:!e.hideDataAttr})}))):r.createElement("input",{disabled:!a,type:"text",onChange:function(e){return T(e.target.value)},value:m}),e.solution&&r.createElement("button",{onClick:function(){return H(m)},className:(0,d.default)(i[Z],i.checkButton)},r.createElement(u.G,{icon:(_=Z,"correct"===_?c.f8k:"wrong"===_?c.nYk:c.sph)})));case"text":return v&&R?r.createElement("div",{onFocus:function(){return!y&&z(!0)},onBlur:function(){return y&&z(!1)}},e.label&&r.createElement("h6",null,e.label),r.createElement(v,{ref:C,className:(0,d.default)(i.quillAnswer,y?void 0:"disable-toolbar",E?i.edited:void 0),value:m,onChange:function(e,t,n,a){T(e),V(a)},modules:{toolbar:!0},placeholder:e.placeholder||"\u270d\ufe0f Antwort..."})):r.createElement("div",null,"Loading...")}}},72875:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(67294),r=n(95429),i="finding_3L26",l=n(86010),o=function(e){return a.createElement(r.Z,{summary:a.createElement("summary",null,e.title||"Gewonnene Erkenntnisse",a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),className:(0,l.default)("alert alert--warning",i)},e.children)}},85107:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(41788),r=n(67294),i=n(55064),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement(i.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}]},this.props.children)},t}(r.Component)},70934:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=n(42634),o=n(72875),s=(n(58215),n(85107),["components"]),u={title:"Routing im Alltag"},c="Routing im Alltag [^1]",d={unversionedId:"Netzwerke/Routing/routing-alltag",id:"version-24i/Netzwerke/Routing/routing-alltag",isDocsHomePage:!1,title:"Routing im Alltag",description:"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie",source:"@site/versioned_docs/version-24i/05-Netzwerke/004-Routing/01-routing-alltag.md",sourceDirName:"05-Netzwerke/004-Routing",slug:"/Netzwerke/Routing/routing-alltag",permalink:"/24i/Netzwerke/Routing/routing-alltag",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/05-Netzwerke/004-Routing/01-routing-alltag.md",tags:[],version:"24i",sidebarPosition:1,frontMatter:{title:"Routing im Alltag"},sidebar:"version-24i/sidebar",previous:{title:"Zeichencodierung",permalink:"/24i/Netzwerke/Codierung/Zeichencodierung"},next:{title:"Routing im Internet",permalink:"/24i/Netzwerke/Routing/routing-internet"}},m=[{value:"Verkehrsbetriebe Biel",id:"verkehrsbetriebe-biel",children:[]},{value:"gefundene Analogien",id:"gefundene-analogien",children:[]},{value:"Routing f\xfcr Touristen",id:"routing-f\xfcr-touristen",children:[]},{value:"Ausfall Schienennetz",id:"ausfall-schienennetz",children:[]},{value:"Grosse Gruppe",id:"grosse-gruppe",children:[]}],p={toc:m};function f(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"routing-im-alltag"},"Routing im Alltag ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Vorgehensweise")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Lesen Sie sich selbst\xe4ndig durch dieses Kapitel durch, wobei Sie"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"die Aufgaben l\xf6sen und die Ergebnisse notieren"),(0,i.kt)("li",{parentName:"ul"},"vor jedem \xabgewonnene Erkenntnisse\xbb \xfcberlegen Sie kurz, was eine gewonnene Erkenntnis sein k\xf6nnte \u2013 und zwar bevor Sie das K\xe4stchen aufklappen"),(0,i.kt)("li",{parentName:"ul"},"lesen Sie die \xabgewonnenen Erkenntnisse\xbb durch und \xfcberlegen Sie sich, was damit genau gemeint ist"),(0,i.kt)("li",{parentName:"ul"},"falls Sie eine Frage haben oder eine Erkenntnis notiert haben, die nicht aufgelistet wird, dann halten Sie diese fest, damit wir am Schluss dar\xfcber sprechen k\xf6nnen")))),(0,i.kt)("p",null,"Wir befinden uns auf der ",(0,i.kt)("a",{parentName:"p",href:"/24i/Netzwerke/Schichtenmodell/Vermittlungsschicht"},"Vermittlungs-Schicht"),": Hier werden IP-Pakete vom Start- zum Zielger\xe4t \xfcbertragen. Bei ihrem Weg durch das Internet m\xfcssen die Pakete geleitet werden \u2013 man spricht von ",(0,i.kt)("strong",{parentName:"p"},"Routing"),"."),(0,i.kt)("h2",{id:"verkehrsbetriebe-biel"},"Verkehrsbetriebe Biel"),(0,i.kt)("p",null,"Durch das Verkehrsnetz der Verkehrsbetriebe Biel wird der \xf6ffentliche Verkehr in der Stadt Biel sichergestellt."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69571).Z,title:"Author: VB TPD @ Public Domain, Bearbeitet"})),(0,i.kt)("p",null,"Sie m\xf6chten mit dem \xd6V vom Gymnasium (L\xe4ndtestrasse 12, Biel/Bienne) zum Sportplatz Mettmoos fahren."),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Mit dem Netzplan")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Welche M\xf6glichkeiten sehen Sie auf dem Liniennetz?"),(0,i.kt)(l.Z,{type:"text",id:"q1",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"\ud83d\udcbb mit Google Maps")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Welchen Transportoptionen schl\xe4gt Ihnen ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/maps/dir/Gymnasium+Biel-Seeland,+L%C3%A4ndtestrasse+12,+2503+Biel/Sports+Ground+Mettmoos,+Parkplatz+Mettmoos,+2504+Biel/@47.1389934,7.2384864,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478e195743e2cd43:0x7eeeab7e9cc7fa72!2m2!1d7.2359916!2d47.1334096!1m5!1m1!1s0x478e192b26b851e1:0x5e85058550f44003!2m2!1d7.2756948!2d47.1390779!3e3"},"Google Maps")," vor, wenn Sie die Route ",(0,i.kt)("em",{parentName:"p"},"L\xe4ndtestrasse 12")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"Sportplatz Mettmoos")," suchen?"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Welche Optionen werden vorgeschlagen?"),(0,i.kt)("li",{parentName:"ul"},"Welches ist gem\xe4ss Google die beste Route?"),(0,i.kt)("li",{parentName:"ul"},"\xc4ndert sich die Route, wenn sie m\xf6glichst kurze Fusswege enthalten soll? (Einstellbar unter ",(0,i.kt)("em",{parentName:"li"},"Routenoptionen"),")"),(0,i.kt)("li",{parentName:"ul"},"\xc4ndert sich der Reisevorschlag, wenn Sie sp\xe4t in der Nacht eine Verbindung suchen?")),(0,i.kt)(l.Z,{type:"text",id:"q2",mdxType:"Answer"}))),(0,i.kt)(o.Z,{mdxType:"Finding"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es gibt mehrere Wege, welche ans Ziel f\xfchren."),(0,i.kt)("li",{parentName:"ul"},"Der optimale Weg ist abh\xe4ngig von den Rahmenbedingungen und kann sich ",(0,i.kt)("strong",{parentName:"li"},"\xe4ndern"),"."))),(0,i.kt)("h2",{id:"gefundene-analogien"},"gefundene Analogien"),(0,i.kt)("div",{className:"no-table-header"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"WLAN")),(0,i.kt)("td",{parentName:"tr",align:"left"},"zu Fuss bis zur n\xe4chsten Haltestelle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Sichtbare WLANs")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Haltestellen, die zu Fuss erreichbar sind: Bahnhof & Badhausstrasse")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Rechnernetz (LAN)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"mit Bus (f\xfcr weiter entfernte Ziele: Tram, Zug, ...)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"Router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Umsteigen an gewissen Haltestellen"))))),(0,i.kt)("h2",{id:"routing-f\xfcr-touristen"},"Routing f\xfcr Touristen"),(0,i.kt)("p",null,"Datenpakete sind \u2013 anders als wir als Passagiere vom ",(0,i.kt)("em",{parentName:"p"},"\xd6V")," \u2013 nicht intelligent. Sie wissen nicht, wie sie umsteigen m\xfcssen. Dies muss f\xfcr sie \xfcbernommen werden."),(0,i.kt)("p",null,"Ein Datenpaket im \xd6V vom Gymer zum Sportplatz Mettmoos m\xfcsste"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"an jeder Haltestelle wissen:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ob man Aussteigen oder Umsteigen muss"),(0,i.kt)("li",{parentName:"ul"},"in welchen Bus man einsteigen muss"),(0,i.kt)("li",{parentName:"ul"},"ob man am Ziel angekommen ist.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"an jeder Strassenkreuzung (wenn zu Fuss unterwegs) wissen:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"welche Abzweigung es nehmen soll"),(0,i.kt)("li",{parentName:"ul"},"ob es am Ziel angekommen ist.")),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Routing-Tabelle")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Erstellen Sie f\xfcr das Ziel "Sportplatz Mettmoos" Umsteige-Anleitungen f\xfcr Datenpakete gem\xe4ss obigem Punkt 1. f\xfcr die folgenden Haltestellen:'),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Seehofweg"),(0,i.kt)("li",{parentName:"ul"},"Bahnhof Biel"),(0,i.kt)("li",{parentName:"ul"},"M\xfchlestrasse/Moulin"),(0,i.kt)("li",{parentName:"ul"},"Schulen Linde"),(0,i.kt)("li",{parentName:"ul"},"Bahnhof Mett")),(0,i.kt)("p",{parentName:"div"},"Beispiel-Anleitung: ",(0,i.kt)("strong",{parentName:"p"},"Bahnhof Biel")," \u2192 in Bus Nr. 1 Richtung ",(0,i.kt)("em",{parentName:"p"},"L\xf6hre/Mauchamp")," einsteigen"),(0,i.kt)(l.Z,{type:"text",id:"q3",mdxType:"Answer"}))),(0,i.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,i.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"Andere Ziele")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Anleitungen m\xfcssten nat\xfcrlich auch Anweisungen haben f\xfcr andere Ziele."),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},'Wie w\xfcrden die Umsteigungsanweisungen f\xfcr die 5 obenstehenden Haltestellen f\xfcr das Ziel "Bern" lauten?'),(0,i.kt)("li",{parentName:"ul"},'Wie f\xfcr das Ziel "Z\xfcrich"?'),(0,i.kt)("li",{parentName:"ul"},"Muss jede Haltestelle wirklich Anweisungen f\xfcr jedes andere Ziel haben?")),(0,i.kt)(l.Z,{type:"text",id:"q4",mdxType:"Answer"}))),(0,i.kt)(o.Z,{mdxType:"Finding"},(0,i.kt)("p",null,'Es k\xf6nnen Anweisungen "delegiert" werden: Es muss nur der ',(0,i.kt)("em",{parentName:"p"},"Bahnhof Biel")," wissen, in welchen Zug man einsteigen muss um nach Bern oder Z\xfcrich zu fahren. Die anderen Haltestellen leiten alle Anfragen ausserhalb des Biel-Netzes an den ",(0,i.kt)("em",{parentName:"p"},"Bahnhof Biel")," weiter.")),(0,i.kt)("h2",{id:"ausfall-schienennetz"},"Ausfall Schienennetz"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Wegen Umbauarbeiten f\xe4llt die Linie Nr. 9 ab "Br\xfchlplatz" aus. Welche M\xf6glichkeiten haben Sie, wenn Sie beim ',(0,i.kt)("em",{parentName:"p"},"Seehofweg")," eingestiegen sind, um doch an den Sportplatz zu gelangen?")),(0,i.kt)(o.Z,{mdxType:"Finding"},(0,i.kt)("p",null,"Es gibt verschiedene Wege zum Ziel - auch nicht optimale Wege, die normalerweise nicht benutzt werden. Diese Optionen erm\xf6glichen aber eine gewisse ",(0,i.kt)("strong",{parentName:"p"},"Ausfallsicherheit"),". Im Beispiel oben k\xf6nnen Sie entweder beim Bahnhof Biel oder beim Br\xfchlplatz auf eine andere Verbindung umsteigen. ")),(0,i.kt)("h2",{id:"grosse-gruppe"},"Grosse Gruppe"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"4 Parallelklassen \u2013 also ca. 100 Personen haben beim Sportplatz Mettmoos.\nWie kommen sie am schnellsten dahin, wenn wir damit rechnen, dass wegen Corona und dem Feierabendverkehr maximal 25 Personen pro Bus Platz finden?")),(0,i.kt)(o.Z,{mdxType:"Finding"},(0,i.kt)("p",null,"Bei Engp\xe4ssen k\xf6nnen verschiedene Wege gleichzeitig benutzt werden. (Load-Balancing)")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,i.kt)("a",{parentName:"li",href:"https://informatik.mygymer.ch/g23c/008.rechnernetze-kommunikation/05.routing.html"},"informatik.mygymer.ch"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},69571:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vb-verkehrsnetz-b17e10bcbeb65e0a89a8fbdff92e9906.png"}}]);