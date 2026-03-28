<template>
  <div class="weather-widget" v-if="weather">
    <span class="weather-icon">{{ weather.icon }}</span>
    <span class="weather-text">{{ weather.text }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref(null)

const getWeatherMessage = () => {
  const month = new Date().getMonth() + 1
  
  // Dry season (April-October)
  if (month >= 4 && month <= 10) {
    const options = [
      { icon: "☀️", text: "Perfect weather this week — 28°C, sunny in Lombok" },
      { icon: "🌴", text: "Beautiful dry season — clear skies, great for the farm" },
      { icon: "☀️", text: "Sunshine & warm days — ideal for outdoor activities" },
    ]
    return options[Math.floor(Math.random() * options.length)]
  }
  
  // Wet season
  const options = [
    { icon: "🌤️", text: "Warm & tropical — 26°C with occasional afternoon showers" },
    { icon: "🌿", text: "Rainy season magic — the farm is extra lush & green" },
  ]
  return options[Math.floor(Math.random() * options.length)]
}

onMounted(() => {
  weather.value = getWeatherMessage()
})
</script>

<style scoped>
.weather-widget {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #e8f5e9, #fff);
  border: 1px solid #a5d6a7;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}

.weather-icon {
  font-size: 1.25rem;
}

.weather-text {
  color: var(--color-dark-light, #4a5d4b);
}
</style>
