<template>
  <div class="admin-page">
    <!-- Auth Gate -->
    <div v-if="!authenticated" class="auth-gate">
      <div class="auth-box">
        <h1>🎁 Gift Card Admin</h1>
        <p>Enter password to access</p>
        <input 
          type="password" 
          v-model="password" 
          @keyup.enter="authenticate"
          placeholder="Password"
        >
        <button @click="authenticate" class="btn-primary">Enter</button>
        <p v-if="authError" class="error">Incorrect password</p>
      </div>
    </div>

    <!-- Dashboard -->
    <div v-else class="dashboard">
      <header class="admin-header">
        <h1>🎁 Gift Card Dashboard</h1>
        <div class="header-actions">
          <button @click="showNewCard = true" class="btn-primary">+ Issue New Card</button>
          <button @click="exportData" class="btn-secondary">Export Data</button>
          <label class="btn-secondary import-btn">
            Import
            <input type="file" @change="importData" accept=".json" hidden>
          </label>
        </div>
      </header>

      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">{{ giftCards.length }}</div>
          <div class="stat-label">Total Cards Issued</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ activeCards.length }}</div>
          <div class="stat-label">Active Cards</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">IDR {{ formatNumber(totalValue) }}</div>
          <div class="stat-label">Total Value Issued</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">IDR {{ formatNumber(remainingValue) }}</div>
          <div class="stat-label">Remaining Balance</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button :class="{ active: activeTab === 'cards' }" @click="activeTab = 'cards'">Gift Cards</button>
        <button :class="{ active: activeTab === 'requests' }" @click="activeTab = 'requests'">Pending Requests</button>
        <button :class="{ active: activeTab === 'redemptions' }" @click="activeTab = 'redemptions'">Redemption Log</button>
      </div>

      <!-- Gift Cards List -->
      <div v-if="activeTab === 'cards'" class="cards-list">
        <div class="search-bar">
          <input v-model="searchQuery" placeholder="Search by code, name, or recipient...">
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Recipient</th>
              <th>Original</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Issued</th>
              <th>Expires</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="card in filteredCards" :key="card.code" :class="{ expired: isExpired(card), depleted: card.balance === 0 }">
              <td class="code">{{ card.code }}</td>
              <td>{{ card.recipientName }}</td>
              <td>IDR {{ formatNumber(card.originalAmount) }}</td>
              <td class="balance">IDR {{ formatNumber(card.balance) }}</td>
              <td>
                <span class="status" :class="getStatusClass(card)">{{ getStatus(card) }}</span>
              </td>
              <td>{{ formatDate(card.issuedDate) }}</td>
              <td>{{ formatDate(card.expiryDate) }}</td>
              <td class="actions">
                <button @click="openRedeemModal(card)" class="btn-sm" :disabled="card.balance === 0 || isExpired(card)">Redeem</button>
                <button @click="viewCard(card)" class="btn-sm btn-outline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <p v-if="filteredCards.length === 0" class="no-data">No gift cards found</p>
      </div>

      <!-- Pending Requests -->
      <div v-if="activeTab === 'requests'" class="requests-list">
        <p class="info-text">💡 Purchase requests appear in Discord. Mark them here once you've issued the card.</p>
        
        <div class="request-cards">
          <div v-for="(req, index) in pendingRequests" :key="index" class="request-card">
            <div class="request-header">
              <strong>IDR {{ formatNumber(req.amount) }}</strong>
              <span class="request-date">{{ formatDate(req.date) }}</span>
            </div>
            <p><strong>Buyer:</strong> {{ req.buyerName }} ({{ req.buyerWhatsApp }})</p>
            <p><strong>Recipient:</strong> {{ req.recipientName }}</p>
            <p v-if="req.message"><strong>Message:</strong> "{{ req.message }}"</p>
            <div class="request-actions">
              <button @click="issueFromRequest(req, index)" class="btn-primary btn-sm">Issue Card</button>
              <button @click="dismissRequest(index)" class="btn-sm btn-outline">Dismiss</button>
            </div>
          </div>
        </div>
        
        <p v-if="pendingRequests.length === 0" class="no-data">No pending requests</p>
        
        <div class="add-request">
          <h4>Manually Add Request</h4>
          <div class="form-row">
            <input v-model="newRequest.amount" type="number" placeholder="Amount">
            <input v-model="newRequest.buyerName" placeholder="Buyer Name">
            <input v-model="newRequest.buyerWhatsApp" placeholder="WhatsApp">
            <input v-model="newRequest.recipientName" placeholder="Recipient Name">
            <button @click="addManualRequest" class="btn-primary">Add</button>
          </div>
        </div>
      </div>

      <!-- Redemption Log -->
      <div v-if="activeTab === 'redemptions'" class="redemptions-list">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Card Code</th>
              <th>Amount Used</th>
              <th>Used For</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(log, index) in redemptionLog" :key="index">
              <td>{{ formatDate(log.date) }}</td>
              <td class="code">{{ log.cardCode }}</td>
              <td>IDR {{ formatNumber(log.amount) }}</td>
              <td>{{ log.usedFor }}</td>
              <td>{{ log.notes || '-' }}</td>
            </tr>
          </tbody>
        </table>
        
        <p v-if="redemptionLog.length === 0" class="no-data">No redemptions yet</p>
      </div>
    </div>

    <!-- New Card Modal -->
    <div v-if="showNewCard" class="modal-overlay" @click.self="showNewCard = false">
      <div class="modal">
        <h2>Issue New Gift Card</h2>
        <div class="form-group">
          <label>Amount (IDR) *</label>
          <input type="number" v-model="newCard.amount" min="750000" step="50000">
        </div>
        <div class="form-group">
          <label>Recipient Name *</label>
          <input type="text" v-model="newCard.recipientName">
        </div>
        <div class="form-group">
          <label>Buyer Name *</label>
          <input type="text" v-model="newCard.buyerName">
        </div>
        <div class="form-group">
          <label>Buyer Contact</label>
          <input type="text" v-model="newCard.buyerContact">
        </div>
        <div class="form-group">
          <label>Personal Message</label>
          <textarea v-model="newCard.message" rows="2"></textarea>
        </div>
        <div class="form-group">
          <label>Notes (internal)</label>
          <input type="text" v-model="newCard.notes">
        </div>
        <div class="modal-actions">
          <button @click="showNewCard = false" class="btn-secondary">Cancel</button>
          <button @click="issueCard" class="btn-primary">Issue Card</button>
        </div>
      </div>
    </div>

    <!-- Redeem Modal -->
    <div v-if="showRedeemModal" class="modal-overlay" @click.self="showRedeemModal = false">
      <div class="modal">
        <h2>Record Redemption</h2>
        <p class="modal-info">Card: <strong>{{ redeemCard?.code }}</strong> — Balance: <strong>IDR {{ formatNumber(redeemCard?.balance) }}</strong></p>
        <div class="form-group">
          <label>Amount to Redeem (IDR) *</label>
          <input type="number" v-model="redemption.amount" :max="redeemCard?.balance">
        </div>
        <div class="form-group">
          <label>Used For *</label>
          <select v-model="redemption.usedFor">
            <option value="">Select...</option>
            <option value="Outdoor Cinema">Outdoor Cinema</option>
            <option value="Weekly Volleyball">Weekly Volleyball</option>
            <option value="BBQ Night">BBQ Night</option>
            <option value="Samovar Tea">Samovar Tea Ceremony</option>
            <option value="Cashew Jam Class">Cashew Jam Class</option>
            <option value="Little Farmer">Little Farmer</option>
            <option value="Noni's Café">Noni's Café</option>
            <option value="Farm Shop">Farm Shop</option>
            <option value="Farmstay Credit">Farmstay Credit</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Notes</label>
          <input type="text" v-model="redemption.notes" placeholder="Optional details">
        </div>
        <div class="modal-actions">
          <button @click="showRedeemModal = false" class="btn-secondary">Cancel</button>
          <button @click="recordRedemption" class="btn-primary">Record Redemption</button>
        </div>
      </div>
    </div>

    <!-- View Card Modal -->
    <div v-if="viewingCard" class="modal-overlay" @click.self="viewingCard = null">
      <div class="modal card-detail">
        <h2>Gift Card Details</h2>
        <div class="card-preview">
          <div class="card-code">{{ viewingCard.code }}</div>
          <div class="card-amount">IDR {{ formatNumber(viewingCard.originalAmount) }}</div>
          <div class="card-recipient">For: {{ viewingCard.recipientName }}</div>
          <div class="card-message" v-if="viewingCard.message">"{{ viewingCard.message }}"</div>
        </div>
        <div class="card-info">
          <p><strong>Balance:</strong> IDR {{ formatNumber(viewingCard.balance) }}</p>
          <p><strong>Buyer:</strong> {{ viewingCard.buyerName }} ({{ viewingCard.buyerContact || 'N/A' }})</p>
          <p><strong>Issued:</strong> {{ formatDate(viewingCard.issuedDate) }}</p>
          <p><strong>Expires:</strong> {{ formatDate(viewingCard.expiryDate) }}</p>
          <p v-if="viewingCard.notes"><strong>Notes:</strong> {{ viewingCard.notes }}</p>
        </div>
        <div class="card-history">
          <h4>Redemption History</h4>
          <ul v-if="getCardRedemptions(viewingCard.code).length">
            <li v-for="r in getCardRedemptions(viewingCard.code)" :key="r.date">
              {{ formatDate(r.date) }} — IDR {{ formatNumber(r.amount) }} ({{ r.usedFor }})
            </li>
          </ul>
          <p v-else class="no-data">No redemptions yet</p>
        </div>
        <button @click="viewingCard = null" class="btn-primary" style="width: 100%;">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

