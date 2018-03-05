<template lang="html">
  <transition name="fade">
    <div class="loading" v-show="config.loading">
      <div class=""></div>
    </div>
  </transition>
</template>

<script>
import {
  mapState
}
from 'vuex'
  export default {
    computed: {
      ...mapState(['config'])
    }
  }
</script>

<style lang="scss" scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .8);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      width: 34px;
      height: 34px;
      border: 5px solid #ddd;
      border-radius: 50%;
      animation: loader 1.2s linear infinite;
      border-color: #ddd #ddd #ddd transparent;
      @keyframes loader {
        from {
          transform: rotate(360deg);
        }
        to {}
      }
    }
  }
</style>
