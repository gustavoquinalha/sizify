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
          <input type="url" v-model="config.url" class="input input-opacity" name="name" placeholder="Ex: https://github.com">
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
  import {
    mapState
  }
  from 'vuex'

  export default {
    name: 'topMenu',
    data() {
      return {}
    },
    computed: {
      ...mapState(['config'])
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
</style>
