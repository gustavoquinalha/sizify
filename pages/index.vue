<template>
  <div class="">
    <div>
      <topMenu/>

      <transition name="fade">
        <div class="container" v-show="config.url">
          <leftMenu/>
          <app/>
        </div>
      </transition>
    </div>

    <transition name="fade">
      <div v-show="!config.url">
        <div class="container column align-center content">
          <div class="margin-bottom-10">
            <p>Enter a url</p>
          </div>

          <form class="container column text-align-center" @submit.prevent="validateBeforeSubmit">
            <input type="text" v-model="url" class="input input-opacity" name="url" id="url" placeholder="Ex: https://github.com" required v-validate="'required|url:http'">
            <span v-show="errors.has('url')" class="error margin-top-10">{{ errors.first('url') }}</span>
          </form>

          <div class="margin-top-10">
            <small>Don`t forget http:// or https://</small>
          </div>

          <div class="credits">
            <span>© 2018 Sizify</span>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import topMenu from '~/components/topMenu.vue'
  import leftMenu from '~/components/leftMenu.vue'
  import app from '~/components/app.vue'
  import {
    mapState
  }
  from 'vuex'

  Vue.use(VeeValidate);

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
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.config.url = this.url
            return;
          }

        });
      },
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

  .error {
    color: #ff4455;
    font-size: 14px;
  }
</style>
