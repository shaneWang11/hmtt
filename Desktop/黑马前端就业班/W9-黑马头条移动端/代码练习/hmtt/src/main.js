import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './styles/base.less'

// 导入vant
import './utils/vant';
// 导入flexible
import 'amfe-flexible'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
