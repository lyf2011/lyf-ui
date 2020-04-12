import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Category = () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
const Cart = () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
const Profile = () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes
})

export default router
