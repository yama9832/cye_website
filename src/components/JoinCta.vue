<template>
  <section class="join-cta-section">
    <div class="cta-content">
      <h2>やんまー帝国連邦に参加しませんか？</h2>
      <p>やんまー帝国連邦では、共に活動する新たな仲間を随時募集しています。<br>あなたの参加を心よりお待ちしています。</p>
      <a href="/join" class="cta-button">製作メンバーになる</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JoinCta'
}
</script>

<style scoped>
.join-cta-section {
  position: relative;
  background-image: url('~@/assets/join.webp');
  background-size: cover;
  background-position: center;
  padding: 3rem 1.5rem;
  text-align: center;
  margin: 2.5rem 0;
  color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
}
.join-cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 50, 20, 0.6);
  z-index: 1;
}
.cta-content {
  position: relative;
  z-index: 2;
}
.cta-content h2 {
  font-size: 1.75rem;
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
}
.cta-content p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
}
.cta-button {
  display: inline-block;
  background-color: #fff;
  color: #008037;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
  border: 2px solid transparent;
}
.cta-button:hover {
  background-color: transparent;
  color: #fff;
  border-color: #fff;
  transform: translateY(-2px);
}
</style>
