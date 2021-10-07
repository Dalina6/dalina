<template>
  <div class="form-container padding-container">
    <div class="form-layout padding-container">
      <div
        class="form-title font-size-xl"
        v-html="$t('footer.contactUs.title')"
      ></div>
      <form class="form-post" @submit.prevent="sendEmail">
        <div class="form-elements">
          <div class="form-group1">
            <input
              type="text"
              name="first_name"
              id="first_name"
              v-model="formValues.name"
              class="input-control font-size-sm"
              :placeholder="$t('footer.contactUs.firstName')"
              required
            />

            <input
              type="text"
              name="last_name"
              id="last_name"
              class="input-control font-size-sm"
              v-model="formValues.last_name"
              :placeholder="$t('footer.contactUs.lastName')"
              required
            />

            <input
              type="text"
              name="phone"
              id="phone"
              class="input-control font-size-sm"
              v-model="formValues.phone"
              :placeholder="$t('footer.contactUs.phone')"
              required
            />
            <input
              type="text"
              name="email"
              id="email"
              class="input-control font-size-sm"
              v-model="formValues.email"
              :placeholder="$t('footer.contactUs.email')"
              required
            />
            <input
              type="text"
              name="company"
              id="company"
              class="input-control font-size-sm"
              v-model="formValues.company"
              :placeholder="$t('footer.contactUs.company')"
              required
            />

            <input
              type="text"
              name="company_type"
              id="company_type"
              class="input-control font-size-sm"
              v-model="formValues.company_type"
              :placeholder="$t('footer.contactUs.company_type')"
              required
            />
          </div>

          <div class="form-group2">
            <textarea
              name="content"
              class="content font-size-sm"
              v-model="formValues.content"
              :placeholder="$t('footer.contactUs.content')"
              required
            ></textarea>
          </div>
        </div>
        <div class="button-wrapper">
          <footer-button>
            {{ $t("footer.contactUs.btn") }}
          </footer-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FooterButton from "./Button.vue";
import axios from "axios";
export default {
  name: "ContactCard",
  components: { FooterButton },
  data() {
    return {
      formValues: {
        name: "",
        last_name: "",
        phone: "",
        email: "",
        company: "",
        company_type: "",
        content: "",
      },
    };
  },
  methods: {
    sendEmail() {
      axios
        .post(
          process.env.VUE_APP_BASE_URL + "/mail/send/company",
          this.formValues
        )
        .then(
          (response) => {
            if (response.status == 200) {
              this.formValues.name = "";
              this.formValues.last_name = "";
              this.formValues.phone = "";
              this.formValues.email = "";
              this.formValues.company = "";
              this.formValues.company_type = "";
              this.formValues.content = "";
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  background: transparent
    linear-gradient(
      128deg,
      map-get($colors, "blue") 40%,
      map-get($colors, "primary") 140%
    )
    0% 0% no-repeat padding-box;
  .form-layout {
    display: flex;
    flex-direction: column;
    padding-top: 94px;
    padding-bottom: 97px;
    @media (max-width: 990px) {
      align-items: center;
      padding-top: 74px;
      padding-bottom: 77px;
    }
    .form-title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      color: map-get($colors, "white");
      padding-bottom: 90px;
      text-align: left;
      line-height: 1;
      font-weight: 800;
      @media (max-width: 990px) {
        text-align: center;
        padding-bottom: 70px;
      }
    }
    .form-post {
      width: 100%;
      .form-elements {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 20px;
        @media (max-width: 990px) {
          flex-direction: column;
        }
        .form-group1 {
          display: flex;
          flex-direction: column;
          width: 100%;
          box-sizing: border-box;
          gap: 20px;
        }
        .form-group1 .input-control {
          box-sizing: border-box;
          background: rgb(244, 244, 244, 0.1);
          border: none;
          text-align: left;
          flex-grow: 1;
          gap: 20px;
          color: map-get($colors, "white") !important;
          font-weight: 800 !important;
          letter-spacing: 0.44px;
          width: 100%;
          padding: 17px 18px !important;
        }
        ::-webkit-input-placeholder {
          color: rgba(255, 255, 255, 1) !important;
          font-weight: 800;
        }
        :-ms-input-placeholder {
          color: rgba(255, 255, 255, 1) !important;
        }
        ::-moz-placeholder {
          color: rgba(255, 255, 255, 1) !important;
        }
        :-moz-placeholder {
          color: rgba(255, 255, 255, 1) !important;
        }

        @media (max-width: 900px) {
          .form-group {
            flex-direction: column;
          }
        }
      }
      .form-group2 {
        width: 100%;
        box-sizing: border-box;

        .content {
          @media (max-width: 990px) {
            min-height: 200px;
          }
          resize: none;
          box-sizing: border-box;
          background: rgb(244, 244, 244, 0.1);
          border: none;
          text-align: left;

          display: block;
          color: map-get($colors, "white") !important;
          font-weight: 800 !important;
          letter-spacing: 0.44px;
          width: 100%;
          height: 100%;
          padding: 17px 18px !important;
          position: relative;
        }
      }

      .button-wrapper {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        @media (max-width: 900px) {
          justify-content: center;
        }
        padding-top: 43px;
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
        @media (max-width: 900px) {
          margin: 0 0;
        }
      }
    }
  }
}
</style>