<template>
  <div v-if="error == null" class="overall container">
    <div class="main-container">
      <div class="project-main padding-container">
        <div class="title font-size-xxl">
          {{ project.title }}
        </div>
        <div class="sub-title font-size-default">
          {{ project.subTitle }}
        </div>
        <div v-if="month != null" class="created-at font-size-default">
          <div class="day">{{ day }}</div>
          <div class="month">
            {{ $t("pages.project.months." + month) }}
          </div>
          <div class="year">{{ year }}</div>
        </div>
        <div class="download-btn">
          <a target="_blank" :href="project.pdf" download="pdf">
            <vue-button class="flex padding font-size-sm">
              {{ $t("pages.services.download.button.pdf") }}
              <img class="btn-img" src="../assets/icons/download-icon.svg" />
            </vue-button>
          </a>
        </div>
      </div>
    </div>
    <div class="lower-container margin-container">
      <div class="photo-holder acqua-marine margin-container-top">
        <img class="photo" :src="project.photo" />
      </div>
      <div class="project-description padding-only-bottom">
        <div class="overview font-size-big">
          {{ $t("pages.project.overview") }}
        </div>
        <div class="description font-size-default">
          {{ project.description }}
        </div>
      </div>
      <div v-if="project.images.length >= 2" class="first-two-pictures">
        <div class="mint holder">
          <img :src="project.images[0].preview" />
        </div>
        <div class="gray holder">
          <img :src="project.images[1].preview" />
        </div>
      </div>
      <card class="card-description padding-container"
        ><div class="text font-size-big">
          {{ $t("pages.project.description") }}
        </div></card
      >
      <div
        v-if="project.images_2.length >= 2"
        class="first-two-pictures bottom"
      >
        <div class="gray holder">
          <img :src="project.images_2[0].preview" />
        </div>
        <div class="acqua-marine holder">
          <img :src="project.images_2[1].preview" />
        </div>
      </div>
      <div class="want-to-see-more">
        <div class="text font-size-md">{{ $t("pages.project.see-more") }}</div>
        <div class="ios-android font-size-default">IOS Android</div>
      </div>
      <div class="photo-holder mint">
        <img class="photo" :src="project_next.photo" />
      </div>
      <div class="content-holder">
        <div class="shares font-size-default">
          <div class="share">{{ $t("pages.project.share") }}</div>
          <a> <div class="social">LinkedIn,</div></a>
          <a> <div class="social">Twitter,</div></a>
          <a> <div class="social">Facebook</div></a>
        </div>
        <router-link
          v-if="project_next.id != null"
          :to="'/projects/' + project_next.id"
        >
          <vue-button
            @buttonClick="updateContent"
            class="flex padding font-size-sm"
          >
            {{ $t("pages.project.next") }}
            <img class="btn-img" src="../assets/icons/button_next.svg" />
          </vue-button>
        </router-link>
      </div>
    </div>
    <footer-vue>
      <card class="margin-container"><home-card></home-card></card
    ></footer-vue>
  </div>
  <div v-else>
    <page-not-found></page-not-found>
  </div>
