<template>
  <div id="shop">
    <div class="shopHeader">
      <div class="title">
        <span>购物车</span>
      </div>
      <div class="ticket">
        <span>领劵</span>
      </div>
    </div>
    <div class="shopBox">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <p>去添加点什么吧</p>
      <button @click="$router.push('/profile')">登录</button>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shop
    height 100%
    .shopHeader
      width 100%
      height 88px
      box-sizing border-box
      background-color #ffffff
      display flex
      padding 0 20px
      justify-content space-between
      align-items center
      span
        font-size 36px
      .ticket
        span
          color red
    .shopBox
      margin-top 400px
      display flex
      flex-direction column
      align-items center
      img
        width 248px
        height 248px
      p
        font-size 28px
        color #999
        margin-bottom 30px
      button
        width 480px
        height 92px
        font-size 30px
        color #ffffff
        background-color #b4282d
        border 0
        outline none

</style>
