<template>
  <div class="blog-post">
    <ContentDoc v-slot="{ doc }">
      <section class="article-hero" v-if="doc.image">
        <div class="article-hero-bg">
          <img :src="doc.image" :alt="doc.title">
        </div>
        <div class="article-hero-content">
          <span class="category">{{ doc.category }}</span>
          <h1>{{ doc.title }}</h1>
          <p class="meta">By {{ doc.author }}</p>
        </div>
      </section>
      
      <article class="article-content">
        <div class="container">
          <NuxtLink to="/blog" class="back-link">← Back to Field Notes</NuxtLink>
          
          <div v-if="doc.authorBio" class="author-box">
            <p><strong>About the Author:</strong> {{ doc.authorBio }}</p>
          </div>

          <ContentRenderer :value="doc" class="prose" />

          <div class="article-cta">
            <h2>Experience Mawun Valley</h2>
            <p>Book your stay and discover the magic for yourself.</p>
            <div class="cta-buttons">
              <NuxtLink to="/stay" class="btn btn-primary">View Cabins</NuxtLink>
              <a href="https://wa.me/6282258440585" class="btn btn-whatsapp" target="_blank">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </article>
    </ContentDoc>
  </div>
</template>

<style scoped>
.article-hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.article-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.article-hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(44,62,45,0.4), rgba(44,62,45,0.7));
}

.article-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 24px;
}

.category {
  display: inline-block;
  background: var(--color-gold);
  color: var(--color-dark);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}

.article-hero h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  margin-bottom: 16px;
  line-height: 1.2;
}

.meta {
  opacity: 0.9;
  font-size: 1.1rem;
}

.article-content {
  padding: 60px 0 80px;
}

.article-content .container {
  max-width: 800px;
}

.back-link {
  display: inline-block;
  color: var(--color-terracotta);
  font-weight: 600;
  margin-bottom: 30px;
  text-decoration: none;
}

.back-link:hover {
  color: var(--color-gold);
}

.author-box {
  margin-bottom: 30px;
  padding: 20px;
  background: var(--color-cream);
  border-radius: 12px;
  font-style: italic;
}

.prose {
  line-height: 1.8;
  font-size: 17px;
  color: #333;
}

.prose :deep(h2) {
  font-size: 1.6rem;
  margin: 2.5rem 0 1rem;
  color: var(--color-dark);
}

.prose :deep(h3) {
  font-size: 1.3rem;
  margin: 2rem 0 0.8rem;
  color: var(--color-dark);
}

.prose :deep(p) {
  margin-bottom: 1.5rem;
}

.prose :deep(img) {
  width: 100%;
  border-radius: 12px;
  margin: 2rem 0;
}

.prose :deep(blockquote) {
  border-left: 4px solid var(--color-gold);
  padding-left: 24px;
  margin: 2rem 0;
  font-style: italic;
  color: #555;
}

.prose :deep(a) {
  color: var(--color-terracotta);
  font-weight: 500;
}

.prose :deep(ul), .prose :deep(ol) {
  margin: 1.5rem 0;
  padding-left: 24px;
}

.prose :deep(li) {
  margin-bottom: 0.5rem;
}

.article-cta {
  margin-top: 60px;
  padding: 40px;
  background: linear-gradient(135deg, var(--color-cream) 0%, #e8e6df 100%);
  border-radius: 16px;
  text-align: center;
}

.article-cta h2 {
  margin-bottom: 12px;
}

.article-cta p {
  color: #666;
  margin-bottom: 24px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-block;
  background: var(--color-gold);
  color: var(--color-dark);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: var(--color-terracotta);
  color: white;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #25D366;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-whatsapp:hover {
  background: #128C7E;
}
</style>
