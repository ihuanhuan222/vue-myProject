<template>
  <div class="suggest-wrap">
    <div class="suggest-content">
      <div v-for="(item,index) in adverts" :key="index">
        <div v-for="(topic,index) in item.topics" :key="index">
          <div class="suggest-type2" v-if="topic.type=== 2 || topic.type=== 1">
            <a class="item-2" href="javascript:;">
              <div class="left">
                <div class="item-staff">
                  <span><img :src="topic.avatar" alt=""></span>
                  <span>{{topic.nickname}}</span>
                </div>
                <p>{{topic.subTitle}}</p>
                <p>{{topic.title}}</p>
                <div class="item-look">
                  <i class="iconfont icon-chakan"></i>
                  <span>{{topic.readCount}}人看过</span>
                </div>

              </div>
              <div class="right">
                <img :src="topic.picUrl" alt="">
              </div>
            </a>
          </div>
          <div class="suggest-type0" v-if="topic.type === 0">
            <a href="javascript:;">
              <div class="item-0">
                <span><img :src="topic.avatar" alt=""></span>
                <span>{{topic.nickname}}</span>
              </div>
              <div class="item-title">{{topic.title}}</div>
              <div class="item-img"><img :src="topic.picUrl" alt=""></div>
              <div class="item-look">
                <i class="iconfont icon-chakan"></i>
                <span>{{topic.readCount}}人看过</span>
              </div>

            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState({
        adverts: state => state.topics.adverts
      })
    },
    watch:{
      adverts(e){
        console.log(e);
        this.$nextTick(()=>{
          new BScroll('.suggest-wrap',{
            click:true,
            scrollY:true
          })
        })
      }
    },
    mounted(){
      if(this.adverts.length === 0){
        return

      }
      new BScroll('.suggest-wrap',{
        click:true,
        scrollY:true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .suggest-wrap
    position absolute
    left 0
    top 0
    bottom 100px
    width 100%
    .suggest-content
      width 100%
      padding-top 190px
      .suggest-type2
        background-color white
        padding 40px
        width 100%
        margin-bottom 20px
        box-sizing border-box
        .item-2
          display flex
          .left
            width 60%
            .item-staff
              display flex
              font-size 28px
              color #000
              span
                vertical-align middle
                line-height 54px
                img
                  width 54px
                  height 54px
                  border-radius 50%
                  margin-right 10px
                  vertical-align middle


            p
              &:nth-of-type(1)
                line-height 45px
                font-size 35px
                color #000
                padding-top 40px
              &:nth-of-type(2)
                padding-top 15px
                font-size 25px
            .item-look
              padding-top 40px
              i
                font-size 20px
          .right
            width 40%
            img
              width 100%
              height 100%
      .suggest-type0
        padding 40px
        background-color white
        margin-bottom 20px
        width 100%
        box-sizing border-box
        .item-0
          display flex
          span
            vertical-align middle
            line-height 54px
            margin-right 20px
            img
              width 54px
              height 54px
              vertical-align middle
              border-radius 50%

        .item-title
          padding-top 20px
          font-size 30px
          line-height 35px
        .item-img
          img
            padding-top 20px
            width 100%
            border-radius 5px

        .item-look
          padding-top 20px
</style>
