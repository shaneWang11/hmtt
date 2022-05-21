import axios from 'axios'

// 克隆出一个新的axios对象，并设置它的基地址
const request = axios.create({
    baseURL: 'http://geek.itheima.net/'
})

// 因为本项目只有一个接口服务器，也就是只有一个基地址
// 所以这里我们用默认导出
export default request