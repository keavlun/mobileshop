<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <future-view/>


    
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FutureView from './childComps/FutureView'

import { getHomeMultidata } from "../../network/home";


export default {
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FutureView
  }
};
</script>

<style>
#home{
  padding-top: 44px;
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
</style>
