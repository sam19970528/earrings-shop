<template>
  <div class="container mt-3">
    <div class="jumbotron" style="background-color:white">
      <h1 class="display-4 text-center wow fadeInLeft" data-wow-duration='2s'>即將推出</h1>
      <h2 class="text-center wow fadeInLeft" data-wow-duration='2s'>
        <i class="material-icons font-weight-bolder">maximize</i>
      </h2>

      <hr class="my-4" />
      <div class="row">
        <div data-wow-duration='2s' :style="{backgroundImage: `url(${bg1})` }" class="col-md-6 bg-img wow fadeInLeft"></div>
        <div class="col-md-6 px-5">
          <h3 class="text-center d-lg-block d-none mt-3 wow fadeInRight">—青日田手作—</h3>
          <h3 class="text-center d-lg-block d-none mb-5 wow fadeInRight">𓆡𓆛𓆜願每個人都能找到屬於自己的魅力</h3>
          <h2 class="text-center mb-3 text-primary wow fadeInRight">古典女孩</h2>
          <p class="wow fadeInRight">
            絲綢藍美的無話可說，
            這款描金南瓜珠加古董珠的搭配，
            小資女也可以華麗登場！
          </p>
          <router-link to="/allproducts">
            <div class="row justify-content-end">
              <i class="material-icons text-dark fa-2x wow fadeInRight">arrow_right_alt</i>
              <span class="align-self-center wow fadeInRight">購物去</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <div class="container mt-5">
      <div class="row no-gutters">
        <div :style="{backgroundImage: `url(${bg1})` }" class="col-md-6 pr-5 bg-img"></div>
        <div class="col-md-6 bg-warning p-10">
          <p>
            絲綢藍美的無話可說，
            這款描金南瓜珠加古董珠的搭配，
            小資女也可以華麗登場！
          </p>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import BG1 from "../assets/img/01.jpg";
import { WOW } from "wowjs";
export default {
  data() {
    return {
      bg1: BG1
    };
  },
  mounted() {
    {
      new WOW({live:false}).init();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0;
}
.bg-img {
  height: 350px;
}
</style>