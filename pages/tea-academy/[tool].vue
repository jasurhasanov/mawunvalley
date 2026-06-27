<template>
  <main v-if="tool" class="tool-page">
    <section class="tool-hero">
      <div class="container">
        <NuxtLink to="/tea-academy" class="back-link">Tea Academy</NuxtLink>
        <p class="eyebrow">Operating tool</p>
        <h1>{{ tool.name }}</h1>
        <p class="lede">{{ tool.summary }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container tool-layout">
        <article class="panel intro-panel">
          <span class="label">Purpose</span>
          <h2>Keep The Work Usable</h2>
          <p>
            This page is the structure for the {{ tool.name.toLowerCase() }}. It keeps Tea Academy work practical:
            every note, test, checklist, or record should make the next tea service easier to repeat and improve.
          </p>
        </article>
        <article class="panel compact">
          <span class="label">Boundary</span>
          <strong>Supports 12 academies</strong>
          <p>No extra academy numbers live here.</p>
        </article>
      </div>
    </section>

    <section class="section alt">
      <div class="container section-head">
        <p class="eyebrow dark">Sections</p>
        <h2>What To Capture</h2>
      </div>
      <div class="container section-grid">
        <article v-for="section in tool.sections" :key="section" class="section-card">
          <h3>{{ section }}</h3>
          <p>{{ sectionText(section) }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container section-head">
        <p class="eyebrow dark">Connected academies</p>
        <h2>Where This Tool Appears</h2>
      </div>
      <div class="container academy-links">
        <NuxtLink v-for="academy in connectedAcademies" :key="academy.slug" :to="`/tea-academy/academies/${academy.slug}`">
          <span>{{ academy.number }}</span>
          {{ academy.title }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { academies, toolPages } from '../../data/teaAcademy'

const route = useRoute()
const tool = toolPages.find((item) => item.path === `/tea-academy/${route.params.tool}`)

if (!tool) {
  throw createError({ statusCode: 404, statusMessage: 'Tea Academy tool not found' })
}

const connectedAcademies = academies.filter((academy) => academy.tools.includes(tool.path))
const sectionText = (section) => `Use this for ${section.toLowerCase()} records that can be reviewed, repeated, and improved.`

useHead({
  title: `${tool.name} - Tea Academy - Mawun Valley`,
  meta: [
    { name: 'description', content: tool.summary },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.tool-page { background: #f7f3ec; color: #28352d; min-height: 100vh; }
.container { max-width: 1120px; margin: 0 auto; padding: 0 20px; }
.tool-hero { padding: 92px 0 72px; background: linear-gradient(120deg, #13251d 0%, #284435 62%, #715733 100%); color: #fff; }
.back-link { color: #f3d68a; text-decoration: none; font-weight: 800; }
.eyebrow, .label { display: block; margin: 18px 0 12px; text-transform: uppercase; letter-spacing: 1.6px; font-size: .72rem; font-weight: 800; color: #dfbf73; }
.eyebrow.dark, .label { color: #8b5c31; }
h1, h2, h3, p { letter-spacing: 0; }
h1 { margin: 0; font-size: clamp(3rem, 8vw, 6rem); line-height: .95; color: #fff; }
h2 { margin: 0 0 14px; font-size: clamp(1.7rem, 4vw, 2.7rem); color: #213126; }
h3 { margin: 0 0 10px; color: #213126; }
.lede { max-width: 760px; margin: 22px 0 0; font-size: clamp(1.05rem, 2vw, 1.32rem); line-height: 1.55; color: rgba(255,255,255,.9); }
.section { padding: 72px 0; }
.section.alt { background: #efe6d7; }
.tool-layout { display: grid; grid-template-columns: 1.4fr .8fr; gap: 14px; }
.panel, .section-card, .academy-links a { background: #fffdf8; border: 1px solid rgba(68,87,71,.14); border-radius: 8px; box-shadow: 0 12px 32px rgba(31,49,38,.07); }
.panel { padding: 24px; }
.panel p, .section-card p { margin: 0; line-height: 1.65; color: #536056; }
.compact strong { display: block; margin-bottom: 10px; font-size: 1.35rem; color: #213126; }
.section-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
.section-card { padding: 20px; }
.academy-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.academy-links a { display: flex; gap: 10px; align-items: center; padding: 16px; color: #213126; text-decoration: none; font-weight: 800; }
.academy-links span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; background: #273c2f; color: #f3d68a; font-size: .78rem; }
@media (max-width: 900px) { .tool-layout, .section-grid, .academy-links { grid-template-columns: 1fr; } .section { padding: 56px 0; } }
</style>
