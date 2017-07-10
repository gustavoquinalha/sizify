import Vue from 'vue';

new Vue({
  el: '#app',

  data () {
    return {
      // site: null,
      site: "http://quinalha.me/",
      scalep: 1,
      modalAdd: false,
      query: '',
      id: '',
      mobile: '',
      name: '',
      width: '',
      height: '',
      sizes: [
        {id: 1, mobile: true, name: "iPhone 4", width: 320, height: 480},
        {id: 2, mobile: true, name: "iPhone 5", width: 320, height: 568},
        {id: 3, mobile: true, name: "Galaxy S4", width: 360, height: 640},
        {id: 4, mobile: true, name: "iPhone 6", width: 375, height: 667},
        {id: 5, mobile: true, name: "iPhone 7 Plus", width: 414, height: 736},
        {id: 6, mobile: false, name: "Nexus 7", width: 600, height: 960},
        {id: 7, mobile: false, name: "iPad Air", width: 768, height: 1024}
      ],
      sizeMobile: false
    };
  },

  // computed: {
  //   sizeMobile(){
  //     return this.sizes.filter(size => size.mobile);
  //   }
  // },

  methods: {
      keyUpShow: function (event) {
      this.site = event.target.value
    },
      teste: function (event) {
      return this.sizes.filter(size => size.mobile);
    },
    addSize: function() {
      this.sizes.push({
       width: this.width,
       height: this.height
     }),
     this.width = ''
     this.height = ''
     this.modalAdd = false
   },
   toggleModal: function() {
       this.modalAdd = !this.modalAdd
     },
  }
});
