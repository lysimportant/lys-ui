import Vue from 'vue'
import App from './App.vue'
import LysButton from './components/lys-button/LysButton'
import LysDialog from './components/lys-dialog/LysDialog'
Vue.component(LysButton.name, LysButton)
Vue.component(LysDialog.name, LysDialog)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
