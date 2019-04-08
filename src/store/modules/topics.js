/**
 * Created by 李欢欢 on 2019/4/4.
 */

import {reqEntity} from '../../api'

import {RECEIVE_ENTITY} from '../mutation-type'

const state ={
  adverts:[] //广告数据
}

const mutations ={
  [RECEIVE_ENTITY](state,adverts){
    state.adverts = adverts
  }
}

const actions = {
  //获取广告数据的异步action
  async getTopicsAdverts({commit}){
    //发送ajax请求
    const result = await reqEntity()
    console.log(result)
    if(result.code === '200'){
      const adverts = result.data
      console.log(adverts);
      commit(RECEIVE_ENTITY,adverts)
    }
  }
}

const getters = {

}

export default  {
  state,
  mutations,
  actions,
  getters
}
