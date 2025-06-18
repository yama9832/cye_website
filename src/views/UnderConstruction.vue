<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="content-box">
      <div class="icon">
        <span class="material-icons" style="font-size: 64px;">construction</span>
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
</style>