<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="content-box">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
      </div>
      <h1 class="title">このページは現在準備中です</h1>
      <p class="message">
        ご指定のページは、現在コンテンツの準備を進めております。<br>
        公開まで今しばらくお待ちくださいますよう、お願い申し上げます。
      </p>
      <router-link to="/" class="home-link">トップページへ戻る</router-link>
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'UnderConstruction',
  components: {
    AppBreadcrumb
  }
}
</script>

<style scoped>
.page-content-wrapper {
  margin-left: 25%;
  margin-right: 25%;
  padding: 2rem 2.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.content-box {
  background-color: #ffffff;
  padding: 2.5rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
}

.icon {
  color: #008037;
  margin-bottom: 1.5rem;
}

.title {
  color: #343a40;
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.message {
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.home-link {
  display: inline-block;
  background-color: #008037;
  color: #fff;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 0.25rem;
  font-weight: 700;
  transition: background-color 0.3s, transform 0.2s;
}

.home-link:hover {
  background-color: #006029;
  transform: translateY(-2px);
}

/* レスポンシブ対応 */
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
  .content-box {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>