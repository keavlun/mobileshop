<template>
  <div class="recommend">
    <ul>
      <li v-for="(item, index) in recommends" :key="index" class="item">
        <a :href="item.link">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend{
  text-align: center;
  padding: 10px 0 30px;
  border-bottom: 8px solid #eee
}
.recommend ul {
  display: flex;
  width: 100%;
}
.recommend ul li {
  flex: 1;
  list-style: none;
}
.recommend ul li img {
  width: 70px;
  height: 70px;
}
</style>
