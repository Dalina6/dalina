<template>
  <div class="padding-container description holder">
    <div class="description-text">
      <div class="description-title font-size-lg">
        {{ $t("pages.aboutUs.description.title") }}
      </div>
      <br />
      <br />
      <div
        v-html="$t('pages.aboutUs.description.body')"
        class="description-body font-size-default"
      ></div>
    </div>
    <div class="logo-content"></div>
  </div>
</template>

<script>
export default {
  name: "DescriptionCard",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.description.holder {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  background: transparent linear-gradient(137deg, #00c2e7 0%, #ebfcff 100%) 0%
    0% no-repeat padding-box;

  opacity: 1;
  padding-top: 15%;
  padding-bottom: 15%;
  margin-bottom: 150px;

  @media (max-width: 900px) {
    background: transparent
      linear-gradient(
        128deg,
        map-get($colors, "blue") 40%,
        map-get($colors, "primary") 140%
      )
      0% 0% no-repeat padding-box;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  .logo-content {
    background: transparent url("../../../assets/about_us_card.svg") 0% 0%
      no-repeat padding-box;
    position: absolute;
    background-size: cover;
    width: 100%;
    top: 0;
    bottom: 0;
    right: -50%;
  }

  .description-text {
    display: flex;
    word-break: break-word;
    flex-direction: column;
    max-width: 50%;
    padding: 0 70px;

    text-align: start;
    @media (max-width: 900px) {
      max-width: 100%;
      text-align: center;
      padding: 0;
    }
    .description-title {
      font-weight: 800;
      color: map-get($colors, "white");
    }
    .description-body {
      font-weight: 700;
      color: map-get($colors, "white");
    }
  }
}
</style>