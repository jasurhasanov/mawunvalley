<template>
  <nav class="navbar" :class="{ scrolled: isScrolled || !isHomePage }" id="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo" @click="closeMenu">
        <img src="/images/logo.png" alt="Mawun Valley Farm">
      </NuxtLink>
      <button class="mobile-menu-btn" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" :class="{ active: menuOpen }">
        <li><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></li>
        <li><NuxtLink to="/stay-contribute" @click="closeMenu">Stay & Contribute</NuxtLink></li>
        <li><NuxtLink to="/gather" @click="closeMenu">Farm Events</NuxtLink></li>
        <li><NuxtLink to="/little-roots" @click="closeMenu">Little Roots</NuxtLink></li>
        <li><NuxtLink to="/belong" @click="closeMenu">Membership</NuxtLink></li>
        <li><NuxtLink to="/nonis" @click="closeMenu">Noni's</NuxtLink></li>
        <li><a href="/garden-quest/farm-tour.html" class="btn-tour" @click="closeMenu">🗺️ Virtual Tour</a></li>
      </ul>
      <div v-if="menuOpen" class="menu-overlay" @click="closeMenu"></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

const heroPages = ['/', '/nonis', '/gather', '/stay-contribute', '/retreat', '/belong', '/little-roots']

const isHomePage = computed(() => {
  return heroPages.includes(route.path)
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  // Prevent body scroll when menu is open
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  // Close menu on scroll
  if (menuOpen.value) {
    closeMenu()
  }
}

watch(() => route.path, () => {
  closeMenu()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@media (max-width: 768px) {
  .nav-links {
    z-index: 1000 !important;
  }
  
  .menu-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
  
  .mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>

<style scoped>
.btn-tour {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #7D8B6F 0%, #87a878 50%, #d4a574 100%);
  color: white !important;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 25px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(125, 139, 111, 0.3);
}

.btn-tour::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.btn-tour:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 139, 111, 0.4);
}

.btn-tour:hover::before {
  left: 100%;
}

@media (max-width: 768px) {
  .btn-tour {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
