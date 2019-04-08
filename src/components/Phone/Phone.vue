<template>
  <div id="phone">
    <div class="content">
      <div class="top_logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="loading">
      </div>
      <form>
        <div class="num">
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="code">
          <input type="text" placeholder="请输入手机验证码">
          <div class="getCode">获取验证码</div>
        </div>
        <div class="problem">
          <div>遇到问题?</div>
          <div>使用密码验证登录</div>
        </div>
        <div class="login">
          <span>登录</span>
        </div>
      </form>
      <div class="otherMay" @click="otherWay">
        <span>其他方式登录</span>
      </div>
      <div class="register">注册账号> </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      otherWay:Function
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #phone
    background-color #ffffff
    height 100%
    .content
      .top_logo
        width 100%
        height 133px
        padding-top 50px
        img
          margin 0 auto
          width 192px
          height 64px

      form
        padding 140px 40px 0
        font-size 30px
        .num
          height 91px
          line-height 91px
          border-bottom 1px solid #bdbdbd
          input
            font-size 30px
            outline none
            border none
        .code
          height 91px
          display flex
          justify-content space-between
          align-items center
          border-bottom 1px solid #bdbdbd
          input
            font-size 30px
            outline none
            border none
          .getCode
            padding 10px
            border 1px solid #333333
            border-radius 10px

        .problem
          height 91px
          display flex
          justify-content space-between
          align-items center
        .login
          height 96px
          line-height 96px
          text-align center
          background-color #b4282d
          color #ffffff
      .otherMay
        padding 0px 40px
        box-sizing border-box
        width 677px
        height 94px
        line-height 94px
        text-align center
        font-size 30px
        color #b4282d
        margin-top 30px
        margin-left 34px
        border 1px solid #b4282d
      .register
        margin-top 30px
        font-size 30px
        text-align center

</style>
