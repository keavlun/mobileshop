<template>
  <div class="goods">
  <goods-list-item 
  v-for="(item, index) in goods" 
  :key="index" 
  :goodslistitem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  data() {
    return {};
  },
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
</style>
