<template>
  <form class="search-box" @submit.prevent="performSearch">
    <input 
      type="search" 
      placeholder="サイト内検索..." 
      v-model.trim="searchQuery"
      aria-label="検索キーワード"
    >
     <button type="submit" aria-label="検索">
        <span class="material-icons" style="font-size: 20px;">search</span>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
});
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
