<template>
  <div>
    <header class="page-hero">
      <div class="page-hero-bg">
        <img src="/images/gallery-4.jpg" alt="Farm events">
      </div>
      <div class="page-hero-content">
        <span class="section-label light">Gather</span>
        <h1>Come Together</h1>
        <p class="handwritten">"Where community happens"</p>
      </div>
    </header>

    <section class="page-intro">
      <div class="container">
        <div class="intro-content">
          <h2>Events & Activities</h2>
          <p class="lead">From weekly BBQ nights to cooking classes to kids' programs — the farm comes alive when we gather together.</p>
        </div>
      </div>
    </section>

    <section class="events-section">
      <div class="container">
        <div class="events-grid">
          <!-- BBQ Night -->
          <div class="event-card featured">
            <div class="event-badge">Weekly</div>
            <div class="event-icon">🔥</div>
            <h3>#BBQNights</h3>
            <p class="event-tagline">Every Friday, the farm comes alive</p>
            <p>Farm-to-table feast under the stars. Live music, good people, great food. All ingredients fresh from our farm and local fishermen.</p>
            <div class="event-details">
              <span>📅 Every Friday</span>
              <span>⏰ 5:00 PM onwards</span>
              <span>💰 IDR 130,000</span>
            </div>
            <a href="https://megatix.co.id/events/bbqnights-mawun-valley" class="btn btn-primary" target="_blank">Book on Megatix</a>
          </div>

          <!-- Cashew Apple Jam Cooking Class -->
          <div class="event-card featured">
            <div class="event-badge">Seasonal</div>
            <div class="event-icon">🥜</div>
            <h3>Cashew Apple Jam Cooking Class</h3>
            <p class="event-tagline">A signature farm experience</p>
            <p>Our farm is home to <strong>6 large cashew trees</strong>. During harvest season, join us to learn the traditional art of making cashew apple jam — a rare delicacy you won't find anywhere else. Pick fresh cashew apples, process them, and create your own jar to take home.</p>
            <div class="event-details">
              <span>📅 Mid Aug - Mid Dec</span>
              <span>⏰ 3 hours</span>
              <span>💰 IDR 150,000</span>
            </div>
            <a href="https://megatix.co.id/events/cashew-apple-jam-cooking-class-at-mawun-valley-farm" class="btn btn-primary" target="_blank">Book on Megatix</a>
          </div>

          <!-- Cooking Classes -->
          <div class="event-card">
            <div class="event-icon">🍳</div>
            <h3>Cooking Classes</h3>
            <p class="event-tagline">From soil to plate</p>
            <p>Harvest ingredients from the farm, learn traditional and modern techniques, and enjoy what you've created. Take home recipes and memories.</p>
            <div class="event-details">
              <span>📅 By reservation</span>
              <span>⏰ 3 hours</span>
            </div>
            <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20a%20cooking%20class" class="btn btn-outline-dark" target="_blank">Inquire</a>
          </div>

          <!-- Little Farmer -->
          <div class="event-card">
            <div class="event-icon">👶</div>
            <h3>Little Farmer</h3>
            <p class="event-tagline">First steps in farming</p>
            <p>Perfect for families! Kids learn about farming through play — feeding animals, planting seeds, harvesting vegetables. Education through experience.</p>
            <div class="event-details">
              <span>📅 Weekends</span>
              <span>👦 Ages 3-12</span>
            </div>
            <a href="https://megatix.co.id/events/little-farmer-first-steps-to-farming-and-gardening" class="btn btn-primary" target="_blank">Book on Megatix</a>
          </div>

          <!-- Private Events -->
          <div class="event-card">
            <div class="event-icon">🎉</div>
            <h3>Private Events</h3>
            <p class="event-tagline">Your celebration, our space</p>
            <p>Birthdays, retreats, gatherings, workshops. Host your event in a unique setting with mountain views and farm vibes.</p>
            <div class="event-details">
              <span>📅 By arrangement</span>
              <span>👥 Groups welcome</span>
            </div>
            <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20hosting%20a%20private%20event" class="btn btn-outline-dark" target="_blank">Inquire</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Reviews -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What Guests Say</span>
          <h2>BBQ Nights & Events</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"What an incredible little gem! The sweetest hosts, coolest guests, most delicious meals, and cutest animals. Make sure to stay for the Friday night BBQ! You won't find a more wholesome evening."</p>
            <p class="review-author">— Boryan, Google Maps</p>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"The BBQ nights were the best—so delicious! I'll miss those evenings the most. Full of joy and great company."</p>
            <p class="review-author">— Pame, Chile</p>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"We popped past when seeing the 'secret farm' signs by the road! Had lovely ice lemon tea, met goats, ducklings, chickens. He mentioned they have a BBQ every Friday—sounds lovely!"</p>
            <p class="review-author">— Chloe, Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Gather - Events & Activities | Mawun Valley Farm' })
</script>

<style scoped>
.page-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.page-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
}

.page-hero-content {
  position: relative;
  z-index: 1;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
  color: white;
}

.section-label.light {
  color: rgba(255,255,255,0.9);
}

.handwritten {
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  opacity: 0.9;
}

.page-intro {
  padding: 60px 0;
  text-align: center;
}

.intro-content h2 {
  margin-bottom: 16px;
}

.lead {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.events-section {
  padding: 0 0 80px;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.event-card {
  background: #fff;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
  position: relative;
}

.event-card.featured {
  border: 2px solid var(--color-gold);
}

.event-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--color-gold);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.event-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.event-card h3 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.event-tagline {
  color: var(--color-sage);
  font-style: italic;
  margin-bottom: 16px;
}

.event-card > p:not(.event-tagline) {
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
}

.event-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.event-details span {
  background: var(--color-cream);
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
}

.btn-primary {
  display: inline-block;
  background: var(--color-terracotta);
  color: white;
  padding: 12px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: var(--color-sage);
}

.btn-outline-dark {
  display: inline-block;
  border: 2px solid var(--color-dark);
  color: var(--color-dark);
  padding: 10px 26px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-outline-dark:hover {
  background: var(--color-dark);
  color: white;
}

.reviews-section {
  padding: 80px 0;
  background: var(--color-light);
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.review-card {
  background: var(--color-white);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.stars {
  color: #D4A84B;
  margin-bottom: 8px;
}

.review-text {
  font-size: 14px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 12px;
  font-style: italic;
}

.review-author {
  font-weight: 600;
  font-size: 13px;
}
</style>