useHead({ title: 'Gift Card Admin | Mawun Valley Farm' })

// Simple auth
const authenticated = ref(false)
const password = ref('')
const authError = ref(false)
const ADMIN_PASS = 'mawun2024' // Simple password - change as needed

const authenticate = () => {
  if (password.value === ADMIN_PASS) {
    authenticated.value = true
    authError.value = false
  } else {
    authError.value = true
  }
}

// Data
const giftCards = ref([])
const pendingRequests = ref([])
const redemptionLog = ref([])
const activeTab = ref('cards')
const searchQuery = ref('')

// Modals
const showNewCard = ref(false)
const showRedeemModal = ref(false)
const redeemCard = ref(null)
const viewingCard = ref(null)

const newCard = ref({
  amount: 750000,
  recipientName: '',
  buyerName: '',
  buyerContact: '',
  message: '',
  notes: ''
})

const redemption = ref({
  amount: 0,
  usedFor: '',
  notes: ''
})

const newRequest = ref({
  amount: '',
  buyerName: '',
  buyerWhatsApp: '',
  recipientName: ''
})

// Load data from localStorage
onMounted(() => {
  const savedCards = localStorage.getItem('mawun_gift_cards')
  const savedRequests = localStorage.getItem('mawun_gift_requests')
  const savedRedemptions = localStorage.getItem('mawun_redemptions')
  
  if (savedCards) giftCards.value = JSON.parse(savedCards)
  if (savedRequests) pendingRequests.value = JSON.parse(savedRequests)
  if (savedRedemptions) redemptionLog.value = JSON.parse(savedRedemptions)
})

