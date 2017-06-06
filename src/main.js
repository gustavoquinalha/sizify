import Vue from 'vue'
// import App from './App.vue'

new Vue({
  el: '#app',
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
})
