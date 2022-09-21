export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lukras',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"},
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css'},
      {rel: "stylesheet",  href: "https://cdn.jsdelivr.net/npm/@ajusa/lit@latest/dist/lit.css"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/base.scss',
    '@/assets/normalize.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/v-scroll.js',
    '@/plugins/v-intersect.js',
    { src: '@/plugins/aos.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'vue-scrollto/nuxt',
    // ['vue-scrollto/nuxt', { duration: 3000 }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    vendor: ['aos']
  }
};
