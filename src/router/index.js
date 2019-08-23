import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld.vue'
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import ForgotPassword from '@/components/login/ForgotPassword'
import Profile from '@/components/profile/Profile'
import Gallary from '@/components/gallary/Gallary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        allowAnonymous: false
      }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
          allowAnonymous: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
          allowAnonymous: true
        }
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        allowAnonymous: false
      }
    },
    {
      path: '/gallary',
      name: 'Gallary',
      component: Gallary,
      meta: {
        allowAnonymous: false
      }
    }

  ]
})