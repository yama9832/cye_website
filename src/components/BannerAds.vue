<template>
  <section class="banner-ads-section">
    <h2 class="section-title">バナー広告</h2>
    <div class="banner-grid">
      <a href="#" class="banner-item" v-for="i in 5" :key="i">
        <img :src="`https://placehold.co/200x80/e0e0e0/6c757d?text=Banner+${i}`" :alt="`バナー広告 ${i}`">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerAds'
}
</script>

<style scoped>
.banner-ads-section {
  margin: 2.5rem 0;
}
.section-title {
  font-size: 1.75rem;
  color: #008037;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
}
.banner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.5rem;
}
.banner-item {
  display: block;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}
.banner-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
.banner-item img {
  width: 100%;
  display: block;
}
</style>
