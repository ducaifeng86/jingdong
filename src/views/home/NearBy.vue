<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :to="`/shop/${item._id}`"
      :key="item._id">
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
import { get } from '../../utils/request.js'

// 请求店铺数据
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return {
    nearbyList,
    getNearbyList
  }
}
// 店铺跳到店铺详情
const useLoginEffect = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push({
      name: 'shop'
    })
  }
  return {
    handleClick
  }
}
export default {
  name: 'NearBy',
  components: {
    ShopInfo
  },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    const { handleClick } = useLoginEffect()
    getNearbyList()
    return {
      nearbyList,
      handleClick
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: .14rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a{
      text-decoration:none;
  }
}
</style>
