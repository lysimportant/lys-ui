<template>
  <div class="lys-input">
    <!-- 如果showPassword传值了做判断是否切换 没有直接显示 type -->
    <input
    :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
    :name="name"
    :disabled="disabled"
    class="lys-input_inner"
    :placeholder="placeholder"
    :class="[{ 'is-disabled': disabled }]"
    :value="value"
    @input="handleInput"
    >
    <span
    class="lys-input_suffix"
    v-show="ShowSuffix">
      <i
      @click="clear"
      class="lys-icon-clear-cirle"
      v-show="clearable && value"></i>
      <i
      @click="handlePassword"
      class="lys-icon-view"
      :class="{'lys-icon-active': passwordVisible}"
      v-show="showPassword && value"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LysInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String || Number,
      default: ''
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false // 用于是否显示密码框
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    ShowSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
