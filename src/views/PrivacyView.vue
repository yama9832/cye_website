<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="privacy-container">
      <header class="page-header">
        <h1>個人情報保護方針</h1>
        <p class="last-updated">制定日: 2025年6月17日</p>
      </header>

      <div class="privacy-content">
        <p>
          「やんまー帝国連邦」（以下、当サイト）は、ユーザーの個人情報について以下のとおりプライバシーポリシー（以下、本ポリシー）を定めます。本ポリシーは、当サイトがどのような個人情報を取得し、どのように利用・管理するかをご説明するものです。
        </p>
        
        <section class="info-section">
          <h2 class="section-title">1. 個人情報の取得方法</h2>
          <p>
            当サイトでは、ユーザーからのお問い合わせ時に、氏名、メールアドレス等の個人情報を取得することがあります。これらの情報は、適法かつ公正な手段によって取得いたします。
          </p>
        </section>

        <section class="info-section">
          <h2 class="section-title">2. 個人情報の利用目的</h2>
          <p>
            当サイトがユーザーからお預かりした個人情報は、以下の目的で利用いたします。
          </p>
          <ul>
            <li>お問い合わせに対する回答や連絡のため</li>
            <li>当サイトのサービス向上・改善のため</li>
            <li>その他、ユーザーの同意を得た目的のため</li>
          </ul>
          <p>
            上記以外の目的で個人情報を利用する必要が生じた場合には、法令により許される場合を除き、その利用についてユーザーの同意をいただくものとします。
          </p>
        </section>

        <section class="info-section">
          <h2 class="section-title">3. 個人情報の管理</h2>
          <p>
            当サイトは、ユーザーの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持等の必要な措置を講じ、個人情報の厳重な管理を行います。
          </p>
        </section>

        <section class="info-section">
          <h2 class="section-title">4. 個人情報の第三者提供</h2>
          <p>
            当サイトは、ユーザーよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
          </p>
          <ul>
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づき開示することが必要である場合</li>
          </ul>
        </section>

        <section class="info-section">
          <h2 class="section-title">5. 個人情報の開示、訂正、削除</h2>
          <p>
            ユーザーご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。<router-link to="/contact">お問い合わせフォーム</router-link>よりご連絡ください。
          </p>
        </section>
        
        <section class="info-section">
          <h2 class="section-title">6. Cookie（クッキー）について</h2>
          <p>
            当サイトでは、一部のコンテンツについてCookieを利用しています。Cookieとは、サイトにアクセスした際にブラウザに保存される情報ですが、お名前やメールアドレス等の個人情報は含まれません。
          </p>
          <p>
             当サイトにアクセスいただいた方々に効果的な広告を配信するためや、アクセス解析にCookieの情報を利用させていただく場合があります。ブラウザの設定により、Cookieを使用しないようにすることも可能です。
          </p>
        </section>
        
        <section class="info-section">
          <h2 class="section-title">7. アクセス解析ツールについて</h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Googleアナリティクス利用規約</a>をご覧ください。
          </p>
        </section>

        <section class="info-section">
          <h2 class="section-title">8. 本ポリシーの変更</h2>
          <p>
            当サイトは、法令の制定、改正等により、本ポリシーを事前の予告なく変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載したときから効力を生じるものとします。
          </p>
        </section>

      </div>
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'PrivacyView',
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

.privacy-container {
  margin: 0 auto;
  background-color: #fff;
  padding: 2.5rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
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

.privacy-content > p {
    line-height: 1.8;
    margin-bottom: 2rem;
}

.info-section {
  margin-bottom: 2.5rem;
}
.info-section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.5rem;
  color: #008037;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e9ecef;
}

.info-section p, .info-section li {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
}

.info-section p {
  margin: 0 0 1rem 0;
}
.info-section p:last-child {
  margin-bottom: 0;
}

.info-section ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

a {
 color: #008037;
 text-decoration: none;
}
a:hover {
  text-decoration: underline;
}


/* レスポンシブ対応 */
@media (max-width: 992px) {
  .page-content-wrapper {
    padding: 2rem 1.5rem;
  }
  .privacy-container {
    padding: 2rem;
  }
}
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .section-title {
    font-size: 1.3rem;
  }
}
</style>
