<template>
  <router-link class="router-link" :to="'/services/' + id">
    <div class="service-card">
      <div class="image container">
        <img :src="src" />
      </div>
      <div class="service-text">
        <div class="service-title font-size-big">{{ title }}</div>
        <div class="service-subtitle font-size-sm">{{ subTitle }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    src: String,
    title: String,
    subTitle: String,
    id: Number,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.router-link {
  background: transparent
    linear-gradient(
      139deg,
      rgb(16, 82, 239, 0.1) 0%,
      rgb(255, 255, 255, 0.1) 100%
    )
    0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .service-card {
    background: transparent
      linear-gradient(
        139deg,
        rgb(16, 82, 239, 0.1) 0%,
        rgb(255, 255, 255, 0.1) 100%
      )
      0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .image.container {
      max-width: 50%;
      align-self: flex-end;
      img {
        max-width: 100%;
        object-fit: cover;
      }
      padding: 0;
    }
    .service-text {
      text-align: start;
      word-break: break-word;
      .service-title {
        color: map-get($font_colors, "blue");
        font-weight: 300;
        width: 100%;
      }
      .service-subtitle {
        color: map-get($font_colors, "secondary");
        font-weight: 700;
      }
    }
    padding-bottom: 40px;
    padding-left: 40px;
    &.margin-seperator {
      margin-bottom: 35px;
    }
  }
  &.margin-seperator {
    margin-bottom: 35px;
  }
}
</style>