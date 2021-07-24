<template>
  <div id="app">
    lys-ui
    <!-- <lys-input disabled name="username" type="password" placeholder="请输入文字"></lys-input> -->
    <!-- <lys-input placeholder="请输入文字"></lys-input> -->
    <!-- <lys-input placeholder='请输入内容' type="text" v-model="username"></lys-input> -->
    <!-- <input type="text"  v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = $event.target.value"> -->

    <lys-input placeholder='请输入内容' type="password" show-password v-model="username"></lys-input>
    <lys-input placeholder='请输入内容' clearable type="password" v-model="username"></lys-input>
    <lys-input placeholder='请输入内容' type="password" v-model="username"></lys-input>

    {{ username }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  .lys-input {
    width: 200px;
  }
}
</style>
