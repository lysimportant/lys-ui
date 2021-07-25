<template>
  <label
    class="lys-checkbox"
    :class="{'is-checked': isChecked }"
  >
    <span class="lys-checkbox__input">
      <span class="lys-checkbox__inner"></span>
      <input
        type="checkbox"
        class="lys-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      >
    </span>
    <span class="lys-checkbox__label">
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LysCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {},
  computed: {
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.CheckboxGroup.value
    },
    isChecked () {
      // 判断是否有 Group 包裹,有就判断 label 是否在model中
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
