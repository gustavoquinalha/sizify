<template lang="html">
  <div class="" v-show="config.qrcode">
    <transition name="fade">
      <div class="modal container align-center">
        <div class="modal-block">
          <div class="modal-block--head container align-items-center justify-content-between">
            <div class="">
              Qr code
            </div>
            <div class="close" @click="config.qrcode = false">
              <img src="~/assets/images/icons/x.svg" alt="" />
            </div>
          </div>
          <div class="modal-block--content container column align-center">
            <div class="qrcode">
              <qriously :value="config.url" :size="200" />
            </div>
            <div class="text-align-center margin-top-10">
              <span>{{config.url}}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    mapState
  }
  from 'vuex'

  import VueQriously from 'vue-qriously'

  Vue.use(VueQriously)

  export default {
    transition: {
      name: 'fade'
    },
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState(['config'])
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    height: 100vh;
    z-index: 100;
    .modal-block {
      background: #fff;
      width: 400px;
      max-width: 90%;
      border-radius: 4px;
      overflow: hidden;
      > div {
        padding: 20px;
        box-sizing: border-box;
      }
      .modal-block--head {
        background: #f4f4f4;
        border-bottom: 1px solid #ddd;
        font-weight: 900;
        .close {
          cursor: pointer;
          opacity: .5;
          transition: .3s;
          &:hover {
            opacity: 1
          }
        }
      }
      .modal-block--content {
        .qrcode {}
      }
    }
  }
</style>
