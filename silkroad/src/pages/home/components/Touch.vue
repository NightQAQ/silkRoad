<template>
<!-- Renders a div element by default -->
<v-touch v-on:swipeleft="onSwipeLeft" >
    <div class="touch-box">
        <span class="nav" >热门</span>
        <span class="nav" >水果</span>
        <span class="nav" >食品</span>
        <span class="nav" >手机</span>
        <span class="nav" >运动</span>
        <span class="nav" >百货</span>
        <span class="nav" >海淘</span>
        <span class="nav" >内衣</span>
        <span class="nav" >鞋包</span>
        <!-- <span class="nav" >百货</span> -->
    </div>
</v-touch>

<!-- Render as other elements with the 'tag' prop -->
<!-- <v-touch tag="a" v-on:tap="onTap">Tap me!</v-touch> -->

</template>



<script>
    export default {
        name:'HomeTouch',
        methods: {
            onSwipeLeft: function() {
                console.log("左划")
            }
        }
    }
</script>



<style lang="stylus" scoped>
    .touch-box
        line-height: 30px;
        margin-top:5px;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        .nav
            padding-left: 5.5px;
            font-weight: 700;
</style>