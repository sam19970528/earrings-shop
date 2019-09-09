import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./components/index.vue'),
      
    },
    {
      path: '/allproducts',
      name: 'allproducts',
      component: () => import('./components/pages/allproducts.vue'),      
    },

    {
      path: '/item/:Id',
      name: 'item',
      component: () => import('./components/pages/item.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./components/pages/cart.vue'),
      children:[
        {
          path: 'check',
          name: 'check',
          component: () => import('./components/pages/check.vue'),
        },
        {
          path: 'checkorder/:orderId',
          name: 'checkorder',
          component: () => import('./components/pages/checkorder.vue'),
        },
        {
          path: 'payfinish/:orderId',
          name: 'payfinish',
          component: () => import('./components/pages/payfinish.vue'),
        },
    
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('./components/pages/login.vue')
    },
    {
      path: '/admin',
      name: 'dashboard',
      children: [{
        path: 'products',
        name: 'products',
        component: () => import('./components/pages/products.vue'),
        meta: {
          requiresAuth: true
        }
      },{
        path: 'oders',
        name: 'oders',
        component: () => import('./components/pages/oders.vue'),
        meta: {
          requiresAuth: true
        }

      },{
        path: 'coupon',
        name: 'coupon',
        component: () => import('./components/pages/coupon.vue'),
        meta: {
          requiresAuth: true
        }

      } ],
      component: () => import('./components/dashboard.vue'),
      meta: {
        requiresAuth: true
      }


    },
    {
      path: '/test',
      name: 'dash',
      component: () => import('./components/dashboard.vue'),
      children: [{
        path: 'custom',
        name: 'custom',
        component: () => import('./components/pages/custompage.vue'),
        meta: {
          requiresAuth: true
        }  

      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('./components/pages/checkout.vue'),

      }],
      meta: {
        requiresAuth: true
      }


    },




    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})