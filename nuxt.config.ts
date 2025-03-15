// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Nuxt 3 Auth App',
      meta: [
        { name: 'description', content: 'Nuxt 3 authentication application with login and password recovery' }
      ],
    }
  }
})
