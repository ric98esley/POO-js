class LearningPaths {
//reto crea clases de learning path y crea las escuelas como prototipos de esta
}


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
    twitter: "fjuandc"
});

const miguelito2 = new Student({
    name: "miguelito",
    username: "miguelito",
    email: "miguelito@miguel.com",
    instagram: "miguelon"
})