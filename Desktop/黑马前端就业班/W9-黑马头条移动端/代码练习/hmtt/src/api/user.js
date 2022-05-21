// 导入设置了基地址的请求对象
import request from "@/utils/request";

// 封装一个用户登录的接口
export const login = (data)=>{
    return request({
        url:'/v1_0/authorizations',
        method:'post',
        data
    })
}