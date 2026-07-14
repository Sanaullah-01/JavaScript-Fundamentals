// const myobj = new Object ()

const myobj = {}

myobj.name = "sana ullah",
myobj.id = 123 ,
myobj.age = "23 Y"

// console.log(myobj);


const ob1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4:'d'}

// const obj3 = {ob1, obj2}
const obj3 = Object.assign({}, ob1, obj2);
// console.log(ob1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj3 === ob1);
// console.log(obj3 === obj2);


const course = {
    name: "JavaScript",
    duration: "12 weeks",
    instructor: "John Doe"
}

const { name, duration, instructor } = course;
console.log(course);
console.log(name, duration, instructor);
// console.log(duration);
// console.log(instructor);
