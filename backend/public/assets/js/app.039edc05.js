(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{1798:function(t,e,s){"use strict";var n=s("5d61"),a=s.n(n);a.a},"386d":function(t,e,s){"use strict";var n=s("cb7c"),a=s("83a1"),i=s("5f1b");s("214f")("search",1,function(t,e,s,l){return[function(s){var n=t(this),a=void 0==s?void 0:s[e];return void 0!==a?a.call(s,n):new RegExp(s)[e](String(n))},function(t){var e=l(s,t,this);if(e.done)return e.value;var o=n(t),r=String(this),c=o.lastIndex;a(c,0)||(o.lastIndex=0);var u=i(o,r);return a(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]})},"5c47":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{class:t.classObject},[t.shouldShowLabel?s("span",{staticClass:"vue-switcher__label"},[t.label?s("span",{domProps:{textContent:t._s(t.label)}}):t._e(),t._v(" "),!t.label&&t.value?s("span",{domProps:{textContent:t._s(t.textEnabled)}}):t._e(),t._v(" "),t.label||t.value?t._e():s("span",{domProps:{textContent:t._s(t.textDisabled)}})]):t._e(),t._v(" "),s("input",{attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:t.value},on:{change:t.trigger}}),t._v(" "),s("div")])},a=[],i=s("bd86"),l={name:"switches",props:{typeBold:{default:!1},value:{default:!1},disabled:{default:!1},label:{default:""},textEnabled:{default:""},textDisabled:{default:""},color:{default:"default"},theme:{default:"default"},emitOnMount:{default:!0}},mounted:function(){this.emitOnMount&&this.$emit("input",this.value)},methods:{trigger:function(t){this.$emit("input",t.target.checked)}},computed:{classObject:function(){var t,e=this.color,s=this.value,n=this.theme,a=this.typeBold,l=this.disabled;return t={"vue-switcher":!0},Object(i["a"])(t,"vue-switcher--unchecked",!s),Object(i["a"])(t,"vue-switcher--disabled",l),Object(i["a"])(t,"vue-switcher--bold",a),Object(i["a"])(t,"vue-switcher--bold--unchecked",a&&!s),Object(i["a"])(t,"vue-switcher-theme--".concat(n),e),Object(i["a"])(t,"vue-switcher-color--".concat(e),e),t},shouldShowLabel:function(){return""!==this.label||""!==this.textEnabled||""!==this.textDisabled}}},o=l,r=(s("1798"),s("2877")),c=Object(r["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},"5d61":function(t,e,s){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},f7d9:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[s("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"}})])},a=[],i=s("2877"),l={},o=Object(i["a"])(l,n,a,!1,null,null,null),r=o.exports,c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[s("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"}})])},u=[],d={},p=Object(i["a"])(d,c,u,!1,null,null,null),m=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 19 19"}},[s("path",{staticClass:"view-icon-svg",attrs:{d:"M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"}}),t._v(" "),s("path",{staticClass:"view-icon-svg",attrs:{d:"M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"}})])},h=[],_={},g=Object(i["a"])(_,v,h,!1,null,null,null),b=g.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("svg",{staticClass:"main",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 9 17"}},[s("rect",{attrs:{x:"0.48",y:"0.5",width:"7",height:"1"}}),t._v(" "),s("rect",{attrs:{x:"0.48",y:"7.5",width:"7",height:"1"}}),t._v(" "),s("rect",{attrs:{x:"0.48",y:"15.5",width:"7",height:"1"}})]),t._v(" "),s("svg",{staticClass:"sub",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17"}},[s("rect",{attrs:{x:"1.56",y:"0.5",width:"16",height:"1"}}),t._v(" "),s("rect",{attrs:{x:"1.56",y:"7.5",width:"16",height:"1"}}),t._v(" "),s("rect",{attrs:{x:"1.56",y:"15.5",width:"16",height:"1"}})])])},C=[],k={},w=Object(i["a"])(k,f,C,!1,null,null,null),M=w.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 17"}},[s("rect",{attrs:{x:"0.5",y:"0.5",width:"25",height:"1"}}),t._v(" "),s("rect",{attrs:{x:"0.5",y:"7.5",width:"25",height:"1"}}),t._v(" "),s("rect",{attrs:{x:"0.5",y:"15.5",width:"25",height:"1"}})])},y=[],x={},$=Object(i["a"])(x,S,y,!1,null,null,null),O=$.exports;s.d(e,"a",function(){return r}),s.d(e,"e",function(){return m}),s.d(e,"b",function(){return b}),s.d(e,"c",function(){return M}),s.d(e,"d",function(){return O})},f82c:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.getMenuType,attrs:{id:"app-container"}},[s("top-nav"),t._v(" "),s("sidebar"),t._v(" "),s("main",[s("div",{staticClass:"container-fluid"},[s("router-view")],1)])],1)},a=[],i=s("cebc"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar",on:{mouseenter:function(e){t.isMenuOver=!0},mouseleave:function(e){t.isMenuOver=!1},touchstart:function(e){t.isMenuOver=!0}}},[s("div",{staticClass:"main-menu"},[s("vue-perfect-scrollbar",{staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[s("ul",{staticClass:"list-unstyled"},[s("li",{class:{active:"dashboards"===t.selectedParentMenu}},[s("a",{attrs:{href:"#dashboards"},on:{click:function(e){return e.preventDefault(),t.openSubMenu(e,"dashboards")}}},[s("i",{staticClass:"iconsminds-shop-4"}),t._v(t._s(t.$t("menu.dashboards")))])]),t._v(" "),s("li",{class:{active:"pages"===t.selectedParentMenu}},[s("a",{attrs:{href:"#pages"},on:{click:function(e){return e.preventDefault(),t.openSubMenu(e,"pages")}}},[s("i",{staticClass:"iconsminds-digital-drawing"}),t._v(t._s(t.$t("menu.pages")))])]),t._v(" "),s("li",{class:{active:"applications"===t.selectedParentMenu}},[s("a",{attrs:{href:"#applications"},on:{click:function(e){return e.preventDefault(),t.openSubMenu(e,"applications")}}},[s("i",{staticClass:"iconsminds-air-balloon-1"}),t._v(t._s(t.$t("menu.applications")))])]),t._v(" "),s("li",{class:{active:"ui"===t.selectedParentMenu}},[s("a",{attrs:{href:"#ui"},on:{click:function(e){return e.preventDefault(),t.openSubMenu(e,"ui")}}},[s("i",{staticClass:"iconsminds-pantone"}),t._v(t._s(t.$t("menu.ui")))])]),t._v(" "),s("li",{class:{active:"menu"===t.selectedParentMenu}},[s("a",{attrs:{href:"#menu"},on:{click:function(e){return e.preventDefault(),t.openSubMenu(e,"menu")}}},[s("i",{staticClass:"iconsminds-three-arrow-fork"}),t._v(t._s(t.$t("menu.menu")))])])])])],1),t._v(" "),s("div",{staticClass:"sub-menu"},[s("vue-perfect-scrollbar",{staticClass:"scroll",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[s("ul",{staticClass:"list-unstyled",class:{"d-block":"dashboards"===t.selectedParentMenu},attrs:{"data-link":"dashboards"}},[s("router-link",{attrs:{tag:"li",to:"/app/dashboards/default"}},[s("a",[s("i",{staticClass:"simple-icon-briefcase"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.default")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/dashboards/analytics"}},[s("a",[s("i",{staticClass:"simple-icon-pie-chart"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.analytics")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/dashboards/ecommerce"}},[s("a",[s("i",{staticClass:"simple-icon-basket-loaded"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.ecommerce")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/dashboards/content"}},[s("a",[s("i",{staticClass:"simple-icon-doc"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.content")))])])])],1),t._v(" "),s("ul",{staticClass:"list-unstyled",class:{"d-block":"pages"===t.selectedParentMenu},attrs:{"data-link":"pages"}},[s("router-link",{attrs:{tag:"li",to:"/app/pages/data-list"}},[s("a",[s("i",{staticClass:"simple-icon-credit-card"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.data-list")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/pages/thumb-list"}},[s("a",[s("i",{staticClass:"simple-icon-list"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.thumb-list")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/pages/image-list"}},[s("a",[s("i",{staticClass:"simple-icon-grid"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.image-list")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/pages/details"}},[s("a",[s("i",{staticClass:"simple-icon-book-open"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.details")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/pages/search"}},[s("a",[s("i",{staticClass:"simple-icon-magnifier"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.search")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/pages/mailing"}},[s("a",[s("i",{staticClass:"simple-icon-envelope-open"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.mailing")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/pages/invoice"}},[s("a",[s("i",{staticClass:"simple-icon-bag"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.invoice")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/user/login"}},[s("a",{attrs:{target:"_blank"}},[s("i",{staticClass:"simple-icon-user-following"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.login")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/user/register"}},[s("a",{attrs:{target:"_blank"}},[s("i",{staticClass:"simple-icon-user-follow"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.register")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/user/forgot-password"}},[s("a",{attrs:{target:"_blank"}},[s("i",{staticClass:"simple-icon-user-unfollow"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.forgot-password")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/error"}},[s("a",{attrs:{target:"_blank"}},[s("i",{staticClass:"simple-icon-exclamation"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.error")))])])])],1),t._v(" "),s("ul",{staticClass:"list-unstyled",class:{"d-block":"applications"===t.selectedParentMenu},attrs:{"data-link":"applications"}},[s("router-link",{attrs:{tag:"li",to:"/app/applications/todo"}},[s("a",[s("i",{staticClass:"simple-icon-check"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.todo")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/applications/survey"}},[s("a",[s("i",{staticClass:"simple-icon-calculator"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.survey")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/applications/chat"}},[s("a",[s("i",{staticClass:"simple-icon-bubbles"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.chat")))])])])],1),t._v(" "),s("ul",{staticClass:"list-unstyled",class:{"d-block":"ui"===t.selectedParentMenu},attrs:{"data-link":"ui"}},[s("router-link",{attrs:{tag:"li",to:"/app/ui/alerts"}},[s("a",[s("i",{staticClass:"simple-icon-bell"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.alerts")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/badges"}},[s("a",[s("i",{staticClass:"simple-icon-badge"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.badges")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/buttons"}},[s("a",[s("i",{staticClass:"simple-icon-control-play"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.buttons")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/cards"}},[s("a",[s("i",{staticClass:"simple-icon-layers"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.cards")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/carousel"}},[s("a",[s("i",{staticClass:"simple-icon-picture"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.carousel")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/charts"}},[s("a",[s("i",{staticClass:"simple-icon-chart"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.charts")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/collapse"}},[s("a",[s("i",{staticClass:"simple-icon-arrow-up"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.collapse")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/dropdowns"}},[s("a",[s("i",{staticClass:"simple-icon-arrow-down"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.dropdowns")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/editors"}},[s("a",[s("i",{staticClass:"simple-icon-book-open"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.editors")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/forms"}},[s("a",[s("i",{staticClass:"simple-icon-check mi-forms"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.forms")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/form-components"}},[s("a",[s("i",{staticClass:"simple-icon-puzzle"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.form-components")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/icons"}},[s("a",[s("i",{staticClass:"simple-icon-star"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.icons")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/input-groups"}},[s("a",[s("i",{staticClass:"simple-icon-note"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.input-groups")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/jumbotron"}},[s("a",[s("i",{staticClass:"simple-icon-screen-desktop"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.jumbotron")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/maps"}},[s("a",[s("i",{staticClass:"simple-icon-map"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.maps")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/modal"}},[s("a",[s("i",{staticClass:"simple-icon-docs"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.modal")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/navigation"}},[s("a",[s("i",{staticClass:"simple-icon-cursor"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.navigation")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/popover-tooltip"}},[s("a",[s("i",{staticClass:"simple-icon-pin"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.popover-tooltip")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/sortable"}},[s("a",[s("i",{staticClass:"simple-icon-shuffle"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.sortable")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"/app/ui/tables"}},[s("a",[s("i",{staticClass:"simple-icon-grid"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.tables")))])])])],1),t._v(" "),s("ul",{staticClass:"list-unstyled",class:{"d-block":"menu"===t.selectedParentMenu},attrs:{"data-link":"menu"}},[s("router-link",{attrs:{tag:"li",to:"#/app/menu/default"},nativeOn:{click:function(e){return e.preventDefault(),t.changeDefaultMenuType("menu-default")}}},[s("a",[s("i",{staticClass:"simple-icon-control-pause"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.default")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"#/app/menu/subhidden"},nativeOn:{click:function(e){return e.preventDefault(),t.changeDefaultMenuType("menu-sub-hidden")}}},[s("a",[s("i",{staticClass:"simple-icon-arrow-left mi-subhidden"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.subhidden")))])])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"#/app/menu/hidden"},nativeOn:{click:function(e){return e.preventDefault(),t.changeDefaultMenuType("menu-hidden")}}},[s("a",[s("i",{staticClass:"simple-icon-control-start mi-hidden"}),t._v(" "),s("span",[t._v(t._s(t.$t("menu.hidden")))])])])],1)])],1)])},o=[],r=(s("6762"),s("2fdb"),s("28a5"),s("2f62")),c=s("2b47"),u={data:function(){return{selectedParentMenu:"",isMenuOver:!1}},mounted:function(){this.selectMenu(),window.addEventListener("resize",this.handleWindowResize),document.addEventListener("click",this.returnSelectedMenu),this.handleWindowResize()},beforeDestroy:function(){document.removeEventListener("click",this.returnSelectedMenu),window.removeEventListener("resize",this.handleWindowResize)},methods:Object(i["a"])({},Object(r["d"])(["changeSideMenuStatus","addMenuClassname","changeSelectedMenuHasSubItems"]),{selectMenu:function(){var t=this.$route.path.split("/").filter(function(t){return""!==t})[1];this.selectedParentMenu=void 0!==t||null!==t?t.toLowerCase():"dashboards"},changeSelectedParentHasNoSubmenu:function(t){this.selectedParentMenu=t,this.changeSelectedMenuHasSubItems(!1),this.changeSideMenuStatus({step:0,classNames:this.menuType})},openSubMenu:function(t,e){this.changeSelectedMenuHasSubItems(!0);var s=this.menuType?this.menuType.split(" ").filter(function(t){return""!==t}):"";s.includes("menu-mobile")?this.addMenuClassname({classname:"sub-show-temporary",currentClasses:this.menuType}):!s.includes("menu-sub-hidden")||2!==this.menuClickCount&&0!==this.menuClickCount?!s.includes("menu-hidden")||1!==this.menuClickCount&&3!==this.menuClickCount?!s.includes("menu-default")||s.includes("menu-sub-hidden")||1!==this.menuClickCount&&3!==this.menuClickCount||this.changeSideMenuStatus({step:0,classNames:this.menuType}):this.changeSideMenuStatus({step:2,classNames:this.menuType}):this.changeSideMenuStatus({step:3,classNames:this.menuType}),this.selectedParentMenu=e},addEvents:function(){document.addEventListener("click",this.handleDocumentClick)},removeEvents:function(){document.removeEventListener("click",this.handleDocumentClick)},returnSelectedMenu:function(){this.isMenuOver||this.selectMenu()},handleDocumentClick:function(t){if(!this.isMenuOver){var e=!0;t.path.map(function(t){"svg"!==t.nodeName&&void 0!==t.className&&t.className.indexOf("menu-button")>-1&&(e=!1)}),e&&this.toggle()}},toggle:function(){var t=this.menuType.split(" ").filter(function(t){return""!==t});t.includes("menu-sub-hidden")&&3===this.menuClickCount?this.changeSideMenuStatus({step:2,classNames:this.menuType}):(t.includes("menu-hidden")||t.includes("menu-mobile"))&&this.changeSideMenuStatus({step:0,classNames:this.menuType})},handleWindowResize:function(t){if(!t||t.isTrusted){var e=this.getMenuClassesForResize(this.menuType);this.changeSideMenuStatus({step:0,classNames:e.join(" ")})}},getMenuClassesForResize:function(t){var e=t.split(" ").filter(function(t){return""!==t}),s=window.innerWidth;return s<c["k"]?e.push("menu-mobile"):s<c["m"]?(e=e.filter(function(t){return"menu-mobile"!==t}),e.includes("menu-default")&&!e.includes("menu-sub-hidden")&&e.push("menu-sub-hidden")):(e=e.filter(function(t){return"menu-mobile"!==t}),e.includes("menu-default")&&e.includes("menu-sub-hidden")&&(e=e.filter(function(t){return"menu-sub-hidden"!==t}))),e},changeDefaultMenuType:function(t){var e=this.getMenuClassesForResize(t);this.changeSideMenuStatus({step:0,classNames:e.join(" ")})}}),computed:Object(i["a"])({},Object(r["c"])({menuType:"getMenuType",menuClickCount:"getMenuClickCount",selectedMenuHasSubItems:"getSelectedMenuHasSubItems"})),watch:{menuType:function(t){t.indexOf("show-temporary")>-1?this.addEvents():this.removeEvents()},$route:function(t,e){t.path!==e.path&&(this.changeSideMenuStatus({step:0,classNames:this.menuType}),this.selectMenu(),window.scrollTo(0,top))}}},d=u,p=s("2877"),m=Object(p["a"])(d,l,o,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar fixed-top"},[s("div",{staticClass:"d-flex align-items-center navbar-left"},[s("a",{staticClass:"menu-button d-none d-md-block",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeSideMenuStatus({step:t.menuClickCount+1,classNames:t.menuType})}}},[s("menu-icon")],1),t._v(" "),s("a",{staticClass:"menu-button-mobile d-xs-block d-sm-block d-md-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeSideMenuForMobile(t.menuType)}}},[s("mobile-menu-icon")],1),t._v(" "),s("div",{ref:"searchContainer",class:{search:!0,"mobile-view":t.isMobileSearch},on:{mouseenter:function(e){t.isSearchOver=!0},mouseleave:function(e){t.isSearchOver=!1}}},[s("b-input",{attrs:{placeholder:t.$t("menu.search")},nativeOn:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),t._v(" "),s("span",{staticClass:"search-icon",on:{click:t.searchClick}},[s("i",{staticClass:"simple-icon-magnifier"})])],1),t._v(" "),s("div",{staticClass:"d-inline-block"},[s("b-dropdown",{staticClass:"ml-2",attrs:{id:"langddm",variant:"light",size:"sm","toggle-class":"language-button"}},[s("template",{slot:"button-content"},[s("span",{staticClass:"name"},[t._v(t._s(t.$i18n.locale.toUpperCase()))])]),t._v(" "),t._l(t.localeOptions,function(e,n){return s("b-dropdown-item",{key:n,on:{click:function(s){return t.changeLocale(e.id,e.direction)}}},[t._v(t._s(e.name))])})],2)],1),t._v(" "),s("div",{staticClass:"position-relative d-none d-none d-lg-inline-block"},[s("a",{staticClass:"btn btn-outline-primary btn-sm ml-2",attrs:{target:"_top",href:t.buyUrl}},[t._v(t._s(t.$t("user.buy")))])])]),t._v(" "),s("router-link",{staticClass:"navbar-logo",attrs:{tag:"a",to:"/app"}},[s("span",{staticClass:"logo d-none d-xs-block"}),t._v(" "),s("span",{staticClass:"logo-mobile d-block d-xs-none"})]),t._v(" "),s("div",{staticClass:"navbar-right"},[s("div",{staticClass:"d-none d-md-inline-block align-middle mr-3"},[s("switches",{staticClass:"vue-switcher-small",attrs:{id:"tool-mode-switch",theme:"custom",color:"primary"},model:{value:t.isDarkActive,callback:function(e){t.isDarkActive=e},expression:"isDarkActive"}}),t._v(" "),s("b-tooltip",{attrs:{target:"tool-mode-switch",placement:"left",title:"Dark Mode"}})],1),t._v(" "),s("div",{staticClass:"header-icons d-inline-block align-middle"},[s("div",{staticClass:"position-relative d-none d-sm-inline-block"},[s("b-dropdown",{attrs:{variant:"empty",size:"sm",right:"","toggle-class":"header-icon","menu-class":"position-absolute mt-3 iconMenuDropdown","no-caret":""}},[s("template",{slot:"button-content"},[s("i",{staticClass:"simple-icon-grid"})]),t._v(" "),s("div",[s("router-link",{staticClass:"icon-menu-item",attrs:{tag:"a",to:"/app/dashboards/default"}},[s("i",{staticClass:"iconsminds-shop-4 d-block"}),t._v("\n              "+t._s(t.$t("menu.dashboards"))+"\n            ")]),t._v(" "),s("router-link",{staticClass:"icon-menu-item",attrs:{tag:"a",to:"/app/ui"}},[s("i",{staticClass:"iconsminds-pantone d-block"}),t._v("\n              "+t._s(t.$t("menu.ui"))+"\n            ")]),t._v(" "),s("router-link",{staticClass:"icon-menu-item",attrs:{tag:"a",to:"/app/ui/charts"}},[s("i",{staticClass:"iconsminds-bar-chart-4 d-block"}),t._v("\n              "+t._s(t.$t("menu.charts"))+"\n            ")]),t._v(" "),s("router-link",{staticClass:"icon-menu-item",attrs:{tag:"a",to:"/app/applications/chat"}},[s("i",{staticClass:"iconsminds-speach-bubble d-block"}),t._v("\n              "+t._s(t.$t("menu.chat"))+"\n            ")]),t._v(" "),s("router-link",{staticClass:"icon-menu-item",attrs:{tag:"a",to:"/app/applications/survey"}},[s("i",{staticClass:"iconsminds-formula d-block"}),t._v("\n              "+t._s(t.$t("menu.survey"))+"\n            ")]),t._v(" "),s("router-link",{staticClass:"icon-menu-item",attrs:{tag:"a",to:"/app/applications/todo"}},[s("i",{staticClass:"iconsminds-check d-block"}),t._v("\n              "+t._s(t.$t("menu.todo"))+"\n            ")])],1)],2)],1),t._v(" "),s("div",{staticClass:"position-relative d-inline-block"},[s("b-dropdown",{attrs:{variant:"empty",size:"sm",right:"","toggle-class":"header-icon notificationButton","menu-class":"position-absolute mt-3 notificationDropdown","no-caret":""}},[s("template",{slot:"button-content"},[s("i",{staticClass:"simple-icon-bell"}),t._v(" "),t.notifications.length>0?s("span",{staticClass:"count"},[t._v(t._s(t.notifications.length))]):t._e()]),t._v(" "),s("vue-perfect-scrollbar",{attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},t._l(t.notifications,function(e,n){return s("div",{key:n,staticClass:"d-flex flex-row mb-3 pb-3 border-bottom"},[s("router-link",{attrs:{tag:"a",to:"/app/pages/details"}},[s("img",{staticClass:"img-thumbnail list-thumbnail xsmall border-0 rounded-circle",attrs:{src:e.img,alt:e.title}})]),t._v(" "),s("div",{staticClass:"pl-3 pr-2"},[s("router-link",{attrs:{tag:"a",to:"/app/pages/details"}},[s("p",{staticClass:"font-weight-medium mb-1"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"text-muted mb-0 text-small"},[t._v(t._s(e.date))])])],1)],1)}),0)],2)],1),t._v(" "),s("div",{staticClass:"position-relative d-none d-sm-inline-block "},[s("div",{staticClass:"btn-group"},[s("b-button",{staticClass:"header-icon btn-sm",attrs:{variant:"empty"},on:{click:t.toggleFullScreen}},[s("i",{class:{"d-inline-block":!0,"simple-icon-size-actual":t.fullScreen,"simple-icon-size-fullscreen":!t.fullScreen}})])],1)])]),t._v(" "),s("div",{staticClass:"user d-inline-block"},[s("b-dropdown",{staticClass:"dropdown-menu-right",attrs:{right:"",variant:"empty","toggle-class":"p-0","menu-class":"mt-3","no-caret":""}},[s("template",{slot:"button-content"},[s("span",{staticClass:"name mr-1"},[t._v(t._s(t.currentUser.title))]),t._v(" "),s("span",[s("img",{attrs:{alt:t.currentUser.title,src:t.currentUser.img}})])]),t._v(" "),s("b-dropdown-item",[t._v("Account")]),t._v(" "),s("b-dropdown-item",[t._v("Features")]),t._v(" "),s("b-dropdown-item",[t._v("History")]),t._v(" "),s("b-dropdown-item",[t._v("Support")]),t._v(" "),s("b-dropdown-divider"),t._v(" "),s("b-dropdown-item",{on:{click:t.logout}},[t._v("Sign out")])],2)],1)])],1)},_=[],g=(s("a481"),s("96cf"),s("3b8d")),b=(s("386d"),s("f7d9")),f=s("5c47"),C=s("ed08"),k={components:{MenuIcon:b["c"],MobileMenuIcon:b["d"],Switches:f["a"]},data:function(){return{selectedParentMenu:"",searchKeyword:"",isMobileSearch:!1,isSearchOver:!1,fullScreen:!1,menuHiddenBreakpoint:c["k"],searchPath:c["l"],localeOptions:c["j"],buyUrl:c["b"],notifications:[],isDarkActive:!1}},methods:Object(i["a"])({},Object(r["d"])(["changeSideMenuStatus","changeSideMenuForMobile"]),Object(r["b"])(["setLang","signOut"]),{search:function(){this.$router.push("".concat(this.searchPath,"?search=").concat(this.searchKeyword)),this.searchKeyword=""},searchClick:function(){window.innerWidth<this.menuHiddenBreakpoint?this.isMobileSearch?(this.search(),this.isMobileSearch=!1):this.isMobileSearch=!0:this.search()},handleDocumentforMobileSearch:function(){this.isSearchOver||(this.isMobileSearch=!1,this.searchKeyword="")},changeLocale:function(t,e){var s=Object(C["f"])().direction;e!==s&&Object(C["g"])(e),this.setLang(t)},logout:function(){var t=this;this.signOut().then(function(){t.$router.push("/user/login")})},toggleFullScreen:function(){var t=this.isInFullScreen(),e=document.documentElement;t?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullScreen=!t},getThemeColor:function(){return localStorage.getItem("themeColor")?localStorage.getItem("themeColor"):c["e"]},isInFullScreen:function(){return document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement}}),computed:Object(i["a"])({},Object(r["c"])({currentUser:"currentUser",menuType:"getMenuType",menuClickCount:"getMenuClickCount"})),beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentforMobileSearch)},created:function(){var t=this.getThemeColor();this.isDarkActive=t.indexOf("dark")>-1},mounted:function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(C["e"])("/json/vue-notifications.json");case 2:this.notifications=t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),watch:{"$i18n.locale":function(t,e){e!==t&&this.$router.go(this.$route.path)},isDarkActive:function(t){var e=this.getThemeColor(),s=!1;t&&e.indexOf("light")>-1?(s=!0,e=e.replace("light","dark")):!t&&e.indexOf("dark")>-1&&(s=!0,e=e.replace("dark","light")),s&&(localStorage.setItem("themeColor",e),setTimeout(function(){window.location.reload()},500))},isMobileSearch:function(t){t?document.addEventListener("click",this.handleDocumentforMobileSearch):document.removeEventListener("click",this.handleDocumentforMobileSearch)}}},w=k,M=Object(p["a"])(w,h,_,!1,null,null,null),S=M.exports,y={data:function(){return{show:!1}},components:{TopNav:S,Sidebar:v},computed:Object(i["a"])({},Object(r["c"])(["getMenuType"]))},x=y,$=Object(p["a"])(x,n,a,!1,null,null,null);e["default"]=$.exports}}]);