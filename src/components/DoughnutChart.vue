<template>
  <Doughnut :data="data" :options="options" :plugins="plugins" />
</template>

<script>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'vue-chartjs';

// Chart.jsに必要な要素とデータラベルプラグインを登録します
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90,
        circumference: 180,
        cutout: '70%',
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
        }
      })
    },
    // プラグインをプロパティとして渡せるようにする
    plugins: {
        type: Array,
        default: () => []
    }
  }
}
</script>