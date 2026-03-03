<template>
  <div class="experience-stay-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/hero-2.jpg" alt="Mawun Valley Farm Stay & Contribute">
      </div>
      <div class="hero-content">
        <span class="section-label light">Stay & Contribute</span>
        <h1>Live the Farm Life</h1>
        <p>Join our community for 10+ days. Stay in a private cabin, share meals, and experience daily life on a permaculture farm in South Lombok.</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-number">10+</span>
            <span class="hero-stat-label">Day Minimum</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-number">$19</span>
            <span class="hero-stat-label">Per Person per Day</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-number">3 min</span>
            <span class="hero-stat-label">To Beach</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="#programs" class="btn btn-primary btn-lg">Find Your Rhythm</a>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="how-grid">
          <div class="how-item">
            <span class="how-icon">🏡</span>
            <h4>Stay</h4>
            <p>Private cabin, daily breakfast & lunch, free bikes, workspace</p>
          </div>
          <div class="how-item">
            <span class="how-icon">🌿</span>
            <h4>Get Involved</h4>
            <p>Optional ways to join in — at your own pace, when it feels right</p>
          </div>
          <div class="how-item">
            <span class="how-icon">🌴</span>
            <h4>Experience</h4>
            <p>BBQ nights, surf nearby, community, island life</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Why Travelers Choose Us -->
    <section class="trust-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Trusted by Travelers</span>
          <h2>Why People Choose Us</h2>
        </div>
        <div class="trust-grid">
          <div class="trust-card">
            <span class="trust-icon">⭐</span>
            <div class="trust-content">
              <h4>Top-Rated Host</h4>
              <p>Recognized for exceptional hospitality and consistently high guest ratings.</p>
            </div>
          </div>
          <div class="trust-card">
            <span class="trust-icon">🌱</span>
            <div class="trust-content">
              <h4>Sustainable Project</h4>
              <p>12 travelers confirmed we're actively contributing to a more sustainable future.</p>
            </div>
          </div>
          <div class="trust-card">
            <span class="trust-icon">✅</span>
            <div class="trust-content">
              <h4>High Acceptance Rate</h4>
              <p>We're actively welcoming new travelers and respond to applications quickly.</p>
            </div>
          </div>
          <div class="trust-card">
            <span class="trust-icon">🌿</span>
            <div class="trust-content">
              <h4>Connect with Nature</h4>
              <p>14 travelers recommend this experience for reconnecting with nature.</p>
            </div>
          </div>
          <div class="trust-card">
            <span class="trust-icon">🌍</span>
            <div class="trust-content">
              <h4>International Community</h4>
              <p>12 travelers recommend us for meeting people from all around the world.</p>
            </div>
          </div>
          <div class="trust-card">
            <span class="trust-icon">👫</span>
            <div class="trust-content">
              <h4>Couples Welcome</h4>
              <p>We happily accept couples and friends traveling together.</p>
            </div>
          </div>
        </div>
        <div class="trust-verify">
          <p>✓ Verified on <a href="https://www.worldpackers.com/en/hosts/mawun-valley-farm" target="_blank" rel="noopener">Worldpackers</a></p>
        </div>
      </div>
    </section>
    <!-- Programs Section -->
    <section class="programs-section" id="programs">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Ways to Get Involved</span>
          <h2>What Draws You?</h2>
          <p>There's no checklist here. Just possibilities — join in where it feels natural.</p>
        </div>

        <div class="programs-grid">
          <article class="program-card" @click="openProgram('storyteller')">
            <div class="program-image">
              <img src="/images/creative-cover.jpg" alt="The Storyteller">
              <span class="program-badge">📸 Creator</span>
            </div>
            <div class="program-info">
              <h3>The Storyteller</h3>
              <p>Love capturing moments? There's always something beautiful happening — sunsets, farm life, community dinners.</p>
              <div class="program-meta"><span>10+ days</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card" @click="openProgram('grower')">
            <div class="program-image">
              <img src="/images/slowliving-cover.jpg" alt="The Grower">
              <span class="program-badge">🌱 Nature</span>
            </div>
            <div class="program-info">
              <h3>The Grower</h3>
              <p>Curious about where food comes from? Join us in the garden when you feel like getting your hands dirty.</p>
              <div class="program-meta"><span>10+ days</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card" @click="openProgram('maker')">
            <div class="program-image">
              <img src="/images/beachside-cover.jpg" alt="The Maker">
              <span class="program-badge">🔨 Builder</span>
            </div>
            <div class="program-info">
              <h3>The Maker</h3>
              <p>Like building things? We're always creating something new — cabins, furniture, art. Jump in when inspiration strikes.</p>
              <div class="program-meta"><span>10+ days</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card" @click="openProgram('caretaker')">
            <div class="program-image">
              <img src="/images/hero-1.jpg" alt="The Caretaker">
              <span class="program-badge">💚 Nurturing</span>
            </div>
            <div class="program-info">
              <h3>The Caretaker</h3>
              <p>Our goats, ducks, and chickens would love to meet you. Help out in the kitchen if cooking brings you joy.</p>
              <div class="program-meta"><span>10+ days</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card featured" @click="openProgram('slowliving')">
            <div class="program-image">
              <img src="/images/program-1.jpg" alt="Slow Living">
              <span class="program-badge">🧘 Flexible</span>
            </div>
            <div class="program-info">
              <h3>Slow Living</h3>
              <p>Not sure yet? That's perfect. Come with no plan — try a bit of everything or nothing at all.</p>
              <div class="program-meta"><span>10+ days</span><span>$19/day</span></div>
            </div>
          </article>
        </div>

        <div class="programs-note">
          <p>✨ <strong>No pressure, no schedule.</strong> Get involved when you want, how you want. It's your stay.</p>
        </div>
      </div>
    </section>

    <!-- Program Details Modal -->
    <Teleport to="body">
      <div v-if="activeProgram" class="modal-overlay" @click.self="closeProgram">
        <div class="modal-content">
          <button class="modal-close" @click="closeProgram">✕</button>
          
          <div v-if="activeProgram === 'storyteller'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">📸 Creator</span>
              <h2>The Storyteller</h2>
              <p class="program-tagline">Capture and share the beauty of farm life.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>💰</span> US$19/person/day</div>
                <div class="info-item"><span>🌿</span> Flexible involvement</div>
              </div>
              <div class="info-box fee-highlight">
                <div class="info-item fee-item-full">
                  <span>💡</span> 
                  <span><strong>Your fee supports:</strong> Accommodation, meals, workshops, materials, and the sustainability of our newly established farm.</span>
                </div>
              </div>
              <h4>🎯 You Might Enjoy This If...</h4>
              <p>You're a photographer, videographer, writer, or content creator who finds inspiration in beautiful places and authentic experiences.</p>
              <h4>📷 Ways You Could Get Involved</h4>
              <ul>
                <li>Capture farm life, landscapes, and community moments</li>
                <li>Create videos or reels when something catches your eye</li>
                <li>Write about your experience if words are your thing</li>
                <li>Share ideas for social media — or don't, that's fine too</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">💻 Dedicated Workspace</div>
                <div class="benefit">🚲 Free Bikes</div>
                                <div class="benefit">🧺 Weekly Laundry</div>
                <div class="benefit">🏐 Volleyball Court</div>
                <div class="benefit">💧 Unlimited Water</div>
                <div class="benefit">🛏️ Housekeeping on Request</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <button v-if="!showModalForm" class="btn btn-primary btn-lg" @click="showApplicationForm('The Storyteller')">Apply Now</button>
              <div v-else class="modal-form-wrapper">
                <div class="form-note">
                  <p>📝 This is an interest form — not a confirmed booking. We'll reach out to confirm dates based on availability.</p>
                </div>
                <form @submit.prevent="submitApplication" class="application-form">
                  <div class="form-group">
                    <label>Full Name(s) *</label>
                    <input type="text" v-model="form.fullName" required placeholder="Your name (and travel companion's if applicable)">
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Number of Persons *</label>
                      <input type="number" v-model="form.persons" min="1" max="10" required>
                    </div>
                    <div class="form-group">
                      <label>Country *</label>
                      <select v-model="form.country" required>
                        <option value="">Select country</option>
                        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>WhatsApp Number *</label>
                      <input type="tel" v-model="form.whatsapp" required placeholder="+1234567890">
                    </div>
                    <div class="form-group">
                      <label>Email *</label>
                      <input type="email" v-model="form.email" required placeholder="you@example.com">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Tell us about yourself *</label>
                    <textarea v-model="form.about" required placeholder="A few sentences about you, your background, and why you're interested..."></textarea>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Expected Arrival *</label>
                      <input type="date" v-model="form.arrival" required>
                    </div>
                    <div class="form-group">
                      <label>Expected Departure *</label>
                      <input type="date" v-model="form.departure" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Program *</label>
                    <select v-model="form.program" required>
                      <option value="The Storyteller">The Storyteller</option>
                      <option value="The Grower">The Grower</option>
                      <option value="The Maker">The Maker</option>
                      <option value="The Caretaker">The Caretaker</option>
                      <option value="Slow Living">Slow Living</option>
                      <option value="Mixed">Mixed (try different things)</option>
                    </select>
                  </div>
                  <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                      <input type="checkbox" v-model="form.agreed" required>
                      <span>I have read the program details and agree to the daily fee of US$19 per person.</span>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting">
                    {{ submitting ? 'Submitting...' : 'Submit Application' }}
                  </button>
                  <p v-if="submitSuccess" class="success-msg">✅ Application submitted! We'll be in touch soon.</p>
                  <p v-if="submitError" class="error-msg">❌ Something went wrong. Please try again or contact us on WhatsApp.</p>
                </form>
              </div>
            </div>
          </div>

          <div v-if="activeProgram === 'grower'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🌱 Nature</span>
              <h2>The Grower</h2>
              <p class="program-tagline">Connect with the earth at your own pace.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>💰</span> US$19/person/day</div>
                <div class="info-item"><span>🌿</span> Flexible involvement</div>
              </div>
              <div class="info-box fee-highlight">
                <div class="info-item fee-item-full">
                  <span>💡</span> 
                  <span><strong>Your fee supports:</strong> Accommodation, meals, workshops, materials, and the sustainability of our newly established farm.</span>
                </div>
              </div>
              <h4>🎯 You Might Enjoy This If...</h4>
              <p>You're curious about sustainable living, love being outdoors, or just want to slow down and connect with nature.</p>
              <h4>🌿 Ways You Could Get Involved</h4>
              <ul>
                <li>Join morning garden sessions when you feel like it</li>
                <li>Learn about permaculture and sustainable systems</li>
                <li>Help harvest vegetables for community meals</li>
                <li>Get your hands in the soil — or just watch and learn</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🧺 Weekly Laundry</div>
                <div class="benefit">🏐 Volleyball Court</div>
                <div class="benefit">💻 Workspace</div>
                <div class="benefit">💧 Unlimited Water</div>
                <div class="benefit">🛏️ Housekeeping on Request</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <button v-if="!showModalForm" class="btn btn-primary btn-lg" @click="showApplicationForm('The Grower')">Apply Now</button>
              <div v-else class="modal-form-wrapper">
                <div class="form-note">
                  <p>📝 This is an interest form — not a confirmed booking. We'll reach out to confirm dates based on availability.</p>
                </div>
                <form @submit.prevent="submitApplication" class="application-form">
                  <div class="form-group">
                    <label>Full Name(s) *</label>
                    <input type="text" v-model="form.fullName" required placeholder="Your name (and travel companion's if applicable)">
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Number of Persons *</label>
                      <input type="number" v-model="form.persons" min="1" max="10" required>
                    </div>
                    <div class="form-group">
                      <label>Country *</label>
                      <select v-model="form.country" required>
                        <option value="">Select country</option>
                        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>WhatsApp Number *</label>
                      <input type="tel" v-model="form.whatsapp" required placeholder="+1234567890">
                    </div>
                    <div class="form-group">
                      <label>Email *</label>
                      <input type="email" v-model="form.email" required placeholder="you@example.com">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Tell us about yourself *</label>
                    <textarea v-model="form.about" required placeholder="A few sentences about you, your background, and why you're interested..."></textarea>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Expected Arrival *</label>
                      <input type="date" v-model="form.arrival" required>
                    </div>
                    <div class="form-group">
                      <label>Expected Departure *</label>
                      <input type="date" v-model="form.departure" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Program *</label>
                    <select v-model="form.program" required>
                      <option value="The Storyteller">The Storyteller</option>
                      <option value="The Grower">The Grower</option>
                      <option value="The Maker">The Maker</option>
                      <option value="The Caretaker">The Caretaker</option>
                      <option value="Slow Living">Slow Living</option>
                      <option value="Mixed">Mixed (try different things)</option>
                    </select>
                  </div>
                  <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                      <input type="checkbox" v-model="form.agreed" required>
                      <span>I have read the program details and agree to the daily fee of US$19 per person.</span>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting">
                    {{ submitting ? 'Submitting...' : 'Submit Application' }}
                  </button>
                  <p v-if="submitSuccess" class="success-msg">✅ Application submitted! We'll be in touch soon.</p>
                  <p v-if="submitError" class="error-msg">❌ Something went wrong. Please try again or contact us on WhatsApp.</p>
                </form>
              </div>
            </div>
          </div>

          <div v-if="activeProgram === 'maker'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🔨 Builder</span>
              <h2>The Maker</h2>
              <p class="program-tagline">Create something with your hands.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>💰</span> US$19/person/day</div>
                <div class="info-item"><span>🌿</span> Flexible involvement</div>
              </div>
              <div class="info-box fee-highlight">
                <div class="info-item fee-item-full">
                  <span>💡</span> 
                  <span><strong>Your fee supports:</strong> Accommodation, meals, workshops, materials, and the sustainability of our newly established farm.</span>
                </div>
              </div>
              <h4>🎯 You Might Enjoy This If...</h4>
              <p>You like working with your hands, enjoy building things, or want a break from screens and digital work.</p>
              <h4>🔧 Ways You Could Get Involved</h4>
              <ul>
                <li>Help with ongoing building projects when interested</li>
                <li>Try woodworking — make furniture, signs, crafts</li>
                <li>Paint, decorate, or add your creative touch</li>
                <li>Fix things, improve spaces, leave your mark</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🔨 Tools Available</div>
                <div class="benefit">🚲 Free Bikes</div>
                                <div class="benefit">🧺 Weekly Laundry</div>
                <div class="benefit">🏐 Volleyball Court</div>
                <div class="benefit">💧 Unlimited Water</div>
                <div class="benefit">🛏️ Housekeeping on Request</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <button v-if="!showModalForm" class="btn btn-primary btn-lg" @click="showApplicationForm('The Maker')">Apply Now</button>
              <div v-else class="modal-form-wrapper">
                <div class="form-note">
                  <p>📝 This is an interest form — not a confirmed booking. We'll reach out to confirm dates based on availability.</p>
                </div>
                <form @submit.prevent="submitApplication" class="application-form">
                  <div class="form-group">
                    <label>Full Name(s) *</label>
                    <input type="text" v-model="form.fullName" required placeholder="Your name (and travel companion's if applicable)">
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Number of Persons *</label>
                      <input type="number" v-model="form.persons" min="1" max="10" required>
                    </div>
                    <div class="form-group">
                      <label>Country *</label>
                      <select v-model="form.country" required>
                        <option value="">Select country</option>
                        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>WhatsApp Number *</label>
                      <input type="tel" v-model="form.whatsapp" required placeholder="+1234567890">
                    </div>
                    <div class="form-group">
                      <label>Email *</label>
                      <input type="email" v-model="form.email" required placeholder="you@example.com">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Tell us about yourself *</label>
                    <textarea v-model="form.about" required placeholder="A few sentences about you, your background, and why you're interested..."></textarea>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Expected Arrival *</label>
                      <input type="date" v-model="form.arrival" required>
                    </div>
                    <div class="form-group">
                      <label>Expected Departure *</label>
                      <input type="date" v-model="form.departure" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Program *</label>
                    <select v-model="form.program" required>
                      <option value="The Storyteller">The Storyteller</option>
                      <option value="The Grower">The Grower</option>
                      <option value="The Maker">The Maker</option>
                      <option value="The Caretaker">The Caretaker</option>
                      <option value="Slow Living">Slow Living</option>
                      <option value="Mixed">Mixed (try different things)</option>
                    </select>
                  </div>
                  <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                      <input type="checkbox" v-model="form.agreed" required>
                      <span>I have read the program details and agree to the daily fee of US$19 per person.</span>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting">
                    {{ submitting ? 'Submitting...' : 'Submit Application' }}
                  </button>
                  <p v-if="submitSuccess" class="success-msg">✅ Application submitted! We'll be in touch soon.</p>
                  <p v-if="submitError" class="error-msg">❌ Something went wrong. Please try again or contact us on WhatsApp.</p>
                </form>
              </div>
            </div>
          </div>

          <div v-if="activeProgram === 'caretaker'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">💚 Nurturing</span>
              <h2>The Caretaker</h2>
              <p class="program-tagline">Share warmth with animals and people.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>💰</span> US$19/person/day</div>
                <div class="info-item"><span>🌿</span> Flexible involvement</div>
              </div>
              <div class="info-box fee-highlight">
                <div class="info-item fee-item-full">
                  <span>💡</span> 
                  <span><strong>Your fee supports:</strong> Accommodation, meals, workshops, materials, and the sustainability of our newly established farm.</span>
                </div>
              </div>
              <h4>🎯 You Might Enjoy This If...</h4>
              <p>You love animals, enjoy cooking, or find purpose in creating comfortable spaces for others.</p>
              <h4>💚 Ways You Could Get Involved</h4>
              <ul>
                <li>Spend time with our goats, ducks, and chickens</li>
                <li>Help in the kitchen if cooking brings you joy</li>
                <li>Welcome new guests and share what you've learned</li>
                <li>Help create community moments — dinners, gatherings</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🐐 Animal Friends</div>
                <div class="benefit">🚲 Free Bikes</div>
                                <div class="benefit">🧺 Weekly Laundry</div>
                <div class="benefit">🏐 Volleyball Court</div>
                <div class="benefit">💧 Unlimited Water</div>
                <div class="benefit">🛏️ Housekeeping on Request</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <button v-if="!showModalForm" class="btn btn-primary btn-lg" @click="showApplicationForm('The Caretaker')">Apply Now</button>
              <div v-else class="modal-form-wrapper">
                <div class="form-note">
                  <p>📝 This is an interest form — not a confirmed booking. We'll reach out to confirm dates based on availability.</p>
                </div>
                <form @submit.prevent="submitApplication" class="application-form">
                  <div class="form-group">
                    <label>Full Name(s) *</label>
                    <input type="text" v-model="form.fullName" required placeholder="Your name (and travel companion's if applicable)">
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Number of Persons *</label>
                      <input type="number" v-model="form.persons" min="1" max="10" required>
                    </div>
                    <div class="form-group">
                      <label>Country *</label>
                      <select v-model="form.country" required>
                        <option value="">Select country</option>
                        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>WhatsApp Number *</label>
                      <input type="tel" v-model="form.whatsapp" required placeholder="+1234567890">
                    </div>
                    <div class="form-group">
                      <label>Email *</label>
                      <input type="email" v-model="form.email" required placeholder="you@example.com">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Tell us about yourself *</label>
                    <textarea v-model="form.about" required placeholder="A few sentences about you, your background, and why you're interested..."></textarea>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Expected Arrival *</label>
                      <input type="date" v-model="form.arrival" required>
                    </div>
                    <div class="form-group">
                      <label>Expected Departure *</label>
                      <input type="date" v-model="form.departure" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Program *</label>
                    <select v-model="form.program" required>
                      <option value="The Storyteller">The Storyteller</option>
                      <option value="The Grower">The Grower</option>
                      <option value="The Maker">The Maker</option>
                      <option value="The Caretaker">The Caretaker</option>
                      <option value="Slow Living">Slow Living</option>
                      <option value="Mixed">Mixed (try different things)</option>
                    </select>
                  </div>
                  <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                      <input type="checkbox" v-model="form.agreed" required>
                      <span>I have read the program details and agree to the daily fee of US$19 per person.</span>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting">
                    {{ submitting ? 'Submitting...' : 'Submit Application' }}
                  </button>
                  <p v-if="submitSuccess" class="success-msg">✅ Application submitted! We'll be in touch soon.</p>
                  <p v-if="submitError" class="error-msg">❌ Something went wrong. Please try again or contact us on WhatsApp.</p>
                </form>
              </div>
            </div>
          </div>

          <div v-if="activeProgram === 'slowliving'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🧘 Flexible</span>
              <h2>Slow Living</h2>
              <p class="program-tagline">No expectations. Just be here.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> Minimum 10 days</div>
                <div class="info-item"><span>💰</span> US$19/person/day</div>
                <div class="info-item"><span>🌿</span> Completely flexible</div>
              </div>
              <div class="info-box fee-highlight">
                <div class="info-item fee-item-full">
                  <span>💡</span> 
                  <span><strong>Your fee supports:</strong> Accommodation, meals, workshops, materials, and the sustainability of our newly established farm.</span>
                </div>
              </div>
              <h4>🎯 You Might Enjoy This If...</h4>
              <p>You're recovering from burnout, don't know what you want yet, or simply want to slow down without any expectations.</p>
              <h4>✨ What Your Days Might Look Like</h4>
              <ul>
                <li>Wake up slow. Coffee on the porch. No alarm.</li>
                <li>Try a bit of everything — or nothing at all</li>
                <li>Read, rest, surf, explore — whatever feels right</li>
                <li>Join community dinners and BBQs when you want company</li>
              </ul>
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🧘 Zero Pressure</div>
                <div class="benefit">🚲 Free Bikes</div>
                                <div class="benefit">🧺 Weekly Laundry</div>
                <div class="benefit">🏐 Volleyball Court</div>
                <div class="benefit">💧 Unlimited Water</div>
                <div class="benefit">🛏️ Housekeeping on Request</div>
                <div class="benefit">🎉 Farm Events & BBQs</div>
              </div>
            </div>
            <div class="modal-footer">
              <button v-if="!showModalForm" class="btn btn-primary btn-lg" @click="showApplicationForm('Slow Living')">Apply Now</button>
              <div v-else class="modal-form-wrapper">
                <div class="form-note">
                  <p>📝 This is an interest form — not a confirmed booking. We'll reach out to confirm dates based on availability.</p>
                </div>
                <form @submit.prevent="submitApplication" class="application-form">
                  <div class="form-group">
                    <label>Full Name(s) *</label>
                    <input type="text" v-model="form.fullName" required placeholder="Your name (and travel companion's if applicable)">
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Number of Persons *</label>
                      <input type="number" v-model="form.persons" min="1" max="10" required>
                    </div>
                    <div class="form-group">
                      <label>Country *</label>
                      <select v-model="form.country" required>
                        <option value="">Select country</option>
                        <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>WhatsApp Number *</label>
                      <input type="tel" v-model="form.whatsapp" required placeholder="+1234567890">
                    </div>
                    <div class="form-group">
                      <label>Email *</label>
                      <input type="email" v-model="form.email" required placeholder="you@example.com">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Tell us about yourself *</label>
                    <textarea v-model="form.about" required placeholder="A few sentences about you, your background, and why you're interested..."></textarea>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label>Expected Arrival *</label>
                      <input type="date" v-model="form.arrival" required>
                    </div>
                    <div class="form-group">
                      <label>Expected Departure *</label>
                      <input type="date" v-model="form.departure" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Program *</label>
                    <select v-model="form.program" required>
                      <option value="The Storyteller">The Storyteller</option>
                      <option value="The Grower">The Grower</option>
                      <option value="The Maker">The Maker</option>
                      <option value="The Caretaker">The Caretaker</option>
                      <option value="Slow Living">Slow Living</option>
                      <option value="Mixed">Mixed (try different things)</option>
                    </select>
                  </div>
                  <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                      <input type="checkbox" v-model="form.agreed" required>
                      <span>I have read the program details and agree to the daily fee of US$19 per person.</span>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting">
                    {{ submitting ? 'Submitting...' : 'Submit Application' }}
                  </button>
                  <p v-if="submitSuccess" class="success-msg">✅ Application submitted! We'll be in touch soon.</p>
                  <p v-if="submitError" class="error-msg">❌ Something went wrong. Please try again or contact us on WhatsApp.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Cabins Section -->
    <section class="cabins-section" id="cabins">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Where You'll Stay</span>
          <h2>Your Private Cabin</h2>
          <p>Simple, cozy spaces designed for slow mornings and deep sleep. All stays include accommodation.</p>
        </div>
        <div class="cabin-features">
          <span>🚿 Outdoor Shower</span>
          <span>🛏️ Clean Bedsheets</span>
          <span>🔌 Charging Socket</span>
          <span>💨 Fan</span>
          <span>🛋️ Comfy Mattress</span>
        </div>
        <div class="cabins-gallery">
          <div class="cabin-card">
            <div class="cabin-slider">
              <div class="slider-images">
                <img v-for="i in 7" :key="'sandat-'+i" :src="`/images/sandat-${i}.jpg`" :class="{ active: cabinSlides.sandat === i }" alt="Sandat Cabin">
              </div>
              <button class="slider-btn prev" @click="prevSlide('sandat', 7)">‹</button>
              <button class="slider-btn next" @click="nextSlide('sandat', 7)">›</button>
              <div class="slider-dots">
                <span v-for="i in 7" :key="i" :class="{ active: cabinSlides.sandat === i }" @click="cabinSlides.sandat = i"></span>
              </div>
            </div>
            <div class="cabin-info"><h4>Sandat Cabin</h4><p>Queen bed • Balcony • Mountain view</p></div>
          </div>
          <div class="cabin-card">
            <div class="cabin-slider">
              <div class="slider-images">
                <img v-for="i in 6" :key="'windmill-'+i" :src="`/images/windmill-${i}.jpg`" :class="{ active: cabinSlides.windmill === i }" alt="Rick's Windmill">
              </div>
              <button class="slider-btn prev" @click="prevSlide('windmill', 6)">‹</button>
              <button class="slider-btn next" @click="nextSlide('windmill', 6)">›</button>
              <div class="slider-dots">
                <span v-for="i in 6" :key="i" :class="{ active: cabinSlides.windmill === i }" @click="cabinSlides.windmill = i"></span>
              </div>
            </div>
            <div class="cabin-info"><h4>Rick's Windmill</h4><p>Queen bed • Unique design • Black balcony</p></div>
          </div>
          <div class="cabin-card">
            <div class="cabin-slider">
              <div class="slider-images">
                <img v-for="i in 3" :key="'jabalkap-'+i" :src="`/images/jabalkap-${i}.jpg`" :class="{ active: cabinSlides.jabalkap === i }" alt="Jabalkap Cabin">
              </div>
              <button class="slider-btn prev" @click="prevSlide('jabalkap', 3)">‹</button>
              <button class="slider-btn next" @click="nextSlide('jabalkap', 3)">›</button>
              <div class="slider-dots">
                <span v-for="i in 3" :key="i" :class="{ active: cabinSlides.jabalkap === i }" @click="cabinSlides.jabalkap = i"></span>
              </div>
            </div>
            <div class="cabin-info"><h4>Jabalkap Cabin</h4><p>Queen bed • Traditional style • Garden view</p></div>
          </div>
          <div class="cabin-card">
            <div class="cabin-slider">
              <div class="slider-images">
                <img v-for="i in 10" :key="'lime-'+i" :src="`/images/lime-${i}.jpg`" :class="{ active: cabinSlides.lime === i }" alt="Lime Cabin">
              </div>
              <button class="slider-btn prev" @click="prevSlide('lime', 10)">‹</button>
              <button class="slider-btn next" @click="nextSlide('lime', 10)">›</button>
              <div class="slider-dots">
                <span v-for="i in 10" :key="i" :class="{ active: cabinSlides.lime === i }" @click="cabinSlides.lime = i"></span>
              </div>
            </div>
            <div class="cabin-info"><h4>Lime Cabin</h4><p>Queen bed • Bright & colorful • Farm view</p></div>
          </div>
          <div class="cabin-card">
            <div class="cabin-slider">
              <div class="slider-images">
                <img v-for="i in 7" :key="'peace-'+i" :src="`/images/peace-${i}.jpg`" :class="{ active: cabinSlides.peace === i }" alt="Peace Cabin">
              </div>
              <button class="slider-btn prev" @click="prevSlide('peace', 7)">‹</button>
              <button class="slider-btn next" @click="nextSlide('peace', 7)">›</button>
              <div class="slider-dots">
                <span v-for="i in 7" :key="i" :class="{ active: cabinSlides.peace === i }" @click="cabinSlides.peace = i"></span>
              </div>
            </div>
            <div class="cabin-info"><h4>Peace Cabin</h4><p>Queen bed • Wooden exterior • Mountain view</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Guest Stories</span>
          <h2>What People Say</h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Staying at Mawun Valley Farm was an incredible experience. Fully immersed in nature and local life. The peaceful environment helped me disconnect and reset. If you're a surfer, this place is a hidden gem."</p>
            <div class="review-author"><strong>Iyad</strong><span>Tunisia • 40 days</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"We spent 1 month here and couldn't be more happy. There's a strong sense of community. The meals were really good, the BBQ nights were delicious. We strongly recommend this farm!"</p>
            <div class="review-author"><strong>Mariana</strong><span>Portugal • 1 month</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"From day one, I felt like part of the family. My cabin was super cute and cozy. The BBQ nights were the absolute highlight—so delicious! I'm already looking forward to visiting again."</p>
            <div class="review-author"><strong>Pame</strong><span>Chile • 2 weeks</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"They have a spectacular farm! Spending time with the goats made us very happy. Definitely a place to stay and enjoy the countryside, the tranquility, and Noni's desserts!"</p>
            <div class="review-author"><strong>Paola</strong><span>Peru • 10 days</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"The wooden cabins are very cozy! From delicious BBQs and fun card games to movie nights and Noni's amazing baked treats, there is always something to enjoy."</p>
            <div class="review-author"><strong>Isabelle</strong><span>Netherlands • 2 weeks</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Mawun Valley is an incredible place that gives everyone a place in the community. Everything is to be created with the host as an inspired and caring conductor."</p>
            <div class="review-author"><strong>Alexa</strong><span>France • 2 weeks</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Ten days on the farm 🐐🐓🌾 Waking up every day to the rooster's calls, feeling the ground beneath my feet, learning Indonesian, learning about sustainability, animals, and nature. Trying new things like riding a motorbike or surfing, hiking mountains, getting blisters on my hands, feeding goats, playing football, meeting beautiful people… Just nature. The best detox ever."</p>
            <div class="review-author"><strong>Sara</strong><span>Spain • 10 days</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form Section -->
    <section class="apply-section" id="apply">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Interested?</span>
          <h2>Apply to Stay</h2>
          <p>This is an interest form — not a confirmed booking. We'll reach out to confirm dates based on availability.</p>
        </div>
        <div class="apply-form-wrapper">
          <form @submit.prevent="submitApplication" class="application-form">
            <div class="form-group">
              <label>Full Name(s) *</label>
              <input type="text" v-model="form.fullName" required placeholder="Your name (and travel companion's if applicable)">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Number of Persons *</label>
                <input type="number" v-model="form.persons" min="1" max="10" required>
              </div>
              <div class="form-group">
                <label>Country *</label>
                <select v-model="form.country" required>
                  <option value="">Select country</option>
                  <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>WhatsApp Number *</label>
                <input type="tel" v-model="form.whatsapp" required placeholder="+1234567890">
              </div>
              <div class="form-group">
                <label>Email *</label>
                <input type="email" v-model="form.email" required placeholder="you@example.com">
              </div>
            </div>
            <div class="form-group">
              <label>Tell us about yourself *</label>
              <textarea v-model="form.about" required placeholder="A few sentences about you, your background, and why you're interested..."></textarea>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Expected Arrival *</label>
                <input type="date" v-model="form.arrival" required>
              </div>
              <div class="form-group">
                <label>Expected Departure *</label>
                <input type="date" v-model="form.departure" required>
              </div>
            </div>
            <div class="form-group">
              <label>Program *</label>
              <select v-model="form.program" required>
                <option value="">Select a program</option>
                <option value="The Storyteller">The Storyteller</option>
                <option value="The Grower">The Grower</option>
                <option value="The Maker">The Maker</option>
                <option value="The Caretaker">The Caretaker</option>
                <option value="Slow Living">Slow Living</option>
                <option value="Mixed">Mixed (try different things)</option>
              </select>
            </div>
            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="form.agreed" required>
                <span>I have read the program details and agree to the daily fee of US$19 per person.</span>
              </label>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting">
              {{ submitting ? 'Submitting...' : 'Submit Application' }}
            </button>
            <p v-if="submitSuccess" class="success-msg">✅ Application submitted! We'll be in touch soon.</p>
            <p v-if="submitError" class="error-msg">❌ Something went wrong. Please try again or contact us on WhatsApp.</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
