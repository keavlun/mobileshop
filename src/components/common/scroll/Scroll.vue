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
  props: {
    probeType: {
      type: Number,
      defalut: 1
    },
    pullUpLoad: {
      type: Boolean,
      defalut: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    })

    this.scroll.on('pullingUp', () => {
      // console.log('123');
      this.$emit('pullingUp')
    })
  },

  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  }
};
</script>

<style>
</style>
