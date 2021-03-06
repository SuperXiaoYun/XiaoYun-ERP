import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/script/store/store'
import * as types from '@/script/store/types'
import ProductIndex from '@/components/ProductIndex'
import User from '@/components/User'
import OrderList from '@/components/OrderList'
import AgentList from '@/components/Agent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/productIndex',
    name: 'ProductIndex',
    component: ProductIndex,
    // meta: {
    //   requireAuth: true,
    // }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    // meta: {
    //   requireAuth: true,
    // }
  },
  {
    path: '/order',
    name: 'Order List',
    component: OrderList,
    // meta: {
    //   requireAuth: true,
    // }
  },
  {
    path: '/personal',
    name: 'Order List',
    component: OrderList,
    // meta: {
    //   requireAuth: true,
    // }
  },
  {
    path: '/agent',
    name: 'agent List',
    component: AgentList,
    // meta: {
    //   requireAuth: true,
    // }
  },
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      if (from.name == 'login')
        return;
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})

export default router;
