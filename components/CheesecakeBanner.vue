<template>
  <div class="cheesecake-banner">
    <span class="sells-out-badge">Sells out daily</span>
    <div class="cheesecake-icon">🍰</div>
    <h4>Noni's Cheesecake</h4>
    <p class="limit">Only 1 cake baked today</p>
    <p class="subtext">Made fresh each morning. First come, first served.</p>
  </div>
</template>

<style scoped>
.cheesecake-banner {
  background: linear-gradient(135deg, #fdf6e3, var(--color-cream, #faf8f5));
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cheesecake-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(212,165,116,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.sells-out-badge {
  display: inline-block;
  background: var(--color-terracotta, #c17f59);
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.cheesecake-icon {
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
}

.cheesecake-banner h4 {
  font-family: var(--font-heading, 'Quicksand', sans-serif);
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--color-dark, #2c3e2d);
}

.limit {
  color: var(--color-terracotta, #c17f59);
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
}

.subtext {
  color: var(--color-text-muted, #666);
  font-size: 0.85rem;
  margin: 0;
}
</style>
