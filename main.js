// const natalia = {
//     name: "Natalia",
//     age: 20,
//     cursosAprobados: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Práctivo de HTML y CSS"
//     ],
//     aprobarCurso(nuevoCurso) {
//         this.cursosAprobados.push(nuevoCurso)
//     },
// };

// function Student(name,age,cursosAprobados) {
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados= cursosAprobados;
//     // this.aprobarCurso = function (nuevoCurso){
//     //     this.cursosAprobados.push(nuevoCurso);
//     // };
// }

// Student.prototype.aprobarCurso = function(nuevoCurso){
//     this.cursosAprobados.push(nuevoCurso);
// }

// const juanita = new Student("Juanita Alejandra",15, ["Curso Definitivo de HTML y CSS",
// "Curso Práctivo de HTML y CSS"])


// // Protipos con las sintaxis de clases
// class Student2 {
//     constructor({
//         name,
//         age,
//         email,
//         cursosAprobados = [],
//     })
//     {
//     this.email = email;
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados= cursosAprobados;
//     }
//     aprobarCurso(nuevoCurso){
//         this.cursosAprobados.push(nuevoCurso);
//     }
// }
// const miguelito = new Student2(
//     {
//     name:"Miguel",
//     age: 28,
//     email: "email@email.com"
//     }
// )

const juan1 = {
    name: "JuanDC",
    username: "juanddc",
    points: 100,
    socialMedia : {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourse: [
        "Curso definitivo de HTML y CSS",
        "Curso Praáctico de HTML y CSS",
    ],
    learnigPaths: [
        {
            name: "Escuela de desarrolo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Resposive Design",
            ],
        },
        {
            name: "Escuela de Video Juegos",
            courses: [
                "Curso Introducción a la producción de VGS",
                "Curso de Unreal engine",
                "Curso de unioty 3D",
            ],
        }
    ]
}

const miguelito1 = {
    name: "Miguel",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia : {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined,
    },
    approvedCourse: [
        "Curso DataBussiness",
        "Curso Datviz",
    ],
    learnigPaths: [
        {
            name: "Escuela de desarrolo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Resposive Design",
            ],
        },
        {
            name: "Escuela de data sciencie",
            courses: [
                "Curso DataBussiness",
                "Curso Datviz",
                "Curso Tableau"
            ],
        }
    ]
}