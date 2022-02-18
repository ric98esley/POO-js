function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;

    // const private = {
    //   "_name": name,
    //   "_courses": courses,
    // };

    // const public = {
    //   get name() {
    //     return private["_name"];
    //   },
    //   set name(newName) {
    //     if (newName.length != 0) {
    //       private["_name"] = newName;
    //     } else {
    //       console.warn("Tu nombre debe tener al menos 1 caracter");
    //     }
    //   },
    //   get courses() {
    //     return private["_courses"];
    //   },
    // };

    // return public;
}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    if (isArray(learningPaths)) {
        this.learningPaths = [];

        for (learningPathIndex in learningPaths) {
            if (learningPaths[learningPathIndex] instanceof LearningPath) {
                this.learningPaths.push(learningPaths[learningPathIndex]);
            }
        }
    }
}
