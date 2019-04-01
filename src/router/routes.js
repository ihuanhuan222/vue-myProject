/**
 * 包含所有路由的数组
 */
import Msite from '../pages/Msite/Msite.vue'
import Sorter from '../pages/Sorter/Sorter.vue'
import Entity from '../pages/Entity/Entity.vue'
import Shop from '../pages/Shop/Shop.vue'
import Profile from '../pages/Profile/Profile.vue'
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
    path:'/shop',
    component: Shop,
  },
  {
    path:'/profile',
    component: Profile,
  },
  {
    path:'/',
    redirect: '/msite'
  }
]