// Save to localStorage
const saveData = () => {
  localStorage.setItem('mawun_gift_cards', JSON.stringify(giftCards.value))
  localStorage.setItem('mawun_gift_requests', JSON.stringify(pendingRequests.value))
  localStorage.setItem('mawun_redemptions', JSON.stringify(redemptionLog.value))
}

// Computed
const activeCards = computed(() => 
  giftCards.value.filter(c => c.balance > 0 && !isExpired(c))
)

const totalValue = computed(() => 
  giftCards.value.reduce((sum, c) => sum + c.originalAmount, 0)
)

const remainingValue = computed(() => 
  giftCards.value.filter(c => !isExpired(c)).reduce((sum, c) => sum + c.balance, 0)
)

const filteredCards = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return giftCards.value.filter(c => 
    c.code.toLowerCase().includes(q) ||
    c.recipientName.toLowerCase().includes(q) ||
    c.buyerName.toLowerCase().includes(q)
  ).sort((a, b) => new Date(b.issuedDate) - new Date(a.issuedDate))
})

// Methods
const generateCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'MV-'
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

const formatNumber = (num) => new Intl.NumberFormat('id-ID').format(num)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  })
}

const isExpired = (card) => new Date(card.expiryDate) < new Date()

const getStatus = (card) => {
  if (isExpired(card)) return 'Expired'
  if (card.balance === 0) return 'Depleted'
  if (card.balance < card.originalAmount) return 'Partial'
  return 'Active'
}

