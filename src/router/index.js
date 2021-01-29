import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/users',
    component: () => import('../components/Users.vue')
  },
  {
    path: '/user/:id',
    props: true,
    component: () => import('../components/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  props: true,
  routes
})

export default router
