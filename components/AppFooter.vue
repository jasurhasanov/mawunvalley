<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img src="/images/logo.png" alt="Mawun Valley Farm">
        <p>Slow Down, Connect Deeply.</p>
        <p>A family-run permaculture farm in South Lombok, Indonesia.</p>
      </div>
      <div class="footer-links">
        <h4>Experience</h4>
        <ul>
          <li><NuxtLink to="/nonis">Noni's Resto & Pastry</NuxtLink></li>
          <li><NuxtLink to="/stay-contribute">Stay & Contribute</NuxtLink></li>
          <li><NuxtLink to="/gather">Farm Events</NuxtLink></li>
          <li><NuxtLink to="/retreat">Farm Retreat</NuxtLink></li>
          <li><NuxtLink to="/little-roots">Little Roots</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Explore</h4>
        <ul>
          <li><a href="/garden-quest/">Garden Quest</a></li>
          <li><a href="/garden-quest/farm-tour.html">Virtual Farm Tour</a></li>
          <li><NuxtLink to="/blog">Field Notes</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Connect</h4>
        <ul>
          <li><NuxtLink to="/host">Your Host</NuxtLink></li>
          <li><NuxtLink to="/belong">Membership</NuxtLink></li>
          <li><NuxtLink to="/#contact">Contact Us</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://instagram.com/mawunvalley" target="_blank">@mawunvalley</a></li>
          <li><a href="https://instagram.com/nonislombok" target="_blank">@nonislombok</a></li>
          <li><a href="https://facebook.com/mawunvalley" target="_blank">Mawun Valley</a></li>
          <li><a href="https://www.tiktok.com/@mawunvalley" target="_blank">TikTok</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">© {{ new Date().getFullYear() }} Mawun Valley Farm. All rights reserved.</div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

.site-footer {
  background: linear-gradient(135deg, #2d3a2d 0%, #1a2a1a 100%);
  color: rgba(255,255,255,0.85);
  padding: 40px 20px 20px;
  font-family: 'Outfit', sans-serif;
  line-height: 1.7;
}

.site-footer * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-brand img {
  height: 40px;
  filter: brightness(0) invert(1);
  margin-bottom: 10px;
}

.footer-brand p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.85);
  opacity: 1;
  line-height: 1.4;
  margin-bottom: 2px;
}

.footer-links h4 {
  color: #d4a574 !important;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
}

.footer-links ul {
  list-style: none;
}

.footer-links a,
.footer-links :deep(a) {
  color: rgba(255,255,255,0.85) !important;
  text-decoration: none;
  font-size: 0.85rem;
  display: block;
  padding: 4px 0;
  transition: color 0.3s;
  font-family: 'Outfit', sans-serif;
}

.footer-links a:hover,
.footer-links :deep(a):hover {
  color: #d4a574 !important;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.8rem;
  opacity: 0.7;
  color: rgba(255,255,255,0.85);
}
</style>
