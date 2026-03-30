<template>
  <div class="admin-page">
    <!-- Login -->
    <div v-if="!authenticated" class="auth-gate">
      <div class="auth-box">
        <div class="logo">🌿</div>
        <h1>Mawun Valley</h1>
        <p>Staff Portal</p>
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email"
          autofocus
        >
        <input 
          type="password" 
          v-model="password" 
          @keyup.enter="authenticate"
          placeholder="Password"
        >
        <button @click="authenticate" class="btn-primary">Enter</button>
        <p v-if="authError" class="error">Invalid credentials</p>
      </div>
    </div>

    <!-- Dashboard -->
    <div v-else class="dashboard">
      <header class="admin-header">
        <h1>🌿 Mawun Valley</h1>
        <button @click="logout" class="btn-outline">Logout</button>
      </header>

      <div class="tools-grid">
        <NuxtLink to="/office/gift-cards" class="tool-card">
          <div class="tool-icon">🎁</div>
          <h3>Gift Cards</h3>
          <p>Manage requests, issue cards, track redemptions</p>
          <span class="tool-badge" v-if="newGiftRequests > 0">{{ newGiftRequests }} new</span>
        </NuxtLink>

        <NuxtLink to="/office/game-kit" class="tool-card">
          <div class="tool-icon">🎮</div>
          <h3>Garden Quest Kit</h3>
          <p>Print game materials, booklets, and answer keys</p>
        </NuxtLink>

        <a href="/downloads/nonis-menu-printable.html" target="_blank" class="tool-card">
          <div class="tool-icon">📋</div>
          <h3>Noni's Menu</h3>
          <p>Printable menu for the café (A4, PDF/PNG)</p>
        </a>

        <div class="tool-card disabled">
          <div class="tool-icon">📅</div>
          <h3>Bookings</h3>
          <p>Coming soon</p>
        </div>

        <div class="tool-card disabled">
          <div class="tool-icon">📊</div>
          <h3>Analytics</h3>
          <p>Coming soon</p>
        </div>
      </div>

      <div class="quick-links">
        <h3>Quick Links</h3>
        <div class="links-row">
          <a href="/" target="_blank">🌐 Website</a>
          <a href="/gather" target="_blank">🎪 Events</a>
          <a href="/gift-cards" target="_blank">🎁 Gift Cards Page</a>
          <a href="/garden-quest" target="_blank">🗺️ Garden Quest</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "blank" })

import { ref, onMounted } from 'vue'

useHead({ title: 'Staff Portal | Mawun Valley' })

const authenticated = ref(false)
const email = ref('')
const password = ref('')
const authError = ref(false)
const newGiftRequests = ref(0)

const VALID_EMAIL = 'kutahospitality@gmail.com'
const VALID_PASS = 'mawun2024&now'

onMounted(() => {
  if (localStorage.getItem('mawun_admin_auth') === 'true') {
    authenticated.value = true
    loadStats()
  }
})

const authenticate = () => {
  if (email.value === VALID_EMAIL && password.value === VALID_PASS) {
    authenticated.value = true
    authError.value = false
    localStorage.setItem('mawun_admin_auth', 'true')
    loadStats()
  } else {
    authError.value = true
  }
}

const logout = () => {
  authenticated.value = false
  localStorage.removeItem('mawun_admin_auth')
}

const loadStats = () => {
  try {
    const requests = JSON.parse(localStorage.getItem('mawun_requests') || '[]')
    newGiftRequests.value = requests.filter(r => r.status === 'new').length
  } catch {}
}
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e4dc 100%);
}

.auth-gate {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.auth-box {
  background: white;
  padding: 50px 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;
  margin: 20px;
}

.logo {
  font-size: 3rem;
  margin-bottom: 16px;
}

.auth-box h1 {
  font-size: 1.5rem;
  margin-bottom: 4px;
  color: #333;
}

.auth-box > p {
  color: #666;
  margin-bottom: 24px;
}

.auth-box input {
  padding: 16px;
  border: 2px solid #eee;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
  font-size: 16px;
}

.auth-box input:focus {
  outline: none;
  border-color: #D4A574;
}

.error {
  color: #c62828;
  margin-top: 12px;
}

.dashboard {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.admin-header h1 {
  font-size: 1.8rem;
  margin: 0;
}

.btn-primary {
  background: #D4A574;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.btn-primary:hover {
  background: #c17f59;
}

.btn-outline {
  background: none;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  color: #666;
}

.btn-outline:hover {
  border-color: #999;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.tool-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  position: relative;
  display: block;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.tool-card.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.tool-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.tool-card h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.tool-card p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.tool-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #c62828;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.quick-links {
  background: white;
  padding: 24px 30px;
  border-radius: 16px;
}

.quick-links h3 {
  margin: 0 0 16px;
  font-size: 1rem;
  color: #666;
}

.links-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.links-row a {
  color: #D4A574;
  text-decoration: none;
  font-weight: 500;
}

.links-row a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .admin-header {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
