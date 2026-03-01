<template>
  <div class="blog-page">
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Field Notes</span>
        <h1>Stories from the Farm</h1>
        <p>Updates, reflections, and tales from Mawun Valley.</p>
      </div>
    </section>

    <section class="blog-list">
      <div class="container">
        <ContentList path="/blog" v-slot="{ list }">
          <div class="blog-grid">
            <NuxtLink 
              v-for="article in list" 
              :key="article._path" 
              :to="article._path"
              class="blog-card"
            >
              <div class="blog-card-content">
                <span class="blog-date">{{ article.date }}</span>
                <h3>{{ article.title }}</h3>
                <p>{{ article.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Field Notes - Mawun Valley Farm' })
</script>

<style scoped>
.page-hero { padding: 150px 0 60px; background: var(--color-cream); text-align: center; }
.blog-list { padding: 60px 0; }
.blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }
.blog-card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-decoration: none; color: inherit; transition: transform 0.3s; padding: 24px; }
.blog-card:hover { transform: translateY(-5px); }
.blog-date { font-size: 12px; color: #888; }
.blog-card h3 { margin: 8px 0; color: var(--color-dark); }
.blog-card p { font-size: 14px; color: #666; }
</style>
