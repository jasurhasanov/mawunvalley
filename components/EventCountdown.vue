<template>
  <div class="event-countdown" v-if="nextEvent">
    <span class="event-icon">{{ nextEvent.icon }}</span>
    <span class="event-info">
      <strong>{{ nextEvent.name }}</strong> in 
      <span class="time">{{ timeLeft.days }}d {{ timeLeft.hours }}h</span>
    </span>
    <span class="spots" v-if="nextEvent.spots">{{ nextEvent.spots }} spots left</span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const now = ref(new Date())
let interval = null

const events = [
  { name: "Tea Ceremony", icon: "🍵", daysFromNow: 3, spots: 6 },
  { name: "Farm BBQ", icon: "🔥", daysFromNow: 5, spots: 12 },
  { name: "Cooking Class", icon: "👨‍🍳", daysFromNow: 7, spots: 8 },
  { name: "Little Farmer", icon: "👶", daysFromNow: 4, spots: 10 },
]

const nextEvent = computed(() => {
  const sorted = [...events].sort((a, b) => a.daysFromNow - b.daysFromNow)
  if (sorted.length === 0) return null
  
  const event = sorted[0]
  const eventDate = new Date(now.value)
  eventDate.setDate(eventDate.getDate() + event.daysFromNow)
  eventDate.setHours(16, 0, 0, 0)
  
  return { ...event, date: eventDate }
})

const timeLeft = computed(() => {
  if (!nextEvent.value) return { days: 0, hours: 0 }
  
  const diff = nextEvent.value.date - now.value
  if (diff <= 0) return { days: 0, hours: 0 }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  
  return { days, hours }
})

onMounted(() => {
  interval = setInterval(() => { now.value = new Date() }, 60000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.event-countdown {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-warm-white, #fffef9);
  border: 1px solid var(--color-border, #e8e4dc);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}

.event-icon {
  font-size: 1.25rem;
}

.event-info {
  flex: 1;
  color: var(--color-dark-light, #4a5d4b);
}

.event-info strong {
  color: var(--color-dark, #2c3e2d);
}

.time {
  color: var(--color-hero-dark, #1e3a2f);
  font-weight: 600;
}

.spots {
  background: var(--color-terracotta, #c17f59);
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
}
</style>
