function saymyname(){
    console.log("sana ullah");

}

saymyname();

function add(a, b){
    return a + b;
}

const result = add(2, 3);
console.log(result);

function addmultiply(a,b){
    return [a+b, a*b];
}

const [sum, multiply] = addmultiply (2, 3);
console.log("Sum:", sum, "Multiply:", multiply);