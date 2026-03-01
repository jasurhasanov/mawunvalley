<template>
  <div class="menu-item" :class="{ featured }">
    <div class="item-header">
      <span class="item-name">{{ name }} <span v-if="featured" class="star">⭐</span></span>
      <span class="item-price">{{ price }}</span>
    </div>
    <p class="item-desc">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  price: String,
  desc: String,
  featured: Boolean
})
</script>

<style scoped>
.menu-item {
  background: white;
  padding: 24px;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.menu-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.menu-item.featured {
  border-left: 4px solid var(--color-gold);
  background: linear-gradient(135deg, white 0%, #fffdf8 100%);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 12px;
}

.item-name {
  font-weight: 600;
  font-size: 1.05rem;
  line-height: 1.3;
}

.star {
  display: inline-block;
  margin-left: 4px;
}

.item-price {
  color: var(--color-dark);
  font-weight: 700;
  font-size: 1rem;
  background: var(--color-cream);
  padding: 4px 12px;
  border-radius: 16px;
  white-space: nowrap;
}

.item-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.65;
}
</style>
