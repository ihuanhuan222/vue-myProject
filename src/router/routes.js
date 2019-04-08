/**
 * 包含所有路由的数组
 */
import Msite from '../pages/Msite/Msite.vue'
import Sorter from '../pages/Sorter/Sorter.vue'
import Entity from '../pages/Entity/Entity.vue'
import Shop from '../pages/Shop/Shop.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
export default [
  {
    path:'/msite',
    component: Msite,
  },
  {
    path:'/sorter',
    component: Sorter,
  },
  {
    path:'/entity',
    component: Entity,
  },
  {
    path:'/search',
    component: Search,
  },
  {
    path:'/shop',
    component: Shop,
  },
  {
    path:'/profile',
    component: Profile,
    meta: {
      isShow: true  // 是否显示footer
    }
  },
  {
    path:'/',
    redirect: '/entity'
  }
]
