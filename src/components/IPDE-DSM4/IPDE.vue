<script setup>
import Cuestionario from './Cuestionario.vue';
import Resultados from './Resultados.vue';
import { ref } from 'vue';

const completando = ref(true);
const respuestas = ref([]);

const handleSubmit = (respuestasPersona) => {
  console.log(respuestasPersona);
  respuestas.value = respuestasPersona;
  completando.value = false;
}
</script>

<template>
    <div class="background">
        <div class="wrapper">
            <h1>IPDE Módulo DSM IV</h1>
            <Cuestionario v-if="completando" :handleSubmit="handleSubmit" />
            <Resultados v-else :respuestas="respuestas" />
        </div>
    </div>
</template>

<style scoped>
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