import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/users',
    component: () => import('../pages/Users.vue')
  },
  {
    path: '/user/:id',
    props: true,
    component: () => import('../pages/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  props: true,
  routes
})

export default router
