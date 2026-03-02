<template>
  <div class="experience-stay-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/hero-2.jpg" alt="Mawun Valley Farm Experience">
      </div>
      <div class="hero-content">
        <span class="section-label light">Farm Experience</span>
        <h1>Your Farm Life Awaits</h1>
        <p>Immerse yourself in permaculture, community, and the beauty of South Lombok. Every program includes a private cabin, meals, and unforgettable experiences.</p>
        <div class="hero-cta">
          <a href="#programs" class="btn btn-primary btn-lg">Explore Programs</a>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">5.0</span>
            <span class="stat-label">★ Rating</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">35+</span>
            <span class="stat-label">Years of Welcome</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">3 min</span>
            <span class="stat-label">To Beach</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">$19</span>
            <span class="stat-label">Per Person/Day</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="programs-section" id="programs">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Choose Your Path</span>
          <h2>Farm Experience Programs</h2>
          <p>Every program includes a private cabin, daily meals, and access to all farm activities.</p>
        </div>

        <div class="programs-grid">
          <article class="program-card" @click="openProgram('beachside')">
            <div class="program-image">
              <img src="/images/beachside-cover.jpg" alt="Beachside Farming">
              <span class="program-badge">🏄 Surf + Farm</span>
            </div>
            <div class="program-info">
              <h3>Beachside Farming</h3>
              <p>Balance farm life with world-class waves — just 3 minutes from the beach.</p>
              <div class="program-meta"><span>3 hrs/day</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card" @click="openProgram('slowliving')">
            <div class="program-image">
              <img src="/images/slowliving-cover.jpg" alt="Slow Living">
              <span class="program-badge">🧘 Mindful</span>
            </div>
            <div class="program-info">
              <h3>Slow Living</h3>
              <p>Find calm and groundedness. Embrace a slower pace and appreciate the small details.</p>
              <div class="program-meta"><span>3 hrs/day</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card" @click="openProgram('creative')">
            <div class="program-image">
              <img src="/images/creative-cover.jpg" alt="Creative Content">
              <span class="program-badge">📸 Creator</span>
            </div>
            <div class="program-info">
              <h3>Creative Content</h3>
              <p>Create inspiring content while living the farm life. Perfect for writers & photographers.</p>
              <div class="program-meta"><span>3 hrs/day</span><span>$19/day</span></div>
            </div>
          </article>

          <article class="program-card featured" @click="openProgram('retreat')">
            <div class="program-image">
              <img src="/images/hero-1.jpg" alt="8-Day Retreat">
              <span class="program-badge">⭐ 8-Day Journey</span>
            </div>
            <div class="program-info">
              <h3>8-Day Farm Retreat</h3>
              <p>A transformative group trip — permaculture, community, and self-discovery.</p>
              <div class="program-meta"><span>All-inclusive</span><span>8 days</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Program Details Modal -->
    <Teleport to="body">
      <div v-if="activeProgram" class="modal-overlay" @click.self="closeProgram">
        <div class="modal-content">
          <button class="modal-close" @click="closeProgram">✕</button>
          
          <!-- Beachside Details -->
          <div v-if="activeProgram === 'beachside'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🏄 Surf + Farm</span>
              <h2>Beachside Farming Experience</h2>
              <p class="program-tagline">Balance farm life with world-class waves — just 3 minutes from the beach.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
                <div class="info-item"><span>🛏️</span> Private cabin included</div>
              </div>
              
              <h4>🌿 The Experience</h4>
              <p>Embark on a unique, hands-on learning experience at Mawun Valley Farm, nestled in the heart of Lombok's stunning natural beauty. Gain invaluable practical skills in permaculture, sustainable agriculture, and community living.</p>
              <p>With Lombok's best surfing beaches just 3 minutes away, you can balance your farm experience with world-class waves at Mawun Beach, Selong Belanak, and Mawi.</p>
              
              <h4>🌿 Daily Farm Life</h4>
              <ul class="detail-list">
                <li><strong>Morning with the Animals:</strong> Feed the goats, collect eggs, and spend time with our friendly farm animals</li>
                <li><strong>Garden Time:</strong> Get your hands in the soil — planting, harvesting, and learning about permaculture</li>
                <li><strong>Creative Projects:</strong> Join in on painting, building, or decorating — whatever inspires you</li>
                <li><strong>Community Moments:</strong> Share meals, stories, and experiences with fellow travelers</li>
                <li><strong>Free Time:</strong> Surf, explore beaches, or simply relax in your cabin</li>
              </ul>
              
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">💻 Workspace</div>
                <div class="benefit">🍹 Free Drinks</div>
                <div class="benefit">🎉 Farm Events (BBQs, Movie Nights)</div>
              </div>
              
              <h4>👤 Who This Is For</h4>
              <ul class="check-list">
                <li>Passionate about sustainable living and permaculture</li>
                <li>Interest in surfing or beach life</li>
                <li>Open-minded with a willingness to learn</li>
                <li>Team players with good communication skills</li>
                <li>Respectful of local culture and customs</li>
              </ul>
              
              <h4>✅ Requirements</h4>
              <p>Welcomes solo travelers, couples, and partners of participants. Minimum stay: 1 week recommended.</p>
              
              <h4>❌ What's Not Included</h4>
              <p>Flights, Travel Insurance, Internal Transportation, and Visa</p>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Beachside%20Farming%20program." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <!-- Slow Living Details -->
          <div v-if="activeProgram === 'slowliving'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">🧘 Mindful</span>
              <h2>Slow Living Experience</h2>
              <p class="program-tagline">Find calm and groundedness. Embrace a slower pace and appreciate life's simple pleasures.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
                <div class="info-item"><span>🛏️</span> Private cabin included</div>
              </div>
              
              <h4>🌿 The Experience</h4>
              <p>At Mawun Valley Farm, nestled in the tranquil landscapes of Lombok, we offer a unique opportunity to immerse yourself in the principles of slow living. If you appreciate a slower pace, connection with nature, and meaningful interactions, join our community.</p>
              <p class="highlight-box">Savor simple moments: enjoying a quiet breakfast with farm-sourced ingredients, taking leisurely walks through the gardens, observing the beauty of Lombok sunsets. Evenings include relaxed gatherings under the stars, sharing stories and connecting with fellow travelers.</p>
              
              <h4>🌿 Daily Farm Life</h4>
              <ul class="detail-list">
                <li><strong>Gentle Mornings:</strong> Start your day with the animals — feeding goats, greeting the ducks</li>
                <li><strong>Garden Meditation:</strong> Tend to herbs and vegetables at your own peaceful pace</li>
                <li><strong>Farm-to-Table:</strong> Join in preparing meals with ingredients you helped grow</li>
                <li><strong>Sunset Gatherings:</strong> Share stories and connect with fellow travelers under the stars</li>
              </ul>
              
              <h4>✨ Key Elements</h4>
              <ul class="check-list">
                <li><strong>Gentle Farm Engagement:</strong> Participate at a relaxed pace</li>
                <li><strong>Nature Connection:</strong> Immerse in the natural beauty of the valley</li>
                <li><strong>Community Interaction:</strong> Connect with our local team and fellow participants</li>
                <li><strong>Mindful Moments:</strong> Presence and appreciation for simple experiences</li>
                <li><strong>Farm-Fresh Nourishment:</strong> Wholesome meals from our land</li>
                <li><strong>Tranquil Environment:</strong> Peace and quiet amidst natural sounds</li>
              </ul>
              
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">💻 Workspace</div>
              </div>
              
              <h4>✅ Requirements</h4>
              <p>Welcomes solo travelers, couples, and partners of participants.</p>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Slow%20Living%20program." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <!-- Creative Details -->
          <div v-if="activeProgram === 'creative'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">📸 Creator</span>
              <h2>Creative Content Experience</h2>
              <p class="program-tagline">Create inspiring content while living the farm life. Perfect for writers, photographers & videographers.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>⏰</span> 3 hrs/day, 4 days/week</div>
                <div class="info-item"><span>💰</span> US$19/day</div>
                <div class="info-item"><span>🛏️</span> Private cabin included</div>
              </div>
              
              <h4>🌿 The Experience</h4>
              <p>Embark on a unique creative journey at Mawun Valley Farm. This program is perfect for content creators who want to document sustainable living while being part of an inspiring community.</p>
              <p>With Lombok's best surfing beaches just 3 minutes away, you can balance content creation with world-class waves and stunning golden hour shots.</p>
              
              <h4>🌿 Daily Farm Life</h4>
              <ul class="detail-list">
                <li><strong>Capture the Moments:</strong> Document farm life through photos, videos, or writing</li>
                <li><strong>Morning Light:</strong> Golden hour sessions with animals, gardens, and landscapes</li>
                <li><strong>Story Gathering:</strong> Connect with guests and locals for authentic content</li>
                <li><strong>Creative Freedom:</strong> Work on your own projects in our dedicated workspace</li>
              </ul>
              
              <h4>👤 Who This Is For</h4>
              <ul class="check-list">
                <li>Content creators, photographers, videographers</li>
                <li>Writers wanting to document farm life</li>
                <li>Digital nomads who can work remotely AND create content</li>
                <li>Open-minded with good communication skills</li>
                <li>Respectful of local culture and customs</li>
              </ul>
              
              <h4>🎁 What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ Private Cabin</div>
                <div class="benefit">🍳 Breakfast & Lunch</div>
                <div class="benefit">🚲 Free Bikes</div>
                <div class="benefit">🌱 Permaculture Course</div>
                <div class="benefit">📜 Certificate</div>
                <div class="benefit">💻 Dedicated Workspace</div>
              </div>
              
              <h4>✅ Requirements</h4>
              <p>Welcomes solo travelers, couples, and partners of participants. Please share your portfolio or previous work when applying.</p>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%20Creative%20Content%20program." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
            </div>
          </div>

          <!-- Retreat Details -->
          <div v-if="activeProgram === 'retreat'" class="program-detail">
            <div class="modal-header">
              <span class="program-badge">⭐ 8-Day Journey</span>
              <h2>Farm Life Retreat</h2>
              <p class="program-tagline">A transformative group experience to explore permaculture, community, and self-discovery in beautiful Lombok.</p>
            </div>
            <div class="modal-body">
              <div class="info-box">
                <div class="info-item"><span>📅</span> 8 days / 7 nights</div>
                <div class="info-item"><span>🍽️</span> All meals included</div>
                <div class="info-item"><span>✈️</span> Airport transfer included</div>
              </div>
              
              <h4>🌿 The Experience</h4>
              <p>Dream of a simpler, more connected life? This immersive journey in Lombok is for those seeking real connection. Join a small group of like-minded travelers to explore what it truly means to live in harmony with the land.</p>
              <p class="highlight-box">This is more than a trip — it's a chance to build deep friendships, reconnect with nature, and find pieces of yourself in a stunning Indonesian setting.</p>
              
              <h4>📅 8-Day Itinerary</h4>
              <div class="itinerary">
                <div class="day"><span>Day 1</span><div><strong>Welcome to the Valley</strong><br>Settle into your cabin, farm-to-table welcome feast, intention setting circle</div></div>
                <div class="day"><span>Day 2</span><div><strong>Permaculture Deep Dive</strong><br>Farm gym, comprehensive permaculture workshop, garden project, bonfire under the stars</div></div>
                <div class="day"><span>Day 3</span><div><strong>Ocean Adventure</strong><br>Traditional fishing with local fishermen, snorkeling in crystal waters, fresh-caught seafood BBQ</div></div>
                <div class="day"><span>Day 4</span><div><strong>Island Exploration</strong><br>Visit pristine beaches, explore bat caves, wander local markets, cultural story night</div></div>
                <div class="day"><span>Day 5</span><div><strong>Farm Mastery</strong><br>Seed-to-harvest tour, hands-on Indonesian cooking class, movie night</div></div>
                <div class="day"><span>Day 6</span><div><strong>Community Impact</strong><br>Small business workshop, activities with village kids, music & games</div></div>
                <div class="day"><span>Day 7</span><div><strong>Integration & Celebration</strong><br>Free time for reflection, eco-tourism chat, farewell BBQ feast</div></div>
                <div class="day"><span>Day 8</span><div><strong>Departure</strong><br>Farewell breakfast with the community, airport drop-off</div></div>
              </div>
              
              <h4>✅ What's Included</h4>
              <div class="benefits-grid">
                <div class="benefit">🛏️ 8 Nights Private Cabin</div>
                <div class="benefit">🍽️ All Meals (Breakfast, Lunch, Dinner)</div>
                <div class="benefit">✈️ Airport Pickup & Drop-off</div>
                <div class="benefit">🚐 All Local Transportation</div>
                <div class="benefit">🌱 Permaculture Workshops</div>
                <div class="benefit">👨‍🍳 Cooking Class</div>
                <div class="benefit">🎣 Fishing & Snorkeling Trip</div>
                <div class="benefit">🏝️ Island Tours</div>
                <div class="benefit">📋 Pre-trip Preparation Guide</div>
                <div class="benefit">🤝 Local Host Throughout</div>
              </div>
              
              <h4>❌ What's Not Included</h4>
              <ul class="check-list">
                <li>Flight tickets to Lombok (LOP airport)</li>
                <li>Visas and travel documentation</li>
                <li>Travel insurance (required)</li>
                <li>Personal expenses and souvenirs</li>
              </ul>
              
              <h4>✅ Requirements</h4>
              <ul class="check-list">
                <li>Basic English communication</li>
                <li>Over 18 years old</li>
                <li>Open mind and adventurous spirit</li>
              </ul>
            </div>
            <div class="modal-footer">
              <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20the%208-Day%20Farm%20Retreat." class="btn btn-whatsapp btn-lg" target="_blank">Apply via WhatsApp</a>
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
          <p>Simple, cozy spaces designed for slow mornings and deep sleep. All programs include accommodation.</p>
        </div>
        
        <div class="cabin-features">
          <span>🚿 Outdoor Shower</span>
          <span>🛏️ Clean Bedsheets & Towels</span>
          <span>🔌 Charging Socket</span>
          <span>💨 Fan</span>
          <span>👕 Clothes Shelf</span>
          <span>🛋️ Comfortable Mattress</span>
        </div>

        <div class="cabins-showcase">
          <!-- Sandat Cabin -->
          <div class="cabin-showcase-item">
            <div class="cabin-gallery">
              <div class="cabin-main-image">
                <img :src="cabinImages.sandat[activeCabinImage.sandat]" alt="Sandat Cabin">
              </div>
              <div class="cabin-thumbnails">
                <img v-for="(img, idx) in cabinImages.sandat" :key="idx" :src="img" @click="activeCabinImage.sandat = idx" :class="{ active: activeCabinImage.sandat === idx }" alt="Sandat">
              </div>
            </div>
            <div class="cabin-details">
              <h3>Sandat Cabin</h3>
              <p class="cabin-style">Wooden exterior with balcony & patio</p>
              <p class="cabin-bed">🛏️ Queen Bed</p>
              <div class="cabin-features-list">
                <span>🏔️ Farm + Mountain View</span>
                <span>🌅 Private Balcony</span>
                <span>🏄 Surfboard Storage</span>
              </div>
            </div>
          </div>

          <!-- Rick's Windmill -->
          <div class="cabin-showcase-item">
            <div class="cabin-gallery">
              <div class="cabin-main-image">
                <img :src="cabinImages.windmill[activeCabinImage.windmill]" alt="Rick's Windmill">
              </div>
              <div class="cabin-thumbnails">
                <img v-for="(img, idx) in cabinImages.windmill" :key="idx" :src="img" @click="activeCabinImage.windmill = idx" :class="{ active: activeCabinImage.windmill === idx }" alt="Windmill">
              </div>
            </div>
            <div class="cabin-details">
              <h3>Rick's Windmill</h3>
              <p class="cabin-style">Unique design with black balcony</p>
              <p class="cabin-bed">🛏️ Queen Bed</p>
              <div class="cabin-features-list">
                <span>🏔️ Farm + Mountain View</span>
                <span>🌅 Black Balcony</span>
                <span>✨ Unique Architecture</span>
              </div>
            </div>
          </div>

          <!-- Lime Cabin -->
          <div class="cabin-showcase-item">
            <div class="cabin-gallery">
              <div class="cabin-main-image">
                <img :src="cabinImages.lime[activeCabinImage.lime]" alt="Lime Cabin">
              </div>
              <div class="cabin-thumbnails">
                <img v-for="(img, idx) in cabinImages.lime" :key="idx" :src="img" @click="activeCabinImage.lime = idx" :class="{ active: activeCabinImage.lime === idx }" alt="Lime">
              </div>
            </div>
            <div class="cabin-details">
              <h3>Lime Cabin</h3>
              <p class="cabin-style">Bright green exterior</p>
              <p class="cabin-bed">🛏️ Queen Bed</p>
              <div class="cabin-features-list">
                <span>🌿 Farm View</span>
                <span>💚 Colorful & Cozy</span>
                <span>🧳 Luggage Space</span>
              </div>
            </div>
          </div>

          <!-- Peace Cabin -->
          <div class="cabin-showcase-item">
            <div class="cabin-gallery">
              <div class="cabin-main-image">
                <img :src="cabinImages.peace[activeCabinImage.peace]" alt="Peace Cabin">
              </div>
              <div class="cabin-thumbnails">
                <img v-for="(img, idx) in cabinImages.peace" :key="idx" :src="img" @click="activeCabinImage.peace = idx" :class="{ active: activeCabinImage.peace === idx }" alt="Peace">
              </div>
            </div>
            <div class="cabin-details">
              <h3>Peace Cabin</h3>
              <p class="cabin-style">Wooden exterior</p>
              <p class="cabin-bed">🛏️ Queen Bed</p>
              <div class="cabin-features-list">
                <span>🏔️ Farm + Mountain View</span>
                <span>🏄 Surfboard Storage</span>
                <span>🧳 Luggage Space</span>
              </div>
            </div>
          </div>
          <!-- Jabalkap Cabin -->
          <div class="cabin-showcase-item">
            <div class="cabin-gallery">
              <div class="cabin-main-image">
                <img :src="cabinImages.jabalkap[activeCabinImage.jabalkap]" alt="Jabalkap Cabin">
              </div>
              <div class="cabin-thumbnails">
                <img v-for="(img, idx) in cabinImages.jabalkap" :key="idx" :src="img" @click="activeCabinImage.jabalkap = idx" :class="{ active: activeCabinImage.jabalkap === idx }" alt="Jabalkap">
              </div>
            </div>
            <div class="cabin-details">
              <h3>Jabalkap Cabin</h3>
              <p class="cabin-style">A-frame style</p>
              <p class="cabin-bed">🛏️ Single Bed</p>
              <div class="cabin-features-list">
                <span>🏔️ Farm + Mountain View</span>
                <span>🏄 Surfboard Storage</span>
                <span>🧳 Luggage Space</span>
              </div>
            </div>
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
            <p>"Staying here was incredible. Fully immersed in nature and local life. The peaceful environment helped me disconnect and reset. If you're a surfer, this place is a hidden gem."</p>
            <div class="review-author"><strong>Iyad</strong><span>Tunisia • Worldpackers</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"We spent 1 month here and couldn't be more happy. Strong sense of community. The meals were really good, the BBQ nights were delicious!"</p>
            <div class="review-author"><strong>Mariana</strong><span>Portugal • Worldpackers</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"From day one, I felt like part of the family. My cabin was super cute and cozy. The BBQ nights were the highlight—so delicious!"</p>
            <div class="review-author"><strong>Pame</strong><span>Chile • Google Maps</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Spectacular farm! Spending time with the goats made us very happy. Definitely a place to stay and enjoy Noni's desserts!"</p>
            <div class="review-author"><strong>Paola</strong><span>Peru • Verified Stay</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"The wooden cabins are very cozy! From BBQs and card games to movie nights and Noni's treats, there's always something to enjoy."</p>
            <div class="review-author"><strong>Isabelle</strong><span>Netherlands • Google Maps</span></div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p>"Can't speak highly enough of this family and their beautiful farm! Greeted with a community dinner—incredible food straight from the garden."</p>
            <div class="review-author"><strong>Zoe</strong><span>Australia • Verified Stay</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Message us on WhatsApp. We'll help you find the perfect program.</p>
          <a href="https://wa.me/6282258440585?text=Hi!%20I'm%20interested%20in%20staying%20at%20Mawun%20Valley%20Farm." class="btn btn-whatsapp btn-lg" target="_blank">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

