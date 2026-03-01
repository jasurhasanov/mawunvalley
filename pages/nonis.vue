<template>
  <div>
    <!-- Hero -->
    <section class="nonis-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <img src="/images/nonis-logo-dark.png" alt="Noni's Resto & Pastry" class="nonis-logo-img">
        <p class="nonis-subtitle">Where the Farm Meets Your Table</p>
      </div>
      <div class="scroll-hint">
        <span></span>
      </div>
    </section>

    <!-- Story -->
    <section class="nonis-story">
      <div class="container">
        <div class="story-content">
          <span class="section-label">Our Story</span>
          <h2>Less Items, More Quality</h2>
          <p>At Mawun Valley Farm, we embrace the quiet beauty of <strong>slow living</strong> — cultivating peace, open spaces, and a deep connection to nature.</p>
          <p>From this same vision, Noni's was born. Whether it's a creamy <strong>Burnt Cheesecake</strong> or a soothing <strong>Lemongrass Ginger Tea</strong>, everything is crafted with the same dedication we put into nurturing our farm.</p>
          <blockquote class="philosophy-quote">
            <span class="quote-mark">"</span>
            Less but better — in everything we make.
            <span class="quote-mark">"</span>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Hours & Info -->
    <section class="nonis-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">🕐</div>
            <h3>Open Daily</h3>
            <p class="hours">8:00 AM - 5:00 PM</p>
          </div>
          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>Location</h3>
            <p>At Mawun Valley Farm<br>Lombok, Indonesia</p>
          </div>
          <div class="info-card">
            <div class="info-icon">📱</div>
            <h3>Reserve a Table</h3>
            <a href="https://wa.me/6282258440585" class="whatsapp-link">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              +62 822 5844 0585
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu -->
    <section class="nonis-menu" id="menu">
      <div class="container">
        <span class="section-label">Our Menu</span>
        <h2>Farm-to-Table Goodness</h2>
        
        <!-- Sticky Menu Nav -->
        <nav class="menu-nav">
          <a href="#breakfast" class="menu-nav-item" :class="{ active: activeCategory === 'breakfast' }" @click.prevent="scrollToCategory('breakfast')">🍳 Breakfast</a>
          <a href="#meals" class="menu-nav-item" :class="{ active: activeCategory === 'meals' }" @click.prevent="scrollToCategory('meals')">🍽️ Meals</a>
          <a href="#drinks" class="menu-nav-item" :class="{ active: activeCategory === 'drinks' }" @click.prevent="scrollToCategory('drinks')">🍵 Drinks</a>
          <a href="#pastry" class="menu-nav-item" :class="{ active: activeCategory === 'pastry' }" @click.prevent="scrollToCategory('pastry')">🍰 Pastry</a>
        </nav>
        
        <!-- Breakfast -->
        <div id="breakfast" class="menu-category">
          <h3 class="category-title">🍳 Breakfast</h3>
          <p class="category-note">Served all day (8:00 - 17:00)</p>
          <div class="menu-grid">
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Omelette</span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">Fluffy eggs with local vegetables, finished with fresh farm herbs like mint or tarragon.</p>
            </div>
            <div class="menu-item featured">
              <div class="item-header">
                <span class="item-name">Crêpes (Farm Jam) <span class="star">⭐</span></span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">Thin, delicate pancakes served with rich farm-made seasonal jam, a sweet treat.</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Toast & Farm-Made Delight</span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">Toasted bread served with rich farm-made seasonal jam, a sweet treat.</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Farm Fresh Boiled Eggs</span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">Boiled eggs served with fresh farm-grown vegetables, including tomatoes, mint, basil, and seasonal greens.</p>
            </div>
          </div>
        </div>

        <!-- Signature Meals -->
        <div id="meals" class="menu-category">
          <h3 class="category-title">🍽️ Signature Meals</h3>
          <div class="menu-grid">
            <div class="menu-item featured">
              <div class="item-header">
                <span class="item-name">Noni's Plate <span class="star">⭐</span></span>
                <span class="item-price">75K</span>
              </div>
              <p class="item-desc">Noni's signature farm-to-table recipe! Features crispy fried chicken or fresh fried fish, served with seasonal side, tofu, fresh farm vegetables, fried peanuts & tempeh, and Noni's signature sambal.</p>
            </div>
            <div class="menu-item featured">
              <div class="item-header">
                <span class="item-name">Noni's Plate (Vegan) <span class="star">⭐</span></span>
                <span class="item-price">75K</span>
              </div>
              <p class="item-desc">A vibrant, plant-based dish celebrating our farm's harvest. Features savory tofu, seasonal side, fresh farm vegetables, crispy peanuts & tempeh, and Noni's signature sambal. 100% plant-based.</p>
            </div>
          </div>
        </div>

        <!-- Drinks -->
        <div id="drinks" class="menu-category">
          <h3 class="category-title">🍵 Drinks</h3>
          <div class="menu-grid">
            <div class="menu-item featured">
              <div class="item-header">
                <span class="item-name">Lemongrass Ginger Tea <span class="star">⭐</span></span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">A soothing, warming tea infused with fresh farm lemongrass, ginger and honey.</p>
            </div>
            <div class="menu-item featured">
              <div class="item-header">
                <span class="item-name">Wedang Uwuh <span class="star">⭐</span></span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">A traditional Javanese warm herbal infusion — ginger, cinnamon bark, cloves, nutmeg leaf, secang wood, rock sugar (as side).</p>
            </div>
            <div class="menu-item featured">
              <div class="item-header">
                <span class="item-name">Azerbaijan Tea (hot) <span class="star">⭐</span></span>
                <span class="item-price">40K</span>
              </div>
              <p class="item-desc">A warming black tea infused with various herbs and aromatic fruit peels.</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Jasmine / Green Tea (hot)</span>
                <span class="item-price">40K</span>
              </div>
              <p class="item-desc">A fragrant, warming tea served in a teapot.</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Ice Lime Tea</span>
                <span class="item-price">40K</span>
              </div>
              <p class="item-desc">A refreshing cold tea with a zesty lime twist.</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Ice Coffee</span>
                <span class="item-price">40K</span>
              </div>
              <p class="item-desc">Cold-brewed Lombok coffee, smooth and bold. Add milk + 5K.</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Lombok Coffee (Hot)</span>
                <span class="item-price">40K</span>
              </div>
              <p class="item-desc">A warming cup of locally-sourced Lombok coffee.</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <span class="item-name">Cranberry Juice</span>
                <span class="item-price">40K</span>
              </div>
              <p class="item-desc">Pure cranberry juice — no added sugar, no preservatives, no artificial colors.</p>
            </div>
          </div>
        </div>

        <!-- Pastry -->
        <div id="pastry" class="menu-category pastry-highlight">
          <h3 class="category-title">🍰 Pastry</h3>
          <p class="category-note">Our signature — we do one, and we master it.</p>
          <div class="menu-grid single">
            <div class="menu-item signature">
              <div class="item-header">
                <span class="item-name">Noni's Burnt Cheesecake <span class="star">⭐</span></span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">A creamy, caramelized cheesecake with a distinct burnt exterior, baked fresh at Noni's. Our one and only pastry — perfected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiences -->
    <section class="nonis-experiences">
      <div class="container">
        <span class="section-label">Farm Experiences</span>
        <h2>Beyond the Cafe</h2>
        <div class="experience-grid">
          <a href="/experience" class="experience-card">
            <div class="exp-icon">🔥</div>
            <h3>BBQ Night</h3>
            <p>Gather around the fire for a communal BBQ experience under the stars. Fresh ingredients, good company, unforgettable evenings.</p>
            <span class="exp-link">Learn more →</span>
          </a>
          <a href="/experience" class="experience-card">
            <div class="exp-icon">👨‍🍳</div>
            <h3>Cooking Classes</h3>
            <p>Learn to cook traditional Indonesian dishes using fresh ingredients straight from our farm. Take the flavors home with you.</p>
            <span class="exp-link">Learn more →</span>
          </a>
          <a href="/experience" class="experience-card">
            <div class="exp-icon">🍯</div>
            <h3>Farm-Made Jams</h3>
            <p>Our seasonal jams are made from fruits grown right here. Take a jar home or enjoy them with our crêpes and toast.</p>
            <span class="exp-link">Learn more →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="nonis-cta">
      <div class="container">
        <h2>Find a Moment of Peace With Us</h2>
        <p class="tagline">Slow Down, Connect Deeply.</p>
        <div class="cta-buttons">
          <a href="https://wa.me/6282258440585" class="btn btn-whatsapp" target="_blank">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Reserve Your Table
          </a>
          <a href="https://instagram.com/nonislombok" class="btn btn-outline" target="_blank">@NonisLombok</a>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="section-divider"></div>

    <!-- Guest Reviews -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What Guests Say</span>
          <h2>Reviews from Google Maps</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card" v-for="(review, index) in visibleReviews" :key="index">
            <div class="stars">★★★★★</div>
            <p class="review-text">"{{ review.text }}"</p>
            <p class="review-author">— {{ review.author }}</p>
          </div>
        </div>
        <button v-if="!showAllReviews && reviews.length > 3" class="show-more-btn" @click="showAllReviews = true">
          Show more reviews ({{ reviews.length - 3 }} more)
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

