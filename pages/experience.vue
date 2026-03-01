<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="section-label">Farm Experience</span>
        <h1>Find Your Path at Mawun Valley</h1>
        <p>Whether you're seeking adventure, mindfulness, creativity, or community — we have a program for you.</p>
      </div>
    </section>

    <section class="programs-section">
      <div class="container">
        <div class="program-filters">
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'all' }"
            @click="activeFilter = 'all'"
          >All Programs</button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'exchange' }"
            @click="activeFilter = 'exchange'"
          >Work Exchange</button>
          <button 
            class="filter-btn" 
            :class="{ active: activeFilter === 'group' }"
            @click="activeFilter = 'group'"
          >Group Trips</button>
        </div>

        <div class="programs-grid">
          <!-- Program 1: Beachside Farming -->
          <article v-show="activeFilter === 'all' || activeFilter === 'exchange'" class="program-card" id="beachside">
            <div class="program-image">
              <img src="https://cdn.discordapp.com/attachments/1477066934465069259/1477111321123094609/20241120_182319.jpg" alt="Hands-on farming experience near the beach">
              <span class="program-badge">🏄 Surf + Farm</span>
            </div>
            <div class="program-content">
              <div class="program-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-text">5.0 (15 reviews)</span>
              </div>
              <h2>Lombok Permaculture Experience: Hands-on Farming (Beachside)</h2>
              <p class="program-tagline">Balance farm life with world-class waves — just 5 minutes from the beach.</p>
              <button class="btn-expand" @click="toggleProgram('beachside')">
                View Details <span class="arrow">{{ expanded.beachside ? '↑' : '↓' }}</span>
              </button>
              <div class="program-details" :class="{ expanded: expanded.beachside }">
                <div class="detail-section program-info-box">
                  <div class="info-item"><span class="info-icon">⏰</span><span><strong>Time:</strong> 3 hrs/day, 4 days/week</span></div>
                  <div class="info-item"><span class="info-icon">💰</span><span><strong>Fee:</strong> US$19/day</span></div>
                  <div class="info-item"><span class="info-icon">🛏️</span><span><strong>Accommodation:</strong> Private cabin included</span></div>
                </div>
                <div class="detail-section">
                  <h3>🌿 The Experience</h3>
                  <p>Embark on a unique, hands-on learning experience at Mawun Valley Farm, nestled in the heart of Lombok's stunning natural beauty. Gain invaluable practical skills in permaculture, sustainable agriculture, and community development. And, with Lombok's best surfing beaches just 5 minutes away, you can balance your farm experience with world-class waves.</p>
                </div>
                <div class="detail-section">
                  <h3>🤝 What You Offer</h3>
                  <ul class="detail-list">
                    <li><strong>Painting & Decorating:</strong> Help with painting or decorating the property facilities</li>
                    <li><strong>Animal Care:</strong> Help look after and take care of animals</li>
                    <li><strong>Farming:</strong> Plant crops, sow seeds and help in outside tasks</li>
                    <li><strong>Gardening:</strong> Help grow plants and cultivate gardens</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h3>🎁 What You Get</h3>
                  <div class="benefits-grid">
                    <div class="benefit-item"><span class="benefit-icon">🛏️</span><div><strong>Private Room</strong><p>A cozy cabin just for you</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🍳</span><div><strong>Breakfast & Lunch</strong><p>Daily farm-fresh meals</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🚲</span><div><strong>Bikes</strong><p>Free to use anytime</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🌱</span><div><strong>Permaculture Course</strong><p>Free hands-on training</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">📜</span><div><strong>Certificate</strong><p>Upon completion</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">💻</span><div><strong>Workspace</strong><p>For remote work</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🍹</span><div><strong>Free Drinks</strong><p>Stay refreshed</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🎉</span><div><strong>Farm Events</strong><p>Movie nights, BBQs & more</p></div></div>
                  </div>
                </div>
                <div class="detail-section">
                  <h3>👤 Who We're Looking For</h3>
                  <ul class="detail-list simple">
                    <li>Passionate about sustainable living and permaculture</li>
                    <li>Interest in surfing or beach life</li>
                    <li>Open-minded with a willingness to learn</li>
                    <li>Team players with good communication skills</li>
                    <li>Respectful of local culture and customs</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h3>✅ Requirements</h3>
                  <p>Welcomes solo travelers, couples, and partners of participants</p>
                </div>
                <div class="detail-section">
                  <h3>❌ What's Not Included</h3>
                  <p>Flights, Travel Insurance, Internal Transportation, and Visa</p>
                </div>
                <a href="#inquiry" class="btn btn-primary btn-lg program-cta">Apply Now</a>
              </div>
            </div>
          </article>

          <!-- Program 2: Slow Living -->
          <article v-show="activeFilter === 'all' || activeFilter === 'exchange'" class="program-card" id="slowliving">
            <div class="program-image">
              <img src="https://cdn.discordapp.com/attachments/1477066934465069259/1477111317532901612/20260102_065202.jpg" alt="Slow living experience at the farm">
              <span class="program-badge">🧘 Mindful</span>
            </div>
            <div class="program-content">
              <div class="program-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-text">5.0 (15 reviews)</span>
              </div>
              <h2>Slow Living: Connect with Nature & Community</h2>
              <p class="program-tagline">Find calm and groundedness. Embrace a slower pace and appreciate the small details.</p>
              <button class="btn-expand" @click="toggleProgram('slowliving')">
                View Details <span class="arrow">{{ expanded.slowliving ? '↑' : '↓' }}</span>
              </button>
              <div class="program-details" :class="{ expanded: expanded.slowliving }">
                <div class="detail-section program-info-box">
                  <div class="info-item"><span class="info-icon">⏰</span><span><strong>Time:</strong> 3 hrs/day, 4 days/week</span></div>
                  <div class="info-item"><span class="info-icon">💰</span><span><strong>Fee:</strong> US$19/day</span></div>
                  <div class="info-item"><span class="info-icon">🛏️</span><span><strong>Accommodation:</strong> Private cabin included</span></div>
                </div>
                <div class="detail-section">
                  <h3>🌿 The Experience</h3>
                  <p>At Mawun Valley Farm, nestled in the tranquil landscapes of Lombok, we offer a unique opportunity to immerse yourself in the principles of slow living. If you appreciate a slower pace, connection with nature, and meaningful interactions, join our community and experience the rewarding simplicity of farm life.</p>
                  <p class="highlight-text">Savor simple moments: enjoying a quiet breakfast with farm-sourced ingredients, taking leisurely walks through the gardens, observing the beauty of Lombok sunsets. Evenings include relaxed gatherings under the stars, sharing stories and connecting with fellow travelers.</p>
                </div>
                <div class="detail-section">
                  <h3>🤝 What You Offer</h3>
                  <ul class="detail-list">
                    <li><strong>Animal Care:</strong> Help look after and take care of animals</li>
                    <li><strong>Farming:</strong> Plant crops, sow seeds and help in outside tasks</li>
                    <li><strong>Gardening:</strong> Help grow plants and cultivate gardens</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h3>🎁 What You Get</h3>
                  <div class="benefits-grid">
                    <div class="benefit-item"><span class="benefit-icon">🛏️</span><div><strong>Private Room</strong><p>A cozy cabin just for you</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🍳</span><div><strong>Breakfast & Lunch</strong><p>Daily farm-fresh meals</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🚲</span><div><strong>Bikes</strong><p>Free to use anytime</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🌱</span><div><strong>Permaculture Course</strong><p>Free hands-on training</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">📜</span><div><strong>Certificate</strong><p>Upon completion</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">💻</span><div><strong>Workspace</strong><p>For remote work</p></div></div>
                  </div>
                </div>
                <div class="detail-section">
                  <h3>✨ Key Elements</h3>
                  <ul class="detail-list simple">
                    <li><strong>Gentle Farm Engagement:</strong> Participate at a relaxed pace</li>
                    <li><strong>Nature Connection:</strong> Immerse in the natural beauty of the valley</li>
                    <li><strong>Community Interaction:</strong> Connect with our local team and fellow participants</li>
                    <li><strong>Mindful Moments:</strong> Presence and appreciation for simple experiences</li>
                    <li><strong>Farm-Fresh Nourishment:</strong> Wholesome meals from our land</li>
                    <li><strong>Tranquil Environment:</strong> Peace and quiet amidst natural sounds</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h3>✅ Requirements</h3>
                  <p>Welcomes solo travelers, couples, and partners of participants</p>
                </div>
                <a href="#inquiry" class="btn btn-primary btn-lg program-cta">Apply Now</a>
              </div>
            </div>
          </article>

          <!-- Program 3: Creative Content -->
          <article v-show="activeFilter === 'all' || activeFilter === 'exchange'" class="program-card" id="creative">
            <div class="program-image">
              <img src="https://cdn.discordapp.com/attachments/1477066934465069259/1477115527058161686/20250618_154738.jpg" alt="Content creation at the farm">
              <span class="program-badge">📸 Creator</span>
            </div>
            <div class="program-content">
              <div class="program-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-text">5.0 (15 reviews)</span>
              </div>
              <h2>Creative Content on a Permaculture Farm</h2>
              <p class="program-tagline">Create inspiring content while living the farm life. Perfect for writers, photographers & videographers.</p>
              <button class="btn-expand" @click="toggleProgram('creative')">
                View Details <span class="arrow">{{ expanded.creative ? '↑' : '↓' }}</span>
              </button>
              <div class="program-details" :class="{ expanded: expanded.creative }">
                <div class="detail-section program-info-box">
                  <div class="info-item"><span class="info-icon">⏰</span><span><strong>Time:</strong> 3 hrs/day, 4 days/week</span></div>
                  <div class="info-item"><span class="info-icon">💰</span><span><strong>Fee:</strong> US$19/day</span></div>
                  <div class="info-item"><span class="info-icon">🛏️</span><span><strong>Accommodation:</strong> Private cabin included</span></div>
                </div>
                <div class="detail-section">
                  <h3>🌿 The Experience</h3>
                  <p>Embark on a unique creative journey at Mawun Valley Farm. This program is perfect for content creators who want to document sustainable living while being part of an inspiring community. With Lombok's best surfing beaches just 5 minutes away, you can balance content creation with world-class waves.</p>
                </div>
                <div class="detail-section">
                  <h3>🤝 What You Offer</h3>
                  <ul class="detail-list">
                    <li><strong>Content Writer:</strong> Write, edit and publish inspiring content</li>
                    <li><strong>Photography:</strong> Take, edit and provide amazing photos</li>
                    <li><strong>Video Making:</strong> Create, edit and publish digital videos</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h3>🎁 What You Get</h3>
                  <div class="benefits-grid">
                    <div class="benefit-item"><span class="benefit-icon">🛏️</span><div><strong>Private Room</strong><p>A cozy cabin just for you</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🍳</span><div><strong>Breakfast & Lunch</strong><p>Daily farm-fresh meals</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🚲</span><div><strong>Bikes</strong><p>Free to use anytime</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🌱</span><div><strong>Permaculture Course</strong><p>Free hands-on training</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">📜</span><div><strong>Certificate</strong><p>Upon completion</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">💻</span><div><strong>Dedicated Workspace</strong><p>Perfect for remote work</p></div></div>
                  </div>
                </div>
                <div class="detail-section">
                  <h3>👤 Who We're Looking For</h3>
                  <ul class="detail-list simple">
                    <li>Content creators, photographers, videographers</li>
                    <li>Writers wanting to document farm life</li>
                    <li>Digital nomads who can work remotely AND create content</li>
                    <li>Open-minded with good communication skills</li>
                    <li>Respectful of local culture and customs</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h3>✅ Requirements</h3>
                  <p>Welcomes solo travelers, couples, and partners of participants</p>
                </div>
                <a href="#inquiry" class="btn btn-primary btn-lg program-cta">Apply Now</a>
              </div>
            </div>
          </article>

          <!-- Program 4: Group Trip -->
          <article v-show="activeFilter === 'all' || activeFilter === 'group'" class="program-card featured" id="grouptrip">
            <div class="program-image">
              <img src="/images/hero-2.jpg" alt="8-day farm life immersion group trip">
              <span class="program-badge">⭐ 8-Day Trip</span>
            </div>
            <div class="program-content">
              <div class="program-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-text">4.9 (15 reviews)</span>
              </div>
              <h2>Farm Life Experience: 8-Day Immersive Journey</h2>
              <p class="program-tagline">A transformative group trip to explore permaculture, community, and self-discovery in beautiful Lombok.</p>
              <button class="btn-expand" @click="toggleProgram('grouptrip')">
                View Details <span class="arrow">{{ expanded.grouptrip ? '↑' : '↓' }}</span>
              </button>
              <div class="program-details" :class="{ expanded: expanded.grouptrip }">
                <div class="detail-section program-info-box">
                  <div class="info-item"><span class="info-icon">📅</span><span><strong>Duration:</strong> 8 days / 7 nights</span></div>
                  <div class="info-item"><span class="info-icon">🍽️</span><span><strong>Meals:</strong> All meals included</span></div>
                  <div class="info-item"><span class="info-icon">✈️</span><span><strong>Transfer:</strong> Airport pickup & drop-off</span></div>
                </div>
                <div class="detail-section">
                  <h3>🌿 The Experience</h3>
                  <p>Dream of a simpler, more connected life? This immersive journey in Lombok is for those seeking real connection. Join a small group of like-minded travelers to explore what it truly means to live in harmony with the land.</p>
                  <p class="highlight-text">This is more than a trip — it's a chance to build deep friendships, reconnect with nature, and find pieces of yourself in a stunning Indonesian setting.</p>
                </div>
                <div class="detail-section">
                  <h3>📅 8-Day Itinerary</h3>
                  <div class="itinerary">
                    <div class="itinerary-day"><span class="day-number">Day 1</span><div class="day-content"><strong>Welcome to the Valley</strong><p>Settle into your cabin, farm-to-table welcome feast, set intentions</p></div></div>
                    <div class="itinerary-day"><span class="day-number">Day 2</span><div class="day-content"><strong>Permaculture Deep Dive</strong><p>Farm gym, permaculture workshop, garden project, bonfire</p></div></div>
                    <div class="itinerary-day"><span class="day-number">Day 3</span><div class="day-content"><strong>Ocean Adventure</strong><p>Traditional fishing with locals, snorkeling, fresh-caught BBQ</p></div></div>
                    <div class="itinerary-day"><span class="day-number">Day 4</span><div class="day-content"><strong>Island Exploration</strong><p>Beaches, bat caves, local market, cultural story night</p></div></div>
                    <div class="itinerary-day"><span class="day-number">Day 5</span><div class="day-content"><strong>Farm Mastery</strong><p>Seed-to-harvest tour, Indonesian cooking class, movie night</p></div></div>
                    <div class="itinerary-day"><span class="day-number">Day 6</span><div class="day-content"><strong>Community Impact</strong><p>Business workshop, village kids activity, music & games</p></div></div>
                    <div class="itinerary-day"><span class="day-number">Day 7</span><div class="day-content"><strong>Integration & Celebration</strong><p>Free time, eco-tourism chat, farewell BBQ feast</p></div></div>
                    <div class="itinerary-day"><span class="day-number">Day 8</span><div class="day-content"><strong>Departure</strong><p>Farewell breakfast, airport drop-off</p></div></div>
                  </div>
                </div>
                <div class="detail-section">
                  <h3>✅ What's Included</h3>
                  <div class="benefits-grid">
                    <div class="benefit-item"><span class="benefit-icon">🛏️</span><div><strong>8 Nights Accommodation</strong><p>Private farm cabin</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🍽️</span><div><strong>All Meals</strong><p>Breakfast, lunch & dinner</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">✈️</span><div><strong>Airport Transfer</strong><p>Pickup & drop-off at LOP</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🚐</span><div><strong>Local Transport</strong><p>All excursions included</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🌱</span><div><strong>Workshops</strong><p>Permaculture, cooking, business</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🎣</span><div><strong>Adventures</strong><p>Fishing, snorkeling, tours</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">📋</span><div><strong>Pre-trip Guide</strong><p>Complete preparation kit</p></div></div>
                    <div class="benefit-item"><span class="benefit-icon">🤝</span><div><strong>Local Host</strong><p>Guidance throughout</p></div></div>
                  </div>
                </div>
                <div class="detail-section">
                  <h3>❌ What's Not Included</h3>
                  <ul class="detail-list simple">
                    <li>Flight tickets</li>
                    <li>Visas and documentation</li>
                    <li>Travel insurance</li>
                  </ul>
                </div>
                <div class="detail-section">
                  <h3>✅ Requirements</h3>
                  <ul class="detail-list simple">
                    <li>Beginner English</li>
                    <li>Over 18 years old</li>
                  </ul>
                </div>
                <NuxtLink to="/retreat" class="btn btn-primary btn-lg program-cta">Learn More About Retreat</NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="inquiry-section" id="inquiry">
      <div class="container">
        <div class="inquiry-content">
          <span class="section-label">Get Started</span>
          <h2>Ready to Begin Your Journey?</h2>
          <p>Tell us about yourself and which program interests you. We'll get back to you within 24 hours.</p>
          <div class="inquiry-options">
            <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20farm%20experience%20programs%20at%20Mawun%20Valley.%20Can%20you%20tell%20me%20more?" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({ title: 'Farm Experience Programs - Mawun Valley Farm' })

