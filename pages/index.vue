<template>
  <div>
    <!-- Hero -->
    <section class="hero" id="hero">
      <div class="hero-bg"><img src="/images/amphitheater.jpg" alt="Mawun Valley Farm"></div>
      <div class="hero-content">
        <p class="hero-subtitle handwritten">Est. 35 years of welcome</p>
        <h1>Slow Down.<br>Connect Deeply.</h1>
        <p class="tagline">A family farm in the valley, minutes from the sea.</p>
        <a href="#ways" class="btn btn-primary btn-lg">Discover the Farm</a>
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
          <NuxtLink to="/stay" class="way-card">
            <div class="way-icon">🏡</div>
            <h3>Stay</h3>
            <p>Farmstay cabins with valley views. Wake up to roosters, not alarms.</p>
            <span class="way-link">View cabins →</span>
          </NuxtLink>
          <NuxtLink to="/experience" class="way-card">
            <div class="way-icon">🌱</div>
            <h3>Experience</h3>
            <p>Immersive farm programs. Become part of the farm, not just a visitor.</p>
            <span class="way-link">Explore programs →</span>
          </NuxtLink>
          <NuxtLink to="/gather" class="way-card">
            <div class="way-icon">🍽️</div>
            <h3>Gather</h3>
            <p>BBQ nights, cooking classes, Little Farmer for kids. Come together.</p>
            <span class="way-link">See events →</span>
          </NuxtLink>
          <NuxtLink to="/belong" class="way-card">
            <div class="way-icon">👨‍👩‍👧</div>
            <h3>Belong</h3>
            <p>Family Farm Membership. More than visitors — become family.</p>
            <span class="way-link">Join us →</span>
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
            <p><strong>Coconut</strong> eats everything. <strong>Spinach & Kangkung</strong> are champion fence-jumpers.</p>
          </div>
          <div class="animal-card">
            <div class="animal-emoji">🦆</div>
            <h4>The Ducks</h4>
            <p><strong>Onyx & Midnight</strong> and their ducklings waddle past your cabin every morning.</p>
          </div>
          <div class="animal-card">
            <div class="animal-emoji">🐱</div>
            <h4>The Cats</h4>
            <p><strong>Drama Queen</strong> rules the café. <strong>Hungry Lion</strong> leads her kittens.</p>
          </div>
          <div class="animal-card">
            <div class="animal-emoji">🐕</div>
            <h4>Mango</h4>
            <p>Our Chief Welcoming Officer. She'll greet you on arrival.</p>
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
          <p class="philosophy-intro">In a world that moves too fast, we've created a place where time slows down.</p>
          <div class="philosophy-grid">
            <div class="philosophy-item">
              <h4>🌱 Farm to Table</h4>
              <p>Veggies from the garden, jam from our fruit trees, eggs from happy chickens.</p>
            </div>
            <div class="philosophy-item">
              <h4>👨‍👩‍👧‍👦 Family, Not Guests</h4>
              <p>From day one, you're part of our community.</p>
            </div>
            <div class="philosophy-item">
              <h4>🐐 Nature Immersion</h4>
              <p>Wake up with roosters, cuddle baby goats, watch ducklings waddle by.</p>
            </div>
            <div class="philosophy-item">
              <h4>🌊 Balance & Freedom</h4>
              <p>World-class surf breaks 10 minutes away. Work at your own pace.</p>
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
        <div class="gallery-grid">
          <div class="gallery-item"><img src="/images/gallery-1.jpg" alt="Farm life"></div>
          <div class="gallery-item"><img src="/images/gallery-2.jpg" alt="Farm animals"></div>
          <div class="gallery-item"><img src="/images/gallery-3.jpg" alt="Farm scenery"></div>
          <div class="gallery-item"><img src="/images/gallery-4.jpg" alt="Farm activities"></div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Get in Touch</span>
          <h2>Ready to Visit?</h2>
          <p>Reach out and let's plan your stay at Mawun Valley Farm.</p>
        </div>
        <div class="contact-buttons">
          <a href="https://wa.me/6282258440585" class="btn btn-whatsapp" target="_blank">
            WhatsApp Us
          </a>
          <a href="mailto:hello@mawunvalley.com" class="btn btn-outline">
            Email Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Mawun Valley Farm - Slow Down, Connect Deeply'
})
</script>
