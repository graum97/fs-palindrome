// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// isPalindrom("Racecar")
// // returns false

// isPalindrom("racecar")
// // returns true

// Write your code below

//  SOLUTION 1
function checkPalidrome(word) {
    let newWord = word.split('').reverse().join('');
    if (newWord === word) {
        return true
    } else {
        return false
    }
}
console.log(checkPalidrome("racecar"))

// SOLUTION 2

function checkPalidrome2(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[word.length-1 - 1]) {
            return false
        } else {
            return true
        }
    }
}

console.log(checkPalidrome2("Friend"));