<script setup>
import Cuestionario from './Cuestionario.vue';
import Resultados from './Resultados.vue';
import { ref } from 'vue';

const completando = ref(true);
const respuestas = ref([]);

const handleSubmit = (respuestasPersona) => {
  respuestas.value = respuestasPersona;
  completando.value = false;
}
</script>

<template>
  <main>
    <Cuestionario v-if="completando" :handleSubmit="handleSubmit" />
    <Resultados v-else :respuestas="respuestas" />
  </main>
</template>
