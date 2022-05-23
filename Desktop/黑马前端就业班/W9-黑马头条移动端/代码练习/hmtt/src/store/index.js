import { getToken,setToken } from '@/utils/token'
import Vue from 'vue'
import Vuex from 'vuex'
import { userInfoAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 保存token和refresh_token的对象
    //本地存储就有本地存储取，没有就给空对象
    tokenObj:getToken() || {} ,

    //声明一个变量保存登录的用户信息
    userInfo:{}
  },

  mutations: {
    // 提供修改token的方法
    changeToken(state,obj){
      //保存到vuex
      state.tokenObj = obj
      //也保存到本地存储
      setToken(obj)
    },

    //提供修改用户信息的方法
    changeUserInfo(state,obj){
      state.userInfo = obj
    },
    

  },
  actions:{
    async reqUserInfo(context){
      if (!context.state.userInfo.name) {
        let res = await userInfoAPI();
        // 把请求到的数据保存到vuex里
        context.commit('changeUserInfo',res.data.data)
      }
    }
  }

})
