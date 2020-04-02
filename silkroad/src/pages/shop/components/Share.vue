<template>
    <div class="share"> 
        <div class="share-title">
            <span class="title-left">731人在拼单，可直接参与</span>
            <span class="title-right iconfont">查看更多&#xe64c;</span>
        </div>
        <div class="share-content">
            <img class="share-img" src="/static/images/share.png" />
        </div>
    </div>
</template>

<script>
export default {
    name:"ShopShare"
}
</script>

<style lang="stylus" scoped>
    .share
        width:100%;
        height:0;
        padding-bottom: 40%;
        position:relative;
        // z-index: ;
        .share-title
            width:100%;
            height: 38px;
            .title-left
                line-height: 38px;
                text-align: center;
                margin-left: 10px;
                color:#151516;
            .title-right
                line-height: 38px;
                text-align: center;
                margin-right: 5px;
                float:right;
                color: #9c9c9c;
        .share-content
            height:110px;
            width:100%;
            background-color: yellow;
            .share-img
                width:100%;
                height: 110px;
</style>