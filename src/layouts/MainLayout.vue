<template>
  <div class="main-layout">
    <SiteHeader />
    <div class="main-layout__body">
      <slot />
    </div>
    <SiteFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
</script>
