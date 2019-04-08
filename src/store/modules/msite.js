/**
 * 首页模块
 */

import {reqMsiteInfo} from '../../api'
import {RECEIVE_MSITEINFO} from '../mutation-type'

const state ={
  //首页信息
  msites:{}
}

const mutations = {
  [RECEIVE_MSITEINFO](state,msites){
    state.msites = msites
  }
}

const actions = {
  //获取首页信息的异步action
  async getMsite({commit, state}){
    //发送ajax请求
    const result = await reqMsiteInfo()
    //根据请求提交mutation
    console.log(result)
    if(result.code === 0){
      const msites = result.data
      commit(RECEIVE_MSITEINFO,msites)
    }
  }

}

const getters ={

}

export default {
  state,
  mutations,
  actions,
  getters
}
