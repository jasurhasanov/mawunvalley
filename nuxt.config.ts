export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/content'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Mawun Valley Farm - Slow Down, Connect Deeply',
      meta: [
        { name: 'description', content: 'A family farm in Lombok dedicated to sustainable living, permaculture education, and eco-tourism.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&family=Caveat:wght@500&display=swap' }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  content: {
    highlight: {
      theme: 'github-light'
    }
  },

  compatibilityDate: '2024-11-01'
})
