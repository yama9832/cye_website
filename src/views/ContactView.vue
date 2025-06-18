<template>
  <main class="page-content-wrapper">
    <div class="breadcrumb-area">
        <AppBreadcrumb />
    </div>

    <div class="contact-container">
      <header class="page-header">
        <h1>お問い合わせ</h1>
      </header>
      
      <div class="content-box">
        <div class="icon">
          <span class="material-icons" style="font-size: 64px;">email</span>
        </div>
        <h2 class="title">お問い合わせについて</h2>
        <p class="message">
          現在、お問い合わせフォームは準備中です。<br>
          ご不便をおかけしますが、お問い合わせは公式Discordサーバー内にある専用チャンネルよりお願いいたします。
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'ContactView',
  components: {
    AppBreadcrumb
  }
}
</script>

<style scoped>
.page-content-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  width: 100%;
  box-sizing: border-box;
}

.breadcrumb-area,
.contact-container {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2.5rem;
  box-sizing: border-box;
}
.breadcrumb-area {
    padding-top: 2rem;
}

.contact-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1; 
}

.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin: 0;
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

/* レスポンシブ対応 */
@media (max-width: 992px) {
  .breadcrumb-area,
  .contact-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .content-box {
    padding: 2rem 1.5rem;
  }
}
</style>