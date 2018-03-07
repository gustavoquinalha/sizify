<template>
  <div class="relative-menu">
    <div class="menu-fixed">
      <div class="menu container align-items-center">

        <div class="menu--logo">
          <nuxt-link :to="{ name: 'index', params: {} }">
            <img src="~/assets/images/logo.svg" alt="" />
          </nuxt-link>
        </div>


        <transition name="loader">
          <div class="menu--search flex-basis-300 container align-items-center" v-show="config.url">
            <form class="container align-items-center text-align-center" @submit.prevent="validateBeforeSubmit">
              <input type="text" v-model="url" class="input input-opacity" name="url" id="url" placeholder="Ex: https://github.com" required v-validate="'required|url:http'">
              <div class="absolute-error">
                <transition name="loader">
                  <span v-show="errors.has('url')" class="error margin-top-10">{{ errors.first('url') }}</span>
                </transition>
              </div>
            </form>
          </div>
        </transition>

        <transition name="loader">
          <div class="back" v-show="$nuxt.$route.name === 'faq'">
            <nuxt-link :to="{ name: 'index', params: {} }">
              <i class="fas fa-arrow-left"></i>
              <span> back to aplication</span>
            </nuxt-link>
          </div>
        </transition>

        <div class="menu--links margin-left-10 flex-grow-1 container justify-content-end align-items-center">
          <ul class="container align-items-center">
            <li>
              <nuxt-link :to="{ name: 'faq', params: {} }" class="tooltip-top" title="Any question?">
                <i class="fas fa-question"></i>
                <!-- FAQ -->
              </nuxt-link>
            </li>
            <li>
              <a href="https://github.com/gustavoquinalha/sizify" target="_blank" class="tooltip-top" title="Show me the code">
                <i class="fab fa-github"></i>
                <!-- Github -->
              </a>
            </li>
          </ul>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import tippy from 'tippy.js';
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
      ...mapState(['config']),

        setCurrentUrl: function(config) {
          this.url = this.config.url
        }
    },
    watch: {
      setCurrentUrl: function(val) {
        this.url = this.config.url
      }
    },
    mounted() {
      tippy(document.querySelectorAll('.tooltip-top'), {
        placement: 'bottom-start'
      })
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.config.url = this.url
            return;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .relative-menu {
    background: $primary;
    position: relative;
    height: 60px;
  }

  .menu-fixed {
    height: 60px;
    width: 100%;
    position: fixed;
    background: $primary;
    color: $white;
    z-index: 9;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .1)
  }

  .menu {
    background: $primary;
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
    .menu--links {
      ul {
        list-style: none;
        li {
          margin-left: 20px;
          a {
            color: $grey;
            text-decoration: none;
            transition: .3s;
            &:hover {
              color: $white;
            }
          }
          i {
            font-size: 20px;
          }
          img {
            opacity: .5;
            transition: .3s;
            &:hover {
              opacity: 1;
            }
          }
        }
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

  .back {
    margin: 10px;
    a {
      color: #fff;
      text-decoration: none;
    }
    @media (max-width: 480px) {
      span {
        display: none
      }
    }
  }
</style>
