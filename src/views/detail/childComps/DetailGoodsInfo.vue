<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">
      <div class="start"><div class="space"></div></div>
      <div class="main-desc">{{detailInfo.desc}}</div>
      <div class="end"><div class="space"></div></div>
    </div>
    <div class="title">{{detailInfo.detailImage[0].key}}</div>
    <img :src="item" alt="" v-for="(item, index) in detailInfo.detailImage[0].list " 
    :key="index" @load="imgLoad">
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter:0,
      imagesLength:0
    };
  },
  components: {},
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    imgLoad(){
      if(++this.counter === this.imagesLength) {
        this.$emit('imagesLoad')
      }
    }
  },
  watch: {
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
.detail-goods-info{
  padding: 20px 15px;
}

.start{
  width: 180px;
  height: 5px;
  border-bottom: 1px solid #000;
}
.space{
  width: 5px;
  height: 100%;
  background-color: #000;
}
.main-desc{
  padding: 20px 0;
  font-size: 14px;
  color: #666
}
.end{
  float: right;
  width: 180px;
  height: 5px;
  border-bottom: 1px solid #000;
}
.end .space{
  float: right;
}
.detail-goods-info img{
  width: 100%;
}
</style>
  