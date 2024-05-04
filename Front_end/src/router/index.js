  import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'info',
    component: () => import('../views/info.vue') // set home as path '/'
  },
 
  {
    path: '/machine',
    name: 'machine',
    component: () => import('../views/machine.vue') // set home as path '/'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue') // set home as path '/'
  },
    {
    path: '/graph',
    name: 'graph',
    component: () => import('../views/graph.vue') // set home as path '/'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue') // set home as path '/'
  },
  {
    path: '/select',
    name: 'select',
    component: () => import('../views/select.vue') // set home as path '/'
  },
  {
    path: '/regisline',
    name: 'regisline',
    component: () => import('../views/regisline.vue') // set home as path '/'
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/edit.vue') // set home as path '/'
  },
  {
    path: '/getline',
    name: 'getline',
    component: () => import('../views/getline.vue') // set home as path '/'
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/forgot.vue') // set home as path '/'
  },
  {
    path: '/editroo',
    name: 'editroo',
    component: () => import('../views/editroo.vue') // set home as path '/'
  },
  {
    path: '/p_tle',
    name: 'p_tle',
    component: () => import('../views/p_tle.vue') // set home as path '/'
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