useHead({ title: 'Stay & Contribute - Mawun Valley Farm' })

const activeProgram = ref(null)
const showModalForm = ref(false)
const submitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const cabinSlides = reactive({
  sandat: 1, windmill: 1, jabalkap: 1, lime: 1, peace: 1
})

const form = reactive({
  fullName: '',
  persons: 1,
  country: '',
  whatsapp: '',
  email: '',
  about: '',
  arrival: '',
  departure: '',
  program: '',
  agreed: false
})

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
  'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
  'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
  'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia',
  'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
  'Haiti', 'Honduras', 'Hong Kong', 'Hungary',
  'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy', 'Ivory Coast',
  'Jamaica', 'Japan', 'Jordan',
  'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan',
  'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
  'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
  'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
  'Oman',
  'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar',
  'Romania', 'Russia', 'Rwanda',
  'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
  'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
  'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
  'Yemen',
  'Zambia', 'Zimbabwe', 'Other'
]

function openProgram(program) {
  activeProgram.value = program
  showModalForm.value = false
  submitSuccess.value = false
  submitError.value = false
  document.body.style.overflow = 'hidden'
}

function closeProgram() {
  activeProgram.value = null
  showModalForm.value = false
  document.body.style.overflow = ''
}

function showApplicationForm(program) {
  form.program = program
  showModalForm.value = true
}

