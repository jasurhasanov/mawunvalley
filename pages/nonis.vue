<template>
  <div>
    <!-- Hero -->
    <section class="nonis-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <img src="/images/nonis-logo-dark.png" alt="Noni's Resto & Pastry" class="nonis-logo-img">
        <p class="nonis-subtitle">Resto & Pastry</p>
      </div>
    </section>

    <!-- Story -->
    <section class="nonis-story">
      <div class="container">
        <div class="story-content">
          <span class="section-label">Our Story</span>
          <h2>Less Items, More Quality</h2>
          <p>Our story at Mawun Valley Farm is about embracing the quiet beauty of <strong>slow living</strong>. Here, we cultivate peace, open spaces, and a deep connection to nature.</p>
          <p>It's from this same vision that Noni's, our own little resto and pastry, was born. We extend the farm's ethos of simplicity and genuine enjoyment into every dish.</p>
          <p>Whether it's a creamy <strong>Basque Burnt Cheesecake</strong> or a soothing <strong>Lemongrass Ginger Tea</strong>, everything is crafted with the same dedication we put into nurturing our farm.</p>
          <p class="philosophy"><em>Less but better — in everything we make.</em></p>
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
            <h3>Order & Reserve</h3>
            <a href="https://wa.me/6282258440585" class="whatsapp-link">+62 822 5844 0585</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu -->
    <section class="nonis-menu" id="menu">
      <div class="container">
        <span class="section-label">Our Menu</span>
        <h2>Farm-to-Table Goodness</h2>
        
        <!-- Breakfast -->
        <div class="menu-category">
          <h3 class="category-title">🍳 Breakfast</h3>
          <p class="category-note">Served all day (8:00 - 17:00)</p>
          <div class="menu-grid">
            <MenuItem name="Omelette" price="50K" desc="Fluffy eggs with local vegetables and fresh farm herbs." />
            <MenuItem name="Crêpes (Farm Jam)" price="50K" desc="Delicate pancakes with farm-made seasonal jam." featured />
            <MenuItem name="Toast & Farm-Made Delight" price="50K" desc="Toasted bread with farm-made seasonal jam." />
            <MenuItem name="Farm Fresh Boiled Eggs" price="50K" desc="Boiled eggs with fresh farm vegetables." />
          </div>
        </div>

        <!-- Signature Meals -->
        <div class="menu-category">
          <h3 class="category-title">🍽️ Signature Meals</h3>
          <div class="menu-grid">
            <MenuItem name="Noni's Plate" price="75K" desc="Farm-to-table recipe with crispy fried chicken or fish, seasonal sides, and signature sambal." featured />
            <MenuItem name="Noni's Plate (Vegan)" price="75K" desc="Plant-based dish with tofu, fresh vegetables, and signature sambal. 100% vegan." featured />
          </div>
        </div>

        <!-- Drinks -->
        <div class="menu-category">
          <h3 class="category-title">🍵 Drinks</h3>
          <div class="menu-grid">
            <MenuItem name="Lemongrass Ginger Tea" price="50K" desc="Soothing tea with farm lemongrass, ginger and honey." featured />
            <MenuItem name="Wedang Uwuh" price="50K" desc="Traditional Javanese herbal infusion." featured />
            <MenuItem name="Azerbaijan Tea" price="40K" desc="Black tea with herbs and fruit peels." featured />
            <MenuItem name="Jasmine / Green Tea" price="40K" desc="Fragrant tea served in a teapot." />
            <MenuItem name="Ice Lime Tea" price="40K" desc="Refreshing cold tea with lime." />
            <MenuItem name="Ice Coffee" price="40K" desc="Locally-sourced coffee. Add milk +5K." />
            <MenuItem name="Lombok Coffee (Hot)" price="40K" desc="Local Lombok coffee." />
            <MenuItem name="Cranberry Juice" price="40K" desc="Pure juice — no sugar, no preservatives." />
          </div>
        </div>

        <!-- Pastry -->
        <div class="menu-category pastry-highlight">
          <h3 class="category-title">🍰 Pastry</h3>
          <p class="category-note">Our signature — we do one, and we master it.</p>
          <div class="menu-grid single">
            <div class="menu-item signature">
              <div class="item-header">
                <span class="item-name">Noni's Burnt Cheesecake ⭐</span>
                <span class="item-price">50K</span>
              </div>
              <p class="item-desc">A creamy, caramelized cheesecake with a distinct burnt exterior, baked fresh at Noni's.</p>
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
          <div class="experience-card">
            <div class="exp-icon">🔥</div>
            <h3>BBQ Night</h3>
            <p>Communal BBQ under the stars. Fresh ingredients, good company.</p>
          </div>
          <div class="experience-card">
            <div class="exp-icon">👨‍🍳</div>
            <h3>Cooking Classes</h3>
            <p>Learn traditional Indonesian dishes with farm ingredients.</p>
          </div>
          <div class="experience-card">
            <div class="exp-icon">🍯</div>
            <h3>Farm-Made Jams</h3>
            <p>Seasonal jams from fruits grown right here.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="nonis-cta">
      <div class="container">
        <h2>Find a Moment of Peace With Us</h2>
        <p class="tagline">Slow Down, Connect Deeply.</p>
        <div class="cta-buttons">
          <a href="https://wa.me/6282258440585" class="btn btn-whatsapp" target="_blank">WhatsApp Us</a>
          <a href="https://instagram.com/nonislombok" class="btn btn-outline" target="_blank">@NonisLombok</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Noni's Resto & Pastry - Mawun Valley Farm"
})
</script>

<style src="~/assets/css/nonis.css"></style>