</template>
<script>
import VueButton from "../components/includes/parts/VueButton.vue";
import axios from "axios";
import FooterVue from "../components/FooterVue.vue";
import Card from "../components/includes/footer/Card.vue";
import HomeCard from "../components/includes/footer/includes/HomeCard.vue";
import PageNotFound from "./PageNotFound.vue";
export default {
  components: { VueButton, FooterVue, Card, HomeCard,PageNotFound },
  data() {
    return {
      id: this.$route.params.id,
      error: null,
      month: null,
      day: null,
      year: null,
      project: {
        title: null,
        subTitle: null,
        pdf: null,
        photo: null,
        images: [],
        images_2: [],
        description: null,
        createdAt: null,
      },
      project_next: {
        id: null,
        title: null,
        subTitle: null,
        pdf: null,
        photo: null,
        images: [],
        images_2: [],
        description: null,
        createdAt: null,
      },
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
  methods: {
    postGet() {
      axios
        .get(
          process.env.VUE_APP_BASE_URL + "/post?type=projects&id=" + this.id,
          {
            headers: { "Content-Language": this.$i18n.locale },
          }
        )
        .then((response) => {
          this.id = response.data.data.id;
          this.project.title = response.data.data.title;
          this.project.subTitle = response.data.data.sub_title;
          this.project.description = response.data.data.description;
          this.project.createdAt = new Date(response.data.data.created_at);
          this.month = this.project.createdAt.getMonth();
          this.day = this.project.createdAt.getDate();
          this.year = this.project.createdAt.getFullYear();
          if (response.data.data.photo != null) {
            this.project.photo = response.data.data.photo.cover;
          }
          if (response.data.data.images.length > 0) {
            this.project.images = response.data.data.images;
          }
          if (response.data.data.images.length > 0) {
            this.project.images_2 = response.data.data.images_2;
          }
          if (response.data.data.pdf != null) {
            this.project.pdf = response.data.data.pdf.url;
          }
          return axios
            .get(
              process.env.VUE_APP_BASE_URL +
                "/post/getNext?type=projects&id=" +
                this.id,
              {
                headers: { "Content-Language": localStorage.getItem("lange") },
              }
            )
            .then((response) => {
              return response.data.data;
            })
            .catch((error) => {
              console.log(error);
              this.error = error;
            });
        })
        .then((final_response) => {
          this.project_next.title = final_response.title;
          this.project_next.id = final_response.id;
          this.project_next.subTitle = final_response.sub_title;
          this.project_next.description = final_response.description;
          this.project_next.createdAt = new Date(final_response.created_at);
          if (final_response.photo != null) {
            this.project_next.photo = final_response.photo.cover;
          }
          if (final_response.images.length > 0) {
            this.project_next.images = final_response.images;
          }
          if (final_response.images.length > 0) {
            this.project_next.images_2 = final_response.images_2;
          }
          if (final_response.pdf != null) {
            this.project_next.pdf = final_response.pdf.url;
          }
          console.log(final_response);
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
    updateContent() {
      console.log("here");
    },
  },
  watch: {
    getPost: {
      immediate: true,
      handler() {
        this.postGet();
      },
    },
    "$i18n.locale": function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.postGet();
      }
    },
    "$route.params": function (newVal, oldVal) {
      if (newVal != oldVal) {
        window.scrollTo(0, 0);
        this.postGet();
      }
    },
  },
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.project-main {
  word-break: break-word;
  height: 50%;
  min-height: 60vh;
  background-color: map-get($colors, "white");
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  @media (max-width: 400px) {
    padding: 0;
    padding-top: 100px;
  }
  padding-top: 100px;
  row-gap: 30px;
  flex-direction: column;
  .title {
    color: map-get($font_colors, "main");
    font-weight: 300;
  }
  .sub-title {
    color: map-get($font_colors, "secondary");
    font-weight: 800;
  }
  .created-at {
    color: map-get($font_colors, "secondary");
    font-weight: 800;
    opacity: 0.6;
    display: flex;
    column-gap: 5px;
  }
  .download-btn {
    z-index: 25;
    .btn-img {
      object-fit: scale-down;
    }
  }
}
.lower-container {
  .photo-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    .photo {
      width: 35vw;
      max-width: 100%;
      object-fit: cover;
      padding: 70px 0px;
    }
  }
  .project-description {
    word-break: break-word;
    text-align: start;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
      row-gap: 40px;
    }
    color: map-get($font_colors, "main");
    .overview {
      font-weight: 800;
    }
    .description {
      font-weight: 700;
    }
  }
  .first-two-pictures {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 15px;
    }
    margin-bottom: 15px;
    &.bottom {
      margin-top: 15px;
    }
    .holder {
      padding: 10%;
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
  }
  .card-description {
    display: flex;
    align-items: center;
    .text {
      word-break: break-word;
      text-align: start;
      padding: 20% 0;
      color: map-get($colors, "white");
      font-weight: 900;
      max-width: 75%;
      @media (max-width: 900px) {
        max-width: 100%;
      }
    }
  }
  .want-to-see-more {
    word-break: break-word;
    padding: 200px 35%;
    @media (max-width: 900px) {
      padding: 100px 20%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
    font-weight: 700;
    .text {
      color: map-get($font_colors, "main");
    }
    .ios-android {
      color: map-get($font_colors, "secondary");
      opacity: 0.3;
    }
  }
  .content-holder {
    padding-top: 40px;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      row-gap: 40px;
    }
    .shares {
      color: map-get($font_colors, "main");
      font-weight: 700;
      display: flex;
      column-gap: 15px;
      .social {
        text-decoration: underline;
      }
    }
  }
}
.acqua-marine {
  background: transparent linear-gradient(147deg, #00C2E7 0%, #EBFCFF 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
}
.mint {
  background: transparent linear-gradient(145deg, #00DBBD 0%, #FFFFFF 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
}
.gray {
  background: transparent linear-gradient(148deg, #C3C6C5 0%, #E7FCE6 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
}
</style>