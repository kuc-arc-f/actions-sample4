_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{KzbZ:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),c=t("YFqc"),o=t.n(c);n.default=function(e){return Object(r.jsxs)("div",{className:"col-sm-12 post_items_wrap",children:[Object(r.jsx)("div",{className:"div_news_rows",children:Object(r.jsx)(o.a,{href:"".concat("/actions-sample4","/posts/").concat(e.id),children:Object(r.jsx)("a",{children:Object(r.jsxs)("h3",{className:"ml-10",children:[" ",e.title]})})})}),Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"ul_time_box",children:Object(r.jsx)("li",{children:Object(r.jsxs)("p",{className:"mb-0",children:[Object(r.jsx)("span",{className:"mr-2 time_icon_wrap",children:Object(r.jsx)("i",{className:"far fa-calendar"})}),e.date," , ID : ",e.id," ",Object(r.jsx)("br",{}),"Category : ",e.category_name]})})})}),Object(r.jsx)("hr",{className:"hr_ex1"})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var o=c(t("q1tI")),a=t("elyg"),s=t("nOHt"),i=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),c=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,a.resolveHref)(c,e.href,!0),t=r(n,2),o=t[0],s=t[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):s||o}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,m=e.scroll,j=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var _=o.Children.only(v),w=_&&"object"===typeof _&&_.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),x=r(y,2),O=x[0],g=x[1],N=o.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,o.useEffect)((function(){var e=g&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof j?j:t&&t.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(t,d,p,{locale:r})}),[p,d,g,j,n,t]);var E={ref:N,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:o,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,d,p,h,b,m,j)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var L="undefined"!==typeof j?j:t&&t.locale,M=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);E.href=M||(0,a.addBasePath)((0,a.addLocale)(p,L,t&&t.defaultLocale))}return o.default.cloneElement(_,E)};n.default=f},dZDA:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/IndexRow",function(){return t("KzbZ")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,i=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=t("q1tI"),o=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var s=new Map}},[["dZDA",0,2,1]]]);