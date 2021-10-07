<template>
  <div class="card-info padding-container">
    <router-link class="logo" to="/"><div class="logo"></div></router-link>
    <div class="pages">
      <router-link to="/projects">
        <div class="list-item font-size-big">
          {{ $t("footer.cardinfo.projects") }}
        </div>
      </router-link>
      <router-link to="/services">
        <div class="list-item font-size-big">
          {{ $t("footer.cardinfo.services") }}
        </div>
      </router-link>
      <router-link to="/about">
        <div class="list-item font-size-big">
          {{ $t("footer.cardinfo.aboutUs") }}
        </div>
      </router-link>
      <router-link to="/contact-us">
        <div class="list-item underline font-size-big">
          {{ $t("footer.cardinfo.contactUs") }}
        </div>
      </router-link>
      <router-link to="/candidates">
        <div class="list-item font-size-big">
          {{ $t("footer.cardinfo.candidates") }}
        </div>
      </router-link>
    </div>
    <div class="address-info">
      <div class="address font-size-default">
        StreamUp LLC <span>{{ $t("footer.cardinfo.address") }}</span>
        {{ $t("footer.cardinfo.zipcode") }}
      </div>
      <div class="cel font-size-default">
        <p>{{ $t("footer.phoneNr.tel") }}</p>
        <p>{{ $t("footer.phoneNr.mobile") }}</p>
      </div>
    </div>
    <div class="social">
      <div class="list-item font-size-default">Facebook</div>
      <div class="list-item font-size-default">Instagram</div>
      <div class="list-item font-size-default">Linkedin</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  column-gap: 40px;
  margin: 4vw 0;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    .pages,
    .address-info,
    .social {
      margin-top: 40px;
    }
  }
  justify-content: space-between;
  text-align: left;
  color: map-get($font_colors, "main");

  .logo {
    flex-grow: 1;
    background: transparent url("../../../assets/logo_2.svg") 0% 0% no-repeat
      padding-box;
    background-size: contain;
    width: 100%;
    // min-width: 210px;
    height: 55px;
    @media (max-width: 900px) {
      background: transparent url("../../../assets/empty_logo.svg") 0% 0%
        no-repeat padding-box;
      background-size: contain;
    }
  }

  .pages {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .list-item {
      font-weight: 600;
      letter-spacing: -0.45px;
      line-height: 1.6;
    }
    .underline {
      text-decoration: underline 2px;
      text-underline-offset: 3px;
    }
  }
  .address-info {
    width: 100%;
    flex-grow: 1;
    .address {
      display: flex;
      flex-direction: column;
      font-weight: 500;
      line-height: 1.5;
    }
    .cel {
      display: flex;
      flex-direction: column;
      font-weight: 500;
      opacity: 0.5;
      padding: 30px 0;
    }
  }

  .social {
    /* margin-right: 7vw; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .list-item {
      font-weight: 500;
      line-height: 1.5;
    }
  }
}
</style>