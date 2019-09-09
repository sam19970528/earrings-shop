<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mt-4 wow fadeInLeft" data-wow-duration='2s'>
        <div class="list-group sticky-top">
          <div class="list-group__main">
            <a
              href="#"
              :class="{'active':visibillity ==='all'}"
              @click.prevent="visibillity='all'"
            >全部商品</a>
            <a
              href="#"
              :class="{'active':visibillity ==='ear'}"
              @click.prevent="visibillity='ear'"
            >耳環</a>
            <a
              href="#"
              :class="{'active':visibillity ==='decorate'}"
              @click.prevent="visibillity='decorate'"
            >飾品</a>
          </div>
        </div>
      </div>
      <div class="col-md-9 mt-4">
        <div class="row">
          <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"  v-for="item in filterList" :key="item.id">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import {mapGetters,mapActions} from 'vuex';
export default {
  data() {
    return {
      visibillity: "all"
    };
  },
  methods: {
      ...mapActions(['getProducts','getProduct','addCart']),
    clickCart(id, qty = 1) {
        this.addCart({id,qty});
    }
  },
  computed: {
      ...mapGetters(['products']),
    filterList() {
      let vm = this;
      if (vm.visibillity === "all") {
        return vm.products;
      } else if (vm.visibillity === "ear") {
        var ear = [];
        vm.products.forEach(item => {
          if (item.category === "耳環") {
            ear.push(item);
          }
        });
        return ear;
      } else if (vm.visibillity === "decorate") {
        var decorate = [];
        vm.products.forEach(item => {
          if (item.category === "飾品") {
            decorate.push(item);
          }
        });
        return decorate;
      }
    }
  },
  watch:{
    products(){
      this.$nextTick(()=>{
        var wow = new WOW({live:false});
        wow.init();

      })
    }
  },
    mounted() {
    {
      new WOW({live:false}).init();
    }
  },

  created() {
    this.getProducts();
  }
};
</script>
<style lang="scss" scoped>
.active {
  background-color: #ef9e7d;
  color: white;
}
</style>