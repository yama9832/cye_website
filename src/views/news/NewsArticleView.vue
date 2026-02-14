<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div v-if="article">
      <header class="page-header">
        <div class="meta">
          <span class="date">{{ formatDate(article.date) }}</span>
          <span v-for="tag in article.tags" :key="tag" class="tag" :class="getTagClass(tag)">
            {{ tag }}
          </span>
        </div>
        <h1>{{ article.title }}</h1>
        <p class="summary">{{ article.summary }}</p>
      </header>

      <div class="article-body">
        <div v-if="hasMarkdown" class="markdown-body" v-html="renderedMarkdown"></div>
        <template v-else v-for="(block, index) in article.content || []" :key="`block-${index}`">
          <p v-if="block.type === 'text'">{{ block.value }}</p>
          <p v-else-if="block.type === 'link'">
            <router-link :to="block.to" class="article-link">{{ block.text }}</router-link>
          </p>
          <figure v-else-if="block.type === 'image'">
            <img :src="resolveImage(block.src)" :alt="block.alt || article.title" />
            <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
          </figure>
        </template>
      </div>

      <div class="article-note">
        <p>本記事の作成にあたり、生成AIを用いる場合があります。ご了承の上ご覧ください。</p>
      </div>
    </div>

    <div v-else class="empty-state">
      <p>該当する記事が見つかりませんでした。</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownIt from 'markdown-it';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

const NEWS_API_BASE = 'https://news-api.yamamoto-200517.workers.dev/api/news';

const markdownRenderer = new MarkdownIt({
  breaks: true,
  linkify: true
});

interface NewsContentBlock {
  type: 'text' | 'image' | 'link';
  value?: string;
  src?: string;
  alt?: string;
  caption?: string;
  text?: string;
  to?: string;
}

interface NewsItem {
  id: number | string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug?: string;
  url?: string;
  thumbnail?: string;
  content?: NewsContentBlock[];
  markdown?: string;
}

export default defineComponent({
  name: 'NewsArticleView',
  components: {
    AppBreadcrumb
  },
  data(): { article: NewsItem | null } {
    return {
      article: null
    };
  },
  computed: {
    hasMarkdown(): boolean {
      return Boolean(this.article?.markdown);
    },
    renderedMarkdown(): string {
      if (!this.article?.markdown) {
        return '';
      }
      return markdownRenderer.render(this.article.markdown);
    }
  },
  mounted() {
    this.fetchArticle();
  },
  watch: {
    '$route.path'() {
      this.fetchArticle();
    }
  },
  methods: {
    async fetchArticle() {
      const slug = this.$route.path.split('/').filter(Boolean).pop();
      if (!slug) {
        this.article = null;
        return;
      }

      try {
        const response = await fetch(`${NEWS_API_BASE}/${encodeURIComponent(slug)}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.status}`);
        }
        this.article = await response.json();
      } catch (error) {
        console.error('ニュース記事の取得に失敗しました:', error);
        this.article = null;
      }
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
    }
  }
});
</script>

<style scoped>
.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2.4rem;
  color: #343a40;
  margin: 0.75rem 0 1rem;
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

.summary {
  margin: 0;
  color: #495057;
  line-height: 1.5;
}

.article-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 3rem;
  color: #495057;
  line-height: 1.6;
}

.article-note {
  border-top: 1px solid #e2e6e1;
  margin-top: 2rem;
  padding-top: 1rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.article-note p {
  margin: 0;
}

.markdown-body :deep(h2),
.markdown-body :deep(h3) {
  margin: 1.8rem 0 0.75rem;
  color: #343a40;
}

.markdown-body :deep(p) {
  margin: 0;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 1.5rem;
  margin: 0;
}

.markdown-body :deep(a) {
  color: #008037;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.markdown-body :deep(blockquote) {
  margin: 0;
  padding: 1rem 1.25rem;
  background: #eef7f1;
  border-radius: 12px;
}

.markdown-body :deep(blockquote p) {
  margin: 0;
}

.article-link {
  color: #008037;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.article-link:hover {
  color: #00652b;
}

.article-body img {
  width: 100%;
  border-radius: 16px;
  display: block;
}

figcaption {
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 0.5rem;
}

.empty-state {
  text-align: center;
  padding: 2.5rem 0 3rem;
  color: #6c757d;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
