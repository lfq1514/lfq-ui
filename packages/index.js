// 整个包的入口
import LfqButton from './button.vue'
import LfqDialog from './dialog.vue'
import LfqInput from './input.vue'
import LfqSwitch from './switch.vue'
import LfqRadio from './radio.vue'
import LfqRadioGroup from './radio-group.vue'
import LfqCheckbox from './checkbox.vue'
import LfqCheckboxGroup from './checkbox-group.vue'
import LfqForm from './form.vue'
import LfqFormItem from './form-item.vue'
import './font/font.scss'
const components = [
  LfqButton, LfqDialog, LfqInput, LfqSwitch, LfqRadio, LfqRadioGroup, LfqCheckbox, LfqCheckboxGroup, LfqForm, LfqFormItem

]
// 定义install方法，接受Vue作为参数。如果使用use注册插件，则所有的组件都将被注册
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
