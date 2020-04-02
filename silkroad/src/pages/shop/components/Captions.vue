<template>
    <div class="content" >
        <section class="content-title">
            <div class="content-title-one">
                <span class="title-one-left">¥6.88</span>
                <span class="title-one-mid">再售14372件后恢复¥8.9起</span>
                <span class="title-one-right">已拼10万+件</span>
            </div>
            <div class="content-title-two">
                <span class="title-two-big">老北京布鞋男士单鞋牛筋底布鞋透气防滑软底黑布鞋休闲鞋工作鞋</span>
                <span class="title-two-small">退货包运费</span>
            </div>
        </section>
        
        <div class="desc">
            <span class="desc-title">退货包邮费</span>
            <span class="desc-title">极速退款</span>
            <span class="desc-title">全场包邮</span>
            <span class="desc-title">七天无理由退货</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"ShopCaptions"
}
</script>
<style lang="stylus" scoped>
    .content
        overflow: hidden;
        .content-title
            position: relative;
            width: 100%;
            margin-bottom: 5px;
            .content-title-one
                height: 52px;
                padding: 10px;
                overflow: hidden;
                display: flex;
                align-items :center;
                .title-one-left
                    line-height: 52px;
                    text-align: center;
                    font-weight: 700;
                    color: red;
                    font-size: 25px;
                    padding-left: 5px;
                    letter-spacing:2px;
                .title-one-mid
                    line-height: 20px;
                    text-align: center;
                    background-color:#fee74f;
                    font-size:12px;
                    margin-left: 8px;
                    padding-left: 5px;
                    padding-right: 2px;
                    color: #000;
                    border-radius:5px;
                    letter-spacing:.6px;
                .title-one-right
                    margin-left: 15px;
                    color:#58595b;
            .content-title-two
                height: 40px;
                padding: 10px;
                overflow: hidden;
                margin-top: -15px;
                border-top: 1px solid #DCDCDC;
                .title-two-big
                    font-size: 15px;
                    font-weight: 700;
                    margin-left: 10px;
                    user-select: text;
                    letter-spacing: .6px;
                    line-height: 20px;
                .title-two-small
                    color:white;
                    background-color:#25b513;
        .desc
            height:32px;
            padding: 5px;
            display: flex;
            align-items: center;
            border-top: 1px solid #DCDCDC;
            .desc-title
                margin-left: 10px;
</style>