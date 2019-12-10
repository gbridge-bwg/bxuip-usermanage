import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/UserIndex'
import UserChange from '@/components/UserChange'
import UserRegist from '@/components/UserRegist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path : '/',
      component : UserIndex
    },
    {
      path : '/change',
      component : UserChange
    },
    {
      path : '/regist',
      component : UserRegist
    }
  ]
})
