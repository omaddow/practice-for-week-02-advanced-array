/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    let vowels = 'aeiouAEIOU';
    let vowelSet = new Set();
    
    // Convert the string to an array of characters and use forEach to iterate
    string.split('').forEach(char => {
        if (vowels.includes(char)) {
            vowelSet.add(char.toLowerCase());  // Add the vowel to the Set (to handle case insensitivity)
        }
    });
    
    // Return true if there are 3 or more distinct vowels
    return vowelSet.size >= 3;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
