import Vue from 'vue'
import Vuex from 'vuex'
import vuexCache from 'vuex-cache'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      config: {
        url: 'http://adas.dasdsa',
        show: '', // mobile, tablet, defaul,
        landscape: false,
        keyboard: false,
        wrap: false,
        size: 1, // 1 .75 .50 .25
        qrcode: false,
        defaultHeight: false,
        newSize: false,
        lastId: 10,
        loading: false
      },
      expandSize: {
        name: '',
        width: '',
        height: ''
      },
      sizes: [
        {
          id: 1,
          category: 'mobile',
          name: 'iPhone 4',
          width: 320,
          height: 480
        },
        {
          id: 2,
          category: 'mobile',
          name: 'iPhone 5',
          width: 320,
          height: 568
        },
        {
          id: 3,
          category: 'mobile',
          name: 'iPhone 6',
          width: 375,
          height: 667
        },
        {
          id: 4,
          category: 'mobile',
          name: 'iPhone 7 Plus',
          width: 414,
          height: 736
        },
        {
          id: 5,
          category: 'mobile',
          name: 'iPhone X',
          width: 357,
          height: 812
        },
        {
          id: 6,
          category: 'mobile',
          name: 'Galaxy S4',
          width: 360,
          height: 640
        },
        {
          id: 7,
          category: 'mobile',
          name: 'Nexus 6P',
          width: 411,
          height: 731
        },
        {
          id: 8,
          category: 'tablet',
          name: 'Nexus 7',
          width: 600,
          height: 960
        },
        {
          id: 9,
          category: 'tablet',
          name: 'iPad',
          width: 768,
          height: 1024
        }
      ]
    },
    plugins: [vuexCache],
    mutations: {
      changeSizes (state) {
        this.state.config.landscape = !this.state.config.landscape
        this.state.sizes.forEach(function (size) {
          var sizeW = size.width
          size.width = size.height
          size.height = sizeW
        })
      },
      setHeight (state) {
        this.state.config.defaultHeight = !this.state.config.defaultHeight
      // this.state.sizes.forEach(function (size) {
      //   var tempHeight = 400
      //   let OldHeight = size.height
      //   if (size.height === tempHeight) {
      //     size.height = OldHeight
      //   } else {
      //     size.height = tempHeight
      //   }
      // })
      },
      showKeyboard (state) {
        this.state.config.keyboard = !this.state.config.keyboard
      }
    }
  })
}

export const strict = false
export default createStore
