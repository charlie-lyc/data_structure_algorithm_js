/* Example of stack */ 
// Related functions: push, pop

const letters = []
const word = 'racecar'
let reverseWord = ''

// Put letters of word into stack
for (let i = 0; i < word.length; i ++) {
    letters.push(word[i])
}

// Pop off letters from stack in reverse order 
for (let i = 0; i < word.length; i ++) {
    reverseWord += letters.pop()
}

if (word === reverseWord) {
    console.log(word + ' is a palindrome')
} else {
    console.log(word + ' is not a palindrome')
}
