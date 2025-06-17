<template>
  <section class="event-banner-section">
    <div class="event-banner-content">
      <div class="banner-header">
        <span class="material-icons">campaign</span>
        <h2>開催中のイベント</h2>
      </div>
      <div v-if="events.length > 0">
        <ul class="event-list">
          <li v-for="event in events" :key="event.id" class="event-item">
            <router-link :to="event.to" class="event-link">
              <span class="event-period">{{ event.period }}</span>
              <span class="event-title">{{ event.title }}</span>
              <span class="material-icons arrow">chevron_right</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div v-else class="no-events">
        <p>現在開催中のイベントはありません。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventBanner',
  data() {
    return {
      // イベント情報をここに記載します。
      //
      // 表示するイベントがない場合は、この下の events 配列を
      // 空にしてください (例: events: [])。
      // そうすると「現在開催中のイベントはありません。」という
      // メッセージが表示されます。
      events: [
        {
          id: 1,
          title: '夏の建築大会2025 開催予定！詳細は後日発表！',
          period: '2025年夏季',
          to: '/events' // イベント詳細ページへのリンク
        }
      ]
    }
  }
}
</script>

<style scoped>
.event-banner-section {
  /* marginとwidthを削除し、親要素に幅の制御を委ねる */
  margin-bottom: 2.5rem; /* JoinCtaとの間隔を確保 */
  background-color: #e6f2e9; /* 緑系の背景色 */
  border: 2px solid #a7d7b9; /* 緑系のボーダー色 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.07);
}
.event-banner-content {
  padding: 1.5rem 2rem;
  box-sizing: border-box;
}
.banner-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.banner-header h2 {
  font-size: 1.5rem;
  color: #006029; /* 緑系の文字色 */
  margin: 0;
  font-weight: 700;
}
.banner-header .material-icons {
  font-size: 2rem;
  color: #006029; /* 緑系のアイコン色 */
}

/* Event List (for when events exist) */
.event-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.event-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #c8e6c9;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.event-link:hover {
  background-color: #f1f8f3;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.07);
}
.event-period {
  font-weight: 700;
  color: #008037;
  flex-shrink: 0;
  background-color: #e6f2e9;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
}
.event-title {
  flex-grow: 1;
}
.arrow {
  color: #6c757d;
  transition: transform 0.3s;
}
.event-link:hover .arrow {
    transform: translateX(5px);
}

/* No Events Message */
.no-events {
    background-color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border: 1px solid #c8e6c9;
    text-align: center;
}
.no-events p {
    margin: 0;
    color: #6c757d;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .event-banner-content {
        padding: 1.5rem;
    }
    .event-link {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }
    .arrow {
        display: none;
    }
}
</style>
