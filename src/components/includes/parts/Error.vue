<template>
  <div class="errors">
    <div class="display">
      <slot> </slot>
    </div>
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
.errors {
  position: fixed;
  bottom: 40px;
  right: 20px;
  width: 100%;
  height: auto;
  .display {
    // max-width: 50%;
    padding: 2% 5%;
    flex-direction: column;
    row-gap: 40px;
    display: flex;
    flex-wrap: wrap;
    word-break: break-word;
    align-items: flex-end;
    justify-content: flex-end;
  }
}
</style>