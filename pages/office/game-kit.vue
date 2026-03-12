<template>
  <div class="admin-page">
    <div v-if="!authenticated" class="auth-gate">
      <div class="auth-box">
        <h1>🎮 Game Kit</h1>
        <p>Staff Login</p>
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" @keyup.enter="authenticate" placeholder="Password">
        <button @click="authenticate" class="btn-primary">Enter</button>
        <p v-if="authError" class="error">Incorrect password</p>
      </div>
    </div>

    <div v-else class="dashboard">
      <header class="admin-header">
        <div class="header-left">
          <NuxtLink to="/office" class="back-link">← Back</NuxtLink>
          <h1>🎮 Garden Quest Kit</h1>
        </div>
        <button @click="logout" class="btn-outline">Logout</button>
      </header>

      <div class="kit-grid">
        <div class="kit-section">
          <h2>📖 Player Journals</h2>
          <p>Printable activity booklets for players</p>
          <div class="kit-links">
            <a href="/office/game-kit/printables/booklet-easy.html" class="kit-link easy">
              <span class="level">Easy</span>
              <span class="ages">Ages 4-7</span>
            </a>
            <a href="/office/game-kit/printables/booklet-hard.html" class="kit-link hard">
              <span class="level">Hard</span>
              <span class="ages">Ages 8-12</span>
            </a>
            <a href="/office/game-kit/printables/booklet-impossible.html" class="kit-link impossible">
              <span class="level">Impossible</span>
              <span class="ages">Ages 13+</span>
            </a>
          </div>
        </div>

        <div class="kit-section">
          <h2>📚 Learning Supplements</h2>
          <p>Educational content about farm plants</p>
          <div class="kit-links">
            <a href="/office/game-kit/learning-easy.html" class="kit-link">Learning Guide (Easy)</a>
            <a href="/office/game-kit/learning-hard.html" class="kit-link">Learning Guide (Hard)</a>
            <a href="/office/game-kit/learning-impossible.html" class="kit-link">Learning Guide (Impossible)</a>
          </div>
        </div>

        <div class="kit-section">
          <h2>🗺️ Game Materials</h2>
          <p>Maps, guides, and resources</p>
          <div class="kit-links">
            <a href="/office/game-kit/how-to-play.html" class="kit-link">How to Play</a>
            <a href="/office/game-kit/farm-tour.html" class="kit-link">Farm Tour Script</a>
            <a href="/office/game-kit/answer-key.html" class="kit-link staff">🔑 Staff Answer Key</a>
          </div>
        </div>

        <div class="kit-section">
          <h2>📱 Marketing</h2>
          <p>Promotional materials</p>
          <div class="kit-links">
            <a href="/garden-quest" class="kit-link">Landing Page</a>
            <a href="/office/game-kit/marketing/" class="kit-link">Marketing Assets</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

useHead({ title: 'Game Kit | Admin' })

const authenticated = ref(false)
const email = ref("")
const password = ref('')
const authError = ref(false)

onMounted(() => {
  if (localStorage.getItem('mawun_admin_auth') === 'true') {
    authenticated.value = true
  }
})

const logout = () => {
  localStorage.removeItem('mawun_admin_auth')
  window.location.href = '/office'
}

const authenticate = () => {
  if (email.value === 'kutahospitality@gmail.com' && password.value === 'mawun2024&now') {
    authenticated.value = true
    localStorage.setItem('mawun_admin_auth', 'true')
  } else {
    authError.value = true
  }
}
</script>

<style scoped>
.admin-page { min-height: 100vh; background: #f5f5f5; }
.auth-gate { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
.auth-box { background: white; padding: 40px; border-radius: 16px; text-align: center; }
.auth-box input { padding: 14px; border: 2px solid #ddd; border-radius: 8px; width: 250px; margin-bottom: 16px; display: block; }
.error { color: #c62828; margin-top: 12px; }
.btn-outline { background: none; border: 1px solid #ddd; padding: 10px 20px; border-radius: 8px; cursor: pointer; color: #666; }
.btn-outline:hover { border-color: #999; }
.btn-primary { background: #87a878; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; width: 100%; }

.dashboard { max-width: 1000px; margin: 0 auto; padding: 30px 20px; }
.admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.header-left { display: flex; align-items: center; gap: 16px; }
.back-link { color: #666; text-decoration: none; font-size: 14px; }
.back-link:hover { color: #333; }
.admin-header h1 { margin: 0; font-size: 1.5rem; }

.kit-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }

.kit-section { background: white; padding: 24px; border-radius: 16px; }
.kit-section h2 { font-size: 1.2rem; margin-bottom: 8px; }
.kit-section > p { color: #666; font-size: 14px; margin-bottom: 16px; }

.kit-links { display: flex; flex-direction: column; gap: 10px; }
.kit-link {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 18px; background: #f9f9f9; border-radius: 10px;
  text-decoration: none; color: #333; font-weight: 500;
  transition: all 0.2s;
}
.kit-link:hover { background: #87a878; color: white; }
.kit-link.staff { background: #FFF3E0; }
.kit-link.staff:hover { background: #FF9800; color: white; }

.kit-link.easy { border-left: 4px solid #4CAF50; }
.kit-link.hard { border-left: 4px solid #FF9800; }
.kit-link.impossible { border-left: 4px solid #f44336; }

.level { font-weight: 600; }
.ages { font-size: 13px; color: #666; }
.kit-link:hover .ages { color: rgba(255,255,255,0.8); }
</style>
