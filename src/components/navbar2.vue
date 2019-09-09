<template>
  <div>
    <loading :loader="loader"  :active.sync="isLoading"></loading>

    <div class="container">
      <router-link to="/index">
        <h1 class="text-center">AO.HI.TA</h1>
      </router-link>

      <ul class="nav row no-gutters mt-2">
        <li class="nav-item col-md-3">
          <router-link class="nav-link active" to="/index">
            <span>首頁</span>
          </router-link>
        </li>
        <li class="nav-item col-md-3">
          <router-link class="nav-link" to="/allproducts">
            <span>商品</span>
          </router-link>
        </li>
        <li class="nav-item col-md-3">
          <router-link class="nav-link" to="/login">
            <span>後台管理</span>
          </router-link>
        </li>
        <li class="nav-item col-md-3">
          <router-link class="nav-link" to="/cart/check">
            <i class="fas fa-shopping-cart cart-custom">
              <p v-if="length" class="counter">
                <span>{{length}}</span>
              </p>
            </i>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white;">
      <div class="container">
            <router-link to="/index">
              <img src="../assets//img/logo.png" alt />
            </router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/index">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/allproducts">商品</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">後台管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart/check">
                <i class="fas fa-shopping-cart text-dark cart-custom">
                  <span v-if="length" class="counter">{{length}}</span>
                </i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>-->
  </div>
</template>
<style lang="scss" scoped>
@mixin mobile {
  @media (max-width: 576px) {
    @content;
  }
}
.container {
  max-width: 1520px;
  position: absolute;
  z-index: 999;
  padding: 0;
}
.nav-item {
  text-align: center;
}
a {
  color: #000000;
}
h1 {
  color: #000000;
}
h1:hover {
  transition: all 0.3s;
  color: rgb(127, 167, 101);
}
span:hover {
  transition: all 0.2s;
  border-bottom: 3px solid #00cc99;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loader:'bars',
    };
  },
  methods: {
    ...mapActions(["getCart", "getCartLength",])
    
  },
  computed: {
    ...mapGetters(["isLoading", "cart", "length"])
  },

  created() {
    this.getCart();
  }
};
</script>
