<template>
    <div class="content">
        <div class="content-top">
            <div class="content-top-left">
                    <span class="iconfont left-text">&#xe60c;</span>
                    <span class="left-text">百亿补贴</span>
                    <span class="left-text">|</span>
                    <span class="left-text">正品保障</span>
            </div>
            <div class="content-top-right">
                <span class="right-text">全部补贴品</span>
                <span class="iconfont right-text">&#xe64c;</span>
            </div>
        </div>
        <div class="subsidy">
            <div class="subsidy-content" v-for="item of subsidyList" :key="item.id">
                <div class="subsidy-content-img">
                    <img class="img" :src='item.imgUrl'/>
                </div>
                <span class=subsidy-text>{{item.price}}</span>
            </div>
            <!-- <div class="subsidy-content">
                <div class="subsidy-content-img">
                    <img class="img" src=""/>
                </div>
                <span class=subsidy-text>¥775</span>
            </div>
            <div class="subsidy-content">
                <div class="subsidy-content-img">
                    <img class="img" src=/>
                </div>
                <span class=subsidy-text>¥116</span>
            </div>
            <div class="subsidy-content">
                <div class="subsidy-content-img">
                    <img class="img" src=/>
                </div>
                <span class=subsidy-text>¥26</span>
            </div>
            <div class="subsidy-content">
                <div class="subsidy-content-img">
                    <img class="img" src=/>
                </div>
                <span class=subsidy-text>¥387</span>
            </div> -->
            
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend",
    data () {
        return {
            subsidyList:[{
                id:"001",
                imgUrl:"//t00img.yangkeduo.com/goods/images/2020-03-20/8ee885af5787d887dcd4d2bc8dd5ccf0.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                price:"¥999"
            },{
                id:"002",
                imgUrl:"//t00img.yangkeduo.com/goods/images/2020-03-26/f5d171e623c0a9c5b5fe0c95d4d10032.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                price:"¥775"
            },{
                id:"003",
                imgUrl:"//t00img.yangkeduo.com/goods/images/2020-03-26/63ff871f648f5c41e211530ad6bcfb09.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                price:"¥116"
            },{
                id:"004",
                imgUrl:"//t00img.yangkeduo.com/goods/images/2020-03-25/3cfa85309058c2f8babc310d6e04b31b.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                price:"¥26"
            },{
                id:"005",
                imgUrl:"//t00img.yangkeduo.com/goods/images/2020-03-27/3fe5c1165375cf7a6447b43682493ca3.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                price:"¥387"
            }]
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        width:100%;
        height: 0;
        padding-bottom: 40%;
        margin-top: 10px;
        .content-top
            width: 99.5%;
            height: 0;
            padding-bottom: 10%;
            background-color: white;
            position: relative;
            
            .content-top-left
                height:37.5px;
                width: 187.5px;
                padding-left: 10px;
                .left-text
                    line-height: 37.5px;
                    text-align: center;
                    font-weight: 600;
                    padding-left: 8px;
            .content-top-right
                position:absolute;
                right: 0;
                top:0;
                bottom:0;
                .right-text
                    line-height: 37.5px;
                    text-align: center;
                    color: #666;
        .subsidy
            width:100%;
            height:0;
            padding-bottom: 30%;
            .subsidy-content
                height: 0;
                width: 20%;
                padding-bottom: 30%; // padding-bottom 是根据父元素的宽来设定高的的！！
                float: left;
                overflow: hidden;
                position: relative;
                .subsidy-content-img
                    position: absolute;
                    top:0;
                    left: 0;
                    right: 0;
                    bottom: 20px;
                    box-sizing: border-box;
                    .img
                        height 100%
                        width:100%
                .subsidy-text
                    position:absolute;
                    bottom:0;
                    left: 0;
                    right: 0;
                    line-height: 22px;
                    height: 22px;
                    color: #B22222;
                    text-align: center;



</style>