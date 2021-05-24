<template>
  <div class="wrapper">
    <main class="app-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "main-layout",
};
</script>

<style lang="scss">
@import "../assets/scss/vars";
.wrapper {
  color: $black;
}
</style>
