
function validateMasterCard(mastercard) {

    const cleanNumber = cardNumber.replace(/[\s-]/g, '');

    const card = /^5[1-5]\d{2}\d{12}|^22[2-9]\d{13}\d{12}|[3-6]\d{3}\d{12}$/;
} 

const mastercard = '1001 3452 6732 9843'.match(card);
console.log(mastercard);



///BRIEF EXPLANATION OF THE PATTTERN I USED:

// I worked on validation for a MASTERCARD
// I used the .test method as that is what will be appropriate to validate whether the value contains a match of the pattern ie true or false
// there are different patterns to check for mastercard and i combined the  patterns using the "or" sign "|" to demarcate them telling the code that if it doesn't match a particular one it could also check the next pattern.

// the first pattern:it starts with the caret for the digit 5, telling it that it must start with 5 for it to be valid and the digits between 1 and 5 and two more digits for the first group of four, after that follows the digits of 12 making it a total of 16 as is required for a mastercard //

// the second pattern: starts with a caret of 22 which ensures that the string must start with it and then followed by a range of 2-9 and  then 13 more digits from 1-9 to make a total of 16 digits.

// the third pattern: this has a caret for the first digit of 2 ensuring that the string must start with  it and then a range of 3-7 for the second digit, followed by a range of 0-2 for the third digit and then 13 more digits to sum 16.

// after the patterns comes the dollar sign $ which signifies the end of the pattern. 

//