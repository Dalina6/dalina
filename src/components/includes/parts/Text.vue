<template>
  <div class="service-text">
    <div class="service title font-size-big">
      <slot name="title"> {{ $t("pages.home.service.title") }} </slot>
    </div>
    <div class="service sub-title font-size-default">
      <slot name="subtitle"> {{ $t("pages.home.service.subTitle") }} </slot>
    </div>
    <div class="service description font-size-sm">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Text",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.service-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.gap {
    row-gap: 50px;
    @media (max-width: 900px) {
      row-gap: 20px;
    }
  }
  padding: 0 25%;
  @media (max-width: 900px) {
    padding: 0 0;
    padding-top: 100px;
  }
  word-break: break-word;
  .service.title {
    color: map-get($font_colors, "main");
    font-weight: 500;
  }
  .service.sub-title {
    color: map-get($font_colors, "secondary");
    font-weight: 800;
  }
  .service.description {
    color: map-get($font_colors, "secondary");
    font-weight: 700;
    padding-bottom: 100px;
  }
}
</style>