<template>
  <div>
    <main-content
      :title="$t('pages.projects.title')"
      :text="$t('pages.projects.text')"
      class="left"
    >
      <div class="bottom-scroll">
        <ArrowDown />
      </div>
    </main-content>
  </div>
  <div class="padding-container categories-group">
    <div class="categories slider">
      <div
        class="category font-size-lg"
        v-for="(category, index) in categories"
        :key="category.id"
      >
        <div
          @click="addClass"
          class="category-name"
          :class="{ selected: index === 0 }"
          :id="category.id"
        >
          {{ category.name }}
        </div>
      </div>
    </div>
  </div>
  <main-body>
    <wrapper-content>
      <template #first-half>
        <project-card
          class="margin-seperator want-hover"
          v-for="(post, index) in even"
          :key="index"
          :class="post.color"
          :title="post.title"
          :subTitle="post.sub_title"
          :description="post.description"
          :image="post.photo.preview"
          :id="post.id"
        >
        </project-card>
      </template>
      <template #second-half>
        <project-card
          class="margin-seperator want-hover"
          v-for="(post, index) in odd"
          :key="index"
          :class="post.color"
          :title="post.title"
          :subTitle="post.sub_title"
          :description="post.description"
          :image="post.photo.preview"
          :id="post.id"
        >
        </project-card
      ></template>
    </wrapper-content>
  </main-body>
  <div @click="viewMore" class="projects-view-more font-size-md">
    <div class="view-more-wrapper">
      {{ $t("pages.projects.view-more") }}
      <div class="arrow-holder"></div>
    </div>
  </div>
  <footer-vue>
    <card class="margin-container"><home-card></home-card></card>
    <template #copyright>
      <copyright>
        <hr class="line" />
      </copyright>
    </template>
  </footer-vue>
</template>
<script>
import MainContent from "../components/MainContent.vue";
import ArrowDown from "../components/includes/views/ArrowDown.vue";
import Card from "../components/includes/footer/Card.vue";
import FooterVue from "../components/FooterVue.vue";
import HomeCard from "../components/includes/footer/includes/HomeCard.vue";
import Copyright from "../components/includes/footer/Copyright.vue";
import axios from "axios";
import WrapperContent from "../components/includes/views/WrapperContent.vue";
import ProjectCard from "../components/pages/projects/ProjectCard.vue";
import MainBody from "../components/includes/views/MainBody.vue";
import { onMounted } from "vue";
import PostSplitMixin from "../mixins/PostSplit";
export default {
  components: {
    MainContent,
    WrapperContent,
    ProjectCard,
    ArrowDown,
    Card,
    HomeCard,
    FooterVue,
    Copyright,
    MainBody,
  },
  mixins: [PostSplitMixin],
  name: "Projects",
  setup() {
    onMounted(() => {
      var slider = document.querySelector(".slider");
      var isDown = false;
      var startX;
      var scrollLeft;
      slider.addEventListener("mousedown", function (e) {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", function () {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", function () {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - slider.offsetLeft;
        var walk = (x - startX) * 1; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  },
  data() {
    return {
      categories: null,
      selected: null,
      categoryElemets: null,
      element: null,
      category_name: null,
      counter: 10,
    };
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
  methods: {
    postGet(category_name) {
      axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/posts?type=projects&category_name=" +
            category_name +
            "&paginate=" +
            this.counter,
          {
            headers: { "Content-Language": this.$i18n.locale },
          }
        )
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
    categoriesGet() {
      axios
        .get(process.env.VUE_APP_BASE_URL + "/post-categories?type=projects", {
          headers: { "Content-Language": this.$i18n.locale },
        })
        .then((response) => {
          this.categories = response.data.data;
          if (
            document.getElementsByClassName("category-name selected").item(0) ==
            undefined
          ) {
            this.category_name = response.data.data[0].name;
          } else {
            this.category_name = document
              .getElementsByClassName("category-name selected")
              .item(0);
          }
          return axios
            .get(
              process.env.VUE_APP_BASE_URL +
                "/posts?type=projects&category_name=" +
                this.category_name +
                "&paginate=" +
                this.counter,
              {
                headers: { "Content-Language": this.$i18n.locale },
              }
            )
            .then((response) => {
              return response.data.data;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .then((final_response) => {
          this.even = final_response.filter(this.evenPosts);
          this.even = this.even.filter(this.colorizefirstColumn);
          this.odd = final_response.filter(this.oddPosts);
          this.odd = this.odd.filter(this.colorizesecondColumn);
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addClass(e) {
      if (!e.target.classList.contains("selected")) {
        this.categoryElemets = document.getElementsByClassName("category-name");
        for (this.element of this.categoryElemets) {
          if (this.element.classList.contains("selected")) {
            this.element.classList.remove("selected");
          }
        }
        e.target.classList.add("selected");
        this.postGet(e.target.textContent);
      }
    },
    viewMore() {
      this.counter += 10;
      this.postGet(
        document.getElementsByClassName("category-name selected").item(0)
          .textContent
      );
    },
  },
  watch: {
    getPosts: {
      immediate: true,
      handler() {
        this.categoriesGet();
      },
    },
    "$i18n.locale": function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.postGet(
          document.getElementsByClassName("category-name selected").item(0)
            .textContent
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.bottom-scroll {
  z-index: 25;
  cursor: pointer;
  // padding-bottom: 50px;
}
.line {
  border: 1px solid rgb(112, 112, 112, 0.2);
  width: 100%;
  height: 0px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.categories-group {
  .categories {
    display: flex;
    flex-wrap: keep-all;
    word-break: normal;
    overflow-x: scroll;
    column-gap: 25px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      height: 0;
    }
    padding: 10% 0;
    &.active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
      transform: scale(1);
    }
  }
  .category {
    flex-grow: 1;
    width: 100%;
    cursor: pointer;
    .category-name {
      font-weight: 500;
      color: map-get($font_colors, "secondary");
      &.selected {
        font-weight: 800;
        color: map-get($font_colors, "main");
      }
    }
  }
}
.projects-view-more {
  display: flex;
  align-items: center;
  justify-content: center;
  .view-more-wrapper {
    cursor: pointer;
    text-align: center;
    font-weight: 500;
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
        background-repeat: no-repeat;
        background-position: center;
        float: left;
      }
    }
  }
}
</style>