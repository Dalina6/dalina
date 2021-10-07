<template>
  <div class="card-layout">
    <div class="card_info">
      <div class="card-title font-size-xxl">
        {{ $t("footer.card.card-title") }}
      </div>
      <router-link class="contact-us-router" to="/contact-us">
        <footer-button>{{ $t("footer.card.button") }} </footer-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import FooterButton from "./Button.vue";
export default {
  name: "Homecard",
  components: { FooterButton },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card-layout {
  background-image: url("../../../../assets/Mask30.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .card_info {
    padding: 6vw 5.4vw;
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    .card-title {
      word-break: break-word;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      row-gap: 100px;
    }

    .card-title {
      width: 100%;
      color: map-get($colors, "white");
      font-weight: 500;
      text-align: left;
      letter-spacing: 2.4px;
      line-height: 1;
      padding-top: 5.5vw;
      display: flex;
      align-items: flex-end;
    }
    .contact-us-router {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media (max-width: 900px) {
        justify-content: flex-start;
      }
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 100%;
        cursor: pointer;
        color: map-get($font_colors, "blue");
        letter-spacing: 1.5px;
        background-color: map-get($colors, "white");
        border: map-get($colors, "white");
        font-weight: 300;
        .btn-text {
          box-sizing: border-box;
          word-break: break-word;
          padding: 25px 60px;
          @media (max-width: 900px) {
            padding: 18px 50px;
          }
        }
      }
    }
  }
}
</style>