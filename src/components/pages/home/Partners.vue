<template>
  <div class="containers">
    <div class="margin-container partners-container">
      <div class="title break-word font-size-xl">
        Join thousands of businesses
        <span> who are growing their clients.</span>
      </div>
      <div class="second-title break-word font-size-xl">
        Bring the power of creativity <span>to the world’s businesses.</span>
      </div>
      <div class="description break-word font-size-md">
        In nulla mi, interdum nec purus id, mattis semper eros.
        <span> Mi, interdum nec purus id, mattis semper eros.</span>
      </div>
      <div class="margin-container partners-logo">
        <div class="logo-column1">
          <div class="logo"><img src="../../../assets/css-3.svg" alt="" /></div>
          <div class="logo">
            <img src="../../../assets/html-5.svg" alt="" />
          </div>
          <div class="logo">
            <img src="../../../assets/outlook.svg" alt="" />
          </div>
          <div class="logo"><img src="../../../assets/slack.svg" alt="" /></div>
        </div>
        <div class="logo-column2">
          <div class="logo">
            <img src="../../../assets/tripadvisor.svg" alt="" />
          </div>
          <div class="logo">
            <img src="../../../assets/wechat.svg" alt="" />
          </div>
          <div class="logo"><img src="../../../assets/css.svg" alt="" /></div>
          <div class="logo">
            <img src="../../../assets/slack1.svg" alt="" />
          </div>
        </div>
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
.containers {
  border-top: 1px solid #d8d8d8;
  @media (max-width: 900px) {
    border-top: 0;
  }
  .partners-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 70px 0;
    @media (max-width: 900px) {
      border: none;
      padding: 40px 0;
    }
    .title {
      color: map-get($font_colors, "main");
      font-weight: 500;
      span {
        display: flex;
        justify-content: center;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    .second-title {
      color: map-get($font_colors, "main");
      font-weight: 500;
      line-height: 1;
      span {
        display: flex;
        justify-content: center;
      }
      @media (min-width: 900px) {
        display: none;
      }
    }

    .description {
      letter-spacing: 0px;
      color: map-get($font_colors, "secondary");
      font-weight: 800;
      span {
        display: flex;
        justify-content: center;
      }
    }

    .partners-logo {
      padding-top: 100px;
      width: 100%;
      column-gap: 60px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      @media (max-width: 900px) {
        flex-direction: column;
        row-gap: 10%;
      }
      .logo-column1,
      .logo-column2 {
        column-gap: 25px;
        width: 75%;
        display: flex;
        @media (max-width: 300px) {
          width: 75%;
        }
        justify-content: space-around;
        .logo {
          width: 100%;
          height: 100px;
          padding: 4px;
          img {
            object-fit: scale-down;
            width: 100%;
            height: 100px;
          }
        }
      }
    }
  }
}
</style>