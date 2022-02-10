const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctivo de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    },
};

function Student(name,age,cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados= cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // };
}

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student("Juanita Alejandra",15, ["Curso Definitivo de HTML y CSS",
"Curso Práctivo de HTML y CSS"])


// Protipos con las sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
    })
    {
    this.email = email;
    this.name = name;
    this.age = age;
    this.cursosAprobados= cursosAprobados;
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}
const miguelito = new Student2(
    {
    name:"Miguel",
    age: 28,
    email: "email@email.com"
    }
)