<template>
  <div class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <h1>Field Notes</h1>
        <p>Stories from the farm, local guides, and guest experiences in South Lombok</p>
      </div>
    </section>

    <section class="filter-section">
      <div class="container">
        <div class="filter-group">
          <span class="filter-label">Written by:</span>
          <div class="filter-buttons">
            <button 
              class="filter-btn" 
              :class="{ active: filters.author === 'all' }"
              @click="filters.author = 'all'"
            >All</button>
            <button 
              class="filter-btn" 
              :class="{ active: filters.author === 'guest' }"
              @click="filters.author = 'guest'"
            >Farm Guests</button>
            <button 
              class="filter-btn" 
              :class="{ active: filters.author === 'team' }"
              @click="filters.author = 'team'"
            >Mawun Valley Team</button>
          </div>
        </div>
        <div class="filter-group">
          <span class="filter-label">Topic:</span>
          <div class="filter-buttons">
            <button 
              class="filter-btn" 
              :class="{ active: filters.topic === 'all' }"
              @click="filters.topic = 'all'"
            >All Topics</button>
            <button 
              class="filter-btn" 
              :class="{ active: filters.topic === 'guest-diary' }"
              @click="filters.topic = 'guest-diary'"
            >Guest Diaries</button>
            <button 
              class="filter-btn" 
              :class="{ active: filters.topic === 'guides' }"
              @click="filters.topic = 'guides'"
            >Travel Guides</button>
            <button 
              class="filter-btn" 
              :class="{ active: filters.topic === 'farm-life' }"
              @click="filters.topic = 'farm-life'"
            >Farm Life</button>
            <button 
              class="filter-btn" 
              :class="{ active: filters.topic === 'cashew' }"
              @click="filters.topic = 'cashew'"
            >Cashew</button>
          </div>
        </div>
      </div>
    </section>

    <section class="blog-content">
      <div class="container">
        <div v-if="pending" class="loading">Loading articles...</div>
        <div v-else-if="error" class="error">Error loading articles. Please refresh.</div>
        <div v-else-if="!articles || articles.length === 0" class="no-results">
          <p>No articles found.</p>
        </div>
        <template v-else>
          <div class="blog-grid">
            <NuxtLink 
              v-for="article in filteredArticles" 
              :key="article._path" 
              :to="article._path"
              class="blog-card"
            >
              <div class="blog-card-image" v-if="article.image">
                <img :src="article.image" :alt="article.title">
              </div>
              <div class="blog-card-content">
                <span class="blog-card-category">{{ article.category || 'Article' }}</span>
                <h3>{{ article.title }}</h3>
                <p>{{ article.description }}</p>
                <span class="blog-card-date">{{ article.date }}</span>
              </div>
            </NuxtLink>
          </div>
          <div v-if="filteredArticles.length === 0" class="no-results">
            <p>No articles found matching your filters.</p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({ title: 'Field Notes - Mawun Valley Farm Blog' })

const filters = ref({
  author: 'all',
  topic: 'all'
})

const { data: articles, pending, error } = await useAsyncData('blog-list', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)

const filteredArticles = computed(() => {
  if (!articles.value) return []
  return articles.value.filter(article => {
    const authorMatch = filters.value.author === 'all' || article.authorType === filters.value.author
    const topicMatch = filters.value.topic === 'all' || article.topic === filters.value.topic
    return authorMatch && topicMatch
  })
})
</script>

<style scoped>
.blog-hero {
  padding: 150px 0 60px;
  background: linear-gradient(135deg, var(--color-sage) 0%, var(--color-dark) 100%);
  text-align: center;
  color: white;
}

.blog-hero h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 16px;
}

.blog-hero p {
  opacity: 0.9;
  font-size: 1.2rem;
}

.filter-section {
  padding: 24px 0;
  background: var(--color-warm-white);
  border-bottom: 1px solid #e8e6df;
}

.filter-group {
  margin-bottom: 16px;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-label {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-dark);
  margin-bottom: 10px;
  display: block;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  padding: 8px 16px;
  border: 2px solid #e8e6df;
  background: #fff;
  border-radius: 20px;
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-dark);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: var(--color-gold);
  background: var(--color-cream);
}

.filter-btn.active {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: var(--color-dark);
}

.blog-content {
  padding: 60px 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.blog-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-card-content {
  padding: 24px;
}

.blog-card-category {
  display: inline-block;
  background: var(--color-gold);
  color: var(--color-dark);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.blog-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--color-dark);
  line-height: 1.4;
}

.blog-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.blog-card-date {
  font-size: 12px;
  color: #888;
}

.loading, .error, .no-results {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.error {
  color: #c44;
}
</style>
