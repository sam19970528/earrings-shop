(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-265ba706"],{6859:function(t,e,i){"use strict";var a=i("e6c1"),s=i.n(a);s.a},ce71:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navbar2"),i("Alert"),i("background"),i("mainproduct"),i("indexFooter")],1)},s=[],c=i("bce7"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleFade","data-ride":"carousel","data-interval":"3000"}},[i("div",{staticClass:"carousel-inner"},[i("div",{staticClass:"carousel-item active",style:{backgroundImage:"url("+t.bg1+")"}}),i("div",{staticClass:"carousel-item",style:{backgroundImage:"url("+t.bg2+")"}})])])},n=[],l=i("5917"),o=i.n(l),u=i("bc5a"),d=i.n(u),f={data:function(){return{bg1:o.a,bg2:d.a}}},v=f,b=i("2877"),p=Object(b["a"])(v,r,n,!1,null,"2a2cda2c",null),g=p.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3 mt-4 wow fadeInLeft",attrs:{"data-wow-duration":"2s"}},[i("div",{staticClass:"list-group sticky-top"},[i("div",{staticClass:"list-group__main"},[i("a",{class:{active:"all"===t.visibillity},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibillity="all"}}},[t._v("全部商品")]),i("a",{class:{active:"ear"===t.visibillity},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibillity="ear"}}},[t._v("耳環")]),i("a",{class:{active:"decorate"===t.visibillity},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.visibillity="decorate"}}},[t._v("飾品")])])])]),i("div",{staticClass:"col-md-9 mt-4"},[i("div",{staticClass:"row"},t._l(t.filterList,function(e){return i("div",{key:e.id,staticClass:"col-xl-4 col-lg-6 col-md-6 wow fadeInRight"},[i("div",{staticClass:"card border-0"},[i("a",{staticClass:"card__img",style:{backgroundImage:"url("+e.imageUrl+")"},on:{click:function(i){return t.getProduct(e.id)}}}),i("div",{staticClass:"card-body"},["耳環"===e.category?i("span",{staticClass:"badge badge-warning float-right ml-2"},[t._v(t._s(e.category))]):t._e(),"飾品"===e.category?i("span",{staticClass:"badge badge-info float-right ml-2"},[t._v(t._s(e.category))]):t._e(),i("h5",{staticClass:"card-title"},[i("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),i("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),i("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?t._e():i("div",{staticClass:"originalPrice"},[t._v("原價:"+t._s(e.origin_price))]),e.price?i("del",{staticClass:"originalPrice"},[t._v("原價:"+t._s(e.origin_price))]):t._e(),e.price?i("div",{staticClass:"specialPrice"},[t._v("特價:"+t._s(e.price))]):t._e()])]),i("button",{staticClass:"card-footer bg-orange d-flex",on:{click:function(i){return t.clickCart(e.id)}}},[t._m(0,!0)])])])}),0)])])])},y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row w-100"},[i("div",{staticClass:"col-12"},[i("i",{staticClass:"fas fa-cart-plus text-white fa-2x"},[i("span",{staticClass:"pl-3"},[t._v("加入購物車")])])])])}],m=(i("8e6e"),i("456d"),i("ac6a"),i("bd86")),C=i("bc1b"),h=i("2f62");function w(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(i,!0).forEach(function(e){Object(m["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):w(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var k={data:function(){return{visibillity:"all"}},methods:O({},Object(h["b"])(["getProducts","getProduct","addCart"]),{clickCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.addCart({id:t,qty:e}),this.$bus.$emit("message:push","已加入購物車","success")}}),computed:O({},Object(h["c"])(["products"]),{filterList:function(){var t=this;if("all"===t.visibillity)return t.products;if("ear"===t.visibillity){var e=[];return t.products.forEach(function(t){"耳環"===t.category&&e.push(t)}),e}if("decorate"===t.visibillity){var i=[];return t.products.forEach(function(t){"飾品"===t.category&&i.push(t)}),i}}}),watch:{products:function(){this.$nextTick(function(){var t=new C["WOW"]({live:!1});t.init()})}},mounted:function(){new C["WOW"]({live:!1}).init()},created:function(){this.getProducts()}},j=k,P=(i("6859"),Object(b["a"])(j,_,y,!1,null,"f54052e6",null)),x=P.exports,E=i("2dc0"),D=i("9865"),$={components:{navbar2:c["a"],background:g,mainproduct:x,Alert:E["a"],indexFooter:D["a"]}},I=$,W=Object(b["a"])(I,a,s,!1,null,null,null);e["default"]=W.exports},e6c1:function(t,e,i){}}]);
//# sourceMappingURL=chunk-265ba706.5dc10410.js.map