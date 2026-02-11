<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <header class="page-header">
      <h1>お問い合わせ</h1>
    </header>

    <NoticeCard icon="email" title="お問い合わせについて">
      現在、お問い合わせフォームは準備中です。<br>
      ご不便をおかけしますが、お問い合わせは公式Discordサーバー内にある専用チャンネルよりお願いいたします。
    </NoticeCard>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import NoticeCard from '@/components/NoticeCard.vue';

export default defineComponent({
  name: 'ContactView',
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