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
import { defineComponent } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import NewsSection from '@/components/NewsSection.vue';
import JoinCta from '@/components/JoinCta.vue';
import PageLinksSection from '@/components/PageLinksSection.vue';

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