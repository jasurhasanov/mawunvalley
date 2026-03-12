<template>
  <div>
    <header class="map-hero">
      <div class="container">
        <span class="section-label light">Local Guide</span>
        <h1>Explore the Valley & Beyond</h1>
        <p class="tagline">Beaches, surf spots, local warungs, and hidden gems — curated by the Mawun Valley team.</p>
      </div>
    </header>

    <section class="map-intro">
      <div class="container">
        <div class="intro-content">
          <p>South Lombok is full of treasures waiting to be discovered. We've mapped out our favorite spots — from the beaches we surf to the warungs where we eat, the viewpoints we love, and the places that make this corner of Indonesia so special.</p>
          <p class="hint">📍 Click on any marker to see details, photos, and tips from our team.</p>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/d/u/1/embed?mid=19H0hrQEsrqLRCz-qDp4ovFOXTc6lqFM&ehbc=2E312F&noprof=1" 
          width="100%" 
          height="600"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>

    <section class="highlights-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Nearby Highlights</span>
          <h2>What's Around the Farm</h2>
        </div>
        <div class="highlights-grid">
          <div class="highlight-card">
            <span class="highlight-icon">🏖️</span>
            <h3>Mawun Beach</h3>
            <p>3 minutes away. A calm, crescent-shaped bay perfect for swimming and learning to surf.</p>
          </div>
          <div class="highlight-card">
            <span class="highlight-icon">🏄</span>
            <h3>Surf Breaks</h3>
            <p>Tampah, Lancing, and Areguling — all within 10 minutes. Waves for every level.</p>
          </div>
          <div class="highlight-card">
            <span class="highlight-icon">🍜</span>
            <h3>Local Warungs</h3>
            <p>Authentic Indonesian food, fresh seafood, and our favorite hidden spots.</p>
          </div>
          <div class="highlight-card">
            <span class="highlight-icon">🌅</span>
            <h3>Viewpoints</h3>
            <p>Sunset spots and panoramic views of the coastline you won't find in guidebooks.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <span class="section-label">Questions?</span>
        <h2>We're Happy to Help</h2>
        <p>Want recommendations or need directions? Our team knows this area like the back of our hand.</p>
        <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20looking%20at%20your%20local%20map%20and%20have%20some%20questions." class="btn btn-whatsapp btn-lg" target="_blank">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Ask Us Anything
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ 
  title: 'Local Map & Guide | Mawun Valley Farm',
  meta: [
    { name: 'description', content: 'Explore South Lombok with our curated map — beaches, surf spots, local restaurants, and hidden gems around Mawun Valley Farm.' }
  ]
})
</script>

<style scoped>
.map-hero {
  background: linear-gradient(135deg, var(--color-hero-dark) 0%, var(--color-hero-light) 100%);
  min-height: 280px;
  padding: 100px 20px 80px;
  text-align: center;
  color: white;
}

.map-hero h1 {
  color: white;
  margin-bottom: 16px;
  font-size: 2.8rem;
}

.tagline {
  font-size: 1.25rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}

.section-label.light {
  color: rgba(255,255,255,0.8);
}

.map-intro {
  padding: 60px 0 40px;
  background: var(--color-warm-white);
}

.intro-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.intro-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.intro-content .hint {
  font-size: 1rem;
  color: var(--color-terracotta);
  font-weight: 500;
}

.map-section {
  background: var(--color-cream);
  padding: 0;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

.map-container iframe {
  width: 100%;
  height: 600px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.highlights-section {
  padding: 80px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-header h2 {
  margin-top: 8px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.highlight-card {
  background: var(--color-warm-white);
  padding: 32px 24px;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.highlight-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 16px;
}

.highlight-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--color-dark);
}

.highlight-card p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--color-hero-dark) 0%, var(--color-hero-light) 100%);
  text-align: center;
  color: white;
}

.cta-section h2 {
  color: white;
  margin: 8px 0 16px;
}

.cta-section p {
  opacity: 0.95;
  max-width: 500px;
  margin: 0 auto 32px;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #25D366;
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp svg {
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .map-hero h1 {
    font-size: 2rem;
  }
  
  .tagline {
    font-size: 1.1rem;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .map-container iframe {
    height: 450px;
    border-radius: 12px;
  }
}
</style>
