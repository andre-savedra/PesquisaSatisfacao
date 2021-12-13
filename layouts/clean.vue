<template>
  <div class="p-d-flex p-flex-column default-main">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "Clean",
};
</script>

<style lang="scss">
@import "@/layouts/scss/reset.scss";

$sidebar_second_positions: 150px, 220px, 220px, 300px;

.default-main {
  width: 100vw;
  height: auto;
  min-height: 100vh;

}
</style>