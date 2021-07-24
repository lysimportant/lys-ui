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
.lys-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-box;
  display: -moz-inline-box;
  display: -webkit-inline-box;
  .lys-input_inner {
    // 去除浏览器默认样式
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-box;
    display: -moz-inline-box;
    display: -webkit-inline-box;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    width: 100%;
    // transition: border-color .2s cubic-bezier(.645,045,.355,1);
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
  .lys-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    cursor: pointer;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .lys-icon-active {
      color: blue;
    }
  }
}
</style>
