import axios from 'axios'
export default {
    actions: {
        addCoupon(context, cuponcode) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
            context.commit('LOADING', true);
            const coupon = {
                code: cuponcode
            };
            axios.post(api, {
                data: coupon
            }).then(res => {
                context.commit('LOADING', false);
                console.log(res.data);
                context.dispatch('getCart');
            });
        },

    },
}