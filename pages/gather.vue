<template>
  <div>
    <header class="page-hero no-image">
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
          <p class="lead">From weekly BBQ nights to traditional tea ceremonies to hands-on cooking classes — the farm comes alive when we gather together.</p>
        </div>
      </div>
    </section>

    <!-- Signature Experiences -->
    <section class="events-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Signature Experiences</span>
          <h2>Our Favorites</h2>
          <p>Click to see full details</p>
        </div>

        <div class="signature-grid">
          <!-- 1. BBQ Nights -->
          <article class="event-card signature" @click="openEvent('bbq')">
            <div class="event-image">
              <img src="/images/bbq-nights.jpg" alt="BBQ Nights">
              <span class="event-badge">Weekly</span>
            </div>
            <div class="event-info">
              <div class="event-icon">🔥</div>
              <h3>#BBQNights</h3>
              <p class="event-tagline">Every Friday, the farm comes alive</p>
              <div class="event-meta">
                <span>📅 Every Friday</span>
                <span>💰 From IDR 130,000</span>
              </div>
              <span class="click-hint">Click for details →</span>
            </div>
          </article>

          <!-- 2. Samovar Tea Ceremony -->
          <article class="event-card signature" @click="openEvent('samovar')">
            <div class="event-image">
              <img src="/images/samovar-tea.png" alt="Samovar Tea Ceremony">
              <span class="event-badge samovar">Cultural</span>
            </div>
            <div class="event-info">
              <div class="event-icon">☕</div>
              <h3>Guided Samovar Tea Ceremony</h3>
              <p class="event-tagline">A taste of Soviet tradition</p>
              <div class="event-meta">
                <span>👥 Up to 10 guests</span>
                <span>💰 IDR 1,000,000</span>
              </div>
              <span class="click-hint">Click for details →</span>
            </div>
          </article>

          <!-- 3. Cashew Apple Jam -->
          <article class="event-card signature" @click="openEvent('cashew')">
            <div class="event-image">
              <img src="/images/cashew-jam-cover.jpg" alt="Cashew Apple Jam Cooking Class">
              <span class="event-badge cashew">Signature</span>
            </div>
            <div class="event-info">
              <div class="event-icon">🌿</div>
              <h3>Cashew Apple Jam Cooking Class</h3>
              <p class="event-tagline">Farm-to-table magic with Mrs. Noni</p>
              <div class="event-meta">
                <span>⏰ 4 hours</span>
                <span>💰 From IDR 190,000</span>
              </div>
              <span class="click-hint">Click for details →</span>
            </div>
          </article>
        </div>

        <!-- Other Events -->
        <div class="other-events">
          <h3 class="other-events-title">More Activities</h3>
          <div class="events-grid">
            <!-- Little Farmer -->
            <div class="event-card small">
              <div class="event-icon">🧒</div>
              <h4>Little Farmer</h4>
              <p>Kids learn farming through play — feeding animals, planting seeds, harvesting.</p>
              <div class="event-meta">
                <span>📅 By reservation</span>
                <span>👦 Ages 3-12</span>
              </div>
              <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20Little%20Farmer%20for%20my%20kids" class="btn btn-outline btn-sm" target="_blank">Inquire</a>
            </div>

            <!-- Cooking Classes -->
            <div class="event-card small">
              <div class="event-icon">🍳</div>
              <h4>Cooking Classes</h4>
              <p>Harvest ingredients from the farm, learn techniques, enjoy what you create.</p>
              <div class="event-meta">
                <span>📅 By reservation</span>
                <span>⏰ 3 hours</span>
              </div>
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20a%20cooking%20class" class="btn btn-outline btn-sm" target="_blank">Inquire</a>
            </div>

            <!-- Private Events -->
            <div class="event-card small">
              <div class="event-icon">🎉</div>
              <h4>Private Events</h4>
              <p>Birthdays, retreats, workshops. Your celebration in a unique farm setting.</p>
              <div class="event-meta">
                <span>📅 By arrangement</span>
                <span>👥 Groups welcome</span>
              </div>
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20hosting%20a%20private%20event" class="btn btn-outline btn-sm" target="_blank">Inquire</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Reviews -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What Guests Say</span>
          <h2>Our Events & Experiences</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card">
            <span class="review-tag bbq">🔥 BBQ Nights</span>
            <div class="stars">★★★★★</div>
            <p class="review-text">"What an incredible little gem! The sweetest hosts, coolest guests, most delicious meals, and cutest animals. Make sure to stay for the Friday night BBQ! You won't find a more wholesome evening."</p>
            <p class="review-author">— Boryan, Google Maps</p>
          </div>
          <div class="review-card">
            <span class="review-tag bbq">🔥 BBQ Nights</span>
            <div class="stars">★★★★★</div>
            <p class="review-text">"The BBQ nights were the best—so delicious! I'll miss those evenings the most. Full of joy and great company."</p>
            <p class="review-author">— Pame, Chile</p>
          </div>
          <div class="review-card">
            <span class="review-tag bbq">🔥 BBQ Nights</span>
            <div class="stars">★★★★★</div>
            <p class="review-text">"We popped past when seeing the 'secret farm' signs by the road! Had lovely ice lemon tea, met goats, ducklings, chickens. He mentioned they have a BBQ every Friday—sounds lovely!"</p>
            <p class="review-author">— Chloe, Google Maps</p>
          </div>
          <div class="review-card">
            <span class="review-tag cashew">🌿 Cashew Jam Class</span>
            <div class="stars">★★★★★</div>
            <p class="review-text">"After a wonderful morning at the farm, we learned how to make jam from cashew apples, what grows in the garden, and what you can use different herbs for. So interesting — not only for the boys, but also for us! Life is the greatest teacher 🙌🏻"</p>
            <p class="review-author">— Melissa, Netherlands</p>
          </div>
          <div class="review-card">
            <span class="review-tag cashew">🌿 Cooking Class</span>
            <div class="stars">★★★★★</div>
            <p class="review-text">"Mud, rain, goats, sambal, coconut milk… Today was place-based learning in its truest form: farming, cooking, teamwork, maths, science, problem-solving, plus an unscheduled lesson in patience. Not washed out, just well weathered."</p>
            <p class="review-author">— Natalia, Harmony Alternative School</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Event Details Modal -->
    <Teleport to="body">
      <div v-if="activeEvent" class="modal-overlay" @click.self="closeEvent">
        <div class="modal-content">
          <button class="modal-close" @click="closeEvent">✕</button>
          
          <!-- BBQ Nights Modal -->
          <div v-if="activeEvent === 'bbq'" class="event-detail">
            <div class="modal-header">
              <span class="event-badge">🔥 Weekly Event</span>
              <h2>#BBQNights</h2>
              <p class="modal-tagline">Every Friday, the farm comes alive</p>
            </div>
            <div class="modal-body">
              <p class="intro-text">Farm-to-table feast under the stars. Live music, good people, great food. All ingredients fresh from our farm and local fishermen.</p>
              
              <h4>⏰ Schedule</h4>
              <div class="schedule-box">
                <div class="schedule-item">
                  <span class="schedule-label">When</span>
                  <span class="schedule-value">Every Friday</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Time</span>
                  <span class="schedule-value">5:00 PM onwards</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Duration</span>
                  <span class="schedule-value">~2.5 hours</span>
                </div>
              </div>

              <h4>💰 Pricing</h4>
              <div class="pricing-grid">
                <div class="price-tier">
                  <span class="tier-name">All-Inclusive Ticket</span>
                  <span class="tier-price">IDR 250,000</span>
                  <span class="tier-note">Adults and children 13 years and above</span>
                </div>
                <div class="price-tier">
                  <span class="tier-name">Farmstay Guests</span>
                  <span class="tier-price">IDR 200,000</span>
                  <span class="tier-note">For farmstay guests only</span>
                </div>
                <div class="price-tier">
                  <span class="tier-name">Child Ticket (4-12 years)</span>
                  <span class="tier-price">IDR 130,000</span>
                  <span class="tier-note">Free for children 3 years and below</span>
                </div>
              </div>
              
              <h4>🍖 What's Included</h4>
              <ul class="included-list">
                <li>BBQ spread with farm-fresh ingredients</li>
                <li>Fresh seafood from local fishermen</li>
                <li>Vegetarian options available</li>
                <li>Relaxing music that fits the natural atmosphere</li>
                <li>Meet other travelers and locals</li>
                <li>Beautiful sunset views</li>
              </ul>

              <h4>🌟 Why Join?</h4>
              <div class="benefits-grid">
                <div class="benefit">🥩 Farm-Fresh Food</div>
                <div class="benefit">🎵 Relaxing Music</div>
                <div class="benefit">🌅 Sunset Views</div>
                <div class="benefit">👥 Community Vibes</div>
                <div class="benefit">🍺 Good Company</div>
                <div class="benefit">📸 Great Memories</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20BBQ%20Night%20this%20Friday" class="btn btn-primary btn-lg" target="_blank">Book via WhatsApp</a>
            </div>
          </div>

          <!-- Samovar Tea Ceremony Modal -->
          <div v-if="activeEvent === 'samovar'" class="event-detail">
            <div class="modal-header">
              <span class="event-badge samovar">☕ Cultural Experience</span>
              <h2>Guided Samovar Tea Ceremony</h2>
              <p class="modal-tagline">A taste of Soviet tradition at the farm</p>
            </div>
            <div class="modal-body">
              <p class="intro-text">Experience an authentic wood-fired samovar ceremony — a centuries-old Russian tradition. Gather around the glowing urn, share stories, and enjoy perfectly brewed tea just as families have done for generations.</p>
              
              <div class="community-highlight">
                <p>"The samovar represented something rare: dedicated time for togetherness. Workdays paused, families gathered, neighbors became friends. In a fast world, we're bringing that ritual back."</p>
              </div>
              
              <h4>⏰ Schedule</h4>
              <div class="schedule-box">
                <div class="schedule-item">
                  <span class="schedule-label">When</span>
                  <span class="schedule-value">By Reservation</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Duration</span>
                  <span class="schedule-value">~2 hours</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Group Size</span>
                  <span class="schedule-value">Up to 10 guests</span>
                </div>
              </div>

              <h4>💰 Pricing</h4>
              <div class="pricing-grid">
                <div class="price-tier highlight">
                  <span class="tier-name">Complete Ceremony Package</span>
                  <span class="tier-price">IDR 1,000,000</span>
                  <span class="tier-note">Flat rate for groups up to 10 people — same price for 1 or 10 guests</span>
                </div>
              </div>

              <h4>🫖 What's Included</h4>
              <ul class="included-list">
                <li><strong>Wood-fired Samovar</strong> — Traditional charcoal/wood heated brass samovar</li>
                <li><strong>3 Premium Tea Selections</strong> — Curated black, herbal, and specialty teas</li>
                <li><strong>Farm-Made Jam</strong> — Our signature homemade jam</li>
                <li><strong>10 Fresh Crepes (Blini)</strong> — Traditional thin pancakes, served warm</li>
                <li><strong>Complete Tea Service</strong> — Authentic tea set and accessories</li>
                <li><strong>Firewood & Setup</strong> — Everything prepared for you</li>
                <li><strong>Dedicated Guide</strong> — Personal host to share the history and ceremony</li>
              </ul>

              <h4>🌟 Why Experience This?</h4>
              <div class="benefits-grid">
                <div class="benefit">🏺 Living History</div>
                <div class="benefit">🔥 Authentic Fire-Heated</div>
                <div class="benefit">👥 Perfect for Groups</div>
                <div class="benefit">🍯 Farm-Fresh Treats</div>
                <div class="benefit">📸 Unique & Memorable</div>
                <div class="benefit">🌿 Farm Atmosphere</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20a%20Samovar%20Tea%20Ceremony" class="btn btn-primary btn-lg" target="_blank">Book via WhatsApp</a>
            </div>
          </div>

          <!-- Cashew Apple Jam Modal -->
          <div v-if="activeEvent === 'cashew'" class="event-detail">
            <div class="modal-header">
              <span class="event-badge cashew">🌿 Signature Experience</span>
              <h2>Cashew Apple Jam Cooking Class</h2>
              <p class="modal-tagline">Farm-to-table magic with Mrs. Noni</p>
            </div>
            <div class="modal-body">
              <p class="intro-text">Discover the unique taste of Lombok's cashew apples while learning the art of jam making. From harvesting the fruit straight from the tree to preparing, cooking, and tasting your own fresh jam — this is a farm-to-table experience you won't forget.</p>
              
              <p class="host-note">Guided by <strong>Mrs. Noni (Indonesia)</strong> — the owner of Mawun Valley Farm — you'll experience a warm blend of local hospitality and Azerbaijani tea culture.</p>

              <h4>⏰ Schedule</h4>
              <div class="schedule-box">
                <div class="schedule-item">
                  <span class="schedule-label">When</span>
                  <span class="schedule-value">By Reservation</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Time</span>
                  <span class="schedule-value">08:00 – 12:00</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Duration</span>
                  <span class="schedule-value">4 hours</span>
                </div>
              </div>

              <h4>💰 Pricing</h4>
              <div class="pricing-grid">
                <div class="price-tier">
                  <span class="tier-name">Adults & Teens (13+)</span>
                  <span class="tier-price">IDR 390,000</span>
                  <span class="tier-note">Includes 100g jam jar + Azerbaijani tea</span>
                </div>
                <div class="price-tier">
                  <span class="tier-name">Kids (4–12 years)</span>
                  <span class="tier-price">IDR 190,000</span>
                </div>
                <div class="price-tier">
                  <span class="tier-name">Toddlers (3 & below)</span>
                  <span class="tier-price free">Free</span>
                </div>
              </div>
              
              <div class="important-note">
                <strong>👉 Important:</strong> All group members must book a ticket (except toddlers under 3).
              </div>

              <h4>🥭 What's Included</h4>
              <ul class="included-list">
                <li>Guided harvesting of yellow and orange cashew apples</li>
                <li>Step-by-step jam-making workshop at Noni's Farm Café</li>
                <li>Tasting session with toasted bread and Azerbaijani black tea</li>
                <li>One 100g jar of cashew apple jam to take home (Adults & Teens)</li>
                <li>One pot of Azerbaijani tea for every Adult & Teen ticket</li>
                <li>Fresh drinking water for all guests</li>
                <li>Farm tour and stories from the owners</li>
              </ul>

              <h4>📍 Location</h4>
              <div class="location-box">
                <p><strong>Harvesting:</strong> Mawun Valley Farm</p>
                <p><strong>Cooking & Tasting:</strong> Noni's Farm Café</p>
                <p class="loc-note">Just 11 minutes from Kuta — surrounded by nature and fresh mountain air.</p>
              </div>

              <h4>🌟 Why Join?</h4>
              <div class="benefits-grid">
                <div class="benefit">🍎 Unique Experience</div>
                <div class="benefit">👐 Hands-On Learning</div>
                <div class="benefit">🏡 Personal & Intimate</div>
                <div class="benefit">🍞 Delicious Tasting</div>
                <div class="benefit">👨‍👩‍👧 Family-Friendly</div>
                <div class="benefit">🍃 Relaxing Setting</div>
              </div>

            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'd%20like%20to%20book%20the%20Cashew%20Apple%20Jam%20Cooking%20Class" class="btn btn-primary btn-lg" target="_blank">Book via WhatsApp</a>
            </div>
          </div>

        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({ title: 'Gather - Events & Activities | Mawun Valley Farm' })

