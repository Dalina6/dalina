<template>
  <div class="form-container">
    <div class="form-layout padding-container">
      <div
        v-html="$t('footer.candidates.title')"
        class="form-title font-size-xl"
      ></div>
      <form @submit.prevent="sendMail" class="form" method="POST" enctype=multipart/form-data>
        <div class="form-elements">
          <div class="form-group">
            <input
              type="text"
              name="name"
              v-model="formValues.name"
              class="input-control font-size-sm"
              :placeholder="$t('footer.candidates.firstName')"
              required
            />
            <input
              name="last_name"
              class="input-control font-size-sm"
              v-model="formValues.last_name"
              :placeholder="$t('footer.candidates.lastName')"
              required
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="input-control font-size-sm"
              name="email"
              v-model="formValues.email"
              :placeholder="$t('footer.candidates.email')"
              required
            />
            <input
              type="text"
              class="input-control font-size-sm"
              name="phone"
              v-model="formValues.phone"
              :placeholder="$t('footer.candidates.phone')"
              required
            />
          </div>

          <div class="form-group">
            <div @click="dropdown" ref="click" class="option font-size-sm">
              <div v-if="formValues.profession == null" class="option-text">
                {{ $t("footer.candidates.select") }}
              </div>
              <div v-else class="option-text">
                {{ formValues.profession }}
              </div>
              <div class="option-img"></div>

              <ul ref="optionDropdown" class="dropdown-menu">
                <li
                  v-for="(position, index) in positions"
                  :key="index"
                  class="dropdown-item"
                  @click="selectPosition"
                >
                  {{ $t("footer.form.options." + position) }}
                </li>
              </ul>
            </div>

            <div class="type-file">
              <label class="file-input" for="file-input">
                <div v-if="targetName == null" class="label font-size-sm">
                  {{ $t("footer.candidates.cv") }}
                </div>
                <div v-else class="label font-size-sm">
                  {{ targetName }}
                </div>
                <div class="label">
                  <img for="file-input" src="../../../../assets/attach.svg" />
                </div>
              </label>

              <input
                @change.self="onFileSelected"
                id="file-input"
                type="file"
                class="input-file font-size-sm"
                accept=".doc,.docx,.pdf"
                :placeholder="$t('footer.candidates.cv')"
              />
            </div>
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
  components: { FooterButton },
  data() {
    return {
      formValues: {
        name: "",
        last_name: "",
        email: "",
        phone: "",
        file: null,
        profession: null,
      },
      targetName: null,
      positions: [
        "backend",
        "frontend",
        "softwareEngineer",
        "solutionArchitect",
        "systemAnalyst",
        "uiux",
      ],
    };
  },
  methods: {
    sendMail() {
      const pdf = new FormData();

      pdf.append("pdf", this.formValues.file);
      pdf.append("name", this.formValues.name);
      pdf.append("last_name", this.formValues.last_name);
      pdf.append("email", this.formValues.email);
      pdf.append("phone", this.formValues.phone);
      pdf.append("profession", this.formValues.profession);
      axios
        .post(process.env.VUE_APP_BASE_URL + "/mail/send/job/application", pdf)
        .then(
          (response) => {
            if (response.status == 200) {
              this.formValues.name = "";
              this.formValues.last_name = "";
              this.formValues.phone = "";
              this.formValues.email = "";
              this.formValues.phone = "";
              this.targetName = null;
              this.formValues.profession = null;
              document.getElementById("file-input").value = "";
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },
    dropdown() {
      if (this.$refs.optionDropdown.classList.contains("flex")) {
        this.$refs.click.classList.remove("rotate");
        this.$refs.optionDropdown.classList.remove("flex");
      } else {
        this.$refs.click.classList.add("rotate");
        this.$refs.optionDropdown.classList.add("flex");
      }
    },
    selectPosition(e) {
      this.formValues.profession = e.target.textContent;
    },
    onFileSelected(e) {
      this.targetName = e.target.files[0].name;
      this.formValues.file = e.target.files[0];
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
    .form {
      width: 100%;
      .form-elements {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        .form-group {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          box-sizing: border-box;
          gap: 20px;
          width: 100%;
          box-sizing: border-box;
          .option {
            position: relative;
            box-sizing: border-box;
            background: rgb(244, 244, 244, 0.1);
            border: none;
            text-align: left;
            display: flex;
            align-items: center;
            color: map-get($colors, "white") !important;
            font-weight: 800 !important;
            letter-spacing: 0.44px;
            width: 100%;
            padding: 17px 18px !important;
            position: relative;
            .option-text {
              width: 100%;
              padding-right: 40px;
            }

            &::after {
              content: url("../../../../assets/icons/form-dropdown.svg");
              float: right;
              transition: transform 25ms;
            }
            &.rotate::after {
              transform: rotate(180deg);
              transition: transform 25ms;
            }
            .dropdown-menu {
              box-shadow: 0px 0px 10px #ffffff65;
              display: none;
              &.flex {
                display: flex;
              }
              background: transparent
                linear-gradient(
                  128deg,
                  map-get($colors, "blue") 20%,
                  map-get($colors, "primary") 140%
                )
                0% 0% no-repeat padding-box;
              width: 100%;
              z-index: 25;
              flex-direction: column;
              position: absolute;
              top: 70px;

              right: 0;
              .dropdown-item {
                padding: 10px 20px;
                list-style-type: none;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                &:last-child {
                  border-bottom: 0px;
                }
                &:hover {
                  background: transparent
                    linear-gradient(
                      128deg,
                      map-get($colors, "coral") 20%,
                      map-get($colors, "primary") 140%
                    )
                    0% 0% no-repeat padding-box;
                  opacity: 0.5;
                }
              }
            }
          }
          .type-file,
          .input-control {
            word-break: break-word;
            box-sizing: border-box;
            background: rgb(244, 244, 244, 0.1);
            border: none;
            text-align: left;
            flex: 1 1 auto;
            display: block;
            color: map-get($colors, "white") !important;
            font-weight: 800 !important;
            letter-spacing: 0.44px;
            width: 100%;
            flex-grow: 1;
            gap: 20px;
            padding: 17px 18px !important;
            .input-file {
              display: none;
            }
          }
          .type-file {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .file-input {
              width: 100%;
              display: flex;
              flex-grow: 1;
              min-width: 100%;
              flex-direction: row;
              align-items: centerrr;
              justify-content: space-between;
              .label {
                word-break: break-word;
                display: flex;
                align-items: center;
              }
            }
          }
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
          .form-group .input-control {
            padding: 17px 18px !important;
          }
        }
      }

      .button-wrapper {
        display: flex;
        justify-content: flex-end;
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
            padding: 30px 100px;
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