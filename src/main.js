import Vue from 'vue';
import QrcodeVue from 'qrcode.vue';

new Vue({
  components: {
    QrcodeVue
  },

  el: '#app',

  data () {
    return {
      size: '200',
      background: '#fff',
      foreground: '#000',
      site: "http://",
      sizee: "all",
      tags: 'apple',
      wrapp: 'nowrap',
      categ: 'mobile',
      scalep: 1,
      scala: 1,
      modalAdd: false,
      modalTeclado: false,
      modalQrCode: false,
      query: '',
      id: '',
      mobile: '',
      name: '',
      width: '380',
      height: '500',
      tee: 'src/assets/phone.svg',
      ttst: 'close',
      mqrcode: 'close',
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
      var v = "src/assets/phone.svg"
      var h = "src/assets/phone2.svg"
      if (this.tee == v) {
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
       name: this.name || 'Custom Size'
     }),
     this.width = ''
     this.height = ''
     this.name = ''
     this.modalAdd = false
   },
   toggleModal: function() {
     this.modalAdd = !this.modalAdd
     this.modalQrCode = false
     },
   toggleModalTeclado: function() {
       var open = "open"
       var close = "close"

       this.modalTeclado = !this.modalTeclado;

       
       if (this.ttst == open) {
         this.ttst = close
       } else {
         this.ttst = open
       }

    },
   toggleModalQrCode: function() {
       this.modalQrCode = !this.modalQrCode
       this.modalAdd = false

       var open = "open"
       var close = "close"
       if (this.mqrcode == open) {
         this.mqrcode = close
       } else {
         this.mqrcode = open
       }
     },
  }
});
