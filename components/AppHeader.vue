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
        <li><NuxtLink to="/nonis" @click="closeMenu">Noni's</NuxtLink></li>
        <li><NuxtLink to="/stay-contribute" @click="closeMenu">Stay & Contribute</NuxtLink></li>
        <li><NuxtLink to="/retreat" @click="closeMenu">Retreat</NuxtLink></li>
        <li><NuxtLink to="/gather" @click="closeMenu">Gather</NuxtLink></li>
        <li><NuxtLink to="/belong" @click="closeMenu">Belong</NuxtLink></li>
        <li><NuxtLink to="/blog" @click="closeMenu">Field Notes</NuxtLink></li>
        <li><NuxtLink to="/#contact" class="btn btn-primary" @click="closeMenu">Contact</NuxtLink></li>
      </ul>
      <div class="menu-overlay" :class="{ active: menuOpen }" @click="closeMenu"></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

const heroPages = ['/', '/nonis', '/gather', '/stay-contribute', '/retreat']

const isHomePage = computed(() => {
  return heroPages.includes(route.path)
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

watch(() => route.path, () => {
  closeMenu()
})

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.menu-overlay {
  display: none;
}

@media (max-width: 768px) {
  .menu-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 998;
  }
  
  .menu-overlay.active {
    opacity: 1;
    visibility: visible;
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
