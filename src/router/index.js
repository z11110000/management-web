import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    meta: {title: "首页", path: "/"},
    children: [
      {
        path: '/welcome',
        component: () => import('@/views/welcome/index'),
        meta: {title: "广场", path: "/"}
      },
      {
        path: '/menu',
        component: () => import('@/views/menu/index'),
        meta: {title: "菜单管理", path: "/menu"}
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
