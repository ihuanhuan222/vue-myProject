/**
 * Created by 李欢欢 on 2019/4/2.
 */

import {reqCategoryList} from '../../api'
import {RECEIVE_CATEGORYLIST} from '../mutation-type'

const state ={
  //首页信息
  list:{}
}

const mutations = {
  [RECEIVE_CATEGORYLIST](state,list){
    state.list = list
  }
}

const actions = {
  //获取首页信息的异步action
  async getCategoryList({commit, state}){
    //发送ajax请求
    const result = await reqCategoryList()
    //根据请求提交mutation
    if(result.code === 0){
      const list = result.data
      commit(RECEIVE_CATEGORYLIST,list)
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
