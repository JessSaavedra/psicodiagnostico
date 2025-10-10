<script setup>
import categorias from './categorias.ts';
import { computed } from 'vue';

const props = defineProps(['respuestas']);

const puntajesPorCategoria = computed(() => {
  return categorias.map(categoria => {
    const total = categoria.puntos.reduce((acum, punto) => {
      const respuestaUsuario = props.respuestas.get(punto.id)
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

const grupos = [
    {
        nombre: 'Grupo A',
        nombreDescriptivo: 'Esquizoide o excéntrico',
        categorias: ["Paranoide", "Esquizoide", "Esquizotípico"],
        descripcion: "Incluye patrones marcados por aislamiento social, desconfianza y formas inusuales de pensamiento o percepción."
    },
    {
        nombre: 'Grupo B',
        nombreDescriptivo: 'Emocional o impulsivo',
        categorias: ["Antisocial", "Límite", "Histriónico", "Narcisista"],
        descripcion: "Agrupa personalidades con alta expresividad afectiva, impulsividad y búsqueda de reconocimiento o estimulación."
    },
    {
        nombre: 'Grupo C',
        nombreDescriptivo: 'Ansioso o inhibido',
        categorias: ["Evitación", "Dependencia", "Obsesivo Compulsivo"],
        descripcion: "Comprende rasgos caracterizados por inseguridad, evitación, dependencia y necesidad de control o aprobación."
    },
];
</script>

<template>
    <div>
        <h3>Perfil de trastornos de personalidad</h3>
        <div class="grupos">
            <div v-for="grupo in grupos">
                <h4>{{ grupo.nombre }} - {{ grupo.nombreDescriptivo }}</h4>
                <p>{{ grupo.descripcion }}</p>
                <div v-for="categoria in grupo.categorias" :class="['categoria', { 'highlighted': puntajesPorCategoria.find(puntaje => puntaje.nombre === categoria).total >= 3 }]">
                    <h5>{{ categoria }}: {{ puntajesPorCategoria.find(puntaje => puntaje.nombre === categoria).total }}</h5>
                    <p>{{ categorias.find(categoriaCompleta => categoriaCompleta.nombre === categoria).descripcion }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grupos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.categoria h5 {
    margin: 0;
}

.categoria {
    border: 1px solid rgba(226, 223, 225, 0.8);
    border-radius: 8px;
    margin: 16px 0;
    padding: 16px;
}

.categoria.highlighted {
    background-color: rgba(245, 149, 199, 0.3);
    border-color: rgba(245, 149, 199, 0.3);
}
</style>
