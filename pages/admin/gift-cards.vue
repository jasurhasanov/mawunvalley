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
          <button @click="exportData" class="btn-secondary">Export</button>
          <label class="btn-secondary import-btn">
            Import
            <input type="file" @change="importData" accept=".json" hidden>
          </label>
        </div>
      </header>

      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">{{ newRequests.length }}</div>
          <div class="stat-label">New Requests</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ pendingPayment.length }}</div>
          <div class="stat-label">Pending Payment</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ activeCards.length }}</div>
          <div class="stat-label">Active Cards</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">IDR {{ formatNumber(remainingValue) }}</div>
          <div class="stat-label">Outstanding Balance</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button :class="{ active: activeTab === 'requests' }" @click="activeTab = 'requests'">
          Requests <span v-if="newRequests.length" class="badge">{{ newRequests.length }}</span>
        </button>
        <button :class="{ active: activeTab === 'cards' }" @click="activeTab = 'cards'">Gift Cards</button>
        <button :class="{ active: activeTab === 'redemptions' }" @click="activeTab = 'redemptions'">Redemptions</button>
      </div>

      <!-- Requests Tab -->
      <div v-if="activeTab === 'requests'" class="tab-content">
        <div class="section-header">
          <h3>All Requests</h3>
          <button @click="showNewRequest = true" class="btn-primary btn-sm">+ Add Request</button>
        </div>

        <div class="status-filters">
          <button 
            v-for="s in requestStatuses" 
            :key="s.value"
            :class="{ active: requestFilter === s.value }"
            @click="requestFilter = s.value"
          >
            {{ s.label }} ({{ getRequestCountByStatus(s.value) }})
          </button>
        </div>

        <div class="requests-list">
          <div v-for="req in filteredRequests" :key="req.id" class="request-card" :class="req.status">
            <div class="request-top">
              <div class="request-amount">IDR {{ formatNumber(req.amount) }}</div>
              <div class="request-status-badge" :class="req.status">{{ getStatusLabel(req.status) }}</div>
            </div>
            
            <div class="request-details">
              <p><strong>Buyer:</strong> {{ req.buyerName }}</p>
              <p><strong>Contact:</strong> {{ req.buyerWhatsApp || req.buyerEmail || '-' }}</p>
              <p><strong>Recipient:</strong> {{ req.recipientName }}</p>
              <p><strong>Delivery:</strong> {{ req.deliveryMethod || '-' }}</p>
              <p v-if="req.message"><strong>Message:</strong> "{{ req.message }}"</p>
              <p class="request-date">{{ formatDateTime(req.createdAt) }}</p>
            </div>

            <div class="request-actions">
              <template v-if="req.status === 'new'">
                <button @click="updateRequestStatus(req, 'pending_payment')" class="btn-sm btn-primary">Pending Payment</button>
                <button @click="updateRequestStatus(req, 'cancelled')" class="btn-sm btn-outline">Cancel</button>
              </template>
              <template v-else-if="req.status === 'pending_payment'">
                <button @click="markPaidAndIssue(req)" class="btn-sm btn-primary">Paid → Issue Card</button>
                <button @click="updateRequestStatus(req, 'cancelled')" class="btn-sm btn-outline">Cancel</button>
              </template>
              <template v-else-if="req.status === 'paid'">
                <button @click="issueFromRequest(req)" class="btn-sm btn-primary">Issue Card</button>
              </template>
              <template v-else-if="req.status === 'issued'">
                <span class="issued-info">{{ req.cardCode }}</span>
              </template>
              <button v-if="req.status === 'cancelled'" @click="deleteRequest(req)" class="btn-sm btn-outline">Delete</button>
            </div>
          </div>
          <p v-if="filteredRequests.length === 0" class="no-data">No requests found</p>
        </div>
      </div>

      <!-- Gift Cards Tab -->
      <div v-if="activeTab === 'cards'" class="tab-content">
        <div class="section-header">
          <h3>All Gift Cards</h3>
          <button @click="showNewCard = true" class="btn-primary btn-sm">+ Issue Card</button>
        </div>

        <div class="status-filters">
          <button 
            v-for="s in cardStatuses" 
            :key="s.value"
            :class="{ active: cardFilter === s.value }"
            @click="cardFilter = s.value"
          >
            {{ s.label }} ({{ getCardCountByStatus(s.value) }})
          </button>
        </div>

        <div class="search-bar">
          <input v-model="searchQuery" placeholder="Search by code, name...">
        </div>

        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Expires</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="card in filteredCards" :key="card.code" :class="getCardStatusClass(card)">
              <td class="code">{{ card.code }}</td>
              <td>{{ card.recipientName }}</td>
              <td>IDR {{ formatNumber(card.originalAmount) }}</td>
              <td class="balance">IDR {{ formatNumber(card.balance) }}</td>
              <td><span class="status-badge" :class="getCardStatusClass(card)">{{ getCardStatus(card) }}</span></td>
              <td>{{ formatDate(card.expiryDate) }}</td>
              <td class="actions">
                <button @click="openRedeemModal(card)" class="btn-sm" :disabled="card.balance === 0 || isExpired(card)">Redeem</button>
                <button @click="viewCard(card)" class="btn-sm btn-outline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="filteredCards.length === 0" class="no-data">No cards found</p>
      </div>

      <!-- Redemptions Tab -->
      <div v-if="activeTab === 'redemptions'" class="tab-content">
        <h3>Redemption History</h3>
        <table>
          <thead>
            <tr><th>Date</th><th>Code</th><th>Amount</th><th>Used For</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr v-for="(log, i) in redemptionLog" :key="i">
              <td>{{ formatDateTime(log.date) }}</td>
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

    <!-- Add Request Modal -->
    <div v-if="showNewRequest" class="modal-overlay" @click.self="showNewRequest = false">
      <div class="modal">
        <h2>Add Request</h2>
        <div class="form-group"><label>Amount *</label><input type="number" v-model="newRequest.amount" min="750000"></div>
        <div class="form-group"><label>Buyer Name *</label><input v-model="newRequest.buyerName"></div>
        <div class="form-group"><label>WhatsApp</label><input v-model="newRequest.buyerWhatsApp"></div>
        <div class="form-group"><label>Email</label><input v-model="newRequest.buyerEmail"></div>
        <div class="form-group"><label>Recipient *</label><input v-model="newRequest.recipientName"></div>
        <div class="form-group"><label>Delivery</label>
          <select v-model="newRequest.deliveryMethod">
            <option value="">Select...</option>
            <option value="whatsapp-recipient">WhatsApp to recipient</option>
            <option value="whatsapp-buyer">WhatsApp to buyer</option>
            <option value="email-recipient">Email to recipient</option>
            <option value="email-buyer">Email to buyer</option>
            <option value="physical">Physical (collect at farm)</option>
          </select>
        </div>
        <div class="form-group"><label>Message</label><textarea v-model="newRequest.message" rows="2"></textarea></div>
        <div class="modal-actions">
          <button @click="showNewRequest = false" class="btn-secondary">Cancel</button>
          <button @click="addRequest" class="btn-primary">Add</button>
        </div>
      </div>
    </div>

    <!-- Issue Card Modal -->
    <div v-if="showNewCard" class="modal-overlay" @click.self="closeNewCardModal">
      <div class="modal">
        <h2>Issue Gift Card</h2>
        <div class="form-group"><label>Amount *</label><input type="number" v-model="newCard.amount" min="750000"></div>
        <div class="form-group"><label>Recipient *</label><input v-model="newCard.recipientName"></div>
        <div class="form-group"><label>Buyer *</label><input v-model="newCard.buyerName"></div>
        <div class="form-group"><label>Contact</label><input v-model="newCard.buyerContact"></div>
        <div class="form-group"><label>Message</label><textarea v-model="newCard.message" rows="2"></textarea></div>
        <div class="form-group"><label>Notes</label><input v-model="newCard.notes"></div>
        <div class="modal-actions">
          <button @click="closeNewCardModal" class="btn-secondary">Cancel</button>
          <button @click="issueCard" class="btn-primary">Issue</button>
        </div>
      </div>
    </div>

    <!-- Redeem Modal -->
    <div v-if="showRedeemModal" class="modal-overlay" @click.self="showRedeemModal = false">
      <div class="modal">
        <h2>Record Redemption</h2>
        <p class="modal-info">{{ redeemCard?.code }} — Balance: IDR {{ formatNumber(redeemCard?.balance) }}</p>
        <div class="form-group"><label>Amount *</label><input type="number" v-model="redemption.amount" :max="redeemCard?.balance"></div>
        <div class="form-group"><label>Used For *</label>
          <select v-model="redemption.usedFor">
            <option value="">Select...</option>
            <option value="Outdoor Cinema">Outdoor Cinema</option>
            <option value="Volleyball">Volleyball</option>
            <option value="BBQ Night">BBQ Night</option>
            <option value="Samovar Tea">Samovar Tea</option>
            <option value="Cashew Jam">Cashew Jam Class</option>
            <option value="Little Roots">Little Roots</option>
            <option value="Cafe">Noni's Café</option>
            <option value="Farm Shop">Farm Shop</option>
            <option value="Farmstay">Farmstay</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group"><label>Notes</label><input v-model="redemption.notes"></div>
        <div class="modal-actions">
          <button @click="showRedeemModal = false" class="btn-secondary">Cancel</button>
          <button @click="recordRedemption" class="btn-primary">Record</button>
        </div>
      </div>
    </div>

    <!-- View Card Modal -->
    <div v-if="viewingCard" class="modal-overlay" @click.self="viewingCard = null">
      <div class="modal">
        <div class="card-preview">
          <div class="card-code">{{ viewingCard.code }}</div>
          <div class="card-amount">IDR {{ formatNumber(viewingCard.originalAmount) }}</div>
          <div>For: {{ viewingCard.recipientName }}</div>
        </div>
        <div class="card-info">
          <p><strong>Status:</strong> {{ getCardStatus(viewingCard) }}</p>
          <p><strong>Balance:</strong> IDR {{ formatNumber(viewingCard.balance) }}</p>
          <p><strong>Buyer:</strong> {{ viewingCard.buyerName }}</p>
          <p><strong>Expires:</strong> {{ formatDate(viewingCard.expiryDate) }}</p>
        </div>
        <h4>Redemptions</h4>
        <ul v-if="getCardRedemptions(viewingCard.code).length">
          <li v-for="r in getCardRedemptions(viewingCard.code)" :key="r.date">
            {{ formatDate(r.date) }} — IDR {{ formatNumber(r.amount) }} ({{ r.usedFor }})
          </li>
        </ul>
        <p v-else class="no-data">No redemptions</p>
        <button @click="viewingCard = null" class="btn-primary" style="width:100%;margin-top:20px">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

