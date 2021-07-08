//插件模块
// 引入所需要的插件
import axios from 'axios';
// 创建一个MyHttpServer的对象 用来创建插件
const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
  // 4. 添加实例方法
  Vue.prototype.$http = axios
}
export default MyHttpServer
