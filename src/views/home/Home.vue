<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="topShow" 
            :pull-up-load="true" 
            @pullingUp="loadMore">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <future-view />
      <tab-control :titles="['流行','新款','精选']" class="tab-bar" @tabClick="tabClick" />
      <goods-list :goods="togglelist" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FutureView from "./childComps/FutureView";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/common/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "../../network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodstype: "pop",
      isShow: null
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodstype = "pop";
          break;
        case 1:
          this.goodstype = "new";
          break;
        case 2:
          this.goodstype = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    topShow(position) {
      this.isShow = (-position.y) > 1000;
    },
    loadMore(){
      console.log('123123');
      this.getHomeGoods(this.goodstype)
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FutureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    togglelist() {
      return this.goods[this.goodstype].list;
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
}
.home-navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #ffffff;
  font-size: 22px;
}
.tab-bar {
  position: sticky;
  top: 44px;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
}
</style>
