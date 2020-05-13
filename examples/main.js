import Vue from 'vue'
import App from './App.vue'
import lfqUi from '../packages'
Vue.use(lfqUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
