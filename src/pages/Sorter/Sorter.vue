<template>
  <div id="sorterContainer">
    <div class="header">
      <div class="header_search">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span>搜索商品, 共22243款好物</span>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <ul class="leftList">
          <li class="leftItem" :class="{on:sort === index}" v-for="(item,index) in goods.categoryL1List" @click="handleList(index,item)">{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <img :src="deposit.wapBannerUrl" alt="">
        <ul class="rightList">
          <li class="rightItem" v-for="(item,index) in deposit.subCateList" :key="index">
            <div>
              <img :src="item.bannerUrl" alt="">
              <span>{{item.name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        sort:0,
        deposit:{}
      }
    },
    mounted(){
      this.$store.dispatch('getCategory')
      if(!this.goods.categoryL1List){
        return
      }
      new BScroll('.left',{
        click:true,
        mouseWheel:true,
        scrollbar:{
          fade:true,
          interactive:false
        }
      })
    },
    computed:{
      ...mapState({
        goods:state =>state.category.goods
      })
    },
    methods:{
      handleList(index,item){
        this.sort = index
        this.deposit = item
      }
    },
    watch:{
      goods(e){ //不点击事件，默认一个右边样式，所以绑定监听
        console.log(e);
        //e得到的就是goods最新的数据
        this.deposit = e.categoryL1List[0]

        //给scroll绑定监听
        this.$nextTick(()=>{
          new BScroll('.left',{
            click:true,
            mouseWheel:true,
            scrollbar:{
              fade:true,
              interactive:false
            }
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #sorterContainer
    background-color #ffffff
    height 100%
    .header
      width 100%
      height 88px
      padding 16px 0
      box-sizing border-box
      .header_search
        width 690px
        height 100%
        display flex
        justify-content center
        align-items center
        margin 0 auto
        background-color #ededed
        img
          width 28px
          height 28px
          margin-right 10px
        span
          font-size 28px
    .content
      display flex
      border-top 2px solid #eee
      justify-content space-between
      position relative
      height 100%
      .left
        width 162px
        position absolute
        top 0
        left 0
        bottom 150px
        .leftList
          li
            position relative
            width 162px
            height 50px
            line-height 50px
            text-align center
            margin-top 40px
            font-size 28px
            color #7e8c8d
            &.on
              color #ab2b2b
              &::before
                content ''
                position absolute
                left 0
                top 0
                width 6px
                height 50px
                background-color #ab2b2b


      .right
        width 588px
        box-sizing border-box
        padding 18px 30px 100px
        font-size 28px
        margin-left 162px
        img
          width 100%
          height 192px
        .rightList
          display flex
          flex-wrap wrap
          margin-top 20px
          .rightItem
            width 144px
            height 216px
            margin-right 32px
            div
              img
                width 144px
                height 144px
              span
                display block
                width 144px
                height 72px
                text-align center
                font-size 24px

</style>
