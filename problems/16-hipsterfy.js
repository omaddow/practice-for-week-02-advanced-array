/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    const vowels = 'aeiouAEIOU';
    let wordArray = word.split('');
    
    for (let i = wordArray.length - 1; i >= 0; i--) {
        if (vowels.includes(wordArray[i])) {
            wordArray.splice(i, 1); // Remove the last vowel
            break; // Only remove the last vowel
        }
    }
    
    return wordArray.join(''); // Join the array back into a word
};

let hipsterfy = function(sentence) {
    return sentence.split(' ').map(removeLastVowel).join(' '); // Apply removeLastVowel to each word
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
