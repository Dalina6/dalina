<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: transparent
    linear-gradient(
      128deg,
      map-get($colors, "blue") 40%,
      map-get($colors, "primary") 140%
    )
    0% 0% no-repeat padding-box;
  position: relative;
}
</style>