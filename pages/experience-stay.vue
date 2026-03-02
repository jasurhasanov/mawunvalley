<template>
  <div class="experience-stay-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/hero-2.jpg" alt="Mawun Valley Farm Stay & Contribute">
      </div>
      <div class="hero-content">
        <span class="section-label light">Stay & Contribute</span>
        <h1>Live the Farm Life</h1>
        <p>Join our community for 10+ days. Stay in a private cabin, share meals, and contribute your skills to a growing permaculture farm in South Lombok.</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-number">10+</span>
            <span class="hero-stat-label">Day Minimum</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-number">$19</span>
            <span class="hero-stat-label">Per Day</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-number">5 min</span>
            <span class="hero-stat-label">To Beach</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="#programs" class="btn btn-primary btn-lg">Choose Your Path</a>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="how-grid">
          <div class="how-item">
            <span class="how-icon">🏡</span>
            <h4>Stay</h4>
            <p>Private cabin, daily breakfast & lunch, free bikes, workspace</p>
          </div>
          <div class="how-item">
            <span class="how-icon">🤝</span>
            <h4>Contribute</h4>
            <p>3 hours/day, 4 days/week — choose your skill path</p>
          </div>
          <div class="how-item">
            <span class="how-icon">🌴</span>
            <h4>Experience</h4>
            <p>BBQ nights, surf nearby, community, island life</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="programs-section" id="programs">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Choose Your Path</span>
          <h2>How Will You Contribute?</h2>
          <p>Same stay, different skills. Pick what fits you — or try a bit of everything.</p>
        </div>

        <div class="programs-grid">
          <!-- The Storyteller -->
          <article class="program-card" @click="openProgram('storyteller')">
            <div class="program-image">
              <img src="/images/creative-cover.jpg" alt="The Storyteller">
              <span class="program-badge">📸 Creator</span>
            </div>
            <div class="program-info">
              <h3>The Storyteller</h3>
              <p>Content creation, photography, video, social media. Perfect for digital nomads and creators.</p>
              <div class="program-meta">
                <span>10+ days</span>
                <span>$19/day</span>
              </div>
            </div>
          </article>

          <!-- The Grower -->
          <article class="program-card" @click="openProgram('grower')">
            <div class="program-image">
              <img src="/images/slowliving-cover.jpg" alt="The Grower">
              <span class="program-badge">🌱 Nature</span>
            </div>
            <div class="program-info">
              <h3>The Grower</h3>
              <p>Garden, permaculture, planting, harvesting. For those who want their hands in the soil.</p>
              <div class="program-meta">
                <span>10+ days</span>
                <span>$19/day</span>
              </div>
            </div>
          </article>

          <!-- The Maker -->
          <article class="program-card" @click="openProgram('maker')">
            <div class="program-image">
              <img src="/images/beachside-cover.jpg" alt="The Maker">
              <span class="program-badge">🔨 Builder</span>
            </div>
            <div class="program-info">
              <h3>The Maker</h3>
              <p>Woodworking, building, repairs, crafts. For hands-on people who love to build things.</p>
              <div class="program-meta">
                <span>10+ days</span>
                <span>$19/day</span>
              </div>
            </div>
          </article>

          <!-- The Caretaker -->
          <article class="program-card" @click="openProgram('caretaker')">
            <div class="program-image">
              <img src="/images/hero-1.jpg" alt="The Caretaker">
              <span class="program-badge">💚 Nurturing</span>
            </div>
            <div class="program-info">
              <h3>The Caretaker</h3>
              <p>Animal care, kitchen help, hospitality. For warm souls who love to nurture.</p>
              <div class="program-meta">
                <span>10+ days</span>
                <span>$19/day</span>
              </div>
            </div>
          </article>

          <!-- Slow Living -->
          <article class="program-card featured" @click="openProgram('slowliving')">
            <div class="program-image">
              <img src="/images/program-1.jpg" alt="Slow Living">
              <span class="program-badge">🧘 Flexible</span>
            </div>
            <div class="program-info">
              <h3>Slow Living</h3>
              <p>A bit of everything. Perfect if you're unsure or just want variety.</p>
              <div class="program-meta">
                <span>10+ days</span>
                <span>$19/day</span>
              </div>
            </div>
          </article>
        </div>

        <div class="programs-note">
          <p>✨ <strong>Not sure which to pick?</strong> Start with Slow Living — you can always switch or combine paths once you're here.</p>
        </div>
      </div>
    </section>

    <!-- Program Details Modal -->
    <Teleport to="body">
      <div v-if="activeProgram" class="modal-overlay" @click.self="closeProgram">
        <div class="modal-content">
          <button class="modal-close" @click="closeProgram">✕</button>
          
          <!-- The Storyteller Details -->
          <div v-if="activeProgram === 'storyteller'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">📸 Creator</span>
              <h2>The Storyteller</h2>
              <p class="program-tagline">Share our story with the world through your lens and words.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
              </div>
              <h4>🎯 Who This Is For</h4>
              <p>Digital nomads, photographers, videographers, content creators, social media managers, and writers who want to document sustainable living while being part of an inspiring community.</p>
              <h4>📷 What You'll Create</h4>
              <ul>
                <li><strong>Photography:</strong> Farm life, landscapes, portraits, food</li>
                <li><strong>Video:</strong> Reels, vlogs, mini-documentaries</li>
                <li><strong>Writing:</strong> Blog posts, captions, stories</li>
                <li><strong>Social Media:</strong> Content planning and management</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">💻 Dedicated Workspace</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">🍹 Free Drinks</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20The%20Storyteller%20program.%20I'd%20like%20to%20stay%20for%20____%20days." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <!-- The Grower Details -->
          <div v-if="activeProgram === 'grower'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🌱 Nature</span>
              <h2>The Grower</h2>
              <p class="program-tagline">Get your hands in the soil and watch things grow.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
              </div>
              <h4>🎯 Who This Is For</h4>
              <p>Nature lovers, sustainability seekers, career-changers exploring permaculture, and anyone who finds peace in gardening and growing things.</p>
              <h4>🌿 What You'll Do</h4>
              <ul>
                <li><strong>Gardening:</strong> Plant, weed, water, and cultivate</li>
                <li><strong>Permaculture:</strong> Learn sustainable farming systems</li>
                <li><strong>Harvesting:</strong> Pick vegetables, fruits, herbs</li>
                <li><strong>Composting:</strong> Turn waste into garden gold</li>
                <li><strong>Seed Saving:</strong> Preserve heirloom varieties</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">💻 Workspace</div>
                <div class="benefit">🍹 Free Drinks</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20The%20Grower%20program.%20I'd%20like%20to%20stay%20for%20____%20days." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <!-- The Maker Details -->
          <div v-if="activeProgram === 'maker'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🔨 Builder</span>
              <h2>The Maker</h2>
              <p class="program-tagline">Build, fix, and create with your hands.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
              </div>
              <h4>🎯 Who This Is For</h4>
              <p>Hands-on types, engineers escaping screens, designers who want to build physical things, woodworking enthusiasts, and anyone who finds satisfaction in making.</p>
              <h4>🔧 What You'll Build</h4>
              <ul>
                <li><strong>Woodworking:</strong> Furniture, signs, structures</li>
                <li><strong>Construction:</strong> Cabin improvements, new builds</li>
                <li><strong>Repairs:</strong> Fixing what needs fixing</li>
                <li><strong>Crafts:</strong> Decorations, practical items</li>
                <li><strong>Painting:</strong> Walls, murals, details</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🔨 Tools Provided</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">🍹 Free Drinks</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20The%20Maker%20program.%20I'd%20like%20to%20stay%20for%20____%20days." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <!-- The Caretaker Details -->
          <div v-if="activeProgram === 'caretaker'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">💚 Nurturing</span>
              <h2>The Caretaker</h2>
              <p class="program-tagline">Nurture animals, feed guests, create warmth.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
              </div>
              <h4>🎯 Who This Is For</h4>
              <p>Warm souls who love animals, enjoy cooking and hosting, and find purpose in making others comfortable. Great for couples, first-timers, or anyone seeking a nurturing role.</p>
              <h4>💚 What You'll Do</h4>
              <ul>
                <li><strong>Animal Care:</strong> Feed and care for goats, ducks, chickens</li>
                <li><strong>Kitchen Help:</strong> Assist with meals, learn Indonesian cooking</li>
                <li><strong>Hospitality:</strong> Welcome guests, help with check-ins</li>
                <li><strong>Community:</strong> Organize events, create connection</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🐐 Animal Therapy</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">🍹 Free Drinks</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20The%20Caretaker%20program.%20I'd%20like%20to%20stay%20for%20____%20days." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <!-- Slow Living Details -->
          <div v-if="activeProgram === 'slowliving'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🧘 Flexible</span>
              <h2>Slow Living</h2>
              <p class="program-tagline">A bit of everything. No pressure, just presence.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
              </div>
              <h4>🎯 Who This Is For</h4>
              <p>People recovering from burnout, first-timers who aren't sure what they're good at, anyone seeking variety over specialization, and those who just want to slow down and be present.</p>
              <h4>✨ What You'll Experience</h4>
              <ul>
                <li><strong>Variety:</strong> Try different tasks — garden today, animals tomorrow</li>
                <li><strong>Flexibility:</strong> Contribute based on what the farm needs</li>
                <li><strong>Discovery:</strong> Find what you enjoy along the way</li>
                <li><strong>Presence:</strong> No pressure, just being part of the rhythm</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🧘 Flexible Schedule</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">🍹 Free Drinks</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Slow%20Living%20program.%20I'd%20like%20to%20stay%20for%20____%20days." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
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
          <p>Simple, cozy spaces designed for slow mornings and deep sleep. All programs include accommodation.</p>
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
            <div class="cabin-info"><h4>Rick's Windmill</h4><p>Queen bed • Unique design • Black balcony</p></div>
          </div>
          <div class="cabin-card">
            <img src="/images/cabin-lime.jpg" alt="Lime Cabin">
            <div class="cabin-info"><h4>Lime Cabin</h4><p>Queen bed • Bright & colorful • Farm view</p></div>
          </div>
          <div class="cabin-card">
            <img src="/images/program-1.jpg" alt="Peace Cabin">
            <div class="cabin-info"><h4>Peace Cabin</h4><p>Queen bed • Wooden exterior • Mountain view</p></div>
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
            <p>"Staying at Mawun Valley Farm was an incredible experience. Fully immersed in nature and local life. The peaceful environment helped me disconnect and reset. If you're a surfer, this place is a hidden gem."</p>
            <div class="review-author"><strong>Iyad</strong><span>Tunisia • 3 weeks</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"We spent 1 month here and couldn't be more happy. There's a strong sense of community. The meals were really good, the BBQ nights were delicious. We strongly recommend this farm!"</p>
            <div class="review-author"><strong>Mariana</strong><span>Portugal • 1 month</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"From day one, I felt like part of the family. My cabin was super cute and cozy. The BBQ nights were the absolute highlight—so delicious! I'm already looking forward to visiting again."</p>
            <div class="review-author"><strong>Pame</strong><span>Chile • 2 weeks</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"They have a spectacular farm! Spending time with the goats made us very happy. Definitely a place to stay and enjoy the countryside, the tranquility, and Noni's desserts!"</p>
            <div class="review-author"><strong>Paola</strong><span>Peru • 10 days</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"The wooden cabins are very cozy! From delicious BBQs and fun card games to movie nights and Noni's amazing baked treats, there is always something to enjoy."</p>
            <div class="review-author"><strong>Isabelle</strong><span>Netherlands • 2 weeks</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Mawun Valley is an incredible place that gives everyone a place in the community. Everything is to be created with the host as an inspired and caring conductor."</p>
            <div class="review-author"><strong>Alexa</strong><span>France • 1 month</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Can't speak highly enough of this family and their beautiful farm! Greeted with a community dinner—incredible food cooked straight from the garden. Perfect location!"</p>
            <div class="review-author"><strong>Zoe</strong><span>Australia • 12 days</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"The cottage is really charming, the whole area is beautiful and peaceful. Next morning: coffee and delicious omelette. Paradise!"</p>
            <div class="review-author"><strong>Marjut</strong><span>Germany</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Contribute?</h2>
          <p>Message us on WhatsApp. Tell us a bit about yourself and which path interests you.</p>
          <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20staying%20and%20contributing%20at%20Mawun%20Valley%20Farm." class="btn btn-whatsapp btn-lg" target="_blank">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
          <p class="cta-note">Minimum 10-day stay • $19/day all-inclusive</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
