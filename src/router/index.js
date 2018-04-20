import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import GuanYu from '@/pages/GuanYu'
import asd  from '@/pages/asd'
import sdf from '@/pages/sdf'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Home',    
      name: 'Home',
      component: Home
    },
    { path: '/About',
     name: 'About',
     component: About ,
     //路由嵌套子路由
     children: [
      {
        path: 'attend',
        component: asd
      },
      {
        path: 'newattend',
        component: sdf
      }
    ]
  },
     { path: '/GuanYu/:id',
     name: 'GuanYu',
     component: GuanYu 
    },
    //重定向
    {path:'*',redirect:'/Home'}
  ]
})
