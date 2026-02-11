<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <NoticeCard icon="construction" title="このページは現在準備中です">
      ご指定のページは、現在コンテンツの準備を進めております。<br>
      公開まで今しばらくお待ちくださいますよう、お願い申し上げます。
      <template #action>
        <router-link to="/" class="home-link">トップページへ戻る</router-link>
      </template>
    </NoticeCard>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import NoticeCard from '@/components/NoticeCard.vue';

export default defineComponent({
  name: 'UnderConstruction',
  components: {
    AppBreadcrumb,
    NoticeCard
  }
});
</script>

<style scoped>
.home-link {
  display: inline-block;
  background-color: #008037;
  color: #fff;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 0.25rem;
  font-weight: 700;
  transition: background-color 0.3s, transform 0.2s;
}

.home-link:hover {
  background-color: #006029;
  transform: translateY(-2px);
}
</style>