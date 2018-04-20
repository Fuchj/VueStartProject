import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import About from '@/components/About'
import GuanYu from '@/components/GuanYu'
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
