<template>
    
        <div class="promotion">
            <div class="promotion-title iconfont">&#xe6ae;小编推荐</div>
            <ul>
                <router-link tag="li" :to="'/shop/' + item.id" class="item border-bottom" v-for="item of promotionList" :key="item.id">
                    <img class="item-img" :src="item.imgUrl" />
                    <div class="item-info">
                        <p class="item-title" >{{item.title}}</p>
                        <p class="item-desc" 
                        style=" color: rgb(255, 87, 6); margin-right: 0.04rem; margin-bottom: 0.02rem;">
                            {{item.desc}}</p>
                        <p class="item-list">{{item.list}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
    
</template>
<script>
export default {
    name:'HomePromotion',
    data () {
        return {
            promotionList: [{
                id:"001",
                imgUrl:"https://t00img.yangkeduo.com/goods/images/2020-02-17/286a4b4d-74c1-4d9b-8e9a-98df704d3e3c.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp",
                list:"¥3.78 已拼10万+件",
                desc:"退货包运费 极速退款",
                title:"居家凉拖鞋女夏季室内防滑男家居软底浴室洗澡家用外穿拖鞋情侣"
            },{
                id:"002",
                imgUrl:"https://t00img.yangkeduo.com/goods/images/2020-01-14/dface118-c8fa-417e-add7-9433a5cf2baf.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp",
                list:"¥6.89 已拼10万件",
                desc:"退货包运费 极速退款",
                title:"老北京布鞋男士单鞋牛筋底布鞋透气防滑软底黑布鞋休闲鞋工作鞋"
            },{
                id:"003",
                imgUrl:"https://t00img.yangkeduo.com/goods/images/2019-12-26/a0482370-03b6-4c5d-9a2b-5db4aada0952.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp",
                list:"¥1.28 已拼4.2万件",
                desc:"退货包运费 极速退款",
                title:"德国全框老花镜眼镜男女款远视花镜老光护眼防辐射眼睛老花眼镜"
            },{
                id:"004",
                imgUrl:"https://t00img.yangkeduo.com/goods/images/2020-02-21/0d68bf42-9ca4-4601-8e11-80e08bd91347.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp",
                list:"¥2.66 已拼6.6万件",
                desc:"退货包运费 极速退款",
                title:"黑色垃圾袋加厚手提式家用厨酒大中小号背心式马甲塑料袋包邮批发"
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
.promotion
    margin-top: 15px;
    .promotion-title
        line-height: 20px;
        background-color: #ccc;
        text-indent: 10px;
        color:#ce0d1b;
    .item
        height: 172px;
        display:flex;
        overflow: hidden;
        .item-img
            height: 156px;
            width: 156px;
            padding: 10px;
        .item-info
            flex: 1;
            padding: 10px;
            .item-title
                line-height: 20px;
                margin-bottom: 50px;
                color: #151516;
            .item-list
                padding-top: 5px;
                color:#B22222;
                letter-spacing:1px;
                font-weight: 700;
</style>