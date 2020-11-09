import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/medias',
    name: 'Medias',
    component: () => import(/* webpackChunkName: "about" */ '../views/medias/index.vue')
  },
  {
    path: '/projets',
    name: 'Projets',
    component: () => import(/* webpackChunkName: "about" */ '../views/projets/index.vue')
  },
  {
    path: '/stock',
    name: 'Stock',
    component: () => import(/* webpackChunkName: "about" */ '../views/stock/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
