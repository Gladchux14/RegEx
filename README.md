# RegEx

### BRIEF EXPLANATION OF THE PATTTERN I USED:

# I worked on validation for a MASTERCARD

- I used the .test method as that is what will be appropriate to validate whether the value contains a match of the pattern ie true or false
 there are different patterns to check for mastercard and i combined the  patterns using the or sign "|" to demarcate them telling the code that if it doesn't match a particular one it could also check the next pattern.

- the first pattern:it starts with the digit 5, telling it that it must start with 5 for it to be valid and the digits between 1 and 5 and two more digits for the first group of four, after that follows the digits of 12 making it a total of 16 as is required for a mastercard.

- the second pattern: starts with 222 which ensures that the string must start with it and then followed by a range of 2-9 and  then 12 more digits from 1-9 to make a total of 16 digits.

- the third pattern: this has the first digit of 22 ensuring that the string must start with  it and then a range of 3-9 for the second digit and then 13 more digits to sum 16.

- the fourth pattern has a starting digits of 2720 that the card must start with followed by 12 more didgits to make 16.

- After the patterns comes the dollar sign $ which signifies the end of the pattern. 

- because the "or" sign was used signifying different groups , bracket is used to enclose them all to ensure that the caret and dollar sign for strict adherence and and ending of the regex applies to each of the groups in the pattern.

here is a picture of it running in the terminal:
![RegEx](https://github.com/user-attachments/assets/362e75dd-2706-4ecd-b6e5-81bf7f93e21e)
