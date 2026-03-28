<template>
  <div class="cheesecake-banner">
    <span class="cheesecake-icon">🍰</span>
    <span class="cheesecake-text">
      <strong>Noni's Cheesecake</strong> — Only 1 cake baked today
    </span>
    <span class="sells-out">Sells out daily</span>
  </div>
</template>

<style scoped>
.cheesecake-banner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #fdf6e3, #fff);
  border: 1px solid #f0e6d3;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}

.cheesecake-icon {
  font-size: 1.25rem;
}

.cheesecake-text {
  flex: 1;
  color: var(--color-dark-light, #4a5d4b);
}

.cheesecake-text strong {
  color: var(--color-dark, #2c3e2d);
}

.sells-out {
  background: var(--color-terracotta, #c17f59);
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
}
</style>
