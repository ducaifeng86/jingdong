<template>
  <div class="nearby__item">
    <img class="nearby__item__img" :src="item.imgUrl" />
    <div class="nearby__item__content" :class="hideBorder ?  '': 'nearby__item-border'">
      <div class="content__title">{{item.name}}</div>
      <div class="content__tags">
        <span class="content__tag">月售: {{item.sales}} </span>
        <span class="content__tag">起送: {{item.expressLimit}} </span>
        <span class="content__tag">基础运费: {{item.expressPrice}} </span>
      </div>
      <p class="content__highlight">{{item.slogan}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
  @import '../style/viriables.scss';
  @import '../style/mixins.scss';
  .nearby__item {
    display: flex;
    padding-top: .12rem;

    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }

    &-border {
      border-bottom: 1px solid #f1f1f1;
    }

    &__content {
      flex: 1;
      padding-bottom: .12rem;

      .content__title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
      }

      .content__tags {
        margin-top: .08rem;
        line-height: .18rem;
        font-size: .13rem;
        color: $content-fontcolor;

        .content__tag {
          margin-right: .16rem;
        }
      }

      .content__highlight {
        margin: .08rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
      }
    }
  }

</style>
