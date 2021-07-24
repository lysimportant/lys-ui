import Vue from 'vue'
import App from './App.vue'
import './assets/style/fonts.scss'
import LysButton from './components/lys-button/LysButton'
import LysDialog from './components/lys-dialog/LysDialog'
import LysInput from './components/lys-input/LysInput'
Vue.component(LysButton.name, LysButton)
Vue.component(LysDialog.name, LysDialog)
Vue.component(LysInput.name, LysInput)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
