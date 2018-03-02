<template>
  <div class="container-card container align-items-start" :class="{ wrap : config.wrap }">
    <div v-for="card in data" url="url" class="card" :style="{ minWidth: card.width * config.size + 'px'}" v-show="config.show === card.category || config.show === ''">

      <div class="card--head container column align-center">
        <strong>{{card.name}}</strong>
        <div class="container ">
          <div class="flex-grow-1 container align-items-center">
            <span>W</span>
            <input type="number" v-model="card.width" name="" value="">
          </div>
          <div class="" :class="{hidden : config.size === .5}" v-show="!config.defaultHeight">
            x
          </div>
          <div class="flex-grow-1 container align-items-center" v-show="!config.defaultHeight">
            <span>H</span>
            <input type="number" v-model="card.height" name="" value="">
          </div>
        </div>
      </div>

      <div class="card--content" :class="{'default-height' : config.defaultHeight}" :style="{transform: 'scale(' + config.size + ',' + config.size + ')', transformOrigin: 'left top 0px', height: card.height * config.size + 'px', width: card.width * config.size + 'px'}">
        <iframe :src="config.url" :width="card.width" :height="card.height" :style="{ minWidth: card.width + 'px', height: card.height + 'px'}"></iframe>
        <div class="card--content--keyboard" v-show="config.keyboard">
          <img src="~/assets/images/teclado-horizontal.png" alt="" v-if="config.landscape">
          <img src="~/assets/images/teclado-vertical.png" alt="" v-else>
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
    name: 'card',
    data() {
      return {}
    },
    props: {
      data: {
        type: Array
      },
      url: {
        type: String
      }
    },
    methods: {
      goTo: function () {
        alert("teste")
      }
    },
    computed: {
      ...mapState(['config'])
    }
  }
</script>

<style lang="scss" scoped>
  .container-card {
    height: calc(100vh - 60px);
    overflow: hidden;
    width: 100%;
    overflow: scroll;
    padding: 10px;
    box-sizing: border-box;
  }

  .card {
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    text-align: center;
    .card--head {
      background: #f4f4f4;
      border-bottom: 1px solid #ddd;
      min-height: 80px;
      padding: 15px;
      box-sizing: border-box;
      .container {
        > div {
          margin: 10px;
          margin-bottom: 0;
          span {
            font-weight: bold;
            margin-right: 5px;
            font-size: 14px;
          }
        }
      }
      input {
        width: 100%;
        text-align: center;
        border: 1px solid #ddd;
        padding: 5px;
      }
    }
    .card--content {
      position: relative;
      iframe {
        border: none;
      }
      .card--content--keyboard {
        position: absolute;
        bottom: 0;
        left: 0;
        width: calc(100% - .9em);
        transform-origin: bottom;
        img {
          transform-origin: bottom;
          width: 100%;
          background: red;
        }
      }
    }
  }

  .hidden {
    display: none
  }

  .default-height {
    height: calc(100vh - 210px)!important;
    iframe {
      height: calc(100vh - 210px)!important;
    }
  }
</style>
