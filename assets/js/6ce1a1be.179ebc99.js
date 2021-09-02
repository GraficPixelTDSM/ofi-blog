(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8358],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,y=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},60032:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var r=t(22122),i=t(19756),o=(t(67294),t(3905)),a=["components"],l={},p="\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",s={unversionedId:"BYOD-Basics/Skills/material_python",id:"version-25h/BYOD-Basics/Skills/material_python",isDocsHomePage:!1,title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",description:"\u2b07 Download BYOD Material",source:"@site/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/010_material_python.md",sourceDirName:"02-BYOD-Basics/003-Skills",slug:"/BYOD-Basics/Skills/material_python",permalink:"/25h/BYOD-Basics/Skills/material_python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/010_material_python.md",tags:[],version:"25h",sidebarPosition:10,frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/25h/BYOD-Basics/Skills/pruefungsfragen"},next:{title:"Dateiformat",permalink:"/25h/Texte/dateiverwaltung"}},c=[],u={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-python-material-f\xfcr-die-byod-pr\xfcfung"},"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung"),(0,o.kt)("a",{href:"https://ofi.gbsl.website/files/material_byod.zip"},"\u2b07 Download BYOD Material"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=hello__world.py",live_py:!0,title:"hello__world.py"},'print("Hello World! It\'s a beautiful Day.")\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=create__mesh.py",live_py:!0,title:"create__mesh.py"},"from turtle import *\nfrom math import sqrt\nimport random\n\nSQRT3 = sqrt(3)\nCOLORS = ['red', 'blue', 'orange', 'green', 'purple', 'brown']\nspeed(15)\n\nfor index_x in range(5):\n    for index_y in range(5):\n        x = index_x * 30\n        if index_y % 2 == 1:\n            x = x - 15\n        y = index_y * 15 * SQRT3\n        penup()\n        goto(x, y)\n        pendown()\n        for i in range(3):\n            color(random.sample(COLORS, 1)[0])\n            forward(30)\n            left(120)\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=klammern.py",live_py:!0,title:"klammern.py"},"\n\n")))}f.isMDXComponent=!0}}]);