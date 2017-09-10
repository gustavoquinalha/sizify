import Vue from 'vue';
import QrcodeVue from 'qrcode.vue';
import VueLocalStorage from 'vue-localstorage'
import DefaultSizes from './sizes'
import uuid from 'uuid/v4'

const CUSTOM_SIZES_LOCAL_STORAGE_KEY = 'custom_sizes'

Vue.use(VueLocalStorage)

new Vue({
  components: {
    QrcodeVue,
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
      sizes: [...DefaultSizes, ...getLocalStorageSizes()],
      sizeMobile: false,
      title: 'Colored filter',
      filtratipo: 'all'
    };
  },

  computed: {
    filteredItems: function() {
      this.className = 'teste'
      var result;
      if (this.filtratipo != 'all') {
        var filtratipo = this.filtratipo
        result = this.sizes.filter(function(a) {
          return a.category == filtratipo
        });

      } else {
        result = this.sizes;
      }

      return result;
    },

  },

  methods: {
    revert: function(event) {
      this.sizes.filter(function(a) {
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

    keyUpShow: function(event) {
      this.site = event.target.value
    },
    teste: function(event) {
      return this.sizes.filter(size => size.mobile);
    },
    addSize: function() {
      const newSize = {
        width: this.width,
        height: this.height,
        category: "default",
        name: this.name || 'Custom Size',
        custom: true,
        id: uuid() 
      }
      this.sizes.push(newSize)
      addNewCustomSizeToLocalStorage(newSize)

      this.width = ''
      this.height = ''
      this.name = ''
      this.modalAdd = false
    },
    removeSize: function(sizeIdex, size) {
      this.sizes.splice(sizeIdex, 1)
      removeFromLocalStorage(size)
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

function addNewCustomSizeToLocalStorage (newSize) {
  const contextCustomSizes = getLocalStorageSizes()
  contextCustomSizes.push(newSize)
  Vue.localStorage.set(CUSTOM_SIZES_LOCAL_STORAGE_KEY, JSON.stringify(contextCustomSizes))
}

function getLocalStorageSizes () {
  return JSON.parse(Vue.localStorage.get(CUSTOM_SIZES_LOCAL_STORAGE_KEY, '[]'))
}

function updateLocalStorage (sizes) {
  Vue.localStorage.set(CUSTOM_SIZES_LOCAL_STORAGE_KEY, JSON.stringify(sizes))
}

function removeFromLocalStorage (size) {
  const localStorageSizes = getLocalStorageSizes()
  const index = localStorageSizes.indexOf(size)
  localStorageSizes.splice(index, 1)
  updateLocalStorage(localStorageSizes)
}