/**
 * Created by 李欢欢 on 2019/4/2.
 */
import Mock from 'mockjs'

import Category from './mockData/category.json'
import CategoryList from './mockData/categoryList.json'
import Msite from './mockData/homeData.json'

Mock.mock('/msite',{code:0, data:Msite})
Mock.mock('/categorylist',{code:0, data:CategoryList})
Mock.mock('/category',{code:0, data:Category})
