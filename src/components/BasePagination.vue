<template>
  <nav class="pagination-container" aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="$emit('page-changed', currentPage - 1)">前へ</a>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
        <a class="page-link" href="#" @click.prevent="$emit('page-changed', page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="$emit('page-changed', currentPage + 1)">次へ</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasePagination',
  props: {
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true }
  },
  emits: ['page-changed']
});
</script>
<style scoped>
.pagination-container { display: flex; justify-content: center; margin-top: 2rem; }
.pagination { display: flex; list-style: none; padding: 0; margin: 0; border-radius: 0.25rem; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.page-item .page-link { display: block; padding: 0.5rem 1rem; background-color: #fff; border-left: 1px solid #dee2e6; color: #008037; text-decoration: none; transition: background-color 0.3s; }
.page-item:first-child .page-link { border-left: none; }
.page-item.active .page-link { background-color: #008037; color: #fff; }
.page-item:not(.active) .page-link:hover { background-color: #f8f9fa; }
.page-item.disabled .page-link { color: #6c757d; pointer-events: none; background-color: #e9ecef; }
</style>