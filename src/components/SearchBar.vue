<template>
  <form class="search-box" @submit.prevent="performSearch">
    <input 
      type="search" 
      placeholder="サイト内検索..." 
      v-model.trim="searchQuery"
      aria-label="検索キーワード"
    >
    <button type="submit" aria-label="検索">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      if (!this.searchQuery) {
        return;
      }
      this.$router.push({ 
        name: 'search', 
        query: { q: this.searchQuery } 
      });
    },
  },
}
</script>

<style scoped>
.search-box { 
  display: flex; 
  align-items: center; 
  border: 1px solid #ced4da; 
  border-radius: 0.25rem; 
  overflow: hidden; 
  background-color: #fff; 
}
.search-box input { 
  border: none; 
  padding: 0.5rem 0.75rem; 
  font-size: 0.875rem; 
  outline: none; 
  flex-grow: 1; 
  -webkit-appearance: none;
  appearance: none;
}
.search-box button { 
  background-color: transparent; 
  border: none; 
  padding: 0 0.75rem; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  color: #6c757d; 
}
</style>
