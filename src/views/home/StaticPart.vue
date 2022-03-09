<template>
    <div class="position">
      <i class="iconfont position__icon">&#xe619;</i>
      北京理工大学
      <i class="iconfont position__notice">&#xe8ae;</i>
    </div>
    <div class="search">
      <i class="iconfont">&#xe6e1;</i>
      <span>山姆会员优化圈</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg"/>
    </div>
    <div class="icons">
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
      <div class="icons__item">
        <img src="http://www.dell-lee.com/imgs/vue3/超市.png" class="icons__item__img" />
        <span class="icons__item__desc">超市便利</span>
      </div>
    </div>
    <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart'
}
</script>
<style lang="scss">
  @import '../../style/viriables.scss';
  @import '../../style/mixins.scss';
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

  .search {
    margin-bottom: .12rem;
    line-height: .32rem;
    background-color: #F5F5F5;
    color: #B7B7B7;
    border-radius: .16rem;
    font-size: .14rem;

    .iconfont {
      position: relative;
      top: .01rem;
      display: inline-block;
      padding: 0 0.1rem 0 0.12rem;
      font-size: .2rem;
    }
  }

  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 25.4%;

    &__img {
      width: 100%;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;

    &__item {
      width: 20%;

      &__img {
        display: block;
        margin: 0 auto;
        width: .4rem;
        height: .4rem;
      }

      &__desc {
        display: block;
        margin: .06rem 0 .16rem 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }

  .gap {
    margin: 0 -.18rem;
    height: .1rem;
    background-color: #f1f1f1;
  }
</style>
