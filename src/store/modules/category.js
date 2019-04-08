/**
 * Created by 李欢欢 on 2019/4/2.
 */

import {reqCategory} from '../../api'
import {RECEIVE_CATEGORY} from '../mutation-type'

const state ={
  //
  goods:{}
}

const mutations = {
  [RECEIVE_CATEGORY](state,goods){
    state.goods = goods
  }
}

const actions = {
  //获取首页信息的异步action
  async getCategory({commit, state}){
    //发送ajax请求
    const result = await reqCategory()
    //根据请求提交mutation
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_CATEGORY,goods)
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
