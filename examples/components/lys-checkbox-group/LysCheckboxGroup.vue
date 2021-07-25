<template>
  <div class="lys-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LysCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