useHead({
  title: "Noni's Resto & Pastry - Mawun Valley Farm"
})

const activeCategory = ref('breakfast')
const showAllReviews = ref(false)

const reviews = [
  { text: "Veggies straight from the farm, jam made from fruits grown in the garden—and the incredible hospitality of the hosts! This was the best experience we had in Lombok.", author: "Dmitri Gorski" },
  { text: "Stopped for cheesecake, stayed for the lovely atmosphere and friendly hosts. The goats and cats were fun to watch. Highly recommend!", author: "Jade" },
  { text: "What an absolutely magical place! I saw the sign on the road and something called me to stop in. Had the most beautiful chat with the hosts. The cheesecake was also delicious!", author: "Gary Noble" },
  { text: "The cheesecake was delicious and coffee was great too. They're living the dream of having a quaint and cute farm life!", author: "Janice Chen" },
  { text: "The owner is friendly, the cakes are delicious. If you bring your kids, it's great to see nature and animals. I highly recommend this place!", author: "Rosella Cla" },
  { text: "I had the cheesecake tonight. Super creamy, better than expected. I would've taken a picture, but I already ate it.", author: "Lux Living" }
]

const visibleReviews = computed(() => {
  return showAllReviews.value ? reviews : reviews.slice(0, 3)
})

