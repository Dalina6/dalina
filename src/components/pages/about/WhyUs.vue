<template>
  <div class="why-us-holder padding-container">
    <div class="item-container">
      <div class="partner-text font-size-big">
        {{ $t("pages.aboutUs.why-us.whyUs") }}
      </div>
      <div
        v-html="$t('pages.aboutUs.why-us.text')"
        class="text-body font-size-default"
      ></div>
      <div class="partners">
        <div class="partner-logos">
          <div class="first-group">
            <div class="logo">
              <img src="../../../assets/tripadvisor.svg" alt="" />
            </div>
            <div class="logo">
              <img src="../../../assets/wechat.svg" alt="" />
            </div>
            <div class="logo">
              <img src="../../../assets/css.svg" alt="" />
            </div>
            <div class="logo">
              <img src="../../../assets/slack1.svg" alt="" />
            </div>
          </div>
          <div class="second-group">
            <div class="logo">
              <img src="../../../assets/css-3.svg" alt="" />
            </div>
            <div class="logo">
              <img src="../../../assets/html-5.svg" alt="" />
            </div>
            <div class="logo">
              <img src="../../../assets/outlook.svg" alt="" />
            </div>
            <div class="logo">
              <img src="../../../assets/slack.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUs",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.why-us-holder {
  box-sizing: content-box;
  margin-bottom: 150px;
  @media (max-width: 900px) {
    margin-bottom: 50px;
  }
  .item-container {
    display: grid;
    padding: 0 70px;
    grid-template-columns: 50% 50%;
    @media (max-width: 900px) {
      grid-template-columns: auto;
      row-gap: 40px;
      padding: 0;
    }
    .partner-text {
      text-align: start;
      font-weight: 800;
      color: map-get($font_colors, "main");
      @media (max-width: 900px) {
        text-align: center;
      }
    }
    .text-body {
      grid-row: span 2;
    }
    .partners {
      display: flex;
      flex-direction: column;
      text-align: start;
      @media (max-width: 900px) {
        text-align: center;
      }
      justify-content: space-between;
      width: 100%;

      .partner-logos {
        display: flex;
        flex-direction: column;
        @media (max-width: 900px) {
          justify-content: center;
          align-items: center;
        }
        .first-group {
          max-width: 100%;
          display: flex;
          .logo {
            max-width: 70px;
            max-height: 70px;
            padding-right: 5%;
            padding-bottom: 5%;
            img {
              height: 100%;
              width: 100%;
              object-fit: scale-down;
            }
          }
        }
        .second-group {
          max-width: 100%;
          display: flex;
          .logo {
            max-width: 70px;
            max-height: 70px;
            padding-right: 5%;
            img {
              height: 100%;
              width: 100%;
              object-fit: scale-down;
            }
          }
        }
      }
    }

    .text-body {
      text-align: start;
      font-weight: 700;
      color: map-get($font_colors, "main");
      @media (max-width: 900px) {
        text-align: center;
      }
    }
  }
}
</style>