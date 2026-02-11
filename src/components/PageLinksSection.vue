<template>
  <section class="page-links-section">
    <div class="page-links-grid">
      <router-link to="/basic" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">account_balance</span>
        </div>
        <div class="card-text">
          <h3>基本情報</h3>
          <p>憲法や国の仕組みを紹介</p>
        </div>
      </router-link>
      <router-link to="/news" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">feed</span>
        </div>
        <div class="card-text">
          <h3>ニュース</h3>
          <p>お知らせや更新情報</p>
        </div>
      </router-link>
      <router-link to="/events" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">event</span>
        </div>
        <div class="card-text">
          <h3>イベント</h3>
          <p>開催中・開催予定の情報</p>
        </div>
      </router-link>
      <router-link to="/participation" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">how_to_reg</span>
        </div>
        <div class="card-text">
          <h3>参加方法</h3>
          <p>ルールやロールを確認</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageLinksSection',
});
</script>

<style scoped>
.page-links-section {
  margin: 2.5rem 0;
}
.page-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.page-link-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
}
.page-link-card:hover {
  background-color: #008037;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}
.card-icon .material-icons {
  font-size: 3rem;
  color: #008037;
}
.page-link-card:hover .card-icon .material-icons {
  color: #fff;
}
.card-text h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #343a40;
}
.page-link-card:hover .card-text h3 {
  color: #fff;
}
.card-text p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}
.page-link-card:hover .card-text p {
  color: #fff;
}
</style>