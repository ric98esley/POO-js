// Factory pattern y RORO

function requiredParam(param) {
    throw new Error(param = " Es obligatorio")
}

function createStudent({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    facebook,
    instagram,
    learningPath = [],
    approvedCourses = []
} = {}) {
    const private = {
        "_name": name
    }
    const public = {
        age,
        email ,
        learningPath,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        get name(){
            return private["_name"]
        },
        set name(newName) {
            if (newName.length >= 5){
                private["_name"] = newName;
            } else {
                console.warn("Tu nombre de tener al emnos 5 carateres")
            }
        },
    }

    Object.defineProperty(public, "changeName", {
        writable: false,
        configurable: false
    })

    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false
    })
    return public;
}

const ricardo = createStudent({
    name: "ricardo",
    email: "email.com"
});