function nextSlide(cabin, max) {
  cabinSlides[cabin] = cabinSlides[cabin] >= max ? 1 : cabinSlides[cabin] + 1
}

function prevSlide(cabin, max) {
  cabinSlides[cabin] = cabinSlides[cabin] <= 1 ? max : cabinSlides[cabin] - 1
}

async function submitApplication() {
  submitting.value = true
  submitSuccess.value = false
  submitError.value = false
  
  const webhookUrl = 'https://discord.com/api/webhooks/1478210670024593690/XC6TJIGYYuV72GmEwNryO5PoQX_9mFOZI5e4wkxnHUab7Kb9mGKPPJmTzNU7sNaeof7o'
  
  const embed = {
    title: '🌿 New Stay & Contribute Application',
    color: 0x6b8e5e,
    fields: [
      { name: '👤 Full Name(s)', value: form.fullName, inline: true },
      { name: '👥 Persons', value: String(form.persons), inline: true },
      { name: '🌍 Country', value: form.country, inline: true },
      { name: '📱 WhatsApp', value: form.whatsapp, inline: true },
      { name: '📧 Email', value: form.email, inline: true },
      { name: '🎯 Program', value: form.program, inline: true },
      { name: '📅 Arrival', value: form.arrival, inline: true },
      { name: '📅 Departure', value: form.departure, inline: true },
      { name: '📝 About', value: form.about.substring(0, 1000) }
    ],
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
      form.fullName = ''
      form.persons = 1
      form.country = ''
      form.whatsapp = ''
      form.email = ''
      form.about = ''
      form.arrival = ''
      form.departure = ''
      form.program = ''
      form.agreed = false
    } else {
      submitError.value = true
    }
  } catch (e) {
    submitError.value = true
  }
  
  submitting.value = false
}
</script>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
.hero-bg { position: absolute; inset: 0; z-index: -1; }
.hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(44,62,45,0.5), rgba(44,62,45,0.8)); }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero-content { max-width: 700px; padding: 80px 24px 0; }
.hero h1 { color: white; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px; }
.hero p { font-size: 1.2rem; opacity: 0.95; margin-bottom: 32px; line-height: 1.7; }
.section-label.light { color: var(--color-gold); }
.hero-stats { display: flex; justify-content: center; gap: 40px; margin-bottom: 32px; flex-wrap: wrap; }
.hero-stat { text-align: center; }
.hero-stat-number { display: block; font-size: 2rem; font-weight: 700; color: var(--color-gold); }
.hero-stat-label { font-size: 14px; opacity: 0.9; }
.hero-cta .btn { padding: 16px 32px; font-size: 16px; }

