<template>
  <div class="gift-cards-page">
    <!-- Hero -->
    <header class="page-hero">
      <div class="page-hero-bg">
        <img src="/images/gift-card-hero.png" alt="Mawun Valley Farm">
      </div>
      <div class="page-hero-content">
        <span class="section-label light">Give the Gift of</span>
        <h1>Farm Experiences</h1>
        <p class="hero-subtitle">Memorable moments at Mawun Valley Farm</p>
      </div>
    </header>

    <!-- Intro -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <h2>Gift Cards</h2>
          <p class="lead">Give someone special the gift of farm experiences — cinema nights under the stars, sunset volleyball, BBQ feasts, cooking classes, and more.</p>
          <p>Perfect for birthdays, holidays, thank-yous, or welcoming friends to Lombok.</p>
        </div>
      </div>
    </section>

    <!-- Tiers -->
    <section class="tiers-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Choose an Amount</span>
          <h2>Gift Card Options</h2>
        </div>

        <div class="tiers-grid">
          <div 
            v-for="tier in tiers" 
            :key="tier.value"
            class="tier-card"
            :class="{ active: selectedTier === tier.value }"
            @click="selectTier(tier.value)"
          >
            <div class="tier-amount">IDR {{ formatNumber(tier.value) }}</div>
            <div class="tier-description">{{ tier.description }}</div>
          </div>
          
          <div 
            class="tier-card custom"
            :class="{ active: selectedTier === 'custom' }"
            @click="selectTier('custom')"
          >
            <div class="tier-amount">Custom Amount</div>
            <div class="tier-description">Minimum IDR 750,000</div>
            <input 
              v-if="selectedTier === 'custom'"
              type="number" 
              v-model="customAmount" 
              placeholder="Enter amount"
              min="750000"
              step="50000"
              class="custom-input"
              @click.stop
            >
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-section">
      <div class="container">
        <div class="section-header">
          <h2>How It Works</h2>
        </div>
        
        <div class="steps-grid">
          <div class="step">
            <div class="step-num">1</div>
            <h4>Choose & Customize</h4>
            <p>Select an amount, add recipient details and a personal message</p>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <h4>We Send It</h4>
            <p>Digital gift card delivered via WhatsApp or email within 24 hours</p>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <h4>They Redeem</h4>
            <p>Recipient contacts us to book any experience using their gift card balance (subject to availability)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Purchase Form -->
    <section class="form-section" id="purchase">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Request Your Gift Card</span>
          <h2>Purchase Form</h2>
          <p v-if="selectedTier" class="selected-amount">
            Selected: <strong>IDR {{ formatNumber(getFinalAmount()) }}</strong>
          </p>
        </div>

        <form @submit.prevent="submitRequest" class="purchase-form">
          <div class="form-section-box">
            <h4>🎁 Gift Card Details</h4>
            
            <div class="form-group">
              <label>Gift Card Amount *</label>
              <div class="amount-display">
                IDR {{ formatNumber(getFinalAmount()) }}
                <button type="button" class="change-btn" @click="scrollToTiers">Change</button>
              </div>
            </div>
          </div>

          <div class="form-section-box">
            <h4>👤 Your Information (Buyer)</h4>
            
            <div class="form-group">
              <label>Your Name *</label>
              <input type="text" v-model="form.buyerName" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Your WhatsApp *</label>
                <input type="tel" v-model="form.buyerWhatsApp" required placeholder="+62...">
              </div>
              <div class="form-group">
                <label>Your Email</label>
                <input type="email" v-model="form.buyerEmail" placeholder="Optional">
              </div>
            </div>
          </div>

          <div class="form-section-box">
            <h4>🎀 Recipient Information</h4>
            
            <div class="form-group">
              <label>Recipient's Name *</label>
              <input type="text" v-model="form.recipientName" required>
            </div>

            <div class="form-group">
              <label>Delivery Method *</label>
              <select v-model="form.deliveryMethod" required>
                <option value="">Select delivery method</option>
                <option value="whatsapp-recipient">WhatsApp to recipient directly</option>
                <option value="whatsapp-buyer">WhatsApp to me (I'll give it myself)</option>
                <option value="email-recipient">Email to recipient</option>
                <option value="email-buyer">Email to me</option>
                <option value="physical">Physical card (collect at farm)</option>
              </select>
            </div>

            <div class="form-group" v-if="form.deliveryMethod && form.deliveryMethod.includes('recipient')">
              <label>Recipient's {{ form.deliveryMethod.includes('whatsapp') ? 'WhatsApp' : 'Email' }} *</label>
              <input 
                :type="form.deliveryMethod.includes('whatsapp') ? 'tel' : 'email'" 
                v-model="form.recipientContact" 
                required
                :placeholder="form.deliveryMethod.includes('whatsapp') ? '+62...' : 'email@example.com'"
              >
            </div>

            <div class="form-group">
              <label>Personal Message (shown on gift card)</label>
              <textarea v-model="form.message" placeholder="Happy birthday! Enjoy a magical evening at the farm..." rows="3"></textarea>
            </div>

            <div class="form-group">
              <label>Occasion</label>
              <select v-model="form.occasion">
                <option value="">Select occasion (optional)</option>
                <option value="birthday">Birthday</option>
                <option value="thank-you">Thank You</option>
                <option value="welcome">Welcome to Lombok</option>
                <option value="holiday">Holiday Gift</option>
                <option value="anniversary">Anniversary</option>
                <option value="just-because">Just Because</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-note">
            <p>💳 After submitting, we'll send you payment instructions via WhatsApp. Digital gift cards delivered within 24 hours. Physical cards ready for collection at Mawun Valley Farm within 48 hours.</p>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting || !selectedTier">
            {{ submitting ? 'Submitting...' : 'Request Gift Card' }}
          </button>

          <p v-if="submitSuccess" class="success-msg">✅ Request submitted! We'll contact you shortly with payment details.</p>
          <p v-if="submitError" class="error-msg">❌ Something went wrong. Please try WhatsApp: +62 822 5844 0585</p>
        </form>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <h2>Common Questions</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h4>What can the gift card be used for?</h4>
            <p>Any farm experience — cinema nights, volleyball, BBQ, cooking classes, tea ceremonies, café credit, farm shop products, or farmstay credit. All redemptions are subject to availability.</p>
          </div>
          <div class="faq-item">
            <h4>How long is it valid?</h4>
            <p>12 months from the date of purchase.</p>
          </div>
          <div class="faq-item">
            <h4>Can I use it for multiple visits?</h4>
            <p>Yes! Any remaining balance carries over for future visits within the validity period.</p>
          </div>
          <div class="faq-item">
            <h4>Is it refundable?</h4>
            <p>Gift cards are non-refundable but fully transferable to another person.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({ 
  title: 'Gift Cards | Mawun Valley Farm',
  meta: [
    { name: 'description', content: 'Give the gift of farm experiences — cinema nights, BBQ, cooking classes, and more at Mawun Valley Farm.' }
  ]
})

const tiers = [
  { value: 750000, description: 'A taste of the farm' },
  { value: 1500000, description: 'A day at the farm' },
  { value: 3000000, description: 'The full experience' }
]

const selectedTier = ref(null)
const customAmount = ref(750000)

const form = ref({
  buyerName: '',
  buyerWhatsApp: '',
  buyerEmail: '',
  recipientName: '',
  deliveryMethod: '',
  recipientContact: '',
  message: '',
  occasion: ''
})

const submitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const selectTier = (tier) => {
  selectedTier.value = tier
}

const getFinalAmount = () => {
  if (selectedTier.value === 'custom') {
    return Math.max(750000, customAmount.value || 750000)
  }
  return selectedTier.value || 0
}

const formatNumber = (num) => {
  return new Intl.NumberFormat('id-ID').format(num)
}

const scrollToTiers = () => {
  document.querySelector('.tiers-section')?.scrollIntoView({ behavior: 'smooth' })
}

const submitRequest = async () => {
  if (!selectedTier.value) return
  
  submitting.value = true
  submitSuccess.value = false
  submitError.value = false

  const webhookUrl = 'https://discord.com/api/webhooks/1478653783176384674/SBAkObBUEUU9yNlnXjcnWdiInFoohTgi9jlNHgItjSYfQyWw-m0o0PjzKRnwFscP65pA'

  const embed = {
    title: '🎁 New Gift Card Request',
    color: 0xD4A574,
    fields: [
      { name: '💰 Amount', value: `IDR ${formatNumber(getFinalAmount())}`, inline: true },
      { name: '🎯 Occasion', value: form.value.occasion || 'Not specified', inline: true },
      { name: '👤 Buyer', value: form.value.buyerName, inline: true },
      { name: '📱 Buyer WhatsApp', value: form.value.buyerWhatsApp, inline: true },
      { name: '📧 Buyer Email', value: form.value.buyerEmail || 'Not provided', inline: true },
      { name: '🎀 Recipient', value: form.value.recipientName, inline: true },
      { name: '📬 Delivery', value: form.value.deliveryMethod, inline: true },
      { name: '📞 Recipient Contact', value: form.value.recipientContact || 'N/A', inline: true },
      { name: '💌 Message', value: form.value.message || 'No message' }
    ],
    footer: { text: 'Gift Card Request' },
    timestamp: new Date().toISOString()
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] })
    })

    if (response.ok) {
      submitSuccess.value = true
      // Reset form
      form.value = {
        buyerName: '',
        buyerWhatsApp: '',
        buyerEmail: '',
        recipientName: '',
        deliveryMethod: '',
        recipientContact: '',
        message: '',
        occasion: ''
      }
    } else {
      submitError.value = true
    }
  } catch (error) {
    submitError.value = true
  }

  submitting.value = false
}
</script>

