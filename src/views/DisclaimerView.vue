<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="disclaimer-container">
      <header class="page-header">
        <h1>免責事項</h1>
        <p class="last-updated">制定日: 2025年6月17日</p>
      </header>

      <div class="disclaimer-content">
        <section class="info-section">
          <h2 class="section-title">総則</h2>
          <p>
            「やんまー帝国連邦」（以下、当サイト）は、マインクラフト上の架空国家について情報を公開するウェブサイトです。当サイトに掲載されている人物、組織、団体、意匠等はすべてフィクションであり、実在のものとは一切関係ありません。
          </p>
        </section>

        <section class="info-section">
          <h2 class="section-title">免責事項</h2>
          <p>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <p>
            また、当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
        </section>

        <section class="info-section">
          <h2 class="section-title">著作権について</h2>
          <p>
            当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
          </p>
          <p>
            当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、<router-link to="/contact">お問い合わせフォーム</router-link>よりご連絡ください。迅速に対応いたします。
          </p>
        </section>
        
        <section class="info-section">
          <h2 class="section-title">引用について</h2>
          <p>
            当サイトのコンテンツは、著作権法上で認められた「引用」の範囲内であれば、事前の連絡なく引用していただいて構いません。ただし、引用を行う際は、必ず引用元として当サイトの名称と該当ページへのリンクを明記してください。
          </p>
        </section>

      </div>
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'DisclaimerView',
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

.disclaimer-container {
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

.info-section p {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin: 0 0 1rem 0;
}
.info-section p:last-child {
  margin-bottom: 0;
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
  .disclaimer-container {
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
