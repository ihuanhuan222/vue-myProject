/**
 * Created by 李欢欢 on 2019/3/30.
 */
import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import './mock'

new Vue({
  el:'#app',
  components:{
    App,
  },
  template:'<App/>',
  router,//配置路由器
  store
})
