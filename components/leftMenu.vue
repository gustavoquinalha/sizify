<template>
  <div class="relative-left-menu">
    <div class="left-menu-fixed">
      <div class="left-menu container column justify-content-center align-items-center">
        <div class="left-menu--links flex-grow-1 container column justify-content-center align-items-center">

          <div class="block-left-menu container column justify-content-center align-items-center">
            <button type="button" name="button" class="btn btn-primary" @click="config.newSize = true">+</button>
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" @click="config.show = ''" :class="{ active : config.show === '' }">
              <img src="~/assets/images/icons/all.svg" width="21" alt="" />
            </div>

            <div class="item-left-menu" @click="config.show = 'mobile'" :class="{ active : config.show === 'mobile' }">
              <i class="fas fa-mobile-alt"></i>
            </div>

            <div class="item-left-menu" @click="config.show = 'tablet'" :class="{ active : config.show === 'tablet' }">
              <i class="fas fa-tablet-alt"></i>
            </div>

            <div class="item-left-menu" @click="config.show = 'default'" :class="{ active : config.show === 'default' }">
              <i class="fas fa-expand"></i>
            </div>
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu active" @click="$store.commit('changeSizes')" :class="{ rotate : config.landscape }">
              <i class="fas fa-mobile-alt"></i>
            </div>

            <div class="item-left-menu" @click="$store.commit('showKeyboard')" :class="{ active : config.keyboard }">
              <i class="fas fa-keyboard"></i>
            </div>
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" @click="$store.commit('setHeight')" :class="{ active : config.defaultHeight }">
              <i class="fas fa-columns"></i>
            </div>
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" @click="config.wrap = false" :class="{ active : !config.wrap }">
              <i class="fas fa-pause"></i>
            </div>

            <div class="item-left-menu" @click="config.wrap = true" :class="{ active : config.wrap }">
              <i class="fas fa-th-large"></i>
            </div>
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" :class="{ active : config.size === 1}" @click="config.size = 1">
              <span>100%</span>
            </div>

            <div class="item-left-menu" :class="{ active : config.size === .9}" @click="config.size = .9">
              <span>75%</span>
            </div>

            <div class="item-left-menu" :class="{ active : config.size === .5}" @click="config.size = .5">
              <span>50%</span>
            </div>
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" @click="config.qrcode = true">
              <i class="fas fa-qrcode"></i>
            </div>
          </div>

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
    name: 'leftMenu',
    data() {
      return {}
    },
    computed: {
      ...mapState(['config', 'expandSize'])
    }
  }
</script>

<style lang="scss" scoped>
  .relative-left-menu {
    position: relative;
    min-width: 60px;
  }

  .left-menu-fixed {
    overflow: auto;
    height: calc(100vh - 60px);
    width: 60px;
    position: fixed;
    background: #404448;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, .5);
    color: #fff;
    z-index: 100;
  }

  .left-menu {
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 10px;
  }

  .block-left-menu {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, .1)
  }

  .item-left-menu {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .5;
    transition: .3s;
    cursor: pointer;
    span {
      font-size: 12px;
    }
    &.active,
    &:hover {
      opacity: 1
    }
    img {
      transition: .3s;
    }
    &.rotate {
      img {
        transform: rotate(90deg);
      }
    }
  }
</style>
