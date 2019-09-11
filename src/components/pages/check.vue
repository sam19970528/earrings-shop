<template>
  <div>
    <div class="container mt-10">
      <div class="row">
        <div class="col-12">
          <ul class="process">
            <li class="active">填寫資料</li>
            <li>確認付款</li>
            <li>完成</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="py-3 mt-3 bg-light">
            <h1 class="text-center">您的購物清單</h1>
          </div>
          <div>
            <div class="row justify-content-center">
              <h2 v-if="cart.total==0" class="text-danger mr-3">尚未選購商品</h2>
              <router-link to="/allproducts" v-if="cart.total==0" class="btn btn-info">
                <span>回商品頁</span>
              </router-link>
            </div>
          </div>

          <div class="mt-3">
            <div class="row" v-for="item in cart.carts" :key="item.id">
              <div class="col-lg-6 align-self-center">
                <div class="media">
                  <div
                    class="media__img"
                    :style="{backgroundImage: `url(${item.product.imageUrl})`}"
                  ></div>
                  <div class="media-body ml-2">
                    <h5 class="mt-2">{{item.product.title}}</h5>
                    <div class="row">
                      <div class="col-6">
                        <h5 class="mt-1">NT${{item.product.price}}</h5>
                      </div>
                      <div class="col-6">
                        <h4
                          v-if="item.coupon"
                          class="text-right text-success d-lg-none"
                        >NT${{(item.total)*(item.coupon.percent)*0.01}}</h4>
                        <h4 v-else class="text-right d-lg-none">NT${{item.total}}</h4>
                      </div>
                    </div>
                    <div v-if="item.coupon" class="text-success d-md-none">已套用優惠券</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="row mb-2">
                  <div class="col-6">
                    <span class="mr-3">選購數量:{{item.qty}}</span>
                    <a href="#" @click.prevent="delCart(item.id)">
                      <i class="fas fa-trash-alt text-danger"></i>
                    </a>
                  </div>
                  <div class="col-6 align-self-center">
                    <h4
                      v-if="item.coupon"
                      class="text-right text-success d-lg-block d-none"
                    >NT${{(item.total)*(item.coupon.percent)*0.01}}</h4>
                    <h4 v-else class="text-right d-lg-block d-none">NT${{item.total}}</h4>
                  </div>
                  <div v-if="item.coupon" class="row w-100 justify-content-end d-none d-md-block">
                    <div class="text-success text-right">已套用優惠券</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row w-100 pl-4">
              <div class="col-4">
                <button v-if="length!=0" @click="addCoupon" class="btn btn-warning rounded-0">
                  <span>套用優惠券</span>
                </button>
              </div>
              <div v-if="length!=0" class="col-8">
                <input
                  v-model="cuponcode"
                  class="from-control w-100 py-1"
                  placeholder="輸入優惠碼"
                  type="text"
                />
                <small class="text-secondary">測試碼:code</small>
              </div>
            </div>

            <div v-if="cart.final_total!=0" class="text-right mt-3">
              <span class="text-warning fz-30">總計NT${{cart.final_total}}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="py-3 mt-3 bg-light">
            <h2 class="text-center">填寫資料</h2>
            <form @submit.prevent="createOrder">
              <div class="form-group pl-10">
                <label for="name">姓名</label>
                <input
                  :class="{'is-invalid':errors.has('name')}"
                  v-validate="'required'"
                  class="form-control mb-2 w-75"
                  v-model="form.user.name"
                  id="name"
                  name="name"
                  type="text"
                />
                <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
              </div>
              <div class="form-group pl-10">
                <label for="phone">電話</label>
                <input
                  v-validate="'required'"
                  :class="{'is-invalid':errors.has('tel')}"
                  class="form-control mb-2 w-75"
                  v-model="form.user.tel"
                  id="phone"
                  name="tel"
                  type="text"
                />
                <span class="text-danger" v-if="errors.has('tel')">電話必須輸入</span>
              </div>
              <div class="form-group pl-10">
                <label for="email">電子郵件</label>
                <input
                  :class="{'is-invalid':errors.has('email')}"
                  v-validate="'required|email'"
                  v-model="form.user.email"
                  class="form-control mb-2 w-75"
                  id="email"
                  name="email"
                  type="email"
                />
                <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
              </div>
              <div class="form-group pl-10">
                <label for="address">地址</label>
                <input
                  :class="{'is-invalid':errors.has('address')}"
                  v-validate="'required'"
                  class="form-control mb-2 w-75"
                  v-model="form.user.address"
                  id="address"
                  name="address"
                  type="text"
                />
                <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
              </div>
              <div class="form-group pl-10">
                <label for="area">備註</label>
                <textarea
                  v-model="form.message"
                  class="form-control w-75"
                  name="area"
                  id="area"
                  cols="10"
                  rows="5"
                ></textarea>
              </div>

              <div class="text-center">
                <button v-if="length!=0" class="btn btn-primary w-75">
                  <span>送出訂單</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import navbar2 from "../navbar2";
import indexFooter from "../index-footer";
export default {
  data() {
    return {
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
  components: {
    navbar2,
    indexFooter
  },
  computed: {
    ...mapGetters(["cart", "length"])
  },
  methods: {
    ...mapActions(["getCart", "delCart"]),
    addCoupon() {
      this.$store.dispatch("addCoupon", this.cuponcode);
    },
    createOrder() {
      this.$validator.validate().then(result => {
        if (result) {
          const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
          const vm = this;
          this.$store.state.isLoading = true;
          this.$http
            .post(
              api,
              {
                data: vm.form
              },
              vm.message
            )
            .then(res => {
              if (res.data.success) {
                this.$store.state.isLoading = false;
                vm.getCart();
                console.log(res.data);
                vm.$router.push(`/cart/checkorder/${res.data.orderId}`); //orderId是送出訂單的id
              }
            });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>
