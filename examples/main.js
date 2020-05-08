import Vue from 'vue'
import App from './App.vue'
import LfqUi from '../packages'

Vue.config.productionTip = false
Vue.use(LfqUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