useHead({ title: 'Experience & Stay - Mawun Valley Farm' })

const activeProgram = ref(null)

const cabinImages = {
  sandat: ['/images/sandat-1.jpg', '/images/sandat-2.jpg', '/images/sandat-3.jpg', '/images/sandat-4.jpg', '/images/sandat-5.jpg', '/images/sandat-6.jpg', '/images/sandat-7.jpg'],
  windmill: ['/images/windmill-1.jpg', '/images/windmill-2.jpg', '/images/windmill-3.jpg', '/images/windmill-4.jpg', '/images/windmill-5.jpg'],
  lime: ['/images/lime-1.jpg', '/images/lime-2.jpg', '/images/lime-3.jpg', '/images/lime-4.jpg', '/images/lime-5.jpg'],
  peace: ['/images/peace-1.jpg', '/images/peace-2.jpg', '/images/peace-3.jpg', '/images/peace-4.jpg', '/images/peace-5.jpg', '/images/peace-6.jpg', '/images/peace-7.jpg'],
  jabalkap: ['/images/jabalkap-1.jpg', '/images/jabalkap-2.jpg', '/images/jabalkap-3.jpg']
}

const activeCabinImage = reactive({
  sandat: 0,
  windmill: 0,
  lime: 0,
  peace: 0,
  jabalkap: 0
})

