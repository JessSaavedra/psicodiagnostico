const preguntas = [
    {
        id: "1",
        pregunta: "Dolores de cabeza."
    },
    {
        id: "2",
        pregunta: "Nerviosismo."
    },
    {
        id: "3",
        pregunta: "Pensamientos desagradables que no se iban de mi cabeza."
    },
    {
        id: "4",
        pregunta: "Sensación de mareo o desmayo."
    },
    {
        id: "5",
        pregunta: "Falta de interés en relaciones sexuales."
    },
    {
        id: "6",
        pregunta: "Criticar a los demás."
    },
    {
        id: "7",
        pregunta: "Sentir que otro puede controlar mis pensamientos."
    },
    {
        id: "8",
        pregunta: "Sentir que otros son culpables de lo que me pasa."
    },
    {
        id: "9",
        pregunta: "Tener dificultad para memorizar cosas."
    },
    {
        id: "10",
        pregunta: "Estar preocupado/a por mi falta de ganas para hacer algo."
    },
    {
        id: "11",
        pregunta: "Sentirme enojado/a, malhumorado/a."
    },
    {
        id: "12",
        pregunta: "Dolores en el pecho."
    },
    {
        id: "13",
        pregunta: "Miedo a los espacios abiertos o las calles."
    },
    {
        id: "14",
        pregunta: "Sentirme con muy pocas energías."
    },
    {
        id: "15",
        pregunta: "Pensar en quitarme la vida."
    },
    {
        id: "16",
        pregunta: "Escuchar voces que otras personas no oyen."
    },
    {
        id: "17",
        pregunta: "Temblores en mi cuerpo."
    },
    {
        id: "18",
        pregunta: "Perder la confianza en la mayoría de las personas."
    },
    {
        id: "19",
        pregunta: "No tener ganas de comer."
    },
    {
        id: "20",
        pregunta: "Llorar por cualquier cosa."
    },
    {
        id: "21",
        pregunta: "Sentirme incómodo/a con personas del otro sexo."
    },
    {
        id: "22",
        pregunta: "Sentirmme atrapada/o o encerrado/a."
    },
    {
        id: "23",
        pregunta: "Asustarme de repente sin razón alguna."
    },
    {
        id: "24",
        pregunta: "Explotar y no poder controlarme."
    },
    {
        id: "25",
        pregunta: "Tener miedo a salir solo/a de mi casa."
    },
    {
        id: "26",
        pregunta: "Sentirme culpable por cosas que ocurren."
    },
    {
        id: "27",
        pregunta: "Dolores en la espalda."
    },
    {
        id: "28",
        pregunta: "No poder terminar las cosas que empecé a hacer."
    },
    {
        id: "29",
        pregunta: "Sentirme solo/a."
    },
    {
        id: "30",
        pregunta: "Sentirme triste."
    },
    {
        id: "31",
        pregunta: "Preocuparme demasiado por todo lo que pasa."
    },
    {
        id: "32",
        pregunta: "No tener interés por nada."
    },
    {
        id: "33",
        pregunta: "Tener miedos."
    },
    {
        id: "34",
        pregunta: "Sentirme herido en mis sentimientos."
    },
    {
        id: "35",
        pregunta: "Creer que la gente sabe qué estoy pensando."
    },
    {
        id: "36",
        pregunta: "Sentir que no me comprenden."
    },
    {
        id: "37",
        pregunta: "Sentir que no caigo bien a la gente, que no les gusto."
    },
    {
        id: "38",
        pregunta: "Tener que hacer las cosas muy despacio para estar seguro/a de que están bien hechas."
    },
    {
        id: "39",
        pregunta: "Mi corazón late muy fuerte, se acelera."
    },
    {
        id: "40",
        pregunta: "Náuseas o dolor de estómago."
    },
    {
        id: "41",
        pregunta: "Sentirme inferior a los demás."
    },
    {
        id: "42",
        pregunta: "Calambres en manos, brazos o piernas."
    },
    {
        id: "43",
        pregunta: "Sentir que me vigilan o que hablan de mí."
    },
    {
        id: "44",
        pregunta: "Tener problemas para dormirme."
    },
    {
        id: "45",
        pregunta: "Tener que controlar una o más veces lo que hago."
    },
    {
        id: "46",
        pregunta: "Tener dificultades para tomar decisiones."
    },
    {
        id: "47",
        pregunta: "Tener miedo de viajar en tren, ómnibus o subterráneos."
    },
    {
        id: "48",
        pregunta: "Tener dificultades para respirar bien."
    },
    {
        id: "49",
        pregunta: "Ataques de frío o de calor."
    },
    {
        id: "50",
        pregunta: "Tener que evitar acercarme a algunos lugares o actividades porque me dan miedo."
    },
    {
        id: "51",
        pregunta: "Sentir que mi mente queda en blanco."
    },
    {
        id: "52",
        pregunta: "Hormigueos en alguna parte del cuerpo."
    },
    {
        id: "53",
        pregunta: "Tener un nudo en la garganta."
    },
    {
        id: "54",
        pregunta: "Perder las esperanzas en el futuro."
    },
    {
        id: "55",
        pregunta: "Dificultades para concentrarme en lo que estoy haciendo."
    },
    {
        id: "56",
        pregunta: "Sentir flojedad, debilidad, en partes de mi cuerpo."
    },
    {
        id: "57",
        pregunta: "Sentirme muy nervioso/a, agitado/a."
    },
    {
        id: "58",
        pregunta: "Sentir mis brazos y piernas muy pesados."
    },
    {
        id: "59",
        pregunta: "Pensar que me estoy por morir."
    },
    {
        id: "60",
        pregunta: "Comer demasiado."
    },
    {
        id: "61",
        pregunta: "Sentirme incómodo/a cuando me miran o hablan de mí."
    },
    {
        id: "62",
        pregunta: "Tener ideas, pensamientos que no son los míos."
    },
    {
        id: "63",
        pregunta: "Necesitar golpear o lastimar a alguien."
    },
    {
        id: "64",
        pregunta: "Despertarme muy temprano por la mañana sin necesidad."
    },
    {
        id: "65",
        pregunta: "Repetir muchas veces algo que hago: contar, lavarme, tocar cosas."
    },
    {
        id: "66",
        pregunta: "Dormir con problemas, muy inquieto/a."
    },
    {
        id: "67",
        pregunta: "Necesitar romper o destrozar cosas."
    },
    {
        id: "68",
        pregunta: "Tener ideas, pensamientos que los demás no entienden."
    },
    {
        id: "69",
        pregunta: "Estar muy pendiente de lo que los demás puedan pensar de mí."
    },
    {
        id: "70",
        pregunta: "Sentirme incómodo/a en lugares donde hay mucha gente."
    },
    {
        id: "71",
        pregunta: "Sentir que todo me cuesta mucho esfuerzo."
    },
    {
        id: "72",
        pregunta: "Tener ataques de mucho miedo o de pánico."
    },
    {
        id: "73",
        pregunta: "Sentirme mal si estoy comiendo o bebiendo en público."
    },
    {
        id: "74",
        pregunta: "Meterme muy seguido en discusiones."
    },
    {
        id: "75",
        pregunta: "Ponerme nervioso/a cuando estoy solo/a."
    },
    {
        id: "76",
        pregunta: "Sentir que los demás no me valoran como merezco."
    },
    {
        id: "77",
        pregunta: "Sentirme solo/a aún estando con gente."
    },
    {
        id: "78",
        pregunta: "Estar inquieto/a; no poder estar sentado/a sin moverme."
    },
    {
        id: "79",
        pregunta: "Sentirme un/a inútil."
    },
    {
        id: "80",
        pregunta: "Sentir que algo malo me va a pasar."
    },
    {
        id: "81",
        pregunta: "Gritar o tirar cosas."
    },
    {
        id: "82",
        pregunta: "Miedo a desmayarme en medio de la gente."
    },
    {
        id: "83",
        pregunta: "Sentir que se aprovechan de mí si los dejo."
    },
    {
        id: "84",
        pregunta: "Pensar cosas sobre el sexo que me molestan."
    },
    {
        id: "85",
        pregunta: "Sentir que debo ser castigado/a por mis pecados."
    },
    {
        id: "86",
        pregunta: "Tener imágenes y pensamientos que me dan miedo."
    },
    {
        id: "87",
        pregunta: "Sentir que algo anda mal en mi cuerpo."
    },
    {
        id: "88",
        pregunta: "Sentirme alejado/a de las demás personas."
    },
    {
        id: "89",
        pregunta: "Sentirme culpable."
    },
    {
        id: "90",
        pregunta: "Pensar que en mi cabeza hay algo que no funciona bien."
    }
]

export default preguntas;
