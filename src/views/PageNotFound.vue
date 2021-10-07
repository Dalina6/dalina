<template>
  <div class="page-not-found font-size-xl">404 | Not Found</div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: map-get($font_colors, "main");
  height: 100vh;
}
</style>