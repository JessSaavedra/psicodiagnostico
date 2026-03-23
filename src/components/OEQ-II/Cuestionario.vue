<script setup lang="ts">
    import preguntas from './preguntas'
    import { ref } from 'vue';

    enum Respuesta {
        NO = 0,
        NO_MUCHO = 1,
        ALGO = 2,
        BASTANTE = 3,
        MUCHISIMO = 4,
    }

    const props = defineProps(['handleSubmit']);

    const respuestas = ref(new Map());

    const handleSubmit = () => {
        const respuestasEnArray = Array.from(respuestas.value, ([id, respuesta]) => ({ id, respuesta }));
        props.handleSubmit(respuestasEnArray);
    }
</script>

<template>
    <p>Marcar la opción que más te identifique.</p>

    <form>
        <ol>
            <li v-for="pregunta in preguntas" :key="pregunta.id">
                <label :for="pregunta.id">{{ pregunta.texto }}</label>
                <div class="opciones">
                <div class="radio-wrapper-11">
                    <label v-for="(label, value) in {
                    0: 'No',
                    1: 'No mucho',
                    2: 'Algo',
                    3: 'Bastante',
                    4: 'Muchísimo'
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
        <button type="submit" @click="handleSubmit" :disabled="respuestas.size < 50">Resultados</button>
    </form>
</template>

<style scoped>

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