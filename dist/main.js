!function(e){var t={};function d(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=e,d.c=t,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d(d.s=0)}([function(e,t,d){"use strict";d.r(t);const n=()=>{const e=document.querySelector("#content"),t=document.createElement("section");t.setAttribute("class","column");const d=document.createElement("h1"),n=document.createElement("p");d.appendChild(document.createTextNode("L'Jep")),n.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, quo labitur labores ullamcorper eu, et libris regione explicari qui. Quo eu dicam delicata postulant, recusabo abhorreant definiebas an ius, facer accommodare quo et. Ad his accusam sensibus postulant, veritus postulant scribentur ius id.")),t.appendChild(d),t.appendChild(n);const a=document.createElement("div");a.setAttribute("class","reserve");const c=document.createElement("h2");c.appendChild(document.createTextNode("Reserve"));const i=document.createElement("div");i.setAttribute("class","inputBx");const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name",""),o.setAttribute("placeholder","Full Name"),i.appendChild(o);const l=document.createElement("div");l.setAttribute("class","inputBx");const r=document.createElement("input");r.setAttribute("type","date"),r.setAttribute("name",""),r.required=!0,l.appendChild(r);const p=document.createElement("div");p.setAttribute("class","inputBx");const s=document.createElement("input");s.setAttribute("type","time"),s.setAttribute("name",""),s.required=!0,p.appendChild(s),a.appendChild(c),a.appendChild(i),a.appendChild(l),a.appendChild(p),t.appendChild(a);const m=document.createElement("section");m.setAttribute("class","address");const u=document.createElement("h2");u.appendChild(document.createTextNode("Address"));const h=document.createElement("p");h.appendChild(document.createTextNode("4444 Forget-a-boutet Ln"));const C=document.createElement("p");C.appendChild(document.createTextNode("Phantasy, Fl 32168")),m.appendChild(u),m.appendChild(h),m.appendChild(C),t.appendChild(m);const E=document.createElement("section");E.setAttribute("class","socials");const A=document.createElement("ul"),b=document.createElement("p");b.appendChild(document.createTextNode("Follow us on : "));const f=document.createElement("li"),x=document.createElement("a");x.setAttribute("href","#");const v=document.createElement("img");v.setAttribute("src","https://image.flaticon.com/icons/png/512/59/59439.png"),x.appendChild(v),f.appendChild(x);const T=document.createElement("li"),N=document.createElement("a");N.setAttribute("href","#");const y=document.createElement("img");y.setAttribute("src","https://image.flaticon.com/icons/svg/2111/2111738.svg"),N.appendChild(y),T.appendChild(N);const g=document.createElement("li"),w=document.createElement("a");w.setAttribute("href","#");const L=document.createElement("img");L.setAttribute("src","https://image.flaticon.com/icons/svg/747/747393.svg"),w.appendChild(L),g.appendChild(w),A.appendChild(b),A.appendChild(f),A.appendChild(T),A.appendChild(g),E.appendChild(A),t.appendChild(E),e.appendChild(t)},a=document.querySelector("#content");document.querySelector("#home").addEventListener("click",()=>{for(;a.firstChild;)a.removeChild(a.firstChild);n()}),document.querySelector("#menu").addEventListener("click",()=>{for(;a.firstChild;)a.removeChild(a.firstChild);(()=>{const e=document.querySelector("#content"),t=document.createElement("section");t.setAttribute("class","menu");const d=document.createElement("h1");d.appendChild(document.createTextNode("L'Jep"));const n=document.createElement("h2");n.appendChild(document.createTextNode("Menu")),t.appendChild(d),t.appendChild(n);const a=document.createElement("h2");a.appendChild(document.createTextNode("Appetizers")),t.appendChild(a);const c=document.createElement("div");c.setAttribute("class","apps");let i=document.createElement("div");i.setAttribute("class","food-items");let o=document.createElement("h3");o.appendChild(document.createTextNode("CARPACCIO DI MANZO"));let l=document.createElement("p");l.appendChild(document.createTextNode("Thin slices of beef topped with fresh mushrooms, arugula and shaved parmesan cheese, drizzled with white truffle oil. Served with focaccia bread.")),i.appendChild(o),i.appendChild(l);let r=document.createElement("div");r.setAttribute("class","food-items");let p=document.createElement("h3");p.appendChild(document.createTextNode("CALAMARI FRITTI"));let s=document.createElement("p");s.appendChild(document.createTextNode("Fried calamari, zucchini, and yellow squash. Served with spicy pomodoro and garlic aioli sauce.")),r.appendChild(p),r.appendChild(s);let m=document.createElement("div");m.setAttribute("class","food-items");let u=document.createElement("h3");u.appendChild(document.createTextNode("SPINACH FORMAGGIO"));let h=document.createElement("p");h.appendChild(document.createTextNode("A creamy spinach and artichoke hearts dip, blended with a mixture of cheeses. Served with garlic bread.")),m.appendChild(u),m.appendChild(h);let C=document.createElement("div");C.setAttribute("class","food-items");let E=document.createElement("h3");E.appendChild(document.createTextNode("TROPICAL TUNA TARTAR"));let A=document.createElement("p");A.appendChild(document.createTextNode("A delicious tower of freshly diced tuna, avocado and mango. Drizzled with miso and citrus soy sauce. Topped with microgreens.")),C.appendChild(E),C.appendChild(A);let b=document.createElement("div");b.setAttribute("class","food-items");let f=document.createElement("h3");f.appendChild(document.createTextNode("EGGPLANT PARMIGIANA"));let x=document.createElement("p");x.appendChild(document.createTextNode("Deep fried, beer-battered eggplant slices, topped with pomodoro sauce, melted mozzarella and Parmesan cheese.")),b.appendChild(f),b.appendChild(x);let v=document.createElement("div");v.setAttribute("class","food-items");let T=document.createElement("h3");T.appendChild(document.createTextNode("POLPO ALLA GRIGLIA"));let N=document.createElement("p");N.appendChild(document.createTextNode("Tender marinated octopus grilled to perfection, served over sliced potatoes with extra virgin olive oil, fried chickpeas, microgreens, and spicy mayonnaise.")),v.appendChild(T),v.appendChild(N),c.appendChild(i),c.appendChild(r),c.appendChild(m),c.appendChild(C),c.appendChild(b),c.appendChild(v),t.appendChild(c);const y=document.createElement("h2");y.appendChild(document.createTextNode("Entrees")),t.appendChild(y);const g=document.createElement("div");g.setAttribute("class","entrees");let w=document.createElement("div");w.setAttribute("class","food-items");let L=document.createElement("h3");L.appendChild(document.createTextNode("RUOTA DI PARMIGIANO"));let S=document.createElement("p");S.appendChild(document.createTextNode("Our ultimate table side experience! Creamy fettuccine Alfredo tossed in a Parmigiano-Reggiano wheel to give it an extraordinary and rich flavor.")),w.appendChild(L),w.appendChild(S);let I=document.createElement("div");I.setAttribute("class","food-items");let O=document.createElement("h3");O.appendChild(document.createTextNode("LASAGNA ALLA BOLOGNESE"));let R=document.createElement("p");R.appendChild(document.createTextNode("Layers of thin pasta, hearty meat sauce, ricotta, Parmesan and mozzarella cheese, topped with a delicious pink sauce.")),I.appendChild(O),I.appendChild(R);let P=document.createElement("div");P.setAttribute("class","food-items");let q=document.createElement("h3");q.appendChild(document.createTextNode("FARFALLE SALMONE"));let F=document.createElement("p");F.appendChild(document.createTextNode("Served with sautéed salmon, tossed in a creamy vodka pink sauce with asparagus.")),P.appendChild(q),P.appendChild(F);let M=document.createElement("div");M.setAttribute("class","food-items");let z=document.createElement("h3");z.appendChild(document.createTextNode("SEAFOOD RAVIOLI"));let B=document.createElement("p");B.appendChild(document.createTextNode("Stuffed with lobster and shrimp, tossed in a savory yellow pepper cream sauce, with zucchini and cherry tomatoes, and a grilled half lobster tail.")),M.appendChild(z),M.appendChild(B);let D=document.createElement("div");D.setAttribute("class","food-items");let k=document.createElement("h3");k.appendChild(document.createTextNode("FETUCCINE ALFREDO"));let G=document.createElement("p");G.appendChild(document.createTextNode("Tossed in a cream, butter, and Parmesan cheese sauce.")),D.appendChild(k),D.appendChild(G);let j=document.createElement("div");j.setAttribute("class","food-items");let U=document.createElement("h3");U.appendChild(document.createTextNode("FRUTTI DI MARE"));let _=document.createElement("p");_.appendChild(document.createTextNode("Linguine pasta tossed with shrimp, mussels, clams, and calamari with garlic, white wine and basil in a savory pomodoro sauce.")),j.appendChild(U),j.appendChild(_),g.appendChild(w),g.appendChild(I),g.appendChild(P),g.appendChild(M),g.appendChild(D),g.appendChild(j),t.appendChild(g);const J=document.createElement("h2");J.appendChild(document.createTextNode("Desserts")),t.appendChild(J);const H=document.createElement("div");H.setAttribute("class","dessert");let V=document.createElement("div");V.setAttribute("class","food-items");let W=document.createElement("h3");W.appendChild(document.createTextNode("DECADENT FUDGE BROWNIE"));let K=document.createElement("p");K.appendChild(document.createTextNode("Finished with walnuts. Served warm with vanilla ice cream topped with a red wine-berry mixed compote.")),V.appendChild(W),V.appendChild(K);let Q=document.createElement("div");Q.setAttribute("class","food-items");let Z=document.createElement("h3");Z.appendChild(document.createTextNode("CRÈME BÛLÉE"));let X=document.createElement("p");X.appendChild(document.createTextNode("A traditional vanilla custard topped with caramelized brown sugar and fresh berries.")),Q.appendChild(Z),Q.appendChild(X);let Y=document.createElement("div");Y.setAttribute("class","food-items");let $=document.createElement("h3");$.appendChild(document.createTextNode("TIRAMISU"));let ee=document.createElement("p");ee.appendChild(document.createTextNode("Delicious ladyfingers, dipped in espresso, Amaretto, and coffee liquor, layered with mascarpone-vanilla mousse.")),Y.appendChild($),Y.appendChild(ee);let te=document.createElement("div");te.setAttribute("class","food-items");let de=document.createElement("h3");de.appendChild(document.createTextNode("ITALIAN CHEESECAKE"));let ne=document.createElement("p");ne.appendChild(document.createTextNode("Cheesecake at its best! Served with a red wine-berry mixed compote.")),te.appendChild(de),te.appendChild(ne),H.appendChild(V),H.appendChild(Q),H.appendChild(Y),H.appendChild(te),t.appendChild(H),e.appendChild(t)})()}),document.querySelector("#contact").addEventListener("click",()=>{for(;a.firstChild;)a.removeChild(a.firstChild);(()=>{const e=document.querySelector("#content"),t=document.createElement("section");t.setAttribute("class","contact");const d=document.createElement("div");d.setAttribute("class","text");const n=document.createElement("h1");n.appendChild(document.createTextNode("Contact"));const a=document.createElement("p");a.appendChild(document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic, et dolorum laudantium sed, nam consectetur quisquam, exercitationem nostrum nulla fugiat ea odit qui tempora quaerat laborum recusandae voluptas veniam?"));const c=document.createElement("p");c.appendChild(document.createTextNode("If you need to get in contact with us imediately please call:  (305)-123-4567"));const i=document.createElement("p");i.appendChild(document.createTextNode("Or email us at: l'Jep@ljp.com")),d.appendChild(n),d.appendChild(a),d.appendChild(c),d.appendChild(i),t.appendChild(d);const o=document.createElement("div");o.setAttribute("class","form");const l=document.createElement("div");l.setAttribute("class","inputBx");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name",""),r.setAttribute("placeholder","Name"),l.appendChild(r);const p=document.createElement("div");p.setAttribute("class","inputBx");const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name",""),s.setAttribute("placeholder","Phone No."),p.appendChild(s);const m=document.createElement("div");m.setAttribute("class","inputBx");const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name",""),u.setAttribute("placeholder","Email"),m.appendChild(u);const h=document.createElement("div");h.setAttribute("class","inputBx");const C=document.createElement("input");C.setAttribute("type","text"),C.setAttribute("name",""),C.setAttribute("placeholder","Subject"),h.appendChild(C);const E=document.createElement("div");E.setAttribute("class","inputBx");const A=document.createElement("textarea");A.setAttribute("placeholder","Write your message here"),E.appendChild(A);const b=document.createElement("div");b.setAttribute("class","inputBx");const f=document.createElement("input");f.setAttribute("type","submit"),f.setAttribute("name",""),f.setAttribute("Value","Share Feedback"),b.appendChild(f),o.appendChild(l),o.appendChild(p),o.appendChild(m),o.appendChild(h),o.appendChild(E),o.appendChild(b),t.appendChild(o),e.appendChild(t)})()}),n(),console.log("Is this working?")}]);