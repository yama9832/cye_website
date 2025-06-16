<template>
  <div>
    <HeroSection />
    <main class="page-content-wrapper">
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
.page-content-wrapper {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  box-sizing: border-box;
}

@media (max-width: 992px) {
  .page-content-wrapper {
    padding: 2rem 1.5rem;
  }
}
</style>