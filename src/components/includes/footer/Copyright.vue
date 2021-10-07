
<template>
  <div class="padding-container rights">
    <hr class="line" />
    <div class="copyrights font-size-sm font-weight-bold">
      2021 © StreamUp. <span>{{ $t("footer.copyright.rights") }}</span>
    </div>
    <div class="terms font-size-sm">Terms & Conditions / Privacy Policy</div>
    <slot> </slot>
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
.rights {
  .line {
    border: 1px solid rgb(112, 112, 112, 0.2);
    width: 100%;
    height: 0px;
    margin-bottom: 25px;
  }
  padding-bottom: 25px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .copyrights {
    font-family: map-get($font, "default");
    color: map-get($font_colors, "main");
    opacity: 1;
    letter-spacing: -0.23px;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }
  .terms {
    font-family: map-get($font, "default");
    color: map-get($font_colors, "main");
    opacity: 0.4;
    font-weight: 600;
    letter-spacing: -0.22px;
    text-align: left;
  }
}
</style>