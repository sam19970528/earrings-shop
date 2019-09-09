import axios from 'axios'
import router from '../router';

export default {
    state: {
        products: [],
        product: {},
    },
    actions: {
        getProducts(context) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
            context.commit('LOADING', true);
            axios.get(api).then(res => {
                context.commit('LOADING', false);
                context.commit('PRODUCTS', res.data.products);
            });
        },
        getProduct(context, id) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
            context.commit('LOADING', true);
            axios.get(api).then(res => {
                context.commit('LOADING', false);
                context.commit('PRODUCT', res.data.product);
                router.push(`/item/${res.data.product.id}`)
            });
        },
    },
    mutations: {
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        PRODUCT(state, payload) {
            state.product = payload;
        },
    },
    getters: {
        products: state => state.products,
        product: state => state.product,
    }

}