<template>
  <div class="contact-us">
    <main-content
      :title="$t('pages.contactUs.title')"
      :text="$t('pages.contactUs.text')"
    >
      <div class="bottom-scroll">
        <ArrowDown />
      </div>
    </main-content>
  </div>
  <div class="description-text font-size-lg">
    {{ $t("pages.contactUs.lower.message") }}
  </div>
  <div class="contact-info padding-container">
    <div class="description-holder padding-container-remover">
      <div class="title">{{ $t("pages.contactUs.lower.title") }}</div>
      <div class="description">
        {{ $t("pages.contactUs.lower.description") }}
      </div>
    </div>
    <div class="contacts padding-container-remover">
      <div class="directions font-size-md">
        <div class="company">
          {{ $t("pages.contactUs.lower.contact.company") }}
        </div>
        <div class="street">
          {{ $t("pages.contactUs.lower.contact.street") }}
        </div>
        <div class="location">
          {{ $t("pages.contactUs.lower.contact.location") }}
        </div>
      </div>
      <div class="info font-size-md">
        <div class="tel">Tel: +355 123 456 789 0</div>
        <div class="mob">Mobile: +355 123 456 789 0</div>
        <div class="email">Email: hello@streamup.com</div>
      </div>
      <vue-button
        ><a
          target="_blank"
          href="https://www.google.com/maps/@41.3256371,19.814592,21z"
          >{{ $t("pages.contactUs.button.direction") }}</a
        ></vue-button
      >
    </div>
  </div>
  <footer-vue>
    <contact-card></contact-card>
  </footer-vue>
</template>

<script>
import MainContent from "../components/MainContent";
import ArrowDown from "../components/includes/views/ArrowDown.vue";
import ContactCard from "../components/includes/footer/includes/ContactCard.vue";
import FooterVue from "../components/FooterVue.vue";
import VueButton from "../components/includes/parts/VueButton.vue";

export default {
  name: "ContactUs",
  components: {
    MainContent,
    ArrowDown,
    ContactCard,
    FooterVue,
    VueButton,
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
.description-text {
  color: map-get($font_colors, "main");
  font-weight: 500;
  padding: 10% 20%;
}
.contact-info {
  display: grid;
  grid-template-columns: auto auto;
  padding-bottom: 10%;
  row-gap: 50px;
  text-align: start;
  word-break: break-word;
  @media (max-width: 900px) {
    grid-template-columns: auto;
    text-align: center;
  }
  .description-holder {
    text-align: start;

    @media (max-width: 900px) {
      text-align: center;
    }
    .title {
      color: map-get($font_colors, "main");
      font-weight: 500;
    }
    .description {
      max-width: 80%;
      text-align: start;

      @media (max-width: 900px) {
        text-align: center;
        max-width: 100%;
      }
      padding-top: 5%;
      color: map-get($font_colors, "secondary");
      font-weight: 700;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    text-align: start;
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    row-gap: 30px;
    .directions {
      color: map-get($font_colors, "main");
      font-weight: 700;
    }
    .info {
      color: map-get($font_colors, "secondary");
      font-weight: 700;
    }
    a {
      color: map-get($font_colors, "button-color");
    }
  }
}
</style>