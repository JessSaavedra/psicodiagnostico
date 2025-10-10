<script setup>
import preguntas from './preguntas.ts';
import { ref } from 'vue';

const props = defineProps(['handleSubmit']);

const respuestas = ref(new Map());

const handleSubmit = () => {
  props.handleSubmit(respuestas.value);
}
</script>

<template>
    <h2>INSTRUCCIONES</h2>
    <ol>
        <li>
            El propósito de este cuestionario es conocer qué tipo de persona ha sido usted en los
últimos cinco años. 
        </li>
        <li>
            Para contestar seleccione la respuesta deseada. Puede hacer correcciones, cuando sea necesario.
        </li>
        <li>
            Las preguntas siguientes contienen una serie de frases usuales o expresiones que las
personas suelen utilizar para describirse a sí mismas. Sirven para ayudarle a describir sus
sentimientos y actitudes. SEA LO MÁS SINCERO POSIBLE.
        </li>
        <li>
            No se preocupe si algunas cuestiones o frases le parecen extrañas, están incluidas para
describir los diferentes problemas que puede tener la gente.
        </li>
        <li>
            A continuación tiene dos ejemplos para que vea la forma de contestar. SI ESTÁ DE
ACUERDO con una frase o piensa que describe su forma de ser, RELLENE EL ESPACIO correspondiente a la letra "V" (Verdadero). Si por el
contrario la frase no refleja ni caracteriza su forma de ser, RELLENE
EL ESPACIO de la letra "F" (Falso). Así:
            <div class="ejemplo">
                <ol>
                    <li>"Soy un ser humano"</li>
                    <p>Como esta frase es verdadera para Vd. se ha rellenado el espacio de la letra V (Verdadero)</p>
                    <li>"Mido más de tres metros"</li>
                    <p>Esta frase es falsa para Vd. por lo que se ha rellenado el espacio de la letra F (Falso)</p>
                </ol>
                <div class="imagenes">
                    <img src="./ejemplo-verdadero.png" />
                    <img src="./ejemplo-falso.png" />
                </div>
            </div>
            
        </li>
        <li>
            Procure responder a todas las frases aunque no esté totalmente seguro. Es mejor
contestar a todas pero si no es capaz de decidirse, debe rellenar el espacio de la letra F
(Falso).
        </li>
    </ol>

    <h2>CUESTIONARIO</h2>
    <ol>
        <li v-for="pregunta in preguntas" :key="pregunta.id">
            <label :for="pregunta.id">{{ pregunta.texto }}</label>
            <div class="opciones">
                <div class="radio-wrapper-11">
                    <label :key="true" class="radio-wrapper-11">
                    V
                    <input
                    type="radio"
                    :name="pregunta.id"
                    :value="true"
                    @change="respuestas.set(pregunta.id, true)"
                    />
                    <span class="design"></span>
                    </label>
                </div>
               
                <div class="radio-wrapper-11">
                    <label :key="false" class="radio-wrapper-11">
                    F
                    <input
                    type="radio"
                    :name="pregunta.id"
                    :value="false"
                    @change="respuestas.set(pregunta.id, false)"
                    />
                    <span class="design"></span>
                    </label>
                </div>
            </div>
        </li>
    </ol>
    <button type="submit" @click="handleSubmit" :disabled="respuestas.size < 77">Resultados</button>
</template>

<style scoped>
li {
    margin-bottom: 16px;
}

.opciones {
    display: flex;
    gap: 8px;
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
