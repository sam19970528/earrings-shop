(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33e82105"],{"07e3":function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},"1bc3":function(t,e,r){var a=r("f772");t.exports=function(t,e){if(!a(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!a(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!a(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!a(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,r){var a=r("f772"),n=r("e53d").document,s=a(n)&&a(n.createElement);t.exports=function(t){return s?n.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,r){var a=r("d9f6"),n=r("aebd");t.exports=r("8e60")?function(t,e,r){return a.f(t,e,n(1,r))}:function(t,e,r){return t[e]=r,t}},"454f":function(t,e,r){r("46a7");var a=r("584a").Object;t.exports=function(t,e,r){return a.defineProperty(t,e,r)}},"456d":function(t,e,r){var a=r("4bf8"),n=r("0d58");r("5eda")("keys",function(){return function(t){return n(a(t))}})},"46a7":function(t,e,r){var a=r("63b6");a(a.S+a.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"584a":function(t,e){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},"5eda":function(t,e,r){var a=r("5ca1"),n=r("8378"),s=r("79e5");t.exports=function(t,e){var r=(n.Object||{})[t]||Object[t],i={};i[t]=e(r),a(a.S+a.F*s(function(){r(1)}),"Object",i)}},"63b6":function(t,e,r){var a=r("e53d"),n=r("584a"),s=r("d864"),i=r("35e8"),o=r("07e3"),c="prototype",l=function(t,e,r){var u,f,d,v=t&l.F,p=t&l.G,m=t&l.S,g=t&l.P,b=t&l.B,C=t&l.W,h=p?n:n[e]||(n[e]={}),_=h[c],y=p?a:m?a[e]:(a[e]||{})[c];for(u in p&&(r=e),r)f=!v&&y&&void 0!==y[u],f&&o(h,u)||(d=f?y[u]:r[u],h[u]=p&&"function"!=typeof y[u]?r[u]:b&&f?s(d,a):C&&y[u]==d?function(t){var e=function(e,r,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,a)}return t.apply(this,arguments)};return e[c]=t[c],e}(d):g&&"function"==typeof d?s(Function.call,d):d,g&&((h.virtual||(h.virtual={}))[u]=d,t&l.R&&_&&!_[u]&&i(_,u,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"711f":function(t,e,r){"use strict";var a=r("7cde"),n=r.n(a);n.a},"75eb":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{staticClass:"container mt-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[t._m(1),0==t.cart.total?r("h2",{staticClass:"text-center text-danger"},[t._v("尚未選購商品")]):t._e(),r("div",{staticClass:"mt-3"},[t._l(t.cart.carts,function(e){return r("div",{key:e.id,staticClass:"row"},[r("div",{staticClass:"col-lg-6 align-self-center"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media__img",style:{backgroundImage:"url("+e.product.imageUrl+")"}}),r("div",{staticClass:"media-body ml-2"},[r("h5",{staticClass:"mt-2"},[t._v(t._s(e.product.title))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h5",{staticClass:"mt-1"},[t._v("NT$"+t._s(e.product.price))])]),r("div",{staticClass:"col-6"},[e.coupon?r("h4",{staticClass:"text-right text-success d-lg-none"},[t._v("NT$"+t._s(e.total*e.coupon.percent*.01))]):r("h4",{staticClass:"text-right d-lg-none"},[t._v("NT$"+t._s(e.total))])])]),e.coupon?r("div",{staticClass:"text-success d-md-none"},[t._v("已套用優惠券")]):t._e()])])]),r("div",{staticClass:"col-lg-6 align-self-center"},[r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-6"},[r("span",{staticClass:"mr-3"},[t._v("選購數量:"+t._s(e.qty))]),r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.delCart(e.id)}}},[r("i",{staticClass:"fas fa-trash-alt text-danger"})])]),r("div",{staticClass:"col-6 align-self-center"},[e.coupon?r("h4",{staticClass:"text-right text-success d-lg-block d-none"},[t._v("NT$"+t._s(e.total*e.coupon.percent*.01))]):r("h4",{staticClass:"text-right d-lg-block d-none"},[t._v("NT$"+t._s(e.total))])]),e.coupon?r("div",{staticClass:"row w-100 justify-content-end d-none d-md-block"},[r("div",{staticClass:"text-success text-right"},[t._v("已套用優惠券")])]):t._e()])])])}),r("div",{staticClass:"row w-100 pl-4"},[r("div",{staticClass:"col-4"},[0!=t.length?r("button",{staticClass:"btn btn-warning rounded-0",on:{click:t.addCoupon}},[r("span",[t._v("套用優惠券")])]):t._e()]),0!=t.length?r("div",{staticClass:"col-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.cuponcode,expression:"cuponcode"}],staticClass:"from-control w-100 py-1",attrs:{placeholder:"輸入優惠碼",type:"text"},domProps:{value:t.cuponcode},on:{input:function(e){e.target.composing||(t.cuponcode=e.target.value)}}}),r("small",{staticClass:"text-secondary"},[t._v("測試碼:code")])]):t._e()]),0!=t.cart.final_total?r("div",{staticClass:"text-right mt-3"},[r("span",{staticClass:"text-warning fz-30"},[t._v("總計NT$"+t._s(t.cart.final_total))])]):t._e()],2)]),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"py-3 mt-3 bg-light"},[r("h2",{staticClass:"text-center"},[t._v("填寫資料")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[r("div",{staticClass:"form-group pl-10"},[r("label",{attrs:{for:"name"}},[t._v("姓名")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control mb-2 w-75",class:{"is-invalid":t.errors.has("name")},attrs:{id:"name",name:"name",type:"text"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?r("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),r("div",{staticClass:"form-group pl-10"},[r("label",{attrs:{for:"phone"}},[t._v("電話")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control mb-2 w-75",class:{"is-invalid":t.errors.has("tel")},attrs:{id:"phone",name:"tel",type:"text"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("tel")?r("span",{staticClass:"text-danger"},[t._v("電話必須輸入")]):t._e()]),r("div",{staticClass:"form-group pl-10"},[r("label",{attrs:{for:"email"}},[t._v("電子郵件")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control mb-2 w-75",class:{"is-invalid":t.errors.has("email")},attrs:{id:"email",name:"email",type:"email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?r("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),r("div",{staticClass:"form-group pl-10"},[r("label",{attrs:{for:"address"}},[t._v("地址")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control mb-2 w-75",class:{"is-invalid":t.errors.has("address")},attrs:{id:"address",name:"address",type:"text"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?r("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),r("div",{staticClass:"form-group pl-10"},[r("label",{attrs:{for:"area"}},[t._v("備註")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control w-75",attrs:{name:"area",id:"area",cols:"10",rows:"5"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),r("div",{staticClass:"text-center"},[0!=t.length?r("button",{staticClass:"btn btn-primary w-75"},[r("span",[t._v("送出訂單")])]):t._e()])])])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("ul",{staticClass:"process"},[r("li",{staticClass:"active"},[t._v("填寫資料")]),r("li",[t._v("確認付款")]),r("li",[t._v("完成")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-3 mt-3 bg-light"},[r("h1",{staticClass:"text-center"},[t._v("您的購物清單")])])}],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62"),o=r("bce7"),c=r("9865");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var f={data:function(){return{cuponcode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{navbar2:o["a"],indexFooter:c["a"]},computed:u({},Object(i["c"])(["cart","length"])),methods:u({},Object(i["b"])(["getCart","delCart"]),{addCoupon:function(){this.$store.dispatch("addCoupon",this.cuponcode)},createOrder:function(){var t=this;this.$validator.validate().then(function(e){if(e){var r="".concat("https://vue-course-api.hexschool.io","/api/").concat("pu0528","/order"),a=t;t.$store.state.isLoading=!0,t.$http.post(r,{data:a.form},a.message).then(function(e){e.data.success&&(t.$store.state.isLoading=!1,a.getCart(),console.log(e.data),a.$router.push("/cart/checkorder/".concat(e.data.orderId)))})}else console.log("欄位不完整")})}}),created:function(){this.getCart()}},d=f,v=r("2877"),p=Object(v["a"])(d,a,n,!1,null,null,null);e["default"]=p.exports},"794b":function(t,e,r){t.exports=!r("8e60")&&!r("294c")(function(){return 7!=Object.defineProperty(r("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7cde":function(t,e,r){},"85f2":function(t,e,r){t.exports=r("454f")},"8e60":function(t,e,r){t.exports=!r("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(t,e,r){var a=r("5ca1"),n=r("990b"),s=r("6821"),i=r("11e9"),o=r("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var e,r,a=s(t),c=i.f,l=n(a),u={},f=0;while(l.length>f)r=c(a,e=l[f++]),void 0!==r&&o(u,e,r);return u}})},9865:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hr"),r("footer",[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("i",{staticClass:"fab fa-facebook-square fa-2x mr-3 text-blue"}),r("i",{staticClass:"fab fa-instagram fa-2x mr-3 text-danger"}),r("i",{staticClass:"fab fa-line fa-2x text-success"})]),r("p",{staticClass:"text-center mt-2 text-primary"},[t._v("(僅做練習使用,不做商業用途)")])])])])}],s=r("2877"),i={},o=Object(s["a"])(i,a,n,!1,null,null,null);e["a"]=o.exports},"990b":function(t,e,r){var a=r("9093"),n=r("2621"),s=r("cb7c"),i=r("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var e=a.f(s(t)),r=n.f;return r?e.concat(r(t)):e}},ac6a:function(t,e,r){for(var a=r("cadf"),n=r("0d58"),s=r("2aba"),i=r("7726"),o=r("32e9"),c=r("84f2"),l=r("2b4c"),u=l("iterator"),f=l("toStringTag"),d=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(v),m=0;m<p.length;m++){var g,b=p[m],C=v[b],h=i[b],_=h&&h.prototype;if(_&&(_[u]||o(_,u,d),_[f]||o(_,f,b),c[b]=d,C))for(g in a)_[g]||s(_,g,a[g],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bce7:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{loader:t.loader,active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"container"},[r("router-link",{attrs:{to:"/index"}},[r("h1",{staticClass:"text-center"},[t._v("AO.HI.TA")])]),r("ul",{staticClass:"nav row no-gutters mt-2"},[r("li",{staticClass:"nav-item col-md-3"},[r("router-link",{staticClass:"nav-link active",attrs:{to:"/index"}},[r("span",[t._v("首頁")])])],1),r("li",{staticClass:"nav-item col-md-3"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/allproducts"}},[r("span",[t._v("商品")])])],1),r("li",{staticClass:"nav-item col-md-3"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[r("span",[t._v("後台管理")])])],1),r("li",{staticClass:"nav-item col-md-3"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/cart/check"}},[r("i",{staticClass:"fas fa-shopping-cart cart-custom"},[t.length?r("p",{staticClass:"counter"},[r("span",[t._v(t._s(t.length))])]):t._e()])])],1)])],1)],1)},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach(function(e){Object(s["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var l={data:function(){return{loader:"bars"}},methods:c({},Object(i["b"])(["getCart","getCartLength"])),computed:c({},Object(i["c"])(["isLoading","cart","length"])),created:function(){this.getCart()}},u=l,f=(r("711f"),r("2877")),d=Object(f["a"])(u,a,n,!1,null,"7b239808",null);e["a"]=d.exports},bd86:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var a=r("85f2"),n=r.n(a);function s(t,e,r){return e in t?n()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},d864:function(t,e,r){var a=r("79aa");t.exports=function(t,e,r){if(a(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,a){return t.call(e,r,a)};case 3:return function(r,a,n){return t.call(e,r,a,n)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,r){var a=r("e4ae"),n=r("794b"),s=r("1bc3"),i=Object.defineProperty;e.f=r("8e60")?Object.defineProperty:function(t,e,r){if(a(t),e=s(e,!0),a(r),n)try{return i(t,e,r)}catch(o){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},e4ae:function(t,e,r){var a=r("f772");t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},f1ae:function(t,e,r){"use strict";var a=r("86cc"),n=r("4630");t.exports=function(t,e,r){e in t?a.f(t,e,n(0,r)):t[e]=r}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-33e82105.a780a702.js.map