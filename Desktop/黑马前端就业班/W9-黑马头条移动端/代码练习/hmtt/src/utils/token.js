const HMTT_KEY = 'hmtt83'

//封装保存token
export function setToken(obj){
    localStorage.setItem(HMTT_KEY,JSON.stringify(obj))
}

// 封装获取token
export function getToken(){
    return JSON.parse(localStorage.getItem(HMTT_KEY))
}

// 封装删除token
export function removeToken(){
    localStorage.removeItem(HMTT_KEY)
}