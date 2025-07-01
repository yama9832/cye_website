<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="diet-container">
      <header class="page-header">
        <h1>帝国議会</h1>
        <p class="last-updated">更新日: 2025年7月1日</p>
      </header>

      <div class="election-notice">
        <span class="material-icons">info</span>
        <p>7月20日に上院選挙が実施されます。それに伴い、議席数が変動する可能性があります。</p>
      </div>

      <p class="section-description">
        やんまー帝国連邦の立法府である帝国議会は、「国権の最高機関」として位置づけられています。帝国議会は国民を代表する選挙された議員で構成される上院と下院の二院制を採用しており、法律の制定、予算の議決、内閣総理大臣の指名など、国政の根幹に関わる重要な役割を担っています。 <br>
        上院議員は大選挙区比例代表並立制、下院議員は小選挙区比例代表並立制による直接選挙で選ばれます。大選挙区は各構成国を1つの選挙区として扱い、小選挙区は各構成国内を分割して選挙区として扱います。<br>
        なお、与党が政権を維持するために必要な過半数の議席は、国王指定議席として公職選挙法により確保されています。そのため、政権交代には公職選挙法の改正、または国王による指定議席の変更が不可欠です。
      </p>

      <section class="chamber-section">
        <h2 class="section-title">議員構成図</h2>
        <div class="chart-wrapper">
          <h3 class="chart-title">上院</h3>
          <div class="chart-grid">
            <div class="party-list ruling">
              <div class="party-group-title">与党</div>
              <div class="party-total">{{ jouinData.rulingTotal }}</div>
              <div class="party-breakdown-grid">
                <div v-for="party in jouinData.ruling" :key="party.name" class="party-box">
                  <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                  <div class="party-box-name">{{ party.abbr }}</div>
                  <div class="party-box-seats">{{ party.seats }}</div>
                </div>
              </div>
            </div>
            <div class="chart-container">
              <div class="majority-line">過半数 50</div>
              <DoughnutChart :data="jouinChartData" :options="chartOptions"/>
              <div class="chart-info">
                <div class="total-seats">定数 <strong>100</strong></div>
              </div>
            </div>
            <div class="party-list opposition">
              <div class="party-group-title">野党</div>
              <div class="party-total">{{ jouinData.oppositionTotal }}</div>
               <div class="opposition-group">
                <h4 class="opposition-sub-title">野党共闘</h4>
                <div class="party-breakdown-grid">
                  <div v-for="party in jouinData.oppositionKyotou" :key="party.name" class="party-box">
                    <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                    <div class="party-box-name">{{ party.abbr }}</div>
                    <div class="party-box-seats">{{ party.seats }}</div>
                  </div>
                </div>
              </div>
              <div class="opposition-group">
                 <h4 class="opposition-sub-title">野党諸派</h4>
                <div class="party-breakdown-grid">
                  <div v-for="party in jouinData.oppositionShoha" :key="party.name" class="party-box">
                    <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                    <div class="party-box-name">{{ party.abbr }}</div>
                    <div class="party-box-seats">{{ party.seats }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-wrapper">
          <h3 class="chart-title">下院</h3>
          <div class="chart-grid">
            <div class="party-list ruling">
              <div class="party-group-title">与党</div>
              <div class="party-total">{{ kainData.rulingTotal }}</div>
              <div class="party-breakdown-grid">
                <div v-for="party in kainData.ruling" :key="party.name" class="party-box">
                  <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                  <div class="party-box-name">{{ party.abbr }}</div>
                  <div class="party-box-seats">{{ party.seats }}</div>
                </div>
              </div>
            </div>
            <div class="chart-container">
               <div class="majority-line">過半数 150</div>
              <DoughnutChart :data="kainChartData" :options="chartOptions" />
              <div class="chart-info">
                <div class="total-seats">定数 <strong>300</strong></div>
              </div>
            </div>
            <div class="party-list opposition">
              <div class="party-group-title">野党</div>
              <div class="party-total">{{ kainData.oppositionTotal }}</div>
              <div class="opposition-group">
                <h4 class="opposition-sub-title">野党共闘</h4>
                <div class="party-breakdown-grid">
                    <div v-for="party in kainData.oppositionKyotou" :key="party.name" class="party-box">
                    <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                    <div class="party-box-name">{{ party.abbr }}</div>
                    <div class="party-box-seats">{{ party.seats }}</div>
                    </div>
                </div>
              </div>
              <div class="opposition-group">
                <h4 class="opposition-sub-title">野党諸派</h4>
                <div class="party-breakdown-grid">
                    <div v-for="party in kainData.oppositionShoha" :key="party.name" class="party-box">
                    <div class="party-box-header" :style="{ backgroundColor: party.color }"></div>
                    <div class="party-box-name">{{ party.abbr }}</div>
                    <div class="party-box-seats">{{ party.seats }}</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="chamber-section">
        <h2 class="section-title">政党別議席数（上院）</h2>
        <div class="table-container">
            <p class="table-caption">定数100名</p>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>政党名</th>
                    <th>政治思想</th>
                    <th>獲得議席数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>与党</td>
                    <td>自由山間党</td>
                    <td>中道右派</td>
                    <td>64議席</td>
                  </tr>
                  <tr>
                    <td>野党第一党</td>
                    <td>自由ヤンマシア解放戦線 (旧山間共産党)</td>
                    <td>急進左翼</td>
                    <td>18議席</td>
                  </tr>
                  <tr>
                    <td>野党第二党</td>
                    <td>山間民主党</td>
                    <td>中道左派</td>
                    <td>10議席</td>
                  </tr>
                   <tr>
                    <td>野党第三党</td>
                    <td>山間勇者の会</td>
                    <td>中道左派</td>
                    <td>4議席</td>
                  </tr>
                  <tr>
                    <td>野党第四党</td>
                    <td>やんまーから国民を守る党</td>
                    <td>ポピュリズム</td>
                    <td>2議席</td>
                  </tr>
                  <tr>
                    <td>その他</td>
                    <td>無所属・諸派</td>
                    <td>-</td>
                    <td>2議席</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </section>

      <section class="chamber-section">
        <h2 class="section-title">政党別議席数（下院）</h2>
        <div class="table-container">
            <p class="table-caption">定数300名</p>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>政党名</th>
                    <th>政治思想</th>
                    <th>獲得議席数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>与党</td>
                    <td>自由山間党</td>
                    <td>中道右派</td>
                    <td>151議席</td>
                  </tr>
                  <tr>
                    <td>野党第一党</td>
                    <td>自由ヤンマシア解放戦線 (旧山間共産党)</td>
                    <td>急進左翼</td>
                    <td>101議席</td>
                  </tr>
                  <tr>
                    <td>野党第二党</td>
                    <td>山間民主党</td>
                    <td>中道左派</td>
                    <td>35議席</td>
                  </tr>
                   <tr>
                    <td>野党第三党</td>
                    <td>山間勇者の会</td>
                    <td>中道左派</td>
                    <td>5議席</td>
                  </tr>
                  <tr>
                    <td>野党第四党</td>
                    <td>やんまーから国民を守る党</td>
                    <td>ポピュリズム</td>
                    <td>6議席</td>
                  </tr>
                  <tr>
                    <td>その他</td>
                    <td>無所属・諸派</td>
                    <td>-</td>
                    <td>2議席</td>
                  </tr>
                </tbody>
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
  name: 'DietView',
  components: {
    AppBreadcrumb,
    DoughnutChart
  },
  data() {
    const partyColors = {
      jiyuuSankan: '#008442',
      yammaKyosan: '#c82d33',
      sankanMinshu: '#f1aa32',
      sankanYuusha: '#91c327',
      yanmaKokumin: '#63c7e0',
      mushozoku: '#a9a9a9',
    };

    const jouinData = {
      ruling: [ { name: '自由山間党', abbr: '自山', seats: 64, color: partyColors.jiyuuSankan } ],
      oppositionKyotou: [ { name: '自由ヤンマシア解放戦線', abbr: '解放', seats: 18, color: partyColors.yammaKyosan }, { name: '山間民主党', abbr: '山民', seats: 10, color: partyColors.sankanMinshu } ],
      oppositionShoha: [ { name: '山間勇者の会', abbr: '山勇会', seats: 4, color: partyColors.sankanYuusha }, { name: 'やんまーから国民を守る党', abbr: '国民', seats: 2, color: partyColors.yanmaKokumin }, { name: '無所属', abbr: '無所属', seats: 2, color: partyColors.mushozoku } ],
    };
    jouinData.rulingTotal = jouinData.ruling.reduce((sum, p) => sum + p.seats, 0);
    jouinData.oppositionTotal = [...jouinData.oppositionKyotou, ...jouinData.oppositionShoha].reduce((sum, p) => sum + p.seats, 0);

    const kainData = {
      ruling: [ { name: '自由山間党', abbr: '自山', seats: 151, color: partyColors.jiyuuSankan } ],
      oppositionKyotou: [ { name: '自由ヤンマシア解放戦線', abbr: '解放', seats: 101, color: partyColors.yammaKyosan }, { name: '山間民主党', abbr: '山民', seats: 35, color: partyColors.sankanMinshu } ],
      oppositionShoha: [ { name: '山間勇者の会', abbr: '山勇会', seats: 5, color: partyColors.sankanYuusha }, { name: 'やんまーから国民を守る党', abbr: '国民', seats: 6, color: partyColors.yanmaKokumin }, { name: '無所属', abbr: '無所属', seats: 2, color: partyColors.mushozoku } ],
    };
    kainData.rulingTotal = kainData.ruling.reduce((sum, p) => sum + p.seats, 0);
    kainData.oppositionTotal = [...kainData.oppositionKyotou, ...kainData.oppositionShoha].reduce((sum, p) => sum + p.seats, 0);
    
    const createChartData = (data) => {
        const allParties = [...data.ruling, ...data.oppositionKyotou, ...data.oppositionShoha];
        return {
            labels: allParties.map(p => p.abbr),
            datasets: [{
                data: allParties.map(p => p.seats),
                backgroundColor: allParties.map(p => p.color),
                borderWidth: 2,
                borderColor: '#f8f9fa'
            }]
        }
    };

    // グラフのオプション
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90,
        circumference: 180,
        cutout: '60%',
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
          datalabels: {
            display: false,
          }
        }
      };


    return {
      jouinData,
      kainData,
      jouinChartData: createChartData(jouinData),
      kainChartData: createChartData(kainData),
      chartOptions
    }
  }
}
</script>

