<template>
  <div id="app">
    <!-- <lys-input disabled name="username" type="password" placeholder="请输入文字"></lys-input> -->
    <!-- <lys-input placeholder="请输入文字"></lys-input> -->
    <!-- <lys-input placeholder='请输入内容' type="text" v-model="username"></lys-input> -->
    <!-- <input type="text"  v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = $event.target.value"> -->
    <!-- <lys-input placeholder='请输入内容' type="password" show-password v-model="username"></lys-input>
    <lys-input placeholder='请输入内容' clearable type="password" v-model="username"></lys-input>
    <lys-input placeholder='请输入内容' type="password" v-model="username"></lys-input>
    {{ username }} -->
    <!-- <lys-switch
    v-model="active"
    active-color="#00FF00"
    inactive-color="#FF0000"
    name="username"
    @click="handle(active)"
    ></lys-switch> -->
    <!-- <lys-radio label="1" v-model="gender">男</lys-radio>
    <lys-radio label="0" v-model="gender">女</lys-radio> -->

    <!-- <lys-radio label="1" v-model="gender"></lys-radio>
    <lys-radio label="0" v-model="gender"></lys-radio>
    <lys-radio-group v-model="gender">
      <lys-radio label="1">男</lys-radio>
      <lys-radio label="0">女</lys-radio>
    </lys-radio-group> -->
    <!-- LysCheckoutbox -->
    <!-- <lys-checkbox label="吃饭" v-model="active">是否选中</lys-checkbox>
    <lys-checkbox-group v-model="hobby">
      <lys-checkbox label="吃饭">是否选中</lys-checkbox>
      <lys-checkbox label="睡觉">是否选中</lys-checkbox>
      <lys-checkbox label="兜着玩">是否选中</lys-checkbox>
    </lys-checkbox-group> -->
      <lys-form :model="model">
        <lys-form-item label="用户名">
          <lys-input placeholder="请输入用户名"></lys-input>
        </lys-form-item>
         <lys-form-item label="选择">
           <lys-radio label="吃饭" v-model="active">吃饭</lys-radio>
           <lys-radio label="睡觉" v-model="active">睡觉</lys-radio>
        </lys-form-item>
           <lys-form-item label="选择">
          <lys-switch v-model="active"></lys-switch>
        </lys-form-item>
    </lys-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      model: {
        usrename: 'Lys',
        age: 16,
        height: 1.68
      },
      active: false
    }
  }
}
</script>

<style lang="scss">
</style>
