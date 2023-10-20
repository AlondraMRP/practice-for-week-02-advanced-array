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

let countVowels = function (array){
    let vowels = 'aeiou';
    let count = 0;
    let deleteRepeatedVow = array.filter((element, index) => array.indexOf(element) === index);
    let countedVowels = deleteRepeatedVow.forEach((element) => {
        if(vowels.includes(element)){
            count += 1;
        }
        return count;
    });

    return count;
}

let hasThreeVowels = function(string) {
    let strToArray = string.split('');
    let countedVowels = countVowels(strToArray);
        if (countedVowels >= 3){
            return true;
            } else {
            return false
        }

};

// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
