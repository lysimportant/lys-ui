<template>
  <label class="lys-radio" :class="{ 'is-checked': label === model }">
    <span class="lys-radio__input">
      <span class="lys-radio__inner"></span>
      <input
      type="radio"
      class="lys-radio__original"
      :value="label"
      :name="name"
      v-model="model"
      >
    </span>
    <span class="lys-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'LysRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [Number, Boolean, String],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 双向数据绑定计算属性
    model: {
      get () {
        // 设置值 this.RadioGroup.value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) { // 触发 input 事件改变父组件的值
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      // 判断 radio 是否被 radiogroup 包裹
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
