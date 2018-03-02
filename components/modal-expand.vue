<template lang="html">
  <transition name="fade">
    <div class="expand" v-show="config.expand">
      <div class="expand__close container column">
        <div class="">
          <button type="button" name="button" class="btn btn-danger btn-sm" @click="config.expand = ''"><i class="fas fa-times"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm" @click="screenCapture()"><i class="fas fa-camera"></i></button>
        </div>
        <div class="margin-top-10">
          <button type="button" name="button" class="btn btn-sm" @click="$store.commit('changeSizes')"><i class="fas fa-sync"></i></button>
        </div>
      </div>

      <div class="block-img" v-for="(card, index) in sizes" v-if="card.id === config.expand" id="capture">
        <div class="container column align-center">
          <div class="">
            <strong>{{card.name}}</strong>
          </div>
          <div class="expanh__head container align-center">
            <div class="">
              <strong>Width: </strong>{{card.width}}
            </div>
            <div class="margin-10">
              <span>x</span>
            </div>
            <div class="">
              <strong>Height: </strong>{{card.height}}
            </div>
          </div>
        </div>

        <div url="url" class="card" :style="{ width: card.width * config.size + 'px'}" v-if="card.id === config.expand">
          <div class="card--content" :class="{'default-height' : config.defaultHeight}" :style="{transform: 'scale(' + config.size + ',' + config.size + ')', transformOrigin: 'left top 0px', height: card.height * config.size + 'px', width: card.width * config.size + 'px'}">
            <iframe :src="config.url" :width="card.width" :height="card.height" :style="{ minWidth: card.width + 'px', height: card.height + 'px'}"></iframe>
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
      ...mapState(['sizes', 'config'])
    },

    methods: {
      screenCapture: function() {
        html2canvas(document.querySelector("#capture"), {
          allowTaint: true,
          foreignObjectRendering: true,
          useCORS: true,
        }).then(canvas => {
          // document.body.appendChild(canvas).classList.add("expand-img");
          var img = canvas.toDataURL()
          var iframe = '<iframe src="' + img + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
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
  .block-img {
    padding: 20px;
    box-sizing: border-box;
  }

  .expand {
    position: absolute;
    height: calc(100vh - 60px);
    width: calc(100% - 60px);
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
    }
  }

  .margin-10 {
    margin: 0 10px!important
  }
</style>
