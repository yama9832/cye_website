<template>
  <div class="notice-card">
    <div class="notice-icon">
      <span class="material-icons">{{ icon }}</span>
    </div>
    <h2 class="notice-title">{{ title }}</h2>
    <p class="notice-message">
      <slot />
    </p>
    <div v-if="$slots.action" class="notice-action">
      <slot name="action" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoticeCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.notice-card {
  background-color: #ffffff;
  padding: 2.5rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.notice-icon {
  color: #008037;
  margin-bottom: 1.5rem;
}

.notice-icon .material-icons {
  font-size: 64px;
}

.notice-title {
  color: #343a40;
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.notice-message {
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
}

.notice-action {
  margin-top: 2.5rem;
}

@media (max-width: 768px) {
  .notice-card {
    padding: 2rem 1.5rem;
  }
}
</style>
