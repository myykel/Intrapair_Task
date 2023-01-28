# TASK 2
Given a string as an argument, write a function that returns the first recurring character in the string or null if there is no
recurring character. For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

## SOLUTION

I created a function takes in a string as an input and uses a for loop to iterate through the string.
Also I used an object charMap to keep track of the characters in the string. 
For each character in the string, it checks if that character already exists in the charMap object.
If it does, that means the character is recurring and the function returns it. 
If it does not exist, the function adds the character to the charMap object with a value of 1. 
After the for loop, it returns null if no recurring character is found.
