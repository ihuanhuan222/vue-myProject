/**
 * vuex最核心的模块store
 */

import Vue from 'vue'
import Vuex from 'vuex'

import category from './modules/category'
import categorylist from './modules/categorylist'
import msite from './modules/msite'
import topics from './modules/topics'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    msite,
    category,
    categorylist,
    topics
  }
})
