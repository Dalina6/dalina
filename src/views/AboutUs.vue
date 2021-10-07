<template>
  <div class="about">
    <main-content
      :title="$t('pages.aboutUs.main.title')"
      :text="$t('pages.aboutUs.main.text')"
    >
      <div class="bottom-scroll">
        <ArrowDown />
      </div>
    </main-content>
  </div>

  <div class="about-text">
    <text-card>
      <template #title> {{ $t("pages.aboutUs.text.title") }} </template>
      <template #subtitle>{{ $t("pages.aboutUs.text.subTitle") }}</template>
    </text-card>
  </div>
  <description-card></description-card>
  <why-us></why-us>
  <footer-vue>
    <card class="margin-container"><home-card></home-card></card>
  </footer-vue>
</template>

<script>
import MainContent from "../components/MainContent";
import ArrowDown from "../components/includes/views/ArrowDown.vue";
import Card from "../components/includes/footer/Card.vue";
import FooterVue from "../components/FooterVue.vue";
import HomeCard from "../components/includes/footer/includes/HomeCard.vue";
import DescriptionCard from "../components/pages/about/DescriptionCard.vue";
import WhyUs from "../components/pages/about/WhyUs.vue";
import TextCard from "../components/includes/parts/Text.vue";

export default {
  name: "AboutUs",
  components: {
    MainContent,
    ArrowDown,
    Card,
    HomeCard,
    FooterVue,
    DescriptionCard,
    WhyUs,
    TextCard,
  },
  data() {
    return {};
  },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.about {
  .bottom-scroll {
    z-index: 25;
    cursor: pointer;
    // padding-bottom: 50px;
  }
}
.about-text {
  padding: 8% 0;
  @media (max-width: 900px) {
    padding: 0 15%;
  }
}
</style>