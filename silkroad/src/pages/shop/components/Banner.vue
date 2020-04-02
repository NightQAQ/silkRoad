<template>
<div class="banner">
    <router-link to="/">
    <div class="banner-back iconfont">&#xe624;</div>
    </router-link>
    <van-swipe @change="onChange">
        <van-swipe-item class="change-img" >
            <img class="banner-img"
                src="https://t00img.yangkeduo.com/goods/images/2020-01-14/dface118-c8fa-417e-add7-9433a5cf2baf.jpg"/>
        </van-swipe-item>
        <van-swipe-item class="change-img" >
            <img class="banner-img"
                src="https://t00img.yangkeduo.com/goods/images/2019-02-25/ce2a26c4-8dfe-47ae-873d-eeaf32f59eb5.jpg"/>
        </van-swipe-item>
        <van-swipe-item class="change-img" >
            <img class="banner-img"
                src="https://t00img.yangkeduo.com/t05img/images/2018-07-10/e5cbd12307867e89895653cb735bf313.jpeg"/>
        </van-swipe-item>
        <van-swipe-item class="change-img" >
            <img class="banner-img"
                src="https://t00img.yangkeduo.com/goods/images/2018-09-20/6580dacb8a8f0926aca7c5cf0bb08b92.jpeg"/>
        </van-swipe-item>
        
        <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/4
        </div>
        
    </van-swipe>
    
    
</div> 

</template>

<script>
export default {
    name:"ShopBanner",
    data() {
        return {
            current: 0
                
        }
    },
    methods: {
        onChange(index) {
            this.current = index;
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow:hidden;
        height: 0;
        width: 100%;
        padding-bottom:100%;
        position:relative;
        .banner-img
            width: 100%;
        .custom-indicator
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.1);
        .banner-back
            height:25px;
            width:25px;
            font-size: 20px;
            position:absolute;
            top:5px;
            left:2px;
            z-index:5;
            color: #333;
            
        
        
</style>