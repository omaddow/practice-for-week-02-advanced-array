/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let translateWord = function(word) {
    const vowels = 'aeiouAEIOU';

    // If word is shorter than 3 characters, return as is
    if (word.length < 3) {
        return word;
    }

    // Check if the word ends with a vowel
    if (vowels.includes(word[word.length - 1].toLowerCase())) {
        return word + word; // Repeat the word if it ends with a vowel
    } else {
        // Find the last vowel in the word and repeat the part after it
        let lastVowelIndex = -1;

        // Loop backwards to find the last vowel
        for (let i = word.length - 1; i >= 0; i--) {
            if (vowels.includes(word[i].toLowerCase())) {
                lastVowelIndex = i;
                break;
            }
        }

        // Repeat the part of the word after the last vowel
        if (lastVowelIndex !== -1) {
            let partToRepeat = word.slice(lastVowelIndex);
            return word + partToRepeat; // Add the repeated part to the word
        }
    }

    return word; // In case no vowel is found, return the word unchanged
};

let repeatingTranslate = function(sentence) {
    return sentence.split(' ').map(translateWord).join(' ');
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
