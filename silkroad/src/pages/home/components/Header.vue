<template>
  <div class="header"> 
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <span class="input-text">鞋子9.9包邮</span>
      <span class="iconfont input-right">&#xe634;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    background: $bgColor;
    height: 43px;
    display: flex;
    .header-input
      width: 340px;
      height: 30px;
      background-color:#fff;
      margin: auto;
      border-radius: 5px;
      line-height: 30px;
      color: #ccc;
      .iconfont
        padding-left: 90px;
      .input-right
        font-size: 22px;
      .input-text
        padding-left:5px;
        letter-spacing: 2px;
      


</style>