useHead({ title: 'Gift Card Admin | Mawun Valley' })

const authenticated = ref(false)
const password = ref('')
const authError = ref(false)

const authenticate = () => {
  if (password.value === 'mawun2024') {
    authenticated.value = true
  } else {
    authError.value = true
  }
}

const requests = ref([])
const giftCards = ref([])
const redemptionLog = ref([])
const activeTab = ref('requests')
const searchQuery = ref('')
const requestFilter = ref('all')
const cardFilter = ref('all')

const requestStatuses = [
  { value: 'all', label: 'All' },
  { value: 'new', label: 'New' },
  { value: 'pending_payment', label: 'Pending' },
  { value: 'paid', label: 'Paid' },
  { value: 'issued', label: 'Issued' },
  { value: 'cancelled', label: 'Cancelled' }
]

const cardStatuses = [
  { value: 'all', label: 'All' },
  { value: 'unused', label: 'Unused' },
  { value: 'partial', label: 'Partial' },
  { value: 'depleted', label: 'Used' },
  { value: 'expired', label: 'Expired' }
]

const showNewRequest = ref(false)
const showNewCard = ref(false)
const showRedeemModal = ref(false)
const redeemCard = ref(null)
const viewingCard = ref(null)
const issuingFromRequest = ref(null)

