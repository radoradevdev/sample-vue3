import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Logout from '../components/auth/Logout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Logout',
    component: Logout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
