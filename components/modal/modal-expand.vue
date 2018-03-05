<template lang="html">
  <transition name="fade">
    <div class="expand" v-show="expandSize.name">
      <div class="expand__close container column">
        <div class="">
          <button type="button" name="button" class="btn btn-danger btn-sm tooltip-left" title="Close expanded mode" @click="closeModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm tooltip-left" @click="screenCapture()" title="Save as image"><i class="fas fa-camera"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm tooltip-left" @click="toggleRotate()" title="Rotate orientation" :class="{rotate : rotate === true}"><i class="fas fa-mobile-alt"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm tooltip-left" @click="toggleGrid()" title="Show grid view"><i class="fas fa-th"></i></button>
        </div>
      </div>

      <div class="block-img" id="captureSize" :style="{width: (expandSize.width + 40) + 'px', height: (expandSize.height + 100) + 'px'}">
        <div class="container column align-center">
          <div class="">
            <strong>{{expandSize.name}}</strong>
          </div>
          <div class="expanh__head container align-center">
            <div class="">
              <strong>Width: </strong>{{expandSize.width}}
            </div>
            <div class="margin-10">
              <span>x</span>
            </div>
            <div class="">
              <strong>Height: </strong>{{expandSize.height}}
            </div>
          </div>
        </div>

        <div url="url" class="card" :style="{ width: expandSize.width * config.size + 'px'}">

          <div class="card--content" :class="{'default-height' : config.defaultHeight}" :style="{transform: 'scale(' + config.size + ',' + config.size + ')', transformOrigin: 'left top 0px', height: expandSize.height * config.size + 'px', width: expandSize.width * config.size + 'px'}">
            <iframe :src="config.url" :width="expandSize.width" :height="expandSize.height" :style="{ minWidth: expandSize.width + 'px', height: expandSize.height + 'px'}"></iframe>
            <div class="container-line" v-show="grid">
              <div class="line" :style="{ left: (expandSize.width / 13) * x - 8 + 'px'}" v-for="x in 13"></div>
            </div>
            <div class="card--content--keyboard" v-show="config.keyboard">
              <img src="~/assets/images/teclado-horizontal.png" alt="" v-if="config.landscape">
              <img src="~/assets/images/teclado-vertical.png" alt="" v-else>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import html2canvas from 'html2canvas';
  import tippy from 'tippy.js';
  import {
    mapState
  }
  from 'vuex'
  export default {
    computed: {
      ...mapState(['sizes', 'config', 'expandSize'])
    },
    data() {
      return {
        grid: false,
        rotate: false
      }
    },
    mounted() {
      tippy(document.querySelectorAll('.tooltip-left'), {
        placement: 'left-end',
        delay: 200
      })
    },
    methods: {
      closeModal: function() {
        this.expandSize.name = ''
        this.expandSize.width = ''
        this.expandSize.height = ''
      },
      toggleRotate: function() {
        var sizeW = this.expandSize.width
        this.expandSize.width = this.expandSize.height
        this.expandSize.height = sizeW
        this.rotate = !this.rotate
      },
      toggleGrid: function() {
        this.grid = !this.grid
      },
      screenCapture: function() {
        html2canvas(document.querySelector("#captureSize"), {
          allowTaint: true,
          foreignObjectRendering: true,
          useCORS: true,
          logging: true,
          letterRendering: true
        }).then(canvas => {
          var img = canvas.toDataURL("image/png")
          var iframe = '<img src="' + img + '" />'
          var x = window.open();
          x.document.open();
          x.document.write(iframe);
          x.document.close();
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .container-line {
    .line {
      width: 1px;
      background: rgb(29, 241, 255);
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 99999999;
    }
  }

  .container-line > div:last-child {
    background: transparent
  }

  .block-img {
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .expand {
    position: absolute;
    height: calc(100vh - 60px);
    width: 100%;
    background: #24292e;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, .5);
    color: #fff;
    z-index: 1000;
    overflow: auto;
    box-sizing: border-box;
    padding: 10px 0;
    .expand__close {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 1000;
      .btn {
        width: 40px;
      }
    }
    .expanh__head {
      margin-bottom: 10px;
      opacity: .5;
      margin-top: 5px;
    }
    .card {
      margin: 0 auto;
      background: #fff;
      position: relative;
    }
  }

  .margin-10 {
    margin: 0 10px!important
  }

  .rotate {
    transition: .3s;
    i {
      transition: .3s;
      transform: rotate(90deg);
    }
  }
</style>
