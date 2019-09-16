import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
import App from './App.vue'
import store from './store'
import 'animate.css'
import './bus';
import router from './router'
import filtercurrency from './filters/currency'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(VueAwesomeSwiper)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)
Vue.component("Loading", Loading)
Vue.filter("currency", filtercurrency)
axios.defaults.withCredentials = true;
Vue.filter('time', function (d) {
  var dates = new Date(d * 1000);
  var year = dates.getFullYear();
  var month = dates.getMonth() + 1;
  var date = dates.getDate();
  return `${year}/${month}/${date}`
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // console.log("to",to,"from",from,"next",next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next();
  }
})