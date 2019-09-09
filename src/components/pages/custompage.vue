<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="height: 200px; background-size: cover; background-position: center center"
            :style="{backgroundImage: `url(${item.imageUrl})`}"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{item.title}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
              <del class="h6" v-if="item.price">{{item.origin_price}}</del>
              <div class="h5" v-if="item.price">{{item.price}}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.isloadingItem===item.id"></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtocart(item.id)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.isloadingItem===item.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="productModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img :src="product.imageUrl" class="img-fluid" alt />
              <blockquote class="blockquote mt-3">
                <p class="mb-0">{{ product.content }}</p>
                <footer class="blockquote-footer text-right">{{ product.description }}</footer>
              </blockquote>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
              </div>
              <select name class="form-control mt-3" v-model="num">
                <option selected disabled value="0">--請選擇--</option>
                <option :value="num" v-for="num in 10" :key="num">選購 {{num}}</option>
              </select>
            </div>
            <div class="modal-footer">
              <div class="text-muted text-nowrap mr-3">
                小計
                <strong>{{product.price *num}}</strong> 元
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click="addtocart(product.id,num)"
              >
                <i class="fas fa-spinner fa-spin" v-if="product.id === status.isloadingItem"></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <div class="my-5 row justify-content-center">
        <table class="table" v-if="cart.total !=0">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="delcart(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm" v-if="cart.total !=0">
          <input type="text" class="form-control" v-model="cuponcode" placeholder="請輸入優惠碼" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="addcoupon" type="button">套用優惠碼</button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createoder" v-if="cart.total !=0">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input
            type="email"
            :class="{'is-invalid':errors.has('email')}"
            v-validate="'required|email'"
            class="form-control"
            name="email"
            id="useremail"
            v-model="form.user.email"
            placeholder="請輸入 Email"
            
          />
          <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input
            type="text"
            :class="{'is-invalid':errors.has('name')}"
            v-validate="'required'"
            class="form-control"
            name="name"
            id="username"
            v-model="form.user.name"
            placeholder="輸入姓名"
          />
          <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input
            type="tel"
            class="form-control"
            v-validate="'required'"
            :class="{'is-invalid':errors.has('tel')}"
            id="usertel"
            v-model="form.user.tel"
            placeholder="請輸入電話"
            name="tel"
          />
          <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input
            type="text"
            class="form-control"
            :class="{'is-invalid':errors.has('address')}"
            name="address"
            v-validate="'required'"
            id="useraddress"
            v-model="form.user.address"
            placeholder="請輸入地址"
          />
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="comment">留言</label>
          <textarea
            name
            id="comment"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      product: {
        
      },
      num:1,
      cart: [],
      status: {
        isloadingItem: ""
      },
      isLoading: false,
      cuponcode: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
      vm.isLoading = true;
      vm.$http.get(api).then(res => {
        vm.isLoading = false;
        console.log(res.data);
        vm.products = res.data.products;
      });
    },
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.isloadingItem = id;
      vm.$http.get(api).then(res => {
        vm.product = res.data.product;
        $("#productModal").modal("show");
        vm.status.isloadingItem = "";
        console.log(res.data.product);
      });
    },
    addtocart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.status.isloadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      vm.$http.post(api, { data: cart }).then(res => {
        vm.status.isloadingItem = "";
        vm.getcart();
        console.log(res.data);
        $("#productModal").modal("hide");
      });
    },
    getcart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then(res => {
        vm.isLoading = false;
        vm.cart = res.data.data;
        console.log(res.data.data);
      });
    },
    delcart(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      vm.$http.delete(api).then(res => {
        vm.getcart();
        vm.isLoading = false;
      });
    },
    addcoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.cuponcode
      };
      vm.isLoading = true;
      vm.$http.post(api, { data: coupon }).then(res => {
        console.log(res.data);
        vm.getcart();
        vm.isLoading = false;
      });
    },
    createoder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      this.$validator.validate().then(result => {
        if (result) {
          this.$http.post(api, { data: vm.form }, vm.message).then(res => {
            if(res.data.success){
            vm.getcart();
            console.log(res.data);
            vm.$router.push(`/test/checkout/${res.data.orderId}`) //orderId是送出訂單的id
            }
          });
        }else{
          console.log("欄位不完整");
        }
      });
    }
  },
  created() {
    this.getProducts();
    this.getcart();
  }
};
</script>