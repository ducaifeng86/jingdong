import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shopView" */ '../views/shop/ShopView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'../views/login/LoginView.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */'../views/register/RegisterView.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'login' || name === 'register')
  if (isLogin || isLoginOrRegister) {
    next()
  } else {
    next({ name: 'login' })
  }
})
export default router
