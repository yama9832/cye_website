<template>
  <div>
    <HeroSection />
    <main class="page-content-wrapper">
      <AppBreadcrumb />
      <EventBanner />
      <JoinCta />
      <PageLinksSection />
      <NewsSection />
      <BannerAds />
    </main>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import EventBanner from '@/components/EventBanner.vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import NewsSection from '@/components/NewsSection.vue';
import JoinCta from '@/components/JoinCta.vue';
import BannerAds from '@/components/BannerAds.vue';
import PageLinksSection from '@/components/PageLinksSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    EventBanner,
    AppBreadcrumb,
    NewsSection,
    JoinCta,
    BannerAds,
    PageLinksSection
  }
}
</script>

<style scoped>


@media (max-width: 992px) {

}
</style>