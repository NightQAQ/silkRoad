
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
// vant的框架的引入
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Lazyload } from 'vant'
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'
import { Sku } from 'vant'
import { Popup } from 'vant'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
// vant框架的使用 
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(Sku)
Vue.use(Popup)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    eventBus: new Vue()
  },
  components: { App },
  template: '<App/>'
  
})

router.afterEach((to,from,next) => {

             window.scrollTo(0,0);
  });
