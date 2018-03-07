<template lang="html">
  <div class="size margin content-intro container align-center">

    <div class="flex-basis-700 container column align-center">
      <div class="content-intro--input">
        <div class="margin-bottom-10">
          <div class="margin-bottom-20">
            <h1>Preview changes and test on multiple devices instantly.</h1>
          </div>
          <p>Enter a url to preview</p>
        </div>
        <form class="container column text-align-center" @submit.prevent="validateBeforeSubmit">
          <input type="text" v-model="url" class="input input-opacity" name="url" id="url" placeholder="Ex: https://github.com" required v-validate="'required|url:http'">
          <span v-show="errors.has('url')" class="error margin-top-10">{{ errors.first('url') }}</span>
        </form>
        <div class="margin-top-20">
          <div class="share">
            <small>Share</small>
            <ul class="container">
              <li>
                <a href="http://www.facebook.com/sharer.php?u=http://quinalha.me/sizify/" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/share?url=http://quinalha.me/sizify/;text=Preview changes and test on multiple devices instantly with Sizify. #sizify" class="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://quinalha.me/sizify/;text=Preview changes and test on multiple devices instantly." target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content-intro--image flex-grow-1 flex-basis-300">
      <img src="~/assets/images/menu.png" width="" alt="">
    </div>

  </div>
</template>

<script>
  import {
    mapState
  }
  from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapState(['config']),
    },
    methods: {

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
    min-height: calc(100vh - 120px);
    box-sizing: border-box;
    margin: 0 auto;
    overflow: hidden;
    > div {
      margin: 20px 0;
    }
    .content-intro--image {
      img {
        width: 250px;
        max-width: 100%;
      }
      @media (max-width: 980px) {
        display: none;
      }
    }
    .content-intro--input {
      width: 100%;
      color: #fff;
      box-sizing: border-box;
      position: relative;
      font-size: 18px;
      max-width: 500px;
      width: 100%;
      form {
        margin: 0 auto;
        width: 100%;
        input {
          width: 100%;
        }
      }
      p {
        font-weight: 200;
      }
      small {
        color: #A6A6A6;
      }
    }
  }

  .share {
    ul {
      list-style: none;
      margin-top: 10px;
      li {
        a {
          color: #B0B0B0;
          text-decoration: none;
          margin-right: 10px;
          font-size: 20px;
          transition: .3s;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
</style>
