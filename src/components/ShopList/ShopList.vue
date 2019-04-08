<template>
  <div id="ShopContainer">
    <!--种类-->
    <div class="category" v-for="(item,index) in msites.categoryModule" :key="index">
      <div class="categoryImg">
        <img :src="item.titlePicUrl" alt="">
      </div>
      <div class="shopWrapper" :class="'list'+ index">
        <ul class="shopList" >
          <li class="shopItem" v-for="(example,index) in item.itemList" :key="index">
          <img :src="example.primaryPicUrl" alt="">
          <span>{{example.name}}</span>
          <span class="shopPrice">¥{{example.counterPrice}}</span>
          <span class="shopNew">爆品</span>
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
    mounted(){
      if(!this.msites.categoryModule){
        return
      }
      new BScroll('.shopWrapper',{
        click:true,
        scrollX:true
      })
    },
    computed:{
      ...mapState({
        msites: state => state.msite.msites
      }),
    },
    watch:{
      msites(){
        this.$nextTick(()=>{
          for (let i = 0; i < this.msites.categoryModule.length; i++) {
            new BScroll('.list'+ i,{
              click:true,
              scrollX:true
            })
          }
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #ShopContainer
    .category
      .categoryImg
        img
          width 100%
          height 370px

      .shopWrapper
        width 100%
        display flex
        .shopList
          display flex
          padding 0px 30px 10px
          background-color #ffffff
          .shopItem
            width 200px
            height 361px
            display flex
            flex-wrap nowrap
            flex-direction column
            justify-content center
            margin-right 20px
            img
              width 200px
              height 200px
              background-color #f4f4f4
            .shopPrice
              color red
            .shopNew
              width 66px
              height 33px
              line-height 33px
              border 1px solid red
              color red
              text-align center
              border-radius 14px
              margin-top 10px
</style>
