<template>
 <div class="tab-control">
   <div v-for="(item,index) in titles" :key="index" 
   class="tab-control-item" 
   :class="{active:index ===currentIndex}"
   @click="tabClick(index)">
     <span>{{item}}</span>
   </div>
 </div>
</template>

<script>
 export default { 
   data () {
     return {
       currentIndex :0
     }
   },
   components: {

   },
   props:{
     titles:{
       type:Array,
       default(){
         return []
       }
     }
   },
   methods:{
     tabClick(index){
       this.currentIndex = index
     }
   }
 }
</script>

<style>
.tab-control{
  width: 100%;
  display: flex;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex:1;
}
.active{
  color:var(--color-high-text);
}
.active span{
  padding: 5px 7px;
  border-bottom: 3px solid var(--color-tint);
}
 
</style>
