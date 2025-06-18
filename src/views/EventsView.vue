<template>
  <main class="page-content-wrapper">
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
        <div v-if="upcomingEvents.length > 0" class="event-grid">
          <div v-for="event in upcomingEvents" :key="event.id" class="event-card">
            <div class="event-image-placeholder">
              <img v-if="event.image" :src="getImageUrl(event.image)" :alt="event.title" @error="imageLoadError">
              <span v-else class="material-icons">architecture</span>
            </div>
            <div class="event-content">
              <p class="event-period">{{ event.period }}</p>
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-description">{{ event.description }}</p>
              <div class="event-details-status">
                <span class="status-badge">{{ event.status }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-events-message">
          <p>現在予定されているイベントはありません。</p>
        </div>
      </section>

      <!-- 過去のイベント -->
      <section class="info-section">
        <h2 class="section-title">過去のイベント</h2>
         <div v-if="pastEvents.length > 0" class="event-grid">
          <!-- 過去のイベントをここに表示 -->
        </div>
        <div class="no-events-message">
          <p>終了したイベントはありません。</p>
        </div>
      </section>

    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'EventsView',
  components: {
    AppBreadcrumb
  },
  data() {
    return {
      upcomingEvents: [
        {
          id: 1,
          title: '夏の建築大会',
          period: '2025年夏季(予定)',
          description: '毎年恒例(にしたい)夏の建築大会の開催を予定！テーマやルールなどの詳細は後日発表します。建築初心者から上級者まで、どなたでも大歓迎です！ぜひご参加ください！',
          image: 'mizusaki_view.webp', // 表示したい画像ファイル名
          status: '詳細は後日発表'
        }
      ],
      pastEvents: []
    }
  },
  methods: {
  getImageUrl(imageName) {
    if (!imageName) return '';
    try {
      // パスを修正
      return require(`@/assets/events/${imageName}`);
    } catch (e) {
      console.error(`Image not found: @/assets/events/${imageName}`);
      return 'https://placehold.co/1920x1080/e9ecef/6c757d?text=Image+Not+Found';
    }
  },
    imageLoadError(event) {
      console.error('Image failed to load:', event.target.src);
      // 画像の読み込みに失敗した場合の代替画像
      event.target.src = 'https://placehold.co/1920x1080/e9ecef/6c757d?text=Load+Error';
    }
  }
}
</script>

<style scoped>
.page-content-wrapper {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  box-sizing: border-box;
}

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

.event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
}

.event-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: box-shadow 0.3s, transform 0.3s;
}
.event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.event-image-placeholder {
    aspect-ratio: 16 / 9;
    background-color: #343a40;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.event-image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.event-image-placeholder .material-icons {
    font-size: 4rem;
    opacity: 0.8;
}

.event-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.event-period {
    font-size: 0.9rem;
    font-weight: 700;
    color: #008037;
    margin-bottom: 0.5rem;
}

.event-title {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    color: #343a40;
}

.event-description {
    margin: 0 0 1.5rem 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #555;
    flex-grow: 1;
}

.event-details-status {
    text-align: right;
}

.status-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #6c757d;
    color: #fff;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
}

.no-events-message {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e0e0e0;
}
.no-events-message p {
    margin: 0;
    color: #6c757d;
    font-size: 1rem;
}

@media (max-width: 992px) {
  .page-content-wrapper {
    padding: 2rem 1.5rem;
  }
}
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
