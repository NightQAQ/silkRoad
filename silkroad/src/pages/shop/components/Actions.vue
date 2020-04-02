<template>
    <div class="goods-action" > 
        <van-goods-action>
            <van-goods-action-icon icon="shop-o" text="店铺"  />
            <van-goods-action-icon icon="star" text="收藏" @click="onClickIcon" />
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-button color="#FA8072" type="warning" text="单独购买¥12.88" />
            <div >
            <van-goods-action-button 
                replace:ture color="#B22222" 
                type="danger" text="¥6.88发起拼单" 
                @click="popping"
                                    />
            </div>
        </van-goods-action>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:"ShopActions",
    data () {
        return {
            list:true,
            show:false
        }
    },
    methods: {
        onClickIcon () {
            Toast('收藏成功')
        },popping () {
                this.$root.eventBus.$emit("change",this.list)
        },showPopup (){
            this.show = true;
        }
    
        
    }
}
</script>
<style lang="stylus" scoped>
.goods-action
    position: relative;
    z-index: 100;
    .wrapper
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        
    .block 
        width: 120px;
        height: 120px;
        background-color: #fff;

</style>