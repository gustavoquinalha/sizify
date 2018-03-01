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
      {itemprop: 'name', content: 'Sizify'},
      {itemprop: 'description', content: 'A tool for preview changes and test on multiple devices instantly..'},
      {itemprop: 'image', content: 'https://gustavoquinalha.github.io/sizify/intro.jpg'},
      // facebook
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Sizify'},
      {property: 'og:url', content: 'https://gustavoquinalha.github.io/sizify/'},
      {property: 'og:site_name', content: 'Sizify'},
      {property: 'og:image', content: 'https://gustavoquinalha.github.io/sizify/intro.jpg'},
      {property: 'og:description', content: 'A tool for preview changes and test on multiple devices instantly.'},
      {property: 'og:locale', content: 'pt_Br'},
      {property: 'fb:app_id', content: '122670998365518'},
      {property: 'fb:admins', content: '111111'},
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
      { rel: 'icon', type: 'image/x-icon', href: 'https://gustavoquinalha.github.io/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#333333' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      // if (ctx.dev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
