(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5369],{3193:function(e,t,n){"use strict";n.d(t,{ZP:function(){return w}});var r=n(2122);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=n(4665);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,l.Z)(e,t)}function s(){s=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,o){var i=new RegExp(e,r);return t.set(i,o||t.get(e)),(0,l.Z)(i,n.prototype)}function r(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return i(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=r(n,this)),n},n.prototype[Symbol.replace]=function(n,l){if("string"==typeof l){var i=t.get(this);return e[Symbol.replace].call(this,n,l.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+i[t]})))}if("function"==typeof l){var s=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==o(e[e.length-1])&&(e=[].slice.call(e)).push(r(e,s)),l.apply(this,e)}))}return e[Symbol.replace].call(this,n,l)},s.apply(this,arguments)}var a,p,c=n(1788),u=n(7294),f=n(7625),d=n(1436),y={"ofi-table":"ofi-table_PWza",holiday:"holiday_2UxX",event:"event_2NQ2",test:"test_3z-p",selectable:"selectable_3poS",info:"info_2kxM",currentWeek:"currentWeek_2Orb",collapsing:"collapsing_AbTw",striped:"striped_1-4d",celled:"celled_kPfT",compact:"compact_2GyZ",tiny:"tiny_2YgH",small:"small_P_xa",normal:"normal_VkiZ",large:"large_1u8O"},m=n(6010);!function(e){e.Holiday="holiday",e.Event="event",e.Test="test",e.Info="info"}(p||(p={}));var h=((a={})[p.Holiday]=d.skR,a[p.Event]=d.$nv,a[p.Test]=d.Xf_,a[p.Info]=d.YHc,a),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,c.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.align,n=e.icon,r=e.date,o=this.props.value;return r&&(o=function(e){var t=e.getDay();return u.createElement("span",{style:{fontFamily:"monospace"}},b[t],". ",String(e.getDate()).padStart(2,"0"),".",String(e.getMonth()+1).padStart(2,"0"),".")}(r)),u.createElement("td",{align:t},o,n?" ":"",n)},t}(u.Component),b=["So","Mo","Di","Mi","Do","Fr","Sa"],v=function(e){var t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/864e5);return Math.ceil(n/7)+1},k=function(e){function t(){return e.apply(this,arguments)||this}(0,c.Z)(t,e);var n=t.prototype;return n.icon=function(){if(this.props.type)return u.createElement(f.G,{icon:h[this.props.type]})},n.render=function(){var e=this,t=this.props,n=t.type,o=t.cells,l={};n&&(l.className=y[n]);var i=void 0;if(void 0!==this.props.dateIndex&&this.props.dateIndex>=0){var a=o[this.props.dateIndex];"string"==typeof a&&(i=function(e){var t=e.match(s(/([0-9]+)\.([0-9]+)\.([0-9]+)/,{d:1,m:2,y:3}));if(t&&t.groups)return new Date(t.groups.y+"-"+t.groups.m+"-"+t.groups.d)}(a))&&v(new Date)===v(i)&&(l.className=l.className+" "+y.currentWeek)}return u.createElement("tr",l,o.map((function(t,n){var o={value:t};return 0===n&&(o.icon=e.icon()),e.props.alignments&&e.props.alignments.length>n?o.align=e.props.alignments[n]:o.align="left",u.createElement(g,(0,r.Z)({},o,{key:n,date:e.props.dateIndex===n?i:void 0}))})))},t}(u.Component),w=function(e){function t(){return e.apply(this,arguments)||this}return(0,c.Z)(t,e),t.prototype.render=function(){var e=this,t=(this.props.header||[]).indexOf("Datum");return u.createElement("table",{style:{display:"table",borderCollapse:"collapse"},className:(0,m.default)(y["ofi-table"],y[this.props.size],y[this.props.compact&&"compact"],y[this.props.celled&&"celled"],y[this.props.striped&&"striped"],y[this.props.collapsing&&"collapsing"],y[this.props.selectable&&"selectable"])},u.createElement("thead",null,this.props.header&&u.createElement("tr",null,this.props.header.map((function(t,n){var r,o=((null==(r=e.props.alignments)?void 0:r.length)||0)>n?e.props.alignments[n]:"left";return u.createElement("th",{align:o,key:n},t)})))),u.createElement("tbody",null,this.props.rows.map((function(n,o){return u.createElement(k,(0,r.Z)({alignments:e.props.alignments},n,{key:o,dateIndex:t}))}))))},t}(u.Component)},9013:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),i=n(3193),s=["components"],a={sidebar_position:1},p="24f",c={unversionedId:"home",id:"version-24f/home",isDocsHomePage:!1,title:"24f",description:"<Table",source:"@site/versioned_docs/version-24f/home.mdx",sourceDirName:".",slug:"/home",permalink:"/ofi-blog/24f/home",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24f/home.mdx",version:"24f",lastUpdatedAt:1628273719,formattedLastUpdatedAt:"8/6/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-24f/sidebar",next:{title:"BYOD Basics",permalink:"/ofi-blog/24f/byod-basics/overview"}},u=[],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"24f"},"24f"),(0,l.kt)(i.ZP,{header:["Datum","Thema","Inhalt"],compact:!0,selectable:!0,rows:[{cells:["20.08.2021","Netzwerke","Schichtenmodell"]},{cells:["27.08.2021","Netzwerke","TCP/IP-Schichtenmodell"]},{cells:["03.09.2021","Netzwerke","IP-Adresse"]},{cells:["10.09.2021","Netzwerke","Routing & DNS"]},{cells:["17.09.2021","Netzwerke","World Wide Web & Workshop"]},{cells:["24.09.2021","Netzwerke","Test"],type:"test"},{cells:["01.10.2021","Umweltwoche",""],type:"holiday"},{cells:["08.10.2021","Herbstferien",""],type:"holiday"},{cells:["15.10.2021","Herbstferien",""],type:"holiday"},{cells:["22.10.2021","Herbstferien",""],type:"holiday"},{cells:["29.10.2021","Kryptologie",""]},{cells:["05.11.2021","Kryptologie",""]},{cells:["12.11.2021","Kryptologie",""]},{cells:["19.11.2021","Kryptologie",""]},{cells:["26.11.2021","Kryptologie",""]},{cells:["03.12.2021","Kryptologie","Sichere Passw\xf6rter"]},{cells:["10.12.2021","Kryptologie","Test"],type:"test"},{cells:["17.12.2021","Datenbanken",""]},{cells:["24.12.2021","Winterferien",""],type:"holiday"},{cells:["31.12.2021","Winterferien",""],type:"holiday"},{cells:["07.01.2022","Winterferien",""],type:"holiday"},{cells:["14.01.2022","Datenbanken",""]},{cells:["19.01.2022","Notenschluss",""],type:"event"},{cells:["21.01.2022","Datenbanken",""]},{cells:["28.01.2022","Datenbanken",""]}],mdxType:"Table"}))}d.isMDXComponent=!0}}]);