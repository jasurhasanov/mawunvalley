<template>
  <div>
    <!-- Hero -->
    <section class="hero" id="hero">
      <div class="hero-bg"><picture><source media="(max-width: 1024px)" srcset="/images/hero-mobile.png"><img src="/images/hero-gemini-v3.png" alt="Mawun Valley Farm"></picture></div>
      <div class="hero-content">
        <p class="hero-subtitle handwritten">Where slow living begins</p>
        <h1>Slow Down.<br>Connect Deeply.</h1>
        <p class="tagline">A family farm in the valley, minutes from the sea.</p>
        <NuxtLink to="/stay-contribute" class="btn btn-primary btn-lg">Apply to Stay</NuxtLink>
      </div>
      <div class="scroll-indicator"><span></span></div>
    </section>

    <!-- The Place -->
    <section class="place" id="place">
      <div class="container">
        <div class="place-grid">
          <div class="place-content">
            <span class="section-label">The Place</span>
            <h2>Where Mountains Meet the Sea</h2>
            <p class="lead">Nestled in a peaceful valley in South Lombok, surrounded by rice fields and mountain views — yet just 3-10 minutes from some of the best surfing beaches in Indonesia.</p>
            <div class="place-features">
              <div class="place-feature">
                <span class="feature-icon">🏔️</span>
                <span>Valley & mountain views</span>
              </div>
              <div class="place-feature">
                <span class="feature-icon">🏄</span>
                <span>3-10 min to Mawun, Tampah, Lancing & Areguling</span>
              </div>
              <div class="place-feature">
                <span class="feature-icon">🌾</span>
                <span>Traditional Sasak village</span>
              </div>
              <div class="place-feature">
                <span class="feature-icon">🌱</span>
                <span>Organic & sustainable</span>
              </div>
            </div>
          </div>
          <div class="place-image">
            <img src="/images/hero-2.jpg" alt="Farm valley views">
          </div>
        </div>
      </div>
    </section>

    <!-- Ways to Experience -->
    <section class="ways" id="ways">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Ways to Experience</span>
          <h2>Find Your Way to the Farm</h2>
          <p>Whether you're here for a night or a season, there's a place for you.</p>
        </div>
        <div class="ways-grid">
          <NuxtLink to="/stay-contribute" class="way-card">
            <div class="way-icon">🏡</div>
            <h3>Stay & Contribute</h3>
            <p>Live the farm life. Private cabin, meals, and ways to get involved.</p>
            <span class="way-link">Explore programs →</span>
          </NuxtLink>
          <NuxtLink to="/gather" class="way-card">
            <div class="way-icon">🍽️</div>
            <h3>Farm Events</h3>
            <p>BBQ nights, cooking classes, Little Farmer for kids. Come together.</p>
            <span class="way-link">See events →</span>
          </NuxtLink>
          <NuxtLink to="/belong" class="way-card">
            <div class="way-icon">👨‍👩‍👧</div>
            <h3>Membership</h3>
            <p>Family Farm Membership. Your own garden plot and full farm access.</p>
            <span class="way-link">Learn more →</span>
          </NuxtLink>
          <NuxtLink to="/nonis" class="way-card">
            <div class="way-icon">🍰</div>
            <h3>Noni's</h3>
            <p>Farm-to-table café. Fresh pastries, great coffee, and Noni's famous cheesecake.</p>
            <span class="way-link">Visit Noni's →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Animals -->
    <section class="animals" id="animals">
      <div class="container">
        <div class="section-header">
          <span class="section-label">The Residents</span>
          <h2>Meet the Family</h2>
          <p class="handwritten">"They'll steal your heart (and maybe your breakfast)"</p>
        </div>
        <div class="animals-grid">
          <div class="animal-card">
            <div class="animal-emoji">🐐</div>
            <h4>The Goats</h4>
            <p><strong>Coconut</strong> eats everything—cheesecake, cat food, your lunch. <strong>Spinach & Kangkung</strong> are champion fence-jumpers who raid the veggie garden.</p>
          </div>
          <div class="animal-card">
            <div class="animal-emoji">🦆</div>
            <h4>The Ducks</h4>
            <p><strong>Onyx & Midnight</strong> and their 7 ducklings. They waddle past your cabin every morning—better than any alarm clock.</p>
          </div>
          <div class="animal-card">
            <div class="animal-emoji">🐱</div>
            <h4>The Cats</h4>
            <p><strong>Drama Queen</strong> rules the café. <strong>Hungry Lion</strong> leads her kittens—Scorpion, Charlie Jr & Black Panther. Plus <strong>Charlie Chaplin</strong> and <strong>Sunny</strong>.</p>
          </div>
          <div class="animal-card">
            <div class="animal-emoji">🐕</div>
            <h4>Mango</h4>
            <p>Our sweet girl and Chief Welcoming Officer. She'll greet you on arrival and probably follow you everywhere.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="philosophy" id="philosophy">
      <div class="container">
        <div class="philosophy-content">
          <span class="section-label light">Our Philosophy</span>
          <h2>Slow Down, Connect Deeply</h2>
          <p class="philosophy-intro">In a world that moves too fast, we've created a place where time slows down. Where strangers become family over shared meals. Where the rhythm of farm life replaces the noise of daily hustle.</p>
          <div class="philosophy-grid">
            <div class="philosophy-item">
              <h4>🌱 Farm to Table</h4>
              <p>Veggies from the garden, jam from our fruit trees, eggs from happy chickens. You'll taste the difference when food is grown with love.</p>
            </div>
            <div class="philosophy-item">
              <h4>👨‍👩‍👧‍👦 Family, Not Guests</h4>
              <p>From day one, you're part of our community. Sharing meals, stories, and laughter under the stars at our Friday BBQ nights.</p>
            </div>
            <div class="philosophy-item">
              <h4>🐐 Nature Immersion</h4>
              <p>Wake up with roosters, cuddle baby goats, watch ducklings waddle by. This is farm life—simple, grounding, and beautifully real.</p>
            </div>
            <div class="philosophy-item">
              <h4>🌊 Balance & Freedom</h4>
              <p>World-class surf breaks 10 minutes away. Work at your own pace. Take what you need from this place—rest, adventure, or both.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery" id="gallery">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Life at the Farm</span>
          <h2>Peek Inside</h2>
        </div>
        <div class="farmlife-slider">
          <div class="farmlife-track" :style="{ transform: `translateX(-${farmlifePosition}px)` }">
            <div class="farmlife-slide" v-for="i in 10" :key="i">
              <img :src="`/images/farmlife-${i}.jpg`" :alt="`Farm life ${i}`">
            </div>
          </div>
        </div>
        <div class="farmlife-nav">
          <button class="farmlife-btn prev" @click="slideFarmlife(-1)">‹</button>
          <button class="farmlife-btn next" @click="slideFarmlife(1)">›</button>
        </div>
        <p class="photo-credit">Photos by Giulia Lauria from Italy 📸</p>
      </div>
    </section>

    <!-- Meet Your Host -->
    <section class="meet-host" id="host">
      <div class="container">
        <div class="host-grid">
          <div class="host-image">
            <img src="/images/noni-1.jpg" alt="Noni - Your Host at Mawun Valley">
          </div>
          <div class="host-content">
            <span class="section-label">Meet Your Host</span>
            <h2>Noni</h2>
            <p>A proud Indonesian with a global perspective — having lived in Azerbaijan, Kazakhstan, and Malaysia. She's the heart behind Mawun Valley Farm and the mastermind behind the famous cheesecake at Noni's Resto.</p>
            <p>Fluent in English, Azerbaijani, Indonesian, and local languages, she brings warmth and genuine hospitality to every guest.</p>
            <NuxtLink to="/host" class="btn btn-primary">Get to Know Noni →</NuxtLink>
          </div>
        </div>
      </div>
    </section>


    <!-- Testimonials -->
    <section class="testimonials" id="reviews">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Guest Stories</span>
          <h2>What People Say</h2>
          <p class="section-subtitle">Real reviews from our farm experience guests</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-text">"Staying at Mawun Valley Farm was an incredible experience. Fully immersed in nature and local life. The peaceful environment helped me disconnect and reset. If you're a surfer, this place is a hidden gem—only 10-15 minutes from Mawi Beach with world-class waves."</p>
            <p class="testimonial-author">— Iyad, Tunisia</p>
            <span class="testimonial-source">Worldpackers</span>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-text">"We spent 1 month here and couldn't be more happy. There's a strong sense of community. The meals were really good and tasty, the BBQ nights were delicious. We strongly recommend this farm if you want a great farm experience and feel Lombok slow living."</p>
            <p class="testimonial-author">— Mariana, Portugal</p>
            <span class="testimonial-source">Worldpackers</span>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-text">"From day one, I felt like part of the family—sharing meals and stories with Noni and the team. My cabin was super cute and cozy, and the work was flexible. The BBQ nights were the best—so delicious! I'm excited to visit again."</p>
            <p class="testimonial-author">— Pame, Chile</p>
            <span class="testimonial-source">Worldpackers</span>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-text">"Every day was simple but full. Waking up with the roosters, working close to the land, and learning from people who are truly passionate. It's definitely a natural and local experience—that's exactly what makes it so special."</p>
            <p class="testimonial-author">— Sara, Spain</p>
            <span class="testimonial-source">Worldpackers</span>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-text">"The cabins are amazing, the work is flexible, Noni and the team are awesome hosts and the food is delicious! You choose what project you'd like to do—build, plant, cook, paint... it's up to you! Would definitely recommend!"</p>
            <p class="testimonial-author">— Pippa, Australia</p>
            <span class="testimonial-source">Worldpackers</span>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-rating">★★★★★</div>
            <p class="testimonial-text">"Great community to be part of! Everyone is very friendly and welcoming! The host has a very inspiring and ambitious vision. We got local food 3 times a day. The beach is within 25 minutes walking distance. I've had a great time!"</p>
            <p class="testimonial-author">— Rick, Netherlands</p>
            <span class="testimonial-source">Worldpackers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Guest Diaries -->
    <section class="guest-diaries" id="diaries">
      <div class="container">
        <div class="section-header">
          <span class="section-label">From Our Guests</span>
          <h2>Guest Diaries</h2>
          <p class="section-subtitle">Real stories from travellers who stayed with us</p>
        </div>
        <div class="diaries-grid">
          <NuxtLink to="/blog/guest-diary-part-1" class="diary-card">
            <img src="/images/blog/farm-life.jpg" alt="Ava's Guest Diary">
            <div class="diary-content">
              <span class="diary-badge">Guest Diary</span>
              <h3>Ava's Guest Diary: First Impressions</h3>
              <p>"Selamat Datang. A fifteen-minute drive from Kuta lies Mawun Valley — a blissful haven that differs from your average farm stay..."</p>
              <span class="diary-meta">By Ava from UK · 3 part series</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/blog/grapevine-pruning-lombok" class="diary-card">
            <img src="/images/blog/grapevine-1.jpg" alt="Grapevine pruning story">
            <div class="diary-content">
              <span class="diary-badge">Farm Life</span>
              <h3>Through the Grapevine: First Pruning</h3>
              <p>"Before picking up the clippers, we did a bit of research to decide the best approach. What we landed on? A hard prune..."</p>
              <span class="diary-meta">By Sarah & Johnny</span>
            </div>
          </NuxtLink>
        </div>
        <div class="diaries-cta">
          <NuxtLink to="/blog" class="btn btn-dark">Read All Guest Stories →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-content">
            <span class="section-label light">Come Find Us</span>
            <h2>Start Your Journey</h2>
            <p>We're in Mawun area, where the valley meets the coast. Reach out — we'd love to hear from you.</p>
            <div class="contact-buttons">
              <a href="https://wa.me/6282258440585" class="btn btn-whatsapp" target="_blank">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Mawun Valley Farm - Slow Down, Connect Deeply'
})

