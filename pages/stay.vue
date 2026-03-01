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
          <!-- Peace Cabin -->
          <CabinCard
            name="Peace Cabin"
            cabinStyle="Wooden exterior"
            bed="Queen Bed"
            :images="['/images/program-1.jpg']"
            :features="['🏔️ Farm + Mountain View', '🏄 Surfboard Storage', '🧳 Luggage Space']"
          />

          <!-- Sandat Cabin -->
          <CabinCard
            name="Sandat Cabin"
            cabinStyle="Wooden exterior with balcony & patio"
            bed="Queen Bed"
            :images="['/images/sandat-1.jpg', '/images/sandat-2.jpg', '/images/sandat-3.jpg', '/images/sandat-4.jpg', '/images/sandat-5.jpg', '/images/sandat-6.jpg', '/images/sandat-7.jpg']"
            :features="['🏔️ Farm + Mountain View', '🌅 Balcony', '🏄 Surfboard Storage', '🧳 Luggage Space']"
          />

          <!-- Rick's Windmill -->
          <CabinCard
            name="Rick's Windmill"
            cabinStyle="Unique design with black balcony"
            bed="Queen Bed"
            :images="['/images/windmill-1.jpg', '/images/windmill-2.jpg', '/images/windmill-3.jpg', '/images/windmill-4.jpg', '/images/windmill-5.jpg', '/images/windmill-6.jpg']"
            :features="['🏔️ Farm + Mountain View', '🌅 Black Balcony']"
          />

          <!-- Jabalkap Cabin -->
          <CabinCard
            name="Jabalkap Cabin"
            cabinStyle="A-frame style"
            bed="Single Bed"
            :images="['/images/program-2.jpg']"
            :features="['🏔️ Farm + Mountain View', '🏄 Surfboard Storage', '🧳 Luggage Space']"
          />

          <!-- Lime Cabin -->
          <CabinCard
            name="Lime Cabin"
            cabinStyle="Bright green exterior"
            bed="Queen Bed"
            :images="['/images/cabin-lime.jpg']"
            :features="['🌿 Farm View', '💚 Colorful & Cozy']"
            featured
          />
        </div>

        <!-- Booking CTA -->
        <div class="booking-cta">
          <h3>Ready to book your stay?</h3>
          <p>Message us on WhatsApp to check availability and rates. We'll respond within a few hours.</p>
          <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20a%20cabin%20at%20Mawun%20Valley%20Farm" class="btn btn-whatsapp btn-lg" target="_blank">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>

    <!-- Guest Reviews -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Guest Reviews</span>
          <h2>What Guests Say About Staying Here</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Verified Stay</span>
            </div>
            <p class="review-text">"The accommodation is on a beautiful farm with lots of charm. The night in the hut was very cozy. We've never had such a delicious breakfast while traveling!"</p>
            <p class="review-author">— Hamacher, Germany</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Verified Stay</span>
            </div>
            <p class="review-text">"They have a spectacular farm! Spending time with the goats made us very happy. Definitely a place to stay for a few days and enjoy the countryside, the tranquility, and Noni's desserts!"</p>
            <p class="review-author">— Paola, Peru</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Google Maps</span>
            </div>
            <p class="review-text">"My little cabin was super cute and cozy, and the farm is so well planned. The BBQ nights were the absolute highlight—so delicious! I'm already looking forward to visiting again."</p>
            <p class="review-author">— Pame, Chile</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Google Maps</span>
            </div>
            <p class="review-text">"The wooden cabins are very cozy! From delicious BBQs and fun card games to movie nights and Noni's amazing baked treats, there is always something to enjoy."</p>
            <p class="review-author">— Isabelle, Netherlands</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Verified Stay</span>
            </div>
            <p class="review-text">"Can't speak highly enough of this family and their beautiful farm! Greeted with a community dinner—incredible food cooked straight from the garden. Perfect location between Kuta and Selong Belanak!"</p>
            <p class="review-author">— Zoe, Australia</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Verified Stay</span>
            </div>
            <p class="review-text">"We made a big mistake—we booked only for one night! The cottage is really charming, the whole area is absolutely beautiful and peaceful. Next morning: coffee and delicious omelette. Paradise!"</p>
            <p class="review-author">— Marjut, Germany</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Verified Stay</span>
            </div>
            <p class="review-text">"The room is basic but you'll have everything you need—fan, mosquito net, outdoor bathroom. We slept like babies! Close to surf beaches and rice fields. 100% recommend for outdoor lovers."</p>
            <p class="review-author">— Anouk, Netherlands</p>
          </div>
          <div class="review-card">
            <div class="review-header">
              <span class="stars">★★★★★</span>
              <span class="review-source">Verified Stay</span>
            </div>
            <p class="review-text">"A living farm where little chicks and young goats roam freely! The stay ended beautifully with a friendly musical session around a shared barbecue. A unique and charming experience!"</p>
            <p class="review-author">— Loic, France</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Stay - Cabins at Mawun Valley Farm' })
</script>

<style scoped>
.page-header {
  padding: 140px 0 60px;
  background: var(--color-cream);
  text-align: center;
}

.cabins-section {
  padding: 60px 0;
}

.all-cabins-features {
  text-align: center;
  margin-bottom: 50px;
  padding: 30px;
  background: var(--color-light);
  border-radius: 16px;
}

.all-cabins-features h3 {
  margin-bottom: 20px;
}

.features-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.features-row span {
  background: #fff;
  padding: 10px 16px;
  border-radius: 25px;
  font-size: 14px;
}

.cabins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.booking-cta {
  text-align: center;
  padding: 50px;
  background: var(--color-cream);
  border-radius: 20px;
}

.booking-cta h3 {
  margin-bottom: 10px;
}

.booking-cta p {
  margin-bottom: 20px;
  color: #666;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: white;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s;
}

.btn-whatsapp:hover {
  background: #128C7E;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.review-card {
  background: var(--color-white);
  padding: 24px;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.stars {
  color: var(--color-gold);
}

.review-source {
  font-size: 11px;
  color: var(--color-sage);
  text-transform: uppercase;
}

.review-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-dark-light);
  margin-bottom: 12px;
  font-style: italic;
}

.review-author {
  font-weight: 600;
  font-size: 13px;
}
</style>
