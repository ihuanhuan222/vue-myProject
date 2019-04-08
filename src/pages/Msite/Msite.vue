<template>
  <section id="msite">
    <!--首页头部-->
    <header class="header_box">
      <div class="header_search">
        <img class="logo" src="./images/indexLogo-a90bdaae6b.png" alt="logo">
        <div class="search" @click="$router.push('/search')">
          <img src="./images/search2-553dba3aff.png" alt="">
          <span>搜索商品，共21726件好物</span>
        </div>
        <span class="loginBtn">登录</span>
      </div>
      <div class="header_nav">
        <div class="nav_left">
          <ul class="leftList clearFix">
            <li class="leftItem active">
              <a href="javascript:;">推荐</a>
            </li>
            <li class="leftItem">
              <a href="javascript:;">居家生活</a>
            </li>
            <li class="leftItem">
              <a href="javascript:;">服饰鞋包</a>
            </li>
            <li class="leftItem">
              <a href="javascript:;">美食酒水</a>
            </li>
            <li class="leftItem">
              <a href="javascript:;">居家生活</a>
            </li>
            <li class="leftItem">
              <a href="javascript:;">服饰鞋包</a>
            </li>
            <li class="leftItem">
              <a href="javascript:;">美食酒水</a>
            </li>
          </ul>
        </div>
        <div class="nav_right">
          <span></span>
          <div class="rightMenu" @click="handleMenu">
            <img src="./images/arrow-down-3-799ded53ea.png" alt="">
          </div>
        </div>
        <div class="all-nav" v-if="menus">
          <p>全部频道</p>
          <ul>
            <li>
              <span>推荐</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="msiteContent">
      <div class="contentContainer">
        <!--首页轮播-->
        <div class="msiteNav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in product" :key="index">
                <img :src="item.picUrl" alt="">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination swiper-pagination-customs"></div>
          </div>
        </div>
        <!--服务安全-->
        <div class="servicePolicy">
          <div v-for="(item,index) in msites.policyDescList" :key="index">
            <i :class="item.icon"></i>
            <span>{{item.desc}}</span>
          </div>
        </div>
        <!--用户导航-->
        <div class="userNav">
          <ul class="userNav_list" v-if="msites.kingKongModule">
            <li class="userNav_item" v-for="(item,index) in msites.kingKongModule.kingKongList" :key="index">
              <a href="javascript:;">
                <img :src="item.picUrl" alt="">
                <p>{{item.text}}</p>
              </a>
            </li>
          </ul>
        </div>
        <!--新人专享礼-->
        <div class="person-VIP">
          <div class="title">
            <span class="active">新人专享礼</span>
          </div>
          <div class="content">
            <div class="content_left">
              <p>新人专享礼包</p>
              <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
              <div class="arrows"> >> </div>
            </div>
            <div class="content_right">
              <div class="weal" v-for="(item,index) in msites.indexActivityModule" :key="index">
                <div class="weal_text">
                  <p class="text_fu">{{item.title}}</p>
                  <p class="text_day">{{item.subTitle}}</p>
                </div>
                <div class="weal_pic">
                  <img :src="item.picUrl" alt="">
                  <div class="pic_icon">
                    <p>{{item.activityPrice}}</p>
                    <p>{{item.originPrice}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--品牌制造商-->
        <div class="brand">
          <div class="brand_title">
            <div class="left">
              <span>品牌制造商直供</span>
            </div>
            <div class="right">
              <span>更多> </span>
            </div>
          </div>
          <div class="brand_content">
            <ul>
              <li :style="{backgroundImage:`url(${item.picUrl})`}" v-for="(item,index) in msites.tagList" :key="index">
                <p>{{item.name}}</p>
                <div class="price">
                  <span>{{item.floorPrice}}元起</span>
                  <span class="upNew">上新</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--热销榜-->
        <div class="sell">
          <div class="sell_title">
            <div class="left">
              <span>类目热销榜</span>
            </div>
          </div>
          <div class="sell_content">
            <ul class="sell_top" v-if="msites.hotBot">
              <li v-for="(item,index) in msites.hotBot.hots" :key="index">
                <p>{{item.name}}</p>
                <div>
                  <img :src="item.image" alt="">
                </div>
              </li>
            </ul>
            <ul class="sell_bottom" v-if="msites.hotBot">
              <li v-for="(item,index) in msites.hotBot.commoditys" :key="index">
                <span>{{item.name}}</span>
                <img :src="item.image" alt="">
              </li>
            </ul>
          </div>
        </div>
        <!--限时购买-->
        <div class="timeToBuy">
          <div class="timeHeader">
            <div class="buyInfo">
              <span>限时购</span>
              <div class="buyTime">
                <span>03</span>
                <span>:</span>
                <span>04</span>
                <span>:</span>
                <span>05</span>
              </div>
            </div>
            <span class="buyMore">更多> </span>
          </div>
          <div class="buyGoods">
            <ul v-if="msites.flashSaleModule">
              <li v-for="(item,index) in msites.flashSaleModule.itemList" :key="index">
                <img :src="item.picUrl" alt="">
                <div>
                  <span>¥{{item.activityPrice}}</span>
                  <span class="small">¥{{item.originPrice}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--shop种类-->
        <ShopList/>
        <!--底部导航-->
        <div class="bottomFooter">
          <div class="content">
            <div class="top">
              <span class="btn">下载APP</span>
              <span class="btn">电脑版</span>
            </div>
            <p class="copyright">
              <span>网易公司版权所有 © 1997-2020</span>
              <br>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import ShopList from '../../components/ShopList/ShopList.vue'
  export default {
    data(){
      return{
        product:[], //获取首页数据
        menus:false
      }
    },

    computed:{
      ...mapState({ //第一次渲染的时候没数据，得监听，在显示页面之后，获取到数据
        msites: state=> state.msite.msites
      })
    },
    mounted() {

      new BScroll('.msiteContent',{
        click:true,
        mouseWheel:true,
        scrollbar:{
          fade:true,
          interactive:false
        }
      })
      new BScroll('.nav_left',{
        click:true,
        scrollX:true
      })
      //更新到数据
      this.$store.dispatch('getMsite')

    },
    methods: {
      _initSwiper() {
        var mySwiper = new Swiper(".swiper-container", {
          direction: "horizontal",
          loop: true,
          autoplay: true, //自动轮播
          speed: 1000,
          pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function(swiper, current, total) {
              var customPaginationHtml = "";
              for (var i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i == current - 1) {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs"></span>';
                }
              }
              return '<span class="swiperPag">'+customPaginationHtml+'</span>';
            }
          }
        });
      },

      //点击按钮，出现下拉菜单
      handleMenu(){
        this.menus = !this.menus
      }
    },

    components:{
      ShopList
    },

    watch:{
      msites(data){
        this.$nextTick(()=>{
          this._initSwiper();
        })
        console.log(data)
        if(data.focusList){
          this.product = data.focusList
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  #msite
    position relative
    width 100%
    height 100%
    .header_box
      width 100%
      position fixed
      top 0
      left 0
      z-index 2
      background-color #ffffff
      .header_search
        display flex
        align-items center
        padding 10px 15px
        .logo
          width 138px
          height 40px
          margin-right 10px
        .search
          height 56px
          display flex
          align-items center
          background-color #ededed
          font-size 28px
          color #666
          padding 0 50px
          border-radius 4px
          img
            width 28px
            height 28px
            margin-right 10px
        .loginBtn
          width 74px
          height 40px
          line-height 40px
          color #b4282d
          font-size 24px
          text-align center
          border 1px solid #b4282d
          border-radius 4px
          margin-left 15px
      .header_nav
        position relative
        width 100%
        height 60px
        margin-top 2px
        .nav_left
          width 100%
          display flex
          .leftList
            display flex
            padding-right 150px
            .leftItem
              flex 1
              text-align center
              width 150px
              font-size 28px
              line-height 60px
              padding 0 10px
              position relative
              &.active
                &::after
                  content ''
                  display block
                  width 90px
                  height 6px
                  background-color #b4282d
                  position absolute
                  left 50%
                  margin-left -45px
        .nav_right
          position absolute
          right 0
          top 2px
          .rightMenu
            text-align center
            line-height 60px
            width 100px
            height 60px
            background-color #ffffff
            img
              display inline-block
              width 28px
              height 28px
        .all-nav
          width 100%
          background-color #ffffff
          p
            height 60px
            font-size 28px
            padding-left 30px
          ul
            display flex
            justify-content space-between
            flex-wrap wrap
            padding-left 15px
            li
              width 150px
              height 56px
              line-height 56px
              margin 10px
              font-size 28px
              color #333
              border 2px solid #d9d9d9
              border-radius 10px
              background-color #fafafa
              text-align center
              span
                color #333
                font-size 28px
    .msiteContent
      position absolute
      top 0
      bottom 100px
      width 750px
      .contentContainer
        padding-top 140px
        .msiteNav
          width 100%
          height 370px
          .swiper-container
            width 100%
            height 370px
            .swiper-wrapper
              .swiper-slide
                img
                  width 100%
                  height 100%
            .swiper-pagination
              width 100%
              height 50px
              .swiper-pagination-customs
                display inline-block
                width 40px
                height 2px
                margin 0 5px
                background-color rgba(255,255,255,.5)
              .swiper-pagination-customs-active
                width 40px
                height 2px
                display: inline-block
                background-color: red


        .servicePolicy
          width 100%
          height 72px
          display flex
          align-items center
          text-align center
          background-color #ffffff
          div
            flex 1
            color #b4282d
            padding  10px
            .iconfont
              font-size 37.5px
              vertical-align middle
            span
              font-size 24px
              vertical-align middle


        .userNav
          width 100%
          margin-bottom 20px
          .userNav_list
            display flex
            flex-wrap: wrap
            .userNav_item
              width 110px
              height 156px
              margin 10px 20px 0
              a
                width 100%
                height 100%
                display flex
                flex-direction column
                align-items center
                img
                  width 110px
                  height 110px
                p
                  font-size 24px
                  color #333

        .person-VIP
          width 100%
          background-color #ffffff
          padding-bottom 30px
          .title
            width 100%
            height 90px
            position relative
            span
              display block
              line-height 90px
              font-size 30px
              text-align center
              &.active
                &::before
                  content ''
                  display block
                  width 30px
                  height 3px
                  background-color #000000
                  position absolute
                  top 50%
                  left 50%
                  margin-left -120px
                  margin-top -3px
                &::after
                  content ''
                  display block
                  width 30px
                  height 3px
                  background-color #000000
                  position absolute
                  top 50%
                  left 50%
                  margin-left 90px
                  margin-top -3px

          .content
            width 100%
            height 438px
            padding-left 30px
            display flex
            .content_left
              width 343px
              height 434px
              background-color palegoldenrod
              position relative
              margin-right 4px
              p
                font-size 30px
                text-align center
                padding 30px 10px
                margin-left -80px
              img
                width 258px
                height 258px
                margin 0 auto
              .arrows
                position absolute
                bottom 80px
                right 100px
                width 30px
                height 40px
            .content_right
              width 343px
              height 438px
              .weal_pic
                img
                  width 180px
                  height 180px
              .weal
                width 100%
                height 49%
                background-color papayawhip
                display flex
                justify-content space-around
                margin-bottom 7px
                .weal_text
                  margin-left 24px
                  margin-top 20px
                  .money
                    background-color #2222
                    color #ffffff
                    border-radius 2px
                    padding 0 4px
                  .text_fu
                    font-size 30px
                    margin-bottom 5px
                  .text_day
                    font-size 24px
                  .money
                    white-space nowrap
                .weal_pic
                  position relative
                  padding-top 10px
                  text-align center
                  color #ffffff
                  .pic_icon
                    padding-top 10px
                    box-sizing border-box
                    width 80px
                    height 80px
                    background-color orange
                    border-radius 50%
                    position absolute
                    top 10px
                    right 20px
                    opacity .6



        .brand
          margin-top 14px
          padding 0 20px
          background-color #ffffff
          .brand_title
            width 100%
            height 100px
            background-color #ffffff
            font-size 30px
            display flex
            justify-content space-between
            align-items center
          .brand_content
            ul
              display flex
              flex-wrap wrap
              li
                width 350px
                height 260px
                background-size 100% 100%
                text-align center
                background-color whitesmoke
                display flex
                flex-direction column
                margin-bottom 10px
                &:nth-child(2n+1)
                  margin-right 10px
                p
                  font-size 28px
                  margin-top 20px
                .price
                  width 100%
                  height 17px
                  font-size 24px
                  .upNew
                    background-color #cbb693
                    color #ffffff
                    padding 0px 10px
                    border-radius 4px

        .sell
          margin-top 14px
          padding 0 20px 10px
          background-color #ffffff
          .sell_title
            width 100%
            height 100px
            background-color #ffffff
            font-size 30px
            display flex
            justify-content space-between
            align-items center

          .sell_content
            .sell_top
              display flex
              li
                width 340px
                height 200px
                display flex
                align-items center
                justify-content center
                background-color pink
                margin-bottom 10px
                &:first-child
                  margin-right 15px
                  background-color #F9F3E4
                &:nth-child(2n)
                  margin-left 10px
                  background-color #EBEFF6
                p
                  font-size 30px
                  margin-left 20px
                div
                  margin-left 20px
                  img
                    width 200px
                    height 200px


            .sell_bottom
              display flex
              flex-wrap wrap
              li
                width 165px
                height 180px
                background-color #F5F5F5
                display flex
                flex-direction column
                align-items center
                justify-content center
                margin 0px 12px 12px 0px
                img
                  width 120px
                  height 120px

        .timeToBuy
          padding 0 20px
          background-color #ffffff
          .timeHeader
            height 100px
            font-size 30px
            background-color #ffffff
            display flex
            align-items center
            justify-content space-between
            .buyInfo
              height 100px
              line-height 100px
              display flex
              align-items center
              .buyTime
                margin-left 20px
                span
                  font-size 26px
                  color #ffffff
                  &:nth-child(2n)
                    color #000000
                  &:nth-child(2n+1)
                    width 40px
                    height 40px
                    background-color #000000
                    padding 4px
                    border-radius 4px


          .buyGoods
            ul
              display flex
              flex-wrap wrap
              justify-content space-between
              li
                width 216px
                padding-bottom 30px
                img
                  width 216px
                  height 216px
                  background-color #F5F5F5
                div
                  text-align center
                  margin 10px 0px 0px 20px
                  background-color #ffffff
                  span
                    font-size 28px
                    color red
                  .small
                    font-size 24px
                    color gray
                    margin-left 8px
        .bottomFooter
          position relative
          width 100%
          height 245px
          background-color #414141
          opacity .7px
          font-size 26px
          .content
            position absolute
            left 50%
            top 25%
            margin-left -200px
            display flex
            flex-direction column
            align-items center
            .top
              width 100%
              height 60px
              line-height 60px
              text-align center
              color #ffffff
              display flex
              justify-content space-between
              span
                width 172px
                height 60px
                border 1px solid #999
            .copyright
              margin-top 10px
              text-align center
              color #999

</style>
