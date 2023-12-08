// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/kinde", "@nuxtjs/google-fonts"],
  components: true,
  runtimeConfig: {
    public:{
     secret: process.env.NUXT_NEWS_ID
  }
 },
 googleFonts: {
  families: {
    Poppins: true,
  },
  display: 'swap',
 }
})