useHead({ title: 'Stay & Contribute - Mawun Valley Farm' })
const activeProgram = ref(null)
function openProgram(program) { activeProgram.value = program; document.body.style.overflow = 'hidden' }
function closeProgram() { activeProgram.value = null; document.body.style.overflow = '' }
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
.hero-stats { display: flex; justify-content: center; gap: 40px; margin-bottom: 32px; flex-wrap: wrap; }
.hero-stat { text-align: center; }
.hero-stat-number { display: block; font-size: 2rem; font-weight: 700; color: var(--color-gold); }
.hero-stat-label { font-size: 14px; opacity: 0.9; }
.hero-cta .btn { padding: 16px 32px; font-size: 16px; }

.how-it-works { background: var(--color-dark); padding: 50px 0; }
.how-grid { display: flex; justify-content: center; gap: 60px; flex-wrap: wrap; }
.how-item { text-align: center; color: white; max-width: 200px; }
.how-icon { font-size: 2.5rem; display: block; margin-bottom: 12px; }
.how-item h4 { color: var(--color-gold); margin-bottom: 8px; font-size: 1.2rem; }
.how-item p { font-size: 14px; opacity: 0.85; line-height: 1.6; }

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
.programs-note { text-align: center; margin-top: 40px; padding: 20px; background: white; border-radius: 12px; max-width: 600px; margin-left: auto; margin-right: auto; }
.programs-note p { margin: 0; color: #555; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-content { background: white; border-radius: 20px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; }
.modal-close { position: absolute; top: 16px; right: 16px; background: var(--color-cream); border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; }
.modal-header { padding: 32px 32px 0; }
.modal-header h2 { font-size: 1.6rem; margin: 12px 0; }
.program-tagline { color: #666; }
.modal-body { padding: 24px 32px; }
.modal-body h4 { margin: 24px 0 12px; color: var(--color-dark); }
.modal-body ul { list-style: none; padding: 0; }
.modal-body li { padding: 8px 0; padding-left: 24px; position: relative; }
.modal-body li::before { content: "✓"; position: absolute; left: 0; color: var(--color-sage); }
.info-box { display: flex; flex-wrap: wrap; gap: 16px; background: var(--color-cream); padding: 16px; border-radius: 12px; margin-bottom: 20px; }
.info-item { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.benefit { background: var(--color-cream); padding: 12px; border-radius: 8px; font-size: 14px; }
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
.cta-note { margin-top: 20px !important; font-size: 14px; opacity: 0.7; }

.btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; border-radius: 30px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
.btn-primary { background: var(--color-gold); color: var(--color-dark); }
.btn-primary:hover { background: var(--color-terracotta); color: white; }
.btn-whatsapp { background: #25D366; color: white; }
.btn-whatsapp:hover { background: #128C7E; }
.btn-lg { padding: 16px 32px; font-size: 16px; }

@media (max-width: 768px) {
  .hero-stats { gap: 24px; }
  .how-grid { gap: 30px; }
  .programs-grid { grid-template-columns: 1fr; }
  .modal-content { border-radius: 16px 16px 0 0; max-height: 95vh; margin-top: auto; }
  .benefits-grid { grid-template-columns: 1fr; }
}
</style>