const newRequest = ref({ amount: 750000, buyerName: '', buyerWhatsApp: '', buyerEmail: '', recipientName: '', deliveryMethod: '', message: '' })
const newCard = ref({ amount: 750000, recipientName: '', buyerName: '', buyerContact: '', message: '', notes: '' })
const redemption = ref({ amount: 0, usedFor: '', notes: '' })

onMounted(() => {
  const r = localStorage.getItem('mawun_requests')
  const c = localStorage.getItem('mawun_gift_cards')
  const l = localStorage.getItem('mawun_redemptions')
  if (r) requests.value = JSON.parse(r)
  if (c) giftCards.value = JSON.parse(c)
  if (l) redemptionLog.value = JSON.parse(l)
})

const saveData = () => {
  localStorage.setItem('mawun_requests', JSON.stringify(requests.value))
  localStorage.setItem('mawun_gift_cards', JSON.stringify(giftCards.value))
  localStorage.setItem('mawun_redemptions', JSON.stringify(redemptionLog.value))
}

const newRequests = computed(() => requests.value.filter(r => r.status === 'new'))
const pendingPayment = computed(() => requests.value.filter(r => r.status === 'pending_payment'))
const activeCards = computed(() => giftCards.value.filter(c => c.balance > 0 && !isExpired(c)))
const remainingValue = computed(() => giftCards.value.filter(c => !isExpired(c)).reduce((s, c) => s + c.balance, 0))

