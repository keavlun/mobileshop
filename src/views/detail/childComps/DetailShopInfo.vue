<template>
  <div class="shop-info">
    <div class="logo">
      <img :src="shop.logo" alt />
      <div class="logo-name">{{shop.name}}</div>
    </div>
    <div>
      <div class="shop-info-main">
        <div class="shop-nums">
          <div class="total-nums">{{shop.sells | sellCountFilter}}</div>
          <div class="total-nums-text">总销量</div>
        </div>
        <div class="allgoods">
          <div class="all-shop">{{shop.goodsCount}}</div>
          <div class="all-shop-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-score">
        <ul>
          <li v-for="(item, index) in shop.score" :key="index">
            <span class="title">{{item.name}}</span>
            <span class="score">{{item.score}}</span>
            <span class="toggle" :class="{bgColor: item.isBetter}">{{item.isBetter ? '高': '低'}}</span>
          </li>
        </ul>
        <div class="more">进店逛逛</div>
      </div>
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
    shop: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    sellCountFilter(value) {
      const sells = value / 10000;
      return sells.toFixed(1) + "万";
    }
  }
};
</script >

<style scoped>
.shop-info {
  padding: 25px 10px 75px 10px;
  border-bottom: 5px solid rgba(100, 100, 100, 0.1);
  position: relative;
  background-color: #fff;
}

.logo img {
  width: 60px;
  height: 60px;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid rgba(100, 100, 100, 0.1);
  vertical-align: middle;
  margin-right: 10px;
}

.logo-name {
  display: inline-block;
  vertical-align: middle;
}

.shop-info-main {
  display: inline-block;
  width: 50%;
  vertical-align: baseline;
}

.shop-nums {
  display: inline-block;
  text-align: center;
  padding: 0 23px;
}

.total-nums {
  font-size: 26px;
  margin-bottom: 20px;
}

.total-nums-text {
  font-size: 14px;
  margin-bottom: 10px;
}

.allgoods {
  display: inline-block;
  text-align: center;
}

.all-shop {
  font-size: 26px;
  margin-bottom: 20px;
}

.all-shop-text {
  font-size: 14px;
}

.shop-score {
  display: inline-block;
  width: 50%;
  border-left: 1px solid #999;
}
.shop-score ul {
  list-style: none;
  padding-left: 20px;
  padding-right: 10px;
}
.shop-score ul li {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}
.shop-score span {
  display: inline-block;
}
.toggle {
  display: block;
  background-color: #1b9d6d;
  color: white;
  padding: 1px;
}

.bgColor {
  background-color: var(--color-tint);
}

.more {
  position: absolute;
  background-color: #999;
  text-align: center;
  line-height: 30px;
  width: 170px;
  transform: translateX(-50%);
  left: 50%;
  margin-top: 10px;
  border-radius: 15px;
  color: #ffffff;
}
</style>
