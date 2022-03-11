<template>
 <span v-if="show" class="toast__wrapper">{{msg}}</span>
</template>

<script>
export default {
  name: 'ToastComponent',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.toast__wrapper{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  padding:.1rem;
  background:rgba(0,0,0,.35);
  color:#fff;
  border-radius:.4rem;
}
</style>
