<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="election-container">
      <header class="page-header">
        <h1>上院選挙2025 特設ページ</h1>
        <p class="last-updated">更新日: 2025年7月20日</p>
      </header>

      <p class="section-description">
        2025年7月に行われた第33回上院議員通常選挙の結果速報です。このページでは、選挙後の新しい議席構成、各政党の獲得議席数、そして選挙前との比較をまとめています。<br>
      </p>

      <!-- 上院選挙2025結果 -->
      <section class="election-section">
        <h2 class="section-title">選挙結果と新勢力図</h2>
        
        <!-- 議席構成図（選挙結果） -->
        <div class="chart-wrapper">
          <h3 class="chart-title">議席構成</h3>
          <p class="chart-subtitle">議席数は「改選議席 (非改選議席)」で表示しています。グラフの濃い色は非改選議席です。</p>
          <div class="chart-grid">
            <!-- 与党 -->
            <div class="party-list ruling">
              <div class="party-group-title">与党</div>
              <div class="party-total breakdown">{{ jouinElectionTotals.ruling.kaizen }}<span class="hikaizen-seats-total"> ({{ jouinElectionTotals.ruling.hikaizen }})</span></div>
              <div class="party-breakdown-grid">
                <div v-for="party in jouinProcessed.ruling" :key="party.name" class="party-box breakdown-format">
                  <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                  <div class="party-box-name">{{ party.abbr }}</div>
                  <div class="party-box-seats-breakdown">
                    {{ party.kaizen }}<span class="hikaizen-seats">({{ party.hikaizen }})</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="chart-container">
              <div class="majority-line">過半数 {{ jouinProcessed.majority }}</div>
              <DoughnutChart :data="jouin2025BreakdownChartData" :options="halfDoughnutBreakdownOptions"/>
              <div class="total-seats-label">定数 {{ jouinProcessed.totalSeats }}</div>
            </div>

            <!-- 野党 -->
            <div class="party-list opposition">
              <div class="party-group-title">野党</div>
              <div class="party-total breakdown">{{ jouinElectionTotals.opposition.kaizen }}<span class="hikaizen-seats-total"> ({{ jouinElectionTotals.opposition.hikaizen }})</span></div>
              <div v-for="group in jouinProcessed.opposition" :key="group.name" class="opposition-group">
                 <h4 class="opposition-sub-title">{{ group.name }}</h4>
                 <div class="party-breakdown-grid">
                   <div v-for="party in group.parties" :key="party.name" class="party-box breakdown-format">
                    <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                    <div class="party-box-name">{{ party.abbr }}</div>
                    <div class="party-box-seats-breakdown">
                      {{ party.kaizen }}<span class="hikaizen-seats">({{ party.hikaizen }})</span>
                    </div>
                  </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <!-- 選挙前後議席比較 -->
        <h3 class="subsection-title">選挙前後 議席比較</h3>
        <div class="table-container">
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>政党名</th>
                  <th>今回当選</th>
                  <th>連邦政府任命</th>
                  <th>非改選</th>
                  <th>選挙後合計</th>
                  <th>改選前</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="party in jouinSeatChangeTableData.rows" :key="party.name">
                  <td>
                    <span class="party-color-box" :style="{ backgroundColor: party.color }"></span>
                    {{ party.name }}
                    <span v-if="party.name === '殲滅党'" class="party-note">
                      (※国会議事堂爆破による出馬停止処分)
                    </span>
                  </td>
                  <td>{{ party.electedThisTime }}</td>
                  <td>{{ party.appointed }}</td>
                  <td>{{ party.notReelected }}</td>
                  <td>{{ party.totalAfter }}</td>
                  <td>{{ party.totalBefore }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>合計</td>
                  <td>{{ jouinSeatChangeTableData.totals.electedThisTime }}</td>
                  <td>{{ jouinSeatChangeTableData.totals.appointed }}</td>
                  <td>{{ jouinSeatChangeTableData.totals.notReelected }}</td>
                  <td>{{ jouinSeatChangeTableData.totals.totalAfter }}</td>
                  <td>{{ jouinSeatChangeTableData.totals.totalBefore }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import DoughnutChart from '@/components/DoughnutChart.vue';

export default {
  // コンポーネント名を変更
  name: 'SangiinElection2025View',
  components: {
    AppBreadcrumb,
    DoughnutChart
  },
  data() {
    // 政党の基本情報を一元管理
    const partyMaster = {
      jiyuuSankan: { name: '自由山間党', abbr: '自山', color: '#008442', ideology: '中道右派' },
      yammaKyosan: { name: '自由ヤンマシア解放戦線', abbr: '解放', color: '#c82d33', ideology: '急進左翼' },
      sankanMinshu: { name: '山間民主党', abbr: '山民', color: '#f1aa32', ideology: '中道左派' },
      sankanYuusha: { name: '山間勇者の会', abbr: '山勇会', color: '#91c327', ideology: '中道左派' },
      yanmaKokumin: { name: 'やんまーから国民を守る党', abbr: 'や国党', color: '#63c7e0', ideology: 'ポピュリズム' },
      mushozoku: { name: '無所属', abbr: '無所属', color: '#a9a9a9', ideology: '-' },
      senmetsu: { name: '殲滅党', abbr: '殲滅', color: '#333333', ideology: 'アナキズム' },
    };

    return {
      // 上院の選挙前議席数
      jouinPreElectionSeats: {
        '自由山間党': 137,
        '自由ヤンマシア解放戦線': 39,
        '山間民主党': 22,
        '山間勇者の会': 8,
        'やんまーから国民を守る党': 4,
        '無所属': 4,
        '殲滅党': 0,
      },
      // 上院のデータ。下院のデータは削除。
      jouinData: {
        totalSeats: 214,
        hikaizenSeats: { // 非改選議席
          '自由山間党': 75,
          '自由ヤンマシア解放戦線': 16,
          '山間民主党': 9,
          '山間勇者の会': 4,
          'やんまーから国民を守る党': 2,
          '無所属': 1,
          '殲滅党': 0,
        },
        ruling: [
          { ...partyMaster.jiyuuSankan, seats: 108 },
        ],
        opposition: [
          { 
            name: '野党共闘',
            parties: [
              { ...partyMaster.yammaKyosan, seats: 48 },
              { ...partyMaster.sankanMinshu, seats: 35 },
            ]
          },
          {
            name: '野党諸派',
            parties: [
              { ...partyMaster.sankanYuusha, seats: 9 },
              { ...partyMaster.yanmaKokumin, seats: 9 },
              { ...partyMaster.senmetsu, seats: 0 },
              { ...partyMaster.mushozoku, seats: 5 },
            ]
          }
        ]
      },
      // グラフのオプション
      halfDoughnutChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90,
        circumference: 180,
        cutout: '60%',
        plugins: { tooltip: { enabled: false }, legend: { display: false }, datalabels: { display: false } }
      },
      halfDoughnutBreakdownOptions: {
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90,
        circumference: 180,
        cutout: '50%',
        plugins: { tooltip: { enabled: false }, legend: { display: false }, datalabels: { display: false } }
      },
    }
  },
  computed: {
    /**
     * 上院の処理済みデータ
     */
    jouinProcessed() {
      return this.processHouseData(this.jouinData);
    },
    /**
     * 上院の議席構成グラフ用データ
     */
    jouinChartData() {
      return this.createChartData(this.jouinProcessed.allParties);
    },
    /**
     * 上院選挙2025の内訳グラフ用データ
     */
    jouin2025BreakdownChartData() {
      const rulingParties = this.jouinProcessed.ruling;
      const oppositionParties = this.jouinProcessed.opposition.flatMap(g => g.parties);
      const oppositionHikaizenTotal = this.jouinElectionTotals.opposition.hikaizen;

      // データをカテゴリ別に作成
      const datasets = [
        ...rulingParties.map(p => ({ label: `${p.abbr} (非改選)`, data: p.hikaizen, color: '#66bb6a' })), // 与党非改選
        ...rulingParties.map(p => ({ label: `${p.abbr} (改選)`, data: p.kaizen, color: p.color })), // 与党改選
        ...oppositionParties.map(p => ({ label: `${p.abbr} (改選)`, data: p.kaizen, color: p.color })), // 野党改選
        { label: '野党 (非改選)', data: oppositionHikaizenTotal, color: '#ef9a9a' } // 野党非改選
      ];

      return {
        labels: datasets.map(d => d.label),
        datasets: [{
          data: datasets.map(d => d.data),
          backgroundColor: datasets.map(d => d.color),
          borderWidth: 1,
          borderColor: '#f8f9fa'
        }]
      };
    },
    /**
     * 上院選挙の改選・非改選の合計議席数
     */
    jouinElectionTotals() {
      const calculateTotals = (parties) => {
        return parties.reduce((acc, party) => {
          acc.kaizen += party.kaizen || 0;
          acc.hikaizen += party.hikaizen || 0;
          return acc;
        }, { kaizen: 0, hikaizen: 0 });
      };
      
      const rulingTotals = calculateTotals(this.jouinProcessed.ruling);
      const oppositionTotals = calculateTotals(this.jouinProcessed.opposition.flatMap(g => g.parties));

      return { ruling: rulingTotals, opposition: oppositionTotals };
    },
    /**
     * 上院の選挙前後比較テーブル用データ
     */
    jouinSeatChangeTableData() {
      const tableRows = this.jouinProcessed.allParties.map(party => {
        const totalBefore = this.jouinPreElectionSeats[party.name] || 0;
        let appointed = 0;
        let electedThisTime = party.kaizen;

        // 自由山間党の特別処理
        if (party.name === '自由山間党') {
          appointed = 33;
          electedThisTime = 0;
        }
        
        // 殲滅党の特別処理
        if (party.name === '殲滅党') {
            appointed = 0;
            electedThisTime = 0;
        }

        return {
          ...party,
          totalBefore,
          appointed,
          notReelected: party.hikaizen,
          electedThisTime,
          totalAfter: party.seats,
        };
      });

      const totals = tableRows.reduce((acc, party) => {
        acc.totalBefore += party.totalBefore;
        acc.appointed += party.appointed;
        acc.notReelected += party.notReelected;
        acc.electedThisTime += party.electedThisTime;
        acc.totalAfter += party.totalAfter;
        return acc;
      }, { totalBefore: 0, appointed: 0, notReelected: 0, electedThisTime: 0, totalAfter: 0 });

      return {
        rows: tableRows,
        totals: totals,
      };
    }
  },
  methods: {
    /**
     * 議院のデータを受け取り、集計情報を付与して返す
     * @param {object} houseData - 院のデータ (jouinData)
     * @returns {object} - 集計済みのデータ
     */
    processHouseData(houseData) {
      // 全政党のフラットなリストを作成し、改選・非改選議席を計算
      const allParties = [];
      const hikaizenSeats = houseData.hikaizenSeats || {};
      
      // 与党
      const ruling = houseData.ruling.map(p => {
        const hikaizen = hikaizenSeats[p.name] || 0;
        const kaizen = p.seats - hikaizen;
        const partyData = { ...p, group: '与党', hikaizen, kaizen };
        allParties.push(partyData);
        return partyData;
      });

      // 野党
      const opposition = houseData.opposition.map(group => ({
        ...group,
        parties: group.parties.map(p => {
          const hikaizen = hikaizenSeats[p.name] || 0;
          const kaizen = p.seats - hikaizen;
          const partyData = { ...p, group: group.name, hikaizen, kaizen };
          allParties.push(partyData);
          return partyData;
        })
      }));
      
      // 各勢力の合計議席数
      const rulingTotal = ruling.reduce((sum, p) => sum + p.seats, 0);
      const oppositionTotal = opposition.flatMap(g => g.parties).reduce((sum, p) => sum + p.seats, 0);
      
      // 定数が指定されていない場合は合計から算出
      const totalSeats = houseData.totalSeats || (rulingTotal + oppositionTotal);

      return {
        ruling,
        opposition,
        allParties,
        totals: {
          ruling: rulingTotal,
          opposition: oppositionTotal,
        },
        totalSeats,
        majority: Math.floor(totalSeats / 2) + 1,
      };
    },
    /**
     * 政党リストからグラフ用データを作成する
     * @param {Array} parties - 政党オブジェクトの配列
     * @returns {object} - Chart.js用のデータ形式
     */
    createChartData(parties) {
      return {
        labels: parties.map(p => p.abbr),
        datasets: [{
          data: parties.map(p => p.seats),
          backgroundColor: parties.map(p => p.color),
          borderWidth: 2,
          borderColor: '#f8f9fa'
        }]
      };
    }
  }
}
</script>

<style scoped>
.election-container {
  margin: 0 auto;
}
.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
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
.election-section {
  margin-bottom: 4rem;
}
.election-section:last-child {
  margin-bottom: 0;
}
.section-title {
  font-size: 2rem;
  color: #008037;
  margin: 0 0 2rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e9ecef;
}
.subsection-title {
  font-size: 1.5rem;
  color: #343a40;
  margin: 2.5rem 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e9ecef;
}

/* Chart Layout */
.chart-wrapper {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 2.5rem;
}
.chart-title {
  text-align: center;
  font-size: 1.75rem;
  color: #343a40;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
}
.chart-subtitle {
  text-align: center;
  margin-bottom: 2rem;
  color: #6c757d;
}
.chart-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: flex-start;
  gap: 2rem;
}
.chart-container {
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding-top: 1rem;
}
.majority-line {
  position: absolute;
  top: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #495057;
  font-size: 0.9rem;
  white-space: nowrap;
}
.majority-line::before {
  content: '';
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 25px;
  background-color: #495057;
}

