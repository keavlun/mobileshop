<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="goods-columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="serve">
      <span v-for="index in goods.services.length-1" :key="index" class="serve-item">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    goods: {
      type: Object,
      defalut() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  padding: 25px 10px;
  border-bottom: 5px solid rgba(100, 100, 100, 0.1);

}
.title {
  font-size: 17px;
  color: #222;
  margin-bottom: 5px;
}
.price {
  position: relative;
}
.newPrice {
  font-size: 26px;
  font-weight: 500;
  color: var(--color-high-text);
  padding-right: 5px;
}
.oldPrice {
  font-size: 12px;
  text-decoration: line-through;
  padding-right: 5px;
  color:#666;
}
.discount {
  display: inline-block;
  background-color: var(--color-tint);
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  position: absolute;
  bottom: 6px;
  padding: 1px 3px;
}
.goods-columns {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 25px 0 0 0;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  margin-bottom: 5px;
}
.serve {
  display: flex;
  justify-content: space-between;
}
.serve img {
  height: 14px;
  width: 14px;
  margin-right:3px ;
  vertical-align: middle;
}
.serve-item{
  padding-top: 20px;
  font-size: 14px;
  vertical-align: middle;
}
</style>
