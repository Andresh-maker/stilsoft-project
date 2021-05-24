<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "assets/scss/vendor/reset";
@import "assets/scss/vars";

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background: $black;
  color: $white;
}
</style>
