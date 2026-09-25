function calculateTax(amount){
    return 0.1 * amount 
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1, num2){
    return Math.max(num1, num2);
}

function isPalindrome(word){
    const reversedStr = word.split('').reverse().join('');
    return word === reversedStr;
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discountAmount = (discountPercentage / 100) * originalPrice;
    return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };