<template>
  <div class="relative-left-menu">
    <div class="left-menu-fixed">
      <div class="left-menu container column justify-content-center align-items-center">
        <div class="left-menu--links flex-grow-1 container column justify-content-center align-items-center">

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" @click="config.show = ''" :class="{ active : config.show === '' }">
              <img src="~/assets/images/icons/all.svg" width="23" alt="" />
            </div>

            <div class="item-left-menu" @click="config.show = 'mobile'" :class="{ active : config.show === 'mobile' }">
              <img src="~/assets/images/icons/phone.svg" width="20" alt="" />
            </div>

            <div class="item-left-menu" @click="config.show = 'tablet'" :class="{ active : config.show === 'tablet' }">
              <img src="~/assets/images/icons/tablet.svg" width="23" alt="" />
            </div>
            <!-- <div class="item-left-menu">
              <img src="~/assets/images/icons/default.svg" width="18" alt="" />
            </div> -->
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu active" @click="$store.commit('changeSizes')" :class="{ rotate : config.landscape }">
              <img src="~/assets/images/icons/vertical.svg" width="23" alt="" />
            </div>

            <div class="item-left-menu" @click="$store.commit('showKeyboard')" :class="{ active : config.keyboard }">
              <img src="~/assets/images/icons/keyboard.svg" width="20" alt="" />
            </div>
          </div>

          <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" @click="$store.commit('setHeight')" :class="{ active : config.defaultHeight }">
              <img src="~/assets/images/icons/height.svg" width="18" alt="" />
            </div>
          </div>

          <!-- <div class="block-left-menu container column justify-content-center align-items-center">
            <div class="item-left-menu" @click="config.wrap = false" :class="{ active : !config.wrap }">
              <img src="~/assets/images/icons/nowrap.svg" width="18" alt="" />
            </div>

            <div class="item-left-menu" @click="config.wrap = true" :class="{ active : config.wrap }">
              <img src="~/assets/images/icons/wrap.svg" width="18" alt="" />
            </div>
          </div> -->

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
              <img src="~/assets/images/icons/qrcode.svg" width="18" alt="" />
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
      ...mapState(['config'])
    }
  }
</script>

<style lang="scss" scoped>
  .relative-left-menu {
    position: relative;
    min-width: 60px;
    min-height: calc(100vh - 60px);
    box-shadow: 3px 0 6px 0 rgba(0, 0, 0, .1)
  }

  .left-menu-fixed {
    height: 100%;
    overflow: auto;
    width: 60px;
    position: fixed;
    background: #404448;
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
