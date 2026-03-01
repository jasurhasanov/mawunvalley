<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="section-label">Rest & Recharge</span>
        <h1>Our Cabins</h1>
        <p>Simple, cozy spaces designed for slow mornings and deep sleep.</p>
      </div>
    </section>

    <section class="cabins-section">
      <div class="container">
        <!-- All Cabins Include -->
        <div class="all-cabins-features">
          <h3>All Cabins Include</h3>
          <div class="features-row">
            <span>🚿 Outdoor Shower</span>
            <span>🛏️ Clean Bedsheets & Towels</span>
            <span>🔌 Charging Socket</span>
            <span>💨 Fan</span>
            <span>👕 Clothes Shelf</span>
            <span>🛋️ Comfortable Mattress</span>
          </div>
        </div>

        <div class="cabins-grid">
          <CabinCard
            name="Peace Cabin"
            style="Wooden exterior"
            bed="Queen Bed"
            :images="['/images/peace-1.jpg', '/images/peace-2.jpg', '/images/peace-3.jpg', '/images/peace-4.jpg', '/images/peace-5.jpg']"
            :features="['🏔️ Farm + Mountain View', '🏄 Surfboard Storage', '🧳 Luggage Space']"
          />
          <CabinCard
            name="Sandat Cabin"
            style="Wooden exterior with balcony & patio"
            bed="Queen Bed"
            :images="['/images/sandat-1.jpg', '/images/sandat-2.jpg', '/images/sandat-3.jpg', '/images/sandat-4.jpg', '/images/sandat-5.jpg']"
            :features="['🏔️ Farm + Mountain View', '🌅 Balcony', '🏄 Surfboard Storage']"
          />
          <CabinCard
            name="Rick's Windmill"
            style="Unique design with black balcony"
            bed="Queen Bed"
            :images="['/images/windmill-1.jpg', '/images/windmill-2.jpg', '/images/windmill-3.jpg', '/images/windmill-4.jpg']"
            :features="['🏔️ Farm + Mountain View', '🌅 Black Balcony']"
          />
          <CabinCard
            name="Jabalkap Cabin"
            style="A-frame style"
            bed="Single Bed"
            :images="['/images/jabalkap-1.jpg', '/images/jabalkap-2.jpg', '/images/jabalkap-3.jpg']"
            :features="['🏔️ Farm + Mountain View', '🏄 Surfboard Storage']"
          />
          <CabinCard
            name="Lime Cabin"
            style="Bright green exterior"
            bed="Queen Bed"
            :images="['/images/lime-1.jpg', '/images/lime-2.jpg', '/images/lime-3.jpg', '/images/lime-4.jpg', '/images/lime-5.jpg']"
            :features="['🌿 Farm View', '💚 Colorful & Cozy']"
            featured
          />
        </div>

        <!-- Booking CTA -->
        <div class="booking-cta">
          <h3>Ready to book your stay?</h3>
          <p>Message us on WhatsApp to check availability and rates.</p>
          <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20a%20cabin" class="btn btn-whatsapp btn-lg" target="_blank">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Guest Reviews</span>
          <h2>What Guests Say</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card">
            <span class="stars">★★★★★</span>
            <p>"The accommodation is on a beautiful farm with lots of charm. We've never had such a delicious breakfast while traveling!"</p>
            <strong>— Hamacher, Germany</strong>
          </div>
          <div class="review-card">
            <span class="stars">★★★★★</span>
            <p>"Spectacular farm! Spending time with the goats made us very happy. Definitely a place to enjoy the countryside and Noni's desserts!"</p>
            <strong>— Paola, Peru</strong>
          </div>
          <div class="review-card">
            <span class="stars">★★★★★</span>
            <p>"My little cabin was super cute and cozy. The BBQ nights were the absolute highlight—so delicious!"</p>
            <strong>— Guest Review</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Stay - Mawun Valley Farm' })
</script>

<style scoped>
.page-header { padding: 140px 0 60px; background: var(--color-cream); text-align: center; }
.cabins-section { padding: 60px 0; }
.all-cabins-features { text-align: center; margin-bottom: 50px; padding: 30px; background: var(--color-light); border-radius: 16px; }
.all-cabins-features h3 { margin-bottom: 20px; }
.features-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
.features-row span { background: #fff; padding: 10px 16px; border-radius: 25px; font-size: 14px; }
.cabins-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-bottom: 60px; }
.booking-cta { text-align: center; padding: 50px; background: var(--color-cream); border-radius: 20px; }
.booking-cta h3 { margin-bottom: 10px; }
.booking-cta p { margin-bottom: 20px; color: #666; }
.reviews-section { padding: 80px 0; background: var(--color-light); }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
.review-card { background: #fff; padding: 24px; border-radius: 12px; }
.review-card .stars { color: var(--color-gold); }
.review-card p { margin: 12px 0; font-style: italic; line-height: 1.7; }
</style>
