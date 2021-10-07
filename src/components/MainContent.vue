<template>
  <div class="main-content">
    <div class="mid-logo"></div>
    <div v-bind="$attrs" class="container">
      <div class="background-container">
        <div class="background-circle"></div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="text-wrapper">
        <div class="text-container">
          <div class="title font-size-xxl" :class="color">{{ title }}</div>
          <div class="text font-size-md">{{ text }}</div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  props: ["title", "text", "color"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
  .container {
    // overflow-y: hidden;
    z-index: 1;
    // display: inline-flex;
    position: absolute;
    right: 0;
    top: 0;
    width: 75%;
    @media (max-width: 900px) {
      width: 100%;
    }
    height: 100%;
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &.left {
      left: 0;
      .background-container {
        left: 0;
        @media (max-width: 900px) {
          // width: 100%;
          left: auto;
        }
        .background-circle {
          left: 0;
          @media (max-width: 900px) {
            // width: 100%;
            left: auto;
          }
        }
      }
      @media (max-width: 900px) {
        // width: 100%;
        left: auto;
      }
    }
    .background-container {
      // display: inline-flex;
      // background-color: red;
      box-sizing: border-box;
      position: absolute;
      width: 80%;
      padding-top: 56.25%; /* 3:2 Aspect Ratio */
      @media (max-width: 900px) {
        padding-top: 100%; /* 3:2 Aspect Ratio */
        right: 0;
      }
      .background-circle {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 70px;
        @media (max-width: 900px) {
          width: 100%;
          right: 0;
        }
        width: 75%;
        height: 100%;
        border-radius: 50%;
        background: transparent
          linear-gradient(
            180deg,
            map-get($colors, "linear-gradient-first") 0%,
            map-get($colors, "linear-gradient-second") 60%
          )
          0% 0% no-repeat padding-box;
        opacity: 0.7;
        filter: blur(40px);
      }
    }
  }

  .content-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    .text-wrapper {
      padding-top: 150px;
      // top: 20%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      @media (max-width: 900px) {
        flex-grow: unset;
      }
      .text-container {
        // padding-top: 100px;
        @media (max-width: 900px) {
          word-break: break-word;
        }
        // display: flex;
        // flex-wrap: wrap;
        z-index: 3;

        // position: absolute;
        width: 80%;
        top: 20%;
        @media (max-width: 900px) {
          width: 100%;
        }
        .title {
          font-weight: 300;
          color: map-get($font_colors, "main");
          &.blue {
            @media (max-width: 900px) {
              color: map-get($font_colors, "blue");
            }
          }
        }
        .text {
          color: map-get($font_colors, "secondary");
          font-weight: 700;
        }
      }
    }
  }

  .mid-logo {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 90%;
    @media (max-width: 900px) {
      height: 50%;
      top: 25%;
    }
    background-image: url("../assets/white_logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
  }
}
</style>