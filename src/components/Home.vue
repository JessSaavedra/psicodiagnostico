<script setup>
const tests = [
    {
        nombre: "IPDE Módulo DSM IV",
        href: "IPDE",
        descripcion: "El objetivo del cuestionario IPDE Módulo DSM-IV es evaluar los rasgos de personalidad de una persona para determinar si existe una alta probabilidad de presentar uno o varios trastornos de personalidad, según los criterios del DSM-IV.\n\n Este instrumento sirve como una herramienta de cribado (screening) para identificar a las personas que podrían necesitar un diagnóstico psiquiátrico posterior."
    },
    {
        nombre: "SCL-90R",
        href: "SCL-90R",
        descripcion: "El objetivo del SCL-90R (Cuestionario de 90 Síntomas-Revisado) es evaluar una amplia gama de síntomas psicológicos y psicopatológicos en adultos y adolescentes para medir su intensidad.\n\nFue diseñado para ser utilizado por profesionales de la salud mental en la evaluación inicial de pacientes, para medir el progreso durante un tratamiento, y para la investigación clínica, incluyendo estudios de ensayos clínicos para medir cambios en síntomas como depresión y ansiedad."
    }
]
</script>

<template>
    <div class="background">
        <div class="section">
            <h1>Holis :)</h1>

            <div class="cards">
                <div class="card" v-for="test in tests" :key="test.nombre">
                    <h2>{{ test.nombre }}</h2>
                    <p>{{ test.descripcion }}</p>
                    <a :href="test.href" class="link">Comenzar</a>
                </div>
            </div>
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

.section {
    border-radius: 16px;
    padding: 16px;
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    top: -16px;
}

.link {
    background-color: rgba(177, 146, 240, 1);
    border-radius: 16px;
    color: white;
    display: inline-block;
    margin-top: auto;
    padding: 8px 32px;
    text-decoration: none;
}

.cards {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(3, 1fr);
}

.card {
    align-items: flex-start;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: #25086c;
    display: flex;
    flex-direction: column;
    padding: 16px;
    text-align: left;
    white-space: pre-line;

    p {
        margin: 0 0 24px;
    }
}
</style>