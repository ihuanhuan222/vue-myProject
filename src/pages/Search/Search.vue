<template>
  <div id="search_box">
    <div class="search">
      <div class="text">
        <i class="iconfont icon-icon--"></i>
        <input type="text" placeholder="奢享贡缎四件套 仅375元" v-model="userConent">
      </div>
      <div class="cancel" @click="$router.back()">
        <span>取消</span>
      </div>
    </div>
    <div class="user_search">
      <ul>
        <li v-for="(item,index) in good">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="nav-header">
        <h3>热门搜索</h3>
      </div>
      <div class="nav-content">
        <ul>
          <li>
            <a href="javascript:;">买10得60 回馈金</a>
          </li>
          <li>
            <a href="javascript:;">买10得60 回馈金</a>
          </li>
          <li>
            <a href="javascript:;">乳胶凉感席</a>
          </li>
          <li>
            <a href="javascript:;">无线吸尘器直降320</a>
          </li>
          <li>
            <a href="javascript:;">买10得60 回馈金</a>
          </li>
          <li>
            <a href="javascript:;">买10得60 回馈金</a>
          </li>
          <li>
            <a href="javascript:;">买10得60 回馈金</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {reqGoods} from '../../api'
  export default {
    data(){
      return{
        userConent:'',//用户输入的内容
        good:''
      }
    },

    watch:{
      async userConent(user){
       const result = await reqGoods(user)
        if(result.code ==='200'){
          this.good = result.data
          console.log(result);
        }

      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search_box
    background-color #ffffff
    .search
      display flex
      justify-content space-between
      align-items center
      height 87px
      padding 0px 30px
      font-size 28px
      .text
        height 56px
        line-height 56px
        background-color #f4f4f4
        .iconfont
          font-size 40px
          vertical-align middle
          margin 0 10px
        input
          width 520px
          height 40px
          border 0
          font-size 28px
          vertical-align middle
          background-color #f4f4f4

    .user_search
      position relative
      ul
        position absolute
        top 5px
        left 0px
        width 100%
        padding-left 10px
        background-color #ffffff
        li
          height 90px
          line-height 90px
          font-size 30px
          border-bottom 1px solid #eee
    .nav
      padding 0 30px
      .nav-header
        width 690px
        height 90px
        line-height 90px
        h3
          color #999
          font-weight 400
      .nav-content
        ul
          display flex
          flex-wrap wrap
          li
            height 48px
            margin-right 30px
            margin-bottom 30px
            a
              padding 4px 10px
              border 1px solid #999

</style>
