import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HelloWorld'
import About from '@/pages/About'
import GuanYu from '@/pages/GuanYu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',    
      name: 'Home',
      component: Home
    },
    { path: '/About',
     name: 'About',
     component: About 
    },
     { path: '/GuanYu',
     name: 'GuanYu',
     component: GuanYu 
    }
  ]
})
