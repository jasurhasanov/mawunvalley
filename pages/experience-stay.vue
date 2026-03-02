<template>
  <div class="experience-stay-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/hero-2.jpg" alt="Mawun Valley Farm Experience">
      </div>
      <div class="hero-content">
        <span class="section-label light">Farm Experience</span>
        <h1>Your Farm Life Awaits</h1>
        <p>Immerse yourself in permaculture, community, and the beauty of South Lombok. Every program includes a private cabin, meals, and unforgettable experiences.</p>
        <div class="hero-cta">
          <a href="#programs" class="btn btn-primary btn-lg">Explore Programs</a>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">5.0</span>
            <span class="stat-label">★ Rating</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">35+</span>
            <span class="stat-label">Years of Welcome</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5 min</span>
            <span class="stat-label">To Beach</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">$19</span>
            <span class="stat-label">Per Day</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="programs-section" id="programs">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Choose Your Path</span>
          <h2>Farm Experience Programs</h2>
          <p>Every program includes a private cabin, daily meals, and access to all farm activities.</p>
        </div>

        <div class="programs-grid">
          <article class="program-card" @click="openProgram('beachside')">
            <div class="program-image">
              <img src="/images/beachside-cover.jpg" alt="Beachside Farming">
              <span class="program-badge">🏄 Surf + Farm</span>
            </div>
            <div class="program-info">
              <h3>Beachside Farming</h3>
              <p>Balance farm life with world-class waves — just 5 minutes from the beach.</p>
              <div class="program-meta"><span>3 hrs/day</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card" @click="openProgram('slowliving')">
            <div class="program-image">
              <img src="/images/slowliving-cover.jpg" alt="Slow Living">
              <span class="program-badge">🧘 Mindful</span>
            </div>
            <div class="program-info">
              <h3>Slow Living</h3>
              <p>Find calm and groundedness. Embrace a slower pace and appreciate the small details.</p>
              <div class="program-meta"><span>3 hrs/day</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card" @click="openProgram('creative')">
            <div class="program-image">
              <img src="/images/creative-cover.jpg" alt="Creative Content">
              <span class="program-badge">📸 Creator</span>
            </div>
            <div class="program-info">
              <h3>Creative Content</h3>
              <p>Create inspiring content while living the farm life. Perfect for writers & photographers.</p>
              <div class="program-meta"><span>3 hrs/day</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card featured" @click="openProgram('retreat')">
            <div class="program-image">
              <img src="/images/hero-1.jpg" alt="8-Day Retreat">
              <span class="program-badge">⭐ 8-Day Journey</span>
            </div>
            <div class="program-info">
              <h3>8-Day Farm Retreat</h3>
              <p>A transformative group trip — permaculture, community, and self-discovery.</p>
              <div class="program-meta"><span>All-inclusive</span><span>8 days</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Program Details Modal -->
    <Teleport to="body">
      <div v-if="activeProgram" class="modal-overlay" @click.self="closeProgram">
        <div class="modal-content">
          <button class="modal-close" @click="closeProgram">✕</button>
          
          <div v-if="activeProgram === 'beachside'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🏄 Surf + Farm</span>
              <h2>Beachside Farming Experience</h2>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
                <div class="info-item"><span>🛏️</span> Private cabin included</div>
              </div>
              <h4>🌿 The Experience</h4>
              <p>Gain practical skills in permaculture and sustainable agriculture. With Lombok's best surfing beaches just 5 minutes away, balance farm work with world-class waves.</p>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">🎉 Farm Events</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Beachside%20Farming%20program." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <div v-if="activeProgram === 'slowliving'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🧘 Mindful</span>
              <h2>Slow Living Experience</h2>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
                <div class="info-item"><span>🛏️</span> Private cabin included</div>
              </div>
              <h4>🌿 The Experience</h4>
              <p>Savor simple moments: quiet breakfasts, leisurely garden walks, Lombok sunsets. Evenings include relaxed gatherings under the stars.</p>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">💻 Workspace</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Slow%20Living%20program." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <div v-if="activeProgram === 'creative'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">📸 Creator</span>
              <h2>Creative Content Experience</h2>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
                <div class="info-item"><span>🛏️</span> Private cabin included</div>
              </div>
              <h4>🌿 The Experience</h4>
              <p>Document sustainable living while being part of an inspiring community. Perfect for writers, photographers, and videographers.</p>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">💻 Dedicated Workspace</div>
                <div class="benefit">🎉 Farm Events</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Creative%20Content%20program." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <div v-if="activeProgram === 'retreat'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">⭐ 8-Day Journey</span>
              <h2>Farm Life Retreat</h2>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> 8 days / 7 nights</div>
                <div class="info-item"><span>🍽️</span> All meals included</div>
                <div class="info-item"><span>✈️</span> Airport transfer</div>
              </div>
              <h4>📅 8-Day Itinerary</h4>
              <div class="itinerary">
                <div class="day"><span>Day 1</span> Welcome feast, set intentions</div>
                <div class="day"><span>Day 2</span> Permaculture workshop, bonfire</div>
                <div class="day"><span>Day 3</span> Fishing, snorkeling, BBQ</div>
                <div class="day"><span>Day 4</span> Island exploration</div>
                <div class="day"><span>Day 5</span> Cooking class, movie night</div>
                <div class="day"><span>Day 6</span> Community day, music</div>
                <div class="day"><span>Day 7</span> Farewell BBQ feast</div>
                <div class="day"><span>Day 8</span> Airport drop-off</div>
              </div>
              <h4>✅ What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ 8 Nights Cabin</div>
                <div class="benefit">🍽️ All Meals</div>
                <div class="benefit">✈️ Airport Transfer</div>
                <div class="benefit">🚐 Local Transport</div>
                <div class="benefit">🌱 All Workshops</div>
                <div class="benefit">🎣 Adventures</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%208-Day%20Farm%20Retreat." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Cabins Section -->
    <section class="cabins-section" id="cabins">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Where You'll Stay</span>
          <h2>Your Private Cabin</h2>
          <p>Simple, cozy spaces designed for slow mornings and deep sleep.</p>
        </div>
        <div class="cabin-features">
          <span>🚿 Outdoor Shower</span>
          <span>🛏️ Clean Bedsheets</span>
          <span>🔌 Charging Socket</span>
          <span>💨 Fan</span>
          <span>🛋️ Comfy Mattress</span>
        </div>
        <div class="cabins-gallery">
          <div class="cabin-card">
            <img src="/images/sandat-1.jpg" alt="Sandat Cabin">
            <div class="cabin-info"><h4>Sandat Cabin</h4><p>Queen bed • Balcony • Mountain view</p></div>
          </div>
          <div class="cabin-card">
            <img src="/images/windmill-1.jpg" alt="Rick's Windmill">
            <div class="cabin-info"><h4>Rick's Windmill</h4><p>Queen bed • Unique design</p></div>
          </div>
          <div class="cabin-card">
            <img src="/images/cabin-lime.jpg" alt="Lime Cabin">
            <div class="cabin-info"><h4>Lime Cabin</h4><p>Queen bed • Bright & colorful</p></div>
          </div>
          <div class="cabin-card">
            <img src="/images/program-1.jpg" alt="Peace Cabin">
            <div class="cabin-info"><h4>Peace Cabin</h4><p>Queen bed • Mountain view</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Guest Stories</span>
          <h2>What People Say</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Staying here was incredible. Fully immersed in nature and local life. The peaceful environment helped me disconnect and reset. If you're a surfer, this place is a hidden gem."</p>
            <div class="review-author"><strong>Iyad</strong><span>Tunisia • Worldpackers</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"We spent 1 month here and couldn't be more happy. Strong sense of community. The meals were really good, the BBQ nights were delicious!"</p>
            <div class="review-author"><strong>Mariana</strong><span>Portugal • Worldpackers</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"From day one, I felt like part of the family. My cabin was super cute and cozy. The BBQ nights were the highlight—so delicious!"</p>
            <div class="review-author"><strong>Pame</strong><span>Chile • Google Maps</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Spectacular farm! Spending time with the goats made us very happy. Definitely a place to stay and enjoy Noni's desserts!"</p>
            <div class="review-author"><strong>Paola</strong><span>Peru • Verified Stay</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"The wooden cabins are very cozy! From BBQs and card games to movie nights and Noni's treats, there's always something to enjoy."</p>
            <div class="review-author"><strong>Isabelle</strong><span>Netherlands • Google Maps</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Can't speak highly enough of this family and their beautiful farm! Greeted with a community dinner—incredible food straight from the garden."</p>
            <div class="review-author"><strong>Zoe</strong><span>Australia • Verified Stay</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Message us on WhatsApp. We'll help you find the perfect program.</p>
          <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20staying%20at%20Mawun%20Valley%20Farm." class="btn btn-whatsapp btn-lg" target="_blank">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({ title: 'Experience & Stay - Mawun Valley Farm' })

