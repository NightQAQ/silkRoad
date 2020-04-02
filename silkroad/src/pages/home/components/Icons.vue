<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img" >
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                        <p class="icon-desc">{{item.desc}}</p>
                </div>
        </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name: "HomeIcons",
    data () {
        return {
            swiperOption: {
            autoplay: false
        },
            iconList: [{
                id:'001',
                imgUrl: 'https://t00img.yangkeduo.com/goods/2020-01-14/f8f9fabf561700ef6687318300c7713a.png?imageMogr2/strip%7CimageView2/2/w/117/q/80',
                desc: "限时秒杀"
            },{
                id:'002',
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-03-08/2723bae18ca29e72c195562bfdace6cd.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"断码清仓"
            },
            {
                id:'003',
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-01-14/bc63ae848c923737bd799b96d5219f85.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"新衣馆"
            },{
                id:'004',
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"多多果园"
            },{
                id:"005",
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"九块九特卖"
            },{
                id:"006",
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-01-14/0fab520471880b5728fb7150d77f5390.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"充值中心"
            },{
                id:"007",
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-02-26/f9e3069d2e461cd5f5eb7d77ffce9d9d.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"医药馆"
            },{
                id:"008",
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-02-24/1ac41ebf88457e29ac4f8b5a01e72f1d.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"现金签到"
            },{
                id:"009",
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-01-14/9023c6c212ca7ed147ddfa28c1a13c59.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"多多赚大钱"
            },{
                id:"010",
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-01-19/617e5544f4e923c683ba601f8d39cd74.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"电器城"
            },{
                id:"011",
                imgUrl:"https://t00img.yangkeduo.com/goods/2020-01-19/617e5544f4e923c683ba601f8d39cd74.png?imageMogr2/strip%7CimageView2/2/w/117/q/80",
                desc:"电器城"
            }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor( index / 10)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
        .icons >>> .swiper-container
            height:0;
            padding-bottom: 50%;
        
        .icon
            height: 0;
            width: 20%;
            padding-bottom: 25%; // padding-bottom 是根据父元素的宽来设定高的的！！
            float: left;
            overflow: hidden;
            position: relative;
            .icon-img
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 22px;
                padding: 5px;
                box-sizing: border-box;
                .icon-img-content
                    display: block;
                    margin: 0 auto;
                    height: 100%;
            .icon-desc
                position:absolute;
                bottom:0;
                left: 0;
                right: 0;
                line-height: 22px;
                height: 22px;
                color: #666;
                text-align: center;

</style>