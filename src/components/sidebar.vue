<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" 
             active-class="color"
             to="/admin/products"
             >
              <i class="fas fa-inbox "  ></i>
              <span  > 產品列表</span>
              
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
            active-class="color"
             to="/admin/oders" 
            >
              <i class="far fa-sticky-note" ></i>
              <span  > 訂單列表</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
            active-class="color"
             to="/admin/coupon"
             >
              <i class="fas fa-ticket-alt" ></i>
              <span > 優惠券</span>
            </router-link>
          </li>
        </ul>
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link active-class="color"  class="nav-link" to="/test/custom">
              <i class="fas fa-shopping-cart" ></i>
              <span data-feather="file-text" >模擬訂單</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      //路由樣式 active-class,
    }
  },
}
</script>
<style scoped>
.color {
  color: blueviolet;
}
</style>
