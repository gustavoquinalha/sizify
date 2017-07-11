import Vue from 'vue';

new Vue({
  el: '#app',

  data () {
    return {
      // site: null,
      site: "http://quinalha.me",
      tags: 'apple',
      wrapp: 'wrap',
      categ: 'mobile',
      scalep: 1,
      scala: 1,
      modalAdd: false,
      query: '',
      id: '',
      mobile: '',
      name: '',
      width: '380',
      height: '500',
      tee: "vertical",
      sizes: [
        {id: 1, category: "mobile", teste: true, type: "apple", name: "iPhone 4", width: 320, height: 480},
        {id: 2, category: "mobile", teste: true, type: "apple", name: "iPhone 5", width: 320, height: 568},
        {id: 3, category: "mobile", teste: true, type: "android", name: "Galaxy S4", width: 360, height: 640},
        {id: 4, category: "mobile", teste: true, type: "apple", name: "iPhone 6", width: 375, height: 667},
        {id: 5, category: "mobile", teste: true, type: "apple", name: "iPhone 7 Plus", width: 414, height: 736},
        {id: 6, category: "tablet", teste: true, type: "android", name: "Nexus 7", width: 600, height: 960},
        {id: 7, category: "tablet", teste: true, type: "apple", name: "iPad Air", width: 768, height: 1024}
      ],
      sizeMobile: false,
      title: 'Colored filter',

        filtratipo: 'all'
    };
  },

  computed: {
    filteredItems: function () {
      this.className = 'teste'
                var result;
                if  (this.filtratipo != 'all'){
                    var filtratipo = this.filtratipo
                    result = this.sizes.filter(function (a) {
                        return a.category == filtratipo
                    });

                } else {
                    result =  this.sizes;
                }

                return result;
            },

    },

  methods: {
    revert: function (event) {
      this.sizes.filter(function (a) {
          // console.log(a.name, a.width, a.height)
          var recebeW = a.width
          var recebeH = a.height

          var viraw = recebeW
          var virah = recebeH

          a.width = virah
          a.height = viraw
          // console.log(viraw, virah)

      });
      var v = "vertical"
      var h = "horizontal"
      if (this.tee == "vertical") {
        this.tee = h
      } else {
        this.tee = v
      }

    },

      keyUpShow: function (event) {
      this.site = event.target.value
    },
      teste: function (event) {
      return this.sizes.filter(size => size.mobile);
    },
    addSize: function() {
      this.sizes.push({
       width: this.width,
       height: this.height,
       category: "default",
       name: "default"
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
