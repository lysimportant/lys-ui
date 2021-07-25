import LysButton from './lys-button/LysButton'
import LysDialog from './lys-dialog/LysDialog'
import LysInput from './lys-input/LysInput'
import LysSwitch from './lys-switch/LysSwitch'
import LysRadio from './lys-radio/LysRadio'
import LysRadioGroup from './lys-radio-group/LysRadioGroup'
import LysCheckbox from './lys-checkbox/LysCheckbox'
import LysCheckboxGroup from './lys-checkbox-group/LysCheckboxGroup'
import LysForm from './lys-form/LysForm'
import LysFormItem from './lys-form-item/LysFormItem'
import './fonts/fonts.scss'
const components = [
  LysButton,
  LysDialog,
  LysInput,
  LysSwitch,
  LysRadio,
  LysRadioGroup,
  LysCheckbox,
  LysCheckboxGroup,
  LysForm,
  LysFormItem
]

// 安装函数
const install = (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
