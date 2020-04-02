<template>
    <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item of swiperList" :key="item.id"> 
                <img class="swiper-img" :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
    name: "HomeSwiper",
    data () {
    return {
    swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000
    
    },swiperList: [
        {
            id:'0001',
            imgUrl: '//t16img.yangkeduo.com/pdd_oms/2020-03-06/a26ed01950b56a0a601f9fe1105842e7.png'
        },{
            id: '0002',
            imgUrl: "//t16img.yangkeduo.com/pdd_oms/2020-03-18/a228bef8be5348edce013be0ef67a3b6.png"
        },{
            id:'0003',
            imgUrl:"//t16img.yangkeduo.com/pdd_oms/2020-03-11/6aca3f437933d29eccb1691f6dab85a5.jpg"
        }
        
    ]

        };
    }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: white !important;
}

.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 46.93%;
}

.swiper-img {
    width: 100%;
}
</style>