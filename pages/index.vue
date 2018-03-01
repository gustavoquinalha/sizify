<template>
  <div class="">
    <div>
      <topMenu/>

      <div class="container" v-show="config.url">
        <leftMenu/>
        <app/>
      </div>
    </div>

    <div v-show="!config.url">
      <div class="container column align-center content">
        <div class="margin-bottom-10">
          <p>Enter a url:</p>
        </div>
        <input type="url" v-model="url" class="input input-opacity" name="url" placeholder="Ex: https://github.com" v-on:keyup.enter="setUrl">
        <div class="margin-top-10">
          <small>Don`t forget http:// or https://</small>
        </div>

        <div class="credits">
          <span>© 2018 Sizify</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import topMenu from '~/components/topMenu.vue'
  import leftMenu from '~/components/leftMenu.vue'
  import app from '~/components/app.vue'
  import {
    mapState
  }
  from 'vuex'

  export default {
    components: {
      topMenu,
      leftMenu,
      app
    },
    computed: {
      ...mapState(['config'])

    },
    methods: {
      setUrl: function() {
        this.config.url = this.url
      }
    },
    data() {
      return {
        url: 'http://'
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/css/main.scss';
  .content {
    height: calc(100vh - 60px);
    width: 100%;
    color: #fff;
    background: #24292e;
    position: relative;
    font-size: 18px;
    input {
      width: 500px;
      max-width: 90%;
    }
    p {
      font-weight: 900;
    }
    small {
      color: #A6A6A6;
      font-size: 12px;
    }
    .credits {
      position: absolute;
      bottom: 20px;
      font-size: 14px;
    }
  }
</style>
