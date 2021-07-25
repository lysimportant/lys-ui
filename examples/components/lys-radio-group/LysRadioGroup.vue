<template>
  <div class="group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LysRadioGroup',
  provide () { // 几代通过
    return {
      RadioGroup: this
    }
  },
  props: {
    // lys-radio-group 接收到 value值
    // 需要触发 Input 事件 修改值
    // vue: provide inject  react: provider/consumer
    value: null
  }
}
</script>

<style>

</style>
