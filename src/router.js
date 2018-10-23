import Vue from "vue";
import Router from "vue-router";
import Home from "./components/pages/Home.vue";
import Login from "./components/pages/Login.vue";
import Logout from "./components/pages/Logout.vue";
import Register from "./components/pages/Register.vue";
import Contact from "./components/pages/Contact.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import About from "./components/pages/About.vue";
import store from '@/store'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        icon: "home"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        icon: "login"
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        icon: "register"
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        icon: "contact"
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        icon: "logout"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        icon: "about",
        requiresAuth: true
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        icon: "dashboard",
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {

  let isAuthenticated = store.getters['auth/isLoggedIn']

  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated === true) {
      next()
      return
    }
    next({
      name: 'login'
    }) 
  } else {
    next() 
  }
  
  if(to.path === '/login' && isAuthenticated){
    next({
      name: 'dashboard'
    })
    return
  }

  if(to.path === '/register' && isAuthenticated){
    next({
      name: 'dashboard'
    })
    return
  }
})


export default router;