const activeEvent = ref(null)

const openEvent = (event) => {
  activeEvent.value = event
  document.body.style.overflow = 'hidden'
}

const closeEvent = () => {
  activeEvent.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* Hero */
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

.page-hero.no-image {
  height: auto;
  min-height: 280px;
  padding: 100px 20px 80px;
  background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%);
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

/* Intro */
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
  max-width: 700px;
  margin: 0 auto;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header p {
  color: #888;
  font-size: 14px;
}

/* Events Section */
.events-section {
  padding: 0 0 80px;
}

/* Signature Grid */
.signature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

@media (max-width: 900px) {
  .signature-grid {
    grid-template-columns: 1fr;
  }
}

/* Event Cards */
.event-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.event-card.signature {
  cursor: pointer;
}

.event-card.signature:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.event-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.event-card.signature:hover .event-image img {
  transform: scale(1.05);
}

.event-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--color-gold);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.event-badge.samovar {
  background: #8B4513;
}

.event-badge.cashew {
  background: #7A8B6F;
}

.event-info {
  padding: 24px;
  text-align: center;
}

.event-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.event-info h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: #333;
}

.event-tagline {
  color: var(--color-sage);
  font-style: italic;
  margin-bottom: 16px;
  font-size: 14px;
}

.event-meta {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.event-meta span {
  font-size: 13px;
  color: #666;
}

.click-hint {
  display: inline-block;
  color: var(--color-terracotta);
  font-size: 13px;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s;
}

.event-card.signature:hover .click-hint {
  opacity: 1;
}

/* Other Events */
.other-events {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 2px dashed #E8E4DC;
}

.other-events-title {
  text-align: center;
  margin-bottom: 30px;
  color: #666;
  font-size: 1.2rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.event-card.small {
  padding: 30px;
  text-align: center;
}

.event-card.small .event-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.event-card.small h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.event-card.small p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.event-card.small .event-meta {
  margin-bottom: 20px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-terracotta);
  color: white;
}

.btn-primary:hover {
  background: var(--color-sage);
}

.btn-outline {
  border: 2px solid var(--color-dark);
  color: var(--color-dark);
  background: transparent;
}

.btn-outline:hover {
  background: var(--color-dark);
  color: white;
}

.btn-sm {
  padding: 10px 20px;
  font-size: 14px;
}

.btn-lg {
  padding: 16px 36px;
  font-size: 16px;
}

/* Reviews */
.reviews-section {
  padding: 80px 0;
  background: var(--color-light);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.review-card {
  background: white;
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

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #f5f5f5;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;
}

.modal-close:hover {
  background: #eee;
}

.event-detail {
  padding: 0;
}

.modal-header {
  padding: 40px 40px 30px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}

.modal-header .event-badge {
  position: static;
  display: inline-block;
  margin-bottom: 16px;
}

.modal-header h2 {
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: #333;
}

.modal-tagline {
  font-family: 'Caveat', cursive;
  font-size: 1.3rem;
  color: var(--color-terracotta);
}

.modal-body {
  padding: 30px 40px;
}

.intro-text {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 24px;
}

.host-note {
  background: #f8f8f8;
  border-left: 4px solid var(--color-terracotta);
  padding: 16px;
  margin-bottom: 24px;
  font-style: italic;
  color: #666;
}

.modal-body h4 {
  font-size: 1rem;
  color: var(--color-terracotta);
  margin: 24px 0 16px;
}

.modal-body h4:first-of-type {
  margin-top: 0;
}

/* Schedule Box - Consistent Structure */
.schedule-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  background: #FAF6F0;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

@media (max-width: 500px) {
  .schedule-box {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

.schedule-item {
  text-align: center;
}

.schedule-label {
  display: block;
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.schedule-value {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

/* Pricing */
.pricing-grid {
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
}

.price-tier {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: #f8f8f8;
  border-radius: 8px;
  flex-wrap: wrap;
  gap: 8px;
}

.price-tier.highlight {
  background: #FFF8E7;
  border: 2px solid #D4A84B;
}

.tier-name {
  font-weight: 600;
  font-size: 14px;
}

.tier-price {
  font-weight: 700;
  color: var(--color-terracotta);
  font-size: 16px;
}

.tier-price.free {
  color: #7A8B6F;
}

.tier-note {
  width: 100%;
  font-size: 12px;
  color: #888;
}

.important-note {
  background: #FFF8E7;
  border-left: 4px solid #D4A84B;
  padding: 14px 18px;
  margin-bottom: 24px;
  font-size: 14px;
  border-radius: 0 8px 8px 0;
}

/* Included List */
.included-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.included-list li {
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 28px;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
}

.included-list li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #7A8B6F;
  font-weight: bold;
}

/* Location Box */
.location-box {
  background: linear-gradient(135deg, #7A8B6F, #5C6B52);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.location-box p {
  margin: 8px 0;
  font-size: 14px;
}

.location-box .loc-note {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-style: italic;
  opacity: 0.9;
}

/* Benefits */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

@media (max-width: 600px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.benefit {
  background: #f8f8f8;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
  text-align: center;
}

.modal-footer {
  padding: 24px 40px 40px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
}

@media (max-width: 600px) {
  .modal-header, .modal-body, .modal-footer {
    padding-left: 24px;
    padding-right: 24px;
  }
}

/* Review Tags */
.review-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 8px;
}

.review-tag.bbq {
  background: #FFF3E0;
  color: #E65100;
}

.review-tag.cashew {
  background: #E8F5E9;
  color: #2E7D32;
}

.review-tag.samovar {
  background: #EFEBE9;
  color: #5D4037;
}

.community-highlight {
  background: linear-gradient(135deg, #FDF8F3 0%, #FAF6F0 100%);
  border-left: 4px solid #8B4513;
  padding: 20px 24px;
  margin: 20px 0;
  border-radius: 0 12px 12px 0;
}

.community-highlight p {
  font-size: 15px;
  line-height: 1.8;
  color: #5D4037;
  font-style: italic;
  margin: 0;
}
</style>
