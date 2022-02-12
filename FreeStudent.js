class FreeStudent extends User {
    constructor(prop){
        super(prop);
    }

    approveCourse(newCourse){
        if (newCourse.isFree){
            this.approveCourse.push(newCourse);
        } else {
            console.warn("Lo sentimos," + this.name + " Solo puedes ver cursos gratis")
        }
    }
}