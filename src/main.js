// 1.1 先导入Vue模块
import Vue from 'vue'
//引入router.js
import router from './js/router'
// 挂载请求数据的方法
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求api接口时自动加上根路径
import config from './js/globalconfig.js'
Vue.http.options.root=config.baseUrl
//引入全局过滤器
import './js/globalfilter.js'


// 3.1 导入安装的 Mint-UI 组件类库
// 如果是 将所有的组件 全部引入的话，在使用 CSS Component 的时候，不必在按需引入了，直接以标签形式引入组件即可
import Mint from 'mint-ui';
// 3.2 引入 样式
import 'mint-ui/lib/style.css'
// 3.3 将 Mint-UI 注册到 Vue 上
Vue.use(Mint);


// 使用 mui 组件
// 4.1 导入CSS样式
import './lib/mui/css/mui.min.css'
// 4.2 导入 MUI 扩展图标样式
import './lib/mui/css/icons-extra.css'


// 导入 App.vue 组件
import App from './components/App.vue'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import store from './js/store'

// 1.2 创建一个 Vue 实例
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router ,// 2.4 将 路由对象，挂载到 VM 实例身上
  store
});