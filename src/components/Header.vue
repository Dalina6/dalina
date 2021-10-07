<template>
  <div class="header padding-container font-size-sm">
    <div class="header-routers">
      <router-link to="/">
        <Logo />
      </router-link>
    </div>
    <div class="header-routers group">
      <div class="router-link">
        <router-link class="hover" to="/">{{ $t("header.home") }}</router-link>
      </div>
      <div class="router-link">
        <router-link class="hover" to="/about"> {{ $t("header.aboutUs") }}</router-link>
      </div>
      <div class="router-link">
        <router-link class="hover" to="/services">{{ $t("header.services") }}</router-link>
            <!-- <Dropdown class="position-absolute" title="Services" :items="projects"  /> -->
      </div>
      <div class="router-link">
      <div class="dropdown position-absolute">

        <router-link class="hover position-absolute" to="/projects">{{ $t("header.projects") }}</router-link>
      
      </div>
      </div>
      <div class="router-link">
        <router-link class="hover" to="/contact-us">{{ $t("header.contactUs") }}</router-link>
      </div>
      <div class="router-link">
        <router-link class="hover" to="/candidates">{{
          $t("header.candidates")
        }}</router-link>
      </div>
      <div class="router-link">
        <Locale />
      </div>
    </div>
    <div @click.self="showNav" class="nav-bar" id="nav">
      <div class="nav-container">
        <Nav @close="closeNav" />
      </div>
    </div>
  </div>
  <router-view :key="$route.params" />
</template> 

<script>
import Locale from "./includes/header/Locale.vue";
import Logo from "./includes/header/Logo.vue";
import Nav from "./includes/header/Nav.vue";
// import Dropdown from "@/components/Dropdown.vue";
export default {
  name: "Header",
  components: {
    Locale: Locale,
    // Dropdown:Dropdown,
    Logo: Logo,
    Nav: Nav,
  },
  created() {
    window.addEventListener("resize", this.onScreenResize);
  },
  data() {
    return {
      computedStyle: null,
      screenWidth: null,
       projects: [
        {
          title: 'UI/UX',
          link: 'ContactUs.vue'
        },
        {
          title: 'Hosting',
          link:'#'
        },
        {
          title: 'Streaming',
          link: '#'
        },
            {
          title: 'Development',
          link: '#'
        }
      ]
    };
    
  },
  methods: {
    showNav(e) {
      this.computedStyle = window.getComputedStyle(e.target.firstChild);
      this.computedStyle = this.computedStyle.getPropertyValue("display");
      if (this.computedStyle === "none") {
        e.target.firstChild.style.display = "block";
      }
    },
    onScreenResize() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth >= 900) {
        document.getElementById("nav").firstChild.style.display = "none";
      }
    },
    closeNav() {
      document.getElementById("nav").firstChild.style.display = "none";
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  min-height: 120px;
  z-index: 30;
  width: calc(100% - 140px);
  @media (max-width: 900px) {
    width: calc(100% - 60px);
  }
  background: transparent linear-gradient(180deg, #EAFFFF 0%, #eaffff00 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-routers {
    display: flex;
    font-weight: 500;
    .router-link {
      padding-left: 15px;
      .hover:hover{
      //  color: rgb(17, 0, 64);
      color:#4b5b82;
       transition: 0.2s;
      }
    }
    &.group {
      @media (max-width: 900px) {
        display: none;
      }
    }
  }
  .nav-bar {
    display: none;
    @media (max-width: 900px) {
      display: inline-block;
    }
    content: "";
    background-image: url("../assets/icons/hamburger.svg");
    cursor: pointer;
    background-repeat: repeat-x;
    background-size: cover;
    width: 30px;
    height: 25px;
    background-position: center;
    .nav-container {
      cursor: initial;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      min-width: 100vw;
      min-height: 100vh;
      width: 100%;
      height: auto;
      background-color: map-get($colors, "white");
      display: none;
    }
  }
  .dropdown .position-absolute {
    // position:absolute;
  }
}
</style>