import axios from 'axios'

export default {
    state: {
        cart: [],
        length: 0,
    },
    actions: {
        getCart(context) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            context.commit('LOADING', true);
            axios.get(api).then(res => {
                context.commit('LOADING', false);
                context.commit('CART', res.data.data)
                context.commit('LENGTH', res.data.data.carts.length)
            });
        },
        delCart(context, id) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
            context.commit('LOADING', true);
            axios.delete(api).then(() => {
                context.commit('LOADING', false);
                context.dispatch('getCart');
            });
        },
        addCart(context, {
            id,
            qty
        }) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            const cart = {
                product_id: id,
                qty
            };
            context.commit('LOADING', true);
            axios.post(api, {
                data: cart
            }).then(res => {
                context.commit('LOADING', false);
                context.dispatch('getCart');
            });
        },

    },
    mutations: {
        CART(state, payload) {
            state.cart = payload;
        },
        LENGTH(state, payload) {
            state.length = payload;
        }
    },
    getters: {
        cart: state => state.cart,
        length: state => state.length,
    },

}