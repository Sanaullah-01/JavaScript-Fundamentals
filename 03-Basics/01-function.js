function saymyname(){
    console.log("sana ullah");

}

// saymyname();

function add(a, b){
    return a + b;
}

const result = add(2, 3);
// console.log(result);

function addmultiply(a,b){
    return [a+b, a*b];
}

const [sum, multiply] = addmultiply (2, 3);
// console.log("Sum:", sum, "Multiply:", multiply);

function loginusermessage (username){
    if (username === undefined || username === ""){
        return "Please enter a valid username."
    }
    return `${username} has just logged in to our website.`
}

// (console.log(loginusermessage("sana ullah")))

// (console.log(loginusermessage(" ")))

(console.log(loginusermessage()))