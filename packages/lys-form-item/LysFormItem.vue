<template>
  <div class="lys-form-item" :style="{ width: this.Form.lebelWidth }">
    <label class="lys-form-item_label">
      {{ label }}
    </label>
    <div class="lys-form-item_content">
      <slot></slot>
      <!-- 校验信息提示 -->
      <!-- <span v-if="isErr" class="err">{{errMessage}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LysFormItem',
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    errMessage: {
      type: String,
      default: '30%'
    }
  }
}
</script>

<style scoped lang="scss">
 .lys-form-item {
    margin-bottom: 25px;
    .lys-form-item_label {
      float: left;
      padding: 0 12px 0 0 ;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      text-align: right;
      vertical-align: middle;
      box-sizing: border-box;
    }
    .lys-form-item_content {
      position: relative;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
    }
  }
  .err {
    color: red;
    font-size: 14px;
    line-height: 14px;
  }
</style>
