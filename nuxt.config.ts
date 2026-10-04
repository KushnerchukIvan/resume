export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/scss/main.scss'],
  typescript: { strict: true, typeCheck: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'uk' },
      title: 'Іван Кушнерчук — Frontend Developer',
      meta: [
        { name: 'description', content: 'Портфоліо Івана Кушнерчука — Frontend Developer. Vue.js, Nuxt 3, TypeScript та інтерактивні вебінтерфейси.' },
        { name: 'theme-color', content: '#f4f3ee' },
        { property: 'og:title', content: 'Іван Кушнерчук — Frontend Developer' },
        { property: 'og:description', content: 'Frontend Developer з комерційним досвідом у Vue.js та любов’ю до добре продуманих інтерфейсів.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap' },
      ],
    },
  },
})
