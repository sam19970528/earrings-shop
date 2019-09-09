<template>
  <div>
    <navbar3 />
    <div class="container">
      <div class="row mt-10">
        <div class="col-md-7 bg-img" :style="{backgroundImage: `url(${product.imageUrl})`}"></div>
        <div class="col-md-5">
          <div
            v-if="product.category==='耳環'"
            class="badge badge-warning mt-3 mb-3"
          >{{product.category}}</div>
          <div
            v-if="product.category==='飾品'"
            class="badge badge-info mt-3 mb-3"
          >{{product.category}}</div>
          <h2>{{product.title}}</h2>
          <hr />
          <p>{{product.description}}</p>

          <select class="form-control mt-3" v-model="num">
            <option value="0" disabled selected>--請選擇--</option>
            <option :value="num" v-for="num in 10" :key="num">{{num}} {{product.unit}}</option>
          </select>

          <div class="form-row mt-3">
            <div class="col-6 originalPrice">原價:{{product.origin_price}}</div>
            <div class="col-6 specialPrice fz-30">特價:{{product.price}}</div>
          </div>
          <div class="text-muted text-nowrap mr-3">
            小計
            <strong class="text-danger">{{num * product.price }}</strong> 元
          </div>
          <button class="btn btn-primary w-100" @click="clickCart(product.id,num)">
            <span>加入購物車</span>
          </button>
        </div>
      </div>
    </div>
    <indexFooter />
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
import navbar3 from "../navbar3";
import indexFooter from "../index-footer";
export default {
  data() {
    return {
      Id: "",
      num: 1
    };
  },
  components: {
    navbar3,
    indexFooter
  },
  computed: {
    ...mapGetters(['product'])
  },
  methods: {
   ... mapActions(['addCart']),
   getProduct(){
     this.$store.dispatch('getProduct',this.Id)
   },
    clickCart(id, qty = 1) {
      this.addCart({id,qty})
    }
  },
  created() {
    this.Id = this.$route.params.Id;
    this.getProduct();
  }
};
</script>
