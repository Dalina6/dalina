<template>
  <div class="padding-container services font-size-xl">
    <div class="service-container">
      <div class="first-line">{{ $t("pages.services.first-line") }}</div>
      <div class="service-text">{{ $t("pages.services.text") }}</div>
    </div>
    <div class="bottom-scroll">
      <ArrowDown />
    </div>
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
        <service-card
          class="margin-seperator"
          v-for="post in even_normal"
          :key="post.id"
          :title="post.title"
          :subTitle="post.sub_title"
          :src="post.photo.url"
          :id="post.id"
        >
        </service-card
      >
      </template>
      <template #second-half>
        <service-card
          class="margin-seperator"
          v-for="post in odd_normal"
          :key="post.id"
          :title="post.title"
          :subTitle="post.sub_title"
          :src="post.photo.url"
          :id="post.id"
        >
        </service-card>
        
      </template>
    </wrapper-content>
    <div class="text-service">
      <div class="service-header font-size-big">
        {{ $t("pages.services.after.bold") }}
      </div>
      <div class="service-title font-size-lg">
        {{ $t("pages.services.after.text") }}
      </div>
    </div>
    <wrapper-content>
      <template #first-half>
        <service-card
          class="margin-seperator"
          v-for="post in even_integrated"
          :key="post.id"
          :title="post.title"
          :subTitle="post.sub_title"
          :src="post.photo.url"
          :id="post.id"
        >
        </service-card
      ></template>
      <template #second-half>
        <service-card
          class="margin-seperator"
          v-for="post in odd_integrated"
          :key="post.id"
          :title="post.title"
          :subTitle="post.sub_title"
          :src="post.photo.url"
          :id="post.id"
        >
        </service-card>
      </template>
    </wrapper-content>
    <div class="last-text-service">
      <div class="image-container">
        <img src="../assets/quotes.svg" />
      </div>
      <div class="service-title font-size-md">
        {{ $t("pages.services.bottom.text") }}
      </div>
    </div>
  </main-body>
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
import axios from "axios";
import Card from "../components/includes/footer/Card.vue";
import ArrowDown from "../components/includes/views/ArrowDown.vue";
import FooterVue from "../components/FooterVue.vue";
import HomeCard from "../components/includes/footer/includes/HomeCard.vue";
import MainBody from "../components/includes/views/MainBody.vue";
import WrapperContent from "../components/includes/views/WrapperContent.vue";
import ServiceCard from "../components/pages/services/ServiceCard.vue";
import Copyright from "../components/includes/footer/Copyright.vue";
import PostSplitMixin from "../mixins/PostSplit";
import { onMounted } from "vue";
export default {
  components: {
    ArrowDown,
    Card,
    HomeCard,
    FooterVue,
    MainBody,
    WrapperContent,
    ServiceCard,
    Copyright,
  },
  mixins: [PostSplitMixin],
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
      even_normal: null,
      odd_normal: null,
      even_integrated: null,
      odd_integrated: null,
      //prove poshte
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
    //prove start
    postGet(category_name) {
      axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/posts?type=services&category_name=" +
            category_name +
            "&to_take" +
            this.counter,
          {
            headers: { "Content-Language": this.$i18n.locale },
          }
        )
       .then((response) => {
          this.even_normal = response.data.data.filter(this.evenPosts);
          this.odd_normal = response.data.data.filter(this.oddPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
      categoriesGet() {
      axios
        .get(process.env.VUE_APP_BASE_URL + "/post-categories?type=services", {
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
                "/posts?type=services&category_name=" +
                this.category_name +
                "&get=all" +
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
    //end
    serviceNormal() {
      axios
        .get(
          process.env.VUE_APP_BASE_URL +
           "/posts?type=services&category_name=",
          {
            headers: { "Content-Language": this.$i18n.locale },
          }
        )
        .then((response) => {
          this.even_normal = response.data.data.filter(this.evenPosts);
          this.odd_normal = response.data.data.filter(this.oddPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    integratedService() {
      axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/posts?type=services&category_name=integrated&to_take=all",
          {
            headers: { "Content-Language": this.$i18n.locale },
          }
        )
        .then((response) => {
          this.even_integrated = response.data.data.filter(this.evenPosts);
          this.odd_integrated = response.data.data.filter(this.oddPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    getPosts: {
      immediate: true,
      handler() {
        this.serviceNormal();
        this.integratedService();
        this.categoriesGet();
      },
    },
    "$i18n.locale": function (newVal, oldVal) {
      if (newVal != oldVal) {
        this.serviceNormal();
        this.integratedService();
         this.postGet(
         //
          document.getElementsByClassName("category-name selected").item(0)
            .textContent
        );
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.services {
  box-sizing: border-box;
  padding-top: 100px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    padding-top: 170px;
    justify-content: start;
  }
  // align-items: start;
  .service-container {
    @media (max-width: 900px) {
      word-break: break-word;
    }
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-weight: 300;
    .first-line {
      color: map-get($font_colors, "blue");
    }
    .service-text {
      text-align: start;
      align-self: flex-start;
    }
  }
  .bottom-scroll {
    align-self: center;
    z-index: 25;
    cursor: pointer;
    padding-top: 150px;
    @media (max-width: 900px) {
      padding-top: 0;
      justify-self: flex-end;
    }
    padding-bottom: 100px;
  }
}
.text-service {
  text-align: center;
  color: map-get($font_colors, "main");
  padding: 10% 20%;
  .service-header {
    font-weight: 800;
  }
  .service-title {
    font-weight: 500;
  }
}
.last-text-service {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10% 20%;
  .image-container {
    max-width: 100px;
    max-height: 100px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .service-title {
    text-align: center;
    color: map-get($font_colors, "main");
    font-weight: 700;
  }
}
.line {
  border: 1px solid rgb(112, 112, 112, 0.2);
  width: 100%;
  height: 0px;
  margin-bottom: 25px;
  margin-top: 25px;
}
.services {
  box-sizing: border-box;
  padding-top: 100px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    padding-top: 170px;
    justify-content: start;
  }
  // align-items: start;
  .service-container {
    @media (max-width: 900px) {
      word-break: break-word;
    }
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-weight: 300;
    .first-line {
      color: map-get($font_colors, "blue");
    }
    .service-text {
      text-align: start;
      align-self: flex-start;
    }
  }
  .bottom-scroll {
    align-self: center;
    z-index: 25;
    cursor: pointer;
    padding-top: 150px;
    @media (max-width: 900px) {
      padding-top: 0;
      justify-self: flex-end;
    }
    padding-bottom: 100px;
  }
}
.text-service {
  text-align: center;
  color: map-get($font_colors, "main");
  padding: 10% 20%;
  .service-header {
    font-weight: 800;
  }
  .service-title {
    font-weight: 500;
  }
}
.last-text-service {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10% 20%;
  .image-container {
    max-width: 100px;
    max-height: 100px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .service-title {
    text-align: center;
    color: map-get($font_colors, "main");
    font-weight: 700;
  }
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
</style>