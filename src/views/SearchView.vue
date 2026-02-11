<template>
  <main class="page-content-wrapper">
    <div class="search-results-page">
      <div class="search-header">
        <h1>検索結果</h1>
        <p v-if="query">
          「<span class="query-term">{{ query }}</span>」の検索結果: {{ searchResults.length }}件
        </p>
        <p v-else>
          検索キーワードを入力してください。
        </p>
      </div>
      <div v-if="searchResults.length > 0" class="results-list">
        <div v-for="(result, index) in searchResults" :key="index" class="result-item">
          <router-link :to="result.to" class="result-link">
            <div class="result-type">{{ result.type }}</div>
            <h2 class="result-title">{{ result.title }}</h2>
            <p v-if="result.description" class="result-description">{{ result.description }}</p>
            <p v-if="result.date" class="result-date">{{ result.date }}</p>
          </router-link>
        </div>
      </div>
      <div v-else-if="query" class="no-results">
        <p>「{{ query }}」に一致する情報は見つかりませんでした。</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { LocationQueryValue } from 'vue-router';
import { searchableData } from '@/search-data';
import type { SearchItem } from '@/search-data';

export default defineComponent({
  name: 'SearchView',
  data(): { allData: SearchItem[] } {
    return {
      allData: searchableData,
    };
  },
  computed: {
    query(): string {
      // URLのクエリパラメータから検索語を取得
      const queryParam = this.$route.query.q as
        | LocationQueryValue
        | LocationQueryValue[]
        | undefined;
      if (Array.isArray(queryParam)) {
        return queryParam[0] || '';
      }
      return queryParam || '';
    },
    searchResults(): SearchItem[] {
      if (!this.query) {
        return [];
      }
      const lowerCaseQuery = this.query.toLowerCase();
      // タイトルまたは説明に検索語が含まれるものをフィルタリング
      return this.allData.filter((item: SearchItem) => {
        const titleMatch = item.title.toLowerCase().includes(lowerCaseQuery);
        const descriptionMatch = item.description ? item.description.toLowerCase().includes(lowerCaseQuery) : false;
        return titleMatch || descriptionMatch;
      });
    },
  },
});
</script>

<style scoped>
.search-header {
  margin-bottom: 2rem;
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
}
.search-header h1 {
  margin: 0 0 0.5rem 0;
}
.query-term {
  font-weight: bold;
  color: #008037;
}
.results-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.result-item {
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;
}
.result-item:hover {
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.result-link {
  display: block;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
}
.result-type {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.2rem 0.6rem;
  background-color: #e9ecef;
  color: #495057;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
}
.result-title {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: #343a40;
}
.result-description, .result-date {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
}
.no-results {
  text-align: center;
  padding: 3rem 0;
  font-size: 1.1rem;
}
</style>