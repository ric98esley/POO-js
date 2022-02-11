class Course {
    constructor ({
        name,
        classes = []
    })
    {
        this.name = name;
        this.classes = classes;
    }
}
class LearningPaths {
    constructor({
        namePaths,
        courses = []
    })
    {
        this.namePaths = namePaths;
        this.courses = courses;
    }

    addCourse(newCourse){
        this.courses.push(newCourse)
    }
};

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
})
const cursoDefinitivoHTLM = new Course(
    {
        name: "Curso definitivo de HTML y CSS"
    }
)


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    })
    {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia ={
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
}
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@guuan.com",
    twitter: "fjuandc",
    learningPaths : [
        desarrolloWeb
    ]
});

const miguelito2 = new Student({
    name: "miguelito",
    username: "miguelito",
    email: "miguelito@miguel.com",
    instagram: "miguelon",
    learningPaths : [
        desarrolloWeb
    ]
})