const activeFilter = ref('all')
const expanded = ref({
  beachside: false,
  slowliving: false,
  creative: false,
  grouptrip: false
})

function toggleProgram(id) {
  // Close all others first
  Object.keys(expanded.value).forEach(key => {
    if (key !== id) expanded.value[key] = false
  })
  expanded.value[id] = !expanded.value[id]
}
</script>

<style scoped>
.page-header {
  padding: 140px 0 60px;
  background: var(--color-cream);
  text-align: center;
}

.programs-section {
  padding: 60px 0;
}

.program-filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 24px;
  border: 2px solid var(--color-sage);
  background: transparent;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-sage);
  color: white;
}

.programs-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.program-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: grid;
  grid-template-columns: 400px 1fr;
}

.program-card.featured {
  border: 3px solid var(--color-gold);
}

@media (max-width: 900px) {
  .program-card {
    grid-template-columns: 1fr;
  }
}

.program-image {
  position: relative;
}

.program-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
}

.program-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255,255,255,0.95);
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
}

.program-content {
  padding: 32px;
}

.program-rating {
  margin-bottom: 12px;
}

.program-rating .stars {
  color: var(--color-gold);
  font-size: 16px;
}

.program-rating .rating-text {
  color: #888;
  font-size: 14px;
  margin-left: 8px;
}

