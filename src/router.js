import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home.vue'
import Login from './components/pages/Login.vue'
import Logout from './components/pages/Logout.vue'
import Dashboard from './components/pages/Dashboard.vue'
import store from './store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        icon: 'home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        icon: 'login'
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        icon: 'logout'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        icon: 'dashboard',
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach(function(to, from, next){

  // check if the route requires authentication and user is not logged in
  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.auth.isLoggedIn) {
      // redirect to login page
      next({ name: 'login' })
      return
  }

  // if logged in redirect to dashboard
  if(to.path === '/login' && store.state.auth.isLoggedIn) {
      next({ name: 'dashboard' })
      return
  }

  next()
})

export default router;