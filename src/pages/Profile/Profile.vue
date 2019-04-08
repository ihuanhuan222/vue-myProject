<template>
  <div id="profile">
    <div class="header">
      <div class="header_left" @click="$router.push('/msite')">
        <i class="iconfont icon-home"></i>
      </div>
      <div class="header_middle">
        <span class="select">网易严选</span>
      </div>
      <div class="header_right">
        <i class="iconfont icon-icon--"></i>
        <i class="iconfont icon-shiwu-shu"></i>
      </div>
    </div>
    <div v-if="!showPhone&&!showMail">
      <div class="content" >
        <div class="loginMethod">
          <div class="loginLogo">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="method">
            <div class="phone-method" @click="showPhone = !showPhone">
              <i class="iconfont icon-shiwu-shu"></i>
              <span>手机号码登录</span>
            </div>
            <div class="mail-method" @click="showMail = !showMail">
              <i class="iconfont icon-shiwu-shu"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
          <div class="more">手机号快捷注册></div>
        </div>
      </div>
      <div class="qqWx">
        <div class="wx">
          <i class="iconfont icon-icon--"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-icon--"></i>
          <span>QQ</span>
        </div>
        <div class="wb">
          <i class="iconfont icon-icon--"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <Phone v-if="showPhone" :otherWay="otherWay"></Phone>
    <Mail v-if="showMail" :otherWay="otherWay"></Mail>
  </div>
</template>
<script>
  import Phone from '../../components/Phone/Phone.vue'
  import Mail from '../../components/Mail/Mail.vue'
  export default {
    data(){
      return{
        showPhone: false,
        showMail: false
      }
    },
    methods:{
      otherWay(){
        this.showPhone = false
        this.showMail = false
      }
    },
    components:{
      Phone,
      Mail
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #profile
    height 100%
    .header
      width 100%
      height 88px
      background-color #fafafa
      padding 0 30px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      font-size 42px
      .iconfont
        font-size 51px
      .header_middle
        font-weight bold
      .header_right
        .icon-icon--
          margin-right 16px
    .content
      .loginMethod
        display flex
        flex-direction column
        .loginLogo
          height 423px
          display flex
          align-items center
          justify-content center
          img
            width 268px
            height 90px
        .method
          padding 0 30px
          box-sizing border-box
          width 100%
          color #b4282d
          margin-top 32px
          text-align center
          height 96px
          line-height 96px
          font-size 28px
          i
            font-size 30px
          .phone-method
            height 96px
            color #ffffff
            border 1px solid #b4282d
            background-color #b4282d
          .mail-method
            margin-top 32px
            height 96px
            border 1px solid #b4282d
        .more
          margin-top 180px
          font-size 28px
          text-align center

    .qqWx
      position absolute
      left 0
      bottom 100px
      width 100%
      display flex
      justify-content space-around
      align-items center
      font-size 30px
      color #7f7f7f

</style>