const scrollToCategory = (category) => {
  activeCategory.value = category
  const el = document.getElementById(category)
  if (el) {
    const offset = 120
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  const categories = ['breakfast', 'meals', 'drinks', 'pastry']
  for (const cat of categories) {
    const el = document.getElementById(cat)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeCategory.value = cat
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Hero */
.nonis-hero {
  position: relative;
  height: 75vh;
  min-height: 500px;
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/nonis-hero.jpg') center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.35) 50%,
    rgba(0,0,0,0.5) 100%
  );
}

.hero-content {
  position: relative;
  text-align: center;
  color: white;
  padding: 20px;
}

.nonis-logo-img {
  max-width: 280px;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
}

.nonis-subtitle {
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.95;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.scroll-hint {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-hint span {
  display: block;
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 14px;
  position: relative;
}

.scroll-hint span::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0% { opacity: 1; top: 6px; }
  100% { opacity: 0; top: 20px; }
}

/* Story */
.nonis-story {
  padding: 80px 0;
  background: var(--color-warm-white);
}

.story-content {
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
}

.story-content h2 {
  margin-bottom: 28px;
  font-size: 2.2rem;
}

.story-content p {
  line-height: 1.85;
  color: #555;
  margin-bottom: 18px;
  font-size: 1.05rem;
}

.philosophy-quote {
  margin-top: 32px;
  padding: 24px 32px;
  background: linear-gradient(135deg, #faf8f5 0%, #f5f0ea 100%);
  border-radius: 12px;
  position: relative;
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-terracotta);
  font-weight: 500;
}

.quote-mark {
  font-size: 2rem;
  opacity: 0.3;
  vertical-align: middle;
}

/* Info */
.nonis-info {
  padding: 70px 0;
  background: white;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: center;
}

.info-card {
  padding: 40px 24px;
  border-radius: 16px;
  background: var(--color-cream);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}

.info-icon {
  font-size: 2.8rem;
  margin-bottom: 16px;
}

.info-card h3 {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.hours {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-terracotta);
}

.whatsapp-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #25D366;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 18px;
  background: rgba(37, 211, 102, 0.1);
  border-radius: 24px;
  transition: all 0.3s ease;
}

.whatsapp-link:hover {
  background: #25D366;
  color: white;
}

/* Menu */
.nonis-menu {
  padding: 80px 0;
  background: var(--color-cream);
}

.nonis-menu > .container > .section-label,
.nonis-menu > .container > h2 {
  text-align: center;
}

.nonis-menu > .container > h2 {
  margin-bottom: 32px;
}

/* Sticky Menu Nav */
.menu-nav {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
  padding: 12px;
  background: white;
  border-radius: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  position: sticky;
  top: 80px;
  z-index: 50;
  flex-wrap: wrap;
}

.menu-nav-item {
  padding: 10px 20px;
  border-radius: 24px;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-dark);
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.menu-nav-item:hover {
  background: var(--color-cream);
}

.menu-nav-item.active {
  background: var(--color-terracotta);
  color: white;
}

.menu-category {
  margin-bottom: 56px;
  scroll-margin-top: 140px;
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.category-note {
  color: #888;
  font-size: 14px;
  margin-bottom: 24px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.menu-grid.single {
  max-width: 420px;
  margin: 0 auto;
}

.menu-item {
  background: white;
  padding: 24px;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.menu-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.menu-item.featured {
  border-left: 4px solid var(--color-gold);
  background: linear-gradient(135deg, white 0%, #fffdf8 100%);
}

.menu-item.signature {
  background: linear-gradient(135deg, #fff8e1 0%, #ffe0b2 100%);
  border: 2px solid var(--color-gold);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 12px;
}

.item-name {
  font-weight: 600;
  font-size: 1.05rem;
  line-height: 1.3;
}

.star {
  display: inline-block;
  margin-left: 4px;
}

.item-price {
  color: var(--color-dark);
  font-weight: 700;
  font-size: 1rem;
  background: var(--color-cream);
  padding: 4px 12px;
  border-radius: 16px;
  white-space: nowrap;
}

.signature .item-price {
  background: rgba(255,255,255,0.7);
}

.item-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.65;
}

.pastry-highlight {
  text-align: center;
}

/* Experiences */
.nonis-experiences {
  padding: 80px 0;
  background: white;
}

.nonis-experiences .section-label,
.nonis-experiences h2 {
  text-align: center;
}

.nonis-experiences h2 {
  margin-bottom: 48px;
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.experience-card {
  text-align: center;
  padding: 36px 28px;
  background: var(--color-cream);
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
}

.experience-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
}

.exp-icon {
  font-size: 3.2rem;
  margin-bottom: 20px;
}

.experience-card h3 {
  margin-bottom: 12px;
  color: var(--color-dark);
  font-size: 1.3rem;
}

.experience-card p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 15px;
}

.exp-link {
  color: var(--color-terracotta);
  font-weight: 600;
  font-size: 14px;
}

/* CTA */
.nonis-cta {
  padding: 90px 0;
  background: #6b8f5c;
  text-align: center;
  color: white;
}

.nonis-cta h2 {
  color: white;
  margin-bottom: 12px;
  font-size: 2.2rem;
}

.nonis-cta .tagline {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 36px;
}

.cta-buttons {
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
  padding: 16px 32px;
  border-radius: 32px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
}

.btn-whatsapp:hover {
  background: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.btn-outline {
  padding: 16px 32px;
  border: 2px solid white;
  border-radius: 32px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: white;
  color: #6b8f5c;
}

/* Divider */
.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent);
}

/* Reviews */
.reviews-section {
  padding: 80px 0;
  background: var(--color-warm-white);
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.review-card {
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-4px);
}

.stars {
  color: #f5a623;
  margin-bottom: 12px;
  font-size: 16px;
  letter-spacing: 2px;
}

.review-text {
  font-size: 15px;
  line-height: 1.75;
  color: #555;
  margin-bottom: 16px;
  font-style: italic;
}

.review-author {
  font-weight: 600;
  font-size: 14px;
  color: var(--color-dark);
}

.show-more-btn {
  display: block;
  margin: 32px auto 0;
  padding: 12px 28px;
  background: transparent;
  border: 2px solid var(--color-terracotta);
  color: var(--color-terracotta);
  border-radius: 24px;
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.show-more-btn:hover {
  background: var(--color-terracotta);
  color: white;
}

/* Responsive */
@media (max-width: 1024px) {
  .experience-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nonis-hero {
    height: 65vh;
    min-height: 450px;
  }
  
  .nonis-logo-img {
    max-width: 220px;
  }
  
  .nonis-subtitle {
    font-size: 1rem;
    letter-spacing: 2px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .info-card {
    padding: 32px 20px;
  }
  
  .menu-nav {
    gap: 6px;
    padding: 10px;
    top: 70px;
  }
  
  .menu-nav-item {
    padding: 8px 14px;
    font-size: 13px;
  }
  
  .menu-grid {
    grid-template-columns: 1fr;
  }
  
  .experience-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .reviews-grid {
    grid-template-columns: 1fr;
  }
  
  .nonis-cta h2 {
    font-size: 1.8rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-whatsapp,
  .btn-outline {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .nonis-story,
  .nonis-info,
  .nonis-menu,
  .nonis-experiences,
  .nonis-cta,
  .reviews-section {
    padding: 60px 0;
  }
  
  .story-content h2 {
    font-size: 1.8rem;
  }
  
  .philosophy-quote {
    padding: 20px;
    font-size: 1.1rem;
  }
  
  .menu-nav {
    border-radius: 16px;
  }
  
  .menu-nav-item {
    flex: 1 1 auto;
    text-align: center;
    padding: 8px 10px;
    font-size: 12px;
  }
}
</style>
