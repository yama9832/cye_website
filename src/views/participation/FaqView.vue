<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <header class="page-header">
      <h1>よくある質問</h1>
    </header>

    <NoticeCard icon="help_outline" title="現在準備中です">
      このページの内容は現在準備中です。公開まで今しばらくお待ちください。
    </NoticeCard>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import NoticeCard from '@/components/NoticeCard.vue';

export default defineComponent({
  name: 'FaqView',
  components: {
    AppBreadcrumb,
    NoticeCard
  }
});
</script>

<style scoped>
.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin: 0;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
