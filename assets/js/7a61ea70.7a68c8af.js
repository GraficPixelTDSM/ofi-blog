(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[6066],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return h},kt:function(){return p}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),o=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},h=function(e){var n=o(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=o(t),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||a;return t?i.createElement(m,l(l({ref:n},h),{},{components:t})):i.createElement(m,l({ref:n},h))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<a;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23163:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var i=t(67294),r="asciiTable_3UBi",a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],l=function(){var e=i.useState(-1),n=e[0],t=e[1],l=i.useState(-1),s=l[0],c=l[1];return i.createElement("table",{onMouseOut:function(){t(-1),c(-1)},className:r},a.map((function(e,r){return i.createElement("tr",{key:r},a.map((function(e,a){var l=16*r+a+1;return i.createElement("td",{key:l,onMouseOver:function(){t(r),c(a)}},n===r&&s===a?l:String.fromCharCode(l))})))})))}},30393:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return h},toc:function(){return d},default:function(){return p}});var i=t(22122),r=t(19756),a=(t(67294),t(3905)),l=t(23163),s=["components"],c={sidebar_label:"1. Physikalische Schicht",sidebar_position:6},o="Schicht 1: Physikalische Schicht (Netzzugangsschicht) [^1]",h={unversionedId:"Netzwerke/Schichtenmodell/Physikalische-Schicht",id:"version-24o/Netzwerke/Schichtenmodell/Physikalische-Schicht",isDocsHomePage:!1,title:"Schicht 1: Physikalische Schicht (Netzzugangsschicht) [^1]",description:"Auf der phyikalischen Schicht geht es um das konkrete Transportmittel (Velokurier, Lastwagen, ... resp. WLAN, LAN, Mobilfunk, ...). Auch hier werden Adressen ben\xf6tigt, es sind weltweit eindeutige Adressen, die fix an das Ger\xe4t gekn\xfcpft sind.",source:"@site/versioned_docs/version-24o/05-Netzwerke/001-Schichtenmodell/1-Physikalische-Schicht.mdx",sourceDirName:"05-Netzwerke/001-Schichtenmodell",slug:"/Netzwerke/Schichtenmodell/Physikalische-Schicht",permalink:"/24o/Netzwerke/Schichtenmodell/Physikalische-Schicht",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/05-Netzwerke/001-Schichtenmodell/1-Physikalische-Schicht.mdx",version:"24o",sidebarPosition:6,frontMatter:{sidebar_label:"1. Physikalische Schicht",sidebar_position:6},sidebar:"version-24o/sidebar",previous:{title:"2. Vermittlungsschicht",permalink:"/24o/Netzwerke/Schichtenmodell/Vermittlungsschicht"},next:{title:"Schichten und Adressen",permalink:"/24o/Netzwerke/Schichtenmodell/Schichten-und-Adressen"}},d=[{value:"Beispiel \xabSchule\xbb",id:"beispiel-\xabschule\xbb",children:[]},{value:"Internet",id:"internet",children:[]},{value:"Codierung: \xdcbersetzung von Datenpaketen",id:"codierung-\xfcbersetzung-von-datenpaketen",children:[{value:"Text -&gt; Bin\xe4r",id:"text---bin\xe4r",children:[]},{value:"Bin\xe4r -&gt; Text",id:"bin\xe4r---text",children:[]},{value:"\u2b50 Weitere Informationen",id:"-weitere-informationen",children:[]}]}],u={toc:d};function p(e){var n=e.components,c=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},u,c,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schicht-1-physikalische-schicht-netzzugangsschicht"},"Schicht 1: Physikalische Schicht (Netzzugangsschicht) ",(0,a.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,a.kt)("p",null,"Auf der phyikalischen Schicht geht es um das konkrete Transportmittel (Velokurier, Lastwagen, ... resp. WLAN, LAN, Mobilfunk, ...). Auch hier werden Adressen ben\xf6tigt, es sind weltweit eindeutige Adressen, die fix an das Ger\xe4t gekn\xfcpft sind."),(0,a.kt)("h2",{id:"beispiel-\xabschule\xbb"},"Beispiel \xabSchule\xbb"),(0,a.kt)("p",null,"Im Beispiel \xabSchule\xbb m\xfcssen die S\xe4cke, die die vielen Pakete enthalten, nun endlich transportiert werden. Dies \xfcbernehmen Speditionsangestellte, die die S\xe4cke mit Hilfe von Lastwagen an den n\xe4chsten Zielort (z.B. in ein Paketzentrum oder an die Lieferadresse) bringen. Die Spedition k\xfcmmert sich nur um den aktuellen Transportabschnitt."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"@",src:t(87012).Z,title:"Author: Stefan Rothe @ Creative Commons 4.0, Bearbeitet"})),(0,a.kt)("h2",{id:"internet"},"Internet"),(0,a.kt)("p",null,"Die physikalische Schicht besteht aus der Hardware, also den Kabeln und Ger\xe4ten (mit ihren physikalischen Adressen). Die physikalische Adresse wird MAC-Adresse genannt (siehe Begriff MAC-Adressen)."),(0,a.kt)("p",null,"Wieso braucht es zwei Adressen, logische Adressen (Vermittlungsschicht) und physikalische dieser Schicht? Innerhalb eines lokalen Netzwerks werden die physikalischen Adressen verwendet. Da es aber keine M\xf6glichkeit gibt, alle physikalischen Adressen auf der Welt zu kennen und zu wissen, wie man diese Ger\xe4t erreichen kann, braucht es logische Adressen, die zu einem bestimmten Netzwerk geh\xf6ren. Nur so ist es m\xf6glich, mit dem gleichen Ger\xe4t am Morgen zu Hause und sp\xe4ter an der Schule online zu sein."),(0,a.kt)("h2",{id:"codierung-\xfcbersetzung-von-datenpaketen"},"Codierung: \xdcbersetzung von Datenpaketen"),(0,a.kt)("p",null,"Die Datenpakete bestehen aus verschiedenen Zeichen. Wie lassen sich diese in Einsen und Nullen \xfcbersetzen? Auf dem Computer ist jedem Zeichen eine eindeutige Zahl zugeordnet - eine sog. ",(0,a.kt)("strong",{parentName:"p"},"Zeichencodierung"),". Eine g\xe4ngige Zeichencodierung ist etwa ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange"},"ASCII, 128 Zeichen")," oder mit enthaltenen Umlauten ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/ISO_8859-1"},"Latin 1, 256 Zeichen"),". Python verwendet standardm\xe4ssig die Zeichencodierung ",(0,a.kt)("em",{parentName:"p"},"Latin 1")," - f\xfcr emojis aber ist bspw. eine Zeichencodierung mit mehr Zeichenzuordnungen wie ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/UTF-8"},"UTF-8")," notwendig."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Ascii Tabelle"),(0,a.kt)("p",null,"Bemerken Sie: nicht alle zur Verf\xfcgung stehenden Zellen enthalten einen Buchstaben. Diese Zellen wurden bewusst freigehalten, um die entsprechenden Eintr\xe4ge f\xfcr die Ger\xe4testeuerung nutzen zu k\xf6nnen."),(0,a.kt)(l.Z,{mdxType:"AsciiEncoding"})),(0,a.kt)("h3",{id:"text---bin\xe4r"},"Text -> Bin\xe4r"),(0,a.kt)("p",null,"Jedes Zeichen auf der Tastatur hat eine feste Zahl zugeordnet. In Python l\xe4sst sich ein Zeichen leicht in die entsprechende Zahl \xfcbersetzen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"zeichen = 'g'\nzahl = ord(zeichen)\nprint(zeichen, '->', zahl)\n")),(0,a.kt)("p",null,"Dargestellt wird eine Zahl im Dezimalsystem, daher mit der Basis ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),". Um ins Bin\xe4re Zahlensystem mit der Basis 2 zu wechseln, kann die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," verwendet werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"bin_zahl = bin(108)\nprint(bin_zahl)\n\n# Python-Zusatzinformationen \xfcber den Datentyp weglassen:\nbin_zahl = bin_zahl[2:]  # start beim dritten Zeichen\nprint(bin_zahl)\n\n# auf 1 byte = 8 bit erg\xe4nzen\nbin_zahl = bin_zahl.zfill(8)\nprint(bin_zahl)\n")),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"aufgabe")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Wandeln Sie Ihren Namen in Bin\xe4r-Code um, indem Sie"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"zuerst jeden ",(0,a.kt)("inlineCode",{parentName:"li"},"buchstabe"),"n in eine Zahl umwandeln"),(0,a.kt)("li",{parentName:"ul"},"dann die Zahl ins bin\xe4re \xfcbersetzen"),(0,a.kt)("li",{parentName:"ul"},"und schliesslich die bin\xe4re Zeichenkette ausgeben")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=bin--name.py",live_py:!0,title:"bin--name.py"},"name = 'Reto'\nfor buchstabe in name:\n    print(buchstabe)\n")),(0,a.kt)("h3",{id:"bin\xe4r---text"},"Bin\xe4r -> Text"),(0,a.kt)("p",null,"Versuchen Sie nachzuvollziehen, was der folgende Code macht. Erinnerung: ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," wandelt einen Text in eine Zahl um, ",(0,a.kt)("inlineCode",{parentName:"p"},"chr"),' steht f\xfcr "Character" und gibt f\xfcr eine Zahl das entsprechend codierte Zeichen zu\xfcck.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"code = '01000111'\n\n# in Zahl umwandeln\nzahl = int(code)\nprint('Versuch 1', zahl) # geht nicht, wieso?\n\nzahl = int(code, 2)\nprint('Versuch 2', zahl)\n\n# in Zeichen umwandeln\nprint('Zeichen', chr(zahl))\n")),(0,a.kt)("div",{className:"admonition admonition-aufgabe alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"edit",className:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},(0,a.kt)("path",{parentName:"svg",fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),"aufgabe")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Wandeln Sie die bin\xe4re Folge wieder um in Text. Was kommt dabei raus?"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=name.py",live_py:!0,title:"name.py"},"binaer = ['01000111','01000010','01010011','01001100']\nfor code in binaer:\n    print(code)\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"L\xf6sung"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"binaer = ['01000111','01000010','01010011','01001100']\nfor code in binaer:\n    zahl = int(code, 2)\n    print(chr(zahl))\n"))),(0,a.kt)("h3",{id:"-weitere-informationen"},"\u2b50 Weitere Informationen"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ZhEf7e4kopM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle: ",(0,a.kt)("a",{parentName:"li",href:"https://rothe.io/?b=network&p=783655"},"rothe.io"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},87012:function(e,n,t){"use strict";n.Z=t.p+"assets/images/1-school-example-29693bc380317d5bdccd3323c36a3dee.svg"}}]);