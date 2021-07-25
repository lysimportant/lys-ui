<template>
  <div>
    <div>
      demo --------- {{ money }}
    </div>
    <div>
      <lys-button @click="fn"></lys-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sync',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    money: null
  },
  methods: {
    fn () {
      this.$emit('update:money', 200)
    }
  }
}
</script>

<style>

</style>
