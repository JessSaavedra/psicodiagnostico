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

enum Sexo {
  MASC = 0,
  FEM = 1
}

const sexo = ref(Sexo.FEM);

const handleSubmit = () => {
  const respuestasEnArray = Array.from(respuestas.value, ([id, respuesta]) => ({ id, respuesta }));
  props.handleSubmit(sexo, respuestasEnArray);
}

// document.querySelectorAll('input[type="radio"][value="1"]').forEach(radio => {
//   radio.checked = true;
//   radio.dispatchEvent(new Event('change', { bubbles: true }));
// });


</script>

<template>
  <h1>Cuestionario SCL-90R</h1>
  <h2>Sexo</h2>

  <div class="opciones">
    <div class="radio-wrapper-11">
      
      <label class="radio-wrapper-11">
        Mujer
        <input
          type="radio"
          name="sexo"
          :value="Sexo.FEM"
          v-model="sexo"
        />
        <span class="design"></span>
      </label>

      <label class="radio-wrapper-11">
        Varón
        <input
          type="radio"
          name="sexo"
          :value="Sexo.MASC"
          v-model="sexo"
        />
        <span class="design"></span>
      </label>

    </div>
</div>

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
          <div class="radio-wrapper-11">
            <label v-for="(label, value) in {
              0: 'Nada',
              1: 'Muy poco',
              2: 'Poco',
              3: 'Bastante',
              4: 'Mucho'
            }" :key="value" class="radio-wrapper-11">
              {{ label }}
              <input
                type="radio"
                :name="pregunta.id"
                :value="value"
                :checked="respuestas.get(pregunta.id) === Number(value)"
                @change="respuestas.set(pregunta.id, Number(value))"
              />
              <span class="design"></span>
            </label>
          </div>
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

.opciones > .radio-wrapper-11 {
    display: flex;
    gap: 32px;
}

h2 {
    margin-top: 36px;
}

.ejemplo {
    display: flex;
    gap: 32px;
    margin-top: 16px;

    ol {
        max-width: 300px;
    }
}

.imagenes {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 100px;
    }
}

button {
    background-color: rgba(177, 146, 240, 1);
    border: none;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    color: white;
    cursor: pointer;
    display: inline-block;
    margin-top: 16px;
    outline: none;
    padding: 12px 42px;
    text-decoration: none;
}

label.radio-wrapper-11 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4px;

    margin: 12px 0;

    cursor: pointer;
    position: relative;

    --primary: rgba(245, 149, 199, 1);
    --other: rgba(177, 146, 240, 1) ;
}

label.radio-wrapper-11 input[type="radio"] {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}

label.radio-wrapper-11 .design {
    width: 16px;
    height: 16px;
  
    border: 1px solid var(--other);
    border-radius: 100%;
    margin-right: .9em;
  
    position: relative;
}
  
label.radio-wrapper-11 .design::before,
label.radio-wrapper-11 .design::after {
    content: "";
    display: block;
  
    width: inherit;
    height: inherit;
  
    border-radius: inherit;
  
    position: absolute;
    transform: scale(0);
    transform-origin: center center;
}

label.radio-wrapper-11 .design:before {
    background: var(--other);
    opacity: 0;
    transition: .3s;
}

label.radio-wrapper-11 .design::after {
    background: var(--primary);
    opacity: .4;
    transition: .6s;
}

label.radio-wrapper-11 .text {
    color: var(--other);
    font-weight: bold;
}

label.radio-wrapper-11 input:checked + .design::before {
    opacity: 1;
    transform: scale(.6);
}

label.radio-wrapper-11 input:hover + .design,
label.radio-wrapper-11 input:focus + .design {
    border: 1px solid var(--primary);
}
  
label.radio-wrapper-11 input:hover + .design:before,
label.radio-wrapper-11 input:focus + .design:before {
    background: var(--primary);
}
  
label.radio-wrapper-11 input:hover ~ .text {
    color: var(--primary);
}
  
label.radio-wrapper-11 input:focus + .design::after,
label.radio-wrapper-11 input:active + .design::after {
    opacity: .1;
    transform: scale(2);
}
</style>
