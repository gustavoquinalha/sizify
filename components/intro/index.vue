<template lang="html">
  <div v-show="!config.url">

    <div class="container column align-center input-block">
      <div class="margin-bottom-10">
        <p>Enter a url to preview</p>
      </div>
      <form class="container column text-align-center" @submit.prevent="validateBeforeSubmit">
        <input type="text" v-model="url" class="input input-opacity" name="url" id="url" placeholder="Ex: https://github.com" required v-validate="'required|url:http'">
        <span v-show="errors.has('url')" class="error margin-top-10">{{ errors.first('url') }}</span>
      </form>
      <div class="margin-top-10">
        <small>Don`t forget http:// or https://</small>
      </div>
    </div>

    <div class="size margin content-image">

      <div class="content-intro container">
        <div class="content-intro--menu flex-basis-300">
          <img src="~/assets/images/menu.png" width="90%" alt="">
        </div>
        <div class="content-intro--image flex-basis-700">
          <div class="box-title">
            <h2>Preview changes and test on multiple devices instantly.</h2>
          </div>
          <img src="~/assets/images/1.gif" width="100%" alt="">
        </div>
      </div>

    </div>

    <!-- <div class="size margin content-image">
      <div class="box-title">
        <h2>Export your preview to image.</h2>
      </div>
      <div class="">
        <img src="~/assets/images/export.png" width="100%" alt="">
      </div>
    </div> -->

  </div>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import {
    mapState
  }
  from 'vuex'

  Vue.use(VeeValidate);

  export default {
    components: {},
    computed: {
      ...mapState(['config']),
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.config.loading = true
            setTimeout(() => {
              this.config.url = this.url
              this.config.loading = false
              return;
            }, 1000)
          }
        })
      }
    },
    data() {
      return {
        url: 'http://'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-intro {
    max-width: 90%;
    margin: 0 auto;
    overflow: hidden;
    justify-content: center;
    align-items: flex-start;
    > div {
      margin: 20px 0;
    }
    .content-intro--menu {}
    .content-intro--image {
      margin-left: 100px;
      .box-title {
        width: 100%;
        max-width: 400px;
      }
      img {
        max-width: 100%;
      }
    }
    @media (max-width: 980px) {
      flex-wrap: wrap-reverse;
      .content-intro--image {
        margin-left: 0;
      }
    }
  }

  .input-block {
    width: 100%;
    color: #fff;
    padding: 100px 0 0 0;
    box-sizing: border-box;
    position: relative;
    font-size: 18px;
    form {
      width: 500px;
      max-width: 90%;
      margin: 0 auto;
      input {
        width: 100%;
      }
    }
    p {
      font-weight: bold;
      font-size: 1.5rem;
    }
    small {
      color: #A6A6A6;
      font-size: 12px;
    }
  }

  .error {
    color: #ff4455;
    font-size: 14px;
  }

  .content-image {
    padding: 100px 0;
    box-sizing: border-box;
    text-align: center;
    img {
      width: 900px;
      max-width: 100%;
    }
  }
</style>
