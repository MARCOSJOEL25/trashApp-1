import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Element,
  render: h => h(App)
}).$mount('#app')


Vue.use(Element)