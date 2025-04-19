// Your code here

function reverse(string) {
    return string.split("").reverse().join("");
}

export function isPalindrome(word) {

    if (word === ""){
        return false
    }
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverse(lowerCaseWord);
}