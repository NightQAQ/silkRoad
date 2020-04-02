<template>
  <div>
    <home-header></home-header>
    <home-touch></home-touch>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-promotion></home-promotion>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeTouch from './components/Touch'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomePromotion from './components/Promotion'
import axios from 'axios'

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeTouch,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomePromotion
    
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }

}
</script>

<style lang="stylus" scoped>
</style>