const getStatusClass = (card) => {
  const status = getStatus(card)
  return status.toLowerCase()
}

const issueCard = () => {
  const card = {
    code: generateCode(),
    originalAmount: newCard.value.amount,
    balance: newCard.value.amount,
    recipientName: newCard.value.recipientName,
    buyerName: newCard.value.buyerName,
    buyerContact: newCard.value.buyerContact,
    message: newCard.value.message,
    notes: newCard.value.notes,
    issuedDate: new Date().toISOString(),
    expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
  }
  
  giftCards.value.push(card)
  saveData()
  
  // Reset form
  newCard.value = { amount: 750000, recipientName: '', buyerName: '', buyerContact: '', message: '', notes: '' }
  showNewCard.value = false
  
  alert(`Gift card issued!\n\nCode: ${card.code}\nAmount: IDR ${formatNumber(card.originalAmount)}`)
}

const openRedeemModal = (card) => {
  redeemCard.value = card
  redemption.value = { amount: card.balance, usedFor: '', notes: '' }
  showRedeemModal.value = true
}

const recordRedemption = () => {
  if (!redemption.value.amount || !redemption.value.usedFor) return
  if (redemption.value.amount > redeemCard.value.balance) {
    alert('Amount exceeds balance!')
    return
  }
  
  // Update card balance
  const cardIndex = giftCards.value.findIndex(c => c.code === redeemCard.value.code)
  if (cardIndex >= 0) {
    giftCards.value[cardIndex].balance -= redemption.value.amount
  }
  
  // Add to log
  redemptionLog.value.push({
    date: new Date().toISOString(),
    cardCode: redeemCard.value.code,
    amount: redemption.value.amount,
    usedFor: redemption.value.usedFor,
    notes: redemption.value.notes
  })
  
  saveData()
  showRedeemModal.value = false
  redeemCard.value = null
}

const viewCard = (card) => {
  viewingCard.value = card
}

const getCardRedemptions = (code) => {
  return redemptionLog.value.filter(r => r.cardCode === code)
}

const addManualRequest = () => {
  if (!newRequest.value.amount || !newRequest.value.buyerName) return
  
  pendingRequests.value.push({
    ...newRequest.value,
    amount: parseInt(newRequest.value.amount),
    date: new Date().toISOString()
  })
  
  saveData()
  newRequest.value = { amount: '', buyerName: '', buyerWhatsApp: '', recipientName: '' }
}

const issueFromRequest = (req, index) => {
  newCard.value = {
    amount: req.amount,
    recipientName: req.recipientName || req.buyerName,
    buyerName: req.buyerName,
    buyerContact: req.buyerWhatsApp,
    message: req.message || '',
    notes: ''
  }
  pendingRequests.value.splice(index, 1)
  saveData()
  showNewCard.value = true
}

const dismissRequest = (index) => {
  pendingRequests.value.splice(index, 1)
  saveData()
}

const exportData = () => {
  const data = {
    giftCards: giftCards.value,
    pendingRequests: pendingRequests.value,
    redemptionLog: redemptionLog.value,
    exportedAt: new Date().toISOString()
  }
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `mawun-giftcards-${new Date().toISOString().split('T')[0]}.json`
  a.click()
}

