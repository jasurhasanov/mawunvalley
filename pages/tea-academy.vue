<template>
  <main class="tea-page">
    <section class="tea-hero">
      <div class="hero-inner">
        <p class="eyebrow">Mawun Valley private system</p>
        <h1>Tea Academy</h1>
        <p class="lede">
          A personal operating system for learning tea through drinking, serving, farming,
          writing, hosting, experimenting, traveling, and building Mawun Valley's tea identity.
        </p>
        <div class="hero-actions" aria-label="Tea Academy quick actions">
          <a href="#academies">12 academies</a>
          <a href="#tools">Tools</a>
          <a href="#website">Website map</a>
        </div>
      </div>
    </section>

    <section class="section status-band">
      <div class="container status-grid">
        <article class="status-panel">
          <span class="label">Boundary</span>
          <h2>Exactly 12 Academies</h2>
          <p>
            The academy stops at The House. Signature tea experiences, pairings, pricing, and seasonal rotations
            are folded back into the existing academies, not kept as a thirteenth academy or separate tool.
          </p>
        </article>
        <article class="status-panel compact">
          <span class="label">Current rank</span>
          <strong>Keeper foundation</strong>
          <p>Practice, storage, garden, service, and care systems are now part of the structure.</p>
        </article>
        <article class="status-panel compact">
          <span class="label">Next build</span>
          <strong>Content tools</strong>
          <p>Academy detail pages, journal, passport, lab, garden, house, and templates.</p>
        </article>
      </div>
    </section>

    <section id="academies" class="section">
      <div class="container section-head">
        <p class="eyebrow dark">The corrected academy spine</p>
        <h2>The 12 Academies</h2>
      </div>
      <div class="container academy-grid">
        <article v-for="academy in academies" :key="academy.title" class="academy-card">
          <span class="number">{{ academy.number }}</span>
          <div>
            <h3>{{ academy.title }}</h3>
            <p>{{ academy.summary }}</p>
            <small>{{ academy.progress }}</small>
          </div>
        </article>
      </div>
    </section>

    <section id="tools" class="section alt">
      <div class="container section-head">
        <p class="eyebrow dark">Operating tools</p>
        <h2>What the Website Should Become</h2>
      </div>
      <div class="container tool-grid">
        <article v-for="tool in tools" :key="tool.name" class="tool-card">
          <h3>{{ tool.name }}</h3>
          <p>{{ tool.summary }}</p>
          <code>{{ tool.path }}</code>
        </article>
      </div>
    </section>

    <section id="website" class="section">
      <div class="container website-layout">
        <div>
          <p class="eyebrow dark">Website architecture</p>
          <h2>Supporting Sections, Not More Academies</h2>
          <p>
            The extra material belongs in tools around the academy. The website should feel like a private
            dashboard Jasur can actually use, with clear missions, output templates, and records.
          </p>
        </div>
        <div class="section-list">
          <article v-for="section in supportingSections" :key="section" class="section-row">
            <span></span>
            <p>{{ section }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section rank-section">
      <div class="container">
        <p class="eyebrow dark">Progress language</p>
        <h2>Rank System</h2>
        <div class="rank-track">
          <article v-for="rank in ranks" :key="rank.name" class="rank-item">
            <strong>{{ rank.name }}</strong>
            <p>{{ rank.summary }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const academies = [
  { number: '01', title: 'The Leaf', summary: 'Tea as a plant, processing path, categories, and quality signals.', progress: 'Foundation knowledge' },
  { number: '02', title: 'The Cup', summary: 'Brewing, water, temperature, timing, vessel choice, and repeatable tasting.', progress: 'Daily practice' },
  { number: '03', title: 'The Tongue', summary: 'Flavor memory, tasting language, mouthfeel, aroma, defects, and comparison.', progress: 'Sensory skill' },
  { number: '04', title: 'The Hand', summary: 'Weighing, rinsing, pouring, cleaning, preparing, and serving calmly.', progress: 'Physical fluency' },
  { number: '05', title: 'The Table', summary: 'Hospitality, ceremony, pacing, guest attention, and food connection.', progress: 'Guest experience' },
  { number: '06', title: 'The Market', summary: 'Sourcing, vendors, pricing, value, ethics, and buying decisions.', progress: 'Buying judgment' },
  { number: '07', title: 'The Archive', summary: 'Notes, labels, tea records, experiments, photos, and review habits.', progress: 'Memory system' },
  { number: '08', title: 'The Map', summary: 'Origins, terroir, travel, tea geography, climate, and place-based learning.', progress: 'World context' },
  { number: '09', title: 'The Spirit', summary: 'Philosophy, culture, silence, ritual, gratitude, and meaning without performance.', progress: 'Depth and restraint' },
  { number: '10', title: 'The Lab', summary: 'Experiments, variables, blends, cold brew, service trials, and useful failures.', progress: 'Maker practice' },
  { number: '11', title: 'The Garden', summary: 'Tea plants, herbs, local botanicals, living landscape, and Mawun Valley ecology.', progress: 'Living ground' },
  { number: '12', title: 'The House', summary: 'Tools, storage, service station, guest flow, atmosphere, and maintenance.', progress: 'Physical home' }
]

const tools = [
  { name: 'Journey Guide', path: '/tea-academy', summary: 'The dashboard: current academy, current mission, rank, and what to do next.' },
  { name: 'Tea Journal', path: '/tea-academy/journal', summary: 'Daily tasting notes, guest notes, ceremony reflections, and field notes.' },
  { name: 'Tea Passport', path: '/tea-academy/passport', summary: 'A record of teas by origin, vendor, category, date opened, rating, and repeat decision.' },
  { name: 'Tea Lab', path: '/tea-academy/lab', summary: 'Brewing experiments, blend tests, cold brew trials, and service experiments.' },
  { name: 'Tea Garden', path: '/tea-academy/garden', summary: 'Plants, herbs, local botanicals, garden-to-cup ideas, and care rhythm.' },
  { name: 'Tea House', path: '/tea-academy/house', summary: 'Storage, service station, tool inventory, checklists, and maintenance rhythm.' }
]

const supportingSections = [
  'Signature ceremony library',
  "Noni's tea service integration",
  'Mawun Valley tea garden plan',
  'Guest-facing tea story',
  'Internal staff scripts',
  'Storage labels and tasting cards',
  'Monthly review dashboard',
  'Procurement and vendor shortlist',
  'Seasonal tea calendar'
]

const ranks = [
  { name: 'Seed', summary: 'Start the habit and basic language.' },
  { name: 'Keeper', summary: 'Build reliable practice, storage, service, and care.' },
  { name: 'Host', summary: 'Serve guests with confidence and restraint.' },
  { name: 'Maker', summary: 'Experiment, blend, document, and improve.' },
  { name: 'Steward', summary: "Connect tea to Mawun Valley's land, culture, archive, and long-term identity." }
]

useHead({
  title: 'Tea Academy - Mawun Valley',
  meta: [
    {
      name: 'description',
      content: "Jasur's private Mawun Valley Tea Academy dashboard: 12 academies, tools, rank system, and website architecture."
    },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.tea-page {
  background: #f7f3ec;
  color: #28352d;
  min-height: 100vh;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
}

.tea-hero {
  min-height: 72vh;
  display: flex;
  align-items: center;
  background: linear-gradient(120deg, #13251d 0%, #274233 58%, #6f5631 100%);
  color: #fff;
}

.hero-inner {
  width: min(900px, calc(100% - 40px));
  margin: 0 auto;
}

.eyebrow {
  margin: 0 0 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: .78rem;
  font-weight: 700;
  color: #dfbf73;
}

.eyebrow.dark {
  color: #8b5c31;
}

h1,
h2,
h3,
p {
  letter-spacing: 0;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 9vw, 6.6rem);
  line-height: .95;
  color: #fff;
}

h2 {
  margin: 0 0 14px;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.05;
  color: #213126;
}

h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
  color: #213126;
}

.lede {
  max-width: 720px;
  margin: 22px 0 0;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, .9);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.hero-actions a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, .42);
  border-radius: 6px;
  color: #fff;
  text-decoration: none;
  background: rgba(255, 255, 255, .08);
}

.section {
  padding: 76px 0;
}

.section.alt,
.status-band {
  background: #efe6d7;
}

.status-grid {
  display: grid;
  grid-template-columns: 1.4fr .8fr .8fr;
  gap: 14px;
}

.status-panel,
.academy-card,
.tool-card,
.rank-item {
  background: #fffdf8;
  border: 1px solid rgba(68, 87, 71, .14);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(31, 49, 38, .07);
}

.status-panel {
  padding: 24px;
}

.status-panel.compact strong {
  display: block;
  margin-bottom: 10px;
  font-size: 1.35rem;
  color: #213126;
}

.status-panel p,
.academy-card p,
.tool-card p,
.website-layout p,
.rank-item p {
  margin: 0;
  line-height: 1.65;
  color: #536056;
}

.label {
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  font-size: .72rem;
  font-weight: 800;
  color: #9a6636;
}

.section-head {
  margin-bottom: 26px;
}

.academy-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.academy-card {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 14px;
  padding: 20px;
}

.number {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #273c2f;
  color: #f3d68a;
  font-weight: 800;
  font-size: .82rem;
}

.academy-card small {
  display: block;
  margin-top: 14px;
  color: #8b5c31;
  font-weight: 700;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.tool-card {
  padding: 22px;
}

.tool-card code {
  display: inline-block;
  margin-top: 14px;
  padding: 6px 8px;
  border-radius: 5px;
  background: #efe6d7;
  color: #35483a;
  font-size: .84rem;
}

.website-layout {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 42px;
  align-items: start;
}

.section-list {
  display: grid;
  gap: 10px;
}

.section-row {
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(68, 87, 71, .16);
}

.section-row span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #b87943;
}

.rank-section {
  background: #fffdf8;
}

.rank-track {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.rank-item {
  padding: 18px;
}

.rank-item strong {
  display: block;
  margin-bottom: 8px;
  color: #213126;
}

@media (max-width: 900px) {
  .status-grid,
  .academy-grid,
  .tool-grid,
  .website-layout,
  .rank-track {
    grid-template-columns: 1fr;
  }

  .tea-hero {
    min-height: 66vh;
  }

  .section {
    padding: 58px 0;
  }
}
</style>
