<template>
  <div>
    <slot></slot>
    <card-info></card-info>
    <slot name="copyright">
      <copyright></copyright>
    </slot>
  </div>
</template>

<script>
import Copyright from "./includes/footer/Copyright.vue";
import CardInfo from "./includes/footer/CardInfo.vue";
export default {
  name: "FooterVue",
  components: {
    Copyright: Copyright,
    CardInfo: CardInfo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>