const filteredRequests = computed(() => {
  let f = requests.value
  if (requestFilter.value !== 'all') f = f.filter(r => r.status === requestFilter.value)
  return f.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

const filteredCards = computed(() => {
  let f = giftCards.value
  if (cardFilter.value !== 'all') f = f.filter(c => getCardStatusValue(c) === cardFilter.value)
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    f = f.filter(c => c.code.toLowerCase().includes(q) || c.recipientName.toLowerCase().includes(q))
  }
  return f.sort((a, b) => new Date(b.issuedDate) - new Date(a.issuedDate))
})

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2)
const generateCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'MV-'
  for (let i = 0; i < 8; i++) code += chars.charAt(Math.floor(Math.random() * chars.length))
  return code
}

const formatNumber = (n) => new Intl.NumberFormat('id-ID').format(n)
const formatDate = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
const formatDateTime = (d) => new Date(d).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
const isExpired = (c) => new Date(c.expiryDate) < new Date()

const getStatusLabel = (s) => ({ new: 'New', pending_payment: 'Pending Payment', paid: 'Paid', issued: 'Issued', cancelled: 'Cancelled' }[s] || s)
const getCardStatusValue = (c) => {
  if (isExpired(c)) return 'expired'
  if (c.balance === 0) return 'depleted'
  if (c.balance < c.originalAmount) return 'partial'
  return 'unused'
}
const getCardStatus = (c) => ({ unused: 'Unused', partial: 'Partial', depleted: 'Fully Used', expired: 'Expired' }[getCardStatusValue(c)])
const getCardStatusClass = (c) => getCardStatusValue(c)
const getRequestCountByStatus = (s) => s === 'all' ? requests.value.length : requests.value.filter(r => r.status === s).length
const getCardCountByStatus = (s) => s === 'all' ? giftCards.value.length : giftCards.value.filter(c => getCardStatusValue(c) === s).length

const addRequest = () => {
  if (!newRequest.value.amount || !newRequest.value.buyerName || !newRequest.value.recipientName) return alert('Fill required fields')
  requests.value.push({ id: generateId(), ...newRequest.value, status: 'new', createdAt: new Date().toISOString() })
  saveData()
  showNewRequest.value = false
  newRequest.value = { amount: 750000, buyerName: '', buyerWhatsApp: '', buyerEmail: '', recipientName: '', deliveryMethod: '', message: '' }
}

const updateRequestStatus = (req, status) => {
  const i = requests.value.findIndex(r => r.id === req.id)
  if (i >= 0) { requests.value[i].status = status; saveData() }
}

const markPaidAndIssue = (req) => { updateRequestStatus(req, 'paid'); issueFromRequest(req) }

const issueFromRequest = (req) => {
  issuingFromRequest.value = req
  newCard.value = { amount: req.amount, recipientName: req.recipientName, buyerName: req.buyerName, buyerContact: req.buyerWhatsApp || req.buyerEmail, message: req.message, notes: '' }
  showNewCard.value = true
}

const deleteRequest = (req) => { requests.value = requests.value.filter(r => r.id !== req.id); saveData() }

