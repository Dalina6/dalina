<template>
  <div class="candidates">
    <main-content
      :title="$t('pages.candidates.title')"
      :text="$t('pages.candidates.text')"
    >
      <div class="bottom-scroll">
        <ArrowDown />
      </div>
    </main-content>
  </div>
  <div class="candidates-text">
    <text-card>
      <template #title> {{ $t("pages.candidates.mid.title") }} </template>
      <template #subtitle>{{ $t("pages.candidates.mid.subtitle") }}</template>
    </text-card>
  </div>
  <footer-vue>
    <card-form></card-form>
  </footer-vue>
</template>

<script>
import MainContent from "../components/MainContent";
import ArrowDown from "../components/includes/views/ArrowDown.vue";
import CardForm from "../components/includes/footer/includes/CardForm.vue";
import FooterVue from "../components/FooterVue.vue";
import TextCard from "../components/includes/parts/Text.vue";
export default {
  name: "Candidates",
  components: {
    MainContent,
    ArrowDown,
    CardForm,
    FooterVue,
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
.bottom-scroll {
  z-index: 25;
  cursor: pointer;
  // padding-bottom: 50px;
}
.candidates-text {
  padding: 8% 0;
  @media (max-width: 900px) {
    padding: 0 10%;
    padding-bottom: 10%;
  }
}
</style>