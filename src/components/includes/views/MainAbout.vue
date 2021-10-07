<template>
  <div class="padding-container main-about">

    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "MainAbout",
    props: ["subtitleDesc", "titleDesc", "maintitle", "subtitle"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-about {
  height: 100%;
  padding: 0 162px;
    @media (max-width: 772px){
        padding: 0 5%;
    }
}
</style>