const importData = (e) => {
  const file = e.target.files[0]
  if (!file) return
  
  const reader = new FileReader()
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result)
      if (data.giftCards) giftCards.value = data.giftCards
      if (data.pendingRequests) pendingRequests.value = data.pendingRequests
      if (data.redemptionLog) redemptionLog.value = data.redemptionLog
      saveData()
      alert('Data imported successfully!')
    } catch (err) {
      alert('Invalid file format')
    }
  }
  reader.readAsText(file)
}
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background: #f5f5f5;
}

/* Auth */
.auth-gate {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.auth-box {
  background: white;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.auth-box h1 { margin-bottom: 8px; }
.auth-box p { color: #666; margin-bottom: 20px; }
.auth-box input {
  padding: 14px;
  border: 2px solid #ddd;
  border-radius: 8px;
  width: 250px;
  margin-bottom: 16px;
  font-size: 16px;
  display: block;
}

.error { color: #c62828; margin-top: 12px; }

/* Dashboard */
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 16px;
}

.admin-header h1 { margin: 0; }

.header-actions {
  display: flex;
  gap: 12px;
}

/* Buttons */
.btn-primary {
  background: #D4A574;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover { background: #c17f59; }

.btn-secondary {
  background: white;
  color: #333;
  border: 1px solid #ddd;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 13px;
}

.btn-outline {
  background: none;
  border: 1px solid #ddd;
  color: #666;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #D4A574;
}

.stat-label {
  color: #666;
  font-size: 14px;
  margin-top: 4px;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.tabs button {
  padding: 12px 24px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}

.tabs button.active {
  background: #D4A574;
  color: white;
}

/* Search */
.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  padding: 14px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 15px;
}

/* Table */
table {
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border-collapse: collapse;
}

th, td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background: #fafafa;
  font-weight: 600;
  font-size: 13px;
  color: #666;
}

.code {
  font-family: monospace;
  font-weight: 600;
  color: #D4A574;
}

.balance {
  font-weight: 600;
}

tr.expired { opacity: 0.5; }
tr.depleted td { color: #999; }

.status {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.status.active { background: #E8F5E9; color: #2E7D32; }
.status.partial { background: #FFF3E0; color: #E65100; }
.status.depleted { background: #ECEFF1; color: #607D8B; }
.status.expired { background: #FFEBEE; color: #C62828; }

.actions {
  display: flex;
  gap: 8px;
}

.no-data {
  text-align: center;
  color: #999;
  padding: 40px;
}

/* Requests */
.info-text {
  background: #E3F2FD;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #1565C0;
}

.request-cards {
  display: grid;
  gap: 16px;
}

.request-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
}

.request-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.request-date { color: #999; font-size: 13px; }

.request-card p { margin: 6px 0; font-size: 14px; }

.request-actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.add-request {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-top: 24px;
}

.add-request h4 { margin-bottom: 16px; }

.form-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.form-row input {
  flex: 1;
  min-width: 120px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: white;
  padding: 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal h2 { margin-bottom: 20px; }

.modal-info {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 14px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 15px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.modal-actions button { flex: 1; }

/* Card Preview */
.card-detail .card-preview {
  background: linear-gradient(135deg, #D4A574, #c17f59);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 20px;
}

.card-code {
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.card-amount {
  font-size: 2rem;
  font-weight: 700;
  margin: 12px 0;
}

.card-recipient { opacity: 0.9; }
.card-message { font-style: italic; margin-top: 12px; opacity: 0.85; }

.card-info {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.card-info p { margin: 8px 0; font-size: 14px; }

.card-history h4 { margin-bottom: 12px; }
.card-history ul { padding-left: 20px; }
.card-history li { margin: 6px 0; font-size: 14px; }

.import-btn {
  cursor: pointer;
}

@media (max-width: 768px) {
  table { font-size: 13px; }
  th, td { padding: 10px 8px; }
  .actions { flex-direction: column; }
}
</style>
