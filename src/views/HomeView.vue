<template>
  <div>
    <HeroSection />
    <main class="page-content-wrapper">
      <AppBreadcrumb />
      <JoinCta />
      <PageLinksSection />
      <NewsSection />
    </main>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import HeroSection from '@/components/HeroSection.vue';

const AppBreadcrumb = defineAsyncComponent(() => import('@/components/AppBreadcrumb.vue'));
const NewsSection = defineAsyncComponent(() => import('@/components/NewsSection.vue'));
const JoinCta = defineAsyncComponent(() => import('@/components/JoinCta.vue'));
const PageLinksSection = defineAsyncComponent(() => import('@/components/PageLinksSection.vue'));

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    AppBreadcrumb,
    NewsSection,
    JoinCta,
    PageLinksSection
  }
});
</script>

<style scoped>


@media (max-width: 992px) {

}
</style>