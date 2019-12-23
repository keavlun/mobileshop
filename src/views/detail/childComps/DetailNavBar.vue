<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <i class="back">&#xe60a;</i>
      </div>
      <div slot="center">
        <ul class="title">
          <li v-for="(item, index) in title" 
              :key="index" 
              :class="{active: index === currentIndex}"
              @click="titleClick(index)">
              {{item}}
          </li>
        </ul>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
.title {
  display: flex;
  padding: 0 50px;
}
.title li {
  flex: 1;
  font-size: 16px;
}
.active{
  color: var(--color-high-text);
}
.back{
  font-family: 'iconfont'; 
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
}
</style>