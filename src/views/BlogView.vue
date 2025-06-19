<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="blog-container">
      <header class="page-header">
        <h1>ブログ</h1>
        <p class="header-description">
          建築講座、開発日記、運営からのお知らせなど、やんまー帝国連邦の活動を発信します。
        </p>
      </header>

      <div class="blog-list">
        <article v-for="post in paginatedPosts" :key="post.slug" class="post-card">
          <router-link :to="`/blog/${post.slug}`" class="post-link">
            <div class="post-image-placeholder">
              <!-- [変更] post.imagesが空の場合、デフォルト画像 'image.webp' を表示 -->
              <img 
                :src="getImageUrl(post.images && post.images.length > 0 ? post.images[0] : 'image.webp')" 
                :alt="post.title" 
                @error="imageLoadError"
              >
            </div>
            <div class="post-content">
              <p class="post-meta">
                <span class="post-date">{{ post.date }}</span>
                <span class="post-category">{{ post.category }}</span>
              </p>
              <h2 class="post-title">{{ post.title }}</h2>
              <span class="read-more">記事を読む</span>
            </div>
          </router-link>
        </article>
      </div>

      <BasePagination
        v-if="totalPages > 1"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="changePage"
      />
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import BasePagination from '@/components/BasePagination.vue';
import { posts } from '@/blog-posts.js';

export default {
  name: 'BlogView',
  components: {
    AppBreadcrumb,
    BasePagination
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      allPosts: posts
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allPosts.length / this.itemsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.allPosts.slice(start, end);
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      window.scrollTo(0, 0);
    },
    getImageUrl(fileName) {
      if (!fileName) {
        // デフォルト画像のファイル名を指定
        fileName = 'image.webp';
      }
      try {
        return require(`@/assets/blog/${fileName}`);
      } catch (e) {
        console.error(`Image not found in @/assets/blog/${fileName}`);
        return 'https://placehold.co/1920x1080/e0e0e0/6c757d?text=Image+Missing';
      }
    },
    imageLoadError(event) {
      event.target.src = 'https://placehold.co/1920x1080/e0e0e0/6c757d?text=Image+Load+Error';
    }
  }
}
</script>

<style scoped>
.blog-container {
  margin: 0 auto;
}

.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin: 0 0 0.5rem 0;
}

.header-description {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.post-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.post-image-placeholder {
  aspect-ratio: 16 / 9;
  background-color: #e9ecef;
  overflow: hidden;
}

.post-image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.post-card:hover .post-image-placeholder img {
  transform: scale(1.05);
}

.post-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
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
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  flex-grow: 1;
}

.read-more {
  margin-top: auto;
  font-weight: 700;
  color: #008037;
  text-align: right;
}
</style>
