<template>
  <div class="event-countdown" v-if="nextEvent">
    <div class="countdown-header">
      <span class="event-icon">{{ nextEvent.icon }}</span>
      <span class="event-name">{{ nextEvent.name }}</span>
    </div>
    <div class="countdown-boxes">
      <div class="countdown-box">
        <div class="num">{{ timeLeft.days }}</div>
        <div class="label">Days</div>
      </div>
      <div class="countdown-box">
        <div class="num">{{ timeLeft.hours }}</div>
        <div class="label">Hours</div>
      </div>
      <div class="countdown-box">
        <div class="num">{{ timeLeft.mins }}</div>
        <div class="label">Mins</div>
      </div>
    </div>
    <p class="spots-left" v-if="nextEvent.spots">Only {{ nextEvent.spots }} spots left</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const now = ref(new Date())
let interval = null

// Sample upcoming events - in real app, this would come from an API/CMS
const events = [
  { name: "Samovar Tea Ceremony", icon: "🍵", daysFromNow: 3, spots: 6 },
  { name: "Farm BBQ Night", icon: "🔥", daysFromNow: 5, spots: 12 },
  { name: "Cooking Class", icon: "👨‍🍳", daysFromNow: 7, spots: 8 },
  { name: "Little Farmer", icon: "👶", daysFromNow: 4, spots: 10 },
]

const nextEvent = computed(() => {
  // Get the soonest event
  const sorted = [...events].sort((a, b) => a.daysFromNow - b.daysFromNow)
  if (sorted.length === 0) return null
  
  const event = sorted[0]
  const eventDate = new Date(now.value)
  eventDate.setDate(eventDate.getDate() + event.daysFromNow)
  eventDate.setHours(16, 0, 0, 0) // 4 PM
  
  return { ...event, date: eventDate }
})

const timeLeft = computed(() => {
  if (!nextEvent.value) return { days: 0, hours: 0, mins: 0 }
  
  const diff = nextEvent.value.date - now.value
  if (diff <= 0) return { days: 0, hours: 0, mins: 0 }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  
  return { days, hours, mins }
})

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date()
  }, 60000) // Update every minute
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.event-countdown {
  background: var(--color-cream, #faf8f5);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.countdown-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.event-icon {
  font-size: 1.5rem;
}

.event-name {
  font-family: var(--font-heading, 'Quicksand', sans-serif);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-dark, #2c3e2d);
}

.countdown-boxes {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.countdown-box {
  background: var(--color-hero-dark, #1e3a2f);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  min-width: 60px;
}

.countdown-box .num {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
}

.countdown-box .label {
  font-size: 0.7rem;
  text-transform: uppercase;
  opacity: 0.8;
  margin-top: 0.25rem;
}

.spots-left {
  color: var(--color-terracotta, #c17f59);
  font-weight: 500;
  margin: 0;
}
</style>
