<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="join-container">
      <header class="page-header">
        <h1>参加方法</h1>
        <p class="last-updated">最終更新日: 2026年2月17日</p>
        <p class="header-description">やんまー帝国連邦への参加条件と、参加までの流れをご案内します。</p>
      </header>

      <section class="recruitment-notice" aria-live="polite">
        <div class="notice-panel">
          <p class="notice-subtitle">ご迷惑をおかけしております</p>
          <p class="notice-main">工事中</p>
          <p class="notice-en">UNDER CONSTRUCTION</p>
          <p class="notice-description">サーバー再構築中のため、新規参加受付を一時停止しています。募集再開時はDiscordとサイトのお知らせでご案内します。</p>
        </div>
      </section>

      <p class="intro-text">
        参加前に
        <router-link to="/participation/rules">サーバールール</router-link>と
        <router-link to="/participation/roles">ロール</router-link>を確認し、以下の案内に沿ってお手続きください。
      </p>

      <section class="info-section eligibility-section">
        <h2 class="section-title">参加資格</h2>
        <p class="section-description">次の条件をすべて満たす方が対象です。</p>

        <div class="eligibility-grid">
          <article class="eligibility-card">
            <h3 class="card-title">アカウント要件</h3>
            <p class="card-text">DiscordとMinecraft（Java版または統合版）のアカウントを所有していること。</p>
          </article>
          <article class="eligibility-card">
            <h3 class="card-title">年齢要件</h3>
            <p class="card-text">参加申し込み時点で満14歳以上であること。</p>
          </article>
          <article class="eligibility-card">
            <h3 class="card-title">コミュニティ適性</h3>
            <p class="card-text">他のサーバーやコミュニティで重大な問題行動がないこと。</p>
          </article>
        </div>

        <div class="eligibility-note">
          <p>※ 条件を満たしていても、運営上の理由により募集を停止する場合があります。</p>
        </div>
      </section>

      <section class="info-section flow-section">
        <h2 class="section-title">参加までの流れ</h2>
        <p class="section-description">募集再開後は、次の手順でご参加ください。</p>
        <ol class="flow-list">
          <li><span class="flow-heading">募集再開の告知を確認</span> 公式サイトまたはDiscordのお知らせで、受付再開日と参加方法をご確認ください。</li>
          <li><span class="flow-heading">Discordサーバーに参加</span> 参加リンクから入室し、案内チャンネル・ルール・ロール説明を確認してください。</li>
          <li><span class="flow-heading">自己紹介と参加意思の連絡</span> 指定テンプレートで自己紹介を投稿し、運営部へ参加希望を連絡してください。</li>
          <li><span class="flow-heading">案内完了後に活動開始</span> 案内と権限付与が完了したら、Minecraftサーバーで建築・制作を開始できます。</li>
        </ol>
      </section>

      <section class="info-section">
        <h2 class="section-title">注意事項</h2>
        <ul class="notes-list">
          <li>当サーバーはクロスプレイ対応サーバーです。Java版・統合版どちらでも参加できます。</li>
          <li>参加後は<router-link to="/participation/rules">サーバールール</router-link>および運営部の指示に従ってください。</li>
          <li>サーバー内での活動は、公式サイトやSNSで紹介させていただく場合があります。</li>
          <li>他の参加者への迷惑行為や、サーバールールに違反した場合は、権限の剥奪や追放措置を取ることがあります。</li>
          <li>その他、不明な点があれば運営部メンバーまでお気軽にご質問ください。</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default defineComponent({
  name: 'ParticipationView',
  components: {
    AppBreadcrumb
  }
});
</script>

<style scoped>
.join-container {
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
  margin: 0 0 0.5rem 0;
}

.header-description {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
}

.last-updated {
  font-size: 0.875rem;
  color: #6c757d;
  text-align: right;
  margin: 0;
}

.recruitment-notice {
  background: repeating-linear-gradient(
    -45deg,
    #2b1b1b,
    #2b1b1b 22px,
    #f1a500 22px,
    #f1a500 44px
  );
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
}

.notice-panel {
  background-color: #ededed;
  border-radius: 6px;
  text-align: center;
  padding: 1.5rem 1rem;
}

.notice-subtitle {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #2b1b1b;
}

.notice-main {
  margin: 0.25rem 0;
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 900;
  color: #000;
  letter-spacing: 0.15em;
  -webkit-text-stroke: 5px #f5e700;
  paint-order: stroke fill;
  line-height: 1.05;
}

.notice-en {
  margin: 0;
  font-size: 2.1rem;
  font-weight: 900;
  color: #2b1b1b;
  letter-spacing: 0.03em;
}

.notice-description {
  margin: 1rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid #d3d3d3;
  color: #333;
  font-size: 1rem;
  line-height: 1.7;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
  border: 1px solid #008037;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2.5rem;
}

.intro-text a {
  color: #008037;
  text-decoration: none;
  font-weight: 700;
}

.info-section {
  margin-bottom: 4rem;
}

.eligibility-section {
  margin-top: 2rem;
}

.section-description {
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #555;
}

.section-title {
  font-size: 1.75rem;
  color: #008037;
  margin-top: 0;
  margin-bottom: 1.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e9ecef;
}

.eligibility-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.eligibility-card {
  background-color: #f8fbf8;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  min-height: 180px;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #343a40;
  margin: 0 0 0.75rem;
}

.card-text {
  font-size: 1rem;
  color: #555;
  margin: 0;
  line-height: 1.8;
}

.eligibility-note {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background-color: #f8fbf8;
}

.eligibility-note p {
  margin: 0;
  line-height: 1.7;
  color: #555;
}

.flow-section {
  background-color: #f8fbf8;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1.75rem;
}

.flow-list {
  margin: 0;
  padding: 0 0 0 1.5rem;
  list-style: decimal;
}

.flow-list li {
  margin-bottom: 1rem;
  color: #555;
  line-height: 1.8;
}

.flow-list li:last-child {
  margin-bottom: 0;
}

.flow-heading {
  font-weight: 700;
  color: #343a40;
  margin-right: 0.35rem;
}

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

.notes-list a {
  color: #008037;
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .notice-subtitle {
    font-size: 1.3rem;
  }

  .notice-main {
    -webkit-text-stroke: 3px #f5e700;
    letter-spacing: 0.06em;
  }

  .notice-en {
    font-size: 1.4rem;
  }

  .eligibility-grid {
    grid-template-columns: 1fr;
  }

  .eligibility-card {
    min-height: unset;
  }

  .flow-section {
    padding: 1.25rem;
  }
}
</style>
