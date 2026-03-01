<template>
  <div class="blog-post">
    <ContentDoc v-slot="{ doc }">
      <article class="container">
        <header class="post-header">
          <span class="post-date">{{ doc.date }}</span>
          <h1>{{ doc.title }}</h1>
        </header>
        <ContentRenderer :value="doc" class="post-content" />
      </article>
    </ContentDoc>
  </div>
</template>

<style scoped>
.blog-post { padding: 150px 0 80px; }
.post-header { text-align: center; margin-bottom: 40px; }
.post-date { color: #888; font-size: 14px; }
.post-header h1 { margin-top: 10px; }
.post-content { max-width: 700px; margin: 0 auto; line-height: 1.8; }
</style>
