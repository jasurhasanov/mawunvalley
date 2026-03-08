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
        <li><a href="/nonis">Noni's Resto & Pastry</a></li>
        <li><a href="/stay-contribute">Stay & Contribute</a></li>
        <li><a href="/gather">Farm Events</a></li>
        <li><a href="/retreat">Farm Retreat</a></li>
        <li><a href="/little-roots">Little Roots</a></li>
      </ul>
    </div>
    <div class="footer-links">
      <h4>Explore</h4>
      <ul>
        <li><a href="/garden-quest/">Garden Quest</a></li>
        <li><a href="/garden-quest/farm-tour.html">Virtual Farm Tour</a></li>
        <li><a href="/blog">Field Notes</a></li>
      </ul>
    </div>
    <div class="footer-links">
      <h4>Connect</h4>
      <ul>
        <li><a href="/host">Your Host</a></li>
        <li><a href="/belong">Membership</a></li>
        <li><a href="/#contact">Contact Us</a></li>
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

.site-footer {
  background: linear-gradient(135deg, #2d3a2d 0%, #1a2a1a 100%) !important;
  color: rgba(255,255,255,0.85) !important;
  padding: 40px 20px 20px !important;
  font-family: 'Outfit', sans-serif !important;
  line-height: 1.7 !important;
}
.site-footer * {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}
.site-footer .footer-content {
  max-width: 1000px !important;
  margin: 0 auto 30px !important;
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
  gap: 30px !important;
}
.site-footer .footer-brand img { 
  height: 40px !important; 
  filter: brightness(0) invert(1) !important; 
  margin-bottom: 10px !important; 
}
.site-footer .footer-brand p { 
  font-size: 0.85rem !important; 
  opacity: 0.8 !important; 
  color: rgba(255,255,255,0.85) !important;
  font-family: 'Outfit', sans-serif !important;
  font-weight: 400 !important;
  line-height: 1.7 !important;
}
.site-footer .footer-links h4 { 
  font-family: 'Outfit', sans-serif !important;
  font-weight: 400 !important;
  line-height: 1.7 !important; 
  color: #d4a574 !important; 
  font-size: 0.75rem !important; 
  text-transform: uppercase !important; 
  letter-spacing: 1px !important; 
  margin-bottom: 12px !important; 
}
.site-footer .footer-links ul { 
  list-style: none !important; 
}
.site-footer .footer-links li {
  margin: 0 !important;
  padding: 0 !important;
}
.site-footer .footer-links a { 
  color: rgba(255,255,255,0.8) !important; 
  text-decoration: none !important; 
  font-size: 0.85rem !important; 
  display: block !important; 
  padding: 4px 0 !important;
  font-family: 'Outfit', sans-serif !important;
  font-weight: 400 !important;
  transition: color 0.3s !important;
}
.site-footer .footer-links a:hover { 
  color: #d4a574 !important; 
}
.site-footer .footer-bottom { 
  text-align: center !important; 
  padding-top: 20px !important; 
  border-top: 1px solid rgba(255,255,255,0.1) !important; 
  font-size: 0.8rem !important; 
  opacity: 0.7 !important;
  color: rgba(255,255,255,0.85) !important;
  font-family: 'Outfit', sans-serif !important;
  font-weight: 400 !important;
}
</style>
