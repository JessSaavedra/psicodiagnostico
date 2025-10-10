const categorias = [
    {
        nombre: "Paranoide",
        descripcion: "Patrón caracterizado por desconfianza y suspicacia generalizada hacia los demás, interpretando sus motivos como malintencionados o amenazantes.",
        puntos: [
            { id: "2", respuesta: false },
            { id: "14", respuesta: false },
            { id: "36", respuesta: true },
            { id: "38", respuesta: true },
            { id: "58", respuesta: true },
            { id: "66", respuesta: true },
            { id: "72", respuesta: true },
        ]
    },
    {
        nombre: "Esquizoide",
        descripcion: "Patrón de desapego en las relaciones sociales y restricción en la expresión emocional. Predomina la distancia afectiva y la preferencia por actividades solitarias.",
        puntos: [
            { id: "1", respuesta: false },
            { id: "12", respuesta: true },
            { id: "21", respuesta: false },
            { id: "31", respuesta: true },
            { id: "46", respuesta: true },
            { id: "57", respuesta: false },
            { id: "77", respuesta: false },
        ]
    },
    {
        nombre: "Esquizotípico",
        descripcion: "Patrón de malestar intenso en relaciones cercanas, distorsiones cognitivas o perceptivas y comportamientos excéntricos. Puede incluir pensamiento mágico o creencias inusuales.",
        puntos: [
            { id: "2", respuesta: false },
            { id: "24", respuesta: true },
            { id: "30", respuesta: true },
            { id: "52", respuesta: true },
            { id: "64", respuesta: true },
            { id: "67", respuesta: true },
            { id: "70", respuesta: false },
            { id: "71", respuesta: false },
            { id: "77", respuesta: false },
        ]
    },
    {
        nombre: "Histriónico",
        descripcion: "Patrón de emotividad excesiva y búsqueda de atención. Se caracteriza por dramatización, necesidad de aprobación y expresividad afectiva intensa.",
        puntos: [
            { id: "5", respuesta: true },
            { id: "10", respuesta: true },
            { id: "17", respuesta: true },
            { id: "26", respuesta: true },
            { id: "28", respuesta: true },
            { id: "35", respuesta: false },
            { id: "44", respuesta: true },
            { id: "45", respuesta: true },
        ]
    },
    {
        nombre: "Antisocial",
        descripcion: "Patrón persistente de desprecio y violación de los derechos de los demás, impulsividad y dificultad para ajustarse a normas sociales.",
        puntos: [
            { id: "11", respuesta: false },
            { id: "18", respuesta: false },
            { id: "20", respuesta: true },
            { id: "29", respuesta: true },
            { id: "47", respuesta: true },
            { id: "56", respuesta: true },
            { id: "74", respuesta: true },
        ]
    },
    {
        nombre: "Narcisista",
        descripcion: "Patrón de grandiosidad, necesidad de admiración y falta de empatía, con una autoevaluación que puede fluctuar entre la omnipotencia y la fragilidad.",
        puntos: [
            { id: "7", respuesta: false },
            { id: "9", respuesta: true },
            { id: "15", respuesta: true },
            { id: "22", respuesta: true },
            { id: "37", respuesta: true },
            { id: "55", respuesta: true },
            { id: "61", respuesta: true },
            { id: "65", respuesta: true },
            { id: "68", respuesta: true },
        ]
    },
    {
        nombre: "Límite",
        descripcion: "Patrón de inestabilidad en las relaciones interpersonales, la autoimagen y el afecto, con impulsividad marcada y temor al abandono.",
        puntos: [
            { id: "4", respuesta: true },
            { id: "8", respuesta: true },
            { id: "13", respuesta: true },
            { id: "25", respuesta: false },
            { id: "40", respuesta: true },
            { id: "43", respuesta: true },
            { id: "53", respuesta: true },
            { id: "60", respuesta: true },
            { id: "75", respuesta: true },
        ]
    },
    {
        nombre: "Obsesivo Compulsivo",
        descripcion: "Patrón de preocupación por el orden, el perfeccionismo y el control mental e interpersonal, que puede interferir con la flexibilidad y la eficiencia.",
        puntos: [
            { id: "3", respuesta: false },
            { id: "19", respuesta: true },
            { id: "23", respuesta: true },
            { id: "32", respuesta: true },
            { id: "41", respuesta: true },
            { id: "48", respuesta: true },
            { id: "54", respuesta: true },
            { id: "59", respuesta: true },
        ]
    },
    {
        nombre: "Dependencia",
        descripcion: "Patrón de necesidad excesiva de ser cuidado, sumisión y miedo a la separación. Se manifiesta en dificultad para tomar decisiones sin apoyo o guía",
        puntos: [
            { id: "6", respuesta: true },
            { id: "33", respuesta: true },
            { id: "42", respuesta: true },
            { id: "49", respuesta: true },
            { id: "50", respuesta: true },
            { id: "62", respuesta: true },
            { id: "69", respuesta: false },
            { id: "73", respuesta: true },
        ]
    },
    {
        nombre: "Evitación",
        descripcion: "Patrón de inhibición social, sentimientos de ineptitud y sensibilidad extrema a la evaluación negativa. Se evita la exposición por miedo al rechazo o a la humillación.",
        puntos: [
            { id: "16", respuesta: true },
            { id: "27", respuesta: true },
            { id: "34", respuesta: true },
            { id: "38", respuesta: true },
            { id: "39", respuesta: true },
            { id: "51", respuesta: true },
            { id: "63", respuesta: true },
            { id: "76", respuesta: true },
        ]
    }
]

export default categorias;
