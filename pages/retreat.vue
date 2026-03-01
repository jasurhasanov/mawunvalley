<template>
  <div>
    <section class="page-header retreat-header">
      <div class="container">
        <span class="section-label">Group Trip</span>
        <h1>8-Day Farm Retreat</h1>
        <p>An immersive group experience at Mawun Valley. Disconnect to reconnect.</p>
      </div>
    </section>

    <section class="retreat-section">
      <div class="container">
        <div class="retreat-intro">
          <h2>The Experience</h2>
          <p>Join a small group for 8 days of slow living, permaculture learning, beach adventures, and community connection.</p>
        </div>

        <div class="retreat-highlights">
          <div class="highlight-card">
            <span>🌱</span>
            <h3>Permaculture</h3>
            <p>Hands-on farming and sustainable living practices</p>
          </div>
          <div class="highlight-card">
            <span>🏄</span>
            <h3>Surf & Beach</h3>
            <p>World-class waves just minutes away</p>
          </div>
          <div class="highlight-card">
            <span>🧘</span>
            <h3>Wellness</h3>
            <p>Morning yoga and mindfulness sessions</p>
          </div>
          <div class="highlight-card">
            <span>👨‍👩‍👧‍👦</span>
            <h3>Community</h3>
            <p>Shared meals and meaningful connections</p>
          </div>
          <div class="highlight-card">
            <span>🍽️</span>
            <h3>Farm Food</h3>
            <p>All meals included, farm-to-table</p>
          </div>
          <div class="highlight-card">
            <span>🏡</span>
            <h3>Accommodation</h3>
            <p>Private cabin for the duration</p>
          </div>
        </div>

        <div class="retreat-cta">
          <h3>Next Retreat Dates</h3>
          <p>Retreats run throughout the year with small groups. Contact us for upcoming dates and availability.</p>
          <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%208-day%20Farm%20Retreat" class="btn btn-whatsapp btn-lg" target="_blank">
            Inquire About Retreats
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Farm Retreat - Mawun Valley Farm' })
</script>

<style scoped>
.page-header { padding: 140px 0 60px; background: linear-gradient(135deg, var(--color-sage) 0%, var(--color-dark) 100%); text-align: center; color: #fff; }
.page-header .section-label { color: rgba(255,255,255,0.8); }
.retreat-section { padding: 60px 0; }
.retreat-intro { text-align: center; max-width: 600px; margin: 0 auto 50px; }
.retreat-intro h2 { margin-bottom: 15px; }
.retreat-intro p { color: #666; line-height: 1.7; }
.retreat-highlights { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-bottom: 60px; }
.highlight-card { background: var(--color-light); padding: 25px; border-radius: 12px; text-align: center; }
.highlight-card span { font-size: 2rem; }
.highlight-card h3 { margin: 12px 0 8px; font-size: 1rem; }
.highlight-card p { color: #666; font-size: 13px; }
.retreat-cta { text-align: center; padding: 50px; background: var(--color-cream); border-radius: 20px; }
.retreat-cta h3 { margin-bottom: 10px; }
.retreat-cta p { color: #666; margin-bottom: 25px; max-width: 500px; margin-left: auto; margin-right: auto; }
</style>
