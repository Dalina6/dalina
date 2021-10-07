<template>
  <div class="wrapper-content">
    <div class="half-div">
      <slot name="first-half"> </slot>
    </div>
    <div class="half-div">
      <slot name="second-half"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WrapperContent",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.wrapper-content {
  display: flex;
  .half-div {
    width: 50%;
    min-width: 50%;
    float: left;
    clear: both;
    display: inline-block;

    &:nth-child(even) {
      margin-left: 40px;
      margin-top: 80px;
    }
    @media (max-width: 900px) {
      width: 100%;
      &:nth-child(even) {
        margin-left: 0px;
      }
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
}
</style>