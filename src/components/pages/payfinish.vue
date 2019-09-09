<template>
  <div>
    <div class="container mt-10">
      <div class="row">
        <div class="col-12">
          <ul class="process">
            <li class="active done">填寫資料</li>
            <li class="active done">確認付款</li>
            <li class="active done">完成</li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="text-center text-success mt-8">付款成功</h1>
          <div class="text-center">
            <router-link to="/index">
              <button class="btn btn-primary w-75 text-center">
                <span>繼續購物</span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderId: "",
      order: {}
    };
  },
  methods: {
    getorder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      this.$http.get(api).then(res => {
        console.log(res.data);
        vm.order = res.data.order;
        console.log(vm.order.products);
      });
    }
  },

  created() {
    this.orderId = this.$route.params.orderId;
  }
};
</script>