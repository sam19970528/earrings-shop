<template>
  <!-- <div></div> -->
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade wow fadeInUp"
    data-wow-duration="2s"
    data-ride="carousel"
    data-interval="3000"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" :style="{backgroundImage: `url(${bg1})` }"></div>
      <div class="carousel-item" :style="{backgroundImage: `url(${bg2})` }"></div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import BG1 from "../assets/img/earring03.jpg";
import BG2 from "../assets/img/bg-img03.jpg";
import $ from "jquery";
export default {
  data() {
    return {
      bg1: BG1,
      bg2: BG2
    };
  },
  mounted() {
    {
      new WOW({ live: false }).init();
    }
  }
};
</script>
<style lang="scss" scoped>
.carousel {
  position: relative;
}
</style>
