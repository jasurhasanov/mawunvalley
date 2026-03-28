<template>
  <div class="weather-widget" v-if="weather">
    <span class="weather-icon">{{ weather.icon }}</span>
    <div class="weather-content">
      <h4>{{ weather.title }}</h4>
      <p>{{ weather.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weather = ref(null)

// Lombok weather patterns - tropical, generally good year-round
// Dry season: April-October, Wet season: November-March
const getWeatherMessage = () => {
  const month = new Date().getMonth() + 1
  
  // Dry season - perfect weather
  if (month >= 4 && month <= 10) {
    const options = [
      { icon: "☀️", title: "Perfect farm weather this week", description: "28°C, sunny skies in Lombok. Great time to visit!" },
      { icon: "🌴", title: "Beautiful dry season", description: "Clear skies and warm days. Ideal for farm activities!" },
      { icon: "☀️", title: "Sunshine at the farm", description: "Perfect conditions for outdoor workshops and beach trips." },
    ]
    return options[Math.floor(Math.random() * options.length)]
  }
  
  // Wet season - still nice, occasional rain
  const options = [
    { icon: "🌤️", title: "Warm tropical weather", description: "26°C with occasional afternoon showers. Lush and green!" },
    { icon: "🌿", title: "Rainy season magic", description: "The farm is extra lush. Morning activities before afternoon rain." },
  ]
  return options[Math.floor(Math.random() * options.length)]
}

onMounted(() => {
  weather.value = getWeatherMessage()
})
</script>

<style scoped>
.weather-widget {
  background: linear-gradient(135deg, #e3f2fd, #fff);
  border: 1px solid #90caf9;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.weather-icon {
  font-size: 2.5rem;
}

.weather-content h4 {
  font-family: var(--font-heading, 'Quicksand', sans-serif);
  font-size: 1.1rem;
  color: #1565c0;
  margin-bottom: 0.25rem;
}

.weather-content p {
  color: var(--color-text-muted, #666);
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 480px) {
  .weather-widget {
    flex-direction: column;
    text-align: center;
  }
}
</style>
