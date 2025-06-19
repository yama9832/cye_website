<template>
  <section class="news-section">
    <h2 class="section-title">新着情報</h2>
    <div class="news-list-container">
      <ul class="news-list">
        <li v-for="item in paginatedNews" :key="item.id" class="news-item">
          <router-link
            v-if="!isExternal(item.url) && item.url"
            :to="item.url"
            class="news-link-wrapper"
          >
            <div class="news-meta">
              <span class="news-date">{{ item.date }}</span>
              <span class="news-tag" :class="getTagClass(item.tag)">{{ item.tag }}</span>
            </div>
            <p class="news-text">{{ item.text }}</p>
          </router-link>
          <a
            v-else
            :href="item.url || '#'"
            class="news-link-wrapper"
            :target="isExternal(item.url) ? '_blank' : null"
            :rel="isExternal(item.url) ? 'noopener noreferrer' : null"
            :class="{ 'no-link': !item.url || item.url === '#' }"
          >
            <div class="news-meta">
              <span class="news-date">{{ item.date }}</span>
              <span class="news-tag" :class="getTagClass(item.tag)">{{ item.tag }}</span>
            </div>
            <p class="news-text">{{ item.text }}</p>
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

<script>
import BasePagination from './BasePagination.vue';

export default {
  name: 'NewsSection',
  components: {
    BasePagination
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5,
      newsItems: [
        { id: 6, date: '2025.06.18', tag: 'お知らせ', text: '公式サイトを全面リニューアルしました。', url: '/blog/info-2025-06-18' },
        { id: 5, date: '2024.10.28', tag: '更新', text: '「帝国議会」ページを更新しました。', url: '/government/diet' },
        { id: 4, date: '2024.09.21', tag: 'お知らせ', text: '二国府市と姉妹都市協定を締結しました。', url: 'https://x.com/Yanma_Empire/status/1837461333216006264' },
        { id: 3, date: '2024.08.02', tag: 'お知らせ', text: 'サーバールールを改正しました。', url: '/rules' },
        { id: 2, date: '2024.08.01', tag: 'お知らせ', text: '新メンバーの募集を再開しました。', url: '/join' },
        { id: 1, date: '2024.08.01', tag: '更新', text: '「国内法人一覧」ページを更新しました。', url: '/corporations' },
      ]
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.newsItems.length / this.itemsPerPage);
    },
    paginatedNews() {
      // The array is now pre-sorted by ID descending, so we just slice.
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.newsItems.slice(start, end);
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    getTagClass(tag) {
      const tagMap = {
        'お知らせ': 'tag-info',
        '広報': 'tag-pr',
        '更新': 'tag-update'
      };
      return tagMap[tag] || 'tag-default';
    },
    isExternal(url) {
      return typeof url === 'string' && url.startsWith('http');
    }
  }
}
</script>

<style scoped>
.news-section { width: 100%; margin: 2.5rem auto; }
.section-title { font-size: 1.75rem; color: #008037; text-align: center; margin-bottom: 2rem; font-weight: 700; }
.news-list-container { background-color: #fff; border-radius: 0.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden; }
.news-list { list-style: none; padding: 0; margin: 0; }
.news-item { border-bottom: 1px solid #f0f0f0; }
.news-item:last-child { border-bottom: none; }
.news-link-wrapper { display: flex; align-items: center; padding: 1.25rem 1.5rem; text-decoration: none; transition: background-color 0.3s ease; }
.news-link-wrapper:hover:not(.no-link) { background-color: #f8f9fa; }
.news-meta { display: flex; align-items: center; margin-right: 1.5rem; flex-shrink: 0; }
.news-date { font-size: 0.9375rem; color: #6c757d; margin-right: 1rem; }
.news-tag { font-size: 0.8125rem; color: #fff; padding: 0.25rem 0; border-radius: 0.25rem; font-weight: 700; min-width: 5rem; text-align: center; }
.tag-info { background-color: #008037; }
.tag-pr { background-color: #17a2b8; }
.tag-update { background-color: #28a745; }
.tag-default { background-color: #6c757d; }
.news-text { font-size: 1rem; color: #343a40; margin: 0; line-height: 1.5; }
.no-link { cursor: default; }
@media (max-width: 768px) { .news-link-wrapper { flex-direction: column; align-items: flex-start; } .news-meta { margin-right: 0; margin-bottom: 0.5rem; } }
</style>
