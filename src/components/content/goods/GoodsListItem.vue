<template>
  <div class="goods-item">
    <img :src="goodslistitem.show.img" alt />
    <div class="goods-des">
      <p>{{goodslistitem.title}}</p>
      <span class="price">{{goodslistitem.orgPrice}}</span>
      <i class='stars'>&#xe622;</i>
      <span>{{goodslistitem.cfav}}</span>
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
    goodslistitem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.goods-item{
  text-align: center;
  width: 48%;
  /* height: 100%; */
  margin: 5px 0;
  /* position: relative; */
}
.goods-des{
  width: 100%;
}
/* .goods-des{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0; 
 } */
.goods-item img {
  display: block;
  border-radius: 20px;
  width: 100%;
  padding: 10px;
}
.goods-des p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.price{
  color: var(--color-high-text)
}
.stars{
  font-family: 'iconfont'; 
  font-style: normal;
  display: inline-block;
  padding: 0 0 0 8px;
}
</style>
