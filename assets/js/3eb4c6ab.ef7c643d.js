(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[699],{3193:function(e,t,n){"use strict";n.d(t,{ZP:function(){return k}});var l=n(2122);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(4665);function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,o.Z)(e,t)}function i(){i=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,l,r){var s=new RegExp(e,l);return t.set(s,r||t.get(e)),(0,o.Z)(s,n.prototype)}function l(e,n){var l=t.get(n);return Object.keys(l).reduce((function(t,n){return t[n]=e[l[n]],t}),Object.create(null))}return s(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=l(n,this)),n},n.prototype[Symbol.replace]=function(n,o){if("string"==typeof o){var s=t.get(this);return e[Symbol.replace].call(this,n,o.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+s[t]})))}if("function"==typeof o){var i=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==r(e[e.length-1])&&(e=[].slice.call(e)).push(l(e,i)),o.apply(this,e)}))}return e[Symbol.replace].call(this,n,o)},i.apply(this,arguments)}var a,c,p=n(1788),u=n(7294),f=n(7625),d=n(1436),h={"ofi-table":"ofi-table_PWza",holiday:"holiday_2UxX",event:"event_2NQ2",test:"test_3z-p",selectable:"selectable_3poS",info:"info_2kxM",currentWeek:"currentWeek_2Orb",collapsing:"collapsing_AbTw",striped:"striped_1-4d",celled:"celled_kPfT",compact:"compact_2GyZ",tiny:"tiny_2YgH",small:"small_P_xa",normal:"normal_VkiZ",large:"large_1u8O"},m=n(6010);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(c||(c={}));var y=((a={})[c.Holiday]=d.skR,a[c.Event]=d.$nv,a[c.Test]=d.Xf_,a[c.Info]=d.YHc,a),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,n=e.icon,l=e.date,r=this.props.value;return l&&(r=function(e){var t=e.getDay();return u.createElement("span",{style:{fontFamily:"monospace"}},b[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(l)),u.createElement("td",{align:t},r,n?" ":"",n)},t}(u.Component),b=["So","Mo","Di","Mi","Do","Fr","Sa"],v=function(e){var t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(n/7)+1},_=function(e){function t(){return e.apply(this,arguments)||this}(0,p.Z)(t,e);var n=t.prototype;return n.icon=function(){if(this.props.type)return u.createElement(f.G,{icon:y[this.props.type]})},n.render=function(){var e=this,t=this.props,n=t.type,r=t.cells,o={};n&&(o.className=h[n]);var s=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var a=r[this.props.dateIndex];"string"==typeof a&&(s=function(e){var t=e.match(i(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(a))&&v(new Date)===v(s)&&(o.className=o.className+" "+h.currentWeek)}return u.createElement("tr",o,r.map((function(t,n){var r={value:t};return 0===n&&(r.icon=e.icon()),e.props.alignments&&e.props.alignments.length>n?r.align=e.props.alignments[n]:r.align="left",u.createElement(g,(0,l.Z)({},r,{key:n,date:e.props.dateIndex===n?s:void 0}))})))},t}(u.Component),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return u.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,m.default)(h["ofi-table"],h[this.props.size],h[this.props.compact&&"compact"],h[this.props.celled&&"celled"],h[this.props.striped&&"striped"],h[this.props.collapsing&&"collapsing"],h[this.props.selectable&&"selectable"])},u.createElement("thead",null,this.props.header&&u.createElement("tr",null,this.props.header.map((function(t,n){var l,r=((null==(l=e.props.alignments)?void 0:l.length)||0)>n?e.props.alignments[n]:"left";return u.createElement("th",{align:r,key:n},t)})))),u.createElement("tbody",null,this.props.rows.map((function(n,r){return u.createElement(_,(0,l.Z)({alignments:e.props.alignments},n,{key:r,dateIndex:t}))}))))},t}(u.Component)},3113:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var l=n(2122),r=n(9756),o=(n(7294),n(3905)),s=n(3193),i=["components"],a={sidebar_position:1},c="25h",p={unversionedId:"home",id:"version-25h/home",isDocsHomePage:!1,title:"25h",description:"<Table",source:"@site/versioned_docs/version-25h/home.mdx",sourceDirName:".",slug:"/home",permalink:"/ofi-blog/25h/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/home.mdx",version:"25h",lastUpdatedAt:1628273719,formattedLastUpdatedAt:"8/6/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-25h/sidebar"},u=[],f={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"25h"},"25h"),(0,o.kt)(s.ZP,{header:["Datum","Halbklasse","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["16.08.2021","","Erster Schultag",""],type:"event"},{cells:["20.08.2021","","",""]},{cells:["23.08.2021","A","",""]},{cells:["27.08.2021","","",""]},{cells:["30.08.2021","B","",""]},{cells:["03.09.2021","","",""]},{cells:["06.09.2021","A","",""]},{cells:["10.09.2021","","",""]},{cells:["13.09.2021","B","",""]},{cells:["17.09.2021","","",""]},{cells:["20.09.2021","A","",""]},{cells:["24.09.2021","","",""]},{cells:["01.10.2021","","Klassenwoche",""],type:"holiday"},{cells:["08.10.2021","","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","","Herbstferien",""],type:"holiday"},{cells:["25.10.2021","B","",""]},{cells:["29.10.2021","","",""]},{cells:["01.11.2021","A","",""]},{cells:["05.11.2021","","",""]},{cells:["08.11.2021","B","",""]},{cells:["12.11.2021","","",""]},{cells:["15.11.2021","A","",""]},{cells:["19.11.2021","","",""]},{cells:["22.11.2021","B","",""]},{cells:["26.11.2021","","",""]},{cells:["29.11.2021","A","",""]},{cells:["03.12.2021","","",""]},{cells:["06.12.2021","B","",""]},{cells:["10.12.2021","","",""]},{cells:["13.12.2021","A","",""]},{cells:["17.12.2021","","",""]},{cells:["20.12.2021","B","",""]},{cells:["24.12.2021","","Winterferien",""],type:"holiday"},{cells:["31.12.2021","","Winterferien",""],type:"holiday"},{cells:["07.01.2022","","Winterferien",""],type:"holiday"},{cells:["03.01.2022","A","",""]},{cells:["14.01.2022","","",""]},{cells:["10.01.2022","B","",""]},{cells:["19.01.2022","","",""]},{cells:["17.01.2022","A","",""]},{cells:["19.01.2022","","Notenschluss",""],type:"event"},{cells:["21.01.2022","","",""]},{cells:["24.01.2022","B","",""]},{cells:["28.01.2022","","",""]}],mdxType:"Table"}))}d.isMDXComponent=!0}}]);