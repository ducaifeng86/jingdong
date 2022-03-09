<template>
  <footer class="tabbar">
    <div v-for="(item,index) in tabbarList" :class="{'tabbar__item':true,'tabbar__item--active': index === 0}" :key="item.icon">
      <i class="iconfont" v-html="item.icon"></i>
      <span class="tabbar__text">{{item.text}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TabbarNav',
  setup () {
    const tabbarList = [
      { icon: '&#xe7c6;', text: '首页' },
      { icon: '&#xe881;', text: '购物车' },
      { icon: '&#xe713;', text: '订单' },
      { icon: '&#xe600;', text: '我的' }
    ]
    return {
      tabbarList
    }
  }
}
</script>
<style lang="scss">
  @import '../../style/viriables.scss';
  @import '../../style/mixins.scss';
  .tabbar {
    display: flex;
    box-sizing: border-box;
    padding: 0 .18rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    border-top: 1px solid #F1F1F1;

    &__item {
      display: flex;
      flex-flow: column;
      flex: 1;
      text-align: center;

      .iconfont {
        margin: .06rem 0 .02rem 0;
        font-size: .18rem;
      }

      .tabbar__text {
        font-size: .2rem;
        transform: scale(.5,.5);
        transform-origin: center top;
      }

      &--active {
        color: #1FA4FC;
      }
    }

    color: $content-fontcolor;
  }

</style>
