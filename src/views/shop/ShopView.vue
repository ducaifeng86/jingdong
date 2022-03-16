<template>
  <div class="wrapper">
    <ShopInfo :item="item" hideBorder="true"/>
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo.vue'
export default {
  name: 'ShopView',
  components: {
    ShopInfo
  },
  setup () {
    const item = {
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }
    return {
      item
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    margin:0 .18rem;
  }
</style>
