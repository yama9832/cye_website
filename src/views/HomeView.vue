<template>
  <div>
    <HeroSection />
    <PageContainer>
      <AppBreadcrumb />
      <EventBanner />
      <JoinCta />
      <PageLinksSection />
      <NewsSection />
      <BannerAds />
    </PageContainer>
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
import PageContainer from '@/components/layout/PageContainer.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    EventBanner,
    AppBreadcrumb,
    NewsSection,
    JoinCta,
    BannerAds,
    PageLinksSection,
    PageContainer
  }
}
</script>

<style scoped>


@media (max-width: 992px) {

}
</style>