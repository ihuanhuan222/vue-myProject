<template>
  <footer id="footer_guide">
    <ul class="footer_list">
      <li class="footer_item" @click="goto('/msite')" :class="{on: $route.path ==='/msite'}">
        <span class="item_icon">
          <i class="iconfont icon-home"></i>
        </span>
        <span class="text">首页</span>
      </li>
      <li class="footer_item" @click="goto('/sorter')" :class="{on: $route.path ==='/sorter'}">
        <span class="item_icon">
          <i class="iconfont icon-iconyihuifu-"></i>
        </span>
        <span class="text">分类</span>
      </li>
      <li class="footer_item" @click="goto('/entity')" :class="{on: $route.path ==='/entity'}">
        <span class="item_icon">
          <i class="iconfont icon-shiwu-shu"></i>
        </span>
        <span class="text">识物</span>
      </li>
      <li class="footer_item" @click="goto('/shop')" :class="{on: $route.path ==='/shop'}">
        <span class="item_icon">
          <i class="iconfont icon-icon--"></i>
        </span>
        <span class="text">购物车</span>
      </li>
      <li class="footer_item" @click="goto('/profile')" :class="{on: $route.path ==='/profile'}">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span class="text">个人</span>
      </li>
    </ul>
  </footer>
</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #footer_guide
    top-border-1px(#eee)
    position fixed
    bottom 0
    left 0
    width 100%
    background-color #ffffff
    .footer_list
      width 100%
      display flex
      .footer_item
        display flex
        flex 1
        flex-direction column
        align-items center
        padding 10px
        &.on
          color #b4282d
        .item_icon
          i
            font-size 40px
        .text
          font-size 24px





</style>
