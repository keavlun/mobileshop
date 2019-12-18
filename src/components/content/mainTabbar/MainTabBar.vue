<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <i slot="item-icon" class="tab-bar-icon">&#xe619;</i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i slot="item-icon" class="tab-bar-icon">&#xe658;</i>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i slot="item-icon" class="tab-bar-icon">&#xe621;</i>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i slot="item-icon" class="tab-bar-icon">&#xe699;</i>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
