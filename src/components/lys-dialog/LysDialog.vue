<template>
  <div class="container">
    <!-- transition是vue的动画封装组件 -->
    <transition name="dialog-fade">
      <!-- 遮罩层 -->
      <!-- .self代表只有点到自己才会触发 -->
      <div class="lys-dialog_wrapper" v-show="visible" @click.self="handleClose">
        <div class="lys-dialog" :style="{width, marginTop: top}">
          <!--    头部   -->
          <div class="lys-dialog_header">
            <!-- title支持具名插槽的形式 -->
            <slot name="title">
              <span class="lys-dialog_title">{{ title }}</span>
            </slot>
            <!--   关闭按钮-->
            <button class="lys-dialog_headerbtn" @click="handleClose">
              <i class="lys-icon-close"></i>
            </button>
          </div>
          <!--   信息   -->
          <div class="lys-dialog_body">
            <slot><span>这是一段内容信息</span></slot>
          </div>
          <!--   底部    -->
          <div class="lys-dialog_footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LysDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  methods: {
    handleClose () {
      // this.visible = false
      // update:数据名 的方法名用于sync修饰符的处理,第二个参数是数据update的具体数据
      // .sync修饰符的值作用: 当父子组件需要绑定一个值并修改时 不需要父组件绑定子组件事件就可以赋值 需名字相同
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
