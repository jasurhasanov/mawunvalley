<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="section-label">Farm Experience</span>
        <h1>Farm Experience Programs</h1>
        <p>Live and learn at Mawun Valley Farm. Help 3 hours a day, enjoy private accommodation, meals, and unforgettable experiences.</p>
      </div>
    </section>

    <section class="programs-section">
      <div class="container">
        <div class="programs-grid">
          <!-- Beachside Farming -->
          <article class="program-card">
            <div class="program-image">
              <img src="/images/beachside-cover.jpg" alt="Beachside farming">
              <span class="program-badge">🏄 Surf + Farm</span>
            </div>
            <div class="program-content">
              <div class="program-rating">★★★★★ <span>5.0 (15 reviews)</span></div>
              <h2>Lombok Permaculture Experience: Beachside</h2>
              <p>Balance farm life with world-class waves — just 5 minutes from the beach.</p>
              <div class="program-info">
                <span>🛏️ Private cabin</span>
                <span>🍳 Breakfast & Lunch</span>
                <span>⏰ 3 hrs/day</span>
                <span class="price">💰 From US$19/day</span>
              </div>
              <a href="#inquiry" class="btn btn-primary">Apply Now</a>
            </div>
          </article>

          <!-- Slow Living -->
          <article class="program-card">
            <div class="program-image">
              <img src="/images/slowliving-cover.jpg" alt="Slow living">
              <span class="program-badge">🧘 Mindful</span>
            </div>
            <div class="program-content">
              <div class="program-rating">★★★★★ <span>5.0 (15 reviews)</span></div>
              <h2>Slow Living: Connect with Nature</h2>
              <p>Find calm and groundedness. Embrace a slower pace and appreciate the small details.</p>
              <div class="program-info">
                <span>🛏️ Private cabin</span>
                <span>🍳 Breakfast & Lunch</span>
                <span>⏰ 3 hrs/day</span>
                <span class="price">💰 From US$19/day</span>
              </div>
              <a href="#inquiry" class="btn btn-primary">Apply Now</a>
            </div>
          </article>

          <!-- Creative -->
          <article class="program-card">
            <div class="program-image">
              <img src="/images/creative-cover.jpg" alt="Creative program">
              <span class="program-badge">📸 Creative</span>
            </div>
            <div class="program-content">
              <div class="program-rating">★★★★★ <span>5.0 (15 reviews)</span></div>
              <h2>Creative Content & Marketing</h2>
              <p>Help us tell the farm's story through photography, video, and social media.</p>
              <div class="program-info">
                <span>🛏️ Private cabin</span>
                <span>🍳 Breakfast & Lunch</span>
                <span>⏰ 3 hrs/day</span>
                <span class="price">💰 From US$19/day</span>
              </div>
              <a href="#inquiry" class="btn btn-primary">Apply Now</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Inquiry Form -->
    <section class="inquiry-section" id="inquiry">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Apply</span>
          <h2>Interested in Joining?</h2>
          <p>Send us a message and tell us about yourself.</p>
        </div>
        <div class="inquiry-cta">
          <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20your%20farm%20experience%20programs" class="btn btn-whatsapp btn-lg" target="_blank">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Farm Experience Programs - Mawun Valley Farm' })
</script>

<style scoped>
.page-header { padding: 140px 0 60px; background: var(--color-cream); text-align: center; }
.programs-section { padding: 60px 0; }
.programs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
.program-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.program-image { position: relative; }
.program-image img { width: 100%; height: 220px; object-fit: cover; }
.program-badge { position: absolute; top: 16px; left: 16px; background: rgba(255,255,255,0.95); padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
.program-content { padding: 24px; }
.program-rating { color: var(--color-gold); margin-bottom: 12px; }
.program-rating span { color: #888; font-size: 13px; margin-left: 8px; }
.program-content h2 { font-size: 1.3rem; margin-bottom: 10px; }
.program-content > p { color: #666; margin-bottom: 16px; line-height: 1.6; }
.program-info { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
.program-info span { background: var(--color-cream); padding: 6px 12px; border-radius: 20px; font-size: 13px; }
.program-info .price { background: var(--color-gold); color: #fff; font-weight: 600; }
.inquiry-section { padding: 80px 0; background: var(--color-light); text-align: center; }
.inquiry-cta { margin-top: 30px; }
</style>
