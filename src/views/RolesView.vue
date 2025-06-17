<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="roles-container">
      <header class="page-header">
        <h1>ロール</h1>
        <p class="last-updated">最終更新日: 2025年6月18日</p>
      </header>

      <div class="roles-content">
        <p class="intro-text">
          当サーバーでは役職ごとにロールを付与しています。 「ビギナー → スタンダード → カスタム」と順に昇格していきます。
          活動が積極的な人ほど上位の役職が与えられ、下位の役職権限に加えた権限が付与されます。
        </p>

        <!-- メンバー -->
        <section class="info-section">
          <h2 class="section-title">
            <span class="material-icons">groups</span>
            メンバー
          </h2>
          <div class="card-grid">
            <!-- ビギナーメンバー -->
            <div class="role-card beginner">
              <div class="card-header">
                <h3>ビギナーメンバー</h3>
              </div>
              <div class="card-body">
                <div class="card-section">
                  <h4>権限</h4>
                  <p>住宅・コンビニ・低層ビル・商業施設などの建築</p>
                </div>
                <div class="card-section">
                  <h4>昇格条件</h4>
                  <p>マインクラフトサーバーに参加する</p>
                </div>
              </div>
            </div>
            <!-- スタンダードメンバー -->
            <div class="role-card standard">
              <div class="card-header">
                <h3>スタンダードメンバー</h3>
              </div>
              <div class="card-body">
                <div class="card-section">
                  <h4>権限</h4>
                  <p>工業系・高層ビルなどの建築 / WorldEdit使用権限付与</p>
                </div>
                <div class="card-section">
                  <h4>昇格条件</h4>
                  <p>建物を3軒建築・参加から1週間経過</p>
                </div>
              </div>
            </div>
            <!-- カスタムメンバー -->
            <div class="role-card custom">
              <div class="card-header">
                <h3>カスタムメンバー</h3>
              </div>
              <div class="card-body">
                <div class="card-section">
                  <h4>権限</h4>
                  <p>ランドマーク・公共施設などの建築</p>
                </div>
                <div class="card-section">
                  <h4>昇格条件</h4>
                  <p>サーバー内での活動が積極的・参加から3ヶ月経過</p>
                </div>
              </div>
            </div>
            <!-- 姉妹都市交換留学生 -->
            <div class="role-card sister-city">
              <div class="card-header">
                <h3>姉妹都市交換留学生</h3>
              </div>
              <div class="card-body">
                 <div class="card-section">
                  <h4>権限</h4>
                  <p>スタンダードメンバーと同等(ただし昇格及び降格の対象外)</p>
                </div>
                <div class="card-section">
                  <h4>昇格条件</h4>
                  <p>姉妹都市から交換留学生として参加する</p>
                </div>
              </div>
            </div>
            <!-- 国王 -->
            <div class="role-card admin">
              <div class="card-header">
                <h3>国王 (管理者)</h3>
              </div>
              <div class="card-body">
                 <div class="card-section">
                  <h4>権限</h4>
                  <p>サーバーの管理 / ルールの制定・改正 / その他諸般の権限</p>
                </div>
                <div class="card-section">
                  <h4>昇格条件</h4>
                  <p>なし</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 製作委員会 -->
        <section class="info-section">
          <h2 class="section-title">
            <span class="material-icons">corporate_fare</span>
            やんまー帝国連邦製作委員会
          </h2>
          <p>製作委員会は運営部と広報部によって構成されています。</p>
          <div class="card-grid-2-col">
            <!-- 運営部 -->
            <div class="role-card">
              <div class="card-header">
                <h3>運営部</h3>
              </div>
              <div class="card-body">
                <div class="card-section">
                  <h4>権限</h4>
                  <p>運営・開発方針の決定 / イベント運営 / トラブル対処など</p>
                </div>
                <div class="card-section">
                  <h4>参加条件</h4>
                  <p>管理者および運営部メンバーの承認</p>
                </div>
                <div class="card-section">
                  <h4>メンバー</h4>
                  <p>Takahashi / ひろ / ふじたか / やんまー</p>
                </div>
              </div>
            </div>
            <!-- 広報部 -->
            <div class="role-card kouhou">
              <div class="card-header">
                <h3>広報部</h3>
              </div>
              <div class="card-body">
                <div class="card-section">
                  <h4>権限</h4>
                  <p>広報活動</p>
                </div>
                <div class="card-section">
                  <h4>参加条件</h4>
                  <p>管理者の承認</p>
                </div>
                 <div class="card-section">
                  <h4>メンバー</h4>
                  <p>行先 / Takahashi / ぱんぱ / みがふ / やんまー</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 外部組織 -->
        <section class="info-section">
          <h2 class="section-title">
            <span class="material-icons">layers</span>
            外部組織
          </h2>
          <p>製作委員会の外部組織です。ロールはありませんが、重要なので解説します。</p>
          <div class="committee-grid">
            <div class="committee-card">
              <h4>帝国議会</h4>
              <p>やんまー帝国連邦の開発方針を話し合う場。帝国議会の内容を踏まえて、運営部が方針を決定します。</p>
            </div>
             <div class="committee-card">
              <h4>各会議（国家・企業・建物）</h4>
              <p>各設定に関して話し合う場。メンバー間での調整や周知など自由に話し合うことができます。ただし、この会議での決定は、帝国議会や運営部会議の決定で変更する場合があります。</p>
            </div>
          </div>
        </section>

        <!-- 建築ジャンル -->
        <section class="info-section">
          <h2 class="section-title">
            <span class="material-icons">apartment</span>
            建築ジャンル
          </h2>
          <p>自分が担当したい建築ジャンルごとにロールを付与します。詳細はDiscordのロールチャンネルをご覧ください。</p>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'RolesView',
  components: {
    AppBreadcrumb
  }
}
</script>

