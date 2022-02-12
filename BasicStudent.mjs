import { Student } from "./Student.mjs";
export class BasicStudent extends Student {
    constructor(prop){
        super(prop);
    }
    approveCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approveCourse.push(newCourse);
        } else {
            console.warn("Lo sentimos," + this.name + " No puedes ver cursos en Ingles")
        }
    }
}