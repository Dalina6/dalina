<template>
  <div class="project-card">
    <div class="text">
      <div class="title dotdotdot font-size-big">{{ title }}</div>
      <div class="sub-title font-size-sm">{{ subTitle }}</div>
    </div>
    <div class="container" v-bind="$attrs">
      <img class="image" :src="image" />
      <div class="description hover">
        <div class="description-text font-size-md">
          {{ description }}
        </div>
        <div class="button-container">
          <router-link :to="'/projects/' + id">
            <button class="btn-project">
              <div class="btn-text font-size-md">
                {{ $t("pages.projects.hover.button") }}
              </div>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    subTitle: String,
    image: String,
    description: String,
    id: Number,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;

  .text {
    text-align: start;
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      text-overflow: ellipsis;
      color: map-get($font_colors, "main");
      font-weight: 700;
    }
    .sub-title {
      color: map-get($font_colors, "secondary");
      font-weight: 800;
    }
  }
  .container {
    position: relative;

    .description.hover {
      position: absolute;
      right: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 50px;
      flex-grow: 1;
      width: 100%;
      height: 100%;
      .description-text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 500;
        color: map-get($colors, "white");
      }
      .button-container {
        .btn-project {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 100%;
          cursor: pointer;
          color: map-get($colors, "white");
          letter-spacing: 1.5px;
          background-color: map-get($font_colors, "main");
          border: map-get($colors, "white");
          font-weight: 300;
          .btn-text {
            box-sizing: border-box;
            word-break: break-word;
            padding: 24px 70px;
            @media (max-width: 900px) {
              padding: 18px 50px;
            }
            @media (max-width: 300px) {
              padding: 10px 25px;
              font-size: 35%;
            }
          }
        }
      }
      display: none;
    }
    &.want-hover:hover {
      .description.hover {
        display: flex;
        .description-text {
          word-break: break-word;
          max-width: 75%;
          @media (max-width: 300px) {
            max-width: 100%;
            font-size: 35%;
          }
        }
      }
      img {
        opacity: 0;
        transition: opacity 400ms;
      }
    }
    .image {
      max-width: 100%;
      object-fit: scale-down;
      padding: 70px 0;
      float: right;
    }
    &.acqua-marine {
      background: transparent linear-gradient(147deg, #00c2e7 0%, #ebfcff 100%)
        0% 0% no-repeat padding-box;
      opacity: 1;
    }
    &.mint {
      background: transparent linear-gradient(145deg, #00dbbd 0%, #ffffff 100%)
        0% 0% no-repeat padding-box;
      opacity: 1;
    }
    &.gray {
      background: transparent linear-gradient(148deg, #c3c6c5 0%, #e7fce6 100%)
        0% 0% no-repeat padding-box;
      opacity: 1;
    }
  }
  &.margin-seperator {
    margin-bottom: 75px;
  }
}
</style>