<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="ministries-container">
      <header class="page-header">
        <h1>府省庁</h1>
        <p class="last-updated">更新日: 2025年6月18日</p>
      </header>

      <p class="section-description">
        やんまー帝国連邦の行政権は、内閣の統轄の下、目的別に分担管理する府省庁によって執行されます。ここでは、国の運営を担う主要な行政機関を紹介します。
      </p>

      <section class="info-section">
        <h2 class="section-title">行政機構図</h2>
        <div class="image-placeholder">
          <img src="@/assets/cye-gyouseikikou.webp" alt="やんまー帝国連邦 行政機関の図">
        </div>
      </section>

      <section class="info-section">
        <div class="section-header">
          <h2 class="section-title no-border">府省庁一覧</h2>
          <button @click="toggleAll" class="toggle-all-button">
            {{ areAllOpen ? 'すべて閉じる' : 'すべて開く' }}
            <span class="material-icons">{{ areAllOpen ? 'unfold_less' : 'unfold_more' }}</span>
          </button>
        </div>
        <div class="accordion">
          <div v-for="(item, index) in ministries" :key="index" class="accordion-item">
            <button @click="toggleAccordion(index)" class="accordion-header" :aria-expanded="item.open">
              <span>{{ item.name }}</span>
              <span class="material-icons">{{ item.open ? 'expand_less' : 'expand_more' }}</span>
            </button>
            <transition name="accordion-content">
              <div v-if="item.open" class="accordion-body">
                <p>{{ item.description }}</p>
              </div>
            </transition>
          </div>
        </div>
      </section>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

interface MinistryItem {
  name: string;
  description: string;
  open: boolean;
}

export default defineComponent({
  name: 'MinistriesView',
  components: {
    AppBreadcrumb
  },
  data(): { ministries: MinistryItem[] } {
    return {
      ministries: [
        { name: '内閣府', description: '内閣の重要政策に関する企画立案・総合調整、特定分野の事務を担う機関。経済財政政策や防災などを所管し、内閣総理大臣を直接補佐します。', open: false },
        { name: '帝国王室庁', description: '国王および王室に関する国家事務、国事行為に使用される国璽・御璽の保管などを所管する機関。王室の伝統と文化の継承を支えます。', open: false },
        { name: '情報通信庁', description: '情報通信技術(ICT)政策全般を統括する機関。サイバーセキュリティの確保、電波の有効利用促進、情報通信産業の振興などを担います。', open: false },
        { name: '総務省', description: '行政組織、地方自治、選挙、消防、統計など、国の基本的な仕組みを所管する省。国民生活の基盤となる行政サービスを支えます。', open: false },
        { name: '連邦開発省', description: '連邦を構成する各都市国家間の格差是正と、持続可能な発展を目指す省。大規模なインフラ整備計画や地域振興政策を推進します。', open: false },
        { name: '法務省', description: '国の基本的な法制度の維持・整備、国民の権利擁護を担う省。民事・刑事法の立案、検察、登記、戸籍管理などを所管します。', open: false },
        { name: '法人管轄省', description: '連邦内で活動する法人の設立、登録、監督を専門に行う省。企業の公正な経済活動を促進し、コンプライアンス遵守を指導します。', open: false },
        { name: '外務省', description: '外交政策の立案・執行、国際社会における国益の増進、在外国民の保護などを担う省。諸外国との友好関係の構築に努めます。', open: false },
        { name: '財務省', description: '国家予算の編成、税制、国債管理、通貨・金融制度の企画立案など、国の財政全般を担う省。健全な財政運営を目指します。', open: false },
        { name: '文化教育省', description: '教育、文化、スポーツ、宗教に関する行政を所管する省。国民の生涯学習の振興や、文化財の保護・活用を推進します。', open: false },
        { name: '科学技術省', description: '科学技術の振興、研究開発の推進、宇宙開発、原子力に関する政策を担う省。国の国際競争力と持続的発展の基盤を構築します。', open: false },
        { name: '労働省', description: '労働条件の改善、雇用の安定、職業能力開発など、働く人々に関わる政策を所管する省。公正な労働環境の実現を目指します。', open: false },
        { name: '厚生省', description: '医療、保健、福祉、公衆衛生、年金など、国民の健康と生活の安定に関わる行政を担う省。社会保障制度の運営を行います。', open: false },
        { name: '農林水産省', description: '食料の安定供給、農林水産業の振興、森林の保全、水産資源の管理などを所管する省。国の食と緑を守ります。', open: false },
        { name: '経済産業省', description: '経済・産業政策、エネルギー政策、貿易の振興などを担う省。国の経済活力の向上と、持続的な産業発展を推進します。', open: false },
        { name: '国土交通省', description: '道路、鉄道、港湾、空港などの社会資本整備、運輸、気象、観光、都市計画など、国土の総合的な開発と保全を担います。', open: false },
        { name: '国防総省', description: '国の平和と独立を守り、安全を保つための防衛政策を担う省。連邦軍の管理・運営を通じて、国民の生命と財産を保護します。', open: false }
      ]
    };
  },
  computed: {
    areAllOpen(): boolean {
      // すべてのアコーディオンが開いているかチェック
      return this.ministries.every(item => item.open);
    }
  },
  methods: {
    toggleAccordion(index: number): void {
      this.ministries[index].open = !this.ministries[index].open;
    },
    toggleAll(): void {
      // 現在の状態（すべて開いているか）の逆の状態を新しい状態とする
      const newState = !this.areAllOpen;
      // すべてのアコーディオンの開閉状態を新しい状態に更新
      this.ministries.forEach(item => {
        item.open = newState;
      });
    }
  }
});
</script>

<style scoped>


.ministries-container {
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
  margin: 0;
}

.last-updated {
  font-size: 0.875rem;
  color: #6c757d;
  text-align: right;
  margin-top: 0.5rem;
}

.section-description {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin-top: -1rem;
  margin-bottom: 3rem;
}

.info-section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e9ecef;
}

.section-title {
  font-size: 2rem;
  color: #008037;
  margin: 0;
  padding: 0;
  border: none;
}

.section-title.no-border {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.toggle-all-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #008037;
  background-color: #fff;
  color: #008037;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.toggle-all-button:hover {
  background-color: #e6f2e9;
}

.toggle-all-button .material-icons {
  font-size: 1.25rem;
}

.image-placeholder {
  width: 100%;
  border: 2px dashed #ced4da;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder img {
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
}

/* Accordion */
.accordion {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #e0e0e0;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  background-color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 700;
  color: #343a40;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.accordion-header:hover {
  background-color: #f8f9fa;
}

.accordion-body {
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  background-color: #fdfdfd;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
}

.accordion-content-enter-active,
.accordion-content-leave-active {
  transition: all 0.3s ease;
  max-height: 200px;
  overflow: hidden;
}
.accordion-content-enter-from,
.accordion-content-leave-to {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}

/* レスポンシブ対応 */
@media (max-width: 992px) {

}
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .section-title {
    font-size: 1.75rem;
  }
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