<style scoped>
/* Hero */
.page-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.page-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5));
}

.page-hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 0 20px;
}

.page-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 16px;
  color: white;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
}

/* Sections */
section {
  padding: 80px 0;
}

.section-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-terracotta);
  margin-bottom: 12px;
}

.section-label.light {
  color: rgba(255,255,255,0.9);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

section h2 {
  font-size: 2.2rem;
  margin-bottom: 16px;
  color: var(--color-dark);
}

/* Intro */
.intro-section {
  background: var(--color-cream);
  text-align: center;
}

.intro-content {
  max-width: 700px;
  margin: 0 auto;
}

.intro-content .lead {
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 16px;
}

/* Tiers */
.tiers-section {
  background: white;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.tier-card {
  background: var(--color-cream);
  padding: 30px 24px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 3px solid transparent;
}

.tier-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
}

.tier-card.active {
  border-color: var(--color-terracotta);
  background: white;
}

.tier-amount {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 8px;
}

.tier-description {
  font-size: 14px;
  color: #666;
}

.tier-card.custom .custom-input {
  margin-top: 16px;
  padding: 12px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  text-align: center;
}

/* How It Works */
.how-section {
  background: var(--color-light);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 700px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}

.step {
  text-align: center;
}

.step-num {
  width: 50px;
  height: 50px;
  background: var(--color-terracotta);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 16px;
}

.step h4 {
  margin-bottom: 8px;
  color: var(--color-dark);
}

.step p {
  font-size: 14px;
  color: #666;
}

/* Form */
.form-section {
  background: var(--color-cream);
}

.selected-amount {
  font-size: 1.2rem;
  color: var(--color-terracotta);
  margin-top: 8px;
}

.purchase-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-section-box {
  background: white;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.form-section-box h4 {
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
  color: var(--color-dark);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #E8E4DC;
  border-radius: 10px;
  font-size: 15px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-terracotta);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 500px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.amount-display {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-terracotta);
}

.change-btn {
  background: none;
  border: 1px solid var(--color-terracotta);
  color: var(--color-terracotta);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
}

.form-note {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  font-size: 14px;
  color: #666;
}

.btn-lg {
  width: 100%;
  padding: 18px;
  font-size: 16px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.btn-primary {
  background: var(--color-terracotta);
  color: white;
}

.btn-primary:hover {
  background: var(--color-sage);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-msg {
  background: #E8F5E9;
  color: #2E7D32;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
}

.error-msg {
  background: #FFEBEE;
  color: #C62828;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
}

/* FAQ */
.faq-section {
  text-align: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 40px auto 0;
  text-align: left;
}

@media (max-width: 600px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

.faq-item {
  padding: 24px;
  background: var(--color-cream);
  border-radius: 12px;
}

.faq-item h4 {
  margin-bottom: 8px;
  color: var(--color-dark);
}

.faq-item p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}
</style>
