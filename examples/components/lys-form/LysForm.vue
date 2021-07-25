<template>
  <div class="lys-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LysForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    lebelWidth: {
      type: String,
      default: '380px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style>

</style>
