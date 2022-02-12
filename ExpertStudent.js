class ExpertStudent extends User {
    constructor(prop){
        super(prop);
    }
    approveCourse(newCourse){
        this.approveCourse.push(newCourse);
    }
}