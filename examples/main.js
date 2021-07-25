import Vue from 'vue'
import App from './App.vue'
import './assets/style/fonts.scss'
import LysButton from './components/lys-button/LysButton'
import LysDialog from './components/lys-dialog/LysDialog'
import LysInput from './components/lys-input/LysInput'
import LysSwitch from './components/lys-switch/LysSwitch'
import LysRadio from './components/lys-radio/LysRadio'
import LysRadioGroup from './components/lys-radio-group/LysRadioGroup'
import LysCheckbox from './components/lys-checkbox/LysCheckbox'
import LysCheckboxGroup from './components/lys-checkbox-group/LysCheckboxGroup'
import LysForm from './components/lys-form/LysForm'
import LysFormItem from './components/lys-form-item/LysFormItem'
Vue.component(LysButton.name, LysButton)
Vue.component(LysDialog.name, LysDialog)
Vue.component(LysInput.name, LysInput)
Vue.component(LysSwitch.name, LysSwitch)
Vue.component(LysRadio.name, LysRadio)
Vue.component(LysRadioGroup.name, LysRadioGroup)
Vue.component(LysCheckbox.name, LysCheckbox)
Vue.component(LysCheckboxGroup.name, LysCheckboxGroup)
Vue.component(LysForm.name, LysForm)
Vue.component(LysFormItem.name, LysFormItem)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
