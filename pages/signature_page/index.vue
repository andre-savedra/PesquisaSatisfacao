<template>
  <div class="p-d-flex p-flex-column p-jc-center p-ai-center p-text-center obg">
    <Signature
    myback="yellow"
    myBtnColor="red"
    />

       
  </div>
</template>

<script>
export default {
  name: "signature_page",
  layout: "clean",
};
</script>

<style lang="scss" scoped>
.obg {
  height: calc(100vh - var(--height-default-header));
  width: 100vw; 
}
</style>