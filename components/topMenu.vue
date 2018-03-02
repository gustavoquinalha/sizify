<template>
  <div class="relative-menu">
    <div class="menu-fixed">
      <div class="menu container align-items-center">

        <div class="menu--logo">
          <nuxt-link :to="{ name: 'index', params: {} }">
            <img src="~/assets/images/logo.svg" alt="" />
          </nuxt-link>
        </div>

        <div class="menu--search flex-basis-300 container align-items-center" v-show="config.url">
          <form class="container align-items-center text-align-center" @submit.prevent="validateBeforeSubmit">
            <input type="text" v-model="url" class="input input-opacity" name="url" id="url" placeholder="Ex: https://github.com" required v-validate="'required|url:http'">
            <div class="absolute-error">
              <span v-show="errors.has('url')" class="error margin-top-10">{{ errors.first('url') }}</span>
            </div>
          </form>
        </div>

        <div class="menu--links margin-left-10 flex-grow-1 container justify-content-end align-items-center">
          <a href="https://github.com/gustavoquinalha/sizify" target="_blank">
            <img src="~/assets/images/icons/github.svg" width="30" alt="" />
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import {
    mapState
  }
  from 'vuex'

  export default {
    name: 'topMenu',
    data() {
      return {
        url: 'http://'
      }
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .relative-menu {
    background: #24292e;
    position: relative;
    height: 60px;
  }

  .menu-fixed {
    height: 60px;
    width: 100%;
    position: fixed;
    background: #24292e;
    color: #fff;
    z-index: 9;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .1)
  }

  .menu {
    background: #24292e;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin: 0 auto;
    height: 60px;
    .menu--logo {
      margin-right: 10px;
      img {
        width: 80px;
        max-width: 100%;
      }
    }
    .menu--search {
      position: relative;
      form {
        width: 100%;
      }
    }
  }

  .input-opacity {
    background: #404448;
    border-color: #404448;
    transition: .3s;
    color: #ddd;
    &::placeholder {
      color: #ddd
    }
    &:focus {
      color: #24292e;
      vertical-align: middle;
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: right 8px center;
      border: 1px solid #d1d5da;
      &::placeholder {
        color: #24292e
      }
    }
  }

  .absolute-error {
    position: absolute;
    top: 10px;
    left: 300px;
    width: 100%;
    text-align: left;
    margin-left: 10px;
    @media (max-width: 720px) {
      left: 0;
      top: 48px;
    }
  }
</style>
