<template>
 <div id="detail">
   <detail-nav-bar></detail-nav-bar>
  <detail-swiper :top-images="topImages"></detail-swiper>
 </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper'

import {getDetail, Goods} from '../../network/detail'

 export default {
   name:'Detail',
   data () {
     return {
       iid:null,
       topImages:null,
       goods: {}
     }
   },
   components: {
     DetailNavBar,
     DetailSwiper
   },
   created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = res.result.itemInfo.topImages
      console.log(res);
      this.goods = new Goods(data.itemInfo,data.columns, data.services)
    })
   }
 }
</script>

<style>

 
</style>
