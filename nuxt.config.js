module.exports = {
  router: {
    base: '/sizify'
  },
  css: [
    'node_modules/the-grid-flexbox/css/the-grid.min.css'
  ],
  head: {
    title: 'Sizify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A tool for preview changes and test on multiple devices instantly.' },
      {name: 'author', content: 'Sizify'},
      {name: 'robots', content: 'index/follow'},
      {name: 'googlebot', content: 'index/follow'},
      // google+
      {name: 'name', content: 'Sizify'},
      {name: 'description', content: 'A tool for preview changes and test on multiple devices instantly..'},
      {name: 'image', content: 'https://gustavoquinalha.github.io/sizify/intro.jpg'},
      // facebook
      {name: 'og:type', content: 'website'},
      {name: 'og:title', content: 'Sizify'},
      {name: 'og:url', content: 'https://gustavoquinalha.github.io/sizify/'},
      {name: 'og:site_name', content: 'Sizify'},
      {name: 'og:image', content: 'https://gustavoquinalha.github.io/sizify/intro.jpg'},
      {name: 'og:description', content: 'A tool for preview changes and test on multiple devices instantly.'},
      {name: 'og:locale', content: 'pt_Br'},
      {name: 'fb:app_id', content: '122670998365518'},
      {name: 'fb:admins', content: '111111'},
      // twitter
      {name: 'twitter:card', content: 'Summary'},
      {name: 'twitter:title', content: 'Sizify'},
      {name: 'twitter:description', content: 'A tool for preview changes and test on multiple devices instantly.'},
      {name: 'twitter:creator', content: 'Sizify'},
      {name: 'twitter:image', content: 'https://gustavoquinalha.github.io/sizify/intro.jpg'},
      // android
      {name: 'theme-color', content: '#24292e'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://gustavoquinalha.github.io/sizify/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' }
    ],
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#333333' },
  /*
  ** Build configuration
  */
  build: {
    // vendor: [
    //   '~/plugins/canvas2image.js'
    // ],
    extend (config, ctx) {
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.scss[2].options.data = '@import "./assets/css/main.scss";'
        }
      })
    }
  }
}
