/**
 * 根据接口编写接口请求函数
 */
import ajax from './ajax'
//获取首页信息

const api = '/api'

export const reqMsiteInfo = () => ajax('/msite')

export const reqCategoryList = () => ajax('/categorylist')

export const reqCategory = () => ajax('/category')
//获取搜索信息 -- 跨域问题 -
export const  reqGoods = keywordPrefix => ajax(api + '/xhr/search/searchAutoComplete.json',{keywordPrefix})
//http://m.you.163.com/xhr/search/searchAutoComplete.json

//获取识物数据
//https://m.you.163.com/topic/v1/find/recManual.json
 export const reqEntity = ()=> ajax(api + '/topic/v1/find/recManual.json')
