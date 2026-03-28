<template>
  <div class="occasion-reminder" v-if="nextOccasion">
    <div class="occasion-icon">{{ nextOccasion.icon }}</div>
    <div class="occasion-content">
      <h4>{{ nextOccasion.name }} in {{ daysUntil }} {{ daysUntil === 1 ? 'day' : 'days' }}</h4>
      <p>Gift an experience, not stuff</p>
    </div>
    <NuxtLink to="/gift-cards" class="occasion-cta">Shop Gift Cards</NuxtLink>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const today = ref(new Date())

const occasions = [
  { name: "Mother's Day", icon: "💐", month: 5, day: 11 },
  { name: "Father's Day", icon: "👔", month: 6, day: 15 },
  { name: "Valentine's Day", icon: "💝", month: 2, day: 14 },
  { name: "Christmas", icon: "🎄", month: 12, day: 25 },
  { name: "New Year", icon: "🎊", month: 1, day: 1 },
]

const nextOccasion = computed(() => {
  const now = today.value
  const year = now.getFullYear()
  
  let closest = null
  let minDays = Infinity
  
  for (const occ of occasions) {
    let occDate = new Date(year, occ.month - 1, occ.day)
    if (occDate < now) {
      occDate = new Date(year + 1, occ.month - 1, occ.day)
    }
    
    const diff = Math.ceil((occDate - now) / (1000 * 60 * 60 * 24))
    if (diff > 0 && diff <= 30 && diff < minDays) {
      minDays = diff
      closest = { ...occ, date: occDate }
    }
  }
  
  return closest
})

const daysUntil = computed(() => {
  if (!nextOccasion.value) return 0
  return Math.ceil((nextOccasion.value.date - today.value) / (1000 * 60 * 60 * 24))
})

onMounted(() => {
  today.value = new Date()
})
</script>

<style scoped>
.occasion-reminder {
  background: linear-gradient(135deg, #fce4ec, #fff);
  border: 1px solid #f8bbd0;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.occasion-icon {
  font-size: 2.5rem;
}

.occasion-content {
  flex: 1;
}

.occasion-content h4 {
  font-family: var(--font-heading, 'Quicksand', sans-serif);
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--color-dark, #2c3e2d);
}

.occasion-content p {
  color: var(--color-text-muted, #666);
  font-size: 0.9rem;
  margin: 0;
}

.occasion-cta {
  background: var(--color-gold, #d4a574);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s;
}

.occasion-cta:hover {
  background: var(--color-terracotta, #c17f59);
  transform: translateY(-1px);
}

@media (max-width: 600px) {
  .occasion-reminder {
    flex-wrap: wrap;
  }
  
  .occasion-cta {
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>
