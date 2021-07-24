<template>
  <div id="app">
    lys-ui
<!--    button-->
    <!-- <div class="button">
       <div class="row">
         <lys-button>你好</lys-button>
         <lys-button type="primary">你好</lys-button>
         <lys-button type="success">成功</lys-button>
         <lys-button type="info">初始化</lys-button>
         <lys-button type="danger">危险</lys-button>
         <lys-button type="warning">警告</lys-button>
       </div>
       3123
       <div class="row">
         <lys-button size="default" >你好</lys-button>
         <lys-button size="medium"  type="primary">你好</lys-button>
         <lys-button size="small"  type="info">初始化</lys-button>
         <lys-button size="mini" type="danger">危险</lys-button>
       </div>
       12321
       <div class="row">
         <lys-button plain>你好</lys-button>
         <lys-button plain type="primary">你好</lys-button>
         <lys-button plain type="success">成功</lys-button>
         <lys-button plain type="info">初始化</lys-button>
         <lys-button plain type="danger">危险</lys-button>
         <lys-button plain type="warning">警告</lys-button>
       </div>
       <div class="row">
         <lys-button round icon="lys-icon-check" plain>你好</lys-button>
         <lys-button round icon="lys-icon-check" plain type="primary">你好</lys-button>
         <lys-button round icon="lys-icon-check" plain type="success">成功</lys-button>
         <lys-button round icon="lys-icon-check" plain type="info">初始化</lys-button>
         <lys-button round icon="lys-icon-check" plain type="danger">危险</lys-button>
         <lys-button round icon="lys-icon-check" plain type="warning">警告</lys-button>
       </div>

       <div class="row">
         <lys-button circle plain></lys-button>
         <lys-button circle plain type="primary">梁</lys-button>
         <lys-button circle icon='lys-icon-search' type="primary"></lys-button>
         <lys-button disabled @click="click" circle icon='lys-icon-delete' type="danger"></lys-button>
         <lys-button circle icon='lys-icon-check' type="success"></lys-button>
         <lys-button circle icon='lys-icon-edit' type="primary"></lys-button>
         <lys-button circle icon='lys-icon-message' type="info"></lys-button>
       </div>
     </div>
      -->
<!--  dialog-->
    <!-- <div class="dialog">
      <lys-button @click="visible = true">显示Dialog</lys-button>
      <lys-dialog title="梦醒提示" width="80%" top="50px" :visible.sync="visible">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <template v-slot:footer>
          <lys-button type="info" size="mini">取消</lys-button>
          <lys-button type="primary" size="small">确定</lys-button>
        </template>
      </lys-dialog>
    </div> -->
    <!-- :visible="visible" -->
    <!-- <demo :visible="visible" :money="money" @update:aa="fn2"/> -->
    <!-- Input -->
    <lys-input></lys-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false,
      money: 100
    }
  },
  methods: {
    click () {
      console.log('click')
    }
  }
}
</script>

<style lang="scss">
[class *=lys-icon-] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
