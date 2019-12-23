<template>
 <div>
   <swiper class="inswiper">
     <swiper-item v-for="(item, index) in topImages" :key="index">
       <img :src="item" alt="">
     </swiper-item>
   </swiper>
 </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper'

 export default {
   data () {
     return {

     }
   },
   components: {
     Swiper,SwiperItem
   },
   props: {
     topImages: {
       type: Array,
       default(){
         return []
       }
     },
   },
 }
</script>

<style>
.inswiper{
  height: 300px;
  overflow: hidden;
}
 
</style>
