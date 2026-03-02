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
        <li><NuxtLink to="/stay" @click="closeMenu">Stay</NuxtLink></li>
        <li class="dropdown" :class="{ open: dropdownOpen }">
          <a href="#" class="dropdown-toggle" @click.prevent.stop="toggleDropdown">
            Experience <span class="dropdown-arrow">▾</span>
          </a>
          <ul class="dropdown-menu">
            <li><NuxtLink to="/experience" @click="closeMenu">Programs</NuxtLink></li>
            <li><NuxtLink to="/retreat" @click="closeMenu">Farm Retreat</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/gather" @click="closeMenu">Gather</NuxtLink></li>
        <li><NuxtLink to="/belong" @click="closeMenu">Belong</NuxtLink></li>
        <li><NuxtLink to="/blog" @click="closeMenu">Field Notes</NuxtLink></li>
        <li><NuxtLink to="/#contact" class="btn btn-primary" @click="closeMenu">Contact</NuxtLink></li>
      </ul>
      <!-- Overlay to close menu when clicking outside -->
      <div class="menu-overlay" :class="{ active: menuOpen }" @click="closeMenu"></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)
const dropdownOpen = ref(false)

// Pages with dark hero backgrounds where white text is needed
const heroPages = ['/', '/nonis', '/gather']

const isHomePage = computed(() => {
  return heroPages.includes(route.path)
})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (!menuOpen.value) {
    dropdownOpen.value = false
  }
}

const closeMenu = () => {
  menuOpen.value = false
  dropdownOpen.value = false
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Close menu on route change
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

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 0.8em;
}

.dropdown.open .dropdown-arrow {
  transform: rotate(180deg);
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
  
  .dropdown .dropdown-menu {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    padding: 0 !important;
    margin: 0;
  }
  
  .dropdown.open .dropdown-menu {
    max-height: 200px;
    opacity: 1;
    padding-top: 8px !important;
  }
}
</style>
