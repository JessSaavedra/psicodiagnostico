<script setup>
import { computed } from 'vue';
import datos from './norma-adultos-masc.ts'
import Grafico from './Grafico.vue';
import categorias from './categorias.js';

const props = defineProps(['respuestas'])

const totalesPorCategoria = computed(() => {
  return categorias.map((categoria) => {
    const respuestas = categoria.preguntas.map((pregunta) => props.respuestas.find((res) => res.id === pregunta).respuesta)
    const total = respuestas.reduce((acc, pregunta) => acc + pregunta, 0)
    return {
      id: categoria.id,
      nombre: categoria.nombre,
      total,
      promedio: total / categoria.preguntas.length
    }
  })
})

const sumaTotalCategorias = computed(() => {
  return totalesPorCategoria.value.reduce((acc, categoria) => acc + categoria.total, 0)
})

const igs = computed(() => {
  return sumaTotalCategorias.value / 90
})

const tsp = computed(() => {
  return props.respuestas.filter((pregunta) => pregunta.respuesta > 0).length
})

const imsp = computed(() => {
  return sumaTotalCategorias.value / tsp.value
})

const getTNormalizado = (id, valor) => {
  const valores = datos[id];
  const i = valores.findIndex(v => v.value >= valor);

  if (i === -1) return valores.at(-1).T;
  if (i === 0) return valores[0].T;

  const [prev, curr] = valores.slice(i - 1, i + 1);
  return Math.abs(prev.value - valor) <= Math.abs(curr.value - valor)
    ? prev.T
    : curr.T;
}

const totales = computed(() => {
  const totalesSinItemsAdicionales = totalesPorCategoria.value.slice(0, totalesPorCategoria.value.length - 1);
  const subtotalesCategorias = totalesSinItemsAdicionales.map((categoria) => {
    return {
      id: categoria.id,
      valor: categoria.promedio,
      tNormalizado: getTNormalizado(categoria.id, categoria.promedio)
    }
  })
  return [
    ...subtotalesCategorias,
    {
      id: "IGS",
      valor: igs.value,
      tNormalizado: getTNormalizado("IGS", igs.value)
    },
    {
      id: "TSP",
      valor: tsp.value,
      tNormalizado: getTNormalizado("TSP", tsp.value)
    },
    {
      id: "IMSP",
      valor: imsp.value,
      tNormalizado: getTNormalizado("IMSP", imsp.value)
    }
  ]
})

const formatearNumero = (numero) => {
  return numero.toFixed(2);
}

</script>

<template>
  <main>
    <h1>Resultados SCL-90R</h1>

    <table>
      <thead>
        <tr>
          <th v-for="total in totales" :key="total.id">{{ total.id }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="total in totales" :key="total.id">{{ formatearNumero(total.valor) }}</td>
        </tr>
        <tr>
          <td v-for="total in totales" :key="total.id">{{ total.tNormalizado }}</td>
        </tr>
      </tbody>
    </table>

    <Grafico :totales="totales" />

  </main>
</template>

<style scoped>


</style>
