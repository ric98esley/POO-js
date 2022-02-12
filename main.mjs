const desarrolloWeb = new LearningPaths({
    namePaths: "Escuela de desarrollo Web",
    courses : [
        "Curso de Computacion Basica 2019",
        "Curso Gratis de Programación Básica",
        "Curso Básico de Algoritmos y Pensamiento Lógico"
    ]
});

const disenoGrafico = new LearningPaths({
    namePaths : "Escuela de Diseño Gráfico",
    courses : [
        "Audiocurso Glosario de Términis de Diseño",
        "Curso de Técnocas para Desarrollar tu Creatividad"
    ]
});

const cursoProgBasica = new Course ({
    name: "Curso Gratis de Programación Básica",
    isFree: true
})
const cursoDefinitivoHTLM = new Course(
    {
        name: "Curso definitivo de HTML y"
    }
)
const cursoPracticoHTML = new Course(
    {
        name: "Curso Practico de HTML y CSS",
        lang: "english"
    }
)

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@guuan.com",
    twitter: "fjuandc",
    learningPaths : [
        desarrolloWeb
    ]
});

const miguelito = new BasicStudent({
    name: "miguelito",
    username: "miguelito",
    email: "miguelito@miguel.com",
    instagram: "miguelon",
    learningPaths : [
        desarrolloWeb
    ]
})