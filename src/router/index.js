import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import UsersView from '../views/UsersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  }
]

const router = new VueRouter({
  routes
})

export default router
