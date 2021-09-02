(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[5194],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38702:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],l={},p="\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",s={unversionedId:"byod-basics/v25/Skills/material_python",id:"byod-basics/v25/Skills/material_python",isDocsHomePage:!1,title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",description:"\u2b07 Download BYOD Material",source:"@site/docs/byod-basics/v25/003-Skills/010_material_python.md",sourceDirName:"byod-basics/v25/003-Skills",slug:"/byod-basics/v25/Skills/material_python",permalink:"/byod-basics/v25/Skills/material_python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/003-Skills/010_material_python.md",tags:[],version:"current",lastUpdatedAt:1630047617,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:10,frontMatter:{},sidebar:"sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/byod-basics/v25/Skills/pruefungsfragen"},next:{title:"Dateiformat",permalink:"/dokumente/ms-word/dateiverwaltung"}},c=[],u={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-python-material-f\xfcr-die-byod-pr\xfcfung"},"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung"),(0,a.kt)("a",{href:"https://ofi.gbsl.website/files/material_byod.zip"},"\u2b07 Download BYOD Material"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=hello__world.py",live_py:!0,title:"hello__world.py"},'print("Hello World! It\'s a beautiful Day.")\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=create__mesh.py",live_py:!0,title:"create__mesh.py"},"from turtle import *\nfrom math import sqrt\nimport random\n\nSQRT3 = sqrt(3)\nCOLORS = ['red', 'blue', 'orange', 'green', 'purple', 'brown']\nspeed(15)\n\nfor index_x in range(5):\n    for index_y in range(5):\n        x = index_x * 30\n        if index_y % 2 == 1:\n            x = x - 15\n        y = index_y * 15 * SQRT3\n        penup()\n        goto(x, y)\n        pendown()\n        for i in range(3):\n            color(random.sample(COLORS, 1)[0])\n            forward(30)\n            left(120)\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=klammern.py",live_py:!0,title:"klammern.py"},"\n\n")))}f.isMDXComponent=!0}}]);