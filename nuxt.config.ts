// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  colorMode: {
    preference: 'system', 
    fallback: 'dark', 
    classPrefix: '',
    classSuffix: '',
    storageKey: 'app-theme'
  },
})
