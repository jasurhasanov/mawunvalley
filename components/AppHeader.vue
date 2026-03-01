<template>
  <nav class="navbar" :class="{ scrolled: isScrolled || !isHomePage }" id="navbar">
    <div class="nav-container">
      <NuxtLink to="/" class="logo">
        <img src="/images/logo.png" alt="Mawun Valley Farm">
      </NuxtLink>
      <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" :class="{ active: menuOpen }">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/nonis">Noni's</NuxtLink></li>
        <li><NuxtLink to="/stay">Stay</NuxtLink></li>
        <li class="dropdown">
          <NuxtLink to="/experience" class="dropdown-toggle">Experience ▾</NuxtLink>
          <ul class="dropdown-menu">
            <li><NuxtLink to="/experience">Programs</NuxtLink></li>
            <li><NuxtLink to="/retreat">Farm Retreat</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/gather">Gather</NuxtLink></li>
        <li><NuxtLink to="/belong">Belong</NuxtLink></li>
        <li><NuxtLink to="/blog">Field Notes</NuxtLink></li>
        <li><NuxtLink to="/#contact" class="btn btn-primary">Contact</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)

// Pages with dark hero backgrounds where white text is needed
const heroPages = ['/', '/nonis', '/gather']

const isHomePage = computed(() => {
  return heroPages.includes(route.path)
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
/* Navbar styles are in main.css */
</style>
