import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Home,
      children: [
        {path: '/about',
        component: About
        },
        {
          path: '/hello',
          component: HelloWorld
        }
      ]
    }
  ]
})