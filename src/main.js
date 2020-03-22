import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 懒加载插件
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'./static/error.png',
    loading:'./static/loading.png'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
