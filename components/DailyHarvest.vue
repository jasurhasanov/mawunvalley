<template>
  <div class="harvest-banner">
    <span class="harvest-icon">🌱</span>
    <span class="harvest-text">
      <strong>Today's harvest: </strong>
      <span class="items">{{ harvestText }}</span>
    </span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const today = ref(new Date())

const allHarvest = [
  'Water Spinach', 'Lemongrass', 'Ginger', 'Mint', 'Basil', 
  'Spinach', 'Papaya', 'Chili', 'Dill', 'Spring Onion', 'Moringa', 'Tarragon'
]

// Use date as seed for consistent daily shuffle
const todaysHarvest = computed(() => {
  const dateNum = today.value.getFullYear() * 10000 + 
                  (today.value.getMonth() + 1) * 100 + 
                  today.value.getDate()
  
  const shuffled = [...allHarvest]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (dateNum * (i + 1) * 31) % (i + 1)
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  return shuffled.slice(0, 4)
})

const harvestText = computed(() => todaysHarvest.value.join(', '))

onMounted(() => {
  today.value = new Date()
})
</script>

<style scoped>
.harvest-banner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #e8f5e9, #fff);
  border: 1px solid #a5d6a7;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}

.harvest-icon {
  font-size: 1.25rem;
}

.harvest-text {
  color: var(--color-dark-light, #4a5d4b);
}

.harvest-text strong {
  color: var(--color-dark, #2c3e2d);
}

.items {
  color: var(--color-sage, #87a878);
  font-weight: 500;
}
</style>
