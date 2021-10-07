<template>
  <div v-if="error == null" class="container">
    <main-content :title="service.title">
      <div class="download-btn">
        <a target="_blank" :href="service.pdf" download="pdf">
          <vue-button class="flex font-size-sm">
            {{ $t("pages.services.download.button.pdf") }}
            <img class="btn-img" src="../assets/icons/download-icon.svg" />
          </vue-button>
        </a>
      </div>
      <div class="bottom-scroll">
        <ArrowDown />
      </div>
    </main-content>
    <text-card class="gap">
      <template #title> {{ service.title }} </template>
      <template #subtitle>{{ service.subTitle }}</template>
      <template #description>{{ service.description }}</template>
    </text-card>
    <div class="description-holder">
      <div class="sub-title"></div>
      <div class="description"></div>
    </div>
    <footer-vue>
      <card class="margin-container"><home-card></home-card></card>
    </footer-vue>
  </div>
  <div v-else>
    <page-not-found></page-not-found>
  </div>
</template>

<script>
import MainContent from "../components/MainContent";
import ArrowDown from "../components/includes/views/ArrowDown.vue";
import VueButton from "../components/includes/parts/VueButton.vue";
import FooterVue from "../components/FooterVue.vue";
import Card from "../components/includes/footer/Card.vue";
import HomeCard from "../components/includes/footer/includes/HomeCard.vue";
import axios from "axios";
import TextCard from "../components/includes/parts/Text.vue";
import PageNotFound from "./PageNotFound.vue";

export default {
  components: {
    MainContent,
    FooterVue,
    Card,
    HomeCard,
    ArrowDown,
    TextCard,
    VueButton,
    PageNotFound,
  },
  data() {
    return {
      id: this.$route.params.id,
      error: null,
      service: {
        title: null,
        subTitle: null,
        description: null,
        pdf: null,
        categories: null,
      selected: null,
      categoryElemets: null,
      element: null,
      category_name: null,
      counter: 10,
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
          process.env.VUE_APP_BASE_URL + "/post?type=services&id=" + this.id,
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
                "/post/getNext?type=services&id=" +
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
    getService: {
      immediate: true,
      handler() {
        this.postGet();
      },
    },
    "$i18n.locale": function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.serviceGet();
      }
    },
  },
  "$route.params": function (newVal, oldVal) {
      if (newVal != oldVal) {
        window.scrollTo(0, 0);
        this.postGet();
      }
    },
};
</script>

<style lang="scss" scoped>
.download-btn {
  z-index: 25;
  .btn-img {
    object-fit: scale-down;
  }
}
.bottom-scroll {
  align-self: center;
  z-index: 25;
  cursor: pointer;
  // padding-top: 150px;
  @media (max-width: 900px) {
    padding-top: 0;
    justify-self: flex-end;
  }
  // padding-bottom: 100px;
}
.description-holder {
  .sub-title {
  }
  .description {
  }
}
</style>