.program-content h2 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.program-tagline {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.btn-expand {
  background: var(--color-cream);
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-expand:hover {
  background: var(--color-sage);
  color: white;
}

.program-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.program-details.expanded {
  max-height: 3000px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #eee;
}

.detail-section {
  margin-bottom: 28px;
}

.detail-section h3 {
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: var(--color-terracotta);
}

.program-info-box {
  background: var(--color-cream);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icon {
  font-size: 20px;
}

.detail-list {
  list-style: none;
  padding: 0;
}

.detail-list li {
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.detail-list li:last-child {
  border-bottom: none;
}

.detail-list.simple li {
  padding-left: 24px;
  position: relative;
}

.detail-list.simple li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-sage);
  font-weight: bold;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.benefit-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: var(--color-light);
  border-radius: 12px;
}

.benefit-icon {
  font-size: 24px;
}

.benefit-item strong {
  display: block;
  margin-bottom: 4px;
}

.benefit-item p {
  margin: 0;
  font-size: 13px;
  color: #666;
}

.highlight-text {
  background: var(--color-cream);
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid var(--color-gold);
  margin-top: 12px;
}

.itinerary {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.itinerary-day {
  display: flex;
  gap: 20px;
  padding: 16px;
  background: var(--color-light);
  border-radius: 12px;
}

.day-number {
  background: var(--color-sage);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
  height: fit-content;
}

.day-content strong {
  display: block;
  margin-bottom: 4px;
}

.day-content p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.program-cta {
  display: inline-block;
  margin-top: 16px;
}

.inquiry-section {
  padding: 80px 0;
  background: var(--color-cream);
}

.inquiry-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.inquiry-content h2 {
  margin-bottom: 16px;
}

.inquiry-content > p {
  color: #666;
  margin-bottom: 32px;
}

.inquiry-options {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
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

.btn-outline {
  padding: 14px 28px;
  border: 2px solid var(--color-dark);
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-dark);
  transition: all 0.3s;
}

.btn-outline:hover {
  background: var(--color-dark);
  color: white;
}
</style>
