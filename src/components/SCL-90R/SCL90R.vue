<script setup>
import Cuestionario from './Cuestionario.vue';
import Resultados from './Resultados.vue';
import { ref } from 'vue';
import datosAdultosFem from './norma-adultos-fem.ts'
import datosAdultosMasc from './norma-adultos-masc.ts'


const completando = ref(true);
const respuestas = ref([]);
const datos = ref(null);

const handleSubmit = (sexo, respuestasPersona) => {
  respuestas.value = respuestasPersona;
  datos.value = sexo.value === 1 ? datosAdultosFem : datosAdultosMasc;
  completando.value = false;
}
</script>

<template>
  <main>
    <div class="background">
      <div class="wrapper">
        <Cuestionario v-if="completando" :handleSubmit="handleSubmit" />
        <Resultados v-else :respuestas="respuestas" :datos="datos" />
      </div>
    </div>
  </main>
</template>

<style>
.background {
    --gradiente: linear-gradient(133deg,rgba(167, 242, 221, 1) 0%, rgba(177, 146, 240, 1) 50%, rgba(245, 149, 199, 1) 100%);

    background: var(--gradiente);
    box-sizing: border-box;
    color: #25086c;
    height: 100vh;
    padding: 32px;
}

.wrapper {
    background-color: white;
    border-radius: 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    box-sizing: border-box;
    height: calc(100vh - 64px);
    max-width: 900px;
    margin: 0 auto;
    overflow: auto;
    padding: 32px;
}
</style>