import Vue from 'vue'
import Vuex from 'vuex'
//載入模組
import productsMoudules from './products';
import cartsMoudules from './cart';
import ordersMoudules from './order';
import couponMoudules from './coupon';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status)
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  modules: {
    productsMoudules,
    cartsMoudules,
    ordersMoudules,
    couponMoudules,
  }


})