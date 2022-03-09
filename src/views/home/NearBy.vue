<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for ="item in nearbyList" :key="item.id">
      <img class="nearby__item__img" :src="item.imgUrl" />
      <div class="nearby__item__content">
        <div class="content__title">{{item.title}}</div>
        <div class="content__tags" v-for="(innerItem,index) in item.tags" :key="index">
          <span class="content__tag">{{innerItem.tag}}</span>
        </div>
        <p class="content_highlight">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NearBy',
  setup () {
    const nearbyList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }, {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥5', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }]

    return {
      nearbyList
    }
  }
}
</script>
<style lang="scss">
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby {
  &__title {
    margin: .14rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &__item {
    display: flex;
    padding-top: .12rem;

    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }

    &__content {
      flex: 1;
      padding-bottom: .12rem;
      border-bottom: 1px solid #f1f1f1;

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

        .content-tag {
          margin-right: .16rem;
        }
      }

      .content_highlight {
        margin: .08rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
      }
    }
  }
}
</style>