.how-it-works { background: var(--color-dark); padding: 50px 0; }
.how-grid { display: flex; justify-content: center; gap: 60px; flex-wrap: wrap; }
.how-item { text-align: center; color: white; max-width: 200px; }
.how-icon { font-size: 2.5rem; display: block; margin-bottom: 12px; }
.how-item h4 { color: var(--color-gold); margin-bottom: 8px; font-size: 1.2rem; }
.how-item p { font-size: 14px; opacity: 0.85; line-height: 1.6; }


.trust-section { padding: 80px 0; background: white; }
.trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1000px; margin: 0 auto; }
.trust-card { display: flex; align-items: flex-start; gap: 16px; background: var(--color-cream); padding: 24px; border-radius: 16px; transition: transform 0.2s, box-shadow 0.2s; }
.trust-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
.trust-icon { font-size: 32px; flex-shrink: 0; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: white; border-radius: 12px; }
.trust-content h4 { font-size: 1rem; margin-bottom: 6px; color: var(--color-dark); }
.trust-verify { text-align: center; margin-top: 32px; }
.trust-verify p { font-size: 14px; color: #888; margin: 0; }
.trust-verify a { color: var(--color-sage); font-weight: 600; text-decoration: none; transition: color 0.2s; }
.trust-verify a:hover { color: var(--color-terracotta); text-decoration: underline; }
.trust-content p { font-size: 14px; color: #666; line-height: 1.5; margin: 0; }
.programs-section { padding: 100px 0; background: var(--color-cream); }
.section-header { text-align: center; max-width: 600px; margin: 0 auto 50px; }
.section-header h2 { margin-bottom: 16px; }
.section-header p { color: #666; }
.programs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; }
.program-card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); cursor: pointer; transition: all 0.3s ease; }
.program-card:hover { transform: translateY(-8px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
.program-card.featured { border: 3px solid var(--color-gold); }
.program-image { position: relative; height: 200px; }
.program-image img { width: 100%; height: 100%; object-fit: cover; }
.program-badge { position: absolute; top: 12px; left: 12px; background: white; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
.program-info { padding: 24px; }
.program-info h3 { font-size: 1.3rem; margin-bottom: 10px; }
.program-info p { color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
.program-meta { display: flex; gap: 16px; font-size: 13px; color: var(--color-sage); font-weight: 600; }
.programs-note { text-align: center; margin-top: 40px; padding: 20px; background: white; border-radius: 12px; max-width: 600px; margin-left: auto; margin-right: auto; }
.programs-note p { margin: 0; color: #555; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-content { background: white; border-radius: 20px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; }
.modal-close { position: absolute; top: 16px; right: 16px; background: var(--color-cream); border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; }
.modal-header { padding: 32px 32px 0; }
.modal-header h2 { font-size: 1.6rem; margin: 12px 0; }
.program-tagline { color: #666; }
.modal-body { padding: 24px 32px; }
.modal-body h4 { margin: 24px 0 12px; color: var(--color-dark); }
.modal-body ul { list-style: none; padding: 0; }
.modal-body li { padding: 8px 0; padding-left: 24px; position: relative; }
.modal-body li::before { content: "✓"; position: absolute; left: 0; color: var(--color-sage); }
.info-box { display: flex; flex-wrap: wrap; gap: 16px; background: var(--color-cream); padding: 16px; border-radius: 12px; margin-bottom: 20px; }
.info-item { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.benefit { background: var(--color-cream); padding: 12px; border-radius: 8px; font-size: 14px; }
.modal-footer { padding: 20px 32px 40px; }

.modal-form-wrapper { margin-top: 16px; }
.form-note { background: #fff8e7; border: 1px solid #f0d78c; padding: 16px; border-radius: 12px; margin-bottom: 20px; }
.form-note p { margin: 0; font-size: 14px; color: #8b6914; }

.application-form { display: flex; flex-direction: column; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-weight: 600; font-size: 14px; color: var(--color-dark); }
.form-group input, .form-group select, .form-group textarea { padding: 12px 16px; border: 1px solid #ddd; border-radius: 8px; font-size: 15px; transition: border-color 0.2s; }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--color-sage); }
.form-group textarea { min-height: 100px; resize: vertical; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.checkbox-group { margin-top: 8px; }
.checkbox-label { display: flex; align-items: flex-start; gap: 12px; cursor: pointer; font-size: 14px; }
.checkbox-label input { margin-top: 3px; }
.success-msg { color: #2e7d32; background: #e8f5e9; padding: 12px; border-radius: 8px; text-align: center; }
.error-msg { color: #c62828; background: #ffebee; padding: 12px; border-radius: 8px; text-align: center; }

.cabins-section { padding: 100px 0; background: white; }
.cabin-features { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-bottom: 50px; }
.cabin-features span { background: var(--color-cream); padding: 10px 20px; border-radius: 25px; font-size: 14px; }
.cabins-gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
.cabin-card { border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); background: white; }
.cabin-slider { position: relative; height: 250px; overflow: hidden; }
.slider-images { position: relative; width: 100%; height: 100%; }
.slider-images img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.3s ease; }
.slider-images img.active { opacity: 1; }
.slider-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.9); border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 20px; cursor: pointer; z-index: 5; transition: all 0.2s; }
.slider-btn:hover { background: white; transform: translateY(-50%) scale(1.1); }
.slider-btn.prev { left: 10px; }
.slider-btn.next { right: 10px; }
.slider-dots { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; z-index: 5; }
.slider-dots span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.5); cursor: pointer; transition: all 0.2s; }
.slider-dots span.active { background: white; transform: scale(1.2); }
.cabin-info { padding: 20px; }
.cabin-info h4 { margin-bottom: 6px; }
.cabin-info p { font-size: 14px; color: #666; margin: 0; }

.reviews-section { padding: 100px 0; background: var(--color-cream); }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
.review-card { background: white; padding: 28px; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.review-card .stars { color: var(--color-gold); font-size: 16px; margin-bottom: 16px; }
.review-card p { font-size: 15px; line-height: 1.7; color: #555; font-style: italic; margin-bottom: 16px; }
.review-author strong { display: block; margin-bottom: 4px; }
.review-author span { font-size: 13px; color: #888; }

.apply-section { padding: 100px 0; background: var(--color-dark); }
.apply-section .section-header { color: white; }
.apply-section .section-header h2 { color: white; }
.apply-section .section-header p { color: rgba(255,255,255,0.8); }
.apply-form-wrapper { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 20px; }

.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 14px 28px; border-radius: 30px; font-weight: 600; text-decoration: none; transition: all 0.3s; border: none; cursor: pointer; width: 100%; }
.btn-primary { background: var(--color-gold); color: var(--color-dark); }
.btn-primary:hover { background: var(--color-terracotta); color: white; }
.btn-primary:disabled { background: #ccc; cursor: not-allowed; }
.btn-lg { padding: 16px 32px; font-size: 16px; }

@media (max-width: 768px) {
  .hero-stats { gap: 24px; }
  .trust-grid { grid-template-columns: 1fr; }
  .how-grid { gap: 30px; }
  .programs-grid { grid-template-columns: 1fr; }
  .cabins-gallery { grid-template-columns: 1fr; }
  .modal-content { border-radius: 16px 16px 0 0; max-height: 95vh; margin-top: auto; }
  .modal-footer { padding-bottom: 60px !important; }
  .benefits-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .apply-form-wrapper { padding: 24px; margin: 0 16px; }
}
</style>
