<template>
  <PageContainer>
    <AppBreadcrumb />

    <div class="events-container">
      <header class="page-header">
        <h1>イベント情報</h1>
        <p class="header-description">
          やんまー帝国連邦で開催される、季節ごとのイベントや建築大会などの情報をお知らせします。
        </p>
      </header>

      <!-- 開催予定のイベント -->
      <section class="info-section">
        <h2 class="section-title">開催予定のイベント</h2>
        <div class="no-events-message highlight">
          <span class="material-icons" aria-hidden="true">event_busy</span>
          <div>
            <p class="no-events-title">現在、開催予定のイベントはありません。</p>
            <p class="no-events-description">再開の準備が整い次第、このページでお知らせします。</p>
          </div>
        </div>
      </section>

      <!-- 過去のイベント -->
      <section class="info-section">
        <h2 class="section-title">過去のイベント</h2>
        <div class="no-events-message">
          <p>終了したイベントはありません。</p>
        </div>
      </section>

    </div>
  </PageContainer>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import PageContainer from '@/components/layout/PageContainer.vue';

export default {
  name: 'EventsView',
  components: {
    AppBreadcrumb,
    PageContainer
  }
}
</script>

<style scoped>
.events-container {
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

.header-description {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
}

.info-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: #008037;
  margin: 0 0 2rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e9ecef;
}

.no-events-message {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  color: #495057;
  text-align: center;
}

.no-events-message.highlight {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-color: #ffeeba;
  background-color: #fff8e5;
  color: #8a6d3b;
}

.no-events-message.highlight .material-icons {
  font-size: 2rem;
}

.no-events-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.no-events-description {
  margin: 0.25rem 0 0;
  color: #6c757d;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .no-events-message.highlight {
    flex-direction: column;
    text-align: center;
  }
}
</style>
