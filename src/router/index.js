import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import foods
import Foods from '../views/Foods.vue'

import FoodDetail from '../views/FoodDetail.vue'
import keranjang  from '../views/Keranjang.vue'
import PesananSukses  from '../views/PesananSukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {  //route foods 
    path: '/foods',
    name: 'foods',
    component: Foods
  },
  {  //route foodDetail
    path: '/foods/:id',
    name: 'FoodDetail',
    component: FoodDetail
  },
  {  //route keranjang
    path: '/keranjang',
    name: 'Keranjang',
    component: keranjang
  },
  {  //route pesanansukses
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: PesananSukses 
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
