(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f263f25c"],{"114a":function(t,e,a){"use strict";var s=a("854d"),i=a.n(s);i.a},"18c2":function(t,e,a){t.exports=a.p+"img/01.a9689793.jpg"},"2cf2":function(t,e,a){"use strict";var s=a("b989"),i=a.n(s);i.a},"6e78":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar2"),a("Alert"),a("background"),a("indexContent"),a("indexItem"),a("indexFooter")],1)},i=[],n=a("bce7"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel slide carousel-fade wow fadeInUp",attrs:{id:"carouselExampleFade","data-wow-duration":"2s","data-ride":"carousel","data-interval":"3000"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active",style:{backgroundImage:"url("+t.bg1+")"}}),a("div",{staticClass:"carousel-item",style:{backgroundImage:"url("+t.bg2+")"}})])])},c=[],o=a("bc1b"),l=a("bc5a"),d=a.n(l),u=a("5917"),f=a.n(u),w=(a("1157"),{data:function(){return{bg1:d.a,bg2:f.a}},mounted:function(){new o["WOW"]({live:!1}).init()}}),p=w,b=(a("2cf2"),a("2877")),v=Object(b["a"])(p,r,c,!1,null,"57ad598a",null),g=v.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-3"},[a("div",{staticClass:"jumbotron",staticStyle:{"background-color":"white"}},[a("h1",{staticClass:"display-4 text-center wow fadeInLeft",attrs:{"data-wow-duration":"2s"}},[t._v("即將推出")]),t._m(0),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 bg-img wow fadeInLeft",style:{backgroundImage:"url("+t.bg1+")"},attrs:{"data-wow-duration":"2s"}}),a("div",{staticClass:"col-md-6 px-5"},[a("h3",{staticClass:"text-center d-lg-block d-none mt-3 wow fadeInRight"},[t._v("—青日田手作—")]),a("h3",{staticClass:"text-center d-lg-block d-none mb-5 wow fadeInRight"},[t._v("𓆡𓆛𓆜願每個人都能找到屬於自己的魅力")]),a("h2",{staticClass:"text-center mb-3 text-primary wow fadeInRight"},[t._v("古典女孩")]),a("p",{staticClass:"wow fadeInRight"},[t._v("\n          絲綢藍美的無話可說，\n          這款描金南瓜珠加古董珠的搭配，\n          小資女也可以華麗登場！\n        ")]),a("router-link",{attrs:{to:"/allproducts"}},[a("div",{staticClass:"row justify-content-end"},[a("i",{staticClass:"material-icons text-dark fa-2x wow fadeInRight"},[t._v("arrow_right_alt")]),a("span",{staticClass:"align-self-center wow fadeInRight"},[t._v("購物去")])])])],1)])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"text-center wow fadeInLeft",attrs:{"data-wow-duration":"2s"}},[a("i",{staticClass:"material-icons font-weight-bolder"},[t._v("maximize")])])}],_=a("18c2"),h=a.n(_),x={data:function(){return{bg1:h.a}},mounted:function(){new o["WOW"]({live:!1}).init()}},y=x,O=(a("114a"),Object(b["a"])(y,m,C,!1,null,"86162fc8",null)),k=O.exports,j=a("2dc0"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("h2",{staticClass:"text-center wow fadeInLeft",attrs:{"data-wow-duration":"2s"}},[t._v("精選商品")]),t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"row wow fadeInUp",attrs:{"data-wow-duration":"2s"}},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.products,function(e){return a("swiper-slide",{key:e.id},[a("div",{staticClass:"card border-0"},[a("a",{staticClass:"card__img",style:{backgroundImage:"url("+e.imageUrl+")"},on:{click:function(a){return t.getProduct(e.id)}}}),a("div",{staticClass:"card-body"},["耳環"===e.category?a("span",{staticClass:"badge badge-warning float-right ml-2"},[t._v(t._s(e.category))]):t._e(),"飾品"===e.category?a("span",{staticClass:"badge badge-info float-right ml-2"},[t._v(t._s(e.category))]):t._e(),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),a("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?t._e():a("div",{staticClass:"originalPrice"},[t._v("原價:"+t._s(e.origin_price))]),e.price?a("del",{staticClass:"originalPrice"},[t._v("原價:"+t._s(e.origin_price))]):t._e(),e.price?a("div",{staticClass:"specialPrice"},[t._v("特價:"+t._s(e.price))]):t._e()])]),a("button",{staticClass:"card-footer bg-orange d-flex",on:{click:function(a){return t.clickCart(e.id)}}},[a("div",{staticClass:"row w-100"},[a("div",{staticClass:"col-12"},[a("i",{staticClass:"fas fa-cart-plus text-white fa-2x"},[a("span",{staticClass:"pl-3"},[t._v("加入購物車")])])])])])])])}),a("div",{staticClass:"swiper-button-prev d-none d-md-block",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"swiper-button-next d-none d-md-block",attrs:{slot:"button-next"},slot:"button-next"}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"text-center wow fadeInLeft",attrs:{"data-wow-duration":"2s"}},[a("i",{staticClass:"material-icons font-weight-bolder"},[t._v("maximize")])])}],E=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),$=a("2f62");function R(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function W(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?R(a,!0).forEach(function(e){Object(E["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var L={data:function(){return{swiperOption:{effect:"coverflow",coverflowEffect:{rotate:30,stretch:0,depth:60,modifier:2,slideShadows:!1},slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",hideOnClick:!0},pagination:{el:".swiper-pagination"},breakpoints:{996:{slidesPerView:2,spaceBetween:10},576:{slidesPerView:1,spaceBetween:10}}}}},computed:W({},Object($["c"])(["products","product"])),methods:W({},Object($["b"])(["getProducts","getProduct","addCart"]),{clickCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$bus.$emit("message:push","已加入購物車","success"),this.addCart({id:t,qty:e})}}),mounted:function(){new o["WOW"]({live:!1}).init()},created:function(){this.getProducts()}},D=L,S=(a("fbc4"),Object(b["a"])(D,I,P,!1,null,null,null)),B=S.exports,F=a("9865"),U={components:{navbar2:n["a"],background:g,indexContent:k,indexItem:B,indexFooter:F["a"],Alert:j["a"]}},V=U,z=Object(b["a"])(V,s,i,!1,null,null,null);e["default"]=z.exports},"854d":function(t,e,a){},b989:function(t,e,a){},c0e0:function(t,e,a){},fbc4:function(t,e,a){"use strict";var s=a("c0e0"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-f263f25c.02ffaab0.js.map