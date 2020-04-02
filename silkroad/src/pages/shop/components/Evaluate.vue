<template>
    <div class="evaluate">
        <div class="evaluate-title">
            <span class="desc">商品评价(10万+)</span>
            <span class="iconfont">查看全部&#xe64c;</span>
            </div>
        <div class="evaluate-tally">
            <span class="tally-left">正品(21)</span>
            <span class="tally-mid">物美价廉(7304)</span>
            <span class="tally-right">质量很好(5143)</span>
        </div>
        <div class="evaluate-content">
            <div class="content-top">
                <div class="content-top-img">
                    <img class="img" src="//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=Xmhzv8xLX8cbP0lhOmcSPmcLOH8LPG80XFR-P8c4PGMIOm*zMH80PFRIO8PIM8QW&width=40&height=40&type=sns"/>
                </div>
                <span class="img-name">招财小仙女</span>
            </div>
            <div class="content-bottom">
            <p class="content-bottom-text">质量好，尺码也合适。对比了很多家觉得这家对比性最高，值得购买。也建议大家购买。</p>
            </div>
        </div>
        <div class="evaluate-content">
            <div class="content-top">
                <div class="content-top-img">
                    <img class="img" src="//img.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80Q90s50.jpg_.webp"/>
                </div>
                <span class="img-name">四十大盗</span>
            </div>
            <div class="content-bottom">
            <p class="content-bottom-text">质量一般般，便宜没好货，没穿两天就烂了，店家不给售后，不如淘宝。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ShopEvaluate"
}
</script>

<style lang="stylus" scoped>
    .evaluate
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        
        margin-top: 5px;
        .evaluate-title
            width: 100%;
            height: 40px;
            .desc
                line-height: 40px;
                text-align: center;
                margin-left:8px;
            .iconfont
                float:right;
                color: #9c9c9c;
                line-height: 40px;
                text-align: center;
        .evaluate-tally
            width:100%;
            height: 45px;
            display:flex;
            align-items: center;
            justify-content: space-around;
            .tally-left
                color:#25B513;
                background-color:#DAF8CD;
                padding: 10px;
            .tally-mid
                color: #58595B;
                background-color:#FDEFEE;
                padding: 10px;
            .tally-right
                color:#58595B;
                background-color:#FDEFEE;
                padding: 10px;
        .evaluate-content
            width: 100%;
            height: 100px;
            .content-top
                width:100%;
                height: 50px;
                position: relative;
                .content-top-img
                    width: 30px;
                    height: 30px;
                    border-radius: 5px;
                    margin-left: 10px;
                    padding-top: 10px;
                    overflow: hidden;
                    .img
                        height:100%;
                        border-radius:100px
                .img-name
                    margin-left: 10px;
                    position: absolute;
                    left: 40px;
                    top: 20px;
            .content-bottom
                overflow: hidden;
                height: 50px;
                .content-bottom-text
                    color:#58595b
                    padding: 5px;
                    color:#58595b;
                

</style>