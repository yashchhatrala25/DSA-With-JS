// My solution
let string = "Hello";
function reverseMyString(string) {
    for (let i = string.length; i >= 0 ; i--) {
        console.log(string[i])
    }
}
reverseMyString(string)


// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)
// Tutorial solution
const reverseTutString = str => str.split("").reverse().join("");
console.log(reverseTutString("Hello"))