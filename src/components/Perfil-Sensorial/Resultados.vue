<script setup>
import { computed } from 'vue';
import categorias from './categorias.js';

const props = defineProps(['respuestas', 'datos'])

const CLASIFICACIONES = [
  {
    id: 'MUCHO_MENOS',
    label: 'Mucho menos que la mayoría de las personas',
    simbolo: '--'
  },
  {
    id: 'MENOS',
    label: 'Menos que la mayoría de las personas',
    simbolo: '-'
  },
  {
    id: 'NORMAL',
    label: 'Similar a la mayoría de las personas',
    simbolo: '='
  },
  {
    id: 'MAS',
    label: 'Más que la mayoría de las personas',
    simbolo: '+'
  },
  {
    id: 'MUCHO_MAS',
    label: 'Mucho más que la mayoría de las personas',
    simbolo: '++'
  }
]

const RANGOS = {
  BAJO_REGISTRO: [
    { min: 15, max: 18, clasificacion: 'MUCHO_MENOS' },
    { min: 19, max: 23, clasificacion: 'MENOS' },
    { min: 24, max: 35, clasificacion: 'NORMAL' },
    { min: 36, max: 44, clasificacion: 'MAS' },
    { min: 45, max: 75, clasificacion: 'MUCHO_MAS' }
  ],

  BUSQUEDA_SENSORIAL: [
    { min: 15, max: 35, clasificacion: 'MUCHO_MENOS' },
    { min: 36, max: 42, clasificacion: 'MENOS' },
    { min: 43, max: 56, clasificacion: 'NORMAL' },
    { min: 57, max: 62, clasificacion: 'MAS' },
    { min: 63, max: 75, clasificacion: 'MUCHO_MAS' }
  ],

  SENSIBILIDAD_SENSORIAL: [
    { min: 15, max: 18, clasificacion: 'MUCHO_MENOS' },
    { min: 19, max: 25, clasificacion: 'MENOS' },
    { min: 26, max: 41, clasificacion: 'NORMAL' },
    { min: 42, max: 48, clasificacion: 'MAS' },
    { min: 49, max: 75, clasificacion: 'MUCHO_MAS' }
  ],

  EVITACION_SENSORIAL: [
    { min: 15, max: 19, clasificacion: 'MUCHO_MENOS' },
    { min: 20, max: 26, clasificacion: 'MENOS' },
    { min: 27, max: 41, clasificacion: 'NORMAL' },
    { min: 42, max: 49, clasificacion: 'MAS' },
    { min: 50, max: 75, clasificacion: 'MUCHO_MAS' }
  ]
}

const clasificar = (categoriaId, total) => {
  const rango = RANGOS[categoriaId].find(
    r => total >= r.min && total <= r.max
  )

  return rango.clasificacion
}

const totales = computed(() => {
  return categorias.map((categoria) => {
    const respuestas = categoria.preguntas.map((pregunta) => props.respuestas.find((res) => res.id === pregunta).respuesta)
    const total = respuestas.reduce((acc, pregunta) => acc + pregunta, 0)
    return {
      id: categoria.id,
      nombre: categoria.nombre,
      total,
      clasificacion: clasificar(categoria.id, total),
    }
  })
})

</script>

<template>
  <main>
    <h1>Resultados Perfil Sensorial</h1>

    <table>
      <thead>
        <tr>
            <th>Cuadrante</th>
            <th>Puntaje Bruto Total Cuadrante</th>
            <th
                v-for="clasificacion in CLASIFICACIONES"
                :key="clasificacion.id"
            >
                <div>{{ clasificacion.label }}</div>
                <div class="simbolo">
                {{ clasificacion.simbolo }}
                </div>
            </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="total in totales"
          :key="total.id"
        >
          <td>
            {{ total.nombre }}
          </td>

          <td>
            {{ total.total }}/75
          </td>

          <td
            v-for="rango in RANGOS[total.id]"
            :key="rango.clasificacion"
            class="celda"
            :class="{
              activa: total.clasificacion === rango.clasificacion
            }"
          >
            <div>
              {{ rango.min }} ----- {{ rango.max }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Bajo registro (Alto umbral + Autorregulación pasiva):</h2>
    <p>La persona necesita estímulos más intensos o repetidos para notar lo que sucede a su alrededor. Parecen desconectados o inactivos.</p>

    <h2>Búsqueda sensorial (Alto umbral + Autorregulación activa):</h2>
    <p>La persona busca activamente estímulos intensos. Se aburren fácilmente si no hay estimulación.</p>

    <h2>Sensibilidad sensorial (Bajo umbral + Autorregulación pasiva):</h2>
    <p>La persona detecta estímulos con mayor facilidad que otros, pero no los evita activamente, resultando a menudo en distracción o molestia.</p>

    <h2>Evitación sensorial (Bajo umbral + Autorregulación activa):</h2>
    <p>La persona se siente abrumada y toma acciones para evitar o reducir estímulos incómodos.</p>


  </main>
</template>

<style scoped>
.celda {
    text-align: center;
}

.celda.activa {
  background-color: rgba(177, 146, 239, 0.4);
}

table, th, td {
  border: 1px solid;
  border-collapse: collapse;
}

.simbolo {
    font-size: 32px;
}

h2 {
    margin-bottom: 8px;
    margin-top: 30px;
}

h2 + p {
    margin-top: 0;
}

h2:first-of-type {
    margin-top: 42px;
}

th, td {
    padding: 6px;
}

th, td:first-child {
    background-color: #a8e7df7d;
}

td:first-child {
  font-weight: bold;
}

td:not(:first-child) {
  text-align: center;
}
</style>
