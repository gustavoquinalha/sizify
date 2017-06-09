import Vue from 'vue';

new Vue({
  el: '#app',
  data () {
    return {
      site: null,
      // site: "teste.com",
      scalep: 1,
      sizes: [
        {"id": 1, "type": "mobile", "name": "iPhone 4", "width": 320, "height": 480},
        {"id": 2, "type": "mobile", "name": "iPhone 5", "width": 320, "height": 568},
        {"id": 3, "type": "mobile", "name": "Galaxy S4", "width": 360, "height": 640},
        {"id": 4, "type": "mobile", "name": "iPhone 6", "width": 375, "height": 667},
        {"id": 5, "type": "mobile", "name": "iPhone 7 Plus", "width": 414, "height": 736},
        {"id": 6, "type": "tablet", "name": "Nexus 7", "width": 600, "height": 960},
        {"id": 7, "type": "tablet", "name": "iPad Air", "width": 768, "height": 1024}
      ]
    }
  },
  methods: {
      keyUpShow: function (event) {
      this.site = event.target.value
      }
    }
});
