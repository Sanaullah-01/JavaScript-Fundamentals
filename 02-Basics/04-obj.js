// const myobj = new Object ()

const myobj = {}

myobj.name = "sana ullah",
myobj.id = 123 ,
myobj.age = "23 Y", 

console.log(myobj);


const ob1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4:'d'}

// const obj3 = {ob1, obj2}
const obj3 = Object.assign(ob1, obj2)
console.log(obj3);
