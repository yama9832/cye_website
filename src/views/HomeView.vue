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
  margin-left: 25%;
  margin-right: 25%;
  padding: 2rem 2.5rem;
  box-sizing: border-box;
}

@media (max-width: 1600px) {
  .page-content-wrapper {
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media (max-width: 1400px) {
  .page-content-wrapper {
    margin-left: 15%;
    margin-right: 15%;
  }
}
@media (max-width: 992px) {
  .page-content-wrapper {
    margin-left: 5%;
    margin-right: 5%;
    padding: 2rem 1.5rem;
  }
}
@media (max-width: 768px) {
  .page-content-wrapper {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>