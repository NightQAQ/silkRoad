import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Shop from '@/pages/shop/Shop'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/shop/:id',
      name: 'Shop',
      component: Shop
    }
    
  ]
})
