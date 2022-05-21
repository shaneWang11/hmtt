import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { Toast } from 'vant'

Vue.use(VueRouter)

// 导入组件
import login from '@/views/Login'
import layout from "@/views/Layout"
import home from '@/views/Home'
import ask from "@/views/Ask"
import mine from "@/views/Mine"
import video from "@/views/Video"



//路由规则
const routes = [
  { path: '/', redirect: '/login' },
  { name: 'login', path: '/login', component: login },
  {
    name: 'layout', path: '/layout', component: layout,
    children: [
      { name: 'home', path: 'home', component: home },
      { name: 'ask', path: 'ask', component: ask },
      { name: 'video', path: 'video', component: video },
      {
        name: 'mine',
        path: 'mine',
        component: mine,
        meta: {
          needLogin: true,
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {

  if (to.meta.needLogin) {

    // 代表去的是要登录的页面
    if (store.state.tokenObj.token) {

      next()

    } else {
      Toast.fail('请先登录')
      // 没有登录
      next({
        name: 'login',
        query: {
          back: to.path // 记录原本要去的页面路径
        }
      })
    }
  } else {
    // 代表去的是不需要登录就能访问的页面
    next()
  }

  // 吞掉路由没跳转的错误
  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
      return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => err)
  }

})


export default router
