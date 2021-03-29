import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Logout from '../components/auth/Logout.vue';

const authGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (localStorage.getItem('auth-token'))
    next();
  else
    next("/login");
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: authGuard
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: authGuard
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
