<template>
  <div class="button">
    <button @click="$emit('buttonClick')" class="home-button" v-bind="$attrs">
      <slot> </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "VueButton",
  emits: ["buttonClick"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  // position: absolute;
  // bottom: 10%;
  // left: 0;
  // right: 0;
  &.flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-button {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
    cursor: pointer;
    background-color: map-get($colors, "blue");
    border: none;
    color: map-get($font_colors, "button-color");
    font-weight: 500;
    padding: 20px 50px;
    @media (max-width: 400px) {
      padding: 10px 25px;
    }
    @media (max-width: 200px) {
      padding: 0;
    }
  }
  z-index: 25;
  padding-bottom: 100px;
  @media (max-width: 900px) {
    padding-bottom: 0;
  }
  &.padding {
    padding-bottom: 35px;
  }
}
</style>