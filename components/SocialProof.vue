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

// Expanded pool of names, locations, and actions
const names = [
  // Western
  { name: 'Sarah', initials: 'S' },
  { name: 'Emma', initials: 'E' },
  { name: 'Anna', initials: 'A' },
  { name: 'Sophie', initials: 'S' },
  { name: 'Hannah', initials: 'H' },
  { name: 'Lisa', initials: 'L' },
  { name: 'Julia', initials: 'J' },
  { name: 'Marie', initials: 'M' },
  { name: 'Laura', initials: 'L' },
  { name: 'Kate', initials: 'K' },
  { name: 'Claire', initials: 'C' },
  { name: 'Rachel', initials: 'R' },
  { name: 'Olivia', initials: 'O' },
  { name: 'Megan', initials: 'M' },
  { name: 'Nicole', initials: 'N' },
  { name: 'Marco', initials: 'M' },
  { name: 'Lucas', initials: 'L' },
  { name: 'Thomas', initials: 'T' },
  { name: 'Daniel', initials: 'D' },
  { name: 'James', initials: 'J' },
  { name: 'Michael', initials: 'M' },
  { name: 'David', initials: 'D' },
  { name: 'Alex', initials: 'A' },
  { name: 'Ben', initials: 'B' },
  { name: 'Chris', initials: 'C' },
  { name: 'Ryan', initials: 'R' },
  { name: 'Max', initials: 'M' },
  // Asian
  { name: 'Yuki', initials: 'Y' },
  { name: 'Hana', initials: 'H' },
  { name: 'Mei', initials: 'M' },
  { name: 'Chen', initials: 'C' },
  { name: 'Wei', initials: 'W' },
  { name: 'Jing', initials: 'J' },
  { name: 'Sakura', initials: 'S' },
  { name: 'Min-Ji', initials: 'M' },
  { name: 'Soo-Yeon', initials: 'S' },
  { name: 'Anh', initials: 'A' },
  { name: 'Linh', initials: 'L' },
  { name: 'Priya', initials: 'P' },
  { name: 'Raj', initials: 'R' },
  { name: 'Arjun', initials: 'A' },
  { name: 'Kenji', initials: 'K' },
  { name: 'Takeshi', initials: 'T' },
  // European
  { name: 'Sofia', initials: 'S' },
  { name: 'Isabella', initials: 'I' },
  { name: 'Lena', initials: 'L' },
  { name: 'Freya', initials: 'F' },
  { name: 'Maja', initials: 'M' },
  { name: 'Elena', initials: 'E' },
  { name: 'Lucia', initials: 'L' },
  { name: 'Camille', initials: 'C' },
  { name: 'Lars', initials: 'L' },
  { name: 'Henrik', initials: 'H' },
  { name: 'Matteo', initials: 'M' },
  { name: 'Pierre', initials: 'P' },
  { name: 'Klaus', initials: 'K' },
  { name: 'Stefan', initials: 'S' },
  // Oceania & Americas
  { name: 'Chloe', initials: 'C' },
  { name: 'Zoe', initials: 'Z' },
  { name: 'Mia', initials: 'M' },
  { name: 'Ava', initials: 'A' },
  { name: 'Noah', initials: 'N' },
  { name: 'Liam', initials: 'L' },
  { name: 'Ethan', initials: 'E' },
  { name: 'Jack', initials: 'J' },
  { name: 'Sam', initials: 'S' },
  { name: 'Carlos', initials: 'C' },
  { name: 'Miguel', initials: 'M' },
  { name: 'Ana', initials: 'A' },
  { name: 'Valentina', initials: 'V' },
]

const locations = [
  // Europe
  'UK', 'Germany', 'France', 'Netherlands', 'Sweden', 'Norway', 'Denmark',
  'Italy', 'Spain', 'Portugal', 'Switzerland', 'Austria', 'Belgium',
  'Poland', 'Czech Republic', 'Ireland', 'Finland', 'Greece',
  // Asia Pacific
  'Australia', 'New Zealand', 'Singapore', 'Japan', 'South Korea',
  'Hong Kong', 'Taiwan', 'Malaysia', 'Thailand', 'Vietnam', 'India',
  'Philippines', 'Indonesia',
  // Americas
  'USA', 'Canada', 'Brazil', 'Argentina', 'Mexico', 'Chile', 'Colombia',
  // Middle East
  'UAE', 'Israel',
]

const actions = [
  // Programs (Stay & Contribute)
  'applied for Grower program',
  'applied for Caretaker program',
  'applied for Maker program',
  'applied for Storyteller program',
  'booked Slow Living program',
  'joined the Grower program',
  'started their Caretaker week',
  'began their farm experience',
  // Events
  'booked Farm BBQ',
  'joined Cooking Class',
  'reserved Tea Ceremony',
  'signed up for Little Farmer',
  'booked Outdoor Cinema',
  'joined Thursday Volleyball',
  'reserved BBQ Night tickets',
  'booked Samovar Tea session',
  // Cabins / Stays
  'booked Sandat Cabin',
  'reserved Peace Cabin',
  'booked Lime Cabin',
  'reserved Jabalkap Cabin',
  "booked Rick's Windmill",
  'extended their cabin stay',
  // Noni\'s Cafe
  'ordered Noni\'s Cheesecake',
  'tried the Azerbaijan Tea',
  'loved the farm breakfast',
  // Gift Cards & Membership
  'purchased Gift Card',
  'sent a farm Gift Card',
  'joined Farm Membership',
  'gifted a retreat package',
  // General engagement
  'left a 5-star review',
  'recommended to friends',
  'shared their farm photos',
  'posted about their stay',
]

const times = [
  '1h ago', '2h ago', '3h ago', '4h ago', '5h ago', '6h ago',
  '8h ago', '10h ago', '12h ago', '15h ago', '18h ago',
  '1d ago', '1d ago', '2d ago', '2d ago', '3d ago',
]

// Shuffle array using Fisher-Yates
const shuffle = (array) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Generate randomized activities for this session
const generateActivities = () => {
  const shuffledNames = shuffle(names)
  const shuffledLocations = shuffle(locations)
  const shuffledActions = shuffle(actions)
  const shuffledTimes = shuffle(times)
  
  // Generate 15 unique activities for this session
  const activities = []
  for (let i = 0; i < 15; i++) {
    const person = shuffledNames[i % shuffledNames.length]
    activities.push({
      name: person.name,
      initials: person.initials,
      location: shuffledLocations[i % shuffledLocations.length],
      action: shuffledActions[i % shuffledActions.length],
      time: shuffledTimes[i % shuffledTimes.length],
    })
  }
  return activities
}

const activities = ref(generateActivities())
const currentActivity = ref(activities.value[0])

const dismiss = () => {
  visible.value = false
  if (interval) clearInterval(interval)
  sessionStorage.setItem('socialProofDismissed', 'true')
}

const rotateActivity = () => {
  visible.value = false
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % activities.value.length
    currentActivity.value = activities.value[currentIndex.value]
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
