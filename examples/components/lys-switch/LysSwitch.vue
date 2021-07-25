<template>
  <div
  :class="{'is-checked': value}"
  class="lys-switch"
  @click="handleChange">
    <input
    type="checkbox"
    :name="name"
    ref="input"
    class="lys-switch__input"
    >
    <span
    class="lys-switch__core"
    :style="[
    { backgroundColor: value ? activeColor : inactiveColor },
    { borderColor: value ? activeColor : inactiveColor }
    ]"
    >
      <span class="lys-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LysSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange () {
      this.$refs.input.checked = !this.value
      this.$emit('input', !this.value)
      this.$emit('click')
    }
  },
  mounted () {
    // this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
