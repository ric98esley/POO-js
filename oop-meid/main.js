
const juan = {
    name: "juan",
    age: 18,
    approvedCourses: ["Curso1"],

    addCourse(newCourse) {
        console.log("this" + this);
        console.log("this.approvedCourses " + this.approvedCourses)
        this.approvedCourses.push(newCourse);
    }
}

// console.log(Object.keys(juan));
// // console.log(Object.getOwnPropertyNames(juan));
// // console.log(Object.entries(juan));


// Object.defineProperty(juan, "navigator", {
//     value: "chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true
// })

// Object.defineProperty(juan, "editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,
//     configurable: true
// })
// Object.defineProperty(juan, "terminal", {
//     value: "WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false
// })
// Object.defineProperty(juan, "pruebaNasa", {
//     value: "ALIENS",
//     enumerable: false,
//     writable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptors(juan));

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    f: [123],
    changeA(){
        this.a = "AAAA"
    }
}
const array = [1,2,3,4,5,6,7,7,8,9,0,1]

const obj2 = {}
for(prop in obj1){
    obj2[prop] = obj1[prop];
}
const obj3 = Object.assign(obj1);

const obj4 = Object.create(obj1);

const stringObject = JSON.stringify(obj1);

const obj5 = JSON.parse(stringObject);

const obj6 = deepCopy(obj1);

const copiaArray = deepCopy(array);