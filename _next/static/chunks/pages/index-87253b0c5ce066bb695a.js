_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+SU/":function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),c=n("YFqc"),s=n.n(c);t.default=function(e){return Object(i.jsx)("span",{children:Object(i.jsx)(s.a,{href:"".concat("/actions-sample4","/pages/").concat(e.id),children:Object(i.jsx)("a",{className:"btn btn-outline-dark ml-2 mb-2",children:e.title})})})}},CIBD:function(e,t,n){"use strict"},KzbZ:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),c=n("YFqc"),s=n.n(c);t.default=function(e){return Object(i.jsxs)("div",{className:"col-sm-12 post_items_wrap",children:[Object(i.jsx)("div",{className:"div_news_rows",children:Object(i.jsx)(s.a,{href:"".concat("/actions-sample4","/posts/").concat(e.id),children:Object(i.jsx)("a",{children:Object(i.jsxs)("h3",{className:"ml-10",children:[" ",e.title]})})})}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"ul_time_box",children:Object(i.jsx)("li",{children:Object(i.jsxs)("p",{className:"mb-0",children:[Object(i.jsx)("span",{className:"mr-2 time_icon_wrap",children:Object(i.jsx)("i",{className:"far fa-calendar"})}),e.date," , ID : ",e.id," ",Object(i.jsx)("br",{}),"Category : ",e.category_name]})})})}),Object(i.jsx)("hr",{className:"hr_ex1"})]})}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return l}));var i=n("nKUr"),c=(n("q1tI"),n("g4pe")),s=n.n(c),a=n("CafY"),r=n("oTMj");n("YFqc");n("CIBD"),n("pEVS"),n("KzbZ"),n("+SU/");var l=!0;t.default=function(e){return e.blogs,e.page_items,e.category_items,e.display,Object(i.jsxs)(a.a,{children:[Object(i.jsx)(s.a,{children:Object(i.jsx)("title",{children:e.site_name},"title")}),Object(i.jsx)(r.a,{site_name:e.site_name}),Object(i.jsx)("div",{className:"body_main_wrap",children:Object(i.jsx)("div",{className:"container",children:"Test"})})]})}},oTMj:function(e,t,n){"use strict";var i=n("nKUr");n("YFqc"),n("g4pe");t.a=function(e){var t=e.site_name;return Object(i.jsx)("div",{className:"main_title_wrap",children:Object(i.jsxs)("div",{id:"div_img_layer",children:[Object(i.jsxs)("h1",{children:[t,Object(i.jsx)("br",{})]}),Object(i.jsxs)("p",{className:"sub_title mt-2",children:["Sample\u6295\u7a3f\u3092\u63b2\u8f09\u4e88\u5b9a\u3067\u3059\u3002",Object(i.jsx)("br",{})]})]})})}},pEVS:function(e,t,n){"use strict";var i,c=n("rePB");n("CIBD"),i={init:function(){this.per_page=10},set_per_page:function(e){this.per_page=e},get_per_page:function(){return this.per_page},get_page_start:function(e){return{start:(e-1)*this.per_page,limit:this.per_page}}},Object(c.a)(i,"get_per_page",(function(){return console.log("per_page:",this.per_page),this.per_page})),Object(c.a)(i,"get_max_page",(function(e){return e/this.per_page})),Object(c.a)(i,"is_paging_display",(function(e){var t=0;return e/this.per_page>=1&&(t=1),t})),Object(c.a)(i,"is_next_display",(function(e,t){var n=0;return e<t/this.per_page&&(n=1),n})),Object(c.a)(i,"get_page_items",(function(e){var t=this.is_paging_display(e.length);return{docs:e,page_item:{item_count:e.length,paginate_disp:t}}})),Object(c.a)(i,"getOnepageItems",(function(e,t,n){var i=[];return e.forEach((function(e,c){c>=t&&c<n&&i.push(e)})),i}))},rePB:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);