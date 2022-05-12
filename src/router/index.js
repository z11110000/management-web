import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/login', component: Login },
  {path: '/home', component: Home},
  {
    path: '/member',
    redirect: '/member/list',
    name: 'member',
    meta: {title: '用户管理', icon: 'ums-role'}
  }
]

const router = new VueRouter({
  routes
})

export default router
