<script setup>
import { computed } from 'vue'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'vue-chartjs'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
)

const props = defineProps(['totales'])

const chartData = computed(() => ({
  labels: props.totales.map(t => t.nombre),
  datasets: [
    {
      label: 'Intensidad',
      data: props.totales.map(t => t.cociente),
      backgroundColor: props.totales.map(t => {
        if (t.cociente >= 3.5) return 'rgba(255, 99, 132, 0.6)'
        if (t.cociente >= 2.5) return 'rgba(255, 206, 86, 0.6)'
        return 'rgba(75, 192, 192, 0.6)'
      }),
      borderColor: 'rgba(177, 146, 240, 1)',
      borderWidth: 2,
      borderRadius: 8
    }
  ]
}))

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Perfil de Sobreexcitabilidades'
    },
    tooltip: {
      callbacks: {
        label: (ctx) => ` ${ctx.raw.toFixed(2)}`
      }
    }
  },
  scales: {
    y: {
      min: 1,
      max: 5,
      ticks: {
        stepSize: 1
      }
    }
  }
}
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
