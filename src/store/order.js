import axios from 'axios'
import router from '../router';

export default {
    state: {
        order: {
            user: {}
        },
    },
    actions: {
        getOrder(context, orderId) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderId}`;
            axios.get(api).then(res => {
                context.commit('ORDER', res.data.order)
            });
        },
        payOrder(context, orderId) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderId}`;
            context.commit('LOADING', true);
            axios.post(api).then(res => {
                console.log(res.data);
                if (res.data.success) {
                    context.commit('LOADING', false);
                    router.push(`/cart/payfinish/${orderId}`)
                    context.dispatch('getOrder');
                }
            });
        }



    },
    mutations: {
        ORDER(state, payload) {
            state.order = payload;
        },
    },
    getters: {
        order: state => state.order,
    },

}