function openProgram(program) {
  activeProgram.value = program
  document.body.style.overflow = 'hidden'
}

function closeProgram() {
  activeProgram.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
.hero-bg { position: absolute; inset: 0; z-index: -1; }
.hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(44,62,45,0.5), rgba(44,62,45,0.8)); }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero-content { max-width: 700px; padding: 0 24px; }
.hero h1 { color: white; font-size: clamp(2.5rem, 6vw, 4rem); margin-bottom: 20px; }
.hero p { font-size: 1.2rem; opacity: 0.95; margin-bottom: 32px; line-height: 1.7; }
.section-label.light { color: var(--color-gold); }

.stats-bar { background: var(--color-dark); padding: 30px 0; }
.stats-grid { display: flex; justify-content: center; gap: 60px; flex-wrap: wrap; }
.stat-item { text-align: center; color: white; }
.stat-number { display: block; font-size: 2rem; font-weight: 700; color: var(--color-gold); }
.stat-label { font-size: 14px; opacity: 0.8; }

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

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-content { background: white; border-radius: 20px; max-width: 650px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; }
.modal-close { position: absolute; top: 16px; right: 16px; background: var(--color-cream); border: none; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; }
.modal-header { padding: 32px 32px 0; }
.modal-header .program-badge { position: static; display: inline-block; margin-bottom: 12px; }
.modal-header h2 { font-size: 1.6rem; margin-bottom: 8px; }
.program-tagline { color: #666; font-size: 15px; }
.modal-body { padding: 24px 32px; }
.modal-body h4 { margin: 28px 0 14px; color: var(--color-dark); font-size: 1.1rem; }
.modal-body p { line-height: 1.7; margin-bottom: 12px; }
.info-box { display: flex; flex-wrap: wrap; gap: 16px; background: var(--color-cream); padding: 16px; border-radius: 12px; margin-bottom: 20px; }
.info-item { display: flex; align-items: center; gap: 8px; font-size: 14px; }
.highlight-box { background: var(--color-cream); padding: 16px; border-radius: 8px; border-left: 4px solid var(--color-gold); }
.detail-list { list-style: none; padding: 0; }
.detail-list li { padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
.detail-list li:last-child { border-bottom: none; }
.check-list { list-style: none; padding: 0; }
.check-list li { padding: 8px 0 8px 28px; position: relative; }
.check-list li::before { content: "✓"; position: absolute; left: 0; color: var(--color-sage); font-weight: bold; }
.benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.benefit { background: var(--color-cream); padding: 12px; border-radius: 8px; font-size: 14px; }
.itinerary .day { display: flex; gap: 16px; padding: 14px 0; border-bottom: 1px solid #eee; }
.itinerary .day span { background: var(--color-sage); color: white; padding: 6px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; white-space: nowrap; height: fit-content; }
.itinerary .day div { font-size: 14px; line-height: 1.5; }
.itinerary .day strong { display: block; margin-bottom: 4px; }
.modal-footer { padding: 0 32px 32px; }

.cabins-section { padding: 100px 0; background: white; }
.cabin-features { display: flex; justify-content: center; flex-wrap: wrap; gap: 16px; margin-bottom: 60px; }
.cabin-features span { background: var(--color-cream); padding: 10px 20px; border-radius: 25px; font-size: 14px; }
.cabins-showcase { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; max-width: 1100px; margin: 0 auto; }
.cabin-showcase-item { background: var(--color-cream); border-radius: 20px; overflow: hidden; }
.cabin-gallery { padding: 16px 16px 0; }
.cabin-main-image { border-radius: 12px; overflow: hidden; margin-bottom: 12px; }
.cabin-main-image img { width: 100%; height: 280px; object-fit: cover; }
.cabin-thumbnails { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; }
.cabin-thumbnails img { width: 60px; height: 45px; object-fit: cover; border-radius: 6px; cursor: pointer; opacity: 0.6; transition: all 0.2s; flex-shrink: 0; }
.cabin-thumbnails img:hover, .cabin-thumbnails img.active { opacity: 1; }
.cabin-details { padding: 20px 24px 24px; }
.cabin-details h3 { font-size: 1.3rem; margin-bottom: 6px; }
.cabin-style { color: #666; font-size: 14px; margin-bottom: 8px; }
.cabin-bed { font-size: 15px; margin-bottom: 12px; }
.cabin-features-list { display: flex; flex-wrap: wrap; gap: 8px; }
.cabin-features-list span { background: white; padding: 6px 12px; border-radius: 15px; font-size: 13px; }

.reviews-section { padding: 100px 0; background: var(--color-cream); }
.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; max-width: 1100px; margin: 0 auto; }
.review-card { background: white; padding: 28px; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.review-card .stars { color: var(--color-gold); font-size: 16px; margin-bottom: 16px; }
.review-card p { font-size: 15px; line-height: 1.7; color: #555; font-style: italic; margin-bottom: 16px; }
.review-author strong { display: block; margin-bottom: 4px; }
.review-author span { font-size: 13px; color: #888; }

.cta-section { padding: 100px 0; background: var(--color-dark); text-align: center; }
.cta-content h2 { color: white; margin-bottom: 16px; }
.cta-content p { color: rgba(255,255,255,0.8); margin-bottom: 32px; }

.btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; border-radius: 30px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
.btn-primary { background: var(--color-gold); color: var(--color-dark); }
.btn-primary:hover { background: var(--color-terracotta); color: white; }
.btn-whatsapp { background: #25D366; color: white; }
.btn-whatsapp:hover { background: #128C7E; }
.btn-lg { padding: 16px 32px; font-size: 16px; }

@media (max-width: 900px) {
  .cabins-showcase { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .stats-grid { gap: 30px; }
  .programs-grid { grid-template-columns: 1fr; }
  .modal-content { border-radius: 16px 16px 0 0; max-height: 95vh; margin-top: auto; }
  .benefits-grid { grid-template-columns: 1fr; }
  .cabin-main-image img { height: 220px; }
}
</style>
