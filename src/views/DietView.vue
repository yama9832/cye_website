<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="diet-container">
      <header class="page-header">
        <h1>帝国議会</h1>
        <p class="last-updated">更新日: 2024年10月28日</p>
      </header>

      <p class="section-description">
        やんまー帝国連邦の立法府である帝国議会は、「国権の最高機関」として位置づけられています。帝国議会は国民を代表する選挙された議員で構成される上院と下院の二院制を採用しており、法律の制定、予算の議決、内閣総理大臣の指名など、国政の根幹に関わる重要な役割を担っています。
        上院議員は山摩市議会から24名、各市議会から4名ずつ選ばれます。その際、上院議員は市議会議員の役職を失います。下院議員は直接選挙で選ばれます。
        なお、与党が政権を維持するために必要な過半数の議席は、国王指定議席として公職選挙法により確保されています。そのため、政権交代には公職選挙法の改正、または国王による指定議席の変更が不可欠です。
      </p>

      <!-- 上院構成表 -->
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

      <!-- 下院構成表 -->
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

      <!-- 議員構成図 -->
      <section class="chamber-section">
        <h2 class="section-title">議員構成図</h2>
        <div class="charts-layout">
          <div class="chart-container">
            <h3>上院</h3>
            <img src="@/assets/jouin.webp" alt="帝国議会 上院 議員構成">
          </div>
          <div class="chart-container">
            <h3>下院</h3>
            <img src="@/assets/kain.webp" alt="帝国議会 下院 議員構成">
          </div>
        </div>
      </section>

    </div>
  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'DietView',
  components: {
    AppBreadcrumb
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
  margin-top: -1rem; /* Adjust to bring it closer to the header */
  margin-bottom: 3rem;
}

.chamber-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: #008037;
  margin: 0 0 2rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e9ecef;
}

/* Charts Layout */
.charts-layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.chart-container {
  flex: 1;
  min-width: 300px;
}

.chart-container h3 {
    text-align: center;
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    color: #343a40;
}

.chart-container img {
  width: 100%;
  border-radius: 8px;
  background-color: #ffffff;
  border: 2px dashed #ced4da; /* 枠線を点線に変更 */
  padding: 1rem; /* 画像と枠線の間に余白を追加 */
  box-sizing: border-box; /* paddingをwidth/heightに含める */
}

/* Table Layout */
.table-container {
  width: 100%;
}

.table-caption {
    text-align: right;
    color: #6c757d;
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
}

.table-wrapper {
    overflow-x: auto;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    /* box-shadow: 0 4px 15px rgba(0,0,0,0.05); */ /* 影を削除 */
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  white-space: nowrap;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}
td:nth-child(4), th:nth-child(4) {
    text-align: right;
}

thead th {
  background-color: #f8f9fa;
  font-weight: 700;
  color: #343a40;
}

tbody tr:last-child td {
    border-bottom: none;
}

tbody tr:hover {
    background-color: #f8f9fa;
}


/* レスポンシブ対応 */
@media (max-width: 992px) {

  .charts-layout {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
