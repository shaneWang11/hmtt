// 导入设置了基地址的请求对象
import request from "@/utils/request";
// import store from '@/store'

// 封装一个用户登录的接口
export const login = (data)=>{
    return request({
        url:'/v1_0/authorizations',
        method:'post',
        data
    })
}


// 封装一个获取用户信息的接口
export const userInfo = ()=>{
    return request({
        url:'/v1_0/user/profile',
        method:'get',
        // headers:{
        //     Authorization: 'Bearer ' + store.state.tokenObj.token
        // }
    })
}