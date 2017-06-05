<template>
  <div id="app">
    <input placeholder="edit me" @keyup.enter="keyUpShow" value="http://">
    <div class="container">
      <div class="item" v-for="size in sizes" v-show="site">
          <div class=" box">
            <div class="">
              width: <input type="text" name="" value="" v-model="size.width"><br />
              height: <input type="text" name="" value="" v-model="size.height">
            </div>
            <iframe :src="site" v-bind:width="size.width" v-bind:height="size.height"></iframe>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

// 360x640 / 480x800 / 320x534 / 600x1024  / 320x568 / 320x480 / 375x667 / 640x360  / 320x570 / 540x960

export default {
  name: 'app',
  data () {
    return {
      site: null,
      sizes: [
        {"id": 1, "width": 360, "height": 640},
        {"id": 2, "width": 480, "height": 800},
        {"id": 3, "width": 320, "height": 534},
        {"id": 4, "width": 600, "height": 1024},
        {"id": 5, "width": 320, "height": 568},
        {"id": 6, "width": 320, "height": 480},
        {"id": 7, "width": 375, "height": 667},
        {"id": 8, "width": 640, "height": 360},
        {"id": 9, "width": 320, "height": 570},
        {"id": 10, "width": 540, "height": 960}
      ]
    }
  },
  methods: {
      keyUpShow: function (event) {
      this.site = event.target.value
      }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex
}
.item {
  margin: 10px;
}
iframe {
  border: 1px solid #ababab;
  overflow-x: hidden;
}
</style>
