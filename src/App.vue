<template>
  <div id="app">
    <SiteHeader />
    <router-view/>
    <SiteFooter />
    <!-- ScrollToTopコンポーネントを追加 -->
    <ScrollToTop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import ScrollToTop from './components/ScrollToTop.vue';

export default defineComponent({
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
    ScrollToTop
  }
});
</script>

<style>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
  font-family: 'Noto Sans JP', sans-serif;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
body::-webkit-scrollbar {
  width: 0;
  height: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.material-icons {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  line-height: 1;
  overflow: hidden;
  flex-shrink: 0;
  vertical-align: middle;
}

/* ページのメインコンテンツ領域の共通スタイル */
.page-content-wrapper {
  max-width: 80rem; 
  width: 100%;
  margin: 0 auto; 
  padding: 2rem 2.5rem;
  box-sizing: border-box;
  flex-grow: 1; 
}

/* レスポンシブ対応 */
@media (max-width: 992px) {
  .page-content-wrapper {
    padding: 2rem 1.5rem;
  }
}

</style>
