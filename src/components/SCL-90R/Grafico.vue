<script setup>
import { computed } from 'vue';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

import { Line } from 'vue-chartjs';

const props = defineProps(['totales']);

const chartData = computed(() => {
  return {
    labels: props.totales.map((total) => total.id),
    datasets: [
      {
        label: "Valor",
        data: props.totales.map((total) => total.tNormalizado),
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Valor de referencia",
        data: props.totales.map(() => 63),
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        borderDash: [6, 6],
      }
    ]
  }
})

const valoresT = [30, 35, 40, 45, 50, 55, 60, 63, 65, 70, 75, 80];

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Perfil SCL-90R',
    },
  },
  scales: {
    y: {
      min: 30,
      max: 80,
      afterBuildTicks: (axis) => {
        axis.ticks = valoresT.map(v => ({ value: v }));
      },
    },
  },
}

</script>

<template>
    <Line :data="chartData" :options="chartOptions" />
</template>
