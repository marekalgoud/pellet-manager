export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Pellet manager',
    meta: [
      { charset: 'utf-8' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/dayjs',
    '~/plugins/datetime'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyB1QlzY7xuhOTRUN8MyGnQw5GZsQRukhzY',
      authDomain: 'granule-aca9d.firebaseapp.com',
      databaseURL: 'https://granule-aca9d.firebaseio.com',
      projectId: 'granule-aca9d',
      storageBucket: 'granule-aca9d.appspot.com',
      messagingSenderId: '144076476816',
      appId: '1:144076476816:web:c46b492bef0d6e72c7a315',
      measurementId: 'G-HHKPBXRE6F'
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
        }
      },
      firestore: true
    }
  },

  pwa: {
    meta: {
      lang: 'fr',
      theme_color: '#EDF3FF'
    },
    manifest: {
      name: 'Pellet Manager PWA',
      lang: 'fr'
    }
  }
}
