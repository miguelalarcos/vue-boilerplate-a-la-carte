import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import HelloWorld from './components/HelloWorld'
import Chat from './components/Chat'
import ChatAdmin from './components/ChatAdmin'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
          component: HelloWorld,
          meta: { requiresAuth: true}
        },
        {
          path: '/chat',
          component: Chat
        },
        {
          path: '/chat-admin',
          component: ChatAdmin,
          meta: { requiresAuth: true}
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.jwt === null) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router