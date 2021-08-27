(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8358],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,y=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?t.createElement(y,a(a({ref:r},c),{},{components:n})):t.createElement(y,a({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33405:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var t=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],l={},p="\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",s={unversionedId:"BYOD-Basics/Skills/material_python",id:"version-25h/BYOD-Basics/Skills/material_python",isDocsHomePage:!1,title:"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung",description:"\u2b07 Download BYOD Material",source:"@site/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/010_material_python.md",sourceDirName:"02-BYOD-Basics/003-Skills",slug:"/BYOD-Basics/Skills/material_python",permalink:"/25h/BYOD-Basics/Skills/material_python",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-25h/02-BYOD-Basics/003-Skills/010_material_python.md",version:"25h",sidebarPosition:10,frontMatter:{},sidebar:"version-25h/sidebar",previous:{title:"\u270d\ufe0f Pr\xfcfungsfragen",permalink:"/25h/BYOD-Basics/Skills/pruefungsfragen"},next:{title:"Algorithmus",permalink:"/25h/Programmieren-1/Algorithmen/Algorithmus"}},c=[],u={toc:c};function f(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-python-material-f\xfcr-die-byod-pr\xfcfung"},"\u270d\ufe0f Python Material f\xfcr die BYOD Pr\xfcfung"),(0,o.kt)("a",{href:"https://ofi.gbsl.website/files/material_byod.zip"},"\u2b07 Download BYOD Material"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=hello__world.py",live_py:!0,title:"hello__world.py"},'print("Hello World! It\'s a beautiful Day.")\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=create__mesh.py",live_py:!0,title:"create__mesh.py"},"from turtle import *\nfrom math import sqrt\nimport random\n\nSQRT3 = sqrt(3)\nCOLORS = ['red', 'blue', 'orange', 'green', 'purple', 'brown']\nspeed(15)\n\nfor index_x in range(5):\n    for index_y in range(5):\n        x = index_x * 30\n        if index_y % 2 == 1:\n            x = x - 15\n        y = index_y * 15 * SQRT3\n        penup()\n        goto(x, y)\n        pendown()\n        for i in range(3):\n            color(random.sample(COLORS, 1)[0])\n            forward(30)\n            left(120)\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=klammern.py",live_py:!0,title:"klammern.py"},"\n\n")))}f.isMDXComponent=!0}}]);