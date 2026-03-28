<template>
  <div class="social-proof" v-if="visible">
    <div class="activity-ticker">
      <div class="ticker-avatar">{{ currentActivity.initials }}</div>
      <div class="ticker-content">
        <span class="ticker-name">{{ currentActivity.name }}</span> from {{ currentActivity.location }} 
        <span class="ticker-action">{{ currentActivity.action }}</span>
      </div>
      <span class="ticker-time">{{ currentActivity.time }}</span>
      <button class="ticker-close" @click="dismiss" aria-label="Close">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const currentIndex = ref(0)
let interval = null
let timeout = null

const activities = [
  { name: 'Sarah', initials: 'S', location: 'Australia', action: 'booked Slow Living', time: '2h ago' },
  { name: 'Marco', initials: 'M', location: 'Italy', action: 'joined Tea Ceremony', time: '3h ago' },
  { name: 'Emma', initials: 'E', location: 'UK', action: 'applied for Grower program', time: '5h ago' },
  { name: 'Yuki', initials: 'Y', location: 'Japan', action: 'booked Farm BBQ', time: '6h ago' },
  { name: 'Lucas', initials: 'L', location: 'Germany', action: 'joined Cooking Class', time: '8h ago' },
  { name: 'Sofia', initials: 'S', location: 'Spain', action: 'booked Little Farmer', time: '12h ago' },
  { name: 'Chen', initials: 'C', location: 'Singapore', action: 'applied for Caretaker', time: '1d ago' },
  { name: 'Anna', initials: 'A', location: 'Sweden', action: 'purchased Gift Card', time: '1d ago' },
]

const currentActivity = ref(activities[0])

const dismiss = () => {
  visible.value = false
  if (interval) clearInterval(interval)
  sessionStorage.setItem('socialProofDismissed', 'true')
}

const rotateActivity = () => {
  visible.value = false
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % activities.length
    currentActivity.value = activities[currentIndex.value]
    visible.value = true
  }, 500)
}

onMounted(() => {
  if (sessionStorage.getItem('socialProofDismissed')) return
  
  timeout = setTimeout(() => {
    visible.value = true
    interval = setInterval(rotateActivity, 8000)
  }, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
  if (timeout) clearTimeout(timeout)
})
</script>

<style scoped>
.social-proof {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 900;
  animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.activity-ticker {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--color-warm-white, #fffef9);
  border: 1px solid var(--color-border, #e8e4dc);
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  max-width: 340px;
}

.ticker-avatar {
  width: 36px;
  height: 36px;
  background: var(--color-gold, #d4a574);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.ticker-content {
  flex: 1;
  color: var(--color-dark-light, #4a5d4b);
  line-height: 1.4;
}

.ticker-name {
  font-weight: 600;
  color: var(--color-dark, #2c3e2d);
}

.ticker-action {
  color: var(--color-terracotta, #c17f59);
  font-weight: 500;
}

.ticker-time {
  font-size: 12px;
  color: var(--color-text-muted, #666666);
  white-space: nowrap;
}

.ticker-close {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--color-text-muted, #666666);
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.ticker-close:hover {
  opacity: 1;
}

@media (max-width: 480px) {
  .social-proof {
    left: 12px;
    right: 12px;
    bottom: 12px;
  }
  
  .activity-ticker {
    max-width: none;
  }
}
</style>
