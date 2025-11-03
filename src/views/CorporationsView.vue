<template>
  <PageContainer>
    <AppBreadcrumb />

    <div class="corporations-container">
      <header class="page-header">
        <h1>国内法人一覧</h1>
        <p class="last-updated">更新日: 2025年6月18日</p>
      </header>

      <p class="section-description">
        やんまー帝国連邦では、政府系組織から民間の株式会社、さらには学校法人や宗教法人まで、多種多様な法人が活動しています。これらの法人は、国の経済や文化、社会基盤を支える重要な役割を担っています。
        しかし民間企業の多くが全ヤンマシア脱税連合会(全脱連)に加盟しており、法人税の徴収が困難な状況にあります。
      </p>

      <!-- 法人リスト -->
      <div class="list-header">
          <h2 class="list-title">法人リスト</h2>
          <button @click="toggleAll" class="toggle-all-button">
            {{ areAllOpen ? 'すべて閉じる' : 'すべて開く' }}
            <span class="material-icons">{{ areAllOpen ? 'unfold_less' : 'unfold_more' }}</span>
          </button>
        </div>
      <div class="accordion">
        <div v-for="(category, catIndex) in categories" :key="category.id" class="accordion-item">
          <!-- Category Header -->
          <button @click="toggleCategory(catIndex)" class="accordion-header" :aria-expanded="category.open.toString()">
            <span>{{ category.name }}</span>
            <span class="material-icons">{{ category.open ? 'expand_less' : 'expand_more' }}</span>
          </button>
          
          <transition name="accordion-content">
            <div v-if="category.open" class="accordion-body">
              <!-- No Groups: Direct list of corporations -->
              <div v-if="!category.groups">
                <div class="card-grid">
                  <div v-for="(corp, index) in category.corporations" :key="index" class="corp-card">
                    <div class="card-image-placeholder">
                      <img :src="getImageUrl(corp.image)" :alt="corp.name" @error="imageLoadError">
                    </div>
                    <div class="card-content">
                      <h3 class="corp-name">{{ corp.name }}</h3>
                      <p class="corp-description" v-html="corp.description"></p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- With Groups: Nested Accordion -->
              <div v-else class="nested-accordion">
                 <div v-for="(group, groupIndex) in category.groups" :key="group.id" class="accordion-item-nested">
                    <button @click="toggleGroup(catIndex, groupIndex)" class="accordion-header-nested" :aria-expanded="group.open.toString()">
                      <span>{{ group.name }}</span>
                      <span class="material-icons">{{ group.open ? 'expand_less' : 'expand_more' }}</span>
                    </button>
                    <transition name="accordion-content">
                        <div v-if="group.open" class="accordion-body-nested">
                           <div class="card-grid">
                            <div v-for="(corp, index) in group.corporations" :key="index" class="corp-card">
                              <div class="card-image-placeholder">
                                <img :src="getImageUrl(corp.image)" :alt="corp.name" @error="imageLoadError">
                              </div>
                              <div class="card-content">
                                <h4 class="corp-name">{{ corp.name }}</h4>
                                <p class="corp-description" v-html="corp.description"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </transition>
                 </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import PageContainer from '@/components/layout/PageContainer.vue';

