(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213e8b"],{af4d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("table",{staticClass:"table mt-4"},[t._m(0),s("tbody",t._l(t.orders,function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(t._f("time")(e.create_at)))]),s("td",[t._v(t._s(e.user.email))]),s("td",t._l(e.products,function(e){return s("tr",{key:e.id},[t._v("\n                        "+t._s(e.product.title)+" 數量:"+t._s(e.qty)+t._s(e.product.unit)+"\n                    ")])}),0),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),s("td",[e.is_paid?s("label",{staticClass:"text-success"},[t._v("已付款")]):s("label",{staticClass:"text-danger"},[t._v("未付款")])])])}),0)])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("th",{attrs:{width:"150"}},[t._v("購買時間")]),s("th",{attrs:{width:"200"}},[t._v("Email")]),s("th",{attrs:{width:"200"}},[t._v("購買款項")]),s("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("應付金額")]),s("th",{attrs:{width:"150"}},[t._v("是否付款")])])}],i={data:function(){return{orders:[],user:{},isLoading:!1}},methods:{getoders:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("pu0528","/admin/orders");t.isLoading=!0,this.$http.get(e).then(function(e){t.isLoading=!1,t.orders=e.data.orders,t.user=e.data.orders.user,console.log(t.orders)})}},created:function(){this.getoders()}},n=i,d=s("2877"),o=Object(d["a"])(n,a,r,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d213e8b.30859214.js.map