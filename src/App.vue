<template>
  <section class="wrapper">
    <div class="position">
      <i class="iconfont position__icon">&#xe619;</i>
      北京理工大学
      <i class="iconfont position__notice">&#xe8ae;</i>
    </div>
  </section>
  <footer class="tabbar">
    <div class="tabbar__item tabbar__item--active">
      <i class="iconfont">&#xe7c6;</i>
      <span class="tabbar__text">首页</span>
    </div>
    <div class="tabbar__item">
      <i class="iconfont">&#xe881;</i>
      <span class="tabbar__text">购物车</span>
    </div>
    <div class="tabbar__item">
      <i class="iconfont">&#xe713;</i>
      <span class="tabbar__text">订单</span>
    </div>
    <div class="tabbar__item">
      <i class="iconfont">&#xe600;</i>
      <span class="tabbar__text">我的</span>
    </div>
  </footer>
</template>

<style lang="scss">
  @import './style/viriables.scss';
  @import './style/mixins.scss';
  .wrapper
  {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: .49rem;
    padding: 0 .18rem;
    background-color: red;

    .position {
      position: relative;
      padding: .16rem .24rem .16rem 0;
      line-height: .22rem;
      font-size: .16rem;
      @include ellipsis;

      .position__icon {
        position: relative;
        top: .01rem;
        font-size: .2rem;
      }

      .position__notice {
        position: absolute;
        top: .17rem;
        right: 0;
        font-size: .2rem;
      }

      color: $content-fontcolor;
    }
  }
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
