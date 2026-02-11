<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="events-container">
      <header class="page-header">
        <h1>イベント</h1>
        <p class="header-description">
          開催中・開催予定・終了したイベント情報を掲載します。
        </p>
      </header>

      <div class="tag-filter">
        <button
          v-for="tag in tagOptions"
          :key="tag"
          class="tag-button"
          :class="{ active: activeTag === tag }"
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <section class="info-section">
        <div v-if="filteredEvents.length > 0" class="event-grid">
          <div v-for="event in filteredEvents" :key="event.id" class="event-card">
            <div class="event-image-placeholder">
              <img v-if="event.image" :src="getImageUrl(event.image)" :alt="event.title" @error="imageLoadError">
              <span v-else class="material-icons">event</span>
            </div>
            <div class="event-content">
              <div class="event-meta">
                <span class="event-tag" :class="getStatusClass(event.status)">{{ event.status }}</span>
                <p class="event-period">{{ event.period }}</p>
              </div>
              <h2 class="event-title">{{ event.title }}</h2>
              <p class="event-description">{{ event.description }}</p>
            </div>
          </div>
        </div>
        <div v-else class="no-events-message">
          <p>該当するイベントはありません。</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

interface EventItem {
  id: number | string;
  title: string;
  period: string;
  description: string;
  image?: string;
  status: '開催中' | '開催予定' | '終了';
}

export default defineComponent({
  name: 'CurrentEventsView',
  components: {
    AppBreadcrumb
  },
  data(): { activeTag: string; events: EventItem[] } {
    return {
      activeTag: 'すべて',
      events: []
    };
  },
  computed: {
    tagOptions(): string[] {
      return ['すべて', '開催中', '開催予定', '終了'];
    },
    filteredEvents(): EventItem[] {
      if (this.activeTag === 'すべて') {
        return this.events;
      }
      return this.events.filter((event) => event.status === this.activeTag);
    }
  },
  mounted() {
    this.applyTagFromRoute();
  },
  watch: {
    '$route.query.tag'() {
      this.applyTagFromRoute();
    }
  },
  methods: {
    applyTagFromRoute() {
      const rawTag = this.$route.query.tag;
      const tag = typeof rawTag === 'string' ? rawTag : '';
      if (!tag) {
        this.activeTag = 'すべて';
        return;
      }
      this.activeTag = this.tagOptions.includes(tag) ? tag : 'すべて';
    },
    getStatusClass(status: EventItem['status']) {
      const statusMap: Record<EventItem['status'], string> = {
        '開催中': 'tag-current',
        '開催予定': 'tag-upcoming',
        '終了': 'tag-past'
      };
      return statusMap[status];
    },
    getImageUrl(imageName?: string): string {
      if (!imageName) return '';
      try {
        return require(`@/assets/events/${imageName}`);
      } catch (e) {
        console.error(`Image not found: @/assets/events/${imageName}`);
        return 'https://placehold.co/1920x1080/e9ecef/6c757d?text=Image+Not+Found';
      }
    },
    imageLoadError(event: Event): void {
      const target = event.target as HTMLImageElement;
      console.error('Image failed to load:', target.src);
      target.src = 'https://placehold.co/1920x1080/e9ecef/6c757d?text=Load+Error';
    }
  }
});
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

.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0 2.5rem;
}

.tag-button {
  border: 1px solid #d5dcd4;
  background: #ffffff;
  color: #495057;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
}

.tag-button.active,
.tag-button:hover {
  background: #008037;
  border-color: #008037;
  color: #ffffff;
}

.info-section {
  margin-bottom: 4rem;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.event-card {
  background-color: #fff;
  border: 2px solid #d5dcd4;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.event-card:hover {
  border-color: #008037;
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

.event-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.event-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.75rem;
  color: #ffffff;
}

.tag-current {
  background-color: #008037;
}

.tag-upcoming {
  background-color: #8ecf9f;
  color: #1f3b2a;
}

.tag-past {
  background-color: #6c757d;
}

.event-period {
  font-size: 0.9rem;
  font-weight: 700;
  color: #008037;
  margin: 0;
}

.event-title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #343a40;
}

.event-description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #555;
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

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