export default {
  name: 'CorporationsView',
  components: {
    AppBreadcrumb,
    PageContainer
  },
  data() {
    return {
      categories: [
        {
          id: 'seifu',
          name: '政府組織・特殊会社',
          open: false,
          corporations: [
            { name: '特務機関BERG', image: 'berg.webp', description: '連邦政府直属の非公開組織。連邦軍で対処できない事案に対応するため、独自の戦力を持つ。本部の所在地は非公開。' },
            { name: '山間帝国国有鉄道', image: 'ynr.webp', description: '国内の国有鉄道を運営する公共企業体。略称は帝鉄。国土交通省の外郭団体として、多くの路線を管理・運営している。' },
            { name: '帝都地下高速度交通局 水咲支部（水咲メトロ）', image: 'ttb_mizusaki.webp', description: '水咲市の地下鉄事業を運営する特殊会社。政府と水咲市が共同で出資している。' },
            { name: '水咲市営交通局', image: 'tbm.webp', description: '水咲市のバスや一部地下鉄路線を運営する公営企業。' },
            { name: '東桜高速鉄道', image: 'trt.webp', description: '水咲市内の第三セクター鉄道である桜町線を運営。廃止検討路線を住民の要望で存続させた。' },
            { name: '山間電信電話株式会社（YTT）', image: 'ytt.webp', description: '国内最大の総合ICT事業グループ。固定電話からグローバルソリューションまで幅広く手掛ける。' },
            { name: 'やんまー宇宙航空研究開発機構（YAXA）', image: 'yaxa.webp', description: '航空宇宙開発政策を担う国立研究開発法人。ロケット技術は世界トップクラス。' },
            { name: '山間郵政株式会社（YP）', image: 'yp.webp', description: '郵便・物流、銀行、生命保険事業を営む特殊会社。2007年に民営化された。' },
            { name: '山間電力株式会社', image: 'y_power.webp', description: '国内の電力小売・発電事業を営む特殊会社。' },
            { name: 'YANMA 住ヶ丘リテール株式会社', image: 'sumigaoka_retail.webp', description: '国内の高速道路の管理を行う特殊会社。ブランドカラーは「スミガオカ・グリーン」。' },
            { name: '山間エアポート株式会社', image: 'y_air.webp', description: '笹染国際空港の設置・管理を目的として設立された特殊会社。' },
          ]
        },
        {
          id: 'kabu',
          name: '株式会社・一般法人',
          open: false,
          groups: [
            { id: 'panpa', name: 'ぱんぱグループ', open: false, corporations: [
              { name: 'ぱんぱグループ株式会社', image: 'panpa.webp', description: '旧ぱんぱ財閥を起源とする巨大企業グループ。総売上高は約52兆円。公式サイト: <a href="https://panpa.paaaaa4.com/" target="_blank" rel="noopener noreferrer">link</a>' },
              { name: 'PANPA CASTILE HOUSE', image: 'p_castile_house.webp', description: 'ぱんぱグループの中枢となる本社ビル。' },
              { name: '統一求心会', image: 'p_uca.webp', description: '国家転覆を企む、ぱんぱグループ設立の団体。山間民主党との関係を公言している。' },
              { name: 'Panpa Private Intelligence Agency', image: 'p_pia.webp', description: '企業の裏仕事や諜報活動を行う団体。' },
              { name: '一般社団法人 Panpa Self Defence Forces', image: 'p_sdf.webp', description: '民間軍事法人。破防法監視対象団体。' },
              { name: '一般社団法人 ぱんぱヘルスネット', image: 'p_health.webp', description: '緊急援助、災害救援、血液事業、骨髄バンクなどを提供する。' },
              { name: 'Dimension Co., Ltd.', image: 'p_dimension.webp', description: '世界最大の半導体メーカーであり、最先端の製造サービスを提供するファウンドリ。' },
              { name: '株式会社スタディーエクスプレス', image: 'p_study_express.webp', description: '通信教育や塾などを手掛ける教育関連企業。' },
              { name: '山間民主党', image: 'p_tdpy.webp', description: '自由山間党による独裁の打倒を目標とする国政政党。' },
              { name: 'Pacific Wings', image: 'p_pacific_wings.webp', description: 'やんまー帝国連邦のフラッグキャリアである世界3位の航空会社。' },
              { name: '株式会社ヤンマテレビジョン', image: 'p_yt.webp', description: 'ヤンマニュースネットワーク(YNN)のキー局であるテレビ局。' },
              { name: 'Yanma News Network', image: 'p_ynn.webp', description: 'ヤンマテレビジョンをキー局とする民放テレビ局のニュースネットワーク。' },
              { name: 'NexCell Holding', image: 'p_nexcell.webp', description: '国内2位の通信系企業グループ。日本とを結ぶ大容量海底ケーブルを所有。' },
              { name: 'Foglia Inc.', image: 'p_foglia.webp', description: '様々なAIサービスを提供する企業。非合法なデータ収集の噂がある。' },
            ]},
            { id: 'ne', name: 'NEグループ', open: false, corporations: [
              { name: 'NEグループ株式会社', image: 'ne.webp', description: '旧ねの財閥を起源とする急成長企業。売上約43兆円。スローガンは「さぁ、新しい明日を創ろう。」' },
              { name: 'NE PrivateService inc.', image: 'n_private.webp', description: '護衛、貴重品輸送、施設警備などを行う会社。' },
              { name: 'Mateグループ', image: 'n_mate.webp', description: 'NEグループの姉妹グループ会社。' },
              { name: '財配会グループ（集団）', image: 'n_zg.webp', description: 'NEグループの姉妹グループ会社。' },
              { name: '一般社団法人 殺戮会（テロ組織）', image: 'n_kc.webp', description: 'ねの氏を最高指導者とする反社会組織。連邦そのものの破壊を目的とする。' },
              { name: '民間武器会社Milliam（ミリアム）', image: 'n_milliam.webp', description: '殺戮会の武器開発・販売を行い、活動資金源となっている。' },
              { name: '株式会社Hausas（ハウサス）', image: 'n_hausas.webp', description: 'NEグループ関連会社。' },
            ]},
            { id: 'aya', name: 'AYAグループ', open: false, corporations: [
              { name: 'AYAグループホールディングス', image: 'aya.webp', description: 'アンチやんまーの会のフロント企業。三大財閥の一つで売上は約35兆円。' },
              { name: '水咲急行電鉄グループ', image: 'a_mizukyu.webp', description: '大手私鉄の一つ。略称は水急。帝鉄と全面的に競合している。' },
              { name: 'ロリオングループ', image: 'a_rorion.webp', description: '国内最大の流通企業。「ロリモール」を各地に展開。旧名は「のじゃロリグループ」。' },
              { name: '水戸江製薬', image: 'a_mitoe.webp', description: '違法薬物「やんまードラック」を生産・輸出し、国の評判を貶めている。' },
              { name: 'カスヤマホールディングス', image: 'a_ksyam.webp', description: '帝国最大の外食チェーン。「ヤマゼリヤ」などを世界展開。' },
              { name: 'ヤマタロヤマカス＆カンパニー', image: 'a_ytyk.webp', description: '薬品販売事業。一部で違法薬物を販売し、基地周辺の治安を悪化させている。' },
            ]},
            { id: 'yanma', name: '山間グループ', open: false, corporations: [
              { name: '山間グループ株式会社', image: 'yanma.webp', description: '政府系企業から独立した、政府に協力的な唯一の大手グループ。売上約41兆円。公式サイト: <a href="https://yanma-group.jimdofree.com" target="_blank" rel="noopener noreferrer">link</a>' },
              { name: '株式会社ワイシービー', image: 'y_ycb.webp', description: '国際ブランドのクレジットカード「YCB」を運営。国内シェア30%。' },
              { name: '山間銀行株式会社', image: 'y_bank.webp', description: '4大メガバンクの一角を占める都市銀行。' },
              { name: '山間重工業株式会社', image: 'y_yhi.webp', description: '国内軍需産業の大手三社の一つ。陸・海・空・宇宙の防衛装備品を手掛ける。' },
              { name: 'Mount AI 株式会社', image: 'y_mount_ai.webp', description: '汎用人工知能（AI）の開発を行う企業。代表サービスは対話型AI「Mount AI」。' },
              { name: 'YONY株式会社', image: 'y_yony.webp', description: '総合電機メーカー。「プレイングステーション」や「Xpelia」などが有名。' },
              { name: '株式会社YAMAKAWA', image: 'y_yamakawa.png', description: '出版、映像、ゲームなどを行う総合エンターテインメント企業。' },
              { name: '株式会社ヤワンゴ', image: 'y_yawango.png', description: 'YAMAKAWAの完全子会社。「ヤマヤマ動画」を運営し、独自のネット文化を発信。' },
            ]},
            { id: 'other', name: 'その他', open: false, corporations: [
              { name: 'Terminal inc.', image: 'terminal.webp', description: 'バーコード決済「TerminalPay」とデータベース管理システム「Terminal DATABASE SYSTEM」を運営。利益32兆円。' },
              { name: 'LineFox Logistics Inc.', image: 'linefox.webp', description: '国内第二位の物流会社。空運、陸運、海運など様々な分野を支える。' },
              { name: '山間娯楽機株式会社', image: 'yango.webp', description: '遊園地の遊具メーカー。愛称はYANGO（ヤンゴ）。世界シェア4割を誇る。' },
              { name: '株式会社PLENABA（プレナバ）', image: 'plenaba.webp', description: '水間市に本社を置く高級ファッションブランド。' },
              { name: 'Pocketホールディングス株式会社', image: 'pocket.webp', description: 'ホテル、駐車場、アミューズメント施設などを運営するグループ企業。' },
              { name: 'Clubアミューズメント株式会社', image: 'club.webp', description: 'ゲームセンターやネットカフェ「Club24」などを展開するアミューズメント企業。' },
              { name: 'Abicoシステムズ株式会社', image: 'abico.webp', description: 'ホームドア、自動改札機、信号機など交通インフラのシステムを開発・製造。' },
              { name: '株式会社YCityNet', image: 'citynet.webp', description: '山間勇者の会の主な支持層。学園都市を開発予定。' },
            ]},
          ]
        },
        {
          id: 'school',
          name: '学校法人',
          open: false,
          groups: [
              { id: 'kokkoritsu', name: '国公立', open: false, corporations: [
                  { name: '国立大学法人山間帝国大学', image: 'yeu.webp', description: '国内屈指の難関国立大学。山海水焔（さんかいすいえん）のひとつ。文学、経済、工学など9学部を持つ。' },
                  { name: '公立大学法人水咲市立医療大学', image: 'mmu.webp', description: '水咲市が運営する医療系大学。医学、薬学、看護学など5学部を持つ。' },
              ]},
              { id: 'shiritsu', name: '私立', open: false, corporations: [
                  { name: '学校法人アストリア学園', image: 'asutoria.webp', description: '専門学校エクア学園などを運営。実学を重視し、NEグループと連携。スローガンは「見せれるだけの、実力でやれ」' },
                  { name: '専門学校エクア学園', image: 'ekua.webp', description: 'IT、ゲーム、デザインなど多様な分野を学べる専門学校。' },
              ]}
          ]
        },
        {
            id: 'syukyo',
            name: '宗教法人',
            open: false,
            corporations: [
                { name: '宗教法人世界隙間統一家庭連合', image: 'sukima.webp', description: 'カルト宗教・テロ組織。隙間氏による世界統治を目的とし、教祖は重要指名手配されている。' },
                { name: '宗教法人独配教', image: 'ne08.webp', description: '殺戮会系列のカルト宗教・テロ組織。他の全宗教を敵視している。' },
            ]
        },
        {
            id: 'kyoukai',
            name: '協会・連合など',
            open: false,
            corporations: [
                { name: '全ヤンマシア脱税連合会', image: 'zendaturen.webp', description: '脱税を宣言する企業が加盟する組織。破壊活動防止法の調査対象団体。' },
            ]
        }
      ]
    };
  },
   computed: {
    areAllOpen() {
      return this.categories.every(cat => {
        if (!cat.groups) {
          return cat.open;
        }
        return cat.open && cat.groups.every(group => group.open);
      });
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return 'https://placehold.co/1920x1080/e9ecef/6c757d?text=No+Image';
      try {
        return require(`@/assets/corporations/${imageName}`);
      } catch (e) {
        console.error(`Image not found: ${imageName}`);
        return 'https://placehold.co/1920x1080/e9ecef/6c757d?text=Image+Not+Found';
      }
    },
    imageLoadError(event) {
        event.target.src = 'https://placehold.co/1920x1080/e9ecef/6c757d?text=Image+Load+Error';
    },
    toggleCategory(catIndex) {
      this.categories[catIndex].open = !this.categories[catIndex].open;
    },
    toggleGroup(catIndex, groupIndex) {
      this.categories[catIndex].groups[groupIndex].open = !this.categories[catIndex].groups[groupIndex].open;
    },
    toggleAll() {
      const newState = !this.areAllOpen;
      this.categories.forEach(cat => {
        cat.open = newState;
        if (cat.groups) {
          cat.groups.forEach(group => {
            group.open = newState;
          });
        }
      });
    }
  }
}
</script>

