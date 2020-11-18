import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/', //登陆页面路由
  redirect: '/login'
},
{
  path: '/login', //注册页面路由
  name: 'login',
  component: () => import('../views/Login.vue')
},
{
  path: '/register', //注册页面路由
  name: 'register',
  component: () => import('../views/Register.vue')
},
{
  path: '/home', //首页路由
  name: 'home',
  meta: {
    requireAuth: true
  },
  component: () => import('../views/home/home'),
  children: [
    {
      path: "massage",
      name: "massage",
      component: () => import("../views/message/massage")
    },
    {
      path: "manuscript",
      name: "manuscript",
      component: () => import("../views/manuscript/manuscript")
    }
  ]
}
  // ,
  // {
  //   path: '/leftMenu', //左侧菜单
  //   name: 'leftMenu',
  //   component: () => import('../components/layout/leftMenu')
  // }
]

const router = new VueRouter({
  routes
})

export default router