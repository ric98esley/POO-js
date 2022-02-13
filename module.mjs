import { PlatziClass } from "./PLatziClass.js";
import { User } from "./User.mjs";
import { Student } from "./Student.mjs";
import { BasicStudent } from "./BasicStudent.mjs";
import { FreeStudent } from "./FreeStudent.mjs";
import { Course } from "./Course.mjs";
import { LearningPaths } from "./LearningPaths.mjs";

const clase67 = new PlatziClass({
  name: "JavaScript: orientado a objetos, basado en prototipos",
  videoID: "wertyuio;p87htreghtyuioouyjtrh",
});
clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

clase67.reproducir();
clase67.pausar();

const cursoProgBasica = new Course ({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
  classes: clase67
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
const desarrolloWeb = new LearningPaths({
  namePaths: "Escuela de desarrollo Web",
  courses : [
      cursoPracticoHTML,
      cursoProgBasica,
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

console.table(miguelito);
console.table(juan);