(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[1243],{3905:function(e,A,n){"use strict";n.d(A,{Zo:function(){return Q},kt:function(){return B}});var r=n(67294);function g(e,A,n){return A in e?Object.defineProperty(e,A,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[A]=n,e}function t(e,A){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var A=1;A<arguments.length;A++){var n=null!=arguments[A]?arguments[A]:{};A%2?t(Object(n),!0).forEach((function(A){g(e,A,n[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(n,A))}))}return e}function i(e,A){if(null==e)return{};var n,r,g=function(e,A){if(null==e)return{};var n,r,g={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],A.indexOf(n)>=0||(g[n]=e[n]);return g}(e,A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],A.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(g[n]=e[n])}return g}var u=r.createContext({}),C=function(e){var A=r.useContext(u),n=A;return e&&(n="function"==typeof e?e(A):a(a({},A),e)),n},Q=function(e){var A=C(e.components);return r.createElement(u.Provider,{value:A},e.children)},E={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},I=r.forwardRef((function(e,A){var n=e.components,g=e.mdxType,t=e.originalType,u=e.parentName,Q=i(e,["components","mdxType","originalType","parentName"]),I=C(n),B=g,s=I["".concat(u,".").concat(B)]||I[B]||E[B]||t;return n?r.createElement(s,a(a({ref:A},Q),{},{components:n})):r.createElement(s,a({ref:A},Q))}));function B(e,A){var n=arguments,g=A&&A.mdxType;if("string"==typeof e||g){var t=n.length,a=new Array(t);a[0]=I;var i={};for(var u in A)hasOwnProperty.call(A,u)&&(i[u]=A[u]);i.originalType=e,i.mdxType="string"==typeof e?e:g,a[1]=i;for(var C=2;C<t;C++)a[C]=n[C];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}I.displayName="MDXCreateElement"},4485:function(e,A,n){"use strict";n.r(A),n.d(A,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return C},toc:function(){return Q},default:function(){return I}});var r=n(22122),g=n(19756),t=(n(67294),n(3905)),a=["components"],i={},u="Turtle Graphics",C={unversionedId:"Programmieren-1/Aufgaben/turtles",id:"version-24o/Programmieren-1/Aufgaben/turtles",isDocsHomePage:!1,title:"Turtle Graphics",description:"Skripts Herunterladen",source:"@site/versioned_docs/version-24o/04-Programmieren-1/Aufgaben/01_turtles.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/turtles",permalink:"/ofi-blog/24o/Programmieren-1/Aufgaben/turtles",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24o/04-Programmieren-1/Aufgaben/01_turtles.md",version:"24o",sidebarPosition:1,frontMatter:{},sidebar:"version-24o/sidebar",previous:{title:"2. VS Code",permalink:"/ofi-blog/24o/Software/vscode"},next:{title:"Regenbogen Display",permalink:"/ofi-blog/24o/Programmieren-1/Aufgaben/smartphone_rainbow"}},Q=[{value:"Befehle",id:"befehle",children:[{value:"Weitere Befehle",id:"weitere-befehle",children:[]}]},{value:"Aufgaben",id:"aufgaben",children:[]}],E={toc:Q};function I(e){var A=e.components,i=(0,g.Z)(e,a);return(0,t.kt)("wrapper",(0,r.Z)({},E,i,{components:A,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"turtle-graphics"},"Turtle Graphics"),(0,t.kt)("p",null,(0,t.kt)("a",{target:"_blank",href:n(89203).Z},"Skripts Herunterladen")),(0,t.kt)("h2",{id:"befehle"},"Befehle"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"# Muss zuoberst im Skript stehen, um alle Befehle zum\n# Zeichnen verf\xfcgbar zu machen\nfrom gbsl_turtle import *\n\nforward(100)    # 100 Schritte vorw\xe4rts\nbackward(100)   # 100 Schritte r\xfcckw\xe4rts\nleft(90)        # 90\xb0 links drehen\nright(90)       # 90\xb0 rechts drehen\n\nsetheading(0)       # Orientierung festlegen: nach rechts schauen \u25b6\ufe0f\nsetheading(90)      # Orientierung festlegen: nach oben schauen   \ud83d\udd3c\nsetheading(180)     # Orientierung festlegen: nach links schauen  \u25c0\ufe0f\nsetheading(-90)     # Orientierung festlegen: nach unten schauen  \ud83d\udd3d\n\ngoto(50, 10)    # Springt zum Punkt (50, 10). Die Linie wird gezeichnet\n                #   Von der Mitte des Bildschirms 50 Pixel rechts \n                #   und 10 Pixel nach Oben\n\ngoto(50, 10, draw=False) # Wie goto(50, 10), aber der Stift wird abgehoben\n\ndone()  # fertig mit Zeichnen - warte auf Klick aufs Ausgabefenster\n")),(0,t.kt)("h3",{id:"weitere-befehle"},"Weitere Befehle"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py"},"pensize(10)     # setzt die Stiftbreite auf 10\npencolor('red') # setzt die Stiftfarbe auf rot\n\npenup()         # hebt den Stift ab - alle folgenden Befehle hinterlassen\n                #   keine Linie\npendown()       # setzt den Stift ab - alle folgenden Befehle zeichnen wieder\nclear()         # l\xf6scht alles gezeichnete\n\nhome()              # Springt zum Punkt (0, 0) und setzt die Orientierung\n                    # zur\xfcck (schaut nach rechts)\nhome(draw=False)    # wie home(), nur dass keine Linie gezeichnet wird\n\nwrite('Hallo')  # Schreibt 'Hallo'\n\nhideturtle()    # Versteckt das Dreieck\nshowturtle()    # Zeigt das Dreieck wieder\n\nspeed(0)        # zeichnet so schnell wie m\xf6glich\nspeed(10)       # zeichnet so langsam wie m\xf6glich\n\n# Advanced\nScreen().tracer(2)  # f\xfchrt nur jede zweite Bildschirm-Aktualisierung durch.\n                    #   Sinnvoll bspw. f\xfcrs Zeichnen eines Kreises\nScreen().tracer(1)  # Standard-Einstellung\n")),(0,t.kt)("h2",{id:"aufgaben"},"Aufgaben"),(0,t.kt)("p",null,(0,t.kt)("a",{target:"_blank",href:n(89203).Z},"Skripts Herunterladen")),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, das ein Hochhaus zeichnet"),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("img",{alt:"skyscraper",src:n(41276).Z})),(0,t.kt)("p",{parentName:"li"},"Zusatz: zeichnen Sie die Eingangst\xfcre blau.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, das eine Spirale zeichnet"),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("img",{alt:"exercise03_helix",src:n(17808).Z}))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, das die folgenden Quadrate zeichnet"),(0,t.kt)("p",{parentName:"li"}," ",(0,t.kt)("img",{alt:"exercise03_quadrat_a",src:n(59051).Z})),(0,t.kt)("p",{parentName:"li"}," ",(0,t.kt)("strong",{parentName:"p"},"Tipp")," Beginnen Sie mit einem Quadrat mit Seitenl\xe4nge ",(0,t.kt)("em",{parentName:"p"},"100")," und werden dann immer ",(0,t.kt)("em",{parentName:"p"},"10")," Einheiten k\xfcrzer."),(0,t.kt)("p",{parentName:"li"}," ",(0,t.kt)("strong",{parentName:"p"},"Zusatz")," Zeichnen Sie ein Regenbogen-Quadrat und setzen Sie die Stiftbreite auf ",(0,t.kt)("em",{parentName:"p"},"10")," Einheiten."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-py"},"# Regenbogenfarben:\nrainbow_colors = [\n   'red',\n   'orangered',\n   'orange',\n   'yellow',\n   'lightgreen',\n   'lime',\n   'green',\n   'blue',\n   'indigo',\n   'violet'\n]\n")),(0,t.kt)("p",{parentName:"li"}," ",(0,t.kt)("img",{alt:"quadrat_colored",src:n(47366).Z}))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, das eine Tier-\xe4hnliche Form zeichnet"),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("img",{alt:"animal",src:n(23094).Z})))))}I.isMDXComponent=!0},89203:function(e,A,n){"use strict";A.Z=n.p+"assets/files/01_turtles-d0768e2caeada58c5399eb4dc6bd82b0.zip"},23094:function(e,A){"use strict";A.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADBCAYAAAC+C2ljAAAYImlDQ1BJQ0MgUHJvZmlsZQAAWIWVeQdUFEvQbs/MJnaJS84gGSRnlZwzkkFQlpzDkrMBUYKAKFnJGBABFQlKRkURFQOIIkoQFUVFUFREeQOi9/73vfPeeb1nZr6tqa7+qqu6Z2oXAG4WSlhYEMwIQHBIJNXGSFfAydlFAD8NIEBEPwBwUTwjwnSsrc1RDP5c/2dbHkW10fZQet3W/37//9qYvLwjPAGArFHs4RXhGYziZgAwHJ5h1EgAsEOoXCgmMmwdL6CYhYoSBACHWce+vzHHOvb4jbdu6NjZ6KFYGwACLYVC9QWAfp23QLSnL2qHHuWII4d4+YegqntRrOnpR/FCXe1BdbYGB4eu43kUi3v8y47v/7Dp8dcmheL7F//2ZaMR9P0jwoIocf+f0/H/bsFBUX/G2IIetH5UY5t1n9F5OxMYaraOaVHcEeJhaYViMopv+ntt6K/jp35Rxvab+vOeEXronAE2AGDgRdE3QzEPitmiAu11NrEChbrRF9WHLf0jTew2sQc11GbTPhwdEmRpvmnnsJ+3yR9c5h1hYPtHx8ff0ATFaKbBzfF+do6/ecLXov0dLFFMj+LhiEBbs82+z+P99Cz/6FCjbNY5C6P4sw/V0Oa3DsIRHPHHL0TGk7IxFpoLiHakn53x776Ik3eEk/kfDl7e+ga/OSBe3iH2m9wQNLt0bTb7poUFWW/qI2XeQUY2v+cZaYqItv3T90EkmmC/5wGZDqCYWm+OtRwWaW33mxsGBuZAD+gDARCFHh4gFAQA/7vzrfPot993DAEFUIEv8AbSm5I/PRw37oSgZ1sQD96jyBtE/O2nu3HXG0Sj8p9/pb/P0sBn4270Ro9A8ArFwRgujCZmO8YcPWujhwJGDaP+p58Aw59RcQY4fZwxzhAn8ZeHJ8o6CD2owP//IDNDr96od+tcQv748I897Cvsfew0dgQ7iX0CHMDLDSubWnv891P/w1wAWIBJ1Jrhpnce//YOI4qyVsboYjRQ/ih3DBuGC0hjlFBPdDBaqG/KqPTfDKP+cvtnLv873jrrf/uzKaeXpFfeZOHxNzJ6f7X+a0XvX3PkhV7N/quJHEYuIQNIL3IL6UBagQDSjbQhQ0jnOv6bCS83MuHPaDYb3AJRO/5/dOTOyc3Jrf5nbMrm+OvzFRHpHRu5vhj0QsPiqP6+fpECOuhu7C1gEuIps1VAQU5eDYD1vf331rFks7FnQ2z3/pFR0JxWYwWAuPKPLLQOgMYVdGs78I9M5CkA7J8AON3kGUWN/i1b344BFn1iMKCrghPwASEgjvqjAFTAdqANDIApsAJ2wBnsRmfcDwSjnGNAItgH0kAmyAX5oASUg2pwBpwHF0Er6AC94Aa4DYbBCBhH82IWvAMLYBn8gCAID9FBzBAnxA+JQFKQAqQGaUIGkDlkAzlD7pAvFAJFQYnQASgTyoNKoEroLHQBaod6oVvQfegJNAXNQYvQCozAtDALzAuLwrKwGqwDm8F2sBvsC4fD8XAqnA0XwVVwPdwC98K34RF4En4Hf0EAQkLYEEFEGlFD9BArxAXxQahIMpKBFCBVSANyBY3zQ2QSmUe+Y3AYZowARhrNTWOMPcYTE45JxmRhSjBnMC2Ya5iHmCnMAuYXlg7Lg5XCbsOaYJ2wvtgYbBq2AHsKexl7HV03s9hlHA7HhhPDqaLr0hkXgEvAZeFO4hpxPbj7uBncFzwez4mXwmvgrfAUfCQ+DV+Mr8d34x/gZ/HfCCQCP0GBYEhwIYQQ9hMKCHWELsIDwmvCDxpGGhGabTRWNF40cTQ5NDU0V2ju0czS/CAyEcWIGkQ7YgBxH7GI2EC8TnxGXCKRSFtI6qSdJH/SXlIRqYl0kzRF+k5LppWk1aN1pY2izaY9TdtD+4R2iY6OTpROm86FLpIum+4sXT/dc7pv9Mz0MvQm9F70KfSl9C30D+g/MNAwiDDoMOxmiGcoYLjEcI9hnpGGUZRRj5HCmMxYytjO+JjxCxMzkzyTFVMwUxZTHdMtpjdkPFmUbED2IqeSq8n95BlmhFmIWY/Zk/kAcw3zdeZZFhyLGIsJSwBLJst5lrssC6xkViVWB9ZY1lLWTtZJNoRNlM2ELYgth+0i2yjbCjsvuw67N3s6ewP7A/avHNwc2hzeHBkcjRwjHCucApwGnIGcRzlbOSe4MFySXDu5YrjKuK5zzXOzcG/n9uTO4L7I/ZQH5pHkseFJ4KnmGeL5wsvHa8QbxlvM2887z8fGp80XwHecr4tvjp+ZX5Pfn/84fzf/WwFWAR2BIIEigWsCC4I8gsaCUYKVgncFf2wR22K/Zf+Wxi0TQkQhNSEfoeNCfUILwvzCFsKJwueEn4rQiKiJ+IkUigyIfBUVE3UUPSTaKvpGjEPMRCxe7JzYM3E6cS3xcPEq8UcSOAk1iUCJkxLDkrCksqSfZKnkPSlYSkXKX+qk1P2t2K3qW0O2Vm19LE0rrSMdLX1OekqGTcZcZr9Mq8wHWWFZF9mjsgOyv+SU5YLkauTG5cnypvL75a/ILypIKngqlCo8UqRTNFRMUWxT/KQkpeStVKY0psysbKF8SLlP+aeKqgpVpUFlTlVY1V31hOpjNRY1a7UstZvqWHVd9RT1DvXv21S2RW67uO3jduntgdvrtr/ZIbbDe0fNjhmNLRoUjUqNSU0BTXfNCs1JLUEtilaV1rS2kLaX9int1zoSOgE69TofdOV0qbqXdb/qbdNL0uvRR/SN9DP07xqQDewNSgyeG24x9DU8Z7hgpGyUYNRjjDU2Mz5q/NiE18TT5KzJgqmqaZLpNTNaM1uzErNpc0lzqvkVC9jC1OKYxTNLEcsQy1YrYGVidcxqwlrMOtz66k7cTuudpTtf2cjbJNoM2DLb7rGts12207XLsRu3F7ePsu9zYHBwdTjr8NVR3zHPcdJJ1inJ6bYzl7O/c5sL3sXB5ZTLl10Gu/J3zboqu6a5jrqJucW63drNtTtod+cehj2UPZfcse6O7nXuqxQrShXli4eJxwmPBU89z0LPd17aXse95rw1vPO8X/to+OT5vPHV8D3mO+en5VfgN++v51/i/ynAOKA84GugVeDpwLUgx6DGYEKwe3B7CDkkMORaKF9obOj9MKmwtLDJ8G3h+eELVDPqqQgowi2iLZIFfc0ZihKPOhg1Fa0ZXRr9LcYh5lIsU2xI7FCcZFx63Ot4w/jaBEyCZ0JfomDivsSpJJ2kymQo2SO5L0UoJTVldq/R3jP7iPsC993ZL7c/b//nA44HrqTypu5NnTlodPBcGn0aNe3xoe2Hyg9jDvsfvpuumF6c/ivDK2MwUy6zIHM1yzNr8Ij8kaIja9k+2XdzVHLKcnG5IbmjR7WOnsljyovPmzlmcazluMDxjOOf8/fk3ypQKigvJBZGFU4WmRe1FQsX5xavlviVjJTqljae4DmRfuLrSa+TD8q0yxrKecszy1cq/CvGKo0qW6pEqwqqcdXR1a9qHGoGatVqz57iOpV56ufpkNOTZ2zOXDurevZsHU9dzjn4XNS5uXrX+uHz+ufbGqQbKhvZGjObQFNU09sL7hdGL5pd7LukdqmhWaT5xGXmyxktUEtcy0KrX+tkm3Pb/XbT9r4r269cvipz9XSHYEdpJ2tnThexK7VrrTu++0tPWM98r2/vTN+evvF+p/5H13Zeu3vd7PrNG4Y3+gd0BrpvatzsuLXtVvug2mDrbZXbLUPKQ5fvKN+5fFflbss91Xttw+rDV+7vuN/1QOtB70P9hzcemTy6PWI5cn/UfnTssevjyTGvsTdPgp58ehr99Mf43mfYZxkTjBMFz3meV72QeNE4qTLZOaU/NTRtOz0+4znz7mXEy9XZ1Fd0rwpe878++0bhTcec4dzw211vZ9+Fvfsxn/ae6f2JD+Ifmj9qfxxacFqY/UT9tLaYtcS5dPqz0ue+L9Zfni8HL//4mvGN89uZ72rfB1YcV17/iFnFrxb9lPh55ZfZr2drwWtrYRQqZeNVAEEP2McHgMXTANA5A8A8jL5T0P+uvTYbAq2XHAA4QOlwOGKA0cPK4oTxDARuGk6iAEmT1o4umr6YYZpJiZzMPMoqz5bG/prTnOsyDzdvDj8QiBJcFAoS/iyaIs4oUSolubVVRlf2gbyPwpJSqgqXap26+rahHY4ak1o+2u90g/UWDIINXxnvMXloZmTebClolW29aLPDNsmuw/6bo6JTkHOVy6grwU1tt8+ePPdOypwn2Uve28on0PeAX5H/uYCOwMGgseCXIZ9CV8PxVOYInkjuKJZoYvRqzNvYR3Ft8cUJ0YlWSaJJP5LvpdTsjd23a7/mgS2p+NQPB0fTeg7VHy5Jz8hIzqRmBRzxyHbM2ZbLmfv96Hhe57Hy4wfy/QusClWLBIqJxZ9LXpQOneg/eaXsfHl5RVZldJVrtXbNllq4dvpUz+mKMylnverszpnUa59Xa5BvlGgSvMBxkfbir0vzzY8vd7fUtKa1BbZbX1G9KtBB0/G5c6pruLu3p7n3TF9Zf/61I9f33qAM7LjJcXP51qPBy7cLhxLuuN81vic/zH0fd3/pwYuH3Y/KRxJHHR/LjiFjD54UPXUeZx2//Sx2Qmhi8HnUC/EXLycrptymuafHZgpe2s4yzt55lf5a//Xam/Y5ylv4bem77e9m5gveW3zAf+j+GLEgsND7yfrT6KLpYtvS1qVTnwU/l38R/FK/rLM89bX0W+B315XEH49/1qytbcTfAJZHMMgcphebj4vEuxOcaGyJpiRT2p10nvRZDL2M38hyzH4s1ayv2eU54jn7udl5Anm7+XnRHJgQMhC+LCokliO+Ihko9UzaXKZdTlq+RJFeKUV5QXWP2sA22e3FO35pemld1xHSTdYbM5A1TDMaM5E0jTVrMJ+wJFmpWXvsTLdpsL1n99GBzlHKydDZ3SVuV65rjVvL7ht7RtxnKB89vnsBb5wPyZfej9GfHMASyBJEDmYIIYbCod/C3oWPUwciLkQWRiVE74pRj2WLXYwbjm9KyE0MTbJKlk9hTlneO76vd//pAzmpsQc90kwPSaB741R6d8aJzIQs5yPq2ZzZP3ImcruPVuUdPBZ43DnfuEC5ULCIWLRYPFbSUVp+Yv9JjzK9cuEKbMVc5WjVzeorNY21NadKTh89c+hsQl3oOfd66/MaDRKN5MbVplcX7l/sQveryssFLTmtmW2Z7Ueu5F0t7qjqrOsq7D7QE9rr1mfRr3VN+br0DYkBiZvSt5QGNW+bDtnesbpreG/HsPx90QfcD+kfQY+WRl6Ojjy+Pnb5Se3To+NRz+wnlJ+zPv/y4tHkpam86fAZ65eyswyzH17de934Jnsu+K3pO9F3v+Yfvq/5QP2osYBZuPkpfdF4CbfU/dnt88KX6C+/lo9/Vfg68a3sO3XF+Yfjqt/PrF/dm/EXgppgZ4QJuYjZhSVi23FUvDIBQ7hJk0v0IhnSytMJ0fMwkBnpmTjI/MyKLBasVLYy9gecEJcGtw9PHm8v33sBLkHdLYFCecJtIi/EgLighJbkLinq1gPS+TJnZNvlBuXHFd4r/lQmqXCriqupqhtss9q+c4e1hoWmsZaWtoKOoC6t7me9J/pXDIoNY43sjeVMiCYTpo1m+80dLKQtcZbTVt3WZTuTbdxtde2E7DH2Lx36HcudEp2dXBR30e167drjVrQ7dI+hO4/7AuW6R7Gnv5eqN857xKfGN9JPz5/ZfyagOTAtyClYIng15GZoZphxOCa8h5oYoRLxKbIuyjOaO/pBTEasduxyXH08JYE94V7i4STdpJ/JV1Pi9qrvXdnXsT/5gE4qktp/cG+aetrSofOH/dJF0mcyqjO9siSyFo60Zx/MsckVyH1/9AqaQ1bH2Y8/z68u8C2UKHxbVFfsXyJe8rr07InMk6FlNuVKFawVS5XDVXXV+2rsakVrl09dO517xuesQ93Oc+b1hue1GlQaJZt4LhAvLF98fqm/ufbywZbQ1ti27PaaKx1XH3V86CJ0C/Vo9rr0xfQfu9Z0fejGu5uct0wHU9An2OJdxXuxw/0PWB8GP7o1Kvk4e2z5qff4/ETWC9XJD9OtL4teHX/T/Pbn+7QFy6WQ5c8/ONfj//s3uPWGUwEgrx8A+2UAbPcBkHkDALFVtM4kAmBNB4CdOoCnjAB8PB5AlUZ/nx8QesahVScjYEdrYQmghNaa5sAFrTBjwWFQCE6DdjAIJsAChEUrRlm0TnSFIqAsqAbqgsagJZgeloSNYC94H1wOd8LP4FWEF9FE3JEDyGnkNrKAYcXsQGu3TMwlzDMsDiuPdcOmY1uwszhWnAEuBleHm8CT8Ub4ZHwL/iNBkuBNqCJM0vDTuNNU0cwSJYghxDYSgeRCaqBFaHfRNtMx0AXR3abfSp9D/5lhF8M1RlnGUiYapnimT2R/8ktmD+YZFl+W96wxaMWSxy7E3sJhzjHDmcjFxdXHHcLDzzPCm8fnwC/IvyQwJFi3JVsoSthdRFOUTwwSmxUflGiSLJRK3uqN7oJKsjxyWLllBaBIq8SlLKGyXdVSjaIes+3I9tod3Rrjmt+16XS26Grq7dFPN2g3XDSWN4kx7TVntKBYXrZGdmrbJNletVtx2O641+mmC9uuANcbuyX3FFBIHoe8IO8kn+9+0f5LgeFB70P8Q2fDKdSJSJeoxzFecTzxI4k5yaZ7kX2dB6IPyqS9OnwywyGL4chgTsXRxGOU/J2FVsXupVknRyo0qgZro88w1cXXv2q0u3CjeUdLe/uOqwNdLj1f+lcG5AbFhhbunXngN2IylvDMaYprNn6u633tJ/LSt+Wwb6krRj/u/2T6Jb3GtrF/QOjbBh7QAmbAA0SBPNAAZmj0A0ACyAInQSPoA6PgHQRBHGjsjSB3KB7Kh5qgIWgOxsMisAEa+VS4Fr4Bv0Ere1nEDolHKtAa/iOGA6OLCcYUYa5jFrECWCtsCrYJO43W4ma4fbhW3AJeAu+JL8c/I3ATdhFOEl7QCNP40zTRfCfqEbOJkyQVUjbpDVofV9JBdJ50N+ll6YsYMAzhDFOMtowDTBpMrWRF8kVmReZWFg2WAVZb1hm2KHYiexWHBsdTzjguHjTegTwcPLd4U/jU+b7zdwmkC7pskROiFXovPCxySbRYbL94sISLpImU+lZJaT4ZsixBDsj9VCAp8ijJKOupuKhGquWo12+7vX1eg1FTRctVO1anWLdLb86A09DKKNN4yJTJzNX8rMV3K3PrYztHbDnsdtlXOLxyknGOdxl05XeL3/3UXYfS4CngddyHxjfZ71OAR+CDYK2QujByeBz1RaRBVF0Mc2x9vGHCdFJSCsfepv2GB8YO+qYtHk7IgDMPHSFlV+ZaHl071pwfVChR9Lak8URcmWEFR+X76hu11aczz+acKzhf1XjxwvVLE5e/tbFfUetw6zrY09A3fp1uwPDWodsjd+WHyx7yjNSPWY/DE/2TJS/V3yi9u/Nh9VPfZ43l5G/5K1mrwb80NuOPBSTAgq59GaAJrIAniAM54BToAo/BIkQPSULGkA90EF3v16CXMBYWh03hMLgQ7kYjzoxoIcHICeQOsoZRxPhhKjBPsCzYndhc7EMcO84NV4P7gFfHp+EfEUQIsYQhGiGaBJoRogLxOPE7iUIaot1O20AnQldJL0h/ikGOoZPRknGGKZHMR+5n9mdhZGljpbCR2FrZvThYOAY4k7hUuZa523lSeI352Phe83cKFApGbnEQ2iEsIsIuSi9GEMdJ4CSJUoxbOaVFZBRlDeSc5A8q9CohyqYqhapz6nrbqnbgNSI0Z7R36TzSs9S/Zahn1G2yzbTNXM2iw0rf+rnNfjsJ+4eOSc6iLnddqbtZ9jRTbD2+eJX5WPhh/PsDs4LdQtXCOSPgyIXo6diMeIWEyaRjKRb7GPc/S72Uln94X0ZMVnT2nlzs0fpjTvmEgs6iuBKNE8STU+V9leerq2urTh86K1F3uz6kgdzYesHtEqa5vsW+DbSfu+rcSdN1tSe0T6T/+nWPG79uFg3K3x6443z3zXDk/dWHKY9+jSY+/vok9OmrZ64T918YTNZPwzOmL3Nmh1+T3ujPRbyteNc7//z9pw9rC2Dh16f3i8+Xrn4u/BKwrLC88rX5m+93ru+9K3tWfv4oXRVarf+p/LPzl8Kv2jWOtaz1+Ef4KCpsPD4gWl0AsM/X1pZEAcDnAfDz6Nraj6q1tZ/VaLHxDICeoN//62w8axgBOLG4jgYlR/b+9/+V/wVqS8CTyJKHAgAAAZ1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzIwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE5MzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpthn5ZAAAIXUlEQVR4Ae3dgW3bVhAGYKnIIBnBGwSeJKt4FU9iaAOPkBGygRsGeAGeyyZy/A4+6v8EFCxZ+nL3nfqDKFzp/PLjdfIiQIBAoMA/gTMbmQABAj8FBKA3AgECsQICMHb1BidAQAB6DxAgECsgAGNXb3ACBASg9wABArECAjB29QYnQEAAeg8QIBArIABjV29wAgQEoPcAAQKxAgIwdvUGJ0BAAHoPECAQKyAAY1dvcAIEBKD3AAECsQICMHb1BidAQAB6DxAgECsgAGNXb3ACBD4hIEDgdgQeHh52hzmfz6fXH/7++tqfzncLv/Hi//X3xjLLbvcEuIxSIQIfK7CFy+Vy2W3idfhtN72+9qfz3cJvuLj11i0APQG+YYFuJdBd4MuXL+1CZph1C7+tL0+AYzuOBAjECQjAuJUbmACBISAAh4QjAQJxAgIwbuUGJkBgCAjAIeFIgECcgACMW7mBCRAYAgJwSDgSIBAnIADjVm5gAgSGgAAcEo4ECMQJCMC4lRuYAIEhIACHhCMBAnECAjBu5QYmQGAICMAh4UiAQJyAAIxbuYEJEBgCAnBIOBIgECcgAONWbmACBIaAABwSjgQIxAn4ROi4lRv4PQL39/fv+fHSn/327dvp8+fPbT8RevtI/O0Tqzu9zj++B+ClU0N6IdBVYAu/5+fn093dXdcW2wXMa6huH4vvCfD1hpwT+I3AFn5PT0+/ucM/OpKA/wZ4pG3plQCBpQICcCmnYgQIHElAAB5pW3olQGCpgABcyqkYAQJHEhCAR9qWXgkQWCogAJdyKkaAwJEEBOCRtqVXAgSWCgjApZyKESBwJAEBeKRt6ZUAgaUCAnApp2IECBxJQAAeaVt6JUBgqYAAXMqpGAECRxIQgEfall4JEFgqIACXcipGgMCRBATgkbalVwIElgoIwKWcihEgcCQBAXikbemVAIGlAj4ReimnYu8V6PydG90/Dv+99ok/7wkwcetNZx7fudG0vZ/fBeLj8Ltu5+/68gT4d25+qkjAd24UwSq7K+AJcJfFRQIEEgQEYMKWzUiAwK6AANxlcZEAgQQBAZiwZTMSILArIAB3WVwkQCBBQAAmbNmMBAjsCgjAXRYXCRBIELjZ3wN8eHiY9nc+n08vLy/Tte3k9X3/ucEFAgRuViDmCXAv/C6XiwC82be2wQj8WSDmCXCPwtPfnoprBHIEYp4Ac1ZqUgIErhUQgNdKuY8AgZsTEIA3t1IDESBwrYAAvFbKfQQI3JyAALy5lRqIAIFrBQTgtVLuI0Dg5gQE4M2t1EAECFwrcLO/B3gtwOPj42n7hWivjxfwnRsfv4O0DjwBpm3cvAQI/BKIfwL8+vWr/x3u19vhY/+m8zfCfayMP71KwBNglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBcQgO1XpEECBKoEBGCVrLoECLQXEIDtV6RBAgSqBARglay6BAi0FxCA7VekQQIEqgQEYJWsugQItBf41L7D4gYfHx9Pl8ul+E9R/hqB5+fn093d3TW3uofAEoHoJ8At+L5//74Eciuy/Qu8/ZXySps3Za9Jc8Y/AW5PHE9PT0t2fn9//7POqnpLmiossnreUa+wZaUJTALRT4CThBMCBOIEBGDcyg1MgMAQEIBDwpEAgTgBARi3cgMTIDAEBOCQcCRAIE5AAMat3MAECAwBATgkHAkQiBMQgHErNzABAkNAAA4JRwIE4gQEYNzKDUyAwBAQgEPCkQCBOAEBGLdyAxMgMAQE4JBwJEAgTkAAxq3cwAQIDAEBOCQcCRCIExCAcSs3MAECQ0AADglHAgTiBARg3MoNTIDAEDi//HiNE0cCBAgkCXgCTNq2WQkQmAQE4MThhACBJAEBmLRtsxIgMAkIwInDCQECSQICMGnbZiVAYBIQgBOHEwIEkgQEYNK2zUqAwCQgACcOJwQIJAkIwKRtm5UAgUlAAE4cTggQSBIQgEnbNisBApOAAJw4nBAgkCQgAJO2bVYCBCYBAThxOCFAIElAACZt26wECEwCAnDicEKAQJKAAEzatlkJEJgEBODE4YQAgSQBAZi0bbMSIDAJCMCJwwkBAkkCAjBp22YlQGASEIAThxMCBJIEBGDSts1KgMAkIAAnDicECCQJCMCkbZuVAIFJQABOHE4IEEgSEIBJ2zYrAQKTgACcOJwQIJAkIACTtm1WAgQmAQE4cTghQCBJQAAmbdusBAhMAgJw4nBCgECSgABM2rZZCRCYBP4FXoiLMgVZheAAAAAASUVORK5CYII="},17808:function(e,A){"use strict";A.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADiCAYAAABX5cvqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAnASURBVHhe7d1bSFXrFsDxUWley5KIooKESiyCQsgnKQjSh0IJJbPUSkKtXioC36KHIEooCTUosifBIAifKjXIkvKhLOhmPRRdoYiyNDWzc/aYZ7ZP56C71nWsudb/Bx/uNReJl/lfc+l2rG/Sv/4iAExMdt8CMECAgCECBAwRIGCIAAFDBAgYIkDAEAEChggQMESAgCECBAwRIGCIAAFDBAgYIkDAEAEChggQMBSUifgfP344a9KkSe4RwLs0ibi4OPdWaAUlwGvXrsnTp0/D9kEDoaI5TJ48WSoqKtwjoRWUAM+fPy937twhQHiaPoP79u2b3Lt3T0pLS2XTpk2SkJDg3hsaQQnw69evzgfOU1B4mV75BgcH5fTp05KcnCy7du2SpKQk997Q4FXRgF+MjIxIQ0ODczGprq4OeYD8FhT4xdjYmPNzYLgQIGCIAAFDBAgYIkDAEAEChggQMESAgCECBAwRIGCIAAFDBAgYIkDAUERNQ/ycrAf8oRMMU6ZMcW/5R0frmpqanNGkcExDRFSAPT09cv/+feeTB3yhp7HO8JWUlLhH/BOzAd68eVNOnjwpaWlpMnv2bGcsBPgTGsvw8LA8ePBAysrKZOPGjTJ16lT3Xt/EbIDt7e1y4cIFqayslGXLlsno6Kh7D/DP9Gnn58+fpbGxUebOnSs7d+4kQF91dHRIW1ub7NmzR5YsWeIeBf7M0NCQHD9+XGbOnOk8iHslwIj7YYunnvBHuCfZg4XfdgCGCBAwRICAIQIEDBEgYIgAAUMECBgiQMAQAQKGCBAwRICAIQIEDEVlgPpHud+/f2d5ZMXyH+BH3DhSTU2NZGVluUf909vb62yZzY69kU9PPx0h0iHaQAwMDEh9fb2kp6d7ahwp6gLU8HQuLDExUebNm8d4UwTTB0idZH/48KFs375dCgoKJC4uzr3XNwQYoGAFeP36dWlpaXFeGyQnJ8fZux6RSU/yT58+OeFkZmbKtm3bCNBKsALs7u6W1tZW5xF15cqV7lFEKg3n6NGjsnDhQikvL4+5AKP2t6C8vKE3eHWSPVj43xCAIQIEDBEgYIgAAUMECBgiQMAQAQKGCBAwRICAIQIEDBEgYIgAAUME+A/0j4THm+Bm/Wcxaxm4qB1HqqiokOzsbPeof3S/+lu3bjmDo/hfetrMmTNH1q9f7x7xT39/v9TV1UlGRkZMjiMR4AQePXrkzKkpnVXj0f6/9AFJT9S+vj5nO2iN0N8HKQIkwHHdvn1bzpw5I4WFhbJmzRoZGRlx74Huyf7hwwcnnFWrVsmWLVsI0E/8DDgB/QbEx8dLamqqJCQkyPTp01nuSklJkRkzZjivu6NfJ/iPr95vMFk/Pv26RMiTJ08jQMAQAQKGCBAwRICAIQIEDBEgYIgAAUMECBgiQMAQAQKGCBAwRICAIQIMA/2j5dHR0XGnysO99ONgtjFyMA84Ad1nvrm5WYqLiyU3N9c96p8nT55IV1eX3zNzwaTx6YDxunXr3CP+0Z1tDx8+7GyCunnzZuYB/cQVMMSeP38ux44dcwJ89eqVvHjxwmy9fPnSeTBoaGiQy5cvux8hLHEFnECwroCPHz92Hpnz8vIkPz/fdM96nWR/9+6d81Iba9eulaKiIvce33EFDA6ugCGmJ6ZO1k+bNs2ZIB9vwjxc6+cku56cTLJHBr4LYRIpk/Wxvid7pCFAwBABAoYIEDBEgIAhAgQMESBgiAABQwQIGCJAwBABAoYIEDBEgIAhAgQMESBgiAA94s2bN3Lw4EHp7Ox0jyAaEKBH6AsqvX//3pnYRvQgQI/QyXp9SQkm2aML303AEAEChggQMESAgCECBAwRIGCIAAFDBAgYIkDAEAEChggQMESAgCEC9JhAd9nVP+YO9H0geAjQI3RLMV26x7u+/bnfuy9L/51uEKpbpbFFWWQgQI/QK5fuSnvlyhU5e/asnDt3zuel/66lpUWePXvmvldYI0CPmD9/vuzevdvZ4Vb3mtf1+vVrn5buEf/x40cpKCiQDRs2uO8ZlgjQQ3JycqS2tlb27dsn+/fv92sdOHBAtm7d6vce6gguAvQQfRqqe80HsnSv+KSkJPc9whoBAoYIEDBEgIAhAgQMESBgiAABQwQIGCJAwBABAoYIEDBEgIAhAgQMEWCYRNsUOlP1wUGAYaAT6DqRrv5/St2LSz8fJuuDY9JfX8CI+Ap2dHRIW1ub1NTUSFZWlnvUd93d3dLa2ioVFRWSnZ3tHvVdb2+vNDc3S3FxseTm5rpHfdfX1yeHDh2SWbNmyYoVK2RsbMzzJ62ORX358kWuXr0qJSUlUlpa6vcVsb+/X+rq6iQjI0PKy8slLi7Ovcc3AwMDUl9fL+np6VJZWen3vKPuQNzU1OR8jtXV1SEf3eIKGGKZmZlSVVUlaWlpzkS67vX+9u1bTy+drtfJ+ry8PCkqKuLpaAC4Ak4gWFdApVe9wcHBqDpR9bSJj48P+ArBFRAhp3u76yT6eBPqXl1M1gcHAQKGCBAwRICAIQIEDBEgYIgAAUMECBgiQMAQAQKGCBAwRICAIQIEDBHgbzBqE1o6dRDLCHACOm6jE9+6F7sabzKcFdjSMa2RkRHnbaxiHnACOg945MgRWbBggSxduvTvEBE8+uxC5yR1sr6wsFDKysqcGUN/eHUekAAnoFe/zs5O6erq8vukwO/p1U9fLUD3v09ISHCP+o4AAxRpASq96g0NDbm3ECo6sJycnOze8g8BBigSA4R38JIUAHxGgIAhAgQMESBgiAABQwQIGCJAwBABAoYIEDBEgIAhAgQMESBgKGoDjPVJ61jj1e931J2lOtzxcw9zNd4kNiu61q+T9REy3PPHom4c6caNG3LixAlZvHixLFq0iEn2GKCT9Tq3qZP1+fn5smPHDr+He5kHDDBAvfpdunRJenp6nO2OvfaICN9pgPp91xnAvXv3SmJionuP7wgwwACVPi0ZHh52byFWaDQpKSnuLf8QYBACBPzFRDwQQwgQMESAgCECBAwRIGCIAAFDBAgYIkDAEAEChggQMESAgCECBAxFXID6R7CAlXCffxE1DXHx4kWpqqqS5cuX/z3RDoSLxqdbZp86dcqZLYypcaT29nZpbGx04tN92WN5437Y0MFefWkLnaxfvXp1bAWowek84N27d5092SPkw0KM0fNOp+tra2sDmqz/UxEToNKnnTz1RCRITU11/yu0IipAINbwK0fAEAEChggQMESAgCECBAwRIGCIAAFDBAgYIkDAEAEChggQMESAgCECBAwRIGCIAAFDBAgYIkDAEAEChggQMESAgCECBAwRIGCIAAEzIv8GcSeNUK9nvc0AAAAASUVORK5CYII="},59051:function(e,A){"use strict";A.Z="data:image/png;base64,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"},47366:function(e,A,n){"use strict";A.Z=n.p+"assets/images/quadrat_colored-466c560583d4e5e89435689a67dcca68.png"},41276:function(e,A){"use strict";A.Z="data:image/png;base64,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"}}]);