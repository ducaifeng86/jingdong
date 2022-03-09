<template>
  <section class="wrapper">
    <StaticPart />
    <NearBy />
  </section>
  <TabbarNav />
</template>

<script>
import StaticPart from './StaticPart'
import NearBy from './NearBy'
import TabbarNav from './TabbarNav'
export default {
  name: 'HomeView',
  components: {
    StaticPart,
    NearBy,
    TabbarNav
  }
}
</script>
<style lang="scss">
  .wrapper {
    overflow-y:scroll;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: .49rem;
    padding: 0 .18rem 0.13rem .18rem;
   }
</style>
