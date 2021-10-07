<template>
  <div class="home">
    <main-content
      :title="$t('pages.home.title')"
      :text="$t('pages.home.text.' + text)"
      :color="color"
    >
      <vue-button
        class="font-size-default"
        @buttonClick="getRandomIntInclusive"
      >
        {{ $t("pages.home.button.quote") }}
      </vue-button>
    </main-content>
    <main-body>
      <div class="home-description font-size-big">
        {{ $t("pages.home.description") }}
      </div>
      <wrapper-content>
        <template #first-half>
          <project-card
            v-for="(post, index) in even"
            :key="index"
            :class="post.color"
            :title="post.title"
            :subTitle="post.sub_title"
            :image="post.photo.preview"
          >
          </project-card>
        </template>
        <template #second-half>
          <project-card
            v-for="(post, index) in odd"
            :key="index"
            :class="post.color"
            :title="post.title"
            :subTitle="post.sub_title"
            :image="post.photo.preview"
          >
          </project-card
        ></template>
      </wrapper-content>
      <div class="view-button">
        <router-link @click="scrolling" to="/projects">
          <vue-button class="font-size-default flex">
            {{ $t("pages.home.button.view") }}
          </vue-button>
        </router-link>
      </div>
      <div class="services-parent">
        <text-card>
          <template #title>{{ $t("pages.home.service.title") }} </template>
          <template #subtitle> {{ $t("pages.home.service.title") }}</template>
        </text-card>
        <div class="service-wrapper">
          <div class="column-1">
            <service-card
              v-for="service in firstPart"
              :key="service.id"
              :src="service.photo.url"
              :title="service.title"
              :subTitle="service.sub_title"
              :id="service.id"
            ></service-card>
          </div>
          <div class="column-2">
            <service-card
              v-for="service in secondPart"
              :key="service.id"
              :src="service.photo.url"
              :title="service.title"
              :subTitle="service.sub_title"
              :id="service.id"
            ></service-card>
          </div>
          <div class="column-3">
            <service-card
              v-for="service in thirdPart"
              :key="service.id"
              :src="service.photo.url"
              :title="service.title"
              :subTitle="service.sub_title"
              :id="service.id"
            ></service-card>
          </div>
        </div>

        <router-link @click="scrolling" to="/services">
          <div class="services-see-more font-size-md">
            {{ $t("pages.home.service.see-more") }}
            <div class="arrow-holder"></div>
          </div>
        </router-link>
      </div>
    </main-body>
  </div>
  <partners></partners>
  <footer-vue>
    <card class="margin-container"><home-card></home-card></card>
  </footer-vue>
</template>

<script>
import MainContent from "../components/MainContent.vue";
import MainBody from "../components/includes/views/MainBody.vue";
import WrapperContent from "../components/includes/views/WrapperContent.vue";
import ProjectCard from "../components/pages/projects/ProjectCard.vue";
import VueButton from "../components/includes/parts/VueButton.vue";
import axios from "axios";
import ServiceCard from "../components/pages/services/ServiceCard.vue";
import Partners from "../components/pages/home/Partners.vue";
import FooterVue from "../components/FooterVue.vue";
import Card from "../components/includes/footer/Card.vue";
import HomeCard from "../components/includes/footer/includes/HomeCard.vue";
import TextCard from "../components/includes/parts/Text.vue";
import PostSplitMixin from "../mixins/PostSplit";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    MainContent,
    MainBody,
    WrapperContent,
    ProjectCard,
    VueButton,
    ServiceCard,
    Card,
    Partners,
    FooterVue,
    HomeCard,
    TextCard,
  },
  mixins: [PostSplitMixin],
  data() {
    return {
      color: "blue",
      text: 0,
      mint: null,
      acquaMarine: null,
      title: null,
      subTitle: null,
      image: null,
      firstPart: null,
      secondPart: null,
      thirdPart: null,
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
  methods: {
    getRandomIntInclusive(min, max) {
      min = Math.ceil(1);
      max = Math.floor(15);
      return (this.text = Math.floor(Math.random() * (max - min + 1) + min)); //The maximum is inclusive and the minimum is inclusive
    },
    postGet() {
      axios
        .get(process.env.VUE_APP_BASE_URL + "/posts?type=projects&paginate=2", {
          headers: { "Content-Language": this.$i18n.locale },
        })
        .then((response) => {
          this.even = response.data.data.filter(this.evenPosts);
          this.even = this.even.filter(this.colorizefirstColumn);
          this.odd = response.data.data.filter(this.oddPosts);
          this.odd = this.odd.filter(this.colorizesecondColumn);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    serviceGet() {
      axios
        .get(process.env.VUE_APP_BASE_URL + "/posts?type=services&paginate=6", {
          headers: { "Content-Language": this.$i18n.locale },
        })
        .then((response) => {
          this.firstPart = response.data.data.filter(this.firstSplit);
          this.secondPart = response.data.data.filter(this.secondSplit);
          this.thirdPart = response.data.data.filter(this.thirdSplit);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    firstSplit(value, key, arr) {
      if (key % 3 == 0) {
        return arr;
      }
    },
    secondSplit(value, key, arr) {
      if (key % 3 == 1) {
        return arr;
      }
    },
    thirdSplit(value, key, arr) {
      if (key % 3 == 2) {
        return arr;
      }
    },
    scrolling() {
      window.scrolling = true;
    },
  },

  computed: {},

  watch: {
    getPosts: {
      immediate: true,
      handler() {
        this.postGet();
        this.serviceGet();
      },
    },
    "$i18n.locale": function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.postGet();
        this.serviceGet();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  .home-description {
    padding: 150px 0;
    max-width: 75%;
    color: map-get($font_colors, "main");
    word-break: break-word;
    text-align: start;
    font-weight: 500;
    &::before {
      content: "";
      float: right;
      width: 8em;
      height: 1em;
    }
  }
  .view-button {
    padding-top: 100px;
  }
  .services-parent {
    .service-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
    }
    .service-wrapper {
      overflow-x: hidden;
      padding-top: 100px;
      padding-bottom: 50px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      // grid-auto-rows: 1fr;
      gap: 40px;
      height: 100%;

      @media (max-width: 900px) {
        grid-template-columns: auto;
      }
      @mixin column {
        display: flex;
        height: 100%;
        flex-direction: column;
        row-gap: 40px;
        @media (max-width: 900px) {
          width: 100%;
        }
        flex: 1;
      }
      .column-1 {
        @include column;
      }
      .column-2 {
        position: relative;
        bottom: -40px;

        @include column;
        @media (max-width: 900px) {
          position: static;
        }
      }
      .column-3 {
        @include column;
      }
    }
    .services-see-more {
      text-align: center;
      font-weight: 500;
      flex-wrap: wrap;
      color: map-get($font_colors, "main");
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 150px;
      @media (max-width: 900px) {
        margin-top: 0px;
        margin-bottom: 75px;
      }
      .arrow-holder {
        padding-left: 25px;

        &::after {
          content: "";
          width: 50px;
          height: 40px;
          background-image: url("../assets/icons/arrow_down.svg");
          position: relative;
          transform: rotate(-90deg);
          background-repeat: no-repeat;
          background-position: center;
          float: left;
        }
      }
    }
  }
}
</style>