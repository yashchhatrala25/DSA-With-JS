// 1. Convert number to String (toString method)
// 2. Convert string to array (split method)
// 3. Reverse the string (reverse method)
// 4. Convert array back to string (join method)
// 5. Convert string to number (parseInt method)
// 6. Reverse the number 

const reverseNum = num => {
    const reverse = num.toString().split("").reverse().join("")
    return parseInt(reverse) * Math.sign(num);
} 
console.log(reverseNum(1234))