<style scoped>
.diet-container {
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
.election-notice {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #e6f2ff;
  color: #004085;
  border: 1px solid #b8daff;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 2.5rem;
}
.election-notice p {
  margin: 0;
  font-weight: 500;
}
.section-description {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin-top: -1rem;
  margin-bottom: 3rem;
}
.chamber-section {
  margin-bottom: 4rem;
}
.chamber-section:last-child {
  margin-bottom: 0;
}
.section-title {
  font-size: 2rem;
  color: #008037;
  margin: 0 0 2rem 0;
  padding-bottom: 0.75rem;
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
  font-size: 2.25rem;
  color: #343a40;
  margin: 0 0 2.5rem 0;
  font-weight: bold;
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
.chart-info {
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
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
.total-seats {
  color: #343a40;
  font-size: 1.25rem;
}
.total-seats strong {
  font-size: 2rem;
  font-weight: 700;
}

/* Party List & Boxes */
.party-list {
  text-align: center;
}
.party-group-title {
  font-size: 2.25rem;
  font-weight: 700;
}
.party-list.ruling .party-group-title { color: #008442; }
.party-list.opposition .party-group-title { color: #c82d33; }
.party-total {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1rem;
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
.party-box-header {
    height: 5px;
}
.party-box-name {
    font-size: 0.8rem;
    padding: 0.3rem 0.2rem 0.2rem;
    color: #343a40;
    font-weight: bold;
}
.party-box-seats {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 0.2rem 0.4rem;
    color: #212529;
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
th, td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid #e0e0e0; }
td:nth-child(4), th:nth-child(4) { text-align: right; }
thead th { background-color: #f8f9fa; font-weight: 700; color: #343a40; }
tbody tr:last-child td { border-bottom: none; }
tbody tr:hover { background-color: #f8f9fa; }


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
    max-width: 380px; /* スマホ用にグラフの最大幅を小さくする */
  }
  .party-list {
    text-align: left; /* 左寄せに変更 */
  }
  .party-breakdown-grid {
    justify-content: flex-start; /* 左寄せに変更 */
    grid-template-columns: repeat(auto-fill, 65px); /* 折り返しを有効に */
  }
  .party-list.ruling {
      order: -2;
  }
  .party-list.opposition {
      order: 1;
  }
  .opposition-sub-title {
      text-align: left; /* 左寄せに変更 */
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