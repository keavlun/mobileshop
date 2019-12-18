<template>
 <div id="home">
   <nav-bar class="home-navbar">
    <div slot="center">购物街</div>
   </nav-bar>
<h3>首页</h3>
 </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

 export default {
   data () {
     return {

     }
   },
   components: {
     NavBar
   }
 }
</script>

<style>
  .home-navbar{
    background-color: var(--color-tint);
    color: #ffffff;
    font-size: 22px
  }
 
</style>
