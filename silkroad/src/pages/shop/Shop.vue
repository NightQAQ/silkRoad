<template>
    <div>
        <shop-banner></shop-banner>
        <shop-captions></shop-captions>
        <shop-actions></shop-actions>
        <shop-carttion></shop-carttion>
        <shop-share></shop-share>
        <shop-evaluate></shop-evaluate>
    </div>
    
</template>

<script>
import ShopBanner from './components/Banner'
import ShopCaptions from './components/Captions'
import ShopActions from './components/Actions'
import ShopCarttion from './components/Carttion'
import ShopShare from './components/Share'
import ShopEvaluate from './components/Evaluate'

export default {
    name:"Shop",
    components: {
        ShopBanner,
        ShopCaptions,
        ShopActions,
        ShopCarttion,
        ShopShare,
        ShopEvaluate
    }
}
</script>

<style lang="stylus" scoped>

</style>