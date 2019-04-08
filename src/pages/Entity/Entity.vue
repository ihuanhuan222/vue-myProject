<template>
  <div>
    <div id="entityContainer">
      <div class="entity_header">
        <div class="top_left">
          <i class="iconfont icon-home"></i>
        </div>
        <div class="text">
          <span class="found">发现</span>
          <span class="select">甄选家</span>
        </div>
        <div class="top_right">
          <i class="iconfont icon-icon-- iconShop"></i>
          <i class="iconfont icon-shiwu-shu"></i>
        </div>
      </div>
      <div class="entity_nav">
        <ul>
          <li class="on">推荐</li>
          <li>周年庆</li>
          <li>推荐</li>
          <li>周年庆</li>
          <li>周年庆</li>
          <li>周年庆</li>
          <li>推荐</li>
          <li>周年庆</li>
          <li>周年庆</li>
          <li>推荐</li>
          <li>周年庆</li>
        </ul>
      </div>
    </div>
    <Topics/>

  </div>

</template>
<script>
  import Topics from '../Topics/Topics.vue'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.entity_nav',{
        click:true,
        scrollX:true
      })
      //请求发送成功没有，有没有数据
       this.$store.dispatch('getTopicsAdverts')

    },
    components:{
      Topics
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #entityContainer
    position relative
    z-index 2
    background-color #ffffff
    .entity_header
      width 100%
      height 100px
      border-bottom 2px solid #d9d9d9
      box-sizing border-box
      padding 0 20px
      font-size 32px
      display flex
      justify-content space-between
      align-items center
      .iconfont
        font-size 56px
      .text
        .found
          font-size 38px
          font-weight bold
          color #b4282d
        .select
          margin-left 20px
          color #7F7F7F
      .top_right
        .iconShop
          margin-right 20px


    .entity_nav
      width 100%
      height 72px
      border-bottom 2px solid #d9d9d9
      display flex
      ul
        display flex
        justify-content space-between
        li
          height 72px
          line-height 72px
          padding 0 10px
          margin 0 20px
          font-size 28px
          color #7F7F7F
          white-space nowrap
          &.on
            color #B4282D
            border-bottom 4px solid #B4282D
    .entity_events
      background-color #ffffff
      ul
        li
            /*white-space nowrap*/
            .event_one
              display flex
              .events_left
                width 445px
                height 278px
                display flex
                flex-direction column
                justify-content center
                margin-left 30px
                .staff
                  width 100%
                  display flex
                  font-size 28px
                  margin-bottom 20px
                  img
                    width 40px
                    height 40px
                    border-radius 50%
                    margin-right 20px
                .work
                  font-size 36px
                  color #333
                  margin-bottom 15px
                .sale
                  font-size 28px
                  color #7f7f7f
                  margin-bottom 20px
                .seen
                  font-size 24px
                  color #999

              img
                width 278px
                height 278px
                margin-right 20px

            .split_box
              height 20px
              margin 20px 0
              background-color #f4f4f4
          li
            background-color #ffffff
            .event_two
              margin-top 30px
              margin-left 30px
              .events_wang
                display flex
                flex-direction column
                img
                  width 700px
                  height 388px
                  margin-bottom 15px
                .staff_wang
                  display flex
                  font-size 28px
                  img
                    width 40px
                    height 40px
                    border-radius 50%
                .work_wang
                  font-size 36px
                .seen_wang
                  font-size 28px


            .split_box
              height 20px
              margin 20px 0
              background-color #f4f4f4
</style>
