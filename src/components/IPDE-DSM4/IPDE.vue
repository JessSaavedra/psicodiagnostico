<script setup>
import categorias from './categorias.ts';
import respuestas from './respuestas-jess.ts';
import { computed } from 'vue';

const puntajesPorCategoria = computed(() => {
  return categorias.map(categoria => {
    const total = categoria.puntos.reduce((acum, punto) => {
      const respuestaUsuario = respuestas[punto.id]
      const respuestaEsperada = punto.respuesta
      if (respuestaUsuario === respuestaEsperada) {
        acum += 1
      }
      return acum
    }, 0)

    return {
      nombre: categoria.nombre,
      total
    }
  })
})

</script>

<template>
    <h1>IPDE</h1>
    <div v-for="puntajePorCategoria in puntajesPorCategoria">
        <h2>{{ puntajePorCategoria.nombre }}</h2>
        <p>{{ puntajePorCategoria.total }}</p>
    </div>
</template>