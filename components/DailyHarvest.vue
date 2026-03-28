<template>
  <div class="harvest-banner">
    <div class="harvest-header">
      <span class="harvest-icon">🌱</span>
      <h4>Today's Harvest</h4>
      <span class="harvest-date">{{ formattedDate }}</span>
    </div>
    <div class="harvest-items">
      <span class="harvest-item" v-for="item in todaysHarvest" :key="item.name">
        {{ item.emoji }} {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const today = ref(new Date())

const allHarvest = [
  { emoji: '🥬', name: 'Water Spinach' },
  { emoji: '🌿', name: 'Lemongrass' },
  { emoji: '🫚', name: 'Ginger' },
  { emoji: '🌿', name: 'Mint' },
  { emoji: '🌿', name: 'Basil' },
  { emoji: '🥬', name: 'Spinach' },
  { emoji: '🍈', name: 'Papaya' },
  { emoji: '🌶️', name: 'Chili' },
  { emoji: '🌿', name: 'Dill' },
  { emoji: '🧅', name: 'Spring Onion' },
  { emoji: '🌿', name: 'Moringa' },
  { emoji: '🌿', name: 'Tarragon' },
]

const formattedDate = computed(() => {
  return today.value.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
})

// Use date as seed for consistent daily shuffle
const todaysHarvest = computed(() => {
  const dateNum = today.value.getFullYear() * 10000 + 
                  (today.value.getMonth() + 1) * 100 + 
                  today.value.getDate()
  
  // Seeded shuffle
  const shuffled = [...allHarvest]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (dateNum * (i + 1) * 31) % (i + 1)
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  return shuffled.slice(0, 4)
})

onMounted(() => {
  today.value = new Date()
})
</script>

<style scoped>
.harvest-banner {
  background: linear-gradient(135deg, var(--color-hero-dark, #1e3a2f), var(--color-hero-light, #2d5a4a));
  color: white;
  padding: 1.25rem;
  border-radius: 12px;
}

.harvest-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.harvest-icon {
  font-size: 1.5rem;
}

.harvest-header h4 {
  font-family: var(--font-heading, 'Quicksand', sans-serif);
  font-size: 1.1rem;
  color: white;
  margin: 0;
  flex: 1;
}

.harvest-date {
  font-size: 0.8rem;
  opacity: 0.8;
}

.harvest-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.harvest-item {
  background: rgba(255, 255, 255, 0.15);
  padding: 0.4rem 0.85rem;
  border-radius: 50px;
  font-size: 0.85rem;
  backdrop-filter: blur(10px);
}
</style>
