<template>
  <div>
    <HeroSection />
    <main class="main-content">
      <AppBreadcrumb />
      <JoinCta />
      <NewsSection />
      <BannerAds />
    </main>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import NewsSection from '@/components/NewsSection.vue';
import JoinCta from '@/components/JoinCta.vue';
import BannerAds from '@/components/BannerAds.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AppBreadcrumb,
    NewsSection,
    JoinCta,
    BannerAds
  }
}
</script>

<style scoped>
.main-content {
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1.25rem 2.5rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .main-content {
    padding: 1.25rem 1.5rem;
  }
}
</style>