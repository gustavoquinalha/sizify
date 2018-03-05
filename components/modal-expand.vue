<template lang="html">
  <transition name="fade">
    <div class="expand" v-show="expandSize.name">
      <div class="expand__close container column">
        <div class="">
          <button type="button" name="button" class="btn btn-danger btn-sm" @click="closeModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm" @click="screenCapture()"><i class="fas fa-camera"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm" @click="toggleRotate()" :class="{rotate : rotate === true}"><i class="fas fa-mobile-alt"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm" @click="toggleGrid()"><i class="fas fa-th"></i></button>
        </div>
      </div>

      <div class="block-img" id="capture" :style="{width: (expandSize.width + 40) + 'px', height: (expandSize.height + 100) + 'px'}">
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

          <div class="container-lines" v-show="grid">
            <div class="line" v-for="x in 12">

            </div>
          </div>

          <div class="card--content" :class="{'default-height' : config.defaultHeight}" :style="{transform: 'scale(' + config.size + ',' + config.size + ')', transformOrigin: 'left top 0px', height: expandSize.height * config.size + 'px', width: expandSize.width * config.size + 'px'}">
            <iframe :src="config.url" :width="expandSize.width" :height="expandSize.height" :style="{ minWidth: expandSize.width + 'px', height: expandSize.height + 'px'}"></iframe>
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
        html2canvas(document.querySelector("#capture"), {
          allowTaint: true,
          foreignObjectRendering: true,
          useCORS: true,
          logging: true,
          letterRendering: true
        }).then(canvas => {
          var url = canvas.toDataURL("image/png")
          var url = canvas.toDataURL();
          var img = '<img src="' + url + '" style="border:0;"></img>'
          var x = window.open();
          x.document.open();
          x.document.write(img);
          x.document.close();
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .block-img {
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 20px;
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

  .container-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 13px);
    height: 100%;
    z-index: 99999999;
    display: flex;
    justify-content: space-around;
    .line {
      width: 1px;
      height: 100vh;
      background: #58FFF5;
    }
  }

  .rotate {
    transition: .3s;
    i {
      transition: .3s;
      transform: rotate(90deg);
    }
  }
</style>
