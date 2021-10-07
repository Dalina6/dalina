<template>
  <div class="services-container margin-container">
    <div class="title font-size-xl">
      Bring the power of creativity <span>to the world’s businesses.</span>
    </div>
    <div class="description font-size-md">
      In nulla mi, interdum nec purus id, mattis semper eros.
      <span>Mi, interdum nec purus id, mattis semper eros.</span>
    </div>
    <div class="ourservices">
      <div class="firstrow">
        <div class="uxdesign"></div>
        <div class="webdesign"></div>
        <div class="marketing"></div>
      </div>
      <div class="secondrow">
        <div class="uxdesign"></div>
        <div class="webdesign"></div>
        <div class="marketing"></div>
      </div>
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
.services-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .title {
    color: map-get($font_colors, "main");
    font-weight: 500;
    span {
      display: flex;
      justify-content: center;
    }
    @media (max-width: 900px) {
      line-height: 1;
    }
  }
  .description {
    color: map-get($font_colors, "secondary");
    font-weight: 800;
    span {
      display: flex;
      justify-content: center;
    }
  }
  
}
</style>