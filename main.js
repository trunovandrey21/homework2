//task 1
function reverseString(str) {
    return str.split('').reverse().join('');
}
//task2
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
//task3
function findGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}


