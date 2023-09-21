import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
