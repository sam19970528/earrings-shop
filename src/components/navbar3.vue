<template>
  <div>
        <loading :loader="loader" :active.sync="isLoading"></loading>
    <nav class="navbar navbar-expand-lg navbar-light nav--shadow fixed-top" style="background-color: white;">
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
          <ul class="navbar-nav ml-auto">
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
                  <p v-if="length" class="counter">
                    <span>{{length}}</span>
                  </p>
                </i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loader:'dots'
    };
  },
  methods: {
    ...mapActions(["getCart", "delCart"])
  },

  computed: {
    ...mapGetters(["isLoading", "cart", "length"])
  },


  created() {
    this.getCart();
  }
};
</script>
<style lang="scss" scoped>
.media {
  margin: 0 5px;
}
.media__img {
  height: 50px;
  width: 50px;
  background-size: cover;
  background-position: 50%;
}
.dropdown-menu {
  width: 200px;
  padding: 0;
}
.dropdown-item {
  margin-top: 10px;
  padding: 0;
}
.dropdown-toggle::after {
  display: none;
}
</style>