const activeProgram = ref(null)

function openProgram(program) {
  activeProgram.value = program
  document.body.style.overflow = 'hidden'
}

function closeProgram() {
  activeProgram.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
.hero-bg { position: absolute; inset: 0; z-index: -1; }
.hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(44,62,45,0.5), rgba(44,62,45,0.8)); }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero-content { max-width: 700px; padding: 0 24px; }
.hero h1 { color: white; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px; }
.hero p { font-size: 1.2rem; opacity: 0.95; margin-bottom: 32px; line-height: 1.7; }
.section-label.light { color: var(--color-gold); }
.hero-cta .btn { padding: 16px 32px; font-size: 16px; }

.stats-bar { background: var(--color-dark); padding: 30px 0; }
.stats-grid { display: flex; justify-content: center; gap: 60px; flex-wrap: wrap; }
.stat-item { text-align: center; color: white; }
.stat-number { display: block; font-size: 2rem; font-weight: 700; color: var(--color-gold); }
.stat-label { font-size: 14px; opacity: 0.8; }

.programs-section { padding: 100px 0; background: var(--color-cream); }
.section-header { text-align: center; max-width: 600px; margin: 0 auto 50px; }
.section-header h2 { margin-bottom: 16px; }
.section-header p { color: #666; }
.programs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; }
.program-card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); cursor: pointer; transition: all 0.3s ease; }
.program-card:hover { transform: translateY(-8px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
.program-card.featured { border: 3px solid var(--color-gold); }
.program-image { position: relative; height: 200px; }
.program-image img { width: 100%; height: 100%; object-fit: cover; }
.program-badge { position: absolute; top: 12px; left: 12px; background: white; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
.program-info { padding: 24px; }
.program-info h3 { font-size: 1.3rem; margin-bottom: 10px; }
.program-info p { color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
.program-meta { display: flex; gap: 16px; font-size: 13px; color: var(--color-sage); font-weight: 600; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-content { background: white; border-radius: 20px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; }
.modal-close { position: absolute; top: 16px; right: 16px; background: var(--color-cream); border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; }
.modal-header { padding: 32px 32px 0; }
.modal-header h2 { font-size: 1.6rem; margin: 12px 0; }
.modal-body { padding: 24px 32px; }
.modal-body h4 { margin: 24px 0 12px; color: var(--color-dark); }
.info-box { display: flex; flex-wrap: wrap; gap: 16px; background: var(--color-cream); padding: 16px; border-radius: 12px; margin-bottom: 20px; }
.info-item { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.benefit { background: var(--color-cream); padding: 12px; border-radius: 8px; font-size: 14px; }
.itinerary .day { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; }
.itinerary .day span { background: var(--color-sage); color: white; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; white-space: nowrap; }
.modal-footer { padding: 0 32px 32px; }

.cabins-section { padding: 100px 0; background: white; }
.cabin-features { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-bottom: 50px; }
.cabin-features span { background: var(--color-cream); padding: 10px 20px; border-radius: 25px; font-size: 14px; }
.cabins-gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto; }
.cabin-card { border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.cabin-card img { width: 100%; height: 200px; object-fit: cover; }
.cabin-info { padding: 20px; background: white; }
.cabin-info h4 { margin-bottom: 6px; }
.cabin-info p { font-size: 14px; color: #666; }

.reviews-section { padding: 100px 0; background: var(--color-cream); }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
.review-card { background: white; padding: 28px; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.review-card .stars { color: var(--color-gold); font-size: 16px; margin-bottom: 16px; }
.review-card p { font-size: 15px; line-height: 1.7; color: #555; font-style: italic; margin-bottom: 16px; }
.review-author strong { display: block; margin-bottom: 4px; }
.review-author span { font-size: 13px; color: #888; }

.cta-section { padding: 100px 0; background: var(--color-dark); text-align: center; }
.cta-content h2 { color: white; margin-bottom: 16px; }
.cta-content p { color: rgba(255,255,255,0.8); margin-bottom: 32px; }

.btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; border-radius: 30px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
.btn-primary { background: var(--color-gold); color: var(--color-dark); }
.btn-primary:hover { background: var(--color-terracotta); color: white; }
.btn-whatsapp { background: #25D366; color: white; }
.btn-whatsapp:hover { background: #128C7E; }
.btn-lg { padding: 16px 32px; font-size: 16px; }

@media (max-width: 768px) {
  .stats-grid { gap: 30px; }
  .programs-grid { grid-template-columns: 1fr; }
  .modal-content { border-radius: 16px 16px 0 0; max-height: 95vh; margin-top: auto; }
  .benefits-grid { grid-template-columns: 1fr; }
}
</style>
