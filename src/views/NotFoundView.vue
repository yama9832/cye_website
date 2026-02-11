<template>
  <main class="not-found-page-wrapper">
    <div class="content-box">
      <div class="icon">
        <span class="material-icons">error</span>
      </div>
      <h1 class="title">404 - ページが見つかりません</h1>
      <p class="message">
        お探しのページは、移動または削除された可能性があります。<br>
        URLをご確認の上、再度お試しいただくか、トップページへお戻りください。
      </p>
      <router-link to="/" class="home-link">トップページへ戻る</router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFoundView',
});
</script>

<style scoped>
.not-found-page-wrapper {
  display: flex;
  flex-grow: 1; /* ヘッダーとフッターの間の空間を埋める */
  padding: 2rem 1.5rem;
  box-sizing: border-box;
}

.content-box {
  background-color: #ffffff;
  padding: 2.5rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin: auto; /* 垂直・水平方向の中央揃え */
  box-sizing: border-box;
}

.icon {
  color: #c9171e; /* エラーを示す赤色 */
  margin-bottom: 1.5rem;
}
.icon .material-icons {
    font-size: 64px;
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

@media (max-width: 768px) {
  .content-box {
    padding: 2rem 1.5rem;
  }
}
</style>