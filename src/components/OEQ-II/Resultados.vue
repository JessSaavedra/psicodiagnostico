<script setup>
import categorias from './categorias.ts';
import Grafico from './Grafico.vue';
import { computed } from 'vue';

const props = defineProps(['respuestas']);

const respuestasMap = computed(() => {
    return new Map(props.respuestas.map(r => [r.id, r.respuesta]));
});

const puntajesPorCategoria = computed(() => {
    return categorias.map(categoria => {
    const total = categoria.preguntas.reduce((acum, pregunta) => {
      let valor = respuestasMap.value.get(pregunta.id);

      valor = pregunta.invertido ? 6 - valor : valor + 1;

      return acum + valor
    }, 0)

    return {
      id: categoria.id,
      nombre: categoria.nombre,
      total,
      cociente: total / 10
    }
  })
})
</script>

<template>
    <div>
        <h2>Resultados</h2>
        <div v-for="categoria in puntajesPorCategoria" :key="categoria.id">
            <h3>{{ categoria.nombre }}</h3>
            <p>{{ categoria.total }}</p>
            <p>{{ categoria.cociente }}</p>
        </div>
        <Grafico :totales="puntajesPorCategoria" />
    </div>
</template>

<style scoped>

</style>
