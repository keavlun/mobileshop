<template>
  <div class="back-top">
    <i class="back-top-icon">&#xe665;</i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 15px;
  bottom: 70px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 3px solid var(--color-high-text);
  margin: 0;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .7);
}
.back-top-icon{
  font-family: 'iconfont';
  display: block;
  font-style: normal;
  color: var(--color-high-text);
  font-size: 30px;
  position: absolute;
  top: 6px;
  right: 6px;

}
</style>
