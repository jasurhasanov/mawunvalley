<template>
  <div>
    <section class="page-header">
      <div class="container">
        <span class="section-label">Family Membership</span>
        <h1>Belong</h1>
        <p>More than visitors — become part of the Mawun Valley family.</p>
      </div>
    </section>

    <section class="membership-section">
      <div class="container">
        <div class="membership-intro">
          <h2>Family Farm Membership</h2>
          <p>Join our extended family and enjoy exclusive benefits, priority booking, and a deeper connection to the farm throughout the year.</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🏡</div>
            <h3>Priority Booking</h3>
            <p>First access to cabin reservations during peak seasons.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">💰</div>
            <h3>Member Discounts</h3>
            <p>Special rates on stays, programs, and events.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🎉</div>
            <h3>Exclusive Events</h3>
            <p>Members-only gatherings and celebrations.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🌱</div>
            <h3>Farm Updates</h3>
            <p>Regular updates on what's growing and happening.</p>
          </div>
        </div>

        <div class="membership-cta">
          <h3>Interested in joining?</h3>
          <p>Reach out to learn more about membership options.</p>
          <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Family%20Farm%20Membership" class="btn btn-whatsapp btn-lg" target="_blank">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Belong - Mawun Valley Farm' })
</script>

<style scoped>
.page-header { padding: 140px 0 60px; background: var(--color-cream); text-align: center; }
.membership-section { padding: 60px 0; }
.membership-intro { text-align: center; max-width: 600px; margin: 0 auto 50px; }
.membership-intro h2 { margin-bottom: 15px; }
.membership-intro p { color: #666; line-height: 1.7; }
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px; margin-bottom: 60px; }
.benefit-card { background: var(--color-light); padding: 30px; border-radius: 16px; text-align: center; }
.benefit-icon { font-size: 2.5rem; margin-bottom: 15px; }
.benefit-card h3 { margin-bottom: 10px; }
.benefit-card p { color: #666; font-size: 14px; }
.membership-cta { text-align: center; padding: 50px; background: var(--color-cream); border-radius: 20px; }
.membership-cta h3 { margin-bottom: 10px; }
.membership-cta p { color: #666; margin-bottom: 25px; }
</style>
