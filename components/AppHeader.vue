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
        <li><NuxtLink to="/garden-quest" @click="closeMenu">Garden Quest</NuxtLink></li>
        <li><NuxtLink to="/#contact" class="btn btn-primary" @click="closeMenu">Contact</NuxtLink></li>
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

const heroPages = ['/', '/nonis', '/gather', '/stay-contribute', '/retreat', '/belong', '/little-roots', '/garden-quest']

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
