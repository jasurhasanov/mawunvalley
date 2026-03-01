<template>
  <article class="cabin-card" :class="{ featured }">
    <div class="cabin-image">
      <img :src="images[activeImage]" :alt="name">
      <span class="cabin-capacity">🛏️ {{ bed }}</span>
    </div>
    <div class="cabin-gallery" v-if="images.length > 1">
      <img 
        v-for="(img, idx) in images.slice(0, 6)" 
        :key="idx"
        :src="img" 
        :alt="`${name} view ${idx + 1}`"
        :class="{ active: activeImage === idx }"
        @click="activeImage = idx"
      >
    </div>
    <div class="cabin-content">
      <h2>{{ name }}</h2>
      <p class="cabin-style">{{ style }}</p>
      <div class="cabin-features">
        <span v-for="feature in features" :key="feature">{{ feature }}</span>
      </div>
      <a :href="bookingLink" class="btn btn-primary" target="_blank">Book This Cabin</a>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  name: String,
  style: String,
  bed: String,
  images: Array,
  features: Array,
  featured: Boolean
})

const activeImage = ref(0)

const bookingLink = computed(() => {
  const msg = encodeURIComponent(`Hi! I'm interested in booking ${props.name}`)
  return `https://wa.me/6282258440585?text=${msg}`
})
</script>

<style scoped>
.cabin-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.cabin-card.featured { border: 2px solid var(--color-gold); }
.cabin-image { position: relative; }
.cabin-image img { width: 100%; height: 280px; object-fit: cover; }
.cabin-capacity { position: absolute; top: 16px; right: 16px; background: rgba(255,255,255,0.95); padding: 6px 12px; border-radius: 20px; font-size: 13px; }
.cabin-gallery { display: flex; gap: 8px; padding: 12px; overflow-x: auto; }
.cabin-gallery img { width: 60px; height: 45px; object-fit: cover; border-radius: 6px; cursor: pointer; opacity: 0.6; transition: opacity 0.2s; }
.cabin-gallery img.active, .cabin-gallery img:hover { opacity: 1; }
.cabin-content { padding: 20px; }
.cabin-content h2 { margin-bottom: 4px; }
.cabin-style { color: #888; font-size: 14px; margin-bottom: 16px; }
.cabin-features { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.cabin-features span { background: var(--color-cream); padding: 6px 12px; border-radius: 20px; font-size: 13px; }
</style>
