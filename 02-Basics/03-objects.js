const pay = Symbol("key1")

const userobj = {
    name: "sana ullah",
    age: "23 Years",
    height: "5 feet",
    location: "Islamabad",
    [pay]: "110k",
    "date_joined": "03 july 2026",
    islogin: false ,
    totaldays: ["Monday", "tuesday", "wednesday"],
    email: "sanaullah@gmail.com"
}
Object.freeze(userobj)
userobj.email = "sana@gmail.com"
console.log(userobj);
// console.log(userobj.email);
// console.log(userobj["age"]);
// console.log(userobj[pay]);
// console.log(typeof userobj[pay]);

// console.log(userobj["date_joined"]);
// console.log(typeof userobj["date_joined"]);




// console.log(userobj);
// console.log(typeof userobj);

// const arr1 = [(userobj)]
// console.log(arr1);
// console.log(typeof arr1);
// console.log(typeof userobj);
