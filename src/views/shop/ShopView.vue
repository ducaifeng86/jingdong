<template>
  <div class="wrapper">
    <div class="search">
      <i class="search__back iconfont" @click="handleBack">&#xe679;</i>
      <div class="search__content">
        <i class="search__content__icon iconfont">&#xe6e1;</i>
        <input class="search__content__input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <ShopInfo :item="data.item" hideBorder="true" v-show="data.item.imgUrl"/>
    <div class="content">
      <ul class="content__category">
        <li class="content__category__item content__category__item--active">分类1</li>
        <li class="content__category__item">分类1</li>
        <li class="content__category__item">分类1</li>
      </ul>
      <ul class="content__product">
        <li class="product__item">
          <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" />
          <div class="product__item__desc">
            <h4>番茄奖3459</h4>
            <p>月售10件</p>
            <div class="item__sale">
              <span class="item__yen">&yen;</span>34
              <span class="item__origin">&yen;99</span>
            </div>
          </div>
          <div class="product__number">
            <span class="product__number__minus">-</span>
            88
            <span class="product__number__plus">+</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

// 请求商品详情
const useGetDataEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  return {
    data,
    getData
  }
}
// 处理返回
const handleBackEffect = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return {
    handleBack
  }
}
export default {
  name: 'ShopView',
  components: {
    ShopInfo
  },
  setup () {
    const { data, getData } = useGetDataEffect()
    const { handleBack } = handleBackEffect()
    getData()
    return {
      data,
      handleBack
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
  .wrapper{
    margin:0 .18rem;
  }
  .search {
    display: flex;
    margin: .2rem 0 .02rem 0;
    line-height: .32rem;

    &__back {
      margin-right: .06rem;
      font-size: .24rem;
      color: #B6B6B6;
    }

    &__content {
      flex: 1;
      display: flex;
      background: $search-bgColor;
      border-radius: .16rem;

      &__icon {
        margin: 0 .14rem 0 .12rem;
        font-size: .24rem;
        color: $search-fontColor;
      }

      &__input {
        @include input;
        font-size: .14rem;
        color: $content-fontcolor;

        &::placeholder {
          color: $content-fontcolor;
        }
      }
    }
  }
  .content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;

    &__category {
      overflow-y: scroll;
      height: 100%;
      width: .76rem;
      background: $search-bgColor;

      &__item {
        line-height: .4rem;
        text-align: center;
        font-size: .14rem;
        color: #333;

        &--active {
          background: $bgColor;
        }
      }
    }

    .content__product {
      margin: 0 .16rem;
      padding: .12rem 0;
      flex: 1;
      overflow-y: scroll;

      .product__item {
        display: flex;
        justify-content: space-between;

        &__img {
          margin-right: .16rem;
          width: .68rem;
          height: .68rem;
        }

        &__desc {
          flex: 1;

          h4 {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipsis;
          }

          p {
            margin: .06rem 0;
            font-size: .12rem;
            color: $content-fontcolor;
          }

          .item__sale {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $hightlight-fontColor;
          }

          .item__yen {
            font-size: .12rem;
          }

          .item__origin {
            margin-left: .06rem;
            line-height: .2rem;
            font-size: .12rem;
            color: $light-fontColor;
            text-decoration: line-through;
          }
        }

        .product__number {
          align-self: flex-end;

          .product__number__minus {
            color: $medium-fontColor;
            margin-right: .05rem;
          }

          &__plus {
            color: $btn-bgColor;
            margin-left: .05rem;
          }
        }
      }
    }
  }
</style>
