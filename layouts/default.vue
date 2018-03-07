<template>
  <div class="app">
    <topMenu/>
    <nuxt/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import topMenu from '~/components/topMenu.vue'

  Vue.use(VeeValidate);

  export default {
    components: {
      topMenu
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    background: #24292e;
    min-height: 100vh;
  }
</style>
