<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div v-if="post" class="post-container">
      <article>
        <header class="post-header">
          <p class="post-meta">
            <span class="post-date">{{ post.date }}</span>
            <span class="post-category">{{ post.category }}</span>
          </p>
          <h1 class="post-title">{{ post.title }}</h1>
        </header>

        <div class="post-content" v-html="post.content"></div>
        
        <div v-if="post.images && post.images.length > 0" class="post-image-gallery">
          <div v-for="(image, index) in post.images" :key="index" class="gallery-image-wrapper">
             <img :src="getImageUrl(image)" :alt="`${post.title} - 画像${index + 1}`" @error="imageLoadError">
          </div>
        </div>
      </article>
    </div>
    <div v-else class="not-found-container">
      <NotFoundView />
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { posts } from '@/blog-posts.js';

export default {
  name: 'BlogPostView',
  components: {
    AppBreadcrumb,
    NotFoundView
  },
  setup() {
    const route = useRoute();
    const post = ref(null);

    const findPost = (slug) => {
      post.value = posts.find(p => p.slug === slug) || null;
    };

    const getImageUrl = (fileName) => {
      if (!fileName) {
        return 'https://placehold.co/1920x1080/e0e0e0/6c757d?text=File+Not+Found';
      }
      try {
        return require(`@/assets/blog/${fileName}`);
      } catch (e) {
        console.error(`Image not found in @/assets/blog/${fileName}`);
        return 'https://placehold.co/1920x1080/e0e0e0/6c757d?text=Image+Missing';
      }
    };

    const imageLoadError = (event) => {
      event.target.src = 'https://placehold.co/1920x1080/e0e0e0/6c757d?text=Load+Error';
    };

    onMounted(() => {
      findPost(route.params.slug);
    });

    watch(() => route.params.slug, (newSlug) => {
      findPost(newSlug);
    });

    return { post, getImageUrl, imageLoadError };
  }
}
</script>

<style scoped>
.post-container {
  max-width: 80rem;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem 3rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.post-header {
  border-bottom: 2px solid #008037;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #6c757d;
}

.post-category {
  background-color: #008037;
  color: #fff;
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
}

.post-title {
  font-size: 2.2rem;
  color: #343a40;
  margin: 0;
  line-height: 1.3;
}

.post-content {
  font-size: 1rem;
  line-height: 2;
  color: #333;
  margin-bottom: 3rem;
}

.post-content ::v-deep(a) {
  color: #008037;
  text-decoration: none;
  font-weight: 700;
}
.post-content ::v-deep(a:hover) {
  text-decoration: underline;
}

.post-image-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
.gallery-image-wrapper {
  border-radius: 8px;
  overflow: hidden;
  background-color: #e9ecef;
}
.gallery-image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.not-found-container {
  padding-top: 2rem;
}

@media (max-width: 768px) {
  .post-container {
    padding: 1.5rem;
  }
  .post-title {
    font-size: 1.8rem;
  }
}
</style>
