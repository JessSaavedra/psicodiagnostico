<script setup lang="ts">
import preguntas from './preguntas'
import { ref } from 'vue';

enum Respuesta {
    NADA = 0,
    MUY_POCO = 1,
    POCO = 2,
    BASTANTE = 3,
    MUCHO = 4,
}

const props = defineProps(['handleSubmit']);

const respuestas = ref(new Map());

const handleSubmit = () => {
  const respuestasEnArray = Array.from(respuestas.value, ([id, respuesta]) => ({ id, respuesta }));
  props.handleSubmit(respuestasEnArray);
}

</script>

<template>
  <h1>Cuestionario SCL-90R</h1>
  <p>A continuación le presentamos una lista de problemas que tiene la gente.</p>
  <p>Lea cada uno de ellos y marque su respuesta con una cruz en la casilla
correspondiente, pensando en cómo se sintió, en qué medida ese problema le
ha preocupado o molestado durante la última semana (7 días).</p>
  <p>Tiene cinco (5) posibilidades de respuesta:</p>
  <p><b>NADA - MUY POCO - POCO – BASTANTE – MUCHO.</b></p>
  <p>No hay respuestas buenas o malas: todas sirven. No deje frases sin responder.</p>

  <form>
    <ol>
      <li v-for="pregunta in preguntas" :key="pregunta.id">
        <label :for="pregunta.id">{{ pregunta.pregunta }}</label>
        <div class="opciones">
          <label v-for="(label, value) in {
            0: 'Nada',
            1: 'Muy poco',
            2: 'Poco',
            3: 'Bastante',
            4: 'Mucho'
          }" :key="value">
            {{ label }}
            <input
              type="radio"
              :name="pregunta.id"
              :value="value"
              :checked="respuestas.get(pregunta.id) === Number(value)"
              @change="respuestas.set(pregunta.id, Number(value))"
            />
          </label>
        </div>
      </li>
    </ol>
    <button type="submit" @click="handleSubmit" :disabled="respuestas.size < 90">Resultados</button>
  </form>
</template>

<style scoped>
li {
  margin-bottom: 24px;
}

.opciones {
  display: flex;
  gap: 32px;
}

.opciones label {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
}
</style>
