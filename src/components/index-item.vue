<template>
  <div class="mt-4">
    <h2 class="text-center wow fadeInLeft" data-wow-duration='2s'>精選商品</h2>
    <h2 class="text-center  wow fadeInLeft" data-wow-duration='2s'>
      <i class="material-icons font-weight-bolder" >maximize</i>
    </h2>
    <div class="container">
      <div class="row wow fadeInUp" data-wow-duration='2s'>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in products" :key="item.id">
            <div class="card border-0">
              <a
                @click="getProduct(item.id)"
                class="card__img"
                :style="{backgroundImage: `url(${item.imageUrl})`}"
              ></a>
              <div class="card-body">
                <span
                  v-if="item.category==='耳環'"
                  class="badge badge-warning float-right ml-2"
                >{{item.category}}</span>
                <span
                  v-if="item.category==='飾品'"
                  class="badge badge-info float-right ml-2"
                >{{item.category}}</span>
                <h5 class="card-title">
                  <a href="#" class="text-dark">{{item.title}}</a>
                </h5>
                <p class="card-text">{{item.content}}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="originalPrice" v-if="!item.price">原價:{{item.origin_price}}</div>
                  <del class="originalPrice" v-if="item.price">原價:{{item.origin_price}}</del>
                  <div class="specialPrice" v-if="item.price">特價:{{item.price}}</div>
                </div>
              </div>
              <button class="card-footer bg-orange d-flex" @click="clickCart(item.id)">
                <div class="row w-100">
                  <div class="col-12">
                    <i class="fas fa-cart-plus text-white fa-2x">
                      <span class="pl-3">加入購物車</span>
                    </i>
                  </div>
                </div>
              </button>
            </div>
          </swiper-slide>

          <div class="swiper-button-prev d-none d-md-block" slot="button-prev"></div>
          <div class="swiper-button-next d-none d-md-block" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
import { WOW } from "wowjs";
export default {
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 60,
          modifier: 2,
          slideShadows: false
        },
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true
        },
        pagination: {
          el: ".swiper-pagination"
        },
        breakpoints: {
          996: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters(["products", "product"])
  },
  methods: {
    ...mapActions(["getProducts", "getProduct", "addCart"]),
    clickCart(id, qty = 1) {
      this.addCart({ id, qty });
    }
  },
  mounted(){
    { new WOW({live:false}).init() }
  },
  created() {
    this.getProducts();
  }
};
</script>