<style scoped>
.corporations-container {
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

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e9ecef;
}

.list-title {
  font-size: 2rem;
  color: #008037;
  margin: 0;
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
  font-size: 1.25rem;
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
  padding: 1.5rem;
  background-color: #fdfdfd;
}

.nested-accordion {
    margin-top: -1rem;
    padding: 1rem 0 0 0;
}

.accordion-item-nested {
    border: 1px solid #e9ecef;
    border-radius: 6px;
    margin-bottom: 1rem;
    overflow: hidden;
}
.accordion-item-nested:last-child {
    margin-bottom: 0;
}

.accordion-header-nested {
    width: 100%;
    background-color: #f8f9fa;
    border: none;
    padding: 0.75rem 1.25rem;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 700;
    color: #008037;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.accordion-body-nested {
    padding: 1.5rem;
    background-color: #fff;
}


.accordion-content-enter-active,
.accordion-content-leave-active {
  transition: all 0.3s ease;
  max-height: 5000px; /* Adjust if content is very long */
  overflow: hidden;
}
.accordion-content-enter-from,
.accordion-content-leave-to {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.corp-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: box-shadow 0.3s, transform 0.3s;
}
.corp-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.card-image-placeholder {
    aspect-ratio: 16 / 9;
    background-color: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6c757d;
    font-weight: 700;
    overflow: hidden;
}
.card-image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-content {
    padding: 1.5rem;
    flex-grow: 1;
}

.corp-name {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    color: #343a40;
}
.nested-accordion .corp-name {
    font-size: 1.15rem;
}

.corp-description {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #555;
}

.corp-description >>> a {
    color: #008037;
    font-weight: bold;
    text-decoration: none;
}
.corp-description >>> a:hover {
    text-decoration: underline;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .list-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .list-title {
    font-size: 1.75rem;
  }
  .card-grid {
    /* On smaller screens like phones and portrait tablets, 
       switch to a single column layout to prevent overflow. */
    grid-template-columns: 1fr;
  }
}
</style>
