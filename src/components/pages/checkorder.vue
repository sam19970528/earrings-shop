<template>
  <div>
    <div class="container mt-10">
      <div class="row">
        <div class="col-12">
          <ul class="process">
            <li class="active done">填寫資料</li>
            <li class="active">確認付款</li>
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
          <div class="mt-3">
            <div class="row" v-for="item in order.products" :key="item.id">
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
                    <!-- <div v-if="item.coupon" class="text-success d-md-none">已套用優惠券</div> -->
                  </div>
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="row mb-2">
                  <div class="col-6">
                    <span class="mr-3">選購數量:{{item.qty}}</span>
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
            <div class="text-right mt-3">
              <span class="text-warning fz-30">總計NT${{order.total}}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="py-3 mt-3 bg-light">
            <h2 class="text-center">確認資料</h2>
            <table class="table table-striped mt-3">
              <tbody>
                <tr>
                  <th scope="row" width="200">訂單編號</th>
                  <td>{{order.id}}</td>
                </tr>
                <tr>
                  <th scope="row" width="200">購買日期</th>
                  <td>{{order.create_at |time}}</td>
                </tr>

                <tr>
                  <th scope="row" width="200">姓名</th>
                  <td>{{order.user.name}}</td>
                </tr>
                <tr>
                  <th scope="row" width="200">電話</th>
                  <td>{{order.user.tel}}</td>
                </tr>
                <tr>
                  <th scope="row" width="200">Email</th>
                  <td>{{order.user.email}}</td>
                </tr>
                <tr>
                  <th scope="row" width="200">地址</th>
                  <td>{{order.user.address}}</td>
                </tr>
                <tr>
                  <th scope="row" width="200">付款狀態</th>
                  <td class="text-danger">
                    <span class="text-danger">尚未付款</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <button @click="payOrder" class="btn btn-primary w-100">
              <span>確認付款</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      orderId: ""
    };
  },
  computed: {
    ...mapGetters(["order"])
  },
  methods: {
    getOrder() {
      this.$store.dispatch("getOrder", this.orderId);
    },
    payOrder() {
      this.$store.dispatch("payOrder", this.orderId);
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  }
};
</script>