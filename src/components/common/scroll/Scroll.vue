<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  components: {},
  props:{
    probeType:{
      type: Number,
      defalut:1
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType:this.probeType
    });
    this.scroll.on('scroll',(position) => {
      console.log(position);
    })
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time);
    }
  }
};
</script>

<style>
</style>
