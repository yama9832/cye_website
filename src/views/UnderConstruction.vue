<template>
  <div class="under-construction-container">
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
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction'
}
</script>

<style scoped>
.under-construction-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: 60vh;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

.content-box {
  background-color: #ffffff;
  padding: 2.5rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-align: center;
  max-width: 600px;
  width: 100%;
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