const issueCard = () => {
  if (!newCard.value.amount || !newCard.value.recipientName || !newCard.value.buyerName) return alert('Fill required fields')
  const code = generateCode()
  giftCards.value.push({
    code, originalAmount: newCard.value.amount, balance: newCard.value.amount,
    recipientName: newCard.value.recipientName, buyerName: newCard.value.buyerName,
    buyerContact: newCard.value.buyerContact, message: newCard.value.message, notes: newCard.value.notes,
    issuedDate: new Date().toISOString(), expiryDate: new Date(Date.now() + 365*24*60*60*1000).toISOString()
  })
  if (issuingFromRequest.value) {
    const i = requests.value.findIndex(r => r.id === issuingFromRequest.value.id)
    if (i >= 0) { requests.value[i].status = 'issued'; requests.value[i].cardCode = code }
    issuingFromRequest.value = null
  }
  saveData()
  closeNewCardModal()
  alert('Card Issued: ' + code)
}

const closeNewCardModal = () => {
  showNewCard.value = false
  issuingFromRequest.value = null
  newCard.value = { amount: 750000, recipientName: '', buyerName: '', buyerContact: '', message: '', notes: '' }
}

const openRedeemModal = (c) => { redeemCard.value = c; redemption.value = { amount: c.balance, usedFor: '', notes: '' }; showRedeemModal.value = true }

const recordRedemption = () => {
  if (!redemption.value.amount || !redemption.value.usedFor) return
  if (redemption.value.amount > redeemCard.value.balance) return alert('Exceeds balance')
  const i = giftCards.value.findIndex(c => c.code === redeemCard.value.code)
  if (i >= 0) giftCards.value[i].balance -= redemption.value.amount
  redemptionLog.value.unshift({ date: new Date().toISOString(), cardCode: redeemCard.value.code, amount: redemption.value.amount, usedFor: redemption.value.usedFor, notes: redemption.value.notes })
  saveData()
  showRedeemModal.value = false
}

const viewCard = (c) => { viewingCard.value = c }
const getCardRedemptions = (code) => redemptionLog.value.filter(r => r.cardCode === code)

const exportData = () => {
  const blob = new Blob([JSON.stringify({ requests: requests.value, giftCards: giftCards.value, redemptionLog: redemptionLog.value }, null, 2)], { type: 'application/json' })
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'giftcards.json'; a.click()
}

const importData = (e) => {
  const file = e.target.files[0]; if (!file) return
  const reader = new FileReader()
  reader.onload = (ev) => {
    try {
      const d = JSON.parse(ev.target.result)
      if (d.requests) requests.value = d.requests
      if (d.giftCards) giftCards.value = d.giftCards
      if (d.redemptionLog) redemptionLog.value = d.redemptionLog
      saveData(); alert('Imported!')
    } catch { alert('Invalid file') }
  }
  reader.readAsText(file)
}
</script>

<style scoped>
.admin-page { min-height: 100vh; background: #f5f5f5; }
.auth-gate { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
.auth-box { background: white; padding: 40px; border-radius: 16px; text-align: center; }
.auth-box input { padding: 14px; border: 2px solid #ddd; border-radius: 8px; width: 250px; margin-bottom: 16px; display: block; }
.error { color: #c62828; margin-top: 12px; }
.dashboard { max-width: 1100px; margin: 0 auto; padding: 30px 20px; }
.admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; flex-wrap: wrap; gap: 16px; }
.header-actions { display: flex; gap: 12px; }
.btn-primary { background: #D4A574; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; }
.btn-primary:hover { background: #c17f59; }
.btn-primary:disabled { opacity: 0.5; }
.btn-secondary { background: white; color: #333; border: 1px solid #ddd; padding: 12px 24px; border-radius: 8px; cursor: pointer; }
.btn-sm { padding: 8px 14px; font-size: 13px; }
.btn-outline { background: none; border: 1px solid #ddd; color: #666; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-bottom: 30px; }
.stat-card { background: white; padding: 20px; border-radius: 12px; text-align: center; }
.stat-value { font-size: 1.5rem; font-weight: 700; color: #D4A574; }
.stat-label { color: #666; font-size: 13px; }
.tabs { display: flex; gap: 8px; margin-bottom: 24px; }
.tabs button { padding: 12px 24px; border: none; background: white; border-radius: 8px; cursor: pointer; font-weight: 500; }
.tabs button.active { background: #D4A574; color: white; }
.badge { background: #c62828; color: white; padding: 2px 8px; border-radius: 10px; font-size: 12px; margin-left: 6px; }
.tabs button.active .badge { background: white; color: #D4A574; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.status-filters { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.status-filters button { padding: 8px 16px; border: 1px solid #ddd; background: white; border-radius: 20px; font-size: 13px; cursor: pointer; }
.status-filters button.active { background: #333; color: white; border-color: #333; }
.requests-list { display: grid; gap: 16px; }
.request-card { background: white; padding: 20px; border-radius: 12px; border-left: 4px solid #ddd; }
.request-card.new { border-left-color: #2196F3; }
.request-card.pending_payment { border-left-color: #FF9800; }
.request-card.paid { border-left-color: #4CAF50; }
.request-card.issued { border-left-color: #9C27B0; }
.request-card.cancelled { border-left-color: #9E9E9E; opacity: 0.7; }
.request-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.request-amount { font-size: 1.3rem; font-weight: 700; }
.request-status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
.request-status-badge.new { background: #E3F2FD; color: #1565C0; }
.request-status-badge.pending_payment { background: #FFF3E0; color: #E65100; }
.request-status-badge.paid { background: #E8F5E9; color: #2E7D32; }
.request-status-badge.issued { background: #F3E5F5; color: #7B1FA2; }
.request-status-badge.cancelled { background: #ECEFF1; color: #607D8B; }
.request-details p { margin: 6px 0; font-size: 14px; color: #555; }
.request-date { font-size: 12px !important; color: #999 !important; }
.request-actions { display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
.issued-info { font-family: monospace; background: #F3E5F5; padding: 6px 12px; border-radius: 6px; font-weight: 600; color: #7B1FA2; }
.search-bar { margin-bottom: 20px; }
.search-bar input { width: 100%; padding: 14px; border: 2px solid #eee; border-radius: 8px; }
table { width: 100%; background: white; border-radius: 12px; overflow: hidden; border-collapse: collapse; }
th, td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #eee; }
th { background: #fafafa; font-weight: 600; font-size: 13px; color: #666; }
.code { font-family: monospace; font-weight: 600; color: #D4A574; }
.balance { font-weight: 600; }
tr.expired { opacity: 0.5; }
tr.depleted td { color: #999; }
.status-badge { padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; }
.status-badge.unused { background: #E8F5E9; color: #2E7D32; }
.status-badge.partial { background: #FFF3E0; color: #E65100; }
.status-badge.depleted { background: #ECEFF1; color: #607D8B; }
.status-badge.expired { background: #FFEBEE; color: #C62828; }
.actions { display: flex; gap: 8px; }
.no-data { text-align: center; color: #999; padding: 40px; background: white; border-radius: 12px; }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
.modal { background: white; padding: 30px; border-radius: 16px; width: 100%; max-width: 450px; max-height: 90vh; overflow-y: auto; }
.modal h2 { margin-bottom: 20px; }
.modal-info { background: #f5f5f5; padding: 12px; border-radius: 8px; margin-bottom: 20px; font-weight: 600; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; margin-bottom: 6px; font-weight: 600; font-size: 14px; }
.form-group input, .form-group select, .form-group textarea { width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 8px; }
.modal-actions { display: flex; gap: 12px; margin-top: 24px; }
.modal-actions button { flex: 1; }
.card-preview { background: linear-gradient(135deg, #D4A574, #c17f59); color: white; padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 20px; }
.card-code { font-family: monospace; font-size: 1.4rem; font-weight: 700; letter-spacing: 2px; }
.card-amount { font-size: 1.8rem; font-weight: 700; margin: 8px 0; }
.card-info { background: #f9f9f9; padding: 16px; border-radius: 8px; margin-bottom: 16px; }
.card-info p { margin: 6px 0; font-size: 14px; }
.import-btn { cursor: pointer; }
@media (max-width: 768px) { table { font-size: 13px; } th, td { padding: 10px 8px; } .actions, .request-actions { flex-direction: column; } }
</style>
