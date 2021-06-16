//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.
function reverseCharacters(input) {
  if (typeof(input) === 'string') {
    return input.split("").reverse().join('');
  } 
  
  if (typeof(input) === 'number') {
    return Number(input.toString().split('').reverse().join(''))
  }
}

function reverseArray(array) {
  out = [];
  for(i = 0; i < array.length; i++) {
    out.unshift(reverseCharacters(array[i]))
  }
  return out;
}

let str = "LaunchCode"
let num = 123
let array = ["potato", "apple", "fig newton"]
console.log(reverseArray(array))


//1) a) Define a 'reverseCharacters' function. Give it one parameter, which will be the string to reverse.
//b) Within the function, split the string into an array, then reverse the array.
//c) Use join to create the reversed string and return that string from the function.
//d) Below the function, define and initialize a variable to hold a string.
//e) Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
//f) Use method chaining to reduce the lines of code within the function.



//2) The 'split' method does not work on numbers, but we want the function to return a number with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string "4321")
//a) Add an if statement to your reverseCharacters function to check the typeof the parameter.
//b - d) If typeof is ‘string’, return the reversed string as before. If typeof is ‘number’, convert the parameter to a string, reverse the characters, then convert it back into a number. Return the reversed number.
//e) Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

//3) Create a new function with one parameter, which is the array we want to change. The function should:
//a) Define and initialize an empty array.
//b) Loop through the old array.
//c) For each element in the old array, call reverseCharacters to flip the characters or digits.
//d) Add the reversed string (or number) to the array defined in part ‘a’.
//e) Return the final, reversed array.
//f) Be sure to print the results from each test case in order to verify your code.



let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];


function createFunPhrase(word) {
  let subWord = '';
  
  if(word.length <= 3) {
    subWord = word.slice(-1)
  } else {
    subWord = word.slice(0, 3)
  }
  return `We put the ${subWord} in ${word}`
}

console.log(createFunPhrase("LaunchCode"))
console.log(createFunPhrase("Fun"))

function calculateArea(length = 2, width = length) { 
  return length * width;
}

console.log(`The area is ${calculateArea(3)} cm^2`)