<template>
  <button
    :disabled="disabled"
    class='lys-button'
    @click="handleClick"
    :class="[`lys-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round ,
        'is-circle': circle,
        'is-disabled': disabled,
        [isSize]: size
      }
    ]"
  >
  <!-- 检查图标是否传值 -->
  <i v-if="icon" :class="icon"></i>
  <!-- 检查组件slot是否传值 -->
     <span v-if="$slots.default">
        <slot></slot>
     </span>
  </button>
</template>

<script>
export default {
  name: 'LysButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  computed: {
    isSize () {
      return this.size === 'default' ? 'is-default' : this.size === 'medium' ? 'is-medium' : this.size === 'small' ? 'is-small' : this.size === 'mini' ? 'is-mini' : 'is-default'
    }
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
