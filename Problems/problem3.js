// 1. Convert string to array
// 2. Reverse the array
// 3. Convert array back to string 
// 4. Compare strings 
const palindrom = str => str.split("").reverse().join("") === str;
console.log(palindrom("hello"))