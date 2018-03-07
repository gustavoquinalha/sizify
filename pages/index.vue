<template>
  <div class="">
    <loader/>

    <modalExpand/>

    <transition name="fade">
      <div class="container" v-show="config.url">
        <leftMenu/>
        <app/>
      </div>
    </transition>

    <transition name="fade">
      <div class="" v-show="!config.url">
        <intro/>
      </div>
    </transition>

    <footerBottom v-show="!config.url" />

  </div>
</template>

<script>
  import Vue from 'vue';
  import leftMenu from '~/components/leftMenu.vue'
  import app from '~/components/app.vue'
  import modalExpand from '~/components/modal/modal-expand'
  import loader from '~/components/loader'
  import intro from '~/components/intro'
  import footerBottom from '~/components/footer'
  import {
    mapState
  }
  from 'vuex'

  export default {
    components: {
      leftMenu,
      app,
      modalExpand,
      loader,
      intro,
      footerBottom
    },
    computed: {
      ...mapState(['config']),
    },
    methods: {},
    data() {
      return {

      }
    }
  }
</script>
