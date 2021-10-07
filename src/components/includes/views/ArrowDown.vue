<template>
  <div class="arrow-holder">
    <div @click="scrollDown" class="arrow-down"></div>
  </div>
</template>

<script>
export default {
  name: "ArrowDown",
  data() {
    return {
      pageHeight: null,
    };
  },
  mounted() {
    if (window.scrolling == true) {
      this.scrollDown();
      window.scrolling = false;
    }
  },
  methods: {
    scrollDown() {
      this.pageHeight = window.innerHeight;
      window.scrollBy({
        top: this.pageHeight,
        bottom: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow-holder {
  z-index: 35;
  padding-bottom: 30px;
  @media (max-width: 900px) {
    padding-bottom: 0;
    padding-top: 250px;
  }
  .arrow-down {
    content: "";
    background-image: url("../../../assets/icons/arrow_down_bold.svg");
    @media (max-width: 900px) {
      background-image: url("../../../assets/icons/arrow_down.svg");
    }
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
  }
}
</style>