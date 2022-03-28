export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Memorize HTML',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Educational games to learn HTML tags. Because we don’t use tags well enough.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'HTML, balise, learning, tags, MDN, learn' },
      { name: 'author', content: 'Valentin SLd' },

      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' },

      { property: 'og:locale', content: 'en' },
      { property: 'og:type', content: 'game' },
      { property: 'og:title', content: 'Memorize HTML - Educational games to learn HTML tags' },
      { property: 'og:description', content: 'Educational games to learn HTML tags. Because we don’t use tags well enough.' },
      { property: 'og:image', content: 'https://memorize-html.vercel.app/share.png' },
      { property: 'og:image:secure_url', content: 'https://memorize-html.vercel.app/share.png' },
      { property: 'og:url', content: 'https://memorize-html.vercel.app/' },
      { property: 'og:site_name', content: 'Memorize HTML' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#777dfd' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  styleResources: {
    less: [
      '~/_assets/less/variables.less'
    ]
  }
}
