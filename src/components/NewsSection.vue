<template>
  <section class="news-section">
    <h2 class="section-title">新着情報</h2>
    <div class="news-list-container">
      <ul class="news-list">
        <li v-for="item in paginatedNews" :key="item.id" class="news-item">
          <router-link
            v-if="!isExternal(getItemLink(item))"
            :to="getItemLink(item)"
            class="news-link-wrapper"
          >
            <div class="news-meta">
              <span class="news-date">{{ formatDate(item.date) }}</span>
              <span class="news-tag" :class="getTagClass(getPrimaryTag(item))">{{ getPrimaryTag(item) }}</span>
            </div>
            <p class="news-text">{{ item.title }}</p>
          </router-link>
          <a
            v-else
            :href="getItemLink(item)"
            class="news-link-wrapper"
            :target="isExternal(item.url) ? '_blank' : null"
            :rel="isExternal(item.url) ? 'noopener noreferrer' : null"
            :class="{ 'no-link': getItemLink(item) === '#' }"
          >
            <div class="news-meta">
              <span class="news-date">{{ formatDate(item.date) }}</span>
              <span class="news-tag" :class="getTagClass(getPrimaryTag(item))">{{ getPrimaryTag(item) }}</span>
            </div>
            <p class="news-text">{{ item.title }}</p>
          </a>
        </li>
      </ul>
    </div>
    <BasePagination
      v-if="totalPages > 1"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-changed="changePage"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasePagination from './BasePagination.vue';
import newsData from '@/data/news.json';

export default defineComponent({
  name: 'NewsSection',
  components: {
    BasePagination
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      newsItems: newsData
    };
  },
  computed: {
    sortedNews() {
      return [...this.newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    },
    totalPages() {
      return Math.ceil(this.sortedNews.length / this.itemsPerPage);
    },
    paginatedNews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedNews.slice(start, end);
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    getTagClass(tag) {
      const tagMap = {
        'お知らせ': 'tag-info',
        'ニュース': 'tag-pr',
        '動画投稿': 'tag-video',
        'そのほか': 'tag-other'
      };
      return tagMap[tag] || 'tag-default';
    },
    formatDate(date) {
      return typeof date === 'string' ? date.replace(/-/g, '.') : date;
    },
    getPrimaryTag(item) {
      return Array.isArray(item.tags) && item.tags.length > 0 ? item.tags[0] : 'そのほか';
    },
    getItemLink(item) {
      if (item.url) {
        return item.url;
      }
      return item.slug ? `/news/${item.slug}` : '/news';
    },
    isExternal(url) {
      return typeof url === 'string' && url.startsWith('http');
    }
  }
});
</script>

<style scoped>
.news-section { width: 100%; margin: 2.5rem auto; }
.section-title { font-size: 1.75rem; color: #008037; text-align: center; margin-bottom: 2rem; font-weight: 700; }
.news-list-container { background-color: #fff; border-radius: 0.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden; }
.news-list { list-style: none; padding: 0; margin: 0; }
.news-item { border-bottom: 1px solid #f0f0f0; }
.news-item:last-child { border-bottom: none; }
.news-link-wrapper { display: flex; align-items: center; padding: 1.25rem 1.5rem; text-decoration: none; transition: background-color 0.3s ease; }
.news-link-wrapper:hover:not(.no-link) { background-color: #e2e6ea; }
.news-meta { display: flex; align-items: center; margin-right: 1.5rem; flex-shrink: 0; }
.news-date { font-size: 0.9375rem; color: #6c757d; margin-right: 1rem; }
.news-tag { font-size: 0.8125rem; color: #fff; padding: 0.25rem 0; border-radius: 0.25rem; font-weight: 700; min-width: 5rem; text-align: center; }
.tag-info { background-color: #008037; }
.tag-pr { background-color: #17a2b8; }
.tag-video { background-color: #f4a340; }
.tag-other { background-color: #6f42c1; }
.tag-default { background-color: #6c757d; }
.news-text { font-size: 1rem; color: #343a40; margin: 0; line-height: 1.5; }
.no-link { cursor: default; }
@media (max-width: 768px) { .news-link-wrapper { flex-direction: column; align-items: flex-start; } .news-meta { margin-right: 0; margin-bottom: 0.5rem; } }
</style>
