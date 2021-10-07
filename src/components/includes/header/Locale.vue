<template>
  <div ref="languageMain" @click.self="dropdown" class="languages">
    <div @click="dropdown" class="selected">
      <img :src="selectedImg" />
      <span>{{ language }}</span>
    </div>
    <ul ref="dropdown" v-bind="$attrs" class="dropdown-menu">
      <li
        @click="languageSelect"
        class="dropdown"
        v-for="lang in langs"
        :key="`lang-${lang.locale}`"
      >
        <img :src="lang.src" />
        {{ lang.locale }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Locale",
  data() {
    return {
      langs: [
        {
          locale: "IT", src: require("@/assets/languages/icons/it.svg")
        },
        { locale: "EN",
          src: require("@/assets/languages/icons/en.svg"), },
        { locale: "SQ", src: require("@/assets/languages/icons/sq.svg") },
      ],
      selectedImg: null,
      node: null,
    };
  },

  mounted() {
    if (localStorage.getItem("lange") != null) {
      this.$i18n.locale = localStorage.getItem("lange");
      this.selectedImg = localStorage.getItem("langeImg");
    } else {
      this.$i18n.locale = "it";
      localStorage.setItem("lange", this.$i18n.locale);
      this.selectedImg = require("@/assets/languages/icons/it.svg");
      localStorage.setItem("langeImg", this.selectedImg);
    }
  },

  methods: {
    dropdown() {
      if (this.$refs.dropdown.classList.contains("flex")) {
        this.$refs.languageMain.classList.remove("rotate");
        this.$refs.dropdown.classList.remove("flex");
      } else {
        this.$refs.languageMain.classList.add("rotate");
        this.$refs.dropdown.classList.add("flex");
      }
    },
    languageSelect(e) {
      if (e.target.nodeName == "IMG") {
        this.node = e.target.parentNode;
      } else {
        this.node = e.target;
      }
      if (this.selectedImg != this.node.firstChild.src) {
        this.selectedImg = this.node.firstChild.src;
      }
      let lange = this.node.textContent;
      lange = lange.toLowerCase();
      lange = lange.trim();
      if (this.$i18n.locale !== lange) {
        this.$i18n.locale = lange;
        localStorage.setItem("lange", lange);
        localStorage.setItem("langeImg", this.selectedImg);
        // this.$root.$i18n.locale = lange;
      }
      this.$refs.languageMain.classList.remove("rotate");
      this.$refs.dropdown.classList.remove("flex");
      // location.reload();
    },
  },
  computed: {
    language() {
      return this.$i18n.locale.toUpperCase();
    },
  },
};
</script>

<style lang='scss' scoped>
.languages {
  z-index: 35;
  position: relative;
  display: flex;
  .selected {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 15px;
      padding-left: 10px;
    }
    span {
      color: map-get($font_colors, "main");
      font-weight: 500;
      padding: 0px 10px;
    }
  }

  // &::after {
  //   content: url("../../../assets/icons/dropdown.svg");
  //   float: right;
  //   transition: transform 50ms;
  // }
  // &.rotate::after {
  //   transform: rotate(180deg);
  //   transition: transform 50ms;
  // }

  .dropdown-menu {
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
      img {
        width: 20px;
        height: 15px;
      }
    }
  }
}
</style>