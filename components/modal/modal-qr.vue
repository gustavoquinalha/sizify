<template lang="html">
  <transition name="fade">
    <div class="" v-show="config.qrcode">
      <div class="modal container align-center">
        <div class="modal-block">
          <div class="modal-block--head container align-items-center justify-content-between">
            <div class="">
              Qr code
            </div>
            <div class="close" @click="config.qrcode = false">
              <i class="fas fa-times"></i>
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
    </div>
  </transition>
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
