<template>
  <div class="nav-holder padding-container">
    <div class="nav-header">
      <Logo />
      <img
        class="close"
        @click="$emit('close')"
        src="../../../assets/icons/close.svg"
      />
    </div>
    <div class="nav-routes">
      <div class="routes font-size-xl">
        <div class="router-link">
          <router-link class="hover" @click="$emit('close')" to="/">{{
            $t("header.home")
          }}</router-link>
        </div>
        <div class="router-link">
          <router-link class="hover" @click="$emit('close')" to="/about">
            {{ $t("header.aboutUs") }}</router-link
          >
        </div>
        <div class="router-link">
          <router-link class="hover" @click="$emit('close')" to="/services">{{
            $t("header.services")
          }}</router-link>
        </div>
          
        <div class="router-link position-relative"> 
         <router-link class="hover" to="/projects">{{ $t("header.projects") }}</router-link>
      </div> 
        
        <div class="router-link">
          <router-link class="hover" @click="$emit('close')" to="/contact-us">{{
            $t("header.contactUs")
          }}</router-link>
        </div>
        <div class="router-link">
          <router-link class="hover" @click="$emit('close')" to="/candidates">{{
            $t("header.candidates")
          }}</router-link>
        </div>
      </div>
      <div class="box-shadow"></div>
    </div>
    <div class="nav-footer">
      <div class="social-media font-size-md">
        <a class="facebook">Facebook</a>
        <a class="instagram">Instagram</a>
        <a class="twitter">Twitter</a>
      </div>
      <div class="locale-language"><Locale class="top-drop" /></div>
    </div>
  </div>
</template>


<script>
import Locale from "./Locale.vue";
import Logo from "./Logo.vue";
export default {
  name: "Nav",
  components: {
    Locale: Locale,
    Logo: Logo,
  },
  emits: ["close"],
 data () {
    return {
  
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-holder {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow-x: hidden;
  .nav-header {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    .close {
      cursor: pointer;
    }
  }
  .nav-routes {
    position: relative;
    display: flex;
    font-weight: 500;
    text-align: start;
    .routes {
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 10;
    }
    .router-link .hover:hover {
      color:#4b5b82;
       transition: 0.2s;
    }
    .router-link .projects{
        display:none;
    }
    .box-shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin-right: -35px;
      width: 30%;
      border-radius: 50%;
      background: transparent
        linear-gradient(
          180deg,
          map-get($colors, "linear-gradient-first") 0%,
          map-get($colors, "linear-gradient-second") 30%
        )
        0% 0% no-repeat padding-box;
      opacity: 1;
      filter: blur(40px);
      z-index: 9;
    }
  }
  .nav-footer {
    color: map-get($font_colors, "main");
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .social-media {
      font-weight: bold;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .locale-language {
      font-weight: medium;
      color: map-get($font_colors, "main");
    }
    padding-bottom: 20px;
  }
}
 .dropdown {
    display: none;
     background-color: map-get($colors, "white");
    &.flex {
      display: flex;
    }
    position: absolute;
    top: 30px;
    right: 0;
    &.top-drop {
      top: -130px;
      box-shadow: 0px 0px 6px #00000029;
    }
    flex-direction: column;
    color: map-get($font_colors, "main");
    font-weight: 500;
    border-radius: 2px;
    .dropdown {
      padding: 10px 0;
      margin: 0 20px;
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 5px;
      border-bottom: 1px solid rgb(gray, 0.3);
      &:last-child {
        border-bottom: none;
      }
    }
 }

</style>