<template>
  <div class="logo-container">
    <img class="logo" src="../../../assets/logo_2.svg" />
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  width: 100%;
  .logo {
    object-fit: scale-down;
    @media (max-width: 300px) {
      width: 100%;
    }
  }
}
</style>