<template>
  <div class="menu-item" :class="{ featured }">
    <div class="item-header">
      <span class="item-name">{{ name }} {{ featured ? '⭐' : '' }}</span>
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
