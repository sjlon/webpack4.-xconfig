import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/home.vue'),
    },
    {
      path: '/about',
      component: () => import('./views/about.vue'),
    },
  ],
})

export default router
