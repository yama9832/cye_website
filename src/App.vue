<template>
  <div id="app">
    <SiteHeader />
    <main class="main-content">
      <h1>メインコンテンツエリア</h1>
      <p>この下に各ページのコンテンツが表示されます。</p>
      <!-- 例: <router-view /> -->
    </main>
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

.main-content {
  flex: 1;
  padding: 1.25rem 2.5rem; /* remに統一 */
}
</style>