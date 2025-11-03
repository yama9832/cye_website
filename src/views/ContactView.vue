<template>
  <PageContainer>
    <AppBreadcrumb />

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
  </PageContainer>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import PageContainer from '@/components/layout/PageContainer.vue';

export default {
  name: 'ContactView',
  components: {
    AppBreadcrumb,
    PageContainer
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 40rem;
  margin: 0 auto;
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
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .content-box {
    padding: 2rem 1.5rem;
  }
}
</style>