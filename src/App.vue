<template>
  <div id="app">
    <router-view/> <!--显示当前组件-->
    <FooterGuide v-if="!$route.meta.isShow"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    height 100%
    background-color #eee

</style>
