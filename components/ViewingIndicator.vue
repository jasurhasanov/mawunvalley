<template>
  <div class="viewing-indicator" v-if="count > 0">
    <span class="eyes">👀</span>
    <span class="text">{{ count }} {{ count === 1 ? 'person' : 'people' }} viewing</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  min: { type: Number, default: 2 },
  max: { type: Number, default: 8 }
})

const count = ref(0)

onMounted(() => {
  // Random number between min and max, with some items showing 0 (no indicator)
  const show = Math.random() > 0.3 // 70% chance to show
  if (show) {
    count.value = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min
  }
})
</script>

<style scoped>
.viewing-indicator {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--color-text-muted, #666);
  margin-top: 8px;
}

.eyes {
  font-size: 0.9rem;
}

.text {
  opacity: 0.9;
}
</style>
