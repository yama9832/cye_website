<template>
  <section class="page-links-section">
    <div class="page-links-grid">
      <router-link to="/corporations" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">business</span>
        </div>
        <div class="card-text">
          <h3>国内法人</h3>
          <p>株式企業など法人を紹介</p>
        </div>
      </router-link>
      <router-link to="/gallery" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">collections</span>
        </div>
        <div class="card-text">
          <h3>建築ギャラリー</h3>
          <p>都市や建築物の写真</p>
        </div>
      </router-link>
      <router-link to="/events" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">event</span>
        </div>
        <div class="card-text">
          <h3>イベント情報</h3>
          <p>開催日や詳細について</p>
        </div>
      </router-link>
      <router-link to="/blog" class="page-link-card">
        <div class="card-icon">
          <span class="material-icons">article</span>
        </div>
        <div class="card-text">
          <h3>ブログ</h3>
          <p>建築講座や開発日記など</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageLinksSection',
};
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
  transition: transform 0.3s, box-shadow 0.3s;
}
.page-link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
.card-icon .material-icons {
  font-size: 3rem;
  color: #008037;
}
.card-text h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #343a40;
}
.card-text p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}
</style>