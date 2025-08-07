// https://nuxt.com/docs/api/configuration/nuxt-config
 
import process from 'node:process';

export default defineNuxtConfig({
   devtools: { enabled: true },
 
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-auth-utils'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
 
  runtimeConfig: {
      // Private keys that are only available on the server
      // apiSecret: 'my-secret',
      // Public keys that are exposed to the client
       cookie: {
        sameSite: 'lax'
      },
      oauth: {
      // provider in lowercase (github, google, etc.)
      "battle.net": {
        clientId: process.env.BNET_ID,
        clientSecret: process.env.BNET_CLIENT_SECRET,
        redirectUri: 'http://localhost:3000/success'
      }
    },
      public: {
        BNET_ID: process.env.BNET_ID,
        BNET_CLIENT_SECRET: process.env.BNET_CLIENT_SECRET,
      }
    }
})