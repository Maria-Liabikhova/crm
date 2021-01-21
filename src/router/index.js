import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:'',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/users',
    component: () => import('../components/Users.vue')
  },

];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
