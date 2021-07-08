// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

// 引入axios
import MyServerHttp from '@/plugins/http.js'
import 'element-ui/lib/theme-chalk/index.css'
// 引入样式
import './assets/css/reset.css'
import MyHttpServer from './plugins/http'

Vue.config.productionTip = false

// 适用vue插件
Vue.use(ElementUI)
// 自己创建的vue插件
Vue.use(MyHttpServer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
