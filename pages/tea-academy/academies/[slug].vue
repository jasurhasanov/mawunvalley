<template>
  <main v-if="academy" class="academy-detail">
    <section class="detail-hero">
      <div class="container">
        <NuxtLink to="/tea-academy" class="back-link">Tea Academy</NuxtLink>
        <p class="eyebrow">Academy {{ academy.number }}</p>
        <h1>{{ academy.title }}</h1>
        <p class="lede">{{ academy.purpose }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container detail-grid">
        <article class="panel wide">
          <span class="label">Why it matters</span>
          <p>{{ academy.why }}</p>
        </article>
        <article class="panel">
          <span class="label">Rank</span>
          <strong>{{ academy.rank }}</strong>
        </article>
        <article class="panel">
          <span class="label">Next action</span>
          <p>{{ academy.nextAction }}</p>
        </article>
      </div>
    </section>

    <section class="section alt">
      <div class="container split">
        <div>
          <p class="eyebrow dark">Modules</p>
          <h2>What To Practice</h2>
          <div class="list-grid">
            <article v-for="module in academy.modules" :key="module" class="list-item">{{ module }}</article>
          </div>
        </div>
        <div>
          <p class="eyebrow dark">Core questions</p>
          <h2>What To Ask</h2>
          <div class="stack">
            <p v-for="question in academy.questions" :key="question" class="line-item">{{ question }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow dark">Missions</p>
          <h2>Real Outputs</h2>
          <div class="stack">
            <p v-for="mission in academy.missions" :key="mission" class="line-item">{{ mission }}</p>
          </div>
        </div>
        <div>
          <p class="eyebrow dark">Checklist</p>
          <h2>Done Means</h2>
          <div class="stack">
            <p v-for="output in academy.outputs" :key="output" class="line-item">{{ output }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container section-head">
        <p class="eyebrow dark">Connected tools</p>
        <h2>Where This Work Lives</h2>
      </div>
      <div class="container tool-links">
        <NuxtLink v-for="tool in academy.tools" :key="tool" :to="tool">{{ tool }}</NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { findAcademy } from '../../../data/teaAcademy'

const route = useRoute()
const academy = findAcademy(route.params.slug)

if (!academy) {
  throw createError({ statusCode: 404, statusMessage: 'Academy not found' })
}

useHead({
  title: `${academy.title} - Tea Academy - Mawun Valley`,
  meta: [
    { name: 'description', content: academy.purpose },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.academy-detail { background: #f7f3ec; color: #28352d; min-height: 100vh; }
.container { max-width: 1120px; margin: 0 auto; padding: 0 20px; }
.detail-hero { padding: 96px 0 72px; background: linear-gradient(120deg, #13251d 0%, #284435 62%, #715733 100%); color: #fff; }
.back-link { color: #f3d68a; text-decoration: none; font-weight: 800; }
.eyebrow, .label { display: block; margin: 18px 0 12px; text-transform: uppercase; letter-spacing: 1.6px; font-size: .72rem; font-weight: 800; color: #dfbf73; }
.eyebrow.dark, .label { color: #8b5c31; }
h1, h2, p { letter-spacing: 0; }
h1 { margin: 0; font-size: clamp(3rem, 8vw, 6rem); line-height: .95; color: #fff; }
h2 { margin: 0 0 18px; font-size: clamp(1.7rem, 4vw, 2.7rem); line-height: 1.05; color: #213126; }
.lede { max-width: 780px; margin: 22px 0 0; font-size: clamp(1.05rem, 2vw, 1.32rem); line-height: 1.55; color: rgba(255,255,255,.9); }
.section { padding: 72px 0; }
.section.alt { background: #efe6d7; }
.detail-grid { display: grid; grid-template-columns: 1.3fr .7fr 1fr; gap: 14px; }
.panel, .list-item, .line-item, .tool-links a { background: #fffdf8; border: 1px solid rgba(68,87,71,.14); border-radius: 8px; box-shadow: 0 12px 32px rgba(31,49,38,.07); }
.panel { padding: 24px; }
.panel p, .line-item { margin: 0; line-height: 1.65; color: #536056; }
.panel strong { display: block; font-size: 1.4rem; color: #213126; }
.split { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: start; }
.list-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.list-item { padding: 16px; font-weight: 800; color: #213126; }
.stack { display: grid; gap: 10px; }
.line-item { padding: 16px; }
.tool-links { display: flex; flex-wrap: wrap; gap: 10px; }
.tool-links a { padding: 12px 14px; color: #213126; text-decoration: none; font-weight: 800; }
@media (max-width: 900px) { .detail-grid, .split, .list-grid { grid-template-columns: 1fr; } .section { padding: 56px 0; } }
</style>
