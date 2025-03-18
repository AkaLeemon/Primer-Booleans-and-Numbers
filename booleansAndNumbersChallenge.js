// 🚀 Booleans & Numbers Challenge

// 📌 Task 1: Create a boolean variable called `isJavaScriptFun` and set it to true
// 📌 Task 2: Declare two number variables `num1` and `num2`, assign them any values
// 📌 Task 3: Create a variable `sum` that stores the sum of `num1` and `num2`
// 📌 Task 4: Create a boolean `isGreater` that checks if `num1` is greater than `num2`
// 📌 Task 5: Write a function `multiplyNumbers(a, b)` that returns the product of two numbers

// 👇 Write your code below:

console.log("Hello World")
console.log("Type 'node booleansAndNumbersChallenge.js' in the terminal to read your console logs")
console.log("To run test run 'npm run test' in your terminal")

const isJavaScriptFun = true

const num1 = 0
const num2 = 1

const sum = num1 + num2
// console.log(sum)

const isGreater = Math.max(num1 + num2)
// console.log(isGreater)

const whichIsGreater = num1 >= num2

// console.log(whichIsGreater)


//syntax

function nameOfFunction(){
    return 1 + 1
}

function plusFunciton(a, b){
    return a + b
}

console.log(nameOfFunction())
console.log(plusFunciton(15, 20))
console.log(plusFunciton("Hello", " World"))
console.log(plusFunciton(15, "babies"))

function multiplyNumbers(a, b){
    return a * b
}

console.log(multiplyNumbers(num1, num2))