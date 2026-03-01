<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="section-label">Come Together</span>
        <h1>Gather</h1>
        <p>BBQ nights, cooking classes, and experiences that bring people together.</p>
      </div>
    </section>

    <section class="events-section">
      <div class="container">
        <div class="events-grid">
          <!-- BBQ Night -->
          <div class="event-card">
            <div class="event-icon">🔥</div>
            <h2>Friday BBQ Night</h2>
            <p>Our signature weekly gathering. Fresh grilled meats and veggies, farm salads, good music, and even better company under the stars.</p>
            <div class="event-details">
              <span>📅 Every Friday</span>
              <span>🕖 7:00 PM</span>
              <span>💰 150K / person</span>
            </div>
            <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20join%20BBQ%20Night" class="btn btn-primary" target="_blank">Reserve a Spot</a>
          </div>

          <!-- Cooking Class -->
          <div class="event-card">
            <div class="event-icon">👨‍🍳</div>
            <h2>Cooking Classes</h2>
            <p>Learn to cook traditional Indonesian dishes with fresh ingredients from our farm. Take the flavors home with you.</p>
            <div class="event-details">
              <span>📅 By request</span>
              <span>⏱️ 2-3 hours</span>
              <span>💰 From 200K</span>
            </div>
            <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20a%20cooking%20class" class="btn btn-primary" target="_blank">Book a Class</a>
          </div>

          <!-- Little Farmer -->
          <div class="event-card">
            <div class="event-icon">👶</div>
            <h2>Little Farmer</h2>
            <p>Activities for kids: feeding animals, collecting eggs, planting seeds. Perfect for families visiting the farm.</p>
            <div class="event-details">
              <span>📅 Daily</span>
              <span>⏱️ 1-2 hours</span>
              <span>👨‍👩‍👧 Family friendly</span>
            </div>
            <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20Little%20Farmer%20for%20kids" class="btn btn-primary" target="_blank">Inquire</a>
          </div>

          <!-- Farm Tour -->
          <div class="event-card">
            <div class="event-icon">🌿</div>
            <h2>Farm Tour</h2>
            <p>Walk through our permaculture gardens, meet the animals, and learn about sustainable farming practices.</p>
            <div class="event-details">
              <span>📅 Daily</span>
              <span>⏱️ 1 hour</span>
              <span>💰 Free for guests</span>
            </div>
            <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20a%20farm%20tour" class="btn btn-primary" target="_blank">Book a Tour</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Gather - Mawun Valley Farm' })
</script>

<style scoped>
.page-header { padding: 140px 0 60px; background: var(--color-cream); text-align: center; }
.events-section { padding: 60px 0; }
.events-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
.event-card { background: #fff; padding: 40px 30px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; }
.event-icon { font-size: 3rem; margin-bottom: 20px; }
.event-card h2 { margin-bottom: 15px; }
.event-card > p { color: #666; line-height: 1.7; margin-bottom: 20px; }
.event-details { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 25px; }
.event-details span { background: var(--color-cream); padding: 6px 14px; border-radius: 20px; font-size: 13px; }
</style>