const farmlifePosition = ref(0)

function slideFarmlife(direction) {
  const slider = document.querySelector('.farmlife-track')
  if (!slider) return
  const slideWidth = 320
  const maxScroll = slider.scrollWidth - slider.parentElement.clientWidth
  farmlifePosition.value = Math.max(0, Math.min(maxScroll, farmlifePosition.value + (direction * slideWidth)))
}
</script>

<style scoped>
/* Testimonials Section */
.testimonials {
  padding: 80px 0;
  background: var(--color-warm-white);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.testimonial-card {
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.testimonial-rating {
  color: var(--color-gold);
  font-size: 18px;
  margin-bottom: 16px;
}

.testimonial-text {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 16px;
  font-style: italic;
}

.testimonial-author {
  font-weight: 600;
  margin-bottom: 4px;
}

.testimonial-source {
  font-size: 12px;
  color: var(--color-sage);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Guest Diaries Section */
.guest-diaries {
  padding: 80px 0;
  background: #f9f8f5;
}

.diaries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 40px auto 0;
}

.diary-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.diary-card:hover {
  transform: translateY(-4px);
}

.diary-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.diary-content {
  padding: 24px;
}

.diary-badge {
  display: inline-block;
  background: #d4a574;
  color: #2c3e2d;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.diary-content h3 {
  font-size: 1.25rem;
  color: #2c3e2d;
  margin-bottom: 10px;
}

.diary-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.diary-meta {
  display: block;
  color: #888;
  font-size: 0.85rem;
  margin-top: 12px;
}

.diaries-cta {
  text-align: center;
  margin-top: 40px;
}

.btn-dark {
  display: inline-block;
  padding: 14px 32px;
  background: #2c3e2d;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn-dark:hover {
  background: #1a2a1a;
}

/* Contact Section */
.contact {
  padding: 80px 0;
  background: var(--color-sage);
  color: white;
}

.contact h2 {
  color: white;
}

.section-label.light {
  color: rgba(255,255,255,0.8);
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-content p {
  opacity: 0.9;
  margin-bottom: 32px;
}

.contact-buttons {
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
  border: 2px solid white;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: white;
  color: var(--color-sage);
}

/* Farmlife Slider */
.gallery { padding: 80px 0; background: var(--color-cream); overflow: hidden; }
.farmlife-slider { overflow: hidden; margin: 0 -20px; padding: 0 20px; }
.farmlife-track { display: flex; gap: 20px; transition: transform 0.4s ease; }
.farmlife-slide { flex: 0 0 300px; height: 400px; border-radius: 16px; overflow: hidden; }
.farmlife-slide img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
.farmlife-slide:hover img { transform: scale(1.05); }
.farmlife-nav { display: flex; justify-content: center; gap: 16px; margin-top: 24px; }
.photo-credit {
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-style: italic;
  margin-top: 16px;
  opacity: 0.8;
}
.farmlife-btn { width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--color-dark); background: white; font-size: 24px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
.farmlife-btn:hover { background: var(--color-dark); color: white; }
@media (max-width: 768px) { .farmlife-slide { flex: 0 0 260px; height: 350px; } }
/* Meet Your Host */
.meet-host {
  padding: 80px 0;
  background: var(--color-cream);
}

.host-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.host-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.host-content h2 {
  font-family: var(--font-handwritten), cursive;
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: var(--color-terracotta);
}

.host-content p {
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.host-content .btn-primary {
  display: inline-block;
  margin-top: 16px;
  background: var(--color-gold);
  color: white;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.host-content .btn-primary:hover {
  background: var(--color-terracotta);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .host-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .host-image img {
    height: 350px;
  }
  
  .host-content h2 {
    font-size: 2.5rem;
  }
}

</style>
<!-- Updated Sun Mar  1 08:11:39 UTC 2026 -->