.total-seats-label {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: #343a40;
  font-size: 1.75rem;
  font-weight: bold;
  white-space: nowrap;
}


/* Party List & Boxes */
.party-list {
  text-align: center;
}
.party-group-title {
  font-size: 2.25rem;
  font-weight: 700;
}
.party-group-title.breakdown-title {
  font-size: 1.75rem;
  color: #495057;
}
.party-list.ruling .party-group-title { color: #008442; }
.party-list.opposition .party-group-title { color: #c82d33; }
.party-total {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
}
.party-total.breakdown {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.hikaizen-seats-total {
  font-size: 1.5rem;
  color: #6c757d;
  font-weight: normal;
}
.party-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(3, 65px);
    gap: 0.5rem;
    margin-top: 0.5rem;
    justify-content: center;
}
.party-box {
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.party-box.breakdown-format {
  padding-bottom: 0.5rem;
}
.party-box-header {
    height: 5px;
}
.party-box-name {
    font-size: 0.9rem;
    padding: 0.5rem 0.2rem 0.5rem;
    color: #343a40;
    font-weight: bold;
}
.party-box-seats {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 0.2rem 0.4rem;
    color: #212529;
}
.party-box-seats-breakdown {
  font-size: 1.2rem;
  font-weight: bold;
  color: #212529;
}
.hikaizen-seats {
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: normal;
  margin-left: 0.1rem;
}
.opposition-group {
  margin-top: 0.75rem;
}
.opposition-group:first-of-type {
    margin-top: 0;
}
.opposition-sub-title {
  font-weight: bold;
  color: #495057;
  margin-bottom: 0.75rem;
  text-align: center;
  font-size: 1.1rem;
}

/* Table Layout */
.table-container { width: 100%; }
.table-caption { text-align: right; color: #6c757d; font-size: 0.9rem; margin: 0 0 0.5rem 0; }
.table-wrapper { overflow-x: auto; border: 1px solid #e0e0e0; border-radius: 8px; }
table { width: 100%; border-collapse: collapse; background-color: #fff; white-space: nowrap; }
th, td { 
  padding: 0.75rem 1rem; 
  border-bottom: 1px solid #e0e0e0; 
  text-align: center;
}
th:first-child, td:first-child {
  text-align: left;
  padding-left: 1.5rem;
}
th:last-child, td:last-child {
  padding-right: 1.5rem;
}
th.party-color-th {
  width: 20px;
  padding-right: 0;
}
.party-color-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 8px;
}
thead th { background-color: #f8f9fa; font-weight: 700; color: #343a40; }
tbody tr:last-child td { border-bottom: none; }
tbody tr:hover { background-color: #f8f9fa; }
tfoot td { font-weight: bold; background-color: #f8f9fa;}

.party-note {
  font-size: 0.875rem;
  color: #c82d33;
  margin-left: 0.5rem;
  font-weight: normal;
}


/* レスポンシブ対応 */
@media (max-width: 1200px) {
    .chart-grid {
        gap: 1.5rem;
    }
    .chart-wrapper {
        padding: 2rem;
    }
}
@media (max-width: 992px) {
  .chart-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .chart-container {
    order: -1; 
    max-width: 100%;
  }
  .party-list {
    text-align: left;
  }
  .party-breakdown-grid {
    justify-content: flex-start;
    grid-template-columns: repeat(auto-fill, 65px);
  }
  .party-list.ruling {
      order: -2;
  }
  .party-list.opposition {
      order: 1;
  }
  .opposition-sub-title {
      text-align: left;
  }
}
@media (max-width: 768px) {
  .page-header h1 { font-size: 2rem; }
  .section-title, .chart-title { font-size: 1.75rem; }
  .chart-wrapper {
      padding: 1.5rem;
  }
  .party-total {
      font-size: 3.5rem;
  }
  .total-seats-label {
    font-size: 1.5rem;
    bottom: 0.5rem;
  }
}
@media (max-width: 480px) {
    .party-group-title {
        font-size: 2rem;
    }
    .party-total {
        font-size: 3rem;
    }
}
</style>
