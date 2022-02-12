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