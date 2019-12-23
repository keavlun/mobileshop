<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="topShow"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <future-view />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
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
import { debounce } from "../../common/utils";

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
      isShow: null,
      tabOffsetTop: 0,
      isTabFixed: false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
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

        this.$refs.scroll.finishPullUp();
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    topShow(position) {
      this.isShow = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabOffsetTop+44;
    },
    loadMore() {
      this.getHomeGoods(this.goodstype);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
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
  height: 100vh;
}
.home-navbar {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: var(--color-tint) ;
  color: #ffffff;
  font-size: 22px;
  /* margin-bottom: 44px; */
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
  
}
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
   } */
.tab-control {
  position: relative;
  /* top: 44px; */
  z-index: 10;
}
</style>
