<template>
  <div class="padding-container main-body">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "MainBody",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-body {
  height: 100%;
}
</style>