import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customer',
    name: 'customer',
    params: true,
    props: true,
    component: () => import(/* webpackChunkName: "customer" */ '../views/Customer.vue')
  },
  {
    path: '/form/:id',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue')
  },
  {
    path: '/create/form/:id',
    name: 'formCreate',
    component: () => import(/* webpackChunkName: "formCreate" */ '../views/FormCreate.vue')
  },
 {
    path: '/edit/form/:id',
    name: 'formEdit',
    component: () => import(/* webpackChunkName: "formEdit" */ '../views/FormEdit.vue')
  },
  {
    path: '/grade/:id',
    name: 'grade',
    component: () => import(/* webpackChunkName: "grade" */ '../views/Grade.vue')
  },
  {
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Forms.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
