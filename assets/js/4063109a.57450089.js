(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[8471],{13919:function(e,t,i){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function M(e){return void 0!==e&&!n(e)}i.d(t,{b:function(){return n},Z:function(){return M}})},44996:function(e,t,i){"use strict";i.d(t,{C:function(){return s},Z:function(){return r}});var n=i(52263),M=i(13919);function s(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,n){var s=void 0===n?{}:n,r=s.forcePrependBaseUrl,a=void 0!==r&&r,d=s.absolute,u=void 0!==d&&d;if(!i)return i;if(i.startsWith("#"))return i;if((0,M.b)(i))return i;if(a)return t+i;var D=i.startsWith(t)?i:t+i.replace(/^\//,"");return u?e+D:D}(s,i,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},80181:function(e,t,i){"use strict";i.d(t,{Z:function(){return I}});var n=i(41788),M=i(67294),s=i(17625),r="videoComponent_187V",a="headerClosed_1HK6",d="headerOpen_hP6H",u="minimize_1JZh",D="description_2U1a",o="title_1XFt",N="cardOpen_1vws",l=i(51436),c=i(86010),I=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!!t.props.expanded,visible:!1},t.videoRef=M.createRef(),t.isInViewport=function(){var e=t.videoRef.current.getBoundingClientRect(),i=e.top,n=e.bottom;i<window.innerHeight&&n>0?t.state.visible||t.setState({visible:!0}):t.state.visible&&t.setState({visible:!1})},t.onClick=function(){t.setState({open:!t.state.open}),t.isInViewport()},t}(0,n.Z)(t,e);var i=t.prototype;return i.componentDidMount=function(){document.addEventListener("scroll",this.isInViewport),this.isInViewport()},i.componentWillUnmount=function(){document.removeEventListener("scroll",this.isInViewport)},i.render=function(){var e=this.props,t=e.title,i=e.src,n=e.type,I=e.children;return M.createElement("div",{ref:this.videoRef,className:r},this.state.open?M.createElement("div",{className:N},M.createElement("div",{className:d},t&&M.createElement("h5",{className:o},t),M.createElement("button",{className:(0,c.default)("button button--sm button--outline button--secondary",u),onClick:this.onClick},M.createElement(s.G,{icon:l.IQi})),I&&M.createElement("div",{className:D},I)),this.state.visible?M.createElement("video",{controls:!0,autoPlay:!0,width:"100%",loop:!0},M.createElement("source",{src:i,type:"video/"+(n||"mp4")})):M.createElement("div",{style:{height:"150px"}},M.createElement(s.G,{icon:l.IJ7,spin:!0}))):M.createElement("button",{className:"button button--block button--outline button--secondary",onClick:this.onClick,style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},M.createElement("div",{className:a},M.createElement("div",{className:o},t||"Video"),I&&M.createElement("div",{className:D},I)),this.state.visible?M.createElement("video",{style:{marginLeft:"auto"},autoPlay:!0,controls:!0,height:"150px",loop:!0},M.createElement("source",{src:i,type:"video/"+(n||"mp4")})):M.createElement("div",{style:{height:"150px"}},M.createElement(s.G,{icon:l.IJ7,spin:!0}))))},t}(M.Component)},75270:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return D},metadata:function(){return o},toc:function(){return N},default:function(){return c}});var n=i(22122),M=i(19756),s=(i(67294),i(3905)),r=i(80181),a=i(44996),d=["components"],u={title:"Cloud"},D="Cloud [^1]",o={unversionedId:"byod-basics/v25/ICT/Grundlegendes/cloud",id:"byod-basics/v25/ICT/Grundlegendes/cloud",isDocsHomePage:!1,title:"Cloud",description:"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.",source:"@site/docs/byod-basics/v25/002-ICT/1-Grundlegendes/5-cloud.mdx",sourceDirName:"byod-basics/v25/002-ICT/1-Grundlegendes",slug:"/byod-basics/v25/ICT/Grundlegendes/cloud",permalink:"/ofi-blog/byod-basics/v25/ICT/Grundlegendes/cloud",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/byod-basics/v25/002-ICT/1-Grundlegendes/5-cloud.mdx",version:"current",lastUpdatedAt:1628779469,formattedLastUpdatedAt:"8/12/2021",sidebarPosition:5,frontMatter:{title:"Cloud"},sidebar:"sidebar",previous:{title:"E-Mail",permalink:"/ofi-blog/byod-basics/v25/ICT/Grundlegendes/E-Mail"},next:{title:"Datenverlust",permalink:"/ofi-blog/byod-basics/v25/ICT/Sicherheit/Datenverlust"}},N=[{value:"Desktop-App",id:"desktop-app",children:[]},{value:"Web-App",id:"web-app",children:[]},{value:"Microsoft 365",id:"microsoft-365",children:[{value:"OneDrive im Browser",id:"onedrive-im-browser",children:[]}]},{value:"Teams-App",id:"teams-app",children:[]}],l={toc:N};function c(e){var t=e.components,u=(0,M.Z)(e,d);return(0,s.kt)("wrapper",(0,n.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cloud"},"Cloud ",(0,s.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("p",null,"\xabCloud\xbb bedeutet, dass Ihre Dateien auf einem Server des Cloud-Betreibers gespeichert werden. Eine Cloud kann aber auch bspw. Rechenleistung zur Verf\xfcgung stellen und Teile einer Anwendung ausf\xfchren.\n\xdcblicherweise steht auf dem Server ebenfalls eine ",(0,s.kt)("a",{parentName:"p",href:"#Web-App"},"Web-App")," zu Verf\xfcgung, damit die Dateien im Browser betrachtet oder bearbeitet werden k\xf6nnen."),(0,s.kt)("h2",{id:"desktop-app"},"Desktop-App"),(0,s.kt)("p",null,"Damit die Desktop-App verwendet werden kann, muss diese erst auf dem Ger\xe4t installiert worden sein. Desktop-Apps bieten meistens einen gr\xf6sseren Funktionsumfang, k\xf6nnen ohne aktive Internetverbindung gestartet und verwendet werden und sind meist performanter."),(0,s.kt)("h2",{id:"web-app"},"Web-App"),(0,s.kt)("p",null,"Die Web-App wird beim \xd6ffnen des Dokuments vom Server des Anbieters heruntergeladen und im Browser (daher auf dem Prozessor des Laptops) ausgef\xfchrt."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Web-App Architektur",src:i(15321).Z})),(0,s.kt)("p",null,"Einzelne Berechnungen k\xf6nnen auch in die Cloud ausgelagert werden, z.B. die Autokorrektur in der Word Web-App:\nBei jeder \xc4nderung wird der aktuelle Abschnitt an die Cloud geschickt und auf Fehler \xfcberpr\xfcft:"),(0,s.kt)(r.Z,{src:(0,a.Z)("/video/cloud-webapp-word-autokorrektur.mp4"),title:"Autokorrektur in Word Onine",expanded:!0,mdxType:"Video"},(0,s.kt)("p",null,"Auf der rechten Seite ist der Datenaustausch, der f\xfcr die Autokorrektur notwendig ist, ",(0,s.kt)("strong",{parentName:"p"},"vom Laptop zur Cloud")," zu sehen. Bei ",(0,s.kt)("strong",{parentName:"p"},"jeder \xc4nderung")," des Dokuments wird der ",(0,s.kt)("strong",{parentName:"p"},"ganze Inhalt")," des aktuellen Abschnitts an die Cloud geschickt.")),(0,s.kt)("p",null,"Web-Apps brauchen eine ",(0,s.kt)("strong",{parentName:"p"},"aktive Internetverbindung")," und sind oft auch etwas langsamer als Desktop-Apps. Meist ist zudem der Funktionsumfang eingeschr\xe4nkt."),(0,s.kt)("h2",{id:"microsoft-365"},"Microsoft 365"),(0,s.kt)("h3",{id:"onedrive-im-browser"},"OneDrive im Browser"),(0,s.kt)("p",null,"In ",(0,s.kt)("strong",{parentName:"p"},"OneDrive im Browser")," kann eine Datei wahlweise in der Web-App oder in der Desktop-App ge\xf6ffnet werden. Mit einem Doppelklick wird die Datei in der Web-App ge\xf6ffnet. Klicke auf die drei vertikalen Punkte ",(0,s.kt)("inlineCode",{parentName:"p"},"\u22ee"),", dann auf \xd6ffnen und In der App \xf6ffnen, um die Datei in der Desktop-App zu \xf6ffnen."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(73330).Z})),(0,s.kt)("h2",{id:"teams-app"},"Teams-App"),(0,s.kt)("p",null,"In der ",(0,s.kt)("strong",{parentName:"p"},"Teams-App")," muss auf die drei horizontalen Punkte ",(0,s.kt)("inlineCode",{parentName:"p"},"\u22ee")," geklickt werden. Es gibt zus\xe4tzlich die M\xf6glichkeit ",(0,s.kt)("inlineCode",{parentName:"p"},"In Teams bearbeiten"),". In diesem Fall wird die Web-App verwendet, diese wird jedoch innerhalb der Team-App gestartet (die Teams-App kann einen Browser anzeigen).\n",(0,s.kt)("img",{src:i(74533).Z})),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Quelle (Bearbeitete): ",(0,s.kt)("a",{parentName:"li",href:"https://rothe.io/?page=ict/writing/2-0-cloud"},"rothe.io"),(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0},15321:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjY0MHB4IiBoZWlnaHQ9IjI4OHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41OyI+CiAgICA8cGF0aCBkPSJNNDUwLjU4Myw0Ni40NjRDNDUwLjU4MywyOS42ODMgNDYzLjc2NCwxNi4wNTkgNDgwLDE2LjA1OUM0OTYuMjM2LDE2LjA1OSA1MDkuNDE3LDI5LjY4MyA1MDkuNDE3LDQ2LjQ2NEM1MTguODU5LDMxLjkzMSA1MzcuOTQsMjUuOTg5IDU1MiwzMy4yMDNDNTY2LjA2LDQwLjQxOCA1NjkuODEsNTguMDc0IDU2MC4zNjksNzIuNjA3QzU3Ni43MjIsNjQuMjE2IDU5Ni41OSw2Ny41NDkgNjA0LjcwOCw4MC4wNDRDNjEyLjgyNSw5Mi41MzkgNjA2LjEzOSwxMDkuNDk2IDU4OS43ODYsMTE3Ljg4N0M2MDguNjY5LDExNy44ODcgNjI0LDEyOS42MDEgNjI0LDE0NC4wMjlDNjI0LDE1OC40NTggNjA4LjY2OSwxNzAuMTcyIDU4OS43ODYsMTcwLjE3MkM2MDYuMTM5LDE3OC41NjIgNjEyLjgyNSwxOTUuNTE5IDYwNC43MDgsMjA4LjAxNUM1OTYuNTksMjIwLjUxIDU3Ni43MjIsMjIzLjg0MiA1NjAuMzY5LDIxNS40NTJDNTY5LjgxLDIyOS45ODUgNTY2LjA2LDI0Ny42NDEgNTUyLDI1NC44NTVDNTM3Ljk0LDI2Mi4wNjkgNTE4Ljg1OSwyNTYuMTI3IDUwOS40MTcsMjQxLjU5NEM1MDkuNDE3LDI1OC4zNzYgNDk2LjIzNiwyNzIgNDgwLDI3MkM0NjMuNzY0LDI3MiA0NTAuNTgzLDI1OC4zNzYgNDUwLjU4MywyNDEuNTk0QzQ0MS4xNDEsMjU2LjEyNyA0MjIuMDYsMjYyLjA2OSA0MDgsMjU0Ljg1NUMzOTMuOTQsMjQ3LjY0MSAzOTAuMTksMjI5Ljk4NSAzOTkuNjMxLDIxNS40NTJDMzgzLjI3OCwyMjMuODQyIDM2My40MSwyMjAuNTEgMzU1LjI5MiwyMDguMDE1QzM0Ny4xNzUsMTk1LjUxOSAzNTMuODYxLDE3OC41NjIgMzcwLjIxNCwxNzAuMTcyQzM1MS4zMzEsMTcwLjE3MiAzMzYsMTU4LjQ1OCAzMzYsMTQ0LjAyOUMzMzYsMTI5LjYwMSAzNTEuMzMxLDExNy44ODcgMzcwLjIxNCwxMTcuODg3QzM1My44NjEsMTA5LjQ5NiAzNDcuMTc1LDkyLjUzOSAzNTUuMjkyLDgwLjA0NEMzNjMuNDEsNjcuNTQ5IDM4My4yNzgsNjQuMjE2IDM5OS42MzEsNzIuNjA3QzM5MC4xOSw1OC4wNzQgMzkzLjk0LDQwLjQxOCA0MDgsMzMuMjAzQzQyMi4wNiwyNS45ODkgNDQxLjE0MSwzMS45MzEgNDUwLjU4Myw0Ni40NjRaIiBzdHlsZT0iZmlsbDpyZ2IoMTQ0LDIwMiwyNDkpO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgPHRleHQgeD0iNDU0LjA4N3B4IiB5PSI2NC43MzZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+Q2xvdWQ8L3RleHQ+CiAgICA8Zz4KICAgICAgICA8cmVjdCB4PSI0MTYiIHk9IjE4NC4wNTkiIHdpZHRoPSIxMjgiIGhlaWdodD0iMzIiIHN0eWxlPSJmaWxsOnJnYigyMzksMTU0LDE1NCk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNDMwLjcxMXB4IiB5PSIyMDcuMDQ2cHgiIHN0eWxlPSJmb250LWZhbWlseTonSGVsdmV0aWNhJztmb250LXNpemU6MjBweDsiPm1laW5lIERhdGVpPC90ZXh0PgogICAgPC9nPgogICAgPHBhdGggZD0iTTMyMCwzMkMzMjAsMjMuMTY5IDMxMi44MzEsMTYgMzA0LDE2TDMyLDE2QzIzLjE2OSwxNiAxNiwyMy4xNjkgMTYsMzJMMTYsMTYwQzE2LDE2OC44MzEgMjMuMTY5LDE3NiAzMiwxNzZMMzA0LDE3NkMzMTIuODMxLDE3NiAzMjAsMTY4LjgzMSAzMjAsMTYwTDMyMCwzMloiIHN0eWxlPSJmaWxsOnJnYigxNzYsMTkwLDE5Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICA8dGV4dCB4PSIxMzcuMDMzcHgiIHk9IjM5LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5MYXB0b3A8L3RleHQ+CiAgICA8ZyBpZD0iQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMTI4LDczLjcwNUMxMjgsNjguNDE0IDEyMy43MDQsNjQuMTE3IDExOC40MTIsNjQuMTE3TDQxLjU4OCw2NC4xMTdDMzYuMjk2LDY0LjExNyAzMiw2OC40MTQgMzIsNzMuNzA1TDMyLDE1MC40MTJDMzIsMTU1LjcwNCAzNi4yOTYsMTYwIDQxLjU4OCwxNjBMMTE4LjQxMiwxNjBDMTIzLjcwNCwxNjAgMTI4LDE1NS43MDQgMTI4LDE1MC40MTJMMTI4LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iNjIuNDQxcHgiIHk9Ijg3LjM0NnB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5BcHA8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBpZD0iQnJvd3NlciI+CiAgICAgICAgPHBhdGggZD0iTTMwNCw3My43MDVDMzA0LDY4LjQxNCAyOTkuNzA0LDY0LjExNyAyOTQuNDEyLDY0LjExN0wxNTMuNTg4LDY0LjExN0MxNDguMjk2LDY0LjExNyAxNDQsNjguNDE0IDE0NCw3My43MDVMMTQ0LDE1MC40MTJDMTQ0LDE1NS43MDQgMTQ4LjI5NiwxNjAgMTUzLjU4OCwxNjBMMjk0LjQxMiwxNjBDMjk5LjcwNCwxNjAgMzA0LDE1NS43MDQgMzA0LDE1MC40MTJMMzA0LDczLjcwNVoiIHN0eWxlPSJmaWxsOnJnYigxNjUsMjE0LDE2Nyk7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7Ii8+CiAgICAgICAgPHRleHQgeD0iMTg2LjcwNXB4IiB5PSI4OC4zNDZweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+QnJvd3NlcjwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGlkPSJXZWItQXBwIj4KICAgICAgICA8cGF0aCBkPSJNMjg4LDExNS4yNTlDMjg4LDExMy40OTIgMjg2LjU2NiwxMTIuMDU5IDI4NC44LDExMi4wNTlMMTYzLjIsMTEyLjA1OUMxNjEuNDM0LDExMi4wNTkgMTYwLDExMy40OTIgMTYwLDExNS4yNTlMMTYwLDE0MC44NTlDMTYwLDE0Mi42MjUgMTYxLjQzNCwxNDQuMDU5IDE2My4yLDE0NC4wNTlMMjg0LjgsMTQ0LjA1OUMyODYuNTY2LDE0NC4wNTkgMjg4LDE0Mi42MjUgMjg4LDE0MC44NTlMMjg4LDExNS4yNTlaIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDIyNCwxMzApO3N0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MXB4OyIvPgogICAgICAgIDx0ZXh0IHg9IjE4Mi41MTZweCIgeT0iMTMzLjE3MXB4IiBzdHlsZT0iZm9udC1mYW1pbHk6J0hlbHZldGljYSc7Zm9udC1zaXplOjIwcHg7Ij5XZWItQXBwPC90ZXh0PgogICAgPC9nPgogICAgPGcgaWQ9IldlYi1BcHAxIiBzZXJpZjppZD0iV2ViLUFwcCI+CiAgICAgICAgPHBhdGggZD0iTTU0NCwxMTUuMjI5QzU0NCwxMTMuNDYzIDU0Mi41NjYsMTEyLjAyOSA1NDAuOCwxMTIuMDI5TDQxOS4yLDExMi4wMjlDNDE3LjQzNCwxMTIuMDI5IDQxNiwxMTMuNDYzIDQxNiwxMTUuMjI5TDQxNiwxNDAuODI5QzQxNiwxNDIuNTk1IDQxNy40MzQsMTQ0LjAyOSA0MTkuMiwxNDQuMDI5TDU0MC44LDE0NC4wMjlDNTQyLjU2NiwxNDQuMDI5IDU0NCwxNDIuNTk1IDU0NCwxNDAuODI5TDU0NCwxMTUuMjI5WiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMjQsMTMwKTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjFweDsiLz4KICAgICAgICA8dGV4dCB4PSI0MzguNTE2cHgiIHk9IjEzMy4xNzFweCIgc3R5bGU9ImZvbnQtZmFtaWx5OidIZWx2ZXRpY2EnO2ZvbnQtc2l6ZToyMHB4OyI+V2ViLUFwcDwvdGV4dD4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik00MDMuOTk5LDIwMi4wMDJMNDE2LDIwOEw0MDQuMDAxLDIxNC4wMDJDNDA3LjAwMSwyMTEuMDAyIDQwNi45OTksMjA1LjAwMiA0MDMuOTk5LDIwMi4wMDJaIi8+CiAgICA8cGF0aCBkPSJNODAsMTYwLjA1OUw4MCwyMDguMDU5QzgwLDIwOC4wNTkgMzUxLjUyMywyMDguMDExIDQwNi40LDIwOC4wMDIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoycHg7Ii8+CiAgICA8cGF0aCBkPSJNMzAwLDEzNC4wMjlMMjg4LDEyOC4wMjlMMzAwLDEyMi4wMjlDMjk3LDEyNS4wMjkgMjk3LDEzMS4wMjkgMzAwLDEzNC4wMjlaIi8+CiAgICA8cGF0aCBkPSJNNDE2LDEyOC4wMjlMMjk3LjYsMTI4LjAyOSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KICAgIDxwYXRoIGQ9Ik00MDQsMTg2TDQxNiwxOTJMNDA0LDE5OEM0MDcsMTk1IDQwNywxODkgNDA0LDE4NloiLz4KICAgIDxwYXRoIGQ9Ik0yMjQsMTQ0LjA1OUwyMjQsMTkyTDQwNi40LDE5MiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6YmxhY2s7c3Ryb2tlLXdpZHRoOjJweDsiLz4KPC9zdmc+Cg=="},73330:function(e,t,i){"use strict";t.Z=i.p+"assets/images/onedrive-open-64614cd17252de6f9eee8e961b1081ef.png"},74533:function(e,t,i){"use strict";t.Z=i.p+"assets/images/teams-open-7af7b912b0949a4680003cee7244d493.png"}}]);