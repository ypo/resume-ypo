import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - CV',
    title: 'Yannick Poirier',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vue-qrcode',  mode: 'client' }, { src: '@/plugins/vue-observe-visibility',  mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    "@nuxtjs/svg",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-seo',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.yannickpoirier.fr',
   filter ({ routes }) {
      return routes.filter(route => route.path !== '/pdf')
    }
  },

  seo: {
    // My custom configuration
    baseUrl: 'https://www.yannickpoirier.fr',
    name: 'Yannick Poirier',
    title: 'CV',
    templateTitle: '%name% - %title%',
    description: 'Research and Development software engineer, passionate about new technologies that are changing the world',
    canonical: 'auto',
    isForcedTrailingSlash: false,
    keywords: ['software', 'rust', 'c++', 'engineer', 'cv'],
    author: 'Yannick Poirier',
    lang: 'en',
    language: 'English',
    charset: 'utf-8',
    'openGraph.image': {
      url: 'https://www.yannickpoirier.fr/2361270.jpg',
    },
  },

  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
    },
    fileLoader: {
        // file-loader options
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
