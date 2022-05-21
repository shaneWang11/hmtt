import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入组件
import login from '@/views/Login'

//路由规则
const routes = [
  {path:'/',redirect:'/login'},
  {name:'login',path:'/login',component:login}
]

const router = new VueRouter({
  routes
})

export default router
