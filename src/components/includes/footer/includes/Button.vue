<template>
  <button @click="$emit('theClick', $event)" class="btn font-size-md">
    <div class="btn-text">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
  emits: ["theClick"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  cursor: pointer;
  color: map-get($font_colors, "blue");
  letter-spacing: 1.5px;
  background-color: map-get($colors, "white");
  border: map-get($colors, "white");
  font-weight: 300;
  .btn-text {
    box-sizing: border-box;
    word-break: break-word;
    padding: 24px 70px;
    @media (max-width: 900px) {
      padding: 18px 50px;
    }
  }
}
</style>