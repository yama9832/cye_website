<template>
  <transition name="fade">
    <button v-if="isVisible" @click="scrollToTop" class="scroll-to-top" aria-label="トップへ戻る">
      <span class="material-icons">arrow_upward</span>
    </button>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScrollToTop',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    // スクロールイベントを監視
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // コンポーネント破棄時にイベント監視を解除
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    /**
     * スクロール位置をチェックしてボタンの表示/非表示を切り替える
     */
    handleScroll() {
      // 300px以上スクロールされたらボタンを表示
      this.isVisible = window.scrollY > 300;
    },
    /**
     * ページトップへスムーズにスクロールする
     */
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #008037;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: opacity 0.3s, transform 0.3s;
}

.scroll-to-top:hover {
  background-color: #006029;
  transform: translateY(-3px);
}

/* ボタンのフェードイン・アウト用トランジション */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
