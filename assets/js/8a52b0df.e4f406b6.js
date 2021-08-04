(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[183],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,p=h["".concat(a,".").concat(m)]||h[m]||d[m]||s;return n?r.createElement(p,c(c({ref:t},u),{},{components:n})):r.createElement(p,c({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,c=new Array(s);c[0]=h;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9962:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(2122),i=n(9756),s=(n(7294),n(3905)),c=["components"],o={title:"3 Vermittlungsschicht"},a="3 Vermittlungsschicht [^1]",l={unversionedId:"Netzwerke/Schichtenmodell/Vermittlungsschicht",id:"Netzwerke/Schichtenmodell/Vermittlungsschicht",isDocsHomePage:!1,title:"3 Vermittlungsschicht",description:"In der Vermittlungsschicht brauchen wir eine Adresse, an die die (Daten-)Pakete gesendet werden k\xf6nnen. Es handelt sich um eine logische Adresse aus dem Netzwerk, in dem sich das Ger\xe4t gerade befindet.",source:"@site/docs/Netzwerke/Schichtenmodell/003-Vermittlungsschicht.md",sourceDirName:"Netzwerke/Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/Vermittlungsschicht",permalink:"/ofi-blog/Netzwerke/Schichtenmodell/Vermittlungsschicht",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Netzwerke/Schichtenmodell/003-Vermittlungsschicht.md",version:"current",lastUpdatedAt:1628083091,formattedLastUpdatedAt:"8/4/2021",sidebarPosition:3,frontMatter:{title:"3 Vermittlungsschicht"},sidebar:"sidebar",previous:{title:"2 Transportschicht",permalink:"/ofi-blog/Netzwerke/Schichtenmodell/Transportschicht"},next:{title:"4 Physikalische Schicht (Netzzugangsschicht)",permalink:"/ofi-blog/Netzwerke/Schichtenmodell/Physikalische-Schicht"}},u=[{value:"Beispiel \xabSchule\xbb",id:"beispiel-\xabschule\xbb",children:[]},{value:"Internet",id:"internet",children:[{value:"\u2b50 Weitere Informationen",id:"-weitere-informationen",children:[]}]}],d={toc:u};function h(e){var t=e.components,o=(0,i.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"3-vermittlungsschicht"},"3 Vermittlungsschicht ",(0,s.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("p",null,"In der Vermittlungsschicht brauchen wir eine Adresse, an die die (Daten-)Pakete gesendet werden k\xf6nnen. Es handelt sich um eine logische Adresse aus dem Netzwerk, in dem sich das Ger\xe4t gerade befindet."),(0,s.kt)("h2",{id:"beispiel-\xabschule\xbb"},"Beispiel \xabSchule\xbb"),(0,s.kt)("p",null,"Im Beispiel \xabSchule\xbb ist aus den beiden oberen Schichten alles f\xfcr den Transport vorbereitet. Der Hauswart bringt aber die Pulte nicht selbst ins andere Schulhaus \u2013 er muss sich gar nicht um die Zustellung k\xfcmmern. Die Vermittlungsschicht wird hier von der Post \xfcbernommen. Anhand der Adresse auf den Paketen weiss die Post, wohin die einzelnen Pakete verschickt werden m\xfcssen."),(0,s.kt)("p",null,"\xdcblicherweise k\xf6nnen die Pakete nicht direkt, sondern via ein Paketzentrum zugestellt werden. Welche Route die Pakete nehmen \u2013 also via welches Paketzentrum die Pakete verschickt werden \u2013 darum k\xfcmmert sich die Post. Die Pakete werden so in S\xe4cke verpackt, dass sie mit anderen Paketen zusammen im richtigen Paketzentrum landen. Dort werden sie neu sortiert und f\xfcr den Weitertransport vorbereitet."),(0,s.kt)("p",null,"Die Post hat keine Ahnung, welche Ware in wie viele Pakete aufgeteilt transportiert wird, sie weiss nur von wo nach wo welches Paket transportiert werden muss."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"@",src:n(2806).Z})),(0,s.kt)("h2",{id:"internet"},"Internet"),(0,s.kt)("p",null,"Das wichtigste Protokoll der Vermittlungsschicht ist das Internet Protokoll (IP). Damit Computer in einem Netzwerk Daten austauschen k\xf6nnen, brauchen sie eine Adresse (analog zur Postadresse in unserem Beispiel oben). Die Adressen der Vermittlungsschicht werden IP-Adressen (siehe Begriff IP-Adressen) genannt. Jedes vernetzte Ger\xe4t besitzt eine IP-Adresse, damit es mit anderen Ger\xe4ten kommunizieren kann."),(0,s.kt)("h3",{id:"-weitere-informationen"},"\u2b50 Weitere Informationen"),(0,s.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5o8CwafCxnU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,s.kt)("p",null,(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Quelle: ",(0,s.kt)("a",{parentName:"p",href:"https://rothe.io/?b=network&p=750322"},"rothe.io")))}h.isMDXComponent=!0},2806:function(e,t,n){"use strict";t.Z=n.p+"assets/images/003-school-example-a07bd0300d2a933f2eaa84f8533cfd15.svg"}}]);