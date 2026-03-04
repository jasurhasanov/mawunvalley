export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/content'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Mawun Valley Farm — Slow Down, Connect Deeply | Lombok, Indonesia',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: "A family-run regenerative farm in Lombok offering immersive stays, farm-to-table dining at Noni's Resto, community events, and meaningful experiences. 3 minutes from Mawun Beach." },
        { name: 'keywords', content: "Mawun Valley, Lombok farm stay, eco tourism Lombok, farm to table restaurant, Noni's Resto, permaculture Indonesia, sustainable travel, Mawun Beach accommodation" },
        { name: 'author', content: 'Mawun Valley Farm' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Mawun Valley Farm' },
        { property: 'og:title', content: 'Mawun Valley Farm — Slow Down, Connect Deeply' },
        { property: 'og:description', content: 'A family-run regenerative farm in Lombok offering immersive stays, farm-to-table dining, community events, and meaningful experiences.' },
        { property: 'og:image', content: 'https://www.mawunvalley.com/images/og-image.jpg' },
        { property: 'og:url', content: 'https://www.mawunvalley.com' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mawun Valley Farm — Slow Down, Connect Deeply' },
        { name: 'twitter:description', content: 'A family-run regenerative farm in Lombok offering immersive stays, farm-to-table dining, and meaningful experiences.' },
        { name: 'twitter:image', content: 'https://www.mawunvalley.com/images/og-image.jpg' },
        
        // Theme color
        { name: 'theme-color', content: '#c17f59' },
        { name: 'msapplication-TileColor', content: '#c17f59' }
      ],
      link: [
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        
        // Canonical
        { rel: 'canonical', href: 'https://www.mawunvalley.com' },
        
        // Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&family=Caveat:wght@500&display=swap' }
      ],
      script: [
        // Google Analytics
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-6CS0L55JM7', async: true },
        { innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-6CS0L55JM7');" },
        
        // Structured Data - Organization
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mawun Valley Farm",
            "alternateName": "Mawun Valley",
            "url": "https://www.mawunvalley.com",
            "logo": "https://www.mawunvalley.com/images/logo.png",
            "description": "A family-run regenerative farm in Lombok offering immersive stays, farm-to-table dining, and meaningful experiences.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lombok",
              "addressRegion": "West Nusa Tenggara",
              "addressCountry": "ID"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-822-5844-0585",
              "contactType": "reservations"
            },
            "sameAs": [
              "https://www.instagram.com/mawunvalley",
              "https://www.instagram.com/nonislombok"
            ]
          })
        },
        
        // Structured Data - WebSite with SearchAction
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Mawun Valley Farm",
            "url": "https://www.mawunvalley.com"
          })
        },
        
        // Structured Data - SiteNavigationElement for sitelinks
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Stay & Contribute",
                "description": "Immersive farm stays starting at $19/day",
                "url": "https://www.mawunvalley.com/stay-contribute"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Farm Events",
                "description": "BBQ nights, cooking classes, and community gatherings",
                "url": "https://www.mawunvalley.com/gather"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Noni's Resto & Pastry",
                "description": "Farm-to-table café with signature Burnt Cheesecake",
                "url": "https://www.mawunvalley.com/nonis"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Membership",
                "description": "Join our community as a founding member",
                "url": "https://www.mawunvalley.com/belong"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Private Retreat",
                "description": "Book the entire farm for your group",
                "url": "https://www.mawunvalley.com/retreat"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 6,
                "name": "Field Notes",
                "description": "Stories and updates from the farm",
                "url": "https://www.mawunvalley.com/blog"
              }
            ]
          })
        }
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
