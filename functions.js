/**
Anonymous Function & IIFE
1.Print odd numbers in an array
*/
//Anonymous Funtion

var printOddNumbers = function(v1)
{
    v1.forEach(function(v2)
    {
        if (v2 % 2 !== 0)
            {
            console.log(v2);
        }
    });
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers(numbers);

//Immediately Invoked Function Expression

(function(arr)
{
    arr.forEach(function(num)
    {
        if (num % 2 !== 0)
            {
            console.log(num);
        }
    });
})
([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
2. Convert all the strings to title caps in a string array
*/
//Anonymous Funtion

const lowerToUpper = function(arr)
{
    const result = [];
    for (let i = 0; i < arr.length; i++)
        {
        const words = arr[i].toLowerCase().split(' ');
        for (let j = 0; j < words.length; j++)
        {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }
        result.push(words.join(' '));
    }
    return result;
};

const strings = ["welcome to guvi", "hello student", "programmer"];
const stringTitleCase = lowerToUpper(strings);
console.log(stringTitleCase);

//Immediately Invoked Function Expression

const textTitleCase = (function(arr)
{
    const result = [];
    for (let i = 0; i < arr.length; i++)
        {
        const words = arr[i].toLowerCase().split(' ');
        for (let j = 0; j < words.length; j++)
            {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }
        result.push(words.join(' '));
    }
    return result;
})(["welcome to guvi", "hello student", "programmer"]);

console.log(textTitleCase);

/**
3. Sum of all numbers in an array
*/
//Anonymous Funtiona

let sumArray = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

//IIFE

(function(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);    


/**
4. Return all the prime numbers in an array
 */
// Anonymous Function

let primeNumbers = function(arr) {
    let isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };
    return arr.filter(isPrime);
};
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// IIFE
(function(arr) {
    let isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };
    let result = arr.filter(isPrime);
    console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
5. Return all the palindromes in an array
*/
// Anonymous Function

let palindromes = function(arr) {
    let isPalindrome = str => str === str.split('').reverse().join('');
    return arr.filter(isPalindrome);
};
console.log(palindromes(["madam", "hello", "racecar", "world"]));

// IIFE
(function(arr) {
    let isPalindrome = str => str === str.split('').reverse().join('');
    let result = arr.filter(isPalindrome);
    console.log(result);
})(["madam", "hello", "racecar", "world"]);

/**
 6. Return median of two sorted arrays of the same size
 */

 // Anonymous Function
let medianOfTwoArrays = function(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    let mid = mergedArray.length / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
};
console.log(medianOfTwoArrays([1, 3, 5], [2, 4, 6]));

// IIFE
(function(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    let mid = mergedArray.length / 2;
    let result = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    console.log(result);
})([1, 3, 5], [2, 4, 6]);

/**
 7. Remove duplicates from an array
 */

 // Anonymous Function
let removeDuplicates = function(arr) {
    return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 3, 2, 4, 1]));

// IIFE
(function(arr) {
    let result = [...new Set(arr)];
    console.log(result);
})([1, 2, 3, 2, 4, 1]);

/**
 8. Rotate an array by k times
 */

 // Anonymous Function
let rotateArray = function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
(function(arr, k) {
    k = k % arr.length;
    let result = arr.slice(k).concat(arr.slice(0, k));
    console.log(result);
})([1, 2, 3, 4, 5], 2);

/**
Arrow functions
*/

//1. Print odd numbers in an array
const oddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
console.log(oddNumbers([1, 2, 3, 4, 5]));

//2. Convert all the strings to title caps in a string array

const toTitleCaps = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log(toTitleCaps(["hello", "world", "guvi"]));

//3. Sum of all numbers in an array

const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);
console.log(sumArray([1, 2, 3, 4, 5]));

//4. Return all the prime numbers in an array

const primeNumbers = (arr) => {
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };
    return arr.filter(isPrime);
};
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//5. Return all the palindromes in an array
const palindromes = (arr) => arr.filter(str => str === str.split('').reverse().join(''));
console.log(palindromes(["madam", "hello", "racecar", "world"]));
