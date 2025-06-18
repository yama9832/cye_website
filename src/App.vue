<template>
  <div id="app">
    <SiteHeader />
    
    <router-view/>
    
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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