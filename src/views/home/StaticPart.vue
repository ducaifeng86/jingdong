<template>
    <div class="position">
      <i class="iconfont position__icon">&#xe619;</i>
      <span class="position__text">北京理工大学北京理工大学北京理工大学北京理工大学</span>
      <i class="iconfont position__notice">&#xe8ae;</i>
    </div>
    <div class="search">
      <i class="iconfont">&#xe6e1;</i>
      <span class="search__text">山姆会员优化圈</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg"/>
    </div>
    <div class="icons">
      <div class="icons__item" v-for="item in iconsList" :key="item.desc">
        <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" class="icons__item__img" />
        <span class="icons__item__desc">{{item.desc}}</span>
      </div>
    </div>
    <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return {
      iconsList
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../style/viriables.scss';
  @import '../../style/mixins.scss';
  .position {
    display: flex;
    padding: .16rem 0;
    line-height: .22rem;
    font-size: .16rem;

    .position__icon {
      top: .01rem;
      font-size: .2rem;
    }

    .position__text {
      flex:1;
      padding:0 .1rem;
      @include ellipsis;
    }

    .position__notice {
      font-size: .2rem;
    }

    color: $content-fontcolor;
  }

  .search {
    display:flex;
    margin-bottom: .12rem;
    line-height: .32rem;
    background-color: #F5F5F5;
    color: #B7B7B7;
    border-radius: .16rem;
    font-size: .14rem;

    .iconfont {
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
