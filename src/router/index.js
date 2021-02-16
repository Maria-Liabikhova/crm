import Vue from 'vue'
import VueRouter from 'vue-router'
import routSequrity from './route-sequrity'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/users',
    component: () => import('../pages/Users.vue'),
    beforeEnter: routSequrity
  },
  {
    path: '/user/:id',
    props: true,
    component: () => import('../pages/User.vue'),
    beforeEnter: routSequrity
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/registration',
    component: () => import('../pages/Registration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  props: true,
  routes
})

export default router
