<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="join-container">
      <header class="page-header">
        <h1>製作メンバーになる</h1>
        <p class="header-description">やんまー帝国連邦の活動に参加し、一緒に国を創りませんか？</p>
      </header>

      <!-- 参加資格 -->
      <section class="info-section">
        <h2 class="section-title">
          <span class="material-icons">check_circle</span>
          参加資格
        </h2> 
        <div class="card-grid">
          <div class="card">
            <div class="card-icon">
              <span class="material-icons">account_box</span>
            </div>
            <h3 class="card-title">アカウント</h3>
            <p class="card-text">DiscordとMinecraft(Java/Bedrock Edition)のアカウントをお持ちの方。</p>
          </div>
          <div class="card">
          <div class="card-icon">
              <span class="material-icons">cake</span>
          </div>
            <h3 class="card-title">年齢</h3>
            <p class="card-text">原則として、満14歳以上の方。</p>
          </div>
          <div class="card">
          <div class="card-icon">
              <span class="material-icons">verified_user</span>
          </div>
            <h3 class="card-title">マナー</h3>
            <p class="card-text">他のサーバーやコミュニティで問題行動を起こしていない方。</p>
          </div>
        </div>
      </section>

      <!-- 参加までの流れ -->
      <section class="info-section">
        <h2 class="section-title">
          <span class="material-icons">alt_route</span>
          参加までの流れ
        </h2>
        <div class="step-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Discordサーバーに参加</h3>
              <p>まずは公式Discordサーバーにご参加ください。サーバー内のチャンネルをご確認お願いします。</p>
              <a href="https://discord.gg/tY2BzUGxRb" class="cta-button" target="_blank" rel="noopener noreferrer">Discordサーバーに参加する</a>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>自己紹介</h3>
              <p>専用チャンネルで簡単な自己紹介をお願いします。テンプレートに沿ってご記入ください。</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Minecraftサーバーに参加</h3>
              <p>運営部に参加したい旨をメンションで送ってください。運営部が参加手続きを行います。</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>建築・製作開始！</h3>
              <p>ようこそ、やんまー帝国連邦へ！あなたの創造力で、都市国家を築きましょう。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 注意事項 -->
      <section class="info-section">
        <h2 class="section-title">
          <span class="material-icons">warning</span>
          注意事項
        </h2>
        <ul class="notes-list">
          <li>当サーバーはクロスプレイ対応サーバーです。Java版・統合版どちらでも参加できます。</li>
          <li>サーバー参加に審査はありません。参加後すぐに建築をすることができます。</li>
          <li>サーバー内での活動は、公式サイトやSNSで紹介させていただく場合があります。</li>
          <li>他の参加者への迷惑行為や、サーバールールに違反した場合は、権限の剥奪や追放措置を取ることがあります。</li>
          <li>その他、不明な点があれば運営部メンバーまでお気軽にご質問ください。</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'JoinView',
  components: {
    AppBreadcrumb
  }
}
</script>

<style scoped>


.join-container {
  margin: 0 auto;
}

.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin: 0 0 0.5rem 0;
}

.header-description {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

.info-section {
  margin-bottom: 4rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2rem;
  color: #008037;
  margin-top: 0;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.section-title .material-icons {
    font-size: 1.75rem;
}
.card-icon .material-icons {
    font-size: 2em;
}
/* 参加資格カード */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.card {
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(40,167,69,0.1);
}

.card-icon {
  margin-bottom: 1rem;
  color: #008037;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 32px;
}
.card-icon img, .card-icon svg {
  height: 32px;
  width: 32px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #343a40;
  margin: 0 0 0.5rem 0;
}

.card-text {
  font-size: 0.95rem;
  color: #555;
  margin: 0;
  line-height: 1.6;
}

/* 参加までの流れ */
.step-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.step-number {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  background-color: #008037;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
  border: 3px solid #f9f9f9;
}

.step-content {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  flex-grow: 1;
}

.step-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #343a40;
}

.step-content p {
  margin: 0;
  line-height: 1.7;
  color: #555;
}

.cta-button {
  display: inline-block;
  background-color: #008037;
  color: #fff;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  border-radius: 0.25rem;
  font-weight: 700;
  transition: background-color 0.3s, transform 0.2s;
  margin-top: 1rem;
}

.cta-button:hover {
  background-color: #006029;
  transform: translateY(-2px);
}

/* 注意事項 */
.notes-list {
  list-style-type: none;
  padding-left: 1.5rem;
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem 2rem;
}
.notes-list li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.8;
  color: #555;
}
.notes-list li:last-child {
    margin-bottom: 0;
}
.notes-list li::before {
  content: "・";
  position: absolute;
  left: 0;
  color: #008037;
  font-weight: bold;
}


/* レスポンシブ対応 */
@media (max-width: 992px) {

  .section-title {
    font-size: 1.75rem;
  }
  .card-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .step-number {
      width: 1.8rem;
      height: 1.8rem;
      font-size: 0.9rem;
  }
  .step-item {
      gap: 1rem;
  }
}
</style>