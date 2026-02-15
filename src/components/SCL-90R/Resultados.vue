<script setup>
import { computed } from 'vue';
import Grafico from './Grafico.vue';
import categorias from './categorias.js';

const props = defineProps(['respuestas', 'datos'])

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
  const valores = props.datos[id];
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

    <h2>SOM: SOMATIZACIONES</h2>
    <p>Evalúa la presencia de malestares que la persona percibe relacionados con diferentes disfunciones corporales (cardiovasculares, gastrointestinales, respiratorios).</p>

    <h2>OBS: OBSESIONES Y COMPULSIONES</h2>
    <p>Incluye síntomas que se identifican con el síndrome clínico del mismo nombre:
    Pensamientos, acciones e impulsos que son vivenciados como imposibles de evitar o no
    deseados.</p>

    <h2>SI: SENSITIVIDAD INTERPERSONAL</h2>
    <p>Se focaliza en detectar la presencia de sentimientos de inferioridad e inadecuación, en
    especial cuando la persona se compara con sus semejantes.</p>

    <h2>DEP: DEPRESIÓN</h2>
    <p>Los ítems que integran esta subescala representan una muestra representativa de las
    principales manifestaciones clínicas de una trastorno de tipo depresivo: estado de ánimo
    disfórico, falta de motivación, poca energía vital, sentimientos de desesperanza, ideaciones
    suicidas.</p>

    <h2>ANS: ANSIEDAD</h2>
    <p>Evalúa la presencia de signos generales de ansiedad tales como nerviosismo, tensión,
    ataques de pánico, miedos.</p>

    <h2>HOS: HOSTILIDAD</h2>
    <p>Esta dimensión hace referencia a pensamientos, sentimientos y acciones característicos de la
    presencia de afectos negativos de enojo.</p>

    <h2>FOB: ANSIEDAD FÓBICA</h2>
    <p>Este malestar alude a una respuesta persistente de miedo ( a personas específicas, lugares,
    objetos, situaciones) que es en sí misma irracional y desproporcionada en relación con el
    estímulo que la provoca.</p>

    <h2>PAR: IDEACIÓN PARANOIDE</h2>
    <p>Evalúa comportamientos paranoides fundamentalmente en tanto desórdenes del pensamiento:
pensamiento proyectivo, suspicacia, temor a la pérdida de autonomía.</p>

    <h2>PSIC: PSICOTICISMO</h2>
    <p>Esta dimensión se ha construido con la intensión que represente el constructo en tanto
dimensión contínua de la experiencia humana. Incluye síntomas referidos a estados de
soledad, estilo de vida esquizoide, alucinaciones y control del pensamiento.</p>

    <h2>IGS: Indice de Severidad Global</h2>
    <p>Es un muy buen indicador del nivel actual de la
    severidad del malestar. Combina el número de síntomas reconocidos como presentes con la
    intensidad del malestar percibido.</p>

    <h2>TSP: Total de síntomas positivos</h2>
    <p>Se estima contando el total de ítems que tienen
    una respuesta positiva (mayor que cero). En sujetos de población general, puntuaciones brutas
    iguales o inferiores a 3 en varones e iguales o inferiores a 4 en mujeres son consideradas
    como indicadoras de un intento consciente de mostrarse mejores de lo que realmente están.
    (imagen positiva).
    Puntuaciones brutas superiores a 50 en varones y a 60 en mujeres indican lo contrario:
    tendencia a exagerar sus patologías.
    </p>

    <h2>IMSP: Índice de Malestar Sintomático Positivo</h2>
    <p>Pretende evaluar el estilo de respuesta indicando si la persona tiende a exagerar o a minimizar los malestares que lo aquejan.
    Puntuaciones extremas en este índice también sugieren patrones de respuestas que deben
    analizarse en términos de actitudes de fingimiento. 
    </p>
  </main>
</template>

<style scoped>


</style>
