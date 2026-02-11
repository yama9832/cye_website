<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <header class="page-header">
      <div>
        <h1>ニュース</h1>
        <p>お知らせ、ニュース、動画投稿、そのほかの最新情報を掲載します。</p>
      </div>
    </header>

    <div class="tag-filter">
      <button
        v-for="tag in tagOptions"
        :key="tag"
        class="tag-button"
        :class="{ active: activeTag === tag }"
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div v-if="filteredNews.length" class="news-grid">
      <component
        :is="isExternal(item.url) ? 'a' : 'router-link'"
        v-for="item in filteredNews"
        :key="item.id"
        class="news-card"
        :to="!isExternal(item.url) ? getItemLink(item) : null"
        :href="isExternal(item.url) ? item.url : null"
        :target="isExternal(item.url) ? '_blank' : null"
        :rel="isExternal(item.url) ? 'noopener noreferrer' : null"
      >
        <div class="thumbnail">
          <img :src="resolveImage(item.thumbnail)" :alt="item.title" />
        </div>
        <div class="card-body">
          <div class="meta">
            <span class="date">{{ formatDate(item.date) }}</span>
            <span v-for="tag in item.tags" :key="tag" class="tag" :class="getTagClass(tag)">
              {{ tag }}
            </span>
          </div>
          <h2>{{ item.title }}</h2>
          <p class="summary">{{ item.summary }}</p>
        </div>
      </component>
    </div>

    <div v-else class="empty-state">
      <p>選択中のタグに該当する記事はありません。</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import newsData from '@/data/news.json';

interface NewsItem {
  id: number | string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug?: string;
  url?: string;
  thumbnail?: string;
}

export default defineComponent({
  name: 'NewsView',
  components: {
    AppBreadcrumb
  },
  data(): { activeTag: string; newsItems: NewsItem[] } {
    return {
      activeTag: 'すべて',
      newsItems: newsData as NewsItem[]
    };
  },
  computed: {
    tagOptions(): string[] {
      const tags: string[] = this.newsItems.flatMap((item: NewsItem) => item.tags || []);
      return ['すべて', ...Array.from(new Set(tags))];
    },
    sortedNews(): NewsItem[] {
      return [...this.newsItems].sort((a: NewsItem, b: NewsItem) => new Date(b.date).getTime() - new Date(a.date).getTime());
    },
    filteredNews(): NewsItem[] {
      if (this.activeTag === 'すべて') {
        return this.sortedNews;
      }
      return this.sortedNews.filter((item: NewsItem) => (item.tags || []).includes(this.activeTag));
    }
  },
  mounted() {
    this.applyTagFromRoute();
  },
  watch: {
    '$route.query.tag'() {
      this.applyTagFromRoute();
    }
  },
  methods: {
    applyTagFromRoute() {
      const rawTag = this.$route.query.tag;
      const tag = typeof rawTag === 'string' ? rawTag : '';
      if (!tag) {
        this.activeTag = 'すべて';
        return;
      }
      this.activeTag = this.tagOptions.includes(tag) ? tag : 'すべて';
    },
    formatDate(date: string): string {
      return typeof date === 'string' ? date.replace(/-/g, '.') : date;
    },
    resolveImage(path?: string): string {
      if (!path) {
        return '';
      }
      if (path.startsWith('http') || path.startsWith('/')) {
        return path;
      }
      return require(`@/assets/${path}`);
    },
    getTagClass(tag: string): string {
      const tagMap: Record<string, string> = {
        'お知らせ': 'tag-info',
        'ニュース': 'tag-pr',
        '動画投稿': 'tag-video',
        'そのほか': 'tag-other'
      };
      return tagMap[tag] || 'tag-default';
    },
    getItemLink(item: NewsItem): string {
      if (item.url) {
        return item.url;
      }
      return item.slug ? `/news/${item.slug}` : '/news';
    },
    isExternal(url?: string): boolean {
      return typeof url === 'string' && url.startsWith('http');
    }
  }
});
</script>

<style scoped>
.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin: 0 0 0.5rem;
}

.page-header p {
  margin: 0;
  color: #6c757d;
  font-size: 1rem;
}

.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0 2.5rem;
}

.tag-button {
  border: 1px solid #d5dcd4;
  background: #ffffff;
  color: #495057;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
}

.tag-button.active,
.tag-button:hover {
  background: #008037;
  border-color: #008037;
  color: #ffffff;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 320px));
  gap: 2rem;
  padding-bottom: 3rem;
  justify-content: start;
}

.news-card {
  background: #ffffff;
  border-radius: 16px;
  border: 2px solid #d5dcd4;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

.news-card:hover {
  border-color: #008037;
}

.thumbnail img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.85rem;
  color: #6c757d;
}

.date {
  font-weight: 600;
}

.tag {
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
}

.tag-info { background-color: #008037; }
.tag-pr { background-color: #17a2b8; }
.tag-video { background-color: #f4a340; }
.tag-other { background-color: #6f42c1; }
.tag-default { background-color: #6c757d; }

.card-body h2 {
  font-size: 1.3rem;
  color: #343a40;
  margin: 0;
  line-height: 1.4;
}

.summary {
  margin: 0;
  color: #495057;
  line-height: 1.7;
}


.empty-state {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  color: #6c757d;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .thumbnail img {
    height: 180px;
  }
}
</style>
