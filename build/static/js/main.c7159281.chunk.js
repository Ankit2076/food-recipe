(this["webpackJsonpstarting-with-react"]=this["webpackJsonpstarting-with-react"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(5),r=c.n(i),s=(c(11),c(4)),o=c.n(s),j=c(6),u=c(2),l=(c(13),c(14),c(0)),d=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(l.jsx)("div",{className:"Recipe",children:Object(l.jsxs)("div",{className:"recipe-content",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsxs)("div",{className:"food-img",children:[Object(l.jsx)("img",{src:n,alt:""}),Object(l.jsxs)("p",{children:["Calories: ",c]})]}),Object(l.jsx)("ul",{children:a.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("p",{children:e.text})})}))})]})})};var b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(u.a)(i,2),s=r[0],b=r[1],h=Object(n.useState)("chicken"),p=Object(u.a)(h,2),f=p[0],O=p[1];Object(n.useEffect)((function(){m()}),[f]);var m=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("df8d865e","&app_key=").concat("0108dde7dfc2a7949687aa2bd86383da"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"Search Your Favourite Food"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(s),b("")},className:"search-form",children:[Object(l.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){b(e.target.value)}}),Object(l.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})]})]}),Object(l.jsx)("div",{className:"recepi_section",children:c.map((function(e){return Object(l.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.c7159281.chunk.js.map