<style scoped>
.page-content-wrapper {
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  box-sizing: border-box;
}

.roles-container {
  margin: 0 auto;
}

.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin: 0;
}

.last-updated {
  font-size: 0.875rem;
  color: #6c757d;
  text-align: right;
  margin-top: 0.5rem;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #008037;
  margin-bottom: 3rem;
}

.info-section {
  margin-bottom: 3.5rem;
}
.info-section:last-child {
  margin-bottom: 0;
}

.info-section > p {
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.75rem;
  color: #008037;
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e9ecef;
}
.section-title .material-icons {
    font-size: 1.75rem;
}

/* Role Cards */
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}
.card-grid-2-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}
.role-card {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.role-card.admin {
    grid-column: 1 / -1;
}
.card-header {
    background-color: #008037;
    color: #fff;
    padding: 1rem 1.5rem;
}
.card-header h3 {
    margin: 0;
    font-size: 1.25rem;
}

/* Custom Role Colors */
.role-card.beginner .card-header { background-color: #eebbcb; color: #584145; }
.role-card.standard .card-header { background-color: #e17b34; }
.role-card.custom .card-header { background-color: #007bbb; }
.role-card.sister-city .card-header { background-color: #FFD700; color: #5a4f00; }
.role-card.admin .card-header { background-color: #38b48b; }
.role-card.kouhou .card-header { background-color: #c9171e; }


.card-body {
    padding: 1.5rem;
    flex-grow: 1;
}
.card-section {
    margin-bottom: 1.5rem;
}
.card-section:last-child {
    margin-bottom: 0;
}
.card-section h4 {
    font-size: 1rem;
    color: #343a40;
    margin: 0 0 0.5rem 0;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
}
.card-section p {
    margin: 0;
    line-height: 1.6;
    color: #555;
    font-size: 0.95rem;
}

/* Committee Cards */
.committee-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}
.committee-card {
    background-color: #fff;
    padding: 1.5rem 2rem;
    border: 1px solid #008037;
    border-radius: 8px;
}
.committee-card h4 {
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
    color: #008037;
}
.committee-card p {
    line-height: 1.8;
    color: #555;
    margin: 0;
}
.committee-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #555;
    line-height: 1.8;
}
.committee-card ul li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}
.committee-card ul li strong {
    color: #343a40;
    margin-right: 0.5em;
}


/* レスポンシブ対応 */
@media (max-width: 992px) {
  .page-content-wrapper {
    padding: 2rem 1.5rem;
  }
  .card-grid, .committee-grid, .card-grid-2-col {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
