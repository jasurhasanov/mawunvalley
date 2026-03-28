<template>
  <div class="testimonial-rotation" v-if="currentTestimonial">
    <div class="testimonial-card">
      <p class="testimonial-text">"{{ currentTestimonial.text }}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">{{ currentTestimonial.initials }}</div>
        <div class="author-info">
          <span class="author-name">{{ currentTestimonial.name }}</span>
          <span class="author-location">{{ currentTestimonial.location }}</span>
        </div>
      </div>
    </div>
    <div class="testimonial-dots">
      <span 
        v-for="(_, index) in testimonials" 
        :key="index" 
        class="dot" 
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
let interval = null

const testimonials = [
  { 
    text: "The farm stay changed how I think about food and time. I left feeling more present than I have in years.",
    name: "Emma",
    initials: "E",
    location: "London, UK"
  },
  { 
    text: "Waking up to the sound of roosters, fresh eggs for breakfast, and the kindest hosts. This place is magic.",
    name: "Sarah",
    initials: "S",
    location: "Sydney, Australia"
  },
  { 
    text: "My kids still talk about feeding the goats and picking vegetables. A real farm experience, not a tourist trap.",
    name: "Marco",
    initials: "M",
    location: "Milan, Italy"
  },
  { 
    text: "Finally found what slow living actually means. The cheesecake alone is worth the trip.",
    name: "Yuki",
    initials: "Y",
    location: "Tokyo, Japan"
  },
  { 
    text: "Three weeks here and I extended twice. The community, the food, the peace — didn't want to leave.",
    name: "Lucas",
    initials: "L",
    location: "Berlin, Germany"
  },
]

const currentTestimonial = ref(testimonials[0])

const goTo = (index) => {
  currentIndex.value = index
  currentTestimonial.value = testimonials[index]
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
  currentTestimonial.value = testimonials[currentIndex.value]
}

onMounted(() => {
  interval = setInterval(next, 6000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
.testimonial-rotation {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.testimonial-card {
  background: var(--color-warm-white, #fffef9);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.testimonial-text {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--color-dark, #2c3e2d);
  font-style: italic;
  margin: 0 0 24px 0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.author-avatar {
  width: 44px;
  height: 44px;
  background: var(--color-sage, #87a878);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.author-info {
  text-align: left;
}

.author-name {
  display: block;
  font-weight: 600;
  color: var(--color-dark, #2c3e2d);
}

.author-location {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-muted, #666);
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-border, #ddd);
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: var(--color-terracotta, #c17f59);
  transform: scale(1.2);
}

.dot:hover {
  background: var(--color-gold, #d4a574);
}
</style>
