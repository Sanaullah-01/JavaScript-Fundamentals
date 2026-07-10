let youtubeOne = "SanaUllah"

let youtubeTwo = youtubeOne

console.log(youtubeOne);
console.log(youtubeTwo);

youtubeTwo = "SanaUllah Dev"


console.log(youtubeOne);
console.log(youtubeTwo);

let userone = {
    name:"Sunny Ali",
    email: "sunnyali@email.com",
    age: "24"
}

let usertwo = userone

console.table(userone)
console.log("   ")
console.table(usertwo);

usertwo.email = "sunnyali@google.com"

console.log("Email Changed to Google.");

console.table(userone)
console.log("